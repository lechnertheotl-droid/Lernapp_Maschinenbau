import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import App from './App.jsx'
import { AppProvider } from '@/context/AppContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { ToastProvider } from '@/components/ui/Toast'
import { FormulaPopoverProvider } from '@/utils/formulaPopoverContext'
import { FormulaPopoverRoot } from '@/components/ui/FormulaPopoverRoot'
import 'katex/dist/katex.min.css'
import './index.css'

registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <ToastProvider>
          <AppProvider>
            <FormulaPopoverProvider>
              <App />
              <FormulaPopoverRoot />
            </FormulaPopoverProvider>
          </AppProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
