

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import { WishComponent } from './components/wish/wish.component';
import { IndexComponent } from './components/index/index.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';
import {ShopComponent} from './components/shop/shop.component';
import { WishlistmanageComponent } from './components/wishlistmanage/wishlistmanage.component';
import { WincComponent } from './components/winc/winc.component';

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
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'manage',
    component: WishlistmanageComponent
  },
 
  {
    path: 'SCart',
    component: WincComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
