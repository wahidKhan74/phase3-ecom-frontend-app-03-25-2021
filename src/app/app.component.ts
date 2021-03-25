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
  public price:number = 374646.03;
  isMarried : boolean = true;

  public user = {
    id : 10001,
    name : " John Smith",
    age: 29,
    gender: 'male'
  }

  private family:string[] = ["John","David","Miller","Marry"];
  private imgPath = "assets/img/smiley.jpg"




  private color = {
    first:'red',
    second: 'green',
    third: 'blue'
  }
  private isError:boolean = true;

  //access modifier :-  public private protected
  //logic
  public showUserInfo() {
    return "Id : "+ this.user.id + " , Name : " + this.user.name;
  }

  hasError(status:string){
    return status=='no' ? true :false
  }

  // even handler
  public changeStatus() {
      return this.isMarried = !(this.isMarried);
  }

}
