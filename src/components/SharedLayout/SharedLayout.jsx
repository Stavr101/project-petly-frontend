import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
