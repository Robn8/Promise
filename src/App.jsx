import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MissionBox from "./Components/MissionBox";
import AboutUs from "./Components/AboutUs";
// import other pages as needed

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Nav />
      <div className="flex-1 px-0 py-0">
        <Routes>
          <Route path="/" element={<MissionBox />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* Add more pages like this */}
        </Routes>
      </div>
    </div>
  );
}

export default App;


