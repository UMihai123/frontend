import "../home.css"

function ProductHome(props){
    return(
        <section class="product">
			<img src={props.product.image} alt="produs"></img>
			<h2>{props.product.title}</h2>
			<p>{props.product.description}</p>
            <p>{props.product.price}</p>
			<a href="#">Buy now</a>
		</section>
    )
}

export default ProductHome;