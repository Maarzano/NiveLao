import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/Home/App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
