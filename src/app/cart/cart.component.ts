import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ɵparseCookieValue } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartarr:any;obj:any;totalprice:any=0;
  constructor(private service:CartService){}

    calc(){
      for(this.obj of this.cartarr){
        this.totalprice+=parseInt(this.obj.productPrice);
      }  
    }

  ngOnInit(){
    this.service.getitemsincart().subscribe((res)=>{
        this.cartarr=res;
    })
    this.calc();
  }


}
