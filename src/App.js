import { Route, Routes, Link } from "react-router-dom";
import LandingPage from "./Components/Home/LandingPage.jsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
