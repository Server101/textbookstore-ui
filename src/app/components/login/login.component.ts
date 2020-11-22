import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
//import { FormGroup } from '@angular/forms';
import {WishService} from '../../services/wish.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'javainuse'
  password = ''
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  
  }
}
