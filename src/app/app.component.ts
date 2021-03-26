import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // sharing data from source to template -> one way data binding

  // data 
  public title:string = 'Eommerce Wonserfull App';
  
  
}
