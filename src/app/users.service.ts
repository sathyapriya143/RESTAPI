import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  updateUser() {
    const customHeaders = new HttpHeaders({
      'authenticationTonken': '122333444',
      'content-type': 'application',
      'userId': 'usertesting123'
    })
    const putBody = {
      name: 'sathiyapriya',
      userId: 100
    };
    return this.http.put('https://jsonplaceholder.typicode.com/users/1', putBody, { headers: customHeaders })
  }
  addUsers(body: any) {
    const customHeaders = new HttpHeaders({
      'authenticationTonken': '122333444'
    })
    return this.http.post('https://jsonplaceholder.typicode.com/posts', body, { headers: customHeaders });
  }
  getusers() {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authenticationToken': 'jayachandra'
    });
    const params1 = new HttpParams()
      .set('pageNum', '1')
      .set('pageSize', '10');
    return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: headers, params: params1 });
  }
  deleteUser(id: any): Observable<object> {
    const headers = new HttpHeaders({
      'content-type': 'application',
      'authenticationToken': '09865544'
    });
    const params = new HttpParams()
      .set('source', 'Google')
    return this.http.delete('https://jsonplaceholder.typicode.com/users/1' + id, { headers: headers });
  }
}
