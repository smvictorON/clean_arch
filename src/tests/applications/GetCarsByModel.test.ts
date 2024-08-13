import GetCarsByModel from '../../applications/GetCarsByModel';
import CreateCar from '../../applications/CreateCar';
import { ICar } from '../../domains/ICar';
import CarRepoInMemory from '../../infra/repositories/CarRepoInMemory';

describe('GetCarsByModel', () => {

  it('should return all cars', () => {
    const carRepo = new CarRepoInMemory()
    const car1: ICar = {
      id: '',
      model: 'Model X',
      brand: 'Brand Y',
      color: 'Red',
      year: 2022
    };

    const car2: ICar = {
      id: '',
      model: 'Model A',
      brand: 'Brand B',
      color: 'Blue',
      year: 2023
    };

    const car3: ICar = {
      id: '',
      model: 'Model A',
      brand: 'Brand C',
      color: 'Yellow',
      year: 2024
    };

    new CreateCar(carRepo).execute(car1);
    new CreateCar(carRepo).execute(car2);
    new CreateCar(carRepo).execute(car3);

    const res = new GetCarsByModel(carRepo).execute("Model A")

    expect(res).not.toBeNull();
    expect(res).not.toBeUndefined();
    expect(res).not.toEqual('');
    expect(res.length).toEqual(2)
    expect(res[0].model).toEqual("Model A")
    expect(res[1].model).toEqual("Model A")
  });

  it('should return 0 cars', () => {
    const carRepo = new CarRepoInMemory()
    const car: ICar = {
      id: '',
      model: 'Model X',
      brand: 'Brand Y',
      color: 'Red',
      year: 2022
    };

    new CreateCar(carRepo).execute(car);

    const res = new GetCarsByModel(carRepo).execute("Model Z")

    expect(res).not.toBeNull();
    expect(res).not.toBeUndefined();
    expect(res).not.toStrictEqual('');
    expect(res.length).toEqual(0)
    expect(res).toEqual(<ICar[]>[])
  });

  it('should return error', () => {
    const carRepo = new CarRepoInMemory()
    const car: ICar = {
      id: '',
      model: 'Model X',
      brand: 'Brand Y',
      color: 'Red',
      year: 2022
    };

    new CreateCar(carRepo).execute(car);

    try {
      new GetCarsByModel(carRepo).execute("")
    } catch (err: any) {
      expect(err.message).toEqual("Parameter model is missing!");
    }
  });
});
