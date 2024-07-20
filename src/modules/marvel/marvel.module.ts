import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MarvelService } from './marvel.service';
import { MarvelController } from './marvel.controller';

@Module({
  imports: [HttpModule],
  providers: [MarvelService],
  controllers: [MarvelController]
})
export class MarvelModule {}
