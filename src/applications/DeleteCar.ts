import { CarRepo } from "../domains/CarRepo";

export default class DeleteCar {
  constructor(private repo: CarRepo){}

  execute(id: string): boolean{
    if(!id)
      throw new Error("Parameter id is missing!")

    const car = this.repo.delete(id)

    if(!car)
      throw new Error("Car not found!")

    return car
  }
}