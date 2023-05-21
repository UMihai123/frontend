import ProductHome from "../Componente/ProductHome";
import "../home.css"

var products=[
{"id":1,"price":20,"title":"T-Shirt","description":"T-Shirt",  "image":"https://m.media-amazon.com/images/I/81lQzmnqRhL._AC_SL1500_.jpg"},
{"id":2,"price":25, "title":"Hoodie", "description":"Hoodie","image":"https://cdn.sportdepot.bg/files/products/DJ9960-010_01.jpg"},
{"id":2,"price":25, "title":"Hoodie", "description":"Hoodie","image":"https://cdn.sportdepot.bg/files/products/DJ9960-010_01.jpg"},
{"id":2,"price":25, "title":"Hoodie", "description":"Hoodie","image":"https://cdn.sportdepot.bg/files/products/DJ9960-010_01.jpg"}
]

export default function Home() {
    return(
        <div>
        <div class="title"><h1>The Official Shop Of PSG Club</h1></div>
        <div class="container">
            <div class="row1">   
                <div class="col-md">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">PSG Club</h5>
                            <p class="card-text">The Paris Saint-Germain Football Club, commonly referred to as Paris Saint-Germain, Paris SG, or simply Paris or PSG, is a French professional football club based in Paris. Founded in 1970, the club has traditionally worn red and blue kits.</p>
                            <a href="https://en.wikipedia.org/wiki/Paris_Saint-Germain_F.C." class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="our-products">
            <center><h2>Our Products</h2></center>
        </div>

        <div class = "small-container">
            <div class = "row row-2">
                <h2>All Products</h2>
                <select>
                    <option>Default Sorting</option>
                    <option>Sort by price</option>
                    <option>Sort by popularity</option>
                    <option>Sort by rating</option>
                    <option>Sort by sale</option>
                </select>
            </div>
        </div>

        <main>

        {products.map((product) => (<ProductHome key={product.id} product={product} />))}

		</main>

       



    {/* buton de jos */}
        <div class = "page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
        </div>


    { /* footer */ }
        <footer>
        <div class="newsletter">
            <h3>Abonează-te la newsletter-ul nostru</h3>
            <form>
             <input type="email" placeholder="Introdu adresa ta de email" required></input><br></br>
             <button type="submit">Abonează-te</button>
            </form>
        </div><br></br>
        <div class="legal-info">
        <ul>
             <li><a href="#">Politica de confidențialitate</a></li>
             <li><a href="#">Termeni și condiții</a></li>
        </ul>
             <p>Drepturile de autor © 2023 PSG Club. Toate drepturile rezervate.</p>
        </div>
        </footer>   
    </div>
    );
}