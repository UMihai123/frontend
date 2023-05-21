import "../home.css"

function ProductHome(props){
    return(
        <section className="product">
			<h2>{props.product.title}</h2>
            <p>{props.product.price}</p>
			<a href="#">Buy now</a>	
			<div className="container">
				<img src={props.product.image} alt="produs"></img>
				<div className = "middle">
					<div className="text">{props.product.description}
					</div>
				</div>
			</div>
			
		</section>
    )
}

export default ProductHome;