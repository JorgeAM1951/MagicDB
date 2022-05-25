import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './card-info/card-info.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FavComponent } from './fav/fav.component';
import { AdminDataComponent } from './admin-data/admin-data.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:card-search',
    component: HomeComponent,
  },
  {
    path: 'card-info/:name',
    component: CardInfoComponent

  },
  {
    path: 'login-page',
    component: LoginComponent
  },
  {
    path: 'admin-page',
    component: AdminComponent
  },
  {
    path: 'sign-in-page',
    component: SignInComponent
  },
  {
    path: 'fav-page',
    component: FavComponent
  },
  {
    path: 'admin-data-page',
    component: AdminDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
