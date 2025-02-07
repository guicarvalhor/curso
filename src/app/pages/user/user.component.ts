import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  username: string | null = '';

  constructor(private route: ActivatedRoute){}

  //capturo o nome da rota e o angular detecta e muda o username inserido
  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.username = params.get('username');
    // });
    this.getNome();
  }

  getNome(){
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }
}
