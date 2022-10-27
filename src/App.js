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
import Courses from "./components/Shared/Courses/Courses";
import Categories from "./components/Shared/Categories/Categories";
import CourseDetails from "./components/Details/Details";
import CourseItems from "./components/Shared/CourseItems/CourseItems";
import Details from "./components/Details/Details";
import FAQ from "./components/FAQ/FAQ";
import Blog from "./components/Blog/Blog";
import Premium from "./components/Premium/Premium";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Terms from "./components/Terms/Terms";

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
        {
          path: "/courses",
          element: <Courses></Courses>,
          errorElement: <ErrorPage />,
        },
        {
          path: "/courses/singleCourse/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:5000/courses/singleCourse/${params.id}`),
          element: <Details />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/FAQ",
          element: <FAQ />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/blog",
          element: <Blog />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/terms",
          element: <Terms />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/courses/premium/:id",
          loader: ({ params }) =>
            fetch(`http://localhost:5000/courses/premium/${params.id}`),
          element: (
            <PrivateRoute>
              <Premium />
            </PrivateRoute>
          ),
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
