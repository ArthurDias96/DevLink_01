import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'

const router = createBrowserRouter({
  routes:{
    path: "/",
    element: <Home/>
  },
  routes:{
    path: "/admin",
    element: <Admin/>
  },
  routes:{
    path: "/login",
    element: <Login/>
  }
  
});
  

  export { router };