import 'reflect-metadata';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';
import * as iocProvider from '../../../../container/iocProvider';
import {Auth} from '../../../../modules/auth/domain/Auth';

const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn().mockImplementation(() => {
      return mockUseDispatch;
    }),
  };
});

describe('LoginScreen', () => {
  test('should renders correctly', async () => {
    jest.spyOn(iocProvider, 'useInjection').mockImplementation(() => {
      return {
        logIn: jest.fn().mockReturnValue('useInjection'),
      };
    });
    const {getByText} = render(<LoginScreen />);

    const button = getByText(/Submit/i);

    expect(button).toBeDefined();
  });

  test('should dispatch the action to log out when the button is pressed', async () => {
    jest.spyOn(iocProvider, 'useInjection').mockImplementation(() => {
      return {
        logIn: jest.fn().mockResolvedValue(
          new Auth({
            userId: 1,
            email: 'userType.email',
            name: '',
            lastName: '',
            lastLogin: '',
            avatar: '',
            phoneNumber: '',
            token: 'token-valid',
          }),
        ),
      };
    });
    const {getByText} = render(<LoginScreen />);

    const button = getByText(/Submit/i);
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockUseDispatch).toHaveBeenCalledWith({
        payload: {
          userId: 1,
          email: 'userType.email',
          name: '',
          lastName: '',
          lastLogin: '',
          avatar: '',
          phoneNumber: '',
          token: 'token-valid',
        },
        type: 'auth/authLogIn',
      });
    });
  });
});
