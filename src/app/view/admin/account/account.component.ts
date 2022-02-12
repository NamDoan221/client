import { cloneDeep } from 'lodash';
import { AuthService } from './../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { ToastrService } from 'ngx-toastr';
import { PassWord } from './api/password';
import { AccountRegister } from 'src/app/shared/services/api/account';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

@Component({
  selector: 'app-view-admin-me',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public account: any;
  public tempAccount: any;
  public password: PassWord;
  public passwordClone: PassWord;
  public oldPasswordVisible: boolean;
  public newPasswordVisible: boolean;
  public reNewPasswordVisible: boolean;
  fileList: NzUploadFile[] = [];
  constructor(
    private auth: AuthService,
    private toast: ToastrService
  ) {
    this.password = {
      old_password: '',
      new_password: '',
      renew_password: ''
    };
    this.oldPasswordVisible = false;
    this.newPasswordVisible = false;
    this.reNewPasswordVisible = false;
    this.passwordClone = cloneDeep(this.password);
    this.account = {
      name: undefined,
      avatar: undefined,
      address: undefined,
      email: undefined,
      phone_number: undefined
    }
    this.tempAccount = cloneDeep(this.account);
  }

  async ngOnInit(): Promise<void> {
    try {
      const result = await this.auth.getAccount();
      this.account = result.data;
      this.tempAccount = cloneDeep(this.account);
    } catch (error) {
      console.log(error);
    }
  }

  changeAvatar(event): void {
    console.log(1, event);
    this.fileList = [];
  }

  async changePassword(): Promise<void> {
    if (this.password.new_password !== this.password.renew_password) {
      this.toast.warning('Mật khẩu mới không trùng khớp!');
      return;
    }
    try {
      await this.auth.changePassword(this.password);
      this.password = cloneDeep(this.passwordClone);
      this.toast.success('Thao tác thành công');
    } catch (error) {
      this.toast.error('Thao tác không thành công');
      console.log(error);
    }
  }

  async changeInfo(): Promise<void> {
    try {
      const result = await this.auth.changeInfo(this.account);
      this.tempAccount = cloneDeep(this.account);
      this.auth.setAccountLocalStorage(result);
      this.toast.success('Thao tác thành công');
    } catch (error) {
      this.toast.error('Thao tác không thành công');
      console.log(error);
    }
  }

  changeViewPass(type: string): void {
    switch (type) {
      case 'oldPassword':
        this.oldPasswordVisible = !this.oldPasswordVisible;
        break;
      case 'newPassword':
        this.newPasswordVisible = !this.newPasswordVisible;
        break;
      case 'reNewPassword':
        this.reNewPasswordVisible = !this.reNewPasswordVisible;
        break;
      default:
        break;
    }
  }

}
