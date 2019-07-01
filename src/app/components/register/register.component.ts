import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.services';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public page_title : String;
  public user : User;
  public status: string;

  constructor(
    private _userService : UserService
  ) { 
    this.page_title = 'Sign Up';
    this.user = new User('','','','','','','ROLE_USER');
  }

  ngOnInit() {
    console.log(this._userService.test());
  }

  onSubmit(form){
    this._userService.onRegistUser(this.user).subscribe(
        response => {
          (response.user && response.user._id) ? this.status = 'success' : this.status = 'error';
          form.reset();
        },
        error => {
          console.log(error);
        }
    )
  }

}
