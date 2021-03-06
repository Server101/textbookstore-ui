//import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import{Component, OnInit} from '@angular/core';
import {BikeService } from '../../services/bike.service';
import {WishService } from '../../services/wish.service';
import {BooksService } from '../../services/books.service';


@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
    public bikes;
    public wishes
    public books;

    constructor(private bikeService: BikeService, private wishService: WishService, private booksSerivce: BooksService) {} 
    
    ngOnInit() {
        this.getBikes();
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

     // adding a new function to save data
     getBikes() {
        this.bikeService.getBikes().subscribe(
            data => {this.bikes = data},
            err => console.error(err),
            ()=>console.log('bikes loaded')
        );

    }

   
}