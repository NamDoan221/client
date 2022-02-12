import { cloneDeep } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { ProductLibraryService } from 'src/app/shared/services/product-library.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-view-admin-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public loading: boolean;
  public isVisible: boolean;
  public categorySelected: any;
  public categoryList: Array<any>;
  public filterCategory: any;
  private categoryDefault: any;
  indexHover: number;
  constructor(
    private productLibraryService: ProductLibraryService,
    private modal: NzModalService
  ) {
    this.categoryList = [];
    this.filterCategory = {
      page: 1
    }
    this.isVisible = false;
    this.indexHover = -1;
    this.categoryDefault = {
      name: undefined
    };
    this.categorySelected = cloneDeep(this.categoryDefault);
  }

  ngOnInit(): void {
    this.getListCategory();
  }

  async getListCategory() {
    this.loading = true;
    try {
      const result = await this.productLibraryService.getProductCategory(this.filterCategory);
      this.categoryList = result.data;
    } catch (error) {
      this.categoryList = [];
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


  handlerSearchCategory(event) {
    this.getListCategory();
  }

  handlerEdit(category) {
    this.categorySelected = cloneDeep(category);
    this.isVisible = true;
  }

  handlerAdd() {
    this.categorySelected = cloneDeep(this.categoryDefault);
    this.isVisible = true;
  }

  handlerSave() {
    this.isVisible = false;
    if (this.categorySelected._id) {
      return this.updateCategory();
    }
    this.addCategory();
  }

  async updateCategory() {
    try {
      const result = await this.productLibraryService.updateCategory(this.categorySelected._id, this.categorySelected);
      this.categoryList = this.categoryList.map(item => {
        if (item._id === this.categorySelected._id) {
          return this.categorySelected;
        }
        return item;
      })
    } catch (error) {
      console.log(error);
    }
  }

  async addCategory() {
    try {
      const result = await this.productLibraryService.addCategory(this.categorySelected);
      this.categoryList = [result, ...this.categoryList];
    } catch (error) {
      console.log(error);
    }
  }

  handlerCancel(): void {
    this.isVisible = false;
  }

  async handlerDelete(category) {
    this.modal.confirm({
      nzTitle: '<span class="ms-font-head-5s">Bạn có muốn xóa danh mục sản phẩm này?</span>',
      nzContent: `<span class="ms-font-head-5">Danh mục sản phẩm:</span> <span class="ms-font-head-5s">${category.name}</span>`,
      nzOkText: 'Đồng ý',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: async () => {
        try {
          const result = await this.productLibraryService.deleteCategory(category._id);
          const users = cloneDeep(this.categoryList).filter(item => {
            return item._id !== category._id;
          });
          this.categoryList = users;
        } catch (error) {
          console.log(error);
        }
      },
      nzCancelText: 'Hủy bỏ'
    });
    
  }
}
