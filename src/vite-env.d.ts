/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOTCAMP_REGISTRATION_FORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
