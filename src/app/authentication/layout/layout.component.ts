import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isLogin: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const currentRoute = this.router.url;
    if(currentRoute === '/authentication/login') {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  public changeTab(value: boolean) {
    this.isLogin = value;
  }

}
