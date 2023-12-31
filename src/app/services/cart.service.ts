import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart:product[]=[]

  addtocart(pro:product){
    this.cart.push(pro);
  }

  getitemsincart(){
    return of(this.cart);
  }

  
}
