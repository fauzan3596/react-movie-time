import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { FavoriteProvider } from './hooks/useFavoriteContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </FavoriteProvider>
  </StrictMode>,
)
