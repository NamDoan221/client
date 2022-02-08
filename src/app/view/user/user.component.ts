import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public productInCart: number;
  public user: any;

  constructor(
    private router: Router,
    private cartService: CartService,
    private auth: AuthService,
    private toast: ToastrService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.user = this.auth.getInforUser();
    const result = await this.cartService.getCart();
    if (result && result.data && result.data.products && result.data.products.length) {
      this.productInCart = result.data.products.length;
    }
  }

  handlerViewCart(event) {
    this.router.navigate(['product/cart']);
  }

  backToProduct(event) {
    this.router.navigate(['product/list']);
  }

  handlerOrder(event) {
    this.router.navigate(['product/order']);
  }

  handlerLogin(event) {
    this.router.navigate(['login']);
  }

  async handlerLogout(event) {
    try {
      const result = await this.auth.logout();
      localStorage.removeItem('access-token');
    } catch (error) {
      this.toast.error('Thao tác thất bại!');
      console.log(error);
    }
  }
}
