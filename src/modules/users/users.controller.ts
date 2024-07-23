// Define el DTO para crear un usuario
export class CreateUserDto {
  name: string;
  identification: string;
  email: string;
  password: string;
}

import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string; identification: string }) {
    return this.userService.registerUser(body.name, body.email, body.password, body.identification);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.userService.loginUser(body.email, body.password);
  }
}
