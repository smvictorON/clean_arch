import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";
import { generateId } from "../utils/generateId";

export default class CreateCar {
  constructor(private repo: CarRepo){}

  execute(car: ICar): string{
    car.id = generateId()
    const res = this.repo.create(car)
    return res
  }
}