import { createContext, useContext, useMemo, type PropsWithChildren } from 'react'
import { dictionaries, type Locale, type TranslationKey } from './dictionaries'

type TranslateParams = Record<string, string | number>

type I18nContextValue = {
  locale: Locale
  t: (key: TranslationKey, params?: TranslateParams) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const detectLocale = (): Locale => {
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('ru')) {
    return 'ru'
  }

  return 'en'
}

type I18nProviderProps = PropsWithChildren<{
  locale?: Locale
}>

export const I18nProvider = ({ children, locale = detectLocale() }: I18nProviderProps) => {
  const value = useMemo<I18nContextValue>(() => {
    const t = (key: TranslationKey, params?: TranslateParams): string => {
      const raw = String(dictionaries[locale][key])

      if (!params) {
        return raw
      }

      return Object.entries(params).reduce((acc, [paramKey, paramValue]) => {
        return acc.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(paramValue))
      }, raw)
    }

    return {
      locale,
      t,
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider')
  }

  return context
}
