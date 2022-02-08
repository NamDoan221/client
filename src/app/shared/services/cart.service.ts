import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { DOMAIN_SITE } from './base-url.define';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  public id_generate: string;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.id_generate = localStorage.getItem('id_generate');
  }

  public getCart(): Promise<any> {
    const options = this.createHeaderOption();
    const tokenDecode = options.headers && options.headers['x-access-token'] ? jwt_decode(options.headers['x-access-token']) : { id: this.id_generate };
    options.params = {
      id_customer: tokenDecode['id']
    }
    return new Promise((resolve, reject) => {
      this.http.get(`${DOMAIN_SITE()}api/cart`, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public addProductToCart(body: any): Promise<any> {
    const options = this.createHeaderOption();
    const tokenDecode = options.headers && options.headers['x-access-token'] ? jwt_decode(options.headers['x-access-token']) : { id: this.id_generate };
    options.params = {
      id_customer: tokenDecode['id']
    }
    return new Promise((resolve, reject) => {
      this.http.put(`${DOMAIN_SITE()}api/cart`, body, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  private createHeaderOption(): any {
    if (localStorage.getItem('access-token')) {
      return {
        headers: {
          'x-access-token': localStorage.getItem('access-token')
        }
      };
    }
    return {};
  }

}
