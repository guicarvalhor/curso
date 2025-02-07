import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  standalone: false,
  
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User = {
    idade: 0,
    nome: '',
  };

  @Output() userInfoEmitter = new EventEmitter<User>();

  RetornarDados(){
    this.userInfoEmitter.emit(this.user);
  }
}
