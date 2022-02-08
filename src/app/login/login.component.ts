import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountUser } from '../shared/services/api/account';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: AccountUser;
  public passwordVisible: boolean;
  public onLogin: boolean;
  constructor(
    private router: Router,
    private auth: AuthService,
    private toast: ToastrService
  ) {
    this.onLogin = false;
    this.passwordVisible = false;
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  async handlerLogin(): Promise<any> {
    this.onLogin = true;
    try {
      const result = await this.auth.login(this.user);
      localStorage.setItem('access-token', result);
      this.toast.success('Đăng nhập thành công!');
      const tokenDecode: any = jwt_decode(result);
      if (tokenDecode.isAdmin) {
        return this.router.navigate(['/admin']);
      }
      this.router.navigate(['/product']);
    } catch (error) {
      this.onLogin = false;
      this.toast.error('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin đăng nhập.');
      console.log(error);
    }
  }

  handlerSignUp(): any {
    this.router.navigate(['/signup']);
  }

  onChangeViewPassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

}
