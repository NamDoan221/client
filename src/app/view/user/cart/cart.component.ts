import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-view-user-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public loading: boolean;
  public cartData: any
  public total: number;
  public order: any;
  constructor(
    private router: Router,
    private cartService: CartService,
    private auth: AuthService,
    private orderService: OrderService
  ) {
    this.total = 0;
    this.order = {
      name: undefined,
      id_customer: undefined,
      name_customer: undefined,
      status: 0,
      totalMoney: undefined,
      products: []
    }
  }

  ngOnInit(): void {
    this.getCartData();
  }

  async getCartData() {
    this.loading = true;
    try {
      const result = await this.cartService.getCart();
      this.cartData = result.data;
      if (this.cartData && this.cartData.products) {
        this.cartData.products = this.cartData.products.map(product => {
          return {
            ...product,
            checked: false
          }
        })
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log(error);
    }
  }

  async handlerOrder(event) {
    const user = this.auth.getInforUser();
    if (!user) {
      return this.router.navigate(['login']);
    }
    this.order.id_customer = user.id;
    this.order.name_customer = user.name;
    this.order.name = cloneDeep(this.order.products).map(item => item.name).join(', ');
    this.order.products = this.order.products.map(item => {
      delete item.checked;
      delete item.price;
      return item;
    });
    try {
      const result = await this.orderService.createOrder(this.order);
      this.cartData.products = this.cartData.products.filter(product => !this.order.products.find(ele => ele.id === product.id));
      this.total = 0;
    } catch (error) {
      console.log(error);
    }
  }

  handlerChangeChecked(product) {
    product.checked = !product.checked;
    const totalPriceProduct = product.price * product.quantily;
    if (product.checked) {
      this.total += totalPriceProduct;
      this.order.totalMoney = this.total;
      return this.order.products.push(product)
    }
    this.total -= totalPriceProduct;
    this.order.totalMoney = this.total;
    this.order.products = this.order.products.length && this.order.products.filter(item => item._id !== product._id)
  }

  async handlerAddOne(event) {
    try {
      const result = await this.cartService.addProductToCart(event, { type: 'add' });
      this.cartData.products = cloneDeep(this.cartData.products).map(item => {
        if (item.id === event.id) {
          item.quantily++;
        }
        return item;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async handlerMinusOne(event) {
    try {
      const result = await this.cartService.addProductToCart(event, { type: 'minus' });
      this.cartData.products = cloneDeep(this.cartData.products).map(item => {
        if (item.id === event.id) {
          item.quantily--;
        }
        return item;
      });
    } catch (error) {
      console.log(error);
    }
  }

}
