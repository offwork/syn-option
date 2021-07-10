import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { io } from 'socket.io-client';


@Injectable()
export class SocketService {
  socket = io('http://localhost:5000');

  listen(event: string) {
    return new Observable<any[]>((subscriber) => {
      this.socket.on(event, (data) => {
        subscriber.next(data);
      })
    });
  }
}
