import { cloneDeep } from 'lodash';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import ResizeObserver from 'resize-observer-polyfill';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-view-admin-user_management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public loading: boolean;
  public isVisible: boolean;
  public userSelected: any;
  public usersList: Array<any>;
  public filterUser: any;
  private userDefault: any;
  indexHover: number;
  constructor(
    private modal: NzModalService,
    private usersService: UsersService
  ) {
    this.usersList = [];
    this.filterUser = {
      page: 1
    }
    this.isVisible = false;
    this.indexHover = -1;
    this.userDefault = {
      name: undefined,
      email: undefined,
      address: undefined,
      isAdmin: false
    };
    this.userSelected = cloneDeep(this.userDefault);
  }

  ngOnInit(): void {
    this.getListUsers();
  }

  async getListUsers() {
    this.loading = true;
    try {
      const result = await this.usersService.getUserList(this.filterUser);
      this.usersList = result.data;
    } catch (error) {
      this.usersList = [];
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


  handlerSearchUser(event) {
    this.getListUsers();
  }

  handlerEdit(user) {
    this.userSelected = cloneDeep(user);
    this.isVisible = true;
  }

  handlerAdd() {
    this.userSelected = cloneDeep(this.userDefault);
    this.isVisible = true;
  }

  handlerSave() {
    this.isVisible = false;
    if (this.userSelected._id) {
      return this.updateUser();
    }
    this.addUser();
  }

  async updateUser() {
    try {
      const result = await this.usersService.updateUser(this.userSelected._id, this.userSelected);
      this.usersList = this.usersList.map(item => {
        if (item._id === this.userSelected._id) {
          return this.userSelected;
        }
        return item;
      })
    } catch (error) {
      console.log(error);
    }
  }

  async addUser() {
    try {
      const result = await this.usersService.addUser(this.userSelected);
      this.usersList = [result, ...this.usersList];
    } catch (error) {
      console.log(error);
    }
  }

  handlerCancel(): void {
    this.isVisible = false;
  }

  handlerDelete(user) {
    this.modal.confirm({
      nzTitle: '<span class="ms-font-head-5s">Bạn có muốn xóa tài khoản này?</span>',
      nzContent: `<span class="ms-font-head-5">Tài khoản:</span> <span class="ms-font-head-5s">${user.name}</span>`,
      nzOkText: 'Đồng ý',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: async () => {
        try {
          const result = await this.usersService.deleteUser(user._id);
          const users = cloneDeep(this.usersList).filter(item => {
            return item._id !== user._id;
          });
          this.usersList = users;
        } catch (error) {
          console.log(error);
        }
      },
      nzCancelText: 'Hủy bỏ'
    });
  }

}
