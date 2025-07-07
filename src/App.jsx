import { Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./Components/ScrollToHashElement";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MissionBox from "./Components/MissionBox";
import AboutUs from "./Components/AboutUs";
import Resources from "./Components/Resources";
import FAQ from "./Components/FAQ";
import TypesOfCare from "./Components/TypesOfCare";
import Podcast from "./Components/Podcast";
// import other pages as needed

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Nav />
      <div className="flex-1 px-0 py-0">
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<MissionBox />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/typesofcare" element={<TypesOfCare />} />
          {/* Add more pages like this */}
        </Routes>
      </div>
    </div>
  );
}

export default App;


