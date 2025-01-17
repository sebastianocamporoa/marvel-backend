import { Controller, Post, Body, Param, Get, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':userId')
  async addFavorite(
    @Param('userId') userId: string,
    @Body() body: { comicId: string; title: string; imageUrl: string },
  ) {
    return this.favoritesService.addFavorite(userId, body.comicId, body.title, body.imageUrl);
  }

  @Get(':userId')
  async getFavorites(@Param('userId') userId: string) {
    return this.favoritesService.getFavorites(userId);
  }

  @Delete(':userId/:comicId')
  async removeFavorite(@Param('userId') userId: string, @Param('comicId') comicId: string) {
    await this.favoritesService.removeFavorite(userId, comicId);
    return { message: 'Favorite removed successfully' };
  }
}
