import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
queryCountry='';
queryTag='';
queryTrending='';
  constructor(private activateRoute:ActivatedRoute) { 
    this.activateRoute.queryParams.subscribe(data=>{
      console.log(data);
      this.queryCountry=data.country;
      this.queryTag=data.tag;
      this.queryTrending=data.trending;

    });
  }

  ngOnInit(): void {
  }

}
