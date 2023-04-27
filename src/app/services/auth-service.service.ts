import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loginUser=localStorage.getItem('auth')
  constructor(private http:HttpClient) { }
  apiUrl= 'http://localhost:3000/user';
  GetAll(){
   return this.http.get(this.apiUrl)
  }
  GetByCode(code:any){
    return  this.http.get(this.apiUrl +'/'+ code);
  }
  registerUser(userdata:any){
    return  this.http.post(this.apiUrl , userdata);
  }

}
