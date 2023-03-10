import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme='colored'
      draggable
      pauseOnHover
      className='z-[9999999]'
    />
    <App />
  </React.StrictMode>,
);