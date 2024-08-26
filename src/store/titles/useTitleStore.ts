import { create } from "zustand";

interface title {
  titleName: string | null;
  setTitle: (x: any) => void;
}

export const useTitleStore = create<title>((set) => ({
  titleName: "",
  setTitle: (state: any) =>
    set({
      titleName: state,
    }),
}));
