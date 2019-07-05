import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.services';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public identity;
  public gettoken = true;
  public userToken;

  constructor(
    private _userService:UserService,
    private _router : Router,
    private _route : ActivatedRoute
    ) { 
    this.page_title = "Who you are?";
    this.user = new User('','','','','','','ROLE_USER');

  }

  ngOnInit() {
  }

  onSubmit(form){
    this._userService.onSignUp(this.user).subscribe(
      response => {
        if(response.userFinded && response.userFinded._id) {
          this.identity = response.userFinded;
          localStorage.setItem('userIdentity', JSON.stringify(this.identity));

          this._userService.onSignUp(this.user, this.gettoken).subscribe(
            response => {
              if(response.token) {
                this.userToken = response.token;
                localStorage.setItem('userToken', this.userToken);
                this.status = 'success';
                this._router.navigate(['/home']);
              }else {
                this.status = 'error';
                console.log(this.status);
              } 
            },
            error => {
              this.status = 'error';
              console.log(error);
            } 
          );  
        }else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    )
  }

}
