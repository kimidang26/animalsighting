import { useState, useEffect } from "react";
import Form from "../form";
import DeleteAnimal from "./deletespecies";

function Species() {
  const [species, setSpecies] = useState([]);

  //****************Fetches/gets Species Table***********/
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


//**************Delete 1 Animal from Species Table**************/

const handleDeleteAnimal = async (handleDeleteAnimalCallback) => {
  const response = await fetch(`http://localhost:2626/species/${handleDeleteAnimalCallback}`, {
    method: 'DELETE',
  })
  await response.json();
  const deleteAnimalFunction = species.filter((animal) => animal.id !== handleDeleteAnimalCallback);
  setSpecies(deleteAnimalFunction);
}

  return (
    
    <div className="species">
      <h2> List of Species </h2>
      <table>
        <thead>

          <tr>
            <th>ID</th>
            <th>Common Name</th>
            <th>Scientific Name</th>
            <th>Population</th>
            <th>Conservation Status</th>
            <th>Created On</th>
          </tr>

        </thead>
      </table>

  

        {species.map((animal,index) => {
          return (
            <tr key={index}>
              <td>{animal.id}</td>
              <td>{animal.common_name}</td>
              <td>{animal.scientific_name}</td>
              <td>{animal.population}</td>
              <td>{animal.conservation_status}</td>
              <td>{animal.created_on.slice(0,10)}</td>
              <td><button onClick={() => handleDeleteAnimal(animal.id)}></button></td>
            </tr>
          
          );
        })}
        

      {/* <Form addStudent={addStudent} /> */}
    </div>
  );
}

export default Species;
