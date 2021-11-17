import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('count') count!: number | undefined;
  @Input('name') name!: string;
  @Input('route') route!: string;
  @Input('loading') loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
