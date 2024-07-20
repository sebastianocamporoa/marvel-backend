import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './users.service';
import { UserRepository } from './user.repository';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: {
            save: jest.fn(),
            findById: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should register a user', async () => {
    const user = { id: '1', name: 'Test', email: 'test@example.com' };
    jest.spyOn(repository, 'save').mockResolvedValue(undefined);
    const result = await service.registerUser(user.name, user.email);
    expect(result).toEqual(user);
    expect(repository.save).toHaveBeenCalledWith(result);
  });
});
