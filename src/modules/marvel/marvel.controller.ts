import { Controller, Get } from '@nestjs/common';
import { MarvelService } from './marvel.service';

@Controller('marvel')
export class MarvelController {
  constructor(private readonly marvelService: MarvelService) {}

  @Get('comics')
  getComics() {
    return this.marvelService.getComics();
  }
}