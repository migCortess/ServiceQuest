import { create } from "zustand";

interface Company {
  Company: any;
  Application: string | null;
  MenuList: string | null;
  Type: "Simple" | "Complex" | null;
  setCompany: (x: any) => void;
  setApplication: (x: any) => void;
  setMenuList: (x: any) => void;
  setType: (x:"Simple" | "Complex") => void;
}

export const useCompanyStore = create<Company>((set) => ({
  Company: null,
  Application: null,
  MenuList: null,
  Type: null,
  setCompany: (state: any) =>
    set({
      Company: state,
    }),
  setApplication: (state: any) =>
    set({
      Application: state,
    }),
  setMenuList: (state: any) =>
    set({
      MenuList: state,
    }),
  setType: (state: "Simple" | "Complex") =>
    set({
      Type: state,
    }),
}));
