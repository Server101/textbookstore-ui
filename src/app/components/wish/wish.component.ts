import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import {WishService} from '../../services/wish.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})

export class WishComponent implements OnInit {
 // book1Name: string[] = [
 //   'Globo MTB 29 full Suspension',
 //   'Globo Carbon Fiber Race Series',
  //  'Global time trial age',

 // ];
  wishform: FormGroup;
  validMessage1:string = "";
  constructor(private wishService: WishService) { }
 
  //This is specifiying all the form groups that will be on the form
  ngOnInit()  {
    this.wishform = new FormGroup({
      user_name: new FormControl('', Validators.required),
      user_email: new FormControl('', Validators.required),
      wish_list_name: new FormControl('', Validators.required),
      item1: new FormControl('', Validators.required),
      item2: new FormControl('', Validators.required),
      item3: new FormControl('', Validators.required)
    });
  }





//This ts the submit rregistration form information/function

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
