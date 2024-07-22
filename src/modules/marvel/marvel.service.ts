import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class MarvelService {
  private readonly apiUrl = 'https://gateway.marvel.com/v1/public/comics';
  private readonly publicKey = '60cfb37eee49438efb47affaf4866fd6';
  private readonly privateKey = 'c9be6c673fe295924d9ec91755bc82f6ba0127eb';

  constructor(private httpService: HttpService) {}

  private getAuthParams(): string {
    const timestamp = new Date().getTime();
    const hash = CryptoJS.MD5(timestamp + this.privateKey + this.publicKey).toString();
    return `ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
  }

  getComics(): Observable<AxiosResponse<any>> {
    const authParams = this.getAuthParams();
    return this.httpService.get(`${this.apiUrl}?${authParams}`).pipe(
      map(response => response.data)
    );
  }
}
