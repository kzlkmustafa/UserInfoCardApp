import {Inject, Injectable} from '@angular/core';
import {Users} from "../models/users";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError,tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private  http:HttpClient,
    @Inject('apiUrl')
    private apiUrl: string
  ) { }

  users! : Users[];
  //:Observable<Users[]>
  getUsers(): void{
    this.http.get<Users[]>(this.apiUrl)
      .subscribe((data:Users[])=>{
      this.users = data;
    })
    }

  addUser(user: Users):Observable<any>{
    console.log(user)
    const headers = {'Content-Type': 'application/json'}
    return this.http.post(this.apiUrl, user, {headers})
  }

  updateUser(user: Users){
    return this.http.put(this.apiUrl + '/' + user.id , user)
  }

  deleteUser(user: Users){
    return this.http.delete(this.apiUrl + '/'+ user.id)
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage=''
    if (err.error instanceof ErrorEvent){
      errorMessage = 'Somethings wrong'+err.error.message
    }else{
      errorMessage = 'a system error'
    }
    return throwError(errorMessage);
  }
}
