import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {
  
  constructor() { }
  @Input()
   sendData;
  ngOnInit() {
  }

}
