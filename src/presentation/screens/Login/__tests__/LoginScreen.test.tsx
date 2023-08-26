import {fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';

const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn().mockImplementation(() => {
      return mockUseDispatch;
    }),
    useSelector: jest.fn().mockImplementation(() => {
      return {
        auth: {
          token: null,
        },
      };
    }),
  };
});

describe('LoginScreen', () => {
  test('should renders correctly', async () => {
    const {getByText} = render(<LoginScreen />);

    const textDefault = getByText('Login');
    const button = getByText('LogIn');

    expect(textDefault).toBeDefined();
    expect(button).toBeDefined();
  });

  test('should dispatch the action to log out when the button is pressed', async () => {
    const {getByText} = render(<LoginScreen />);

    const button = getByText('LogIn');
    fireEvent.press(button);

    expect(mockUseDispatch).toHaveBeenCalledWith({
      payload: {
        avatar: '',
        email: '',
        lastLogin: '',
        lastName: '',
        name: '',
        phoneNumber: '',
        token: 'token',
        userId: 0,
      },
      type: 'auth/authLogIn',
    });
  });
});
