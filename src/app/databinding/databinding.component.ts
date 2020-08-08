import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
title="data Binding";
user={
userID:101,
UserName:"Pradeep",
status:'Active'
}
colorVal='red';
subTitle='this is subtitle';
placeholderVal='enter name'; 
hrefVal='http://google.com';
updateLink='http://oracle.com';
constructor() { }

  ngOnInit(): void {
  }

}
