import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public getServiceData:Array<any> = [];

  constructor(private _service:MyserviceService) { }

  ngOnInit() {
   
  }
  onSubmit(){
    console.log("hiihi");
  }
}
