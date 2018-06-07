
import {mergeMap, map, filter} from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MessageService } from './message/services/message.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';





@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('open', [
      state('0', style({ })),
      state('1',  style({ transform: 'translateX(-430px)' })),
      transition('* => *', animate('300ms cubic-bezier(.35, 0, .25, 1)'))
    ])
  ]
})
export class AppComponent implements OnInit {
  state = false;

  constructor (
    private title: Title,
    private meta: Meta,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }

        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),)
      .subscribe(data => {
        this.title.setTitle(data['title']);

        this.meta.removeTag('name="description"');
        this.meta.addTag({
          name: 'description',
          content: data['description']
        }, false);
      });
  }

  handleStateChange(state: boolean) {
    this.state = state;
  }
}
