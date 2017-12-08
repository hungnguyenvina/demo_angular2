import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//// Import RxJs required methods
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 // products = [
 //   {id: '1', name: 'product 1', description:'this is product 1', price : 20000},
 //   {id: '2', name: 'product 2', description:'this is product 2', price : 30000},
 //   {id: '3', name: 'product 3', description:'this is product 3', price : 40000},
  //  {id: '4', name: 'product 4', description:'this is product 4', price : 50000}
 // ];
 products:any = [];

  titleProduct= 'xxxyyy111';
  //constructor(private http: Http) {}
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    //this.http.get('http://localhost:3000/products/') .map((res:Response) => res.json())
    //.subscribe(data => {
    //  console.log('dât',data);
    //  this.products = data;
    //});

    this._productService.getProducts().subscribe(data => {
        console.log('du lieu :',data);
        this.products = data;
      });
  }

  deleteThisProduct(id) {
    console.log(id);
    this._productService.deleteProduct(id).subscribe(data => {
      console.log('du lieu delete :',data);
      this.products = this.products.filter(product => product._id !== id);
    });
  }
}
