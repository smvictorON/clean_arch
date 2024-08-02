import { ICar } from "./ICar"

export interface CarRepo {
  create(carro: ICar): void
  readAll(): ICar[]
}