import { Injectable, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { MessageComponent } from '../components/message/message.component';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/timer';

export enum Type { Info, Success, Error, Warning }

@Injectable()
export class MessageService {

  componentRef: ComponentRef<MessageComponent>;
  anchor: ViewContainerRef;
  canShow = true;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  private create() {
    if (this.canShow) {
      this.canShow = false;
      const messageComponent = this.resolver.resolveComponentFactory(MessageComponent);
      console.log(this.anchor);
      this.componentRef = this.anchor.createComponent(messageComponent);
      this.componentRef.changeDetectorRef.detectChanges();
    }
  }

  private fill(text: string, type: number) {
    this.componentRef.instance.text = text;
    this.componentRef.instance.type = type;
  }

  private destroy(duration) {
    Observable.timer(duration).subscribe(() => {
      this.componentRef.destroy();
      this.canShow = true;
    });
  }

  show(text: string, type: number, time?: number): void {
    const duration = time || 3000;
    this.create();
    this.fill(text, type);
    this.destroy(duration);
  }
}
