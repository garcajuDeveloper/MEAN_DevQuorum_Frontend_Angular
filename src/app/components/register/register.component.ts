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
    //Seguir desde la carpeta numero 52 video 4
    console.log(this.user);
  }

}
