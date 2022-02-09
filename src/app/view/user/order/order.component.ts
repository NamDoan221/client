import { cloneDeep } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-view-user-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public loading: boolean;
  public orderData: any;
  constructor(
    private router: Router,
    private auth: AuthService,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.getOrderData();
  }

  async getOrderData() {
    this.loading = true;
    try {
      const result = await this.orderService.getOrderList();
      this.orderData = result.data;
      console.log(this.orderData);
      
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log(error);
    }
  }

}
