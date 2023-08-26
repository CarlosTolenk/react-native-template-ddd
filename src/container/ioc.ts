import {Container} from 'inversify';

// Domain
import {IHttpClient} from '../modules/shared/domain/HttpClient';

// Infrastructure
import {AxiosClient} from '../modules/shared/infrastructure/AxiosClient';

export const container = new Container();
container.bind<IHttpClient>('IHttpClient').to(AxiosClient);
