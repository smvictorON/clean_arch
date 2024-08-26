import { Request, Response } from 'express';
import { CarRepo } from "../../domains/CarRepo";
import GetCarById from '../../applications/GetCarById';

export default class GetCarByIdCtrl {
  constructor(private repo: CarRepo) { }

  execute(req: Request, res: Response): void {
    const { id } = req.params

    if (!id)
      res.status(400).send("Missing id!")

    try {
      res.json(new GetCarById(this.repo).execute(id))
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  }
}
