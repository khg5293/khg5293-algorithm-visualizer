import { NavLink, Route, Routes } from "react-router-dom";
import SortingLab from "./pages/SortingLab";
import GraphExplorer from "./pages/GraphExplorer";
import ComplexityLab from "./pages/ComplexityLab";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">K</div>

          <div>
            <strong>khg5293</strong>
            <span>Computational Research Console</span>
          </div>
        </div>

        <nav className="navigation">
          <NavLink to="/">Sorting Lab</NavLink>
          <NavLink to="/graphs">Graph Explorer</NavLink>
          <NavLink to="/complexity">Complexity</NavLink>
          <NavLink to="/about">Research Notes</NavLink>
        </nav>

        <div className="runtime-status">
          <span className="status-light" />
          Runtime operational
        </div>
      </header>

      <Routes>
        <Route path="/" element={<SortingLab />} />
        <Route path="/graphs" element={<GraphExplorer />} />
        <Route path="/complexity" element={<ComplexityLab />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <div>
          <strong>khg5293</strong>
          <span>Computational experiments</span>
        </div>

        <p>React + TypeScript experimental environment</p>
      </footer>
    </div>
  );
}

export default App;