import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail=()=>{
    const shoes={
        "adidas-red-shoes":{
            name: "Adidas Red Shoes",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80",
            price: "$155.65"
        },
        "joggers-blue-shoes":{
            name: "Joggers Blue Shoes",
            img: "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=",
            price: "$205.95"
        },
        "brown-loafer-shoes":{
            name: "Brown Loafer Shoes",
            img: "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwb414fd65/images/grid/SKX52942_ShopByStyleGridUpdate_Men_750x664_Lace_Up_Oxfords.jpg",
            price: "$107.00"
        }
    }

    const {productId}=useParams();
    const product=shoes[productId];
    const{name,img,price}=product
    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width:500}}/>
            <h4>Price: {price}</h4>
        </div>
    )
}