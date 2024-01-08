import { DefaultLayout, AnimatedRoutes } from "./components/index";
import { InitialTransition } from "./components";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <InitialTransition />
      <DefaultLayout content={<AnimatedRoutes />} />
    </Router>
  );
}

export default App;
