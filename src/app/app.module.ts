import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';//angular 4
import { HttpModule } from '@angular/http';//angular 2
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product/product-add.component';
import { ProductUpdateComponent } from './components/product/product-update.component';
import { ProductService } from './services/product.service';

const appRoutes: Routes = [
  { path: 'add', component: ProductAddComponent },
  { path: 'update/:id', component: ProductUpdateComponent },
  { path: 'list', component: ProductListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
