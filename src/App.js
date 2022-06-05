import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./pages/appHeader/AppHeader";
import Sidebar from "./pages/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="px-3 main-header">
        <AppHeader />
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
