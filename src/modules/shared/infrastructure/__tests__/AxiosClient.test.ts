import {AxiosClient} from '../AxiosClient';

describe('AxiosClient', () => {
  test('should', () => {
    const httClient: AxiosClient = new AxiosClient();

    expect(httClient.get).toBeDefined();
  });
});
