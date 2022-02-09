import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user-order-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() orderData: any;
  @Input() status: number;

  constructor() { }

  ngOnInit(): void {
  }

  handlerCancelOrder() {
    
  }

}
