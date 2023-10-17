import MainLayout from "@/components/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import AcademicData from "@/pages/AcademicData";
import { AdditionalInfo } from "@/pages/AdditionalInfo";

import Home from "@/pages/Home";
import PersonalInfo from "@/pages/PersonalInfo";
import Result from "@/pages/Result";
import SavedCv from "@/pages/SavedCv";
import SizeSelection from "@/pages/SizeSelection";
import TechnicalSkills from "@/pages/TechnicalSkills";
import TemplateSelection from "@/pages/TemplateSelection";
import WorkExperience from "@/pages/WorkExperience";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      {
        path: "workExperience",
        element: <WorkExperience />,
      },
      {
        path: "techSkills",
        element: <TechnicalSkills />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "saved",
        element: <SavedCv />,
      },
    ],
  },
];

function AppRoutes() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
