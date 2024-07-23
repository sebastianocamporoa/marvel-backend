import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/users.module';
import { MarvelModule } from './modules/marvel/marvel.module';
import { User } from './modules/users/user.entity';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { Favorite } from './modules/favorites/favorite.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: 'mysql://root:BDbdvRxnVLXDbYtWJLHXwzkWwmPPEMJu@monorail.proxy.rlwy.net:40234/railway',
      entities: [User, Favorite],
      synchronize: true,
    }),
    UserModule,
    MarvelModule,
    FavoritesModule,
  ],
})
export class AppModule {}
