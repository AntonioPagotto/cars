import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Register from '../models/user/Register';

const API_URL = 'https://dogsapi.origamid.dev/json'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  // userPost(register: Register) {
  //   console.log(JSON.stringify(register))
  //   fetch(`${API_URL}/api/user`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({register})
  //   })
  //   .then(response => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(json => {
  //     console.log(json);
  //     return json;
  //   })
  // }
  userPost(register: Register) {
    console.log(register)
    return this.http.post(`${API_URL}/api/user`, { body: JSON.stringify(register) }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }



}
