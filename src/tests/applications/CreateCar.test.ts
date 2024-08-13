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

  it('should return error', () => {
    const car: ICar = {
      id: '',
      model: '',
      brand: '',
      color: '',
      year: 0
    };

    try {
      new CreateCar(carRepo).execute(car)
    } catch (err: any) {
      expect(err.message).toBe('Invalid/Missing fields!');
    }

    car.model = "Model"

    try {
      new CreateCar(carRepo).execute(car)
    } catch (err: any) {
      expect(err.message).toBe('Invalid/Missing fields!');
    }

    car.brand = "Brand"

    try {
      new CreateCar(carRepo).execute(car)
    } catch (err: any) {
      expect(err.message).toBe('Invalid/Missing fields!');
    }

    car.color = "Color"

    try {
      new CreateCar(carRepo).execute(car)
    } catch (err: any) {
      expect(err.message).toBe('Invalid/Missing fields!');
    }

    car.year = 0

    try {
      new CreateCar(carRepo).execute(car)
    } catch (err: any) {
      expect(err.message).toBe('Invalid/Missing fields!');
    }

    car.year = 3000

    try {
      new CreateCar(carRepo).execute(car)
    } catch (err: any) {
      expect(err.message).toBe('Invalid/Missing fields!');
    }
  });
});
