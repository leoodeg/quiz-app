import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActivityOne from "./pages/ActivityOne";
import ActivityTwo from "./pages/ActivityTwo";

function App() {
  return (
    <div className="flex h-full text-coralblue">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activityone" element={<ActivityOne />} />
          <Route path="/activitytwo" element={<ActivityTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
