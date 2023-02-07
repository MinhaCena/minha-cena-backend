
import { faker } from '@faker-js/faker';
import { UserService } from "@application/services/user-service";
import { UserClient } from "@application/client/user-client";
import { EmailValidator } from "@application/validations/email-validator";
import { User } from "@application/entities/user";

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
  let emailValidator: EmailValidator;

  beforeEach(() => {
    emailValidator = new EmailValidator();
    userService = new UserService(userClient, emailValidator);
  });

  describe('createUser', () => {
    it('should create a user if it does not already exist', async () => {
      jest.spyOn(userClient, 'findByEmail').mockResolvedValue(null);
      jest.spyOn(userClient, 'create').mockResolvedValue(null);

      const result = await userService.createUser(user);

      expect(result).toEqual({ error: false, message: 'OK' });
      expect(userClient.findByEmail).toHaveBeenCalledWith(user);
      expect(userClient.create).toHaveBeenCalledWith(user);
    });

    it('should return an error if the user already exists', async () => {
      jest.spyOn(userClient, 'findByEmail').mockResolvedValue({});

      const result = await userService.createUser(user);

      expect(result).toEqual({ error: true, message: 'User already exists!' });
      expect(userClient.findByEmail).toHaveBeenCalledWith(user);
    });
  });
});
