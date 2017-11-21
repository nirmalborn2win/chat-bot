import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ChatModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
