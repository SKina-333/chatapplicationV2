import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Login from "../sections/LoginPage.jsx";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/login',
    element:<Login/>
  },
  

]);

export default Router;