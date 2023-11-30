import { Route, Routes } from 'react-router-dom';
import LocationEx from './pages/Location';

// import Home from './pages/Home';
// import About from './pages/About';

export default function LoactionRoutes() {
  return (
    <Routes>
      <Route path="*" element={<LocationEx />} />
      {/* <Route path="home" element={<Home />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Routes>
  );
}
