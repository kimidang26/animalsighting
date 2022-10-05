import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

// in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body –


// routes from db
import db from './db/db-connection.js';
import speciesRouter from "./routes/species.js";
import individualsRouter from "./routes/individuals.js"
import sightingsRouter from "./routes/sightings.js"


const app = express();
const PORT = 2626;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/species', speciesRouter);
app.use('/individuals', individualsRouter);
app.use('/sightings', sightingsRouter);


// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});



// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
