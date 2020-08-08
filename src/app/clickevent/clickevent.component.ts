import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-clickevent',
  templateUrl: './clickevent.component.html',
  styleUrls: ['./clickevent.component.css']
})
export class ClickeventComponent implements OnInit {

  testFunc(){
    alert('button is clicked');
  }
  testFunc2(a){
    alert(a);
  }
  getVal(a){
    console.log(a.target.value);
  }
  getVal2(a){
    console.log(a.target.value);
  }
  getTextBoxValue(txt){
    console.log(txt.value);
  }
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('click',['$event'])
  onhostclick(event:Event){
    alert('host Listener');
  }
}
