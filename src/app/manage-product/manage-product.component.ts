import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../services/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent {
  productsArray:any; 
  constructor(private service:ProductService,private _snackBar: MatSnackBar){}

  
    deleteme(p:product){
      this._snackBar.open("product deleted","Delete",{
        duration: 3000
      });
      this.service.deleteProduct(p)


    }
    changeflag(p:product){
        p.pflag=true;
    }

    update(p:product){

      p.pflag=false;

      this.service.updateProduct(p);
    }
    


    ngOnInit(){
      this.service.getProducts().subscribe((res)=>{
          this.productsArray=res;
      })
    }

}
