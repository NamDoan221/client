import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-view-user-product_list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any;

  @Output() addProductToCart = new EventEmitter();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  handlerViewDetail(event) {
    console.log(this.product);

  }

  async handlerAddToCart(event) {
    const product = {
      id: this.product._id,
      name: this.product.name,
      image: this.product.image[0],
      price: this.product.price,
      quantily: 1
    }
    const result = await this.cartService.addProductToCart(product);
    this.addProductToCart.emit();
  }

}
