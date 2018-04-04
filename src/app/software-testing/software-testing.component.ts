import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-software-testing',
  templateUrl: './software-testing.component.html',
  styleUrls: ['./software-testing.component.css']
})
export class SoftwareTestingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


   routeChange(){
     this.router.navigate(['/login']);
   }
}
