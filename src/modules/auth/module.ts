import {Container} from 'inversify';

// Domain
import {IAuthRepository} from './domain/AuthRepository';

// Application
import {AuthLogIn, IAuthLogInUseCase} from './application/LogIn';

// Infrastructure
import {AxiosAuthRepository} from './infrastructure/AxiosAuthRepository';

export enum TYPE_AUTH_MODULE {
  IAuthRepository = 'IAuthRepository',
  IAuthLogInUseCase = 'IAuthLogInUseCase',
}

export const moduleAuth = new Container();
moduleAuth
  .bind<IAuthRepository>(TYPE_AUTH_MODULE.IAuthRepository)
  .to(AxiosAuthRepository);
moduleAuth
  .bind<IAuthLogInUseCase>(TYPE_AUTH_MODULE.IAuthLogInUseCase)
  .to(AuthLogIn);
