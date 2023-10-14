// type MainLayoutProps = {
//   children: React.ReactNode;
// };

import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

function MainLayout() {
  return (
    <div className=" bg-background text-foreground min-h-[100dvh] flex  overflow-hidden">
      <ScrollRestoration />
      <Suspense
        fallback={<h1 className="text-red-600 text-6xl">Loading...</h1>}
      >
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MainLayout;
