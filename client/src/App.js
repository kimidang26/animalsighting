import "./App.css";
import Sightings from "./components/joinedsightings";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from "./components/NavBar.js";
import Species from "./components/animaldata/species.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <h1>Welcome to the Animal Sightings Page</h1>
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
