import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import './assets/css/style.css'
import Inicial from './assets/components/home/login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Inicial></Inicial>
  </StrictMode>,
)
