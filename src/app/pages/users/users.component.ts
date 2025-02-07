import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: String[] = ['Vini', 'Marcela', 'Luiz', 'Joana', 'Fátima', 'Ana'];

  userSelecionado: User | undefined;
  userForms: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder, private userService: UserService){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.userForms = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(110) ]],
    });
  }

  SubmitForm(){
    if(this.userForms.valid){
      this.users.push(this.userForms.value);
      this.userForms.reset;
    }
  }

  users: User[]=[
    {
      nome: 'Clara',
      idade: 23
    },
    {
      nome: 'Mariana',
      idade: 32
    },
    {
      nome: 'Vitória',
      idade: 23
    },
    {
      nome: 'Ana',
      idade: 14
    },
    {
      nome: 'Sara',
      idade: 22
    },
    
  ];
  infoUserSelecionado(user: User){
    this.userSelecionado = user;
    this.userService.setUser(user);
  }


}
