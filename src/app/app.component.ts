import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { ITests, People } from './test';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public testArry: any = [];
  public test2Arry: any = [];
  private person: any = [];
  constructor(private _service: MyserviceService) { }

  ngOnInit() {
    this._service.getData()
      .subscribe(data => {
        this.testArry = data
        console.log(this.testArry);
      });
    this._service.getAllData()
      .subscribe(data => {
        this.test2Arry = data
        console.log(this.test2Arry);
      })
    this._service.getReverseData()
      .subscribe(data => {
        this.person = data
        console.log(this.person);
      });
  }



}
