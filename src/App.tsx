import { Navigate, Route, Routes } from "react-router-dom";
import { Bottombar } from "./components/bottombar/Bottombar";
import { AppLayout } from "./components/layout/AppLayout";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { routes, type AppRoute } from "./routing/routes";

function App() {
  const toRouterRoute = (route: AppRoute) => (
    <Route key={route.path} {...route} />
  );

  return (
    <AppLayout left={<Sidebar />} top={<Topbar />} bottom={<Bottombar />}>
      <Routes>
        {routes.map(toRouterRoute)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
