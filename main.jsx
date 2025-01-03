import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Paul from './Paul.jsx'
import App from './App.jsx'
import Ref from './Ref.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ref/>
  </StrictMode>
)
