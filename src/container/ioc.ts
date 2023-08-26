import {Container} from 'inversify';

// Domain
import {IHttpClient} from '../modules/shared/domain/HttpClient';
import {IAuthRepository} from '../modules/auth/domain/AuthRepository';

// Infrastructure
import {AxiosClient} from '../modules/shared/infrastructure/AxiosClient';
import {AxiosAuthRepository} from '../modules/auth/infrastructure/AxiosAuthRepository';
import {AuthLogIn, IAuthLogInUseCase} from '../modules/auth/application/LogIn';

export const container = new Container();
// Shared
container.bind<IHttpClient>('IHttpClient').to(AxiosClient);

// Auth
container.bind<IAuthRepository>('IAuthRepository').to(AxiosAuthRepository);
container.bind<IAuthLogInUseCase>('IAuthLogInUseCase').to(AuthLogIn);
