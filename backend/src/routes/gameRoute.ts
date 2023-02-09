import { Router } from "express";
import { getAllGames, createGame, getGameById, updateGame, deleteGame } from '../controllers/gameControllers';

const router:Router = Router();

/* Games Routes */

router.get("/", getAllGames);
router.get("/game/:id", getGameById);
router.post("/game", createGame);
router.put("/game/:id", updateGame);
router.delete("/game/:id", deleteGame);


export default router;