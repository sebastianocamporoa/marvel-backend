// src/modules/users/user.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './users.controller';
import { UserService } from './users.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            registerUser: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register a user', async () => {
    const user = { id: '1', name: 'Test', email: 'test@example.com' };
    jest.spyOn(service, 'registerUser').mockResolvedValue(user);
    const result = await controller.register({ name: 'Test', email: 'test@example.com' });
    expect(result).toEqual(user);
    expect(service.registerUser).toHaveBeenCalledWith('Test', 'test@example.com');
  });
});
