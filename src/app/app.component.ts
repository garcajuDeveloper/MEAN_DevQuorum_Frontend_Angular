import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title = 'Forum';
  public userIdentity;
  public usertoken;
  
  constructor( private _userService : UserService, private _router : Router, 
    private route : ActivatedRoute){
    this.userIdentity = _userService.getIdentity();
    this.usertoken = _userService.getToken();
  }

  ngOnInit(){
    console.log(this.userIdentity);
    console.log(this.usertoken);
  }

  ngDoCheck(){
    this.userIdentity = this._userService.getIdentity();
  }

  onLogout(){
    localStorage.clear();
    this.userIdentity = null;
    this.usertoken = null;
    this._router.navigate(['/home']);
  }
}
