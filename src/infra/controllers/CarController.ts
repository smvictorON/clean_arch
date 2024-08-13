import CreateCar from "../../applications/CreateCar";
import GetAllCars from "../../applications/GetAllCars";
import GetCarsByModel from "../../applications/GetCarsByModel";
import GetCarById from "../../applications/GetCarById";
import { ICar } from "../../domains/ICar";
import CarRepoInMemory from "../repositories/CarRepoInMemory";
import { Request, Response } from 'express';
import DeleteCar from "../../applications/DeleteCar";
import UpdateCar from "../../applications/UpdateCar";
import { WipeIdPresenter } from "../../presenters/WipeIdPresenter";

const carRepo = new CarRepoInMemory()

export default class CarController {
  static createCar(req: Request, res: Response): void {
    const { year, model, brand, color } = req.body;

    const car: ICar = {
      id: "",
      color,
      year,
      model,
      brand
    }

    new CreateCar(carRepo).execute(car);

    res.status(201).send("Car created!");
  }

  static getCars(req: Request, res: Response): void{
    const cars = new GetAllCars(carRepo).execute()

    res.json(new WipeIdPresenter().format(cars))
  }

  static getCarsByModel(req: Request, res: Response): void{
    const { model } = req.params

    if(!model)
      res.status(400).send("Missing model!")

    const cars = new GetCarsByModel(carRepo).execute(model)

    res.json(new WipeIdPresenter().format(cars))
  }

  static GetCarById(req: Request, res: Response): void{
    const { id } = req.params

    if(!id)
      res.status(400).send("Missing id!")

    try{
      res.json(new GetCarById(carRepo).execute(id))
    }catch(err: any){
      res.status(400).send(err.message)
    }
  }

  static updateCar(req: Request, res: Response): void{
    const { id } = req.params
    const carData: ICar = req.body;

    if(!id)
      res.status(400).send("Missing id!")

    try{
      res.json(new UpdateCar(carRepo).execute(id, carData))
    }catch(err: any){
      res.status(400).send(err.message)
    }
  }

  static deleteCar(req: Request, res: Response): void{
    const { id } = req.params

    if(!id)
      res.status(400).send("Missing id!")

    try{
      res.json(new DeleteCar(carRepo).execute(id))
    }catch(err: any){
      res.status(400).send(err.message)
    }
  }
}