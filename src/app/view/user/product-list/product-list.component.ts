import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductLibraryService } from 'src/app/shared/services/product-library.service';

@Component({
  selector: 'app-view-user-product_list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productCategory: Array<any>;
  public products: Array<any>;
  public filterProduct: any;
  public loading: boolean;

  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastrService,
    private productLibraryService: ProductLibraryService
  ) {
    this.filterProduct = {
      page: 1,
      per_page: 15
    };
  }

  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    this.getProductCategory();
    this.getProductList();
  }

  async getProductCategory() {
    try {
      const result = await this.productLibraryService.getProductCategory();
      this.productCategory = result.data;
    } catch (error) {
      this.productCategory = [];
      console.log(error);
    }
  }

  async getProductList() {
    this.loading = true;
    try {
      const result = await this.productLibraryService.getProductList(this.filterProduct);
      this.products = result.data;
      this.loading = false;
    } catch (error) {
      this.products = [];
      this.loading = false;
      console.log(error);
    }
  }

  handlerSearchProduct(event) {
    this.getProductList();
  }

  handlerSearchByCategory(category) {
    this.filterProduct.category = category._id;
    this.getProductList();
  }

  handlerAddProductToCart(event) {
    // this.productInCart++;
  }
}
