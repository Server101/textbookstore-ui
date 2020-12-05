

import { Component, OnInit } from '@angular/core';
import { copyArrayItem, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {BooksService} from '../../services/books.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {WishService} from '../../services/wish.service';
//import { Directive, TemplateRef } from '@angular/core';



@Component({
  selector: 'app-wishlistmanage', 
  templateUrl: './wishlistmanage.component.html',
  styleUrls: ['./wishlistmanage.component.css',
    
]
  
})




export class WishlistmanageComponent {
  public deleteArray;
  public books;
  wishform: FormGroup;
  validMessage1:string = "";
  
  constructor(private wishService: WishService,private booksSerivce: BooksService) { }

  ngOnInit()  {
    
    this.wishform = new FormGroup({
      user_name: new FormControl(),
      user_email: new FormControl(),
      wish_list_name: new FormControl(),
      item1: new FormControl(),
      item2: new FormControl(),
      item3: new FormControl()
    });
    this.getBooks();
   // this.getBookname();

  }

  //This is the next class of the drag and drop wish list

  Main_List = [
      
      {id:1, title: 'Harry Potter and the Sorcerers Stone'},
      {id:2, title:'Dandelion'},
      {id:3, title:'James and the Giant Peach'},
      {id:4, title:'The Return'}
    ];
  
    //Removing items from wishlist
    removeItem(id){
      this.Main_List = this.Main_List.filter(item => item.id !== id);
    }


  
  //book_name.stringify
  //getBookname(book_name: string)


  

  edit_me1 = [
    
  ];

  edit_me2 = [
    
  ];

  Delete = [
    
  ];


  All = [
    'red',
    'B',
    'Tr',
    'Check ',
    'Walk '
  ];

  shoppingCartItems = [ {id:0, title: ""},
                      
 
]

saveItem(id){
    this.shoppingCartItems = this.Main_List.filter(item => item.id == id);
  }
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

  drop4(event: CdkDragDrop<string[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        copyArrayItem(event.previousContainer.data,
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
    this.validMessage1 = "Your book is added to the cart. Thank You!";
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


