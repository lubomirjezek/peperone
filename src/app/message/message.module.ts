import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from './services/message.service';

import { MessageComponent } from './components/message/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent
  ],
  exports: [
    MessageComponent
  ],
  entryComponents: [
    MessageComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }
