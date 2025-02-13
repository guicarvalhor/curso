import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserGit } from '../../models/userGit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: UserGit | undefined;
  username: string = '';

  constructor(private userService: UserService, private toastr: ToastrService ) {}

  getGitUser() {
    this.userService.getGitUser(this.username).subscribe(
      (response: UserGit) => {
        this.user = response;
      },
      (error) => {
        this.toastr.error(error.error.message);
      }
    );
  }

  // num: any;

  // user: User | undefined;
  // constructor(private userService: UserService){
  //   this.user = userService.getUser();
}
