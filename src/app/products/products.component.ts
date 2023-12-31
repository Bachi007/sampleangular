import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsArray:any; 
  
  constructor(private bs:Router,private service:ProductService,private cartService:CartService){}
  
  addtocart(p:any){
    this.cartService.addtocart(p);
    this.bs.navigateByUrl("/nav/cart")
  }
  
    ngOnInit(){
      this.service.getProducts().subscribe((res)=>{
          this.productsArray=res;
      })
    }

}
