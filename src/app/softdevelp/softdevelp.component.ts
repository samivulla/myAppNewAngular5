import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-softdevelp',
  templateUrl: './softdevelp.component.html',
  styleUrls: ['./softdevelp.component.css']
})
export class SoftdevelpComponent implements OnInit {

  constructor() { }
  private myData: string;
  private useData: string;
  ngOnInit() {
    this.myData = "testing Input and output";
  }
  handleOutputData($event) {
    this.useData = $event;
  }
}
