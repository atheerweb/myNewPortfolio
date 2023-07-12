import { Footer, NavBar, AnimatedRoutes } from "./components/index";
import { InitialTransition } from "./components";
import { motion } from "framer-motion";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <InitialTransition />
      <div className="App font-body m-auto max-w-7xl min-h-screen">
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
