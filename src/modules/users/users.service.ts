import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(name: string, email: string, password: string, identification: string): Promise<{ user: User, accessToken: string, userId: string }> {
    //Valida si el correo ya está registrado
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya se encuentra registrado.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ name, email, password: hashedPassword, identification });
    const savedUser = await this.userRepository.save(user);
    const payload = { email: savedUser.email, sub: savedUser.id };
    const accessToken = this.jwtService.sign(payload);
    return { user: savedUser, accessToken, userId: savedUser.id };
  }

  async loginUser(email: string, password: string): Promise<{ accessToken: string, userId: string }> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken, userId: user.id };
  }
}
