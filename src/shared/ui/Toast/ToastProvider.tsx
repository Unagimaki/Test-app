import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './ToastProvider.module.scss'

type ToastType = 'info' | 'error' | 'success'

type Toast = {
  id: number
  message: string
  type: ToastType
}

type ShowToastParams = {
  message: string
  type?: ToastType
  durationMs?: number
}

type ToastContextValue = {
  showToast: (params: ShowToastParams) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(({ message, type = 'info', durationMs = 2800 }: ShowToastParams) => {
    const id = Date.now() + Math.floor(Math.random() * 1000)

    setToasts((prev) => [...prev, { id, message, type }])

    window.setTimeout(() => {
      removeToast(id)
    }, durationMs)
  }, [removeToast])

  const value = useMemo(
    () => ({
      showToast,
    }),
    [showToast],
  )

  return (
    <ToastContext.Provider value={value}>
      {children}

      <div className={styles.viewport}>
        {toasts.map((toast) => (
          <div key={toast.id} className={clsx(styles.toast, styles[`toast_${toast.type}`])}>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used inside ToastProvider')
  }

  return context
}
