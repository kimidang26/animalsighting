import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

  // create the get request


//   ***********Get request***************
  router.get('/', async (req, res) => {
    try {
      const species = await db.query('SELECT * FROM species ORDER BY id');
      res.send(species);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
  
  // ***********************create the POST request (update)****************************
  router.post('/', async (req, res) => {
    const newSpecies = {
      id: req.body.id,
      common_name: req.body.common_name,
      scientific_name: req.body.scientific_name,
      population: req.body.population,
      conservation_status: req.body.conservation_status,
      created_on: req.body.created_on,
  
    }
    console.log([newSpecies.common_name, newSpecies.scientific_name]);
    try {
    const updateSpecies = await db.query(
      'INSERT INTO species(id, common_name, scientific_name, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [newSpecies.id, newSpecies.common_name, newSpecies.scientific_name, newSpecies.population, newSpecies.conservation_status, newSpecies.created_on ],
    );
    console.log(req.body);
    res.send(updateSpecies);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });


//   ******DELETE STUFF***************
router.delete('/:id', async (req, res) => {
  // : acts as a placeholder
  const speciesId = req.params.id;
  try {
    await db.none('DELETE FROM species WHERE id=$1', [speciesId]);
    res.send({ status: 'success' });
  } catch (e) {
    return res.status(400).json({ e });
  }
});




  export default router;