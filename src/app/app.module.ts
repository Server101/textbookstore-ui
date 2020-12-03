import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpClientModule} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService} from './services/bike.service';
import { WishService} from './services/wish.service';
import { WishdataService} from './services/wishData.service';
import { BooksService} from './services/books.service';

import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { WishComponent } from './components/wish/wish.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { WishlistmanageComponent } from './components/wishlistmanage/wishlistmanage.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    WishComponent,
    IndexComponent,
    LoginComponent,
    ShopComponent,
    AboutComponent,
    WishlistmanageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    
  ],

  providers: [BikeService, WishService,BooksService, WishdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
