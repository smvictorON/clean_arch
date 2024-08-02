import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";

export default class CreateCar {
  constructor(private repo: CarRepo){}

  execute(car: ICar): void{
    this.repo.create(car)
  }
}