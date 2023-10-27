import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import { Account } from "../model/Account";


@Injectable({
  providedIn: 'root'
})
export class AccountService
{

  private baseURL = "http://localhost:8080/api/v1/accounts";

  constructor(private httpClient:HttpClient)
  { }

  login(emailId:string, password:string):Observable<Account>
  {
    const info = {
      emailId: emailId,
      password: password
    }
    const params = new HttpParams({
      fromObject: info
    });
    return this.httpClient.post<Account>('http://localhost:8080/api/v1/login', params);
  }

  initAccount(id:number, userName:string):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info =
      {
        id: id,
        userName: userName
      }
    // @ts-ignore
    return this.httpClient.put<string>('http://localhost:8080/api/v1/user/updateAccount/' + id, JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }

  updateAccount(id:number, emailId:string, phone:string):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info =
      {
        id: id,
        emailId: emailId,
        phone: phone
      }
    // @ts-ignore
    return this.httpClient.put<string>('http://localhost:8080/api/v1/user/updateAccount/' + id, JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }

  resetPassword(id:number, password:string, oldPassword:string):Observable<string>
  {
    const info = {
      id: id,
      password: password,
      oldPassword: oldPassword
    }
    const params = new HttpParams({
      fromObject: info
    });
    // @ts-ignore
    return this.httpClient.post<string>('http://localhost:8080/api/v1/user/resetPassword/' + id, params, {responseType: 'text'});
  }


  adminUpdateAccount(id:number, emailId:string, phone:string, level:number,):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info =
      {
        id:id,
        emailId: emailId,
        phone: phone,
        level:level
      }
    // @ts-ignore
    return this.httpClient.put<string>('http://localhost:8080/api/v1/admin/updateUserAccount', JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }

  adminResetAccountPassword(id:number, password:string):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info =
      {
        id:id,
        password:password
      }
    // @ts-ignore
    return this.httpClient.put<string>('http://localhost:8080/api/v1/admin/resetUserPassword', JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }

  adminCreateAccount(emailId:string, password:string, role:string):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info =
      {
        emailId:emailId,
        password:password,
        role:role
      }
    // @ts-ignore
    return this.httpClient.post<string>('http://localhost:8080/api/v1/admin/createAccount', JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }

  getAccountById(id : number):Observable<Account>
  {
    return this.httpClient.get<Account>(`${this.baseURL}` + "/" + id);
  }


  adminDeleteAccountById(id:number):Observable<string>
  {
    // @ts-ignore
    return this.httpClient.delete<string>("http://localhost:8080/api/v1/admin/deleteAccount/" + id, {responseType: 'text'});
  }


  search(id:number, userName:string, emailId:string, phone:string, minLevel:number, maxLevel:number, role:string):Observable<Account []>
  {
    const info = {
      id:id,
      userName: userName,
      emailId:emailId,
      phone:phone,
      minLevel:minLevel,
      maxLevel:maxLevel,
      role: role
    }
    const params = new HttpParams({
      fromObject: info
    });
    return this.httpClient.post<Account[]>('http://localhost:8080/api/v1/admin/searchAccount', params);
  }

}
