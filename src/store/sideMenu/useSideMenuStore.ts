import { create } from "zustand";

interface Menu {
  isSideMenu: boolean;
  isOpenMobileMenu: boolean;
  setSideMenu: (x: boolean) => void;
  setOpenMobileMenu: (x: boolean) => void;
}

export const useSideMenuStore = create<Menu>((set) => ({
  isSideMenu: true,
  isOpenMobileMenu: false,
  setSideMenu: (state: boolean) =>
    set({
      isSideMenu: state,
    }),
  setOpenMobileMenu: (state: boolean) =>
    set({
      isOpenMobileMenu: state,
    }),
}));
