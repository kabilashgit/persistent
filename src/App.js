import "./App.css";
import AppHeader from "./pages/appHeader/AppHeader";
import Sidebar from "./pages/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Clients from "./pages/clients/Clients";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="px-3 main-header">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
