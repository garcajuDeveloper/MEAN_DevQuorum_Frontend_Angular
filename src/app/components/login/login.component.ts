import { Component, OnInit } from '@angular/core';
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

  constructor(private _userService:UserService) { 
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

          this._userService.onSignUp(this.user, this.gettoken).subscribe(
            response => {
              if(response.token) {
                console.log(response.token);
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
