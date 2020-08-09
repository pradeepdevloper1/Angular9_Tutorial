import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  // transform(value: string, city: string): string {
  //   return 'City Name : '+city;
  // }
  // transform(value: string, cityCode: string): string {
  //   if(cityCode==='ND'){
  //     return 'Electronic City  ';
  //   }
  //   else{
  //     return 'Garden City  ';
  //   }
   
  // }
  constructor(private sanitizer:DomSanitizer){}
  //  transform(value: string, city: string): any {
  //   return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">'+city+'</div>');
  // }
  transform(value: string, cityCode: string): any {
    if (cityCode ==='GZB' ){
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">'+cityCode+'</div>');
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:lightgreen">'+cityCode+'</div>');
    }
  }
}
