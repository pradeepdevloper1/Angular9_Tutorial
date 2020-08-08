import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng',
  templateUrl: './ng.component.html',
  styleUrls: ['./ng.component.css']
})
export class NGComponent implements OnInit {
  showMsg=false;
  switchvalue=3;
  users=[
    {userID:10,firstname:'pradeep'},
    {userID:20,firstname:'shubham'},
    {userID:30,firstname:'chetan'},
    {userID:40,firstname:'Nitesh'},
  ];
    colorval='blue';
  clsName='one';
  clsName2='two';
  
  constructor() { }

  ngOnInit(): void {
  }

}
