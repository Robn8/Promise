import { Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./Components/ScrollToHashElement";
import ScrollToTop from "./Components/ScrollToTop";
import Nav from "./Components/Nav";
import MissionBox from "./Components/MissionBox";
import AboutUs from "./Components/AboutUs";
import Resources from "./Components/Resources";
import FreeMedicalEquipment from "./Components/FreeMedicalEquipment";
import ThriftStoreEquipment from "./Components/ThriftStoreEquipment";
import ForPurchaseEquipment from "./Components/ForPurchaseEquipment";
import FAQ from "./Components/FAQ";
import TypesOfCare from "./Components/TypesOfCare";
import ContactUs from "./Components/Contact";
import Podcast from "./Components/Podcast";
import Footer from "./Components/Footer";
// import other pages as needed

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Nav />
      <div className="flex-1 px-0 py-0">
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<MissionBox />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/equipment/free" element={<FreeMedicalEquipment />} />
          <Route path="/equipment/thrift" element={<ThriftStoreEquipment />} />
          <Route path="/equipment/purchase" element={<ForPurchaseEquipment />} />
          <Route path="/legal/table" element={<ForPurchaseEquipment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/typesofcare" element={<TypesOfCare />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more pages like this */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;


