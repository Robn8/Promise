import Header from "./Components/Header";
import Nav from "./Components/Nav";
import MissionBox from "./Components/MissionBox";
import Mission from "./Components/Mission";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Nav />
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <MissionBox />
        </div>
        
      </div>
    </div>
  );
}

export default App;

