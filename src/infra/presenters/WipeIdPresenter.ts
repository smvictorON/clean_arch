import { ICar } from '../../domains/ICar';
import { IPresenter } from './IPresenter'

export class WipeIdPresenter implements IPresenter {
  format(data: ICar[]): any[] {
    return data.map(item => {
      const { id, ...rest } = item;
      return rest;
    });
  }
}