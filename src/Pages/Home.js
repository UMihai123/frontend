import ProductHome from "../Componente/ProductHome";
import "../home.css"

var products=[
{"id":1,"price":20,"title":"T-Shirt", "description":"Paris Saint-German x Jordan Fourth Stadium Stadium Shirt 2022-23","image":"https://m.media-amazon.com/images/I/81lQzmnqRhL._AC_SL1500_.jpg"},
{"id":2,"price":25, "title":"Ball", "description":"Paris Saint-German Crest Football - Metallic Black-Gold","image":"https://cdn.sportdepot.bg/files/products/DJ9960-010_01.jpg"},
{"id":3,"price":30, "title":"Hoodie", "description":"Paris Saint-Germain x Jordan PO Hoodie ","image":"https://cdn.aboutstatic.com/file/images/1106089f75e7bd2c9fd99e2eda17c9fe.png?bg=F4F4F5&quality=75&trim=1&height=480&width=360"},
{"id":4,"price":15, "title":"Cup", "description":"Paris Saint-Germain Crest Mug","image":"https://c.cdnmp.net/129542290/p/m/1/cana-club-fotbal-paris-saint-germain~6107311.jpg"}
]

export default function Home() {
    return(
        <div>
        <div className="title"><h1>The Official Shop Of PSG Club</h1></div>
        <div className="container">
            <div className="row1">   
                <div className="col-md">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">PSG Club</h5>
                            <p className="card-text">The Paris Saint-Germain Football Club, commonly referred to as Paris Saint-Germain, Paris SG, or simply Paris or PSG, is a French professional football club based in Paris. Founded in 1970, the club has traditionally worn red and blue kits.</p>
                            <a href="https://en.wikipedia.org/wiki/Paris_Saint-Germain_F.C." className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="our-products">
            <center><h2>Our Products</h2></center>
        </div>

        <div className = "small-container">
            <div className = "row row-2">
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
        <div className = "page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&#8594;</span>
        </div>


    { /* footer */ }
        <footer>
        <div className="newsletter">
            <h3>Abonează-te la newsletter-ul nostru</h3>
            <form>
             <input type="email" placeholder="Introdu adresa de email" required></input><br></br>
             <button type="submit">Abonează-te</button>
            </form>
        </div><br></br>
        <div className="legal-info">
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