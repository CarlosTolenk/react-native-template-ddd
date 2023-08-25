import 'reflect-metadata';
import {injectable} from 'inversify';

import {IHttpClient} from '../domain/HttpClient';

@injectable()
export class AxiosClient implements IHttpClient {
  get(): string {
    return 'AxiosClient';
  }
}
