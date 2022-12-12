import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  users : any[];
  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000/api';

  public getUsers() : any[] {
    return this.users;
    //return this.http.get<User[]>(this.rootURL + `/users`);
}

//   public getUsers(): Observable<User[]> {
//     return this.users;
//     //return this.http.get<User[]>(this.rootURL + `/users`);
// }

  addUser(user: any) {
    console.log(user);
    return this.users.push(user);
    //return this.http.post(this.rootURL + '/user', {user});
  }

}
