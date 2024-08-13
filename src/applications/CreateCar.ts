import { CarRepo } from "../domains/CarRepo";
import { ICar } from "../domains/ICar";
import { generateId } from "../utils/generateId";

export default class CreateCar {
  constructor(private repo: CarRepo) { }

  execute(car: ICar): string {
    car.id = generateId()

    if (validateFields(car))
      throw new Error("Invalid/Missing fields!")

    const res = this.repo.create(car)
    return res
  }
}

const validateFields = (car: ICar): boolean => {

  if (!car.model || !car.brand || !car.color)
    return true

  if (car.year < 1960 || car.year > 2030 || !car.year)
    return true


  return false
}
