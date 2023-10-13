// type MainLayoutProps = {
//   children: React.ReactNode;
// };

import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

function MainLayout() {
  return (
    <div className=" bg-background text-foreground min-h-[100dvh] flex overflow-hidden">
      {/* //* Navbar? //* (children) \\ Outlet (wrapped in suspense) with max width */}
      <ScrollRestoration/>
      <Suspense fallback={<h1 className="text-red-600">Loading...</h1>}>
        <Outlet />
      </Suspense>
      {/* //* Footer? */}
    </div>
  );
}

export default MainLayout;
