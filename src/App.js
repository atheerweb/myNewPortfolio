import { Footer, NavBar, AnimatedRoutes } from "./components/index";

import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App font-body">
      <Router>
        <div className="background"></div>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
