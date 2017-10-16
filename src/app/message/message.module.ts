import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from './services/message.service';

import { MessageComponent } from './components/message/message.component';
import { EnumToStringPipe } from './pipes/enum-to-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    EnumToStringPipe
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
