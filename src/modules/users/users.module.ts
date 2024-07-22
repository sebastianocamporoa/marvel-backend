import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'clavesercetprod2024**',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UserService, UserRepository],
  controllers: [UsersController],
  exports: [UserService]
})
export class UserModule {}
