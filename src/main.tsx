import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'
import { I18nProvider, ToastProvider } from './shared'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <Provider store={store}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </Provider>
    </I18nProvider>
  </StrictMode>,
)
