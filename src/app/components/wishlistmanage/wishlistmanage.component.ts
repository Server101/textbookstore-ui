

import { Component, OnInit } from '@angular/core';
import { DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {BooksService} from '../../services/books.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {WishService} from '../../services/wish.service';
//import { Directive, TemplateRef } from '@angular/core';



@Component({
  selector: 'app-wishlistmanage', 
  templateUrl: './wishlistmanage.component.html',
  styleUrls: ['./wishlistmanage.component.css']
})




export class WishlistmanageComponent {

  public books;
  wishform: FormGroup;
  validMessage1:string = "";
  
  constructor(private wishService: WishService,private booksSerivce: BooksService) { }

  ngOnInit()  {
    
    this.wishform = new FormGroup({
      user_name: new FormControl('', Validators.required),
      user_email: new FormControl('', Validators.required),
      wish_list_name: new FormControl('', Validators.required),
      item1: new FormControl('', Validators.required),
      item2: new FormControl('', Validators.required),
      item3: new FormControl('', Validators.required)
    });
    this.getBooks();
   // this.getBookname();

  }

  //This is the next class of the drag and drop wish list

  Main_List = [
      'Dandelion',
      'James and the Giant Peach',
      'The Return',
      'Walk dog',
      'The Lord of the Rings'
    ];
  
  //book_name.stringify
  //getBookname(book_name: string)


  

  edit_me1 = [
    
  ];

  edit_me2 = [
    
  ];

  All = [
    'red',
    'B',
    'Tr',
    'Check ',
    'Walk '
  ];

  //Code for the 3 drops for wishlist

  drop1(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  drop2(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  drop3(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  getBooks() {
    this.booksSerivce.getBooks().subscribe(
        data => {this.books = data},
        err => console.error(err),
        ()=>console.log('books loaded')
    );
}

////This ts the submit rregistration form information/function

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




  
}


