import { Request, Response } from 'express';
import { ICar } from "../../domains/ICar";
import { CarRepo } from "../../domains/CarRepo";
import UpdateCar from '../../applications/UpdateCar';

export default class UpdateCarCtrl {
  constructor(private repo: CarRepo) { }

  execute(req: Request, res: Response): void {
    const { id } = req.params
    const carData: ICar = req.body;

    if (!id)
      res.status(400).send("Missing id!")

    try {
      res.json(new UpdateCar(this.repo).execute(id, carData))
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  }
}
