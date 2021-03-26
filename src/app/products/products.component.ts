import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products :any ;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.sendGetProducts().subscribe(
      data=> {  this.products = data; },
      err=> { console.log(err); }
    )
  }

}
