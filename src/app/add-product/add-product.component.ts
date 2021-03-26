import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public product = {name:'',price:'',description:''};
  constructor(private apiService: ApiService,private router: Router ) { }

  ngOnInit(): void {
  }

  public addProduct(){
    this.apiService.sendPostProduct(this.product).subscribe(data=>{
      // console.log("Success ",data);
      this.router.navigate(['/products']);
    },err=>{
      console.log("Error:",err);
      
    })
  }
}
