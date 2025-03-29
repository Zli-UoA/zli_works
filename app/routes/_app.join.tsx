import { Outlet } from "react-router";

export default () => {
  return (
    <div className="min-h-screen bg-brand-secondary text-brand-light">
      <div className="py-20 px-4 max-w-4xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};
