import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task1calculateAge';
  year=''
  Age:Number=0
  sendAge(){
 const input=document.getElementById('input1') as HTMLInputElement
 const value=input.value
 this.year=value
 this.Age=Number(2021-Number(this.year))
 
  }

}
