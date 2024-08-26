/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ID_APP: number;
  readonly VITE_IS_MOBILE: boolean;
  readonly VITE_SESSION_TOKEN: string;
  readonly VITE_COMPANY_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
