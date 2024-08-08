import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";

export default class UpdateCar {
  constructor(private repo: CarRepo){}

  execute(id: string, updatedCar: ICar): boolean{
    const car = this.repo.update(id, updatedCar)

    if(!car)
      throw new Error("Car not found!")

    return true
  }
}