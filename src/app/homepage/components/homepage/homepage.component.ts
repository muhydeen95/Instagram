import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public currentTabIndex: number = 1;
  public pptyCategories = [
    {
      id: 1, title: 'Buy a home', btnText: 'Browse homes', icon: '',
      body: `Find your place with an immersive photo experience and most listings, including things you won't find anywhere else`
    },
    {
      id: 2, title: 'Sell a home', btnText: 'Start selling', icon: '',
      body: `Find your place with an immersive photo experience and most listings, including things you won't find anywhere else`
    },
    {
      id: 3, title: 'Rent a home', btnText: 'Find rentals', icon: '',
      body: `Find your place with an immersive photo experience and most listings, including things you won't find anywhere else`
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goTo(id: number) {
    this.router.navigate(['/properties/detail', id]);
  }

}
