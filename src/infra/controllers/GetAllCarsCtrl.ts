import { Request, Response } from 'express';
import { CarRepo } from "../../domains/CarRepo";
import GetAllCars from '../../applications/GetAllCars';
import { WipeIdPresenter } from '../presenters/WipeIdPresenter';

export default class GetAllCarsCtrl {
  constructor(private repo: CarRepo) { }

  execute(req: Request, res: Response): void {
    const cars = new GetAllCars(this.repo).execute()
    res.json(new WipeIdPresenter().format(cars))
  }
}

