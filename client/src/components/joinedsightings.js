import { useState, useEffect } from "react";
import DeleteSighting from "./deletesighting.js";
import trash from "./animaldata/trash.jpeg"

function Sightings() {
  const [individuals, setIndividuals] = useState([]);
  const [sightings, setSightings] = useState([]);
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2626/sightings/recent")
      .then((response) => response.json())
      .then((sightings) => {
            setSightings(sightings);
          });
  }, []);

  const addSightings = (newSightings) => {
    //console.log(newStudent);
    //postStudent(newStudent);
    setSightings((sightings) => [...sightings, newSightings]);
  };

//**************Delete 1 Sighting from sighting joined table**************/

const handleDeleteSighting = async (handleDeleteSightingCallback) => {
  const response = await fetch(`http://localhost:2626/sightings/recent/${handleDeleteSightingCallback}`, {
    method: 'DELETE',
  })
  await response.json();
  const deleteSightingFunction = sightings.filter((sight) => sight.id !== handleDeleteSightingCallback);
  setSightings(deleteSightingFunction);
}

  return (
    
    <div className="sightings">
      <h1>List of Sightings</h1>
      <table>
        <thead>
          <tr>
            <th>Sightings ID</th>
            <th>Date/Time of Seen</th>
            <th>Nickname</th>
            <th>Common Name</th>
            <th>Health</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {sightings.map((sight, index) => {
            return (
              <tr key = {index}>
                 <td>{sight.id}</td>
                <td>{sight.date_time.slice(0,10)}</td>
                <td>{sight.nick_name}</td>
                <td>{sight.common_name}</td>
                <td>{sight.healthy.toString() === "true" ? "Healthy" : "Sick"}</td>
                <td>{sight.location}</td>
                <td><img src={trash} className="trash_icon" onClick={() => handleDeleteSighting(sight.id)}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}

export default Sightings;