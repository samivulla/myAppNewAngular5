import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-softdevelp',
  templateUrl: './softdevelp.component.html',
  styleUrls: ['./softdevelp.component.css']
})
export class SoftdevelpComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  private myData: string;
  private useData: string;
  ngOnInit() {
    this.myData = "testing Input and output";
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
  handleOutputData($event) {
    this.useData = $event;
  }
}
