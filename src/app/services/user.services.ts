import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Global } from './global';

@Injectable()
export class UserService{
    public url: string;
    public userIdentity;
    public userToken;

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

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('userIdentity'));
        (identity != null && identity != undefined) ? this.userIdentity = identity : this.userIdentity = null

        return this.userIdentity;
    }

    getToken(){
        let token = localStorage.getItem('userToken');
        (token != null && token != undefined) ? this.userToken = token : this.userToken = null
        
        return this.userToken;
    }

    updateUser(user): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'Application/json').set('Authorization', this.getToken());

        return this._http.put(this.url+'user/update', params, {headers: headers});
    }
}