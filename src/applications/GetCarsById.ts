import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";

export default class GetAllCars {
  constructor(private repo: CarRepo){}

  execute(id: string): ICar{
    const car = this.repo.readOne(id)

    if(!car)
      throw new Error("Car not found!")

    return car
  }
}