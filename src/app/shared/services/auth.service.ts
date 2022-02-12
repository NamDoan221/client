import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { PassWord } from './../../account/api/password';
import { AccountRegister, AccountUser } from './api/account';
import { DOMAIN_SITE } from './base-url.define';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getAccountLocalStorage(): any {
    return JSON.parse(localStorage.getItem('account-info'));
  }

  public setAccountLocalStorage(account: AccountUser): any {
    localStorage.setItem('account-info', JSON.stringify(account));
  }

  public getInforUser(): any {
    if (localStorage.getItem('access-token')) {
      return jwt_decode(localStorage.getItem('access-token'));
    }
    return undefined;
  }

  public getAccount(): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.get(`${DOMAIN_SITE()}api/auth/me`, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  private createHeaderOption(): any {
    return {
      headers: {
        'x-access-token': localStorage.getItem('access-token')
      }
    };
  }

  public login(body: AccountUser): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${DOMAIN_SITE()}api/auth/login`, body).subscribe((result: any) => {
        return resolve(result.token);
      }, err => {
        reject(err);
      });
    });
  }

  public logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${DOMAIN_SITE()}api/auth/logout`).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public register(body: AccountRegister): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(`${DOMAIN_SITE()}api/auth/register`, body).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public changePassword(password: PassWord): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.put(`${DOMAIN_SITE()}api/auth/change-pass`, password, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public changeInfo(body: any): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.put(`${DOMAIN_SITE()}api/users/${body._id}`, body, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public redirectToLogin(): void {
    this.router.navigate(['login']);
  }
}

@Injectable()
export class UserCanActive implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.auth.getInforUser();
    if (!token) {
      localStorage.clear();
      this.auth.redirectToLogin();
      return false;
    }
    if (state.url.split('/')[1] !== 'admin') {
      return true;
    }
    if (!token.isAdmin) {
      this.toast.error('Bạn không có quyền truy cập chức năng này');
      this.router.navigate(['product']);
      return false;
    }
    return true
  }
}
