/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_USERNAME: string
  readonly VITE_API_PASSWORD: string
  readonly VITE_APP_ENV?: 'development' | 'production' | string
  readonly VITE_PRODUCTS_TEMPLATE?: 'default' | 'compact' | string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
