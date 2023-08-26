import {useState} from 'react';

import {useInjection} from '../../../container/iocProvider';
import {IHttpClient} from '../../../modules/shared/domain/HttpClient';

interface IHomeViewModel {
  value: string;
  getValue(): void;
}

export const useHomeViewModel = (): IHomeViewModel => {
  const httpClient = useInjection<IHttpClient>('IHttpClient');
  const [value, setValue] = useState<string>('');

  async function getValue(): Promise<void> {
    const result = await httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    setValue(`ViewModel ${JSON.stringify(result)}`);
  }

  return {
    value,
    getValue,
  };
};
