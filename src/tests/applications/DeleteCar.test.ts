import CreateCar from '../../applications/CreateCar';
import GetCarById from '../../applications/GetCarById';
import DeleteCar from '../../applications/DeleteCar';
import { ICar } from '../../domains/ICar';
import CarRepoInMemory from '../../infra/repositories/CarRepoInMemory';

describe('DeleteCar', () => {
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
    expect(createdCar).not.toBeNull();

    const returnedCar = new GetCarById(carRepo).execute(createdCar)
    expect(returnedCar.id).toEqual(car.id);

    const res = new DeleteCar(carRepo).execute(createdCar)
    expect(res).toBeTruthy();
  });

  it('should return error', () => {
    try{
      new DeleteCar(carRepo).execute("")
    }catch(err: any){
      expect(err.message).toEqual("Parameter id is missing!")
    }
  });
});
