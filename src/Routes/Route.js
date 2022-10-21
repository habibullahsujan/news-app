import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import LeftSideNav from "../Components/LeftSideNav";
import Login from "../Components/Login";
import NewsCategory from "../Components/NewsCategory";
import NewsDetails from "../Components/NewsDetails";
import Profile from "../Components/Profile";
import RightSideNav from "../Components/RightSideNav";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return fetch("http://localhost:4000/news");
        },
      },
      { path: "/", element: <LeftSideNav /> },
      { path: "/", element: <RightSideNav /> },
      {
        path: "/category/:id",
        element: <NewsCategory />,
        loader: ({ params }) => {
          return fetch(`http://localhost:4000/category/${params.id}`);
        },
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/signup", element: <SignUp /> },
      { path: "/profile", element:<PrivateRoute> <Profile /></PrivateRoute> },
    ],
  },
]);
