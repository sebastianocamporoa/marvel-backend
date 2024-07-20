import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/users.module';
import { MarvelModule } from './modules/marvel/marvel.module';
import { MongooseModule } from '@nestjs/mongoose';
const password = encodeURIComponent("Ecorzo69");

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017'),
    UserModule, 
    MarvelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
