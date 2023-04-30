import { faker } from '@faker-js/faker';
import { UserService } from '../../../src/domain/service/user-service';
import { UserClient } from '../../../src/domain/client/user-client';
import { EmailValidation } from '../../../src/domain/validations/email-validation';
import { User } from '../../../src/domain/entity/user';
import { Test, TestingModule } from "@nestjs/testing";
import { LoginValidation } from "../../../src/domain/validations/login-validation";

const user: User = {
  confirmed: 0,
  id: 1,
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 1,
  unLocked: null,
  createdAt: new Date(),
  updatedAt: new Date()
};

interface UserClientMock {
  findByEmail: jest.Mock;
  create: jest.Mock;
}

const userClientMock: UserClientMock = {
  findByEmail: jest.fn(),
  create: jest.fn(),
};

const userValidationMock: EmailValidation = {
  emailValidate: jest.fn()
}

const loginValidationMock: LoginValidation = {
  passwordValidate: jest.fn()
}

describe('UserService', () => {
  let userService: UserService;
  let userClient: UserClient;
  let emailValidation: EmailValidation;
  let loginValidation: LoginValidation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserClient,
          useValue: userClientMock,
        },
        {
          provide: EmailValidation,
          useValue: userValidationMock,
        },
        {
          provide: LoginValidation,
          useValue: loginValidationMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userClient = module.get<UserClient>(UserClient);
    emailValidation = module.get<EmailValidation>(EmailValidation);
    loginValidation = module.get<LoginValidation>(LoginValidation);
  });

  describe('createUser', () => {
    it('should create a user successfully', async () => {
      userClientMock.findByEmail.mockResolvedValueOnce(null);
      userClientMock.create.mockResolvedValueOnce(user);
      await userValidationMock.emailValidate(user)
      await loginValidationMock.passwordValidate(user)

      const result = await userService.createUser(user);

      expect(userClient.findByEmail).toHaveBeenCalledWith(user);
      expect(userClient.create).toHaveBeenCalledWith(user);
      expect(result).toEqual({
        name: 'success',
        message: 'User created successfully!',
      });
    });

    it('should not create a user if email is already registered', async () => {
      userClientMock.findByEmail.mockResolvedValueOnce('thais@gmail.com');
      userClientMock.create.mockResolvedValueOnce(user);
      await userValidationMock.emailValidate(user)
      await loginValidationMock.passwordValidate(user)

      const result = await userService.createUser(user);

      expect(userClient.findByEmail).toHaveBeenCalledWith(user);
      expect(result).toEqual({
        name: 'error',
        message: 'User already exists!',
      });
    });
  });
});
