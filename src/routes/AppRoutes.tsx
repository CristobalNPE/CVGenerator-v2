import MainLayout from "@/components/layout/MainLayout";
import Home from "@/features/misc/routes/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
