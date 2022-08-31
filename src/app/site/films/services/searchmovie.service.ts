import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchmovieService implements OnDestroy {
  private API_MOVIE_URI: string = `http://www.omdbapi.com/`
  private API_KEY: string = `b267f2ad`;
  private API_KEY_STM: string = `?apikey=`;
  private _httpSub !: Subscription;
  constructor(private http: HttpClient) {


  }
  ngOnDestroy(): void {
    if (!this._httpSub.closed) {
      this._httpSub.unsubscribe();
    }
  }

  search(action: any, titre: string, anne: number = 0): void {
    let result = {};
    let y = anne ? `&y=${anne}` : '';

    this.http.get(this.API_MOVIE_URI +
      this.API_KEY_STM + this.API_KEY +
      `&t=${titre}${y}&plot=full`)
      .subscribe(
        response => {
          action(response);
        }


      )
  }
}
