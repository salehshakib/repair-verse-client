import Main from "../Layout/Main/Main";

import Home from "../Pages/Home/Home/Home";
import AddService from "../Pages/AddService/AddService";
import Services from "../Pages/Services/Services";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import Register from "../Pages/LogIn/Register/Register";
import MyReviews from "../Pages/MyReviews/MyReviews/MyReviews";
import Blog from "../Pages/Blog/Blog.js";

import Error from "../Pages/Error/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails/ServiceDetails";

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
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/details",
        element: <ServiceDetails></ServiceDetails>,
      },

      // {
      //   path: "/services/:id",
      //   element: <ServiceDetails></ServiceDetails>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://bridal-makeover-server.vercel.app/services/${params.id}`
      //     ),
      // },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
      },
      // {
      //   path: "/reviewUpdate/:id",
      //   element: <MyReviewUpdate></MyReviewUpdate>,
      //   loader: ({ params }) =>
      //     fetch(
      //       `https://bridal-makeover-server.vercel.app/reviewUpdate/${params.id}`
      //     ),
      // },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
