import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductUpdateComponent implements OnInit {
  id: Number;
  product =  {
    id: '1', 
    name: 'product 1', 
    description:'this is product 1', 
    price : 20000
 };
  constructor(private route: ActivatedRoute,private _productService: ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this._productService.getProductByID(this.id).subscribe(data => {
      console.log('du lieu get :',data);
      this.product = data;
    });
  }

  onSubmit(form: NgForm) {

    this._productService.updateProduct(this.product,this.id).subscribe(data => {
      console.log('du lieu updated :',data);
    });
  }
}
