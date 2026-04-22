import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import App from './App.jsx'
// Import all of Bootstrap’s CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <App/>
   </BrowserRouter>
    
   
)
