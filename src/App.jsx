import "./App.css";
import { Route, Routes } from "react-router-dom";

/* import LandingPage from "./pages/LandingPage.jsx"; */
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
