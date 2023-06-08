import "../home.css"

function ProductHome(props){
    return(
        <section className="product">
            <h2>{props.product.title}</h2>
            <p>{props.product.price}</p>
            <a href="#">Buy now</a>   
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
