import { CarRepo } from "../../domains/CarRepo";
import { ICar } from "../../domains/ICar";

export default class CarroRepoInMemory implements CarRepo {
  private cars: ICar[] = []

  constructor(){}

  create(car: ICar): void {
    this.cars.push(car)
  }

  readAll(): ICar[] {
    return this.cars
  }
}