// import { FaFileInvoiceDollar } from "react-icons/fa6";
// import { GoChecklist } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { isMobile, SERVER_ROUTE } from "../../../Constants";
import { useNavMenu } from "../../../hooks/uiHooks/useNavMenuHook";
import { FaCrown } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export const NavMenu = () => {
  const { navMenu, UpdateNavMenu } = useNavMenu();

  return (
    <>
      <div className="grid grid-cols-2 gap-0 sm:gap-4 py-2 md:gap-4 md:m-4 justify-items-center theme_Multitraslados rounded-t-full  ">
        <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: true,
              nav2: false,
              nav3: false,
              nav4: false,
            });
          }}
        >
          <IoHome
            className="size-6 md:size-10 nav-menu-icons "
            title="ABC_ABC"
          />
        </NavLink>
        {/* <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}price`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: false,
              nav2: true,
              nav3: false,
              nav4: false,
            });
          }}
        >
          <FaFileInvoiceDollar className="size-6 md:size-10 nav-menu-icons" />
        </NavLink> */}
 {/*
        <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}list`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: false,
              nav2: false,
              nav3: true,
              nav4: false,
            });
          }}
        >
          <GoChecklist className="size-6 md:size-10 nav-menu-icons" />
        </NavLink> */}
        <NavLink
          to={`${isMobile ? "" : SERVER_ROUTE}Ranking`}
          className={"nav-menu w-full flex justify-center group"}
          onClick={() => {
            UpdateNavMenu({
              nav1: false,
              nav2: true,
              nav3: false,
              nav4: false,
            });
          }}
        >
          <FaCrown className="size-8 md:size-10 nav-menu-icons" />
        </NavLink>
        <div className="grid grid-cols-2 gap-0 sm:gap-4 md:gap-4 md:m-4 justify-items-center w-full absolute">
          <BgIconMenu active={navMenu.nav1} />
          <BgIconMenu active={navMenu.nav2} />
          <BgIconMenu active={navMenu.nav3} />
          <BgIconMenu active={navMenu.nav4} />
        </div>
      </div>
    </>
  );
};

const BgIconMenu = (props: any) => {
  const { active } = props;

  return (
    <div
      className={`${
        active
          ? "rounded-lg w-full h-[30vh] -translate-y-5 md:-translate-y-9"
          : "w-2 h-2 translate-y-14 md:translate-y-20 rounded-3xl"
      } bg-color3/70 transition-all duration-300 ease-in-out`}
    ></div>
  );
};
