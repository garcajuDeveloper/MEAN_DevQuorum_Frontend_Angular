import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.services';
import { Global } from '../../services/global';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
  providers: [ UserService]
})
export class UserSettingsComponent implements OnInit {
  public page_title: string;
  public user: User;
  public userData;
  public token;
  public status;
  public afuConfig; //Angular file uploader config
  public url;

  constructor( private _router: Router, private _route: ActivatedRoute,
    private _userService: UserService) {
    this.page_title ="User Settings";
    this.userData = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.userData;
    this.url = Global.url;
    this.afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg, .jpeg, .gif, .png, .svg",
      maxSize: "50",
      uploadAPI: {
        url : this.url+"avatar",
        headers: {
          Authorization: this.token
        }
      },
      theme: 'attachPin',
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText: "Upload your avatar image"
    };
  }

  avatarUpload(data){ 
    let data_avatar =  JSON.parse(data.response);
    this.user.image = data_avatar.user.image;
    console.log(this.user);
  }

  ngOnInit() {
  }

  onSubmit(){
    this._userService.updateUser(this.user).subscribe(
      response => {
        this.status = 'success';
        (response.userUpdated) ? localStorage.setItem('userIdentity', JSON.stringify(this.user)) : this.status = 'error';
      },
      error => {
        this.status = error;
        console.log(this.status);
      }
    );
  }

}
