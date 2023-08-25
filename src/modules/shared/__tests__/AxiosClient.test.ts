import {AxiosClient} from '../infrastructure/AxiosClient';

describe('AxiosClient', () => {
  test('should', () => {
    const httClient: AxiosClient = new AxiosClient();

    expect(httClient.get).toBeDefined();
  });
});
