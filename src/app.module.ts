import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/users.module';
import { MarvelModule } from './modules/marvel/marvel.module';
import { User } from './modules/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: 'mysql://root:BDbdvRxnVLXDbYtWJLHXwzkWwmPPEMJu@:/railway',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    MarvelModule,
  ],
})
export class AppModule {}
