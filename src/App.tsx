import { Outlet, Route, Routes } from "react-router-dom";

import { Bottombar } from "./components/bottombar/Bottombar";
import { AppLayout } from "./components/layout/AppLayout";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { routes, RetroidRoute } from "./routing/routes";

const Layout = (
  <AppLayout left={<Sidebar />} top={<Topbar />} bottom={<Bottombar />}>
    <Outlet />
  </AppLayout>
);

function App() {
  const toRouterRoute = (route: RetroidRoute) => (
    <Route key={route.path} {...route} />
  );

  return (
    <Routes>
      <Route path="/" element={Layout}>
        {routes.map(toRouterRoute)}
      </Route>
    </Routes>
  );
}

export default App;
