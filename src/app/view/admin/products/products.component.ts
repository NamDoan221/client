import { cloneDeep } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ProductLibraryService } from 'src/app/shared/services/product-library.service';

@Component({
  selector: 'app-view-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public isVisible: boolean;
  public productSelected: any;
  public productList: Array<any>;
  public filterProduct: any;
  private productDefault: any;
  indexHover: number;
  constructor(
    private productLibraryService: ProductLibraryService
  ) {
    this.productList = [];
    this.filterProduct = {
      page: 1
    }
    this.isVisible = false;
    this.indexHover = -1;
    this.productDefault = {
      name: undefined,
      email: undefined,
      address: undefined,
      isAdmin: false
    };
    this.productSelected = cloneDeep(this.productDefault);
  }

  ngOnInit(): void {
    this.getListProducts();
  }

  async getListProducts() {
    try {
      const result = await this.productLibraryService.getProductList(this.filterProduct);
      this.productList = result.data;
    } catch (error) {
      this.productList = [];
      console.log(error);
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


  handlerSearchProduct(event) {
    this.getListProducts();
  }

  handlerEdit(product) {
    this.productSelected = cloneDeep(product);
    this.isVisible = true;
  }

  handlerAdd() {
    this.productSelected = cloneDeep(this.productDefault);
    this.isVisible = true;
  }

  handlerChangeChecked() {
    this.productSelected.isAdmin = !this.productSelected.isAdmin;
  }

  handleSave() {
    this.isVisible = false;
    if (this.productSelected._id) {
      return this.updateUser();
    }
    this.addUser();
  }

  async updateUser() {
    // try {
    //   const result = await this.usersService.updateUser(this.userSelected._id, this.userSelected);
    //   this.usersList = this.usersList.map(item => {
    //     if (item._id === this.userSelected._id) {
    //       return this.userSelected;
    //     }
    //     return item;
    //   })
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async addUser() {
    // try {
    //   const result = await this.usersService.addUser(this.userSelected);
    //   this.usersList = [result, ...this.usersList];
    // } catch (error) {
    //   console.log(error);
    // }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  async handlerDelete(user) {
    // try {
    //   const result = await this.usersService.deleteUser(user._id);
    //   const users = cloneDeep(this.usersList).filter(item => {
    //     return item._id !== user._id;
    //   });
    //   this.usersList = users;
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
