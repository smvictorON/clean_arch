import CreateCar from '../../applications/CreateCar';
import UpdateCar from '../../applications/UpdateCar';
import GetCarById from '../../applications/GetCarById';
import { ICar } from '../../domains/ICar';
import CarRepoInMemory from '../../infra/repositories/CarRepoInMemory';

describe('UpdateCar', () => {
  const carRepo = new CarRepoInMemory()

  it('should create a car', () => {
    const car: ICar = {
      id: '',
      model: 'Model X',
      brand: 'Brand Y',
      color: 'Red',
      year: 2022
    };

    const createdCar = new CreateCar(carRepo).execute(car);
    const res = new UpdateCar(carRepo).execute(createdCar, <ICar>{color: "Green", year: 2020});
    expect(res).toBeTruthy();

    const updatedCar = new GetCarById(carRepo).execute(createdCar);

    expect(updatedCar.id).toEqual(car.id);
    expect(updatedCar.model).toEqual(car.model);
    expect(updatedCar.brand).toEqual(car.brand);
    expect(updatedCar.year).toEqual(2020);
    expect(updatedCar.color).toEqual("Green");
  });

  it('should return error', () => {
    try{
      new UpdateCar(carRepo).execute("", <ICar>{color: "Green", year: 2020});
    }catch(err: any){
      expect(err.message).toEqual("Parameter id is missing!");
    }
  });
});
