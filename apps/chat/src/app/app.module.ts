import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SOCKET_PORT } from '@socket-chat/api-interfaces';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';

const config: SocketIoConfig = {
  url: `http://localhost:${SOCKET_PORT}`,
  options: {},
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SocketIoModule.forRoot(config)],
  bootstrap: [AppComponent],
})
export class AppModule {}
