import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSideMenu } from "../../hooks";
import { NavLink } from "react-router-dom";
import {useState } from "react";
import { useTranslation } from "react-i18next";
import {SERVER_ROUTE } from "../../Constants";

export const SideBarExpand = ({ children, mobile }: any) => {
  const [_t, _i18n] = useTranslation("global");
  const { isSideMenu, UpdateMenu, isOpenMobileMenu, UpdateMobileMenu } =
    useSideMenu();

  return (
    <>
      <aside
        className={` ${
          mobile
            ? `absolute left-0 h-[100vh] top-0 z-[50] bg-skin-mainBG transition-all duration-300 ease-in-out 
          ${isOpenMobileMenu ? "translate-x-0" : "-translate-x-full"}`
            : "h-[90vh] md:h-[100vh] sticky top-0 z-[50] bg-skin-mainBG transition-all duration-300 ease-in-out border-r-1 border-skin-primary/30"
        }    ${isSideMenu ? "w-[200px]" : "w-[70px]"}`}
      >
        {mobile && (
          <div
            onClick={() => {
              UpdateMobileMenu(!isOpenMobileMenu);
            }}
          >
            <span
              className={`absolute i-cancel right-3 top-3 text-xl text-skin-primary`}
            ></span>
          </div>
        )}
        <div
          className={`${
            isSideMenu && !mobile ? "h-[15vh] w-[15vh]" : "h-[7vh] w-[7vh]"
          } 
        ${mobile ? "h-[9vh] w-[9vh] mt-5" : "my-auto"}
        flex mx-auto  transition-all duration-300 ease-in-out mt-1 `}
        >
          <img
            src={``}
            alt=""
          />
        </div>
        <nav className=" h-[75%] flex flex-col relative">
          {!mobile && (
            <div className="p-4 pb-2 flex justify-between items-center absolute right-0 -top-7">
              <a href=""></a>
              <button
                onClick={() => UpdateMenu(!isSideMenu)}
                className="p-1.5 rounded-3xl text-skin-sideText bg-skin-sideTextHover hover:bg-skin-sideText hover:text-skin-sideTextHover translate-x-4  md:translate-x-9  transition-all ease-in-out duration-300 z-50 hover:scale-[1.4] hover:border-2 border-1 border-skin-primary/30"
              >
                {isSideMenu ? <IoIosArrowBack /> : <IoIosArrowForward />}
              </button>
            </div>
          )}

          <ul
            className={`px-1 h-[90%] overflow-x-hidden mt-4 ${
              isSideMenu ? "flex-row justify-end items-end" : "flex-row"
            }`}
          >
            {children}
          </ul>
        </nav>
        <div className="grid p-3 h-[10%] border-t-2 border-skin-primary/30">
          <div
            className={`flex-col justify-center text-xs md:text-sm items-center overflow-hidden ${
              isSideMenu ? "w-full h-full" : "w-0"
            }`}
          >
            <div className="leading-4">
              <div className="flex gap-x-4 justify-center items-center">
                <img
                  src={`${SERVER_ROUTE}images/Logo.png`}
                  alt=""
                  className="w-[18%] md:w-[18%] h-[18%] md:h-[18%] justify-center"
                />
                <div className="">
                  <h4 className="font-bold text-skin-primary">
                    Desarrollos 6505
                  </h4>
                  <span className="text-xs text-slate-800 italic">
                    by: Hector Cortes, Giancarlo Cisneros
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`block lg:hidden bg-black/30 h-[100vh] w-[100vw] absolute top-0 left-0 ${
          isOpenMobileMenu ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 ease-in-out`}
      />
    </>
  );
};

export function SidebarItem({ icon, text, active, alert, to }: any) {
  const { isSideMenu } = useSideMenu();

  return (
    <div className="">
      <NavLink
        to={to}
        className={`
          text-[15px] relative flex ${
            isSideMenu ? "text-xs" : "justify-center text-md"
          } py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors peer z-30 text-skin-sideText hover:bg-skin-sideBGHover group
          ${
            active
              ? "hover:bg-skin-sideBGHover/30 text-Primary"
              : "hover:bg-skin-sideBGHover/30 text-Primary"
          }
      `}
      >
        <span
          className={`${
            isSideMenu ? "text-lg" : "text-lg"
          } group-hover:text-Primary`}
        >
          {icon}
        </span>
        <span
          className={` overflow-hidden group-hover:text-Primary ${
            isSideMenu ? "w-20 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded  ${
              isSideMenu ? "" : "top-2"
            }`}
          />
        )}
      </NavLink>
      {!isSideMenu && (
        <div
          className={`
            absolute left-full  rounded-md px-2 py-1 
             text-skin-primary text-sm
              opacity-[0.01] translate-x-3
            peer-hover:visible peer-hover:opacity-100 peer-hover:translate-x-0 transition duration-1000 ease-in-out
        `}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export function SidebarListExpand({ menus, active = false }: any) {
  const { isSideMenu, isOpenMobileMenu, UpdateMobileMenu } = useSideMenu();
  const [openItems, setOpenItems] = useState<any>([]);

  const handleItemToggle = (item: any) => {
    if (openItems.includes(item.id)) {
      setOpenItems(openItems.filter((id: any) => id != item.id));
    } else {
      setOpenItems([...openItems, item.id]);
    }
  };

  return (
    <>
      {menus.map((item: any) => (      
          <div key={item.id} className="flex-flow-rows items-center mx-auto">
            <NavLink
              to={
                item.idMenuFather || item.subMenu.length === 0 ? item.to : null
              }
              className={`text-[17px] font-semibold relative flex 
              ${
                item.subMenu.length > 0
                  ? openItems.includes(item.id) === true
                    ? "bg-skin-sideBGHover/70 text-skin-toolTipText"
                    : "text-skin-sideTextHover/80"
                  : "text-skin-sideTextHover/80"
              }
               ${
                 isSideMenu ? "text-xs " : "justify-center text-md"
               } items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors peer z-30 hover:bg-skin-sideBGHover/30 group ${
                active
                  ? "hover:bg-skin-primary/30 "
                  : "hover:bg-skin-sideBGHover/30 "
              }`}
              onClick={(_e) => {
                handleItemToggle(item);
                if (item.subMenu.length === 0)
                  UpdateMobileMenu(!isOpenMobileMenu);
              }}
            >
              <span className={`text-lg lg:text-base group-hover:text-skin-sideTextHover`}>
                {item.subMenu.length > 0 ? (
                  openItems.includes(item.id) === true ? (
                    <i className="text-md i-folder-open "></i>
                  ) : (
                    <i className=" text-md i-folder"></i>
                  )
                ) : (
                  item.icon
                )}
              </span>
              <span
                className={` overflow-hidden group-hover:text-skin-sideTextHover ${
                  isSideMenu ? "w-55 ml-3" : "w-0"
                }`}
              >
                {isSideMenu && (
                  <span className="font-semibold text-[13px]">
                    {item.label}
                  </span>
                )}
              </span>
            </NavLink>
            {!isSideMenu && (
              <div
                className={`absolute left-full  rounded-md px-3 py-1 bg-skin-sideBGHover/80 text-skin-sideTextHover text-sm opacity-[0.01] translate-x-2 -translate-y-8 peer-hover:visible peer-hover:opacity-100 peer-hover:translate-x-1 transition-all duration-500 ease-in-out font-semibold !z-[999999] border-1 border-skin-primary/20`}
              >
                {item.label}
              </div>
            )}
            <div className="mt-0 pl-3 bg-skin-sideBGHover/30 text-Primary rounded-md">
              {item.subMenu && openItems.includes(item.id) && (
                <SidebarListExpand menus={item.subMenu}></SidebarListExpand>
              )}
            </div>
          </div>
      ))}
    </>
  );
}
