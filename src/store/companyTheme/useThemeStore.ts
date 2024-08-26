import { create } from "zustand";

interface theme {
  companyTheme: string | null;
  setCompanyTheme: (x: any) => void;
}

export const useCompanyTheme = create<theme>((set) => ({
  companyTheme: "",
  setCompanyTheme: (state: any) =>
    set({
      companyTheme: state,
    }),
}));
