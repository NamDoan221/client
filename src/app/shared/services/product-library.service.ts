import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DOMAIN_SITE } from './base-url.define';

@Injectable({
  providedIn: 'root',
})
export class ProductLibraryService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getProductCategory(): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.get(`${DOMAIN_SITE()}api/category`, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public getProductList(query: any): Promise<any> {
    const options = this.createHeaderOption();
    options.params = query;
    return new Promise((resolve, reject) => {
      this.http.get(`${DOMAIN_SITE()}api/product`, options).subscribe(result => {
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
