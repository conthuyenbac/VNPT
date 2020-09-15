import { Injectable } from '@angular/core';
import { API } from './api';
import {UrlQuery} from '../model/UrlQuery';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private api: API
  ) { }

  getList(urlQuery:UrlQuery){
    let url = `/api/Category/list-by-user/?PageNumber=${urlQuery.pageNumber}&PageSize=${urlQuery.pageSize}&Keyword=${urlQuery.keyword}`;
    return this.api.get(url);
  }

  add(data:any){
    let url = '/api/Category/add';
    return this.api.post(url, data);
  }

  edit(data:any){
    let url = '/api/Category/edit';
    return this.api.put(url, data);
  }

  delete(id:number){
    let url = `/api/Category/delete/${id}`;
    return this.api.delete(url);
  }

  get(id:number){
    let url = `/api/Category/get-by-id/${id}`;
    return this.api.get(url);
  }
}
