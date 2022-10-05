import express from "express";
import db from "../db/db-connection.js";
const router = express.Router();

  // create the get request


//   ***********Get request***************
  router.get('/', async (req, res) => {
    try {
      const individuals = await db.query('SELECT * FROM individuals ORDER BY id', [true]);
      res.send(individuals);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

  export default router;