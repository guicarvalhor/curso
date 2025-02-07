import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  //dispara a função assim que ele iniciar o nav
  ngOnInit(): void {
   console.log("Deu bom! 👌")
  }

  
}
