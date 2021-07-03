import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { scan } from 'rxjs/operators';

@Injectable()
export class StocksService {

  symbols = ['googl','amzn','fb','aapl','ibm','msft','alec','apps','ocgn','aht','amc','ride','sqbg','blin','goog','optt','shen','hut','evgo','droof'];

  constructor(private http: HttpClient) { }

  getQuotes() {
    return this.http.get(`stocks/quote?symbols=${this.symbols.join(',')}`)
    .pipe(
      scan((acc: any, cur: any) => {
        Object.keys(cur).forEach(key => {
          acc.push(cur[key]['price']);
          console.log(acc[0])
        });
        return acc
      }, [])
    )
  }
}
