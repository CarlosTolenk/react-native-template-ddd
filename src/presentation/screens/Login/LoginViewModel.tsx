import {useDispatch} from 'react-redux';
import {authLogIn} from '../../../store/states/authReducer';
import {IAuth} from '../../../store/models/auth';

interface ILoginViewModel {
  login(email: string, password: string): void;
}

export const useLoginViewModel = (): ILoginViewModel => {
  const dispatch = useDispatch();

  async function login(email: string, password: string) {
    console.log('Procesando el login', email, password);
    const user: IAuth = {
      userId: 0,
      name: '',
      lastName: '',
      email: '',
      avatar: '',
      lastLogin: '',
      phoneNumber: '',
      token: 'token',
    };
    dispatch(authLogIn(user));
  }

  return {login};
};
