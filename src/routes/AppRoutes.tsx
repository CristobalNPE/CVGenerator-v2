import MainLayout from "@/components/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import AcademicData from "@/pages/academicData/AcademicData";
import { AdditionalInfo } from "@/pages/additionalInfo/AdditionalInfo";

import Home from "@/pages/home/Home";
import PersonalInfo from "@/pages/personalInfo/PersonalInfo";
import Result from "@/pages/result/Result";
import SavedCv from "@/pages/savedCv/SavedCv";
import SizeSelection from "@/pages/sizeSelection/SizeSelection";
import TechnicalSkills from "@/pages/technicalSkills/TechnicalSkills";
import TemplateSelection from "@/pages/templateSelection/TemplateSelection";
import WorkExperience from "@/pages/workExperience/WorkExperience";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement:<ErrorPage/>,
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
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
