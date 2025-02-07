import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateComponent } from './pages/users/create/create.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'users/list', component: UsersComponent },
  { path: 'users/create', component: CreateComponent },
  // { path: 'users/:username', component: UserComponent},
  { path: 'users/details', component: UserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
