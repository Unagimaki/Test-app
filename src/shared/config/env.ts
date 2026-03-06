const requireEnv = (value: string | undefined, key: string): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }

  return value
}

const getProductsTemplate = (value: string | undefined): 'default' | 'compact' => {
  if (value === 'compact') {
    return 'compact'
  }

  return 'default'
}

export const env = {
  appEnv: import.meta.env.VITE_APP_ENV ?? (import.meta.env.PROD ? 'production' : 'development'),
  apiBaseUrl: requireEnv(import.meta.env.VITE_API_BASE_URL, 'VITE_API_BASE_URL'),
  apiUsername: requireEnv(import.meta.env.VITE_API_USERNAME, 'VITE_API_USERNAME'),
  apiPassword: requireEnv(import.meta.env.VITE_API_PASSWORD, 'VITE_API_PASSWORD'),
  productsTemplate: getProductsTemplate(import.meta.env.VITE_PRODUCTS_TEMPLATE),
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
}
