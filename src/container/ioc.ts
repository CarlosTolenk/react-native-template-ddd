import {Container} from 'inversify';
import {IHttpClient} from '../modules/shared/domain/HttpClient';
import {AxiosClient} from '../modules/shared/infrastructure/AxiosClient';

export const container = new Container();
container.bind<IHttpClient>('IHttpClient').to(AxiosClient);
