import { useSideMenuStore } from "../../store";

export const useSideMenu = () => {
  const { isSideMenu, setSideMenu, isOpenMobileMenu, setOpenMobileMenu } = useSideMenuStore();

  const UpdateMenu = async (value: boolean) => {
    setSideMenu(value);
  };

  const UpdateMobileMenu = async (value: boolean) => {
    setOpenMobileMenu(value)
  }

  return {
    //Properties
    isSideMenu,
    isOpenMobileMenu,
    //Methods
    UpdateMenu,
    UpdateMobileMenu,
  };
};
