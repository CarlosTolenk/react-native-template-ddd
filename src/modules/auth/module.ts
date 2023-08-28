import {Container} from 'inversify';

// Domain
import {IAuthRepository} from './domain/AuthRepository';

// Application
import {AuthLogIn, IAuthLogInUseCase} from './application/LogIn';

// Infrastructure
import {AxiosAuthRepository} from './infrastructure/AxiosAuthRepository';

export const moduleAuth = new Container();
moduleAuth.bind<IAuthRepository>('IAuthRepository').to(AxiosAuthRepository);
moduleAuth.bind<IAuthLogInUseCase>('IAuthLogInUseCase').to(AuthLogIn);
