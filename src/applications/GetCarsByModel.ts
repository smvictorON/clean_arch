import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";

export default class GetCarsByModel {
  constructor(private repo: CarRepo){}

  execute(model: string): ICar[]{
    if(!model)
      throw new Error("Parameter model is missing!")

    return this.repo.readByModel(model)
  }
}