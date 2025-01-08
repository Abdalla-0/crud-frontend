import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WithGuard from "../components/Feedback/WithGuard";
import App from "../App";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import React, { Suspense } from "react";

const AddPost = React.lazy(() => import("../pages/Add/Add"));
const Edit = React.lazy(() => import("../pages/Edit/Edit"));
const Details = React.lazy(() => import("../pages/Details/Details"));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const paramHandler = ({ params }: { params: any }) => {
  if (!params.id) {
    throw new Response("Bad Request", {
      statusText: "Please make sure to insert correct ID",
      status: 400,
    });
  }
  return params.id;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "post/add",
        element: (
          <Suspense fallback={<span>Loading please wait...</span>}>
            <WithGuard>
              <AddPost />
            </WithGuard>
          </Suspense>
        ),
      },
      {
        path: "post/:id",

        element: (
          <Suspense fallback={<span>Loading please wait...</span>}>
            <Details />
          </Suspense>
        ),

        loader: paramHandler,
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback={<span>Loading please wait from susbense</span>}>
            <WithGuard>
              <Edit />
            </WithGuard>
          </Suspense>
        ),
        loader: paramHandler,
      },
    ],
  },
]);

const AppRputer = () => {
  return <RouterProvider router={router} />;
};
export default AppRputer;
