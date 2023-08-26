import {injectable} from 'inversify';
import {IAuthRepository} from '../domain/AuthRepository';
import {Auth} from '../domain/Auth';
import {container} from '../../../container/ioc';

export interface IAuthLogInUseCase {
  logIn(email: string, password: string): Promise<Auth>;
}

@injectable()
export class AuthLogIn implements IAuthLogInUseCase {
  private repository: IAuthRepository;

  constructor() {
    this.repository = container.get<IAuthRepository>('IAuthRepository');
  }

  async logIn(email: string, password: string): Promise<Auth> {
    try {
      return this.repository.logIn(email, password);
    } catch (error) {
      throw error;
    }
  }
}
