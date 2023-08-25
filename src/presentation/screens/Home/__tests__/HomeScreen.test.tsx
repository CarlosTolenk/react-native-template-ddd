import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

import * as iocProvider from '../../../../container/iocProvider';

describe('should root', () => {
  test('renders correctly', () => {
    jest.spyOn(iocProvider, 'useInjection').mockImplementation(() => {
      return {
        get: jest.fn().mockReturnValue('useInjection'),
      };
    });
    const {getByText} = render(<HomeScreen />);

    const textValue = getByText(/useInjection/i);
    const textDefault = getByText(/Home/i);

    expect(textValue).toBeDefined();
    expect(textDefault).toBeDefined();
  });
});
