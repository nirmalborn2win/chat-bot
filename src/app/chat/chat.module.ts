import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatingService } from './chating.service';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatDialogComponent],
  exports: [ ChatDialogComponent ],
  providers: [ChatingService]
})
export class ChatModule { }
