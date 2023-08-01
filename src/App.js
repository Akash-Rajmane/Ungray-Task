import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Campaigns from "./pages/Campaigns/Campaigns";
import Flows from "./pages/Flows/Flows";
import Integrations from "./pages/Integrations/Integrations";
import Customers from "./pages/Customers/Customers";
import Settings from "./pages/Settings/Settings";
import Team from "./pages/Team/Team";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <aside className="sidebar">
            <ul className="list">
              <li>
                <h1>Salesway</h1>
              </li>
              <li>
                <NavLink to="/settings">
                  <h3>Settings</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/team">
                  <h3>Team</h3>
                </NavLink>
              </li>
              <li>
                <h5 className="menu">MENU</h5>
              </li>
              <li>
                <NavLink to="/">
                  <h3>Dashboard</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/campaigns">
                  <h3>Campaigns</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/flows">
                  <h3>Flows</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/integrations">
                  <h3>Integrations</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/customers">
                  <h3>Customers</h3>
                </NavLink>
              </li>
            </ul>
          </aside>
          <main className="main">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/flows" element={<Flows />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
