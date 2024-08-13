import GetAllCars from '../../applications/GetAllCars';
import CreateCar from '../../applications/CreateCar';
import { ICar } from '../../domains/ICar';
import CarRepoInMemory from '../../infra/repositories/CarRepoInMemory';

describe('GetAllCars', () => {

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

    new CreateCar(carRepo).execute(car1);
    new CreateCar(carRepo).execute(car2);
    const res = new GetAllCars(carRepo).execute();

    expect(res).not.toBeNull();
    expect(res).not.toBeUndefined();
    expect(res).not.toEqual('');
    expect(res.length).toEqual(2)
  });

  it('should return 0 cars', () => {
    const carRepo = new CarRepoInMemory()
    const res = new GetAllCars(carRepo).execute();

    expect(res).not.toBeNull();
    expect(res).not.toBeUndefined();
    expect(res).not.toStrictEqual('');
    expect(res.length).toEqual(0)
    expect(res).toEqual(<ICar[]>[])
  })
});
