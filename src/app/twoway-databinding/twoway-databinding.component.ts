import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent implements OnInit {


  public userText:string ="User Default Test value.";
  public address:string="001, ABC Palace";

  sendData(event){
    // console.log(event.target.value);
    this.userText = event.target.value;
  }

  clearData(){
    this.userText = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
