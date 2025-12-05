import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Removed StrictMode to fix React Beautiful DnD compatibility with React 18
createRoot(document.getElementById('root')).render(
  <App />
)
