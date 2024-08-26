import express from 'express';
import {
  CreateCarCtrl,
  UpdateCarCtrl,
  DeleteCarCtrl,
  GetAllCarsCtrl,
  GetCarByIdCtrl,
  GetCarsByModelCtrl,
} from '../controllers';
import CarRepoInMemory from "../repositories/CarRepoInMemory";

const router = express.Router();

const carRepo = new CarRepoInMemory()

router.post("/", (req, res) => new CreateCarCtrl(carRepo).execute(req, res));
router.get("/", (req, res) => new GetAllCarsCtrl(carRepo).execute(req, res));
router.get("/:id", (req, res) => new GetCarByIdCtrl(carRepo).execute(req, res));
router.patch("/:id", (req, res) => new UpdateCarCtrl(carRepo).execute(req, res));
router.delete("/:id", (req, res) => new DeleteCarCtrl(carRepo).execute(req, res));
router.get("/model/:model", (req, res) => new GetCarsByModelCtrl(carRepo).execute(req, res));

export default router;
