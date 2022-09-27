import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

  // create the get request


//   ***********Get request***************
  router.get('/', async (req, res) => {
    try {
      const sightings = await db.query('SELECT * FROM sightings ORDER BY id', [true]);
      res.send(sightings);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

  export default router;