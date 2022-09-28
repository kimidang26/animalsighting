import { useState, useEffect } from "react";
import Form from "../form";

function Species() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2626/species")
      .then((response) => response.json())
      .then((species) => {
            setSpecies(species);
          });
  }, []);

  const addSpecies = (newSpecies) => {
    //console.log(newStudent);
    //postStudent(newStudent);
    setSpecies((species) => [...species, newSpecies]);
  };

  return (
    
    <div className="species">
      <h2> List of Species </h2>
      <ul>
        {species.map((species, index) => (
          <li key={index}>
            {" "}
            Common Name: {species.common_name} Scientific Name: {species.scientific_name} Population: {species.population} Conservation Status: {species.conservation_status} Created On: {species.created_on.slice(0,10)}
          </li>
        ))}
      </ul>
      {/* <Form addStudent={addStudent} /> */}
    </div>
  );
}

export default Species;
