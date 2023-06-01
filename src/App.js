
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { useAppContext } from './context/AppContext'
import Model from './components/models/Model'
import Login from './components/login/Login'
const App = () => {
  const user = true;
  // const {user} = useAppContext();
  return (
    <>
    <RouterProvider router={router} />
    {
      !user   &&
    <Model bg=' rgba(0,0,0,.3)'  center >
      <Login/>
    </Model>
    }
    </>
  )
}

export default App