// type MainLayoutProps = {
//   children: React.ReactNode;
// };

import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

function MainLayout() {
  return (
    <div className=" bg-background text-foreground min-h-[100dvh] flex  overflow-hidden ">
      <ScrollRestoration />
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
