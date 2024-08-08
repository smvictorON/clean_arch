import CreateCar from '../../applications/CreateCar';
import { ICar } from '../../domains/ICar';
import CarRepoInMemory from '../../infra/repositories/CarRepoInMemory';

describe('CreateCar', () => {
  const carRepo = new CarRepoInMemory()

  it('should create a car', () => {
    const car: ICar = {
      id: '',
      model: 'Model X',
      brand: 'Brand Y',
      color: 'Red',
      year: 2022
    };

    const res = new CreateCar(carRepo).execute(car);

    expect(res).not.toBeNull();
    expect(res).not.toBeUndefined();
    expect(res).not.toEqual('');
  });
});
