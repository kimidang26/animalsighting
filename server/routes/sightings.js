import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

  // create the get request


//   ***********Get request***************
  router.get('/', async (req, res) => {
    try {
      const sightings = await db.query('SELECT * FROM sightings ORDER BY id');
      res.send(sightings);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

  router.get('/recent', async (req, res) => {
    try {
      const sightings = await db.query('SELECT sightings.id, sightings.date_time, individuals.nick_name, species.common_name, sightings.healthy, sightings.location FROM sightings JOIN individuals ON sightings.individual_id=individuals.id JOIN species ON species.id=individuals.species_id;');
      res.send(sightings);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



  export default router;