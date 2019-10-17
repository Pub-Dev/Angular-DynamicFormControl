import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IHttpRequest } from './interfaces/ihttp-request';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HttpService {

  constructor(private httpClient: HttpClient) { 
    
  }

  get<IHttpResponse>(url: string) : Observable<HttpResponse<IHttpResponse>>{
    return this.httpClient.get<IHttpResponse>(url, { observe: 'response' });
  }

  post<IHttpResponse>(url: string, request: IHttpRequest) : Observable<HttpResponse<IHttpResponse>>{
    return this.httpClient.post<IHttpResponse>(url, request, { observe: 'response' });
  }

  put<IHttpResponse>(url: string, request: IHttpRequest) : Observable<HttpResponse<IHttpResponse>>{
    return this.httpClient.put<IHttpResponse>(url, request, { observe: 'response' });
  }

  delete<IHttpResponse>(url: string) : Observable<HttpResponse<IHttpResponse>>{
    return this.httpClient.delete<IHttpResponse>(url, { observe: 'response' });
  }
}