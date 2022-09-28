import { useState, useEffect } from "react";


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

  return (
    
    <div className="sightings">
      <table>
        <thead>
          <tr>
            <th>Sightings ID</th>
            <th>Date/Time</th>
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
                 <td>{sight.date_time.slice(0,10)}</td>
                <td>{sight.date_time.slice(0,10)}</td>
                <td>{sight.nick_name}</td>
                <td>{sight.common_name}</td>
                <td>{sight.healthy.toString() === "true" ? "Healthy" : "Sick"}</td>
                <td>{sight.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>



      {/* <h2> List of Sightings </h2>
      <ul>
        {sightings.map((sightings, index) => (
          <li key={index}>
            {" "}
            Common Name: {sightings.id} Scientific Name: {sightings.date_time} Population: {individuals.nick_name} Conservation Status: {species.common_name} Created On: {sightings.healthy}  Created On: {sightings.location} 
          </li>
        ))}
      </ul> */}

    </div>
  );
}

export default Sightings;