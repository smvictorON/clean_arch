import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";

export default class GetAllCars {
  constructor(private repo: CarRepo){}

  execute(): ICar[]{
    return this.repo.readAll()
  }
}