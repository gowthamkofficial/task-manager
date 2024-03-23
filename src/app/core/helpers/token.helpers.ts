import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

export function getToken(): String {
  return window.localStorage['GTM1TOKEN'];
}

export function saveToken(token: String) {
  window.localStorage['GTM1TOKEN'] = token;
}

export function removeToken() {
  window.localStorage.removeItem('GTM1TOKEN');
}

export function decodedToken() {
  var token = getToken() ?? '';
  return helper.decodeToken(String(token));
}
