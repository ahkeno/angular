import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Item } from './../models/item';
import { WrappedCollection } from './wrapped.collection';


@Injectable()
export class ItemService {
    private rootUrl = `${environment.MOCK}`;  
    private urlitems = this.rootUrl + 'items.json';
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    constructor(private http: HttpClient) {}
    getAllItems():Observable<WrappedCollection<Item>>{
  		
  		return this.http.get<WrappedCollection<Item>>(this.urlitems).pipe(
  			tap(itemList => console.log(itemList)),
      	catchError((error:any) => {
          return Observable.throw(error);
        }) // to do error notification while service fail
      		);
  	}
}
