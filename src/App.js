import { Footer, NavBar, AnimatedRoutes } from "./components/index";

import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App font-body mx-24">
        <NavBar />
        <div className="py-10">
          <AnimatedRoutes />
        </div>
    </div>
        <Footer />
      </Router>
  );
}

export default App;
