// Define el DTO para crear un usuario
export class CreateUserDto {
  name: string;
  email: string;
  password: string;
}

import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  // async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   const { name, email, password } = createUserDto;
  //   return this.userService.registerUser(name, email, password);
  // }
  async registerUser() {
    return 2;
  }

  @Get('test')
  getTest() {
    return 1;
  }
}
