import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DOMAIN_SITE } from './base-url.define';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  public getUserList(query: any): Promise<any> {
    const options = this.createHeaderOption();
    options.params = query;
    return new Promise((resolve, reject) => {
      this.http.get(`${DOMAIN_SITE()}api/users`, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public updateUser(id_user: string, body: any): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.put(`${DOMAIN_SITE()}api/users/${id_user}`, body, options).subscribe(result => {
        return resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  public addUser(body: any): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.post(`${DOMAIN_SITE()}api/auth/register`, body, options).subscribe(result => {
        const tokenDecode = jwt_decode(result['token']);
        return resolve(tokenDecode);
      }, err => {
        reject(err);
      });
    });
  }

  public deleteUser(id_user: string): Promise<any> {
    const options = this.createHeaderOption();
    return new Promise((resolve, reject) => {
      this.http.delete(`${DOMAIN_SITE()}api/users/${id_user}`, options).subscribe(result => {
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
