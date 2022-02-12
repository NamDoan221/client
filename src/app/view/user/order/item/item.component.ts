import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-user-order-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() orderData: any;
  @Input() status: number;

  @Output() onCancelOrder = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handlerCancelOrder(event) {
    this.onCancelOrder.emit(event);
  }

}
