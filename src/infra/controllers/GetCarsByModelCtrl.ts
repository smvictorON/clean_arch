import { Request, Response } from 'express';
import { CarRepo } from "../../domains/CarRepo";
import { WipeIdPresenter } from '../presenters/WipeIdPresenter';
import GetCarsByModel from '../../applications/GetCarsByModel';

export default class GetCarsByModelCtrl {
  constructor(private repo: CarRepo) { }

  execute(req: Request, res: Response): void {
    const { model } = req.params

    if (!model)
      res.status(400).send("Missing model!")

    const cars = new GetCarsByModel(this.repo).execute(model)

    res.json(new WipeIdPresenter().format(cars))
  }
}
