import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LandscapeUI from './components/LandscapeUI.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandscapeUI></LandscapeUI>
  </StrictMode>,
)
