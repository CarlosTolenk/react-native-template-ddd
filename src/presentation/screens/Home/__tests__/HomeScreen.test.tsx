import {render, waitFor} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

import * as iocProvider from '../../../../container/iocProvider';

describe('should root', () => {
  test('renders correctly', async () => {
    jest.spyOn(iocProvider, 'useInjection').mockImplementation(() => {
      return {
        get: jest.fn().mockResolvedValue('useInjection'),
      };
    });
    const {getByText} = await waitFor(() => render(<HomeScreen />));

    const textValue = getByText(/useInjection/i);
    const textDefault = getByText(/Home/i);

    expect(textValue).toBeDefined();
    expect(textDefault).toBeDefined();
  });
});
