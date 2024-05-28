import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

export function getToken(): String {
  return window.sessionStorage['GTM1TOKEN'];
}

export function saveToken(token: String) {
  window.sessionStorage['GTM1TOKEN'] = token;
}

export function removeToken() {
  window.sessionStorage.removeItem('GTM1TOKEN');
}

export function decodedToken() {
  var token = getToken() ?? '';
  return helper.decodeToken(String(token));
}
