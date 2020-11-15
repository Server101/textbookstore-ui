import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import {BikeService} from '../../services/bike.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 29 full Suspension',
    'Globo Carbon Fiber Race Series',
    'Global time trial age',

  ];
  bikeform: FormGroup;
  validMessage:string = "";
  constructor(private bikeService: BikeService) { }
 
  //This is specifiying all the form groups that will be on the form
  ngOnInit()  {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }





//This ts the submit rregistration form information/function

submitRegistration() {

  if (this.bikeform.valid) {
    this.validMessage = "Your bike registration is submitted. Thank You!";
    this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
      data =>{
        this.bikeform.reset();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
      )
  } else{
    this.validMessage = "Please fill out the form before submitting!";
  }
}

}