import { create } from "zustand";
import { User } from "../../@Types/base";

export interface IUserStore {
  User: null | User;
  UserSupplier: null | any;
  ConnectionSocket: boolean | null;
  AppList: number;
  setUser: (state: User) => void;
  onConnectionSocket: (state: boolean) => void;
  onFillUserSupplier: (state: any) => void;
  onUpdateAppList: (state: any) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  User: null,
  UserSupplier: null,
  ConnectionSocket: null,
  AppList: 0,
  setUser: (state) =>
    set({
      User: state,
    }),
  onConnectionSocket: (state) =>
    set({
      ConnectionSocket: state,
    }),
  onFillUserSupplier: (state) =>
    set({
      UserSupplier: state,
    }),
  onUpdateAppList: (state) =>
    set({
      AppList: state,
    }),
}));
