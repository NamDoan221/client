import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-view-admin-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public loading: boolean;
  public isVisible: boolean;
  public orderSelected: any;
  public orderList: Array<any>;
  public filterOrder: any;
  public statusOrder: Array<any>;
  indexHover: number;
  constructor(
    private orderService: OrderService,
    private modal: NzModalService
  ) {
    this.orderList = [];
    this.filterOrder = {
      page: 1
    }
    this.isVisible = false;
    this.indexHover = -1;
    this.statusOrder = [
      { key: 0, label: 'Đang chuẩn bị hàng' },
      { key: 1, label: 'Đang giao hàng' },
      { key: 2, label: 'Đã nhận hàng' },
      { key: -1, label: 'Đã hủy' }
    ];
  }

  ngOnInit(): void {
    this.getListOrder();
  }

  async getListOrder() {
    this.loading = true;
    try {
      const result = await this.orderService.getOrderList(this.filterOrder);
      this.orderList = result.data;
    } catch (error) {
      this.orderList = [];
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  resetIndexHover(event) {
    event.stopPropagation();
    this.indexHover = -1;
  }

  setIndexHover(event, index) {
    event.stopPropagation();
    this.indexHover = index;
  }


  handlerSearchOrder(event) {
    this.getListOrder();
  }

  handlerEdit(order) {
    this.orderSelected = cloneDeep(order);
    this.isVisible = true;
  }

  handlerSave() {
    this.isVisible = false;
    this.updateProduct();
  }

  async updateProduct() {
    try {
      const result = await this.orderService.updateOrder(this.orderSelected);
      this.orderList = this.orderList.map(item => {
        if (item._id === this.orderSelected._id) {
          return this.orderSelected;
        }
        return item;
      })
    } catch (error) {
      console.log(error);
    }
  }

  handlerCancel(): void {
    this.isVisible = false;
  }
}
