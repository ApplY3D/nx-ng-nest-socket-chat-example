import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '@socket-chat/api-interfaces';

@Injectable({ providedIn: 'root' })
export class RestService {
  constructor(private http: HttpClient) {}

  getMessage() {
    return this.http.get<Message>('/api/hello');
  }
}
