import { useState, useEffect } from "react";

function Individuals ()  {
    const [individuals, setIndividuals] = useState([]);

    const getIndividuals = async () => {
        const response = await fetch('http://localhost:2626/individuals');
        const individuals = await response.json();
        setIndividuals(individuals);
      };
      
      useEffect(() => {
        getIndividuals();
      }, []);

      return (
    
        <div className="individuals">
          <h2> List of Individuals</h2>
          <table>
            <thead>
    
              <tr>
                <th>ID</th>
                <th>Nickname</th>
                <th>Seen On</th>
                <th>Species ID</th>
            
              </tr>
    
            </thead>
          </table>
    
      
    
            {individuals.map((one,index) => {
              return (
                <tr key={index}>
                  <td>{one.id}</td>
                  <td>{one.nick_name}</td>
                  <td>{one.seen_on}</td>
                  <td>{one.species_id}</td>
                  {/* <td><img src={trashicon} alt="Trash Can" onClick={() => handleDeleteAnimal(animal.id)}/></td> */}
                  {/* <td><button onClick={() => handleDeleteAnimal(animal.id)}>DELETE</button></td> */}
                </tr>
              
              );
            })}
            
    
        </div>
      );
}

export default Individuals;