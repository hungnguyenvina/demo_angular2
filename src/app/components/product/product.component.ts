import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products;
  @Output() deleteProductHandler: EventEmitter<any> = new EventEmitter<any>(); 
  titleProduct= 'xxxyyy111';
  constructor() {

  }

  ngOnInit() {
  }

  deleteProduct(product) {
    alert('delete product' + product._id)
    this.deleteProductHandler.emit(product._id);
  }
 
}
