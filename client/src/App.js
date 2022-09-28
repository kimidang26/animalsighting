import "./App.css";
import Sightings from "./components/joinedsightings";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavBar.js";
import Species from "./components/animaldata/species.js";

function App() {
  return (
    <div className="App">
      <h1>Animal Sightings</h1>
      <Router>
        <NavigationBar />
          <Routes>
              <Route path='/species' element={<Species />}></Route>
              <Route path='/' element={<Sightings />}></Route>
          </Routes>
      </Router>

      {/* <Sightings /> */}
    </div>
  );
}

export default App;
