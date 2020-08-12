import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-order-view2',
  templateUrl: './order-view2.component.html',
  styleUrls: ['./order-view2.component.css']
})
export class OrderView2Component implements OnInit {
  paramQuery='';
  constructor(public activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(data=>{
      this.paramQuery=data.id;
    });
  }

  ngOnInit(): void {
  }

}
