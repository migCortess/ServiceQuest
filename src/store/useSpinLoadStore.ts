import { create } from "zustand";

export interface ISpinLoad {
  SpinLoad: boolean;
  ShowLoad: () => void;
  HideLoad: () => void;
}

export const useSpinLoadStore = create<ISpinLoad>((set) => ({
  SpinLoad: false,
  ShowLoad: () => set({ SpinLoad: true }),
  HideLoad: () => set({ SpinLoad: false }),
}));
