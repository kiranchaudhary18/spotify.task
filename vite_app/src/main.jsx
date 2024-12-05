import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Homepage from './Homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
