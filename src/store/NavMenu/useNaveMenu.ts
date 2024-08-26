import { create } from "zustand";

interface navMenu {
  navMenu: {
    nav1: boolean;
    nav2: boolean;
    nav3: boolean;
    nav4: boolean;
  };
  setNavMenu: (x: any) => void;
}

export const useNavMenuStore = create<navMenu>((set) => ({
  navMenu: {
    nav1: true,
    nav2: false,
    nav3: false,
    nav4: false,
  },
  setNavMenu: (state: any) =>
    set({
      navMenu: state,
    }),
}));
