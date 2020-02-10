import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'persons',
    component: PersonsComponent,
    data: { title: 'List of persons' }
  },
  {
    path: 'person-detail/:id',
    component: DetailPersonComponent,
    data: { title: 'Detail of person' }
  },
  {
    path: 'person-add',
    component: AddPersonComponent,
    data: { title: 'Add of person' }
  },
  {
    path: 'person-edit/:id',
    component: EditPersonComponent,
    data: { title: 'Edit of person' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login of Softplayer' }
  },
  { path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
