import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
 title='pradeep title';
 arrayData=[2,4,5,6,7,8,1];
obj={
  name:'Pradeep',
  age:23,
  gender:'Male'
}

  constructor() { }

  ngOnInit(): void {
  }

}
