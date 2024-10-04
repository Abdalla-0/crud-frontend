import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Add from "../pages/Add/Add";
import Edit from "../pages/Edit/Edit";
import Details from "../pages/Details/Details";
import Post from "../components/ui/Post/Post";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "post", element: <Post /> },
      { path: "post/add", element: <Add /> },
      { path: "post/:id/edit", element: <Edit /> },
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }: { params: number }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "Please make sure to insert correct ID",
              status: 400,
            });
          }
          return params.id;
        },
      },
      { path: "/login", element: <Login /> },
    ],
  },
]);

const AppRputer = () => {
  return <RouterProvider router={router} />;
};
export default AppRputer;
