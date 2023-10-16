import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { Suspense } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();

  return (
    <div className=" bg-background text-foreground min-h-[100dvh] flex flex-col   items-center  overflow-hidden ">
      <ScrollRestoration />
      {location.pathname !== "/" && <NavigationBar />}
      <Suspense
        fallback={<h1 className="text-red-600 text-6xl">Loading...</h1>}
      >
        <Outlet />
      </Suspense>
      {/* <Button variant={"secondary"} className="rounded-full p-1 h-14 w-14  bottom-0"><Menu size={30} /></Button> */}
    </div>
  );
}

export default MainLayout;
