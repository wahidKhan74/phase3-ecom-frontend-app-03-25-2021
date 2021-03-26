import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private REST_API = "http://localhost:9000/products";

  constructor(private httpClient: HttpClient) { }

  public getProductsRequest(){
    return this.httpClient.get(this.REST_API);
  }
}
