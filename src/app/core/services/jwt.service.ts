import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(): String {
    var token = window.localStorage['jwtToken'];
    return token ? token: null;
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
