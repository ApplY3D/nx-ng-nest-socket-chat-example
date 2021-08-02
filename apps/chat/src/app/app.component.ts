import { Component, ElementRef, ViewChild } from '@angular/core';
import { SocketService } from './socket.service';
import { Subscription } from 'rxjs';
import { scan } from 'rxjs/operators';
import { RestService } from './rest.service';

@Component({
  selector: 'socket-chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('messageInput')
  input!: ElementRef<HTMLInputElement>;

  getMessageSub?: Subscription;

  messages$ = this.socketService
    .getMessage()
    .pipe(scan<string, string[]>((acc, curr) => [...acc, curr], []));

  helloMessage$ = this.restService.getMessage();

  onSendMessage() {
    const message = this.input?.nativeElement.value;
    if (!message) {
      return;
    }
    this.socketService.sendMessage(message);
    this.input.nativeElement.value = '';
  }

  constructor(
    private socketService: SocketService,
    private restService: RestService
  ) {}
}
