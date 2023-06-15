import "../home.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { useState } from "react"

function ProductHome(props){
    const nav = useNavigate()
    async function AddToCart(){
        console.log(props.product)
        await axios.post("https://localhost:7002/api/Cart/", props.product.productId)
                .then(() => {
                    nav("/")
                }).catch(() => {
                });
    }

    return(
        <section className="product">
            <h2>{props.product.title}</h2>
            <p>{props.product.price}</p>
            <a href="#" onClick={AddToCart}>Buy now</a>   
            <div className="container">
                {/* ne trimite imaginea din back-end  */}
                <img className="product-image" src={"https://localhost:7002/"+props.product.photo} alt="produs" />
                {console.log("https://localhost:7002/"+props.product.photo)}
                <div className="middle">
                    {/* descrierea din back-end */}
                    <div className="text">{props.product.description}</div>
                </div>
            </div>
        </section>
    )
}

export default ProductHome;
