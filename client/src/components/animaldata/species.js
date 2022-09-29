import { useState, useEffect } from "react";
import Form from "../form";
import DeleteAnimal from "./deletespecies";
// import trashicon from "./trashicon.png"

function Species() {
  const [species, setSpecies] = useState([]);
  const [id, setId] = useState([]);
  const [common_name, setCommon_Name] = useState([]);
  const [scientific_name, setScientific_name] = useState([]);
  const [population, setPopulation] = useState([]);
  const [date_created, setDate_created] = useState([]);


  // *************POST-UPDATE THE DATA****************
// Form is empty
  const handleAddFormChange = async (e) => {
    e.preventDefault();
    const newAnimal={
      id, 
      common_name,
      scientific_name,
      population,
      date_created,
    };
  
    const response = await fetch('http://localhost:2626/species', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAnimal)
    });
    const content = await response.json();
  
    setSpecies([...species, content]);
    setId('');
    setCommon_Name('');
    setScientific_name('');
    setPopulation('');
    setDate_created('');

  };


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
              <td>{animal.created_on}</td>
              {/* <td><img src={trashicon} alt="Trash Can" onClick={() => handleDeleteAnimal(animal.id)}/></td> */}
              <td><button onClick={() => handleDeleteAnimal(animal.id)}>DELETE</button></td>
            </tr>
          
          );
        })}
        

     
      {/* *********Form To add species ********* */}
      {/* //with onChange, event will pass in the handleAddFormChange for us */}

        <h2>Add A Species</h2>
        <form id="new-animal" action="#" onSubmit={handleAddFormChange}> 
          <input type="text" name="id" required="required" placeholder="enter id" onChange={(e) => setId(e.target.value)}/>
          <input type="text" name="common_name" required="required" placeholder="enter common name" onChange={(e) => setCommon_Name(e.target.value)}/>
          <input type="text" name="scientific_name" required="required" placeholder="enter scientific name" onChange={(e) => setScientific_name(e.target.value)}/>
          <input type="text" name="population" required="required" placeholder="enter size" onChange={(e) => setPopulation(e.target.value)}/>
          <input type="text" name="date_created" required="required" placeholder="YYYY-MM-DD" onChange={(e) => setDate_created(e.target.value)}/>

          <button type="submit" value="Add"> Add Species</button>
        </form>

    </div>
  );
}

export default Species;
