import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {
  products:any;

  constructor(private productSrv: ProductService) { }

  ngOnInit() {
    this.productSrv.getProductsRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
      console.log(data);
    })  
  }

}
