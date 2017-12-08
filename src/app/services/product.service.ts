import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products/').map((res:Response) =>  res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getProductByID(id): Observable<any> {
    return this.http.get('http://localhost:3000/product/'+id).map((res:Response) =>  res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addProduct(product): Observable<any> {
    let productJSON = JSON.stringify(product); // convert product object to JSON object
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post('http://localhost:3000/products/',productJSON, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error) || 'Server error');
  }

  updateProduct(product,id): Observable<any> {
    let productJSON = JSON.stringify(product); // convert product object to JSON object
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.put('http://localhost:3000/products/'+id,productJSON, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error) || 'Server error');
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/products/${id}`)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error) || 'Server error');
  }
}
