import "./App.css";
import Species from "./components/species.js";
import Sightings from "./components/joinedsightings";

function App() {
  return (
    <div className="App">
      Animal Sighting
      <Sightings />
      <Species />
    </div>
  );
}

export default App;
