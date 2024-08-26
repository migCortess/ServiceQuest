import { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { UNAUTHORIZEDPAGE_SUPPLIERPORTAL } from '../../Constants';
// import { useAuth, useSideMenu } from '../../hooks';
// import { ID_HOMEPAGE, UNAUTHORIZEDPAGE } from "../../../Constants";

const SidebarContext = createContext({});

type SideProps = {
  children : React.ReactNode
}

export default function SideBar({ children }:SideProps) {
  const [expanded, _setExpanded] = useState(false);
  const [active, setActive] = useState(false);
  // const [isSelected, setIsSelected] = useState(false);

  const resetActive = () => {
    // children!.map((x:any) =>{
    //     x.props.active = false
    // })
  };

  return (
    // h-[94vh]
    <aside className="h-[100vh] bg-skin-sideBG w-[200px] z-10 border-none ">
      <div className="bg-skin-primary/5 border-b-4 border-skin-primary/30 mx-auto">
        <img
          className="p-2 mx-auto"
          src="https://siteqa.appstorage.net/csS/6505/UBILL/IMG/UBill.svg"
          width="130"
        ></img>{" "}
      </div>
      <nav className="h-[calc(100%-136px)] flex flex-col border-r shadow-sm ">
        <SidebarContext.Provider
          value={{ expanded, active, setActive, resetActive }}
        >
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t border-skin-primary/30 flex p-3 text-skin-primary font-semibold">
          Developed by 6505
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem(props:{
  icon: any,
  text: any,
  path: any,
  id :any,
  SelectedMenu: any,
  HandleSelectedMenu: any,
  DataLinks: any,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    props.DataLinks?.map((x:any) => {
      if (location.pathname === x.to) {
        props.HandleSelectedMenu(x.id);
      } else {
        if (location.pathname === UNAUTHORIZEDPAGE_SUPPLIERPORTAL) {
          props.HandleSelectedMenu(null);
        } else {
          props.HandleSelectedMenu(0);
        }
      }
    });
  }, [location.pathname]);

  console.log(props)

  return (
    <>
      <div className="my-4">
        <li
          className={`relative flex my-3 font-medium cursor-pointer  transition-all ease-in-out duration-300  
          hover:scale-110 hover:rounded-xl hover:shadow-ubill group z-10 w-[100px] h-[100px] mx-auto
        ${
          props.SelectedMenu === props.id
            ? "bg-skin-secondary/20 rounded-xl shadow-ubill w-[110%] items-center justify-start"
            : "hover:bg-skin-primary text-gray-600  bg-skin-sideIconsBG  rounded-[100px] items-center justify-center"
        }
    `}
          onClick={() => {
            if (props.SelectedMenu === props.id) {
              navigate(props.path);
            } else {
              props.HandleSelectedMenu(props.id);
              navigate(props.path);
            }
          }}
        >
          <div
            className={` p-2 flex font-medium cursor-pointer  transition-all ease-in-out duration-300 
           ${
            props.SelectedMenu === props.id
               ? "bg-skin-secondary rounded-xl  w-[110%] items-center justify-center "
               : "  bg-transparent rounded-[100px] items-center justify-center"
           }`}
          >
            <span
              className={`text-skin-sideBG text-5xl p-2 group-hover:scale-150 z-50 group-hover:text-white transition-all duration-700 ease-in-out ${
                props.SelectedMenu === props.id ? "scale-125" : ""
              } transform  group-hover:rotate-y-360`}
            >
              {props.icon}
            </span>
          </div>

          <div
            className={`absolute w-10 h-10 rotate-45  bg-skin-mainBG  rounded-[4px] transition ease-in-out duration-300 border-double border-skin-secondary
            ${
              props.SelectedMenu === props.id
                ? "translate-x-[10.1rem] scale-100 border-l-8 border-b-8"
                : "translate-x-24 border-l-0 border-b-0 scale-0"
            }`}
          />

          <div
            className={`absolute left-full rounded-md px-3 py-1 ml-6 bg-skin-primary/20 text-base -translate-x-24 transition-all ease-in-out duration-300 scale-0 opacity-5 font-bold -z-10
            group-hover:opacity-100 group-hover:translate-x-3 group-hover:text-skin-toolTipText group-hover:scale-100`}
          >
            {props.text}
          </div>
        </li>
      </div>
    </>
  );
}
