import { Component } from '@angular/core';
import { product } from '../services/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

          constructor(private service:ProductService,private bs:Router){}
  pId:any;
  pName:any;
  pCompany:any;
  pFeatures:any;
  pPrice:any;
  pImage:any;
  newPro:any;
    addProduct(){
          this.newPro={
            productId:this.pId,
            productName:this.pName,
            productCompany:this.pCompany,
            productFeatures:this.pFeatures,
            productPrice:this.pPrice,
            productImage:this.pImage
          }

          this.service.addProducts(this.newPro);
          this.bs.navigateByUrl("/admin/products")
    }


}
