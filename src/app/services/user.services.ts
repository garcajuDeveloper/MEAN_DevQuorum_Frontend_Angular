import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Global } from './global';

@Injectable()
export class UserService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url = Global.url;
    }

    test(){
        return 'The service is working';
    }

    onRegistUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/register', params, {headers: headers});      
    }
    
    onSignUp(user, gettoken = null ): Observable<any> {
        if(gettoken != null) {
            user.gettoken = gettoken;
        }

        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + '/login', params, {headers: headers});
    }
}