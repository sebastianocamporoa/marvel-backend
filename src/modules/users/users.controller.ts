import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  async register(@Body() body: { name: string; email: string; password: string }) {
    return this.usersService.registerUser(body.name, body.email, body.password);
  }
}
