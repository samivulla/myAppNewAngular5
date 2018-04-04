import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpResponse} from '@angular/common/http';
import { ITests,People } from './test';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class MyserviceService {
  private _url: string = "https://api.myjson.com/bins/14638t";
  private _url1: string = "https://api.myjson.com/bins/p41ct";
  private _url2: string ="https://api.myjson.com/bins/1bln4b";
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(this._url);
  }
  getAllData(): Observable<People[]>{
    return this.http.get<People[]>(this._url1);
  }
  getReverseData(){
    return this.getAllData();
  }

  getMyData(): Observable<ITests[]>{
    return this.http.get<ITests[]>(this._url2);
  }

}
