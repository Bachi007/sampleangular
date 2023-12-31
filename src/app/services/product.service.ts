import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:product[]=[
    { 
      productId:1,
      productName:"Oneplus 9RT",
      productCompany:"onePlus",
      productFeatures:"50Mp Camera, SP 888",
      productPrice:"42000",
      productImage:"https://oasis.opstatics.com/content/dam/oasis/page/2021/oneplus-buds-z2/Black.png",
      pflag:false
    },
    {
      productId:2,
      productName:"Pixel 8",
      productCompany:"Google",
      productFeatures:"15Mp Camera, tensor ",
      productPrice:"72000",
      productImage:"https://lh3.googleusercontent.com/KaLIFYVg9298b8jv33H3pagRaAz4lCQxrQz-goMEsiTuCmUf2Ood9ktkzgjpotkMuRcAMimOV2RfN7vBZVmnInf5wcwUNsRZpw",
      pflag:false
    },
    {
      productId:3,
      productName:"Samsung s23 ultra",
      productCompany:"Samsung",
      productFeatures:"120Mp Camera, SP 8 gen 1",
      productPrice:"110000",
      productImage:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=90",
      pflag:false
    },
    {
      productId:4,
      productName:"IQOO Neo 6",
      productCompany:"IQoo",
      productFeatures:"64Mp Camera, SP 870",
      productPrice:"32000",
      productImage:"https://cdn1.smartprix.com/rx-i8H4E25NU-w420-h420/iqoo-neo-6-se-5g.jpg",
      pflag:false
    },
    {
      productId:5,
      productName:"Asus ROG 3",
      productCompany:"Asus",
      productFeatures:"50Mp Camera, SP 888",
      productPrice:"47000",
      productImage:"https://i.gadgets360cdn.com/products/large/asus-rog-phone-7-asus-ultimate-db-652x800-1681391335.jpg?downsize=*:360",
      pflag:false
    },
    

  ]


  constructor() { }

  getProducts(){
    return of(this.products);
  }

  addProducts(newpro:product){
        this.products.push(newpro);
  }

  deleteProduct(pro:product){

    let index=this.products.findIndex((item)=>{
      if(item.productId==pro.productId){
        return item.productId;
      }
    })

    this.products.splice(index,1) 
  }

  updateProduct(pro:product){

    let index=this.products.findIndex((item)=>{
      if(item.productId==pro.productId){
        return item.productId;
      }
    })

    this.products.splice(index,1,pro);

  }



}
