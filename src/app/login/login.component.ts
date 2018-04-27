import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public getServiceData:Array<any> = [];


loginForm: FormGroup
  constructor(private _service:MyserviceService, private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
   console.log(this.loginForm);
  }
  createForm(){
    this.loginForm = this.fb.group({
      username : [''],
      password:['']
    })
  }
  loginSUbmit(){
    console.log(this.loginForm);
  }
}
