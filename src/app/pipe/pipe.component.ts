import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  user={
    userID:101,
    firstName:"Pradeep",
    lastName:"Kumar",
    DOB:'08/11/1996',
    Salary:1290897
  };
   jsonVal:Object={name:'prado' ,address:{block:'b',city:'delhi'}}
   user2={
    userID:102,
    firstName:"Raju",
    city:"Noida",
    cityCode:'ND',
    Salary:1290897
  };
  users=[{
    firstName:"Raju",
    city:"Noida",
    cityCode:'ND',
     },
     {
      firstName:"Anuj",
      city:"Ghaziabad",
      cityCode:'GZB',
       },
    {
        firstName:"Pradeep",
        city:"Lotus Valley",
        cityCode:'LV',
         },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
