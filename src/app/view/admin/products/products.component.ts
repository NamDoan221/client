import { cloneDeep } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ProductLibraryService } from 'src/app/shared/services/product-library.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-view-admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public loading: boolean;
  public isVisible: boolean;
  public productSelected: any;
  public productList: Array<any>;
  public filterProduct: any;
  private productDefault: any;
  public productCategory: Array<any>;
  indexHover: number;
  constructor(
    private productLibraryService: ProductLibraryService,
    private modal: NzModalService
  ) {
    this.productList = [];
    this.filterProduct = {
      page: 1
    }
    this.isVisible = false;
    this.indexHover = -1;
    this.productDefault = {
      image: undefined,
      inventory: undefined,
      name: undefined,
      price: undefined,
      supplier: undefined
    };
    this.productSelected = cloneDeep(this.productDefault);
    this.productCategory = [];
  }

  ngOnInit(): void {
    this.getListProducts();
    this.getListProductCategory();
  }

  async getListProducts() {
    this.loading = true;
    try {
      const result = await this.productLibraryService.getProductList(this.filterProduct);
      this.productList = result.data;
    } catch (error) {
      this.productList = [];
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  async getListProductCategory() {
    try {
      const result = await this.productLibraryService.getProductCategory();
      this.productCategory = result.data;
    } catch (error) {
      this.productCategory = [];
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

  handlerSave() {
    this.isVisible = false;
    if (this.productSelected._id) {
      return this.updateProduct();
    }
    this.addProduct();
  }

  async updateProduct() {
    try {
      const result = await this.productLibraryService.updateProduct(this.productSelected._id, this.productSelected);
      this.productList = this.productList.map(item => {
        if (item._id === this.productSelected._id) {
          return this.productSelected;
        }
        return item;
      })
    } catch (error) {
      console.log(error);
    }
  }

  async addProduct() {
    try {
      const result = await this.productLibraryService.addProduct(this.productSelected);
      this.productList = [result, ...this.productList];
    } catch (error) {
      console.log(error);
    }
  }

  handlerCancel(): void {
    this.isVisible = false;
  }

  async handlerDelete(product) {
    this.modal.confirm({
      nzTitle: '<span class="ms-font-head-5s">B???n c?? mu???n x??a s???n ph???m n??y?</span>',
      nzContent: `<span class="ms-font-head-5">S???n ph???m:</span> <span class="ms-font-head-5s">${product.name}</span>`,
      nzOkText: '?????ng ??',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: async () => {
        try {
          const result = await this.productLibraryService.deleteProduct(product._id);
          const users = cloneDeep(this.productList).filter(item => {
            return item._id !== product._id;
          });
          this.productList = users;
        } catch (error) {
          console.log(error);
        }
      },
      nzCancelText: 'H???y b???'
    });
    
  }
}
