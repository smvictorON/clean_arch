import { ICar } from "./ICar"

export interface CarRepo {
  create(car: ICar): string
  readAll(): ICar[]
  readByModel(model: string): ICar[]
  readOne(id: string): ICar | undefined
  update(id: string, updatedCar: ICar): boolean
  delete(id: string): boolean
}