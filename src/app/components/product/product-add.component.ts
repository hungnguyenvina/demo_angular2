import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductAddComponent implements OnInit {
  @ViewChild('form') productFrom:NgForm;
   product =  {
     id: '1', 
     name: 'product 1', 
     description:'this is product 1', 
     price : 20000
  };

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    
    //this._productService.addProduct(this.product).subscribe(data => {
    //  console.log('du lieu insert :',data);
    //});

    
  }
  
  onSubmit(form: NgForm) {
    console.log(form);

    console.log(form.form.value.productName);
    console.log(form.form.value.productDescription);
    console.log(form.form.value.productPrice);
    //console.log(form) is equal to view child console.log(this.productFrom);
    console.log(this.productFrom);

    this._productService.addProduct(this.product).subscribe(data => {
      console.log('du lieu insert :',data);
    });
  }
}
