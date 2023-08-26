import {AuthLogIn} from '../LogIn';
import {container} from '../../../../container/ioc';

describe('AuthLogIn', () => {
  test('should correctly instantiate the proper repository', () => {
    const spyContainer = jest.spyOn(container, 'get').mockImplementation(() => {
      return {
        logIn: jest.fn(),
      };
    });
    const authLogIn = new AuthLogIn();

    expect(authLogIn).toBeDefined();
    expect(spyContainer).toHaveBeenCalled();
    expect(spyContainer).toHaveBeenCalledWith('IAuthRepository');
  });

  test('should call the method correctly to the repository', async () => {
    const spyRepository = jest.fn();
    jest.spyOn(container, 'get').mockImplementation(() => {
      return {
        logIn: spyRepository,
      };
    });
    const authLogIn = new AuthLogIn();

    await authLogIn.logIn('email@gmail.com', '1230');

    expect(spyRepository).toHaveBeenCalled();
    expect(spyRepository).toHaveBeenCalledWith('email@gmail.com', '1230');
  });

  test('should return an error if the repository fails.', async () => {
    jest.spyOn(container, 'get').mockImplementation(() => {
      return {
        logIn: jest.fn().mockRejectedValue(new Error('error??')),
      };
    });
    const authLogIn = new AuthLogIn();

    await expect(authLogIn.logIn('some@email.com', 'unknown')).rejects.toThrow(
      Error,
    );
  });
});
