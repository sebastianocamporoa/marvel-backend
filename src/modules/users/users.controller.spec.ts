import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

describe('UserController', () => {
  let controller: UsersController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UserService,
          useValue: {
            registerUser: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register a user', async () => {
    const user = { id: '1', name: 'Test', email: 'test@example.com', password: 'a' };
    jest.spyOn(service, 'registerUser').mockResolvedValue(user);
    const result = await controller.register({ name: 'Test', email: 'test@example.com', password:'a' });
    expect(result).toEqual(user);
    expect(service.registerUser).toHaveBeenCalledWith('Test', 'test@example.com');
  });
});
