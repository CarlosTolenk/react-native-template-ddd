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

  function getValue(): void {
    setValue(`ViewModel ${httpClient.get()}`);
  }

  return {
    value,
    getValue,
  };
};
