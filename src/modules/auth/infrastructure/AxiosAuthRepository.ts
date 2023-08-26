import {injectable} from 'inversify';

import {IAuthRepository} from '../domain/AuthRepository';
import {Auth} from '../domain/Auth';
import {AxiosClient} from '../../shared/infrastructure/AxiosClient';

@injectable()
export class AxiosAuthRepository
  extends AxiosClient
  implements IAuthRepository
{
  async logIn(email: string, password: string): Promise<Auth> {
    console.log('logIn with password', password);
    const user = {
      userId: 1,
      name: '',
      lastName: '',
      email: email,
      avatar: '',
      lastLogin: '',
      phoneNumber: '',
      token: 'token_valid',
    };
    return new Auth({...user});
  }
}
