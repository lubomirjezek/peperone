
import {timer as observableTimer,  Observable ,  BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { Type } from '../models/type';



@Injectable()
export class MessageService {
  data: BehaviorSubject<{ show: boolean, text?: string, type?: Type }> = new BehaviorSubject({ show: false });

  constructor() { }

  private create(text: string, type: Type) {
    this.data.next({
      show: true,
      text: text,
      type: type
    });
  }

  private destroy(duration) {
    observableTimer(duration).subscribe(() => {
      this.data.next({ show: false });
    });
  }

  show(text: string, type: Type, time?: number): void {
    const duration = time || 3000;

    this.create(text, type);
    this.destroy(duration);
  }
}
