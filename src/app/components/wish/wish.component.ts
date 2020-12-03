import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import {WishService} from '../../services/wish.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {BooksService } from '../../services/books.service';


@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})

export class WishComponent implements OnInit {
  public books;
 // book1Name: string[] = [
 //   'Globo MTB 29 full Suspension',
 //   'Globo Carbon Fiber Race Series',
  //  'Global time trial age',

 // ];
 bookform: FormGroup;
  wishform: FormGroup;
  validMessage1:string = "";
  constructor(private wishService: WishService, private booksService: BooksService) { }
 
  //This is specifiying all the form groups that will be on the form
  ngOnInit()  {

    //For The Book Submit
    this.bookform = new FormGroup({
      book_name: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      purchase_price: new FormControl('', Validators.required),
    
    });

    //For the Wish Form
    this.wishform = new FormGroup({
      user_name: new FormControl(),
      user_email: new FormControl(),
      wish_list_name: new FormControl(),
      item1: new FormControl(),
      item2: new FormControl(),
      item3: new FormControl()
    });
    this.getBooks();

  }





//This ts the submit rregistration form information/function

submitthebook() {

  if (this.bookform.valid) {
    this.validMessage1 = "Your wish list is submitted. Thank You!";
    this.booksService.createBookRegistration(this.bookform.value).subscribe(
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


// This submit is for the books registration test form, to add books to list
submitWish() {

  if (this.wishform.valid) {
    this.validMessage1 = "Your wish list is submitted. Thank You!";
    this.wishService.createWishRegistration(this.wishform.value).subscribe(
      data =>{
        this.wishform.reset();
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


// Code for the wish add
// adding a new function to save data
getBooks() {
  this.booksService.getBooks().subscribe(
      data => {this.books = data},
      err => console.error(err),
      ()=>console.log('books loaded')
  );
}



}
