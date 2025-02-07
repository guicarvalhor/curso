import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserGit } from '../../models/userGit';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  user: UserGit | undefined;
  constructor(private userService: UserService) {}

  getGitUser() {
    this.userService.getGitUser('facebook').subscribe((response: UserGit) => {
      this.user = response;
    });
  }

  ngOnInit(): void {
    this.getGitUser();
  }

  // num: any;

  // user: User | undefined;
  // constructor(private userService: UserService){
  //   this.user = userService.getUser();
}
