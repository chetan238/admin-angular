import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl:string='http://localhost:2309/'
  constructor(private _httpclient:HttpClient) { }

  listUsers()
  {
return this._httpclient.get(this.baseurl+'view')
  }

  viewUser(id:string)
  {
    return this._httpclient.get(this.baseurl+'viewById/'+id);
  }

  addUser(userObj)
  {
    return this._httpclient.post(this.baseurl+'users',userObj);
  }

  deleteUser(id:any)
  {
    return this._httpclient.delete(this.baseurl+'delete/'+id)
  }

  editUser(id:any)
  {
    return this._httpclient.get(this.baseurl+'update/'+id)
  }

  updateUser(id:any,userObj:any)
  {
    return this._httpclient.put(this.baseurl+'Update/'+id,userObj);
  }
}
