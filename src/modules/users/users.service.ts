import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async registerUser(name: string, email: string): Promise<User> {
    const user = new User(uuidv4(), name, email);
    await this.userRepository.save(user);
    return user;
  }
}