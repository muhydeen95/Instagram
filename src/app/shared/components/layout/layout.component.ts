import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public showMinimized: boolean = false;
  public routeLoading: boolean = false;

  ngOnInit(): void {}

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => {
          if (event instanceof RouteConfigLoadStart) {
            this.routeLoading = true;
          } else if (event instanceof RouteConfigLoadEnd) {
            this.routeLoading = false;
          }
          return event instanceof NavigationEnd;
        })
      )
      .subscribe((event: any) => {});
  }
  public showMinimizedMenu(value: any): void {
    this.showMinimized = value;
  }
}
