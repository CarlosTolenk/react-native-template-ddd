import {Container} from 'inversify';

// Domain
import {IHttpClient} from './domain/HttpClient';

// Infrastructure
import {AxiosClient} from './infrastructure/AxiosClient';

export const moduleShared = new Container();
// Shared
moduleShared.bind<IHttpClient>('IHttpClient').to(AxiosClient);
