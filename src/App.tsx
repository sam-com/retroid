import { Navigate, Route, Routes } from "react-router-dom";
import { Bottombar } from "./components/bottombar/Bottombar";
import { AppLayout } from "./components/layout/AppLayout";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Consoles } from "./pages/Console";
import { Games } from "./pages/Games";
import { Home } from "./pages/Home";
import { Play } from "./pages/Play";

function App() {
  return (
    <AppLayout left={<Sidebar />} top={<Topbar />} bottom={<Bottombar />}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
