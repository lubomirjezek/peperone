import { throwError } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export abstract class BaseService {
  constructor(
    protected http: HttpClient,
    @Inject('API_URL') protected apiUrl: string
  ) { }

  protected buildUrl(path: string | any[], get: Object = {}): string {
    return this.apiUrl + this.buildPath(path) + this.processGetParams(get);
  }

  protected buildPath(path: string | string[]): string {
    return typeof path === 'string' ? path : path.join('/');
  }

  protected processGetParams(get: Object): string {
    const parts = [];

    Object.keys(get).forEach((prop) => {
      const val = get[prop];
      if (val) {
        if (val instanceof Array) {
          let string = val.reduce((sum, value) => {
            sum.push(`${prop}[]=` + encodeURI(value));
            return sum;
          }, []);
          parts.push(string.join('&'));
        } else {
          parts.push(`${prop}=` + encodeURI(get[prop]));
        }
      }
    });

    return parts.length ? '?' + parts.join('&') : '';
  }

  get<T>(url: string) {
    return this.http
      .get<T>(url)
      .pipe(
        catchError(res => this.handleError(res, url))
      )
  }

  post<T>(url: string, body: any | null) {
    return this.http
      .post<T>(url, body)
      .pipe(
        catchError(res => this.handleError(res, url))
      )
  }

  patch<T>(url: string, body: any) {
    return this.http
      .patch<T>(url, body)
      .pipe(
        catchError(res => this.handleError(res, url))
      )
  }

  del<T>(url: string) {
    return this.http
      .delete<T>(url)
      .pipe(
        catchError(res => this.handleError(res, url))
      )
  }

  handleError(response: HttpErrorResponse, url: string) {
    console.log('Error for URL:', url, response);

    return throwError(response);
  }

}
