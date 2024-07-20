import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}