import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class MarvelService {
  private readonly apiUrl = 'https://gateway.marvel.com/v1/public/comics';
  private readonly apiKey = 'your_marvel_api_key';

  constructor(private httpService: HttpService) {}

  getComics(): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.apiUrl}?apikey=${this.apiKey}`);
  }
}