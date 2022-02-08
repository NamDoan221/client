import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { DOMAIN_SITE } from './base-url.define';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getOrderList(): Promise<any> {
    const options = this.createHeaderOption();
    const tokenDecode = jwt_decode(options.headers['x-access-token']);
    options.params = {
      id_customer: tokenDecode['id']
    }
    return new Promise((resolve, reject) => {
      this.http.get(`${DOMAIN_SITE()}api/order`, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public createOrder(body: any): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.post(`${DOMAIN_SITE()}api/order`, body, options).subscribe(result => {
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

}
