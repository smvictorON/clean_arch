import CreateCar from "../../applications/CreateCar";
import GetAllCars from "../../applications/GetAllCars";
import { ICar } from "../../domains/ICar";
import CarroRepoInMemory from "../repositories/CarRepoInMemory";
import { Request, Response } from 'express';

const carRepo = new CarroRepoInMemory()

export default class CarController {
  static createCar(req: Request, res: Response): void {
    const { year, model, brand, color } = req.body;

    const car: ICar = {
      color,
      year,
      model,
      brand
    }

    new CreateCar(carRepo).execute(car);

    res.status(201).send("Car created");
  }

  static getCars(req: Request, res: Response): void{
    const cars = new GetAllCars(carRepo).execute()

    res.json(cars)
  }
}