import { CarRepo } from "../../domains/CarRepo";
import { ICar } from "../../domains/ICar";

export default class CarRepoInMemory implements CarRepo {
  private cars: ICar[] = []

  constructor(){}
  update(id: string, updatedCar: ICar): boolean {
    const carIndex = this.cars.findIndex(car => car.id === id)

    if (carIndex === -1)
      return false

    this.cars[carIndex] = { ...this.cars[carIndex], ...updatedCar };
    return true
  }

  create(car: ICar): string {
    this.cars.push(car)
    return car.id
  }

  readByModel(model: string): ICar[] {
    return this.cars.filter((car) => car.model.toLocaleLowerCase() === model.toLocaleLowerCase())
  }

  readAll(): ICar[] {
    return this.cars
  }

  readOne(id: string): ICar | undefined {
    return this.cars.find((car) => car.id === id)
  }

  delete(id: string): boolean  {
    const totalCars = this.cars.length
    this.cars = this.cars.filter((car) => car.id !== id)
    return totalCars !== this.cars.length
  }
}