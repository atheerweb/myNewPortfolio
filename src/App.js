import "./App.scss";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
