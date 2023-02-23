import { faker } from '@faker-js/faker';
import { UserService } from '../../../src/domain/service/user-service';
import { UserClient } from '../../../src/domain/client/user-client';
import { EmailValidation } from '@domain/validations/email-validation';
import { User } from '../../../src/domain/entity/user';

const user: User = {
  id: 1,
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 1,
  unLocked: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('UserService', () => {
  let userService: UserService;
  let userClient: UserClient;
  let emailValidator: EmailValidation;

  beforeEach(() => {
    emailValidator = new EmailValidation();
    userService = new UserService(userClient, emailValidator);
  });

  describe('createUser', () => {
    it('should create a user if it does not already exist', async () => {
      jest.mock('../../../src/domain/client/user-client');
      const mockFindByEmail = jest.fn();
      await UserClient.prototype.findByEmail(user);
      mockFindByEmail.mockReturnValue(Promise.resolve(null));

      const result = await userService.createUser(user);

      expect(result).toEqual({ error: false, message: 'OK' });
      expect(userClient.findByEmail).toHaveBeenCalledWith(user);
      expect(userClient.create).toHaveBeenCalledWith(user);
    });

    it('should return an error if the user already exists', async () => {
      jest.spyOn(userClient, 'findByEmail').mockResolvedValue();

      const result = await userService.createUser(user);

      expect(result).toEqual({ error: true, message: 'User already exists!' });
      expect(userClient.findByEmail).toHaveBeenCalledWith(user);
    });
  });
});
