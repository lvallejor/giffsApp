import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'VsNhBngzg3Cs9axPvw0CAFFAoj9mV54G';
  private _historial: string[] = [];

  constructor(private http: HttpClient) {}

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=' +
          this.apiKey +
          '&q=' +
          query
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
      });
  }
}
