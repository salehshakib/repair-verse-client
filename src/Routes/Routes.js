import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
// import Login from "../Pages/";
// // import Orders from "../../Pages/Orders/Orders";
// import SignUp from "../../Pages/SignUp/SignUp";
// // import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp></SignUp>,
      // },
    ],
  },
]);

export default router;
