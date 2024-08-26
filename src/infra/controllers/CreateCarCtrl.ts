import { Request, Response } from 'express';
import { ICar } from "../../domains/ICar";
import CreateCar from "../../applications/CreateCar";
import { CarRepo } from "../../domains/CarRepo";

export default class CreateCarCtrl {
  constructor(private repo: CarRepo) { }

  execute(req: Request, res: Response): void {
    const { year, model, brand, color } = req.body;

    const car: ICar = {
      id: "",
      color,
      year,
      model,
      brand
    }

    const resp = new CreateCar(this.repo).execute(car);

    res.status(201).send(resp);
  }
}
