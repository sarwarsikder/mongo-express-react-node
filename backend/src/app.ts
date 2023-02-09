import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app:Application = express();
app.use(express.json());


/* Here we will import routes */
import gameRoute from './routes/gameRoute';


/* Here we will decleare routes paths */
app.get("/",(req:Request, res:Response) => {
    res.send({"message": "its works"});
});


app.use("/api/games", gameRoute);


export{app}