import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocketService } from './socket.service';
import { Subscription } from 'rxjs';
import { Message } from '@socket-chat/api-interfaces';

@Component({
  selector: 'socket-chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('messageInput')
  input!: ElementRef<HTMLInputElement>;

  getMessageSub?: Subscription;

  messages: string[] = [];

  hello$ = this.http.get<Message>('/api/hello');

  onSendMessage() {
    const message = this.input?.nativeElement.value;
    if (!message) {
      return;
    }
    this.socketService.sendMessage(message);
    this.input.nativeElement.value = '';
  }

  ngOnInit() {
    this.getMessageSub = this.socketService.getMessage().subscribe((data) => {
      this.messages.push(data);
    });
  }

  ngOnDestroy() {
    this.getMessageSub?.unsubscribe();
  }

  constructor(private http: HttpClient, private socketService: SocketService) {}
}
