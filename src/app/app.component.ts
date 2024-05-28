import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './core/services/loader.service';
import { NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { checkNull } from './core/configs/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'task-manager-fronend';

  public showHeader: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(public loader: LoaderService, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (
          event.url == '/' ||
          event.url == '/register' ||
          !checkNull(event?.url)
        ) {
          this.showHeader.next(false);
        } else {
          this.showHeader.next(true);
        }
      }
    });
  }

  ngOnInit(): void {}
}
