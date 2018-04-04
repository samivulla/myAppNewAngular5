import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input() sendData
  @Output() sendNewData = new EventEmitter<string>();
  ngOnInit() {
  }
  getDataFromOutput(){
    this.sendNewData.emit("namasthe kadapa...")
  }
}
