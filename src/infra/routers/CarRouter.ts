import express from 'express';
import CarController from '../controllers/CarController';

const router = express.Router();

router.post("/", (req, res) => CarController.createCar(req, res));
router.get("/", (req, res) => CarController.getCars(req, res));
router.get("/:id", (req, res) => CarController.getCarById(req, res));
router.patch("/:id", (req, res) => CarController.updateCar(req, res));
router.delete("/:id", (req, res) => CarController.deleteCar(req, res));
router.get("/model/:model", (req, res) => CarController.getCarsByModel(req, res));

export default router;
