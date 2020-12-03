import { Component, OnInit } from '@angular/core';
import {BooksService } from '../../services/books.service';
import {WishService } from '../../services/wish.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  public bikes;
  public wishes
  public books;


  bookform: FormGroup;
  wishform: FormGroup;
  validMessage1:string = "";

  constructor( private wishService: WishService, private booksSerivce: BooksService) {} 
  
  ngOnInit() {
    //For The Book Submit
    this.bookform = new FormGroup({
      book_name: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      purchase_price: new FormControl('', Validators.required),
    
    });
      this.getWishes();
      this.getBooks();

  }
     
                  

//declare add to wish list
//declare function mywish(): any;


  // adding WISHES LIST to save data
  getWishes() {
      this.wishService.getWishes().subscribe(
          data => {this.wishes = data},
          err => console.error(err),
          ()=>console.log('Wish list loaded')
      );
  }

  // adding a new function to save data
  getBooks() {
      this.booksSerivce.getBooks().subscribe(
          data => {this.books = data},
          err => console.error(err),
          ()=>console.log('books loaded')
      );
  }

   

  //This ts the submit rregistration form information/function

submitthebook() {

  if (this.bookform.valid) {
    this.validMessage1 = "Your wish list is submitted. Thank You!";
    this.booksSerivce.createBookRegistration(this.bookform.value).subscribe(
      data =>{
        this.bookform.reset();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
      )
  } else{
    this.validMessage1 = "Please fill out the form before submitting!";
  }
}

 
}







