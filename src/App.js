/** @format */

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Main from "./LayOut/Main";
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/header",
          element: <Header></Header>,
          errorElement: <ErrorPage />,
        },

        {
          path: "/login",
          element: <LogIn></LogIn>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/register",
          element: <Register></Register>,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
