import {useState} from 'react';

import {useInjection} from '../../../container/iocProvider';
import {IHttpClient} from '../../../modules/shared/domain/HttpClient';
import {useDispatch} from 'react-redux';
import {authLogOut} from '../../../store/states/authReducer';

interface IHomeViewModel {
  value: string;
  getValue(): Promise<void>;

  logOut(): Promise<void>;
}

export const useHomeViewModel = (): IHomeViewModel => {
  const dispatch = useDispatch();
  const httpClient = useInjection<IHttpClient>('IHttpClient');
  const [value, setValue] = useState<string>('');

  async function getValue(): Promise<void> {
    const result = await httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    setValue(`ViewModel ${JSON.stringify(result)}`);
  }

  async function logOut(): Promise<void> {
    dispatch(authLogOut());
  }

  return {
    value,
    getValue,
    logOut,
  };
};
