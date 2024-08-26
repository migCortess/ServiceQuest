import { create } from "zustand";
interface Auth {
  status: "CHECKING" | "AUTHENTICATED" | "NOT_AUTHENTICATED";
  user: any | null;
  errorMessage: string | null;
  session: boolean;
  onChecking: () => void;
  onLogin: (x: any) => void;
  onLogout: (x: any) => void;
  clearErrorMessage: () => void;
  onSession: (x: any) => void;
}

export const useAuthStore = create<Auth>((set) => ({
  status: "NOT_AUTHENTICATED", // 'checking' | 'authenticated' | 'not-authenticated'
  user: null,
  errorMessage: null,
  session: false,
  onChecking: () =>
    set({
      status: "CHECKING",
      user: null,
      errorMessage: null,
    }),
  onLogin: (state: any) =>
    set({
      status: "AUTHENTICATED",
      user: state,
      errorMessage: null,
    }),
  onLogout: (state: any) =>
    set({
      status: "NOT_AUTHENTICATED",
      user: null,
      errorMessage: state,
    }),
  clearErrorMessage: () =>
    set({
      errorMessage: null,
    }),
  onSession: (state: any) =>
    set({
      session: state,
    }),
}));
