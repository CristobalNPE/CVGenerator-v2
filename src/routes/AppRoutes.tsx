import MainLayout from "@/components/layout/MainLayout";
import AcademicData from "@/pages/academicData/AcademicData";
import { AdditionalInfo } from "@/pages/additionalInfo/AdditionalInfo";

import Home from "@/pages/home/Home";
import PersonalInfo from "@/pages/personalInfo/PersonalInfo";
import SizeSelection from "@/pages/sizeSelection/SizeSelection";
import TemplateSelection from "@/pages/templateSelection/TemplateSelection";
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
        {
          path: "size",
          element: <SizeSelection />,
        },
        {
          path: "template",
          element: <TemplateSelection />,
        },
        {
          path: "personalInfo",
          element: <PersonalInfo />,
        },
        {
          path: "additionalInfo",
          element: <AdditionalInfo />,
        },
        {
          path: "academicData",
          element: <AcademicData />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
