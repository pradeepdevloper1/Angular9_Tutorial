import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {
queryParams='';
searchKeyword='';

  constructor(private router:Router,
              private activatedRouter:ActivatedRoute ) {
    this.activatedRouter.queryParams.subscribe(data=>{
      this.searchKeyword=data.id;
    });
     }

  ngOnInit(): void {
  }
updateSearch(){
  const searchVal=this.searchKeyword;
  this.router.navigate(['product-id',searchVal]);
}
}
