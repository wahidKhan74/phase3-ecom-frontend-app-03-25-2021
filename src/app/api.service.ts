import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public sendGetProducts(){
    return this.httpClient.get("http://localhost:9000/products");
  }

  public sendPostProduct(product){
    return this.httpClient.post("http://localhost:9000/products",product);
  }

  // update product
  // delete product
}
