import { Route, Routes, useLocation } from "react-router-dom";
import { AboutMe, RecentProjects, Testimonials } from "../pages/index";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/recent-projects" element={<RecentProjects />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
