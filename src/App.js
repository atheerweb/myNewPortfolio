import { Footer, NavBar, AnimatedRoutes } from "./components/index";
import { InitialTransition } from "./components";
import { motion } from "framer-motion";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <InitialTransition />
      <div className="App font-body m-auto max-w-7xl">
        <NavBar />
        <div className="p-4 sm:px-0 sm:py-10 min-h-96">
          <AnimatedRoutes />
        </div>
      </div>
      <div className="max-w-screen-2xl">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
