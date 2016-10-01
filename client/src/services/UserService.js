import $ from 'jquery';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

const GET = 'GET';
const POST = 'POST';
const JSON = 'application/json;charset=utf-8';

export const get = (url) => Observable.defer(() => $.ajax({
  url,
  type: GET,
  contentType: JSON
}));

export const me = get('/me');
export const users = get('/api/users');

/*
  users() {
    return this.getUsers()
               .map(res => res.json() || {})
               .map(json => json['_embedded'])
               .map(_embedded => _embedded.users)
               .map(users => users.map(user => Users.of(user.id, user.username)))
               .catch(this.handleError);
  }

  handleError(error) {
    console.log('error', error);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log('errMsg', errMsg);
    return Observable.throw(errMsg)
  }

 public getUsers() {
   this.apiService.users()
     .subscribe(
       data => this.users = data,
       error => console.log('f*ck...', error)
     );
 }
*/
