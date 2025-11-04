import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import Profile from "./components/profilePage";
import DetailedView from "./components/detailedView";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project/:id" element={<DetailedView />} />
      </Routes>
  );
}

export default App;
