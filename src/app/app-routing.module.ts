import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import { WishComponent } from './components/wish/wish.component';
import { IndexComponent } from './components/index/index.component';

//New admin route
const routes: Routes = [

  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'wish',
    component: WishComponent
  },
  {
    path: 'bike',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
