import {useDispatch} from 'react-redux';
import {useInjection} from '../../../container/iocProvider';

//Use Cases
import {IAuthLogInUseCase} from '../../../modules/auth/application/LogIn';

// Store
import {authError, authLogIn} from '../../../store/states/authReducer';
import {TYPE_AUTH_MODULE} from '../../../modules/auth/module';

interface ILoginViewModel {
  login(email: string, password: string): void;
}

export const useLoginViewModel = (): ILoginViewModel => {
  const dispatch = useDispatch();
  const useCase = useInjection<IAuthLogInUseCase>(
    TYPE_AUTH_MODULE.IAuthLogInUseCase,
  );

  async function login(email: string, password: string) {
    try {
      const user = await useCase.logIn(email, password);
      dispatch(authLogIn(user));
    } catch (error) {
      dispatch(authError('Error'));
    }
  }

  return {login};
};
