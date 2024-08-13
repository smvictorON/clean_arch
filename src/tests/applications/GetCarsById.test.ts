import GetCarById from '../../applications/GetCarById';
import CreateCar from '../../applications/CreateCar';
import { ICar } from '../../domains/ICar';
import CarRepoInMemory from '../../infra/repositories/CarRepoInMemory';

describe('GetCarById', () => {
  const carRepo = new CarRepoInMemory()

  it('should return all cars', () => {
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

    const createdCar = new CreateCar(carRepo).execute(car1);
    new CreateCar(carRepo).execute(car2);

    const res = new GetCarById(carRepo).execute(createdCar)

    expect(res).not.toBeNull();
    expect(res).not.toBeUndefined();
    expect(res).not.toEqual('');
    expect(res.id).toEqual(car1.id)
    expect(res.model).toEqual(car1.model)
    expect(res.brand).toEqual(car1.brand)
    expect(res.color).toEqual(car1.color)
    expect(res.year).toEqual(car1.year)
  });

  it('should return error', () => {
    try{
      new GetCarById(carRepo).execute("")
    }catch(err: any){
      expect(err.message).toEqual("Parameter id is missing!");
    }
  });
});
