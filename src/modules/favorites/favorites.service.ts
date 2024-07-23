import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorite.entity';
import { User } from '../users/user.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async addFavorite(userId: string, comicId: string, title: string, imageUrl: string): Promise<Favorite> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const favorite = this.favoriteRepository.create({ user, comicId, title, imageUrl });
    return this.favoriteRepository.save(favorite);
  }

  async getFavorites(userId: string): Promise<Favorite[]> {
    const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['favorites'] });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user.favorites;
  }

  async removeFavorite(userId: string, comicId: string): Promise<void> {
    const favorite = await this.favoriteRepository.findOne({ where: { user: { id: userId }, comicId } });
    if (!favorite) {
      throw new NotFoundException('Favorite not found');
    }
    await this.favoriteRepository.remove(favorite);
  }
}
