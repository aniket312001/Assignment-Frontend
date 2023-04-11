import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  url:any = environment.BaseURL

  login(data:any):Observable<any>{
    return this.http.post<any>(this.url+'login',data);
  }

  getAllEmployees(data:any):Observable<any>{
    return this.http.post<any>(this.url+'getAllEmployee',data);
  }


  getSingleEmployee(id:any):Observable<any>{
    return this.http.get<any>(this.url+'employee/'+id);
  }


  addEmployee(data:any):Observable<any>{
    return this.http.post<any>(this.url+'employee',data);
  }


  updateEmployee(data:any):Observable<any>{
    return this.http.put<any>(this.url+'employee',data);
  }

  deleteEmployee(id:any):Observable<any>{
    return this.http.delete<any>(this.url+'employee/'+id);
  }

  getAllDesignation():Observable<any>{
    return this.http.get<any>(this.url+'designation');
  }


}
