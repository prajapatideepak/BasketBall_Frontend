import React from 'react'
import AppRoutes from './routes'

function App() {
  if(process.env.NODE_ENV == 'development'){
    document.getElementById("root").classList.add('debug-screens')
  }
  return (
   <>
    <AppRoutes/>
   </>
  )
}

export default App
