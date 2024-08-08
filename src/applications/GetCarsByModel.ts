import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";

export default class GetCarsByModel {
  constructor(private repo: CarRepo){}

  execute(model: string): ICar[]{
    return this.repo.readByModel(model)
  }
}