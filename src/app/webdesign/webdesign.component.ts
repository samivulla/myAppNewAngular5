import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrls: ['./webdesign.component.css']
})
export class WebdesignComponent implements OnInit {

  constructor(private service: MyserviceService) { }
  public myData: any = [];
  public myElement:number;
  ngOnInit() {
    this.myElement = 20;
  }

  btnClick() {
    this.service.getMyData()
      .subscribe(data => this.myData = data);
      this.myElement = 30; 
  }

  ngDoCheck() {
    console.log(this.myData);
    console.log(this.myElement);
  }

}
