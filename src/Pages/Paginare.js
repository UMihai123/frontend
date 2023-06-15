import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductHome from "../Componente/ProductHome";
import axios from "axios";
import "../home.css"
import { useNavigate } from "react-router-dom";

// var products=[
// {"id":1,"price":20,"title":"T-Shirt", "description":"Paris Saint-German x Jordan Fourth Stadium Stadium Shirt 2022-23","image":"https://m.media-amazon.com/images/I/81lQzmnqRhL._AC_SL1500_.jpg"},
// {"id":2,"price":25, "title":"Ball", "description":"Paris Saint-German Crest Football - Metallic Black-Gold","image":"https://cdn.sportdepot.bg/files/products/DJ9960-010_01.jpg"},
// {"id":3,"price":30, "title":"Hoodie", "description":"Paris Saint-Germain x Jordan PO Hoodie ","image":"https://cdn.aboutstatic.com/file/images/1106089f75e7bd2c9fd99e2eda17c9fe.png?bg=F4F4F5&quality=75&trim=1&height=480&width=360"},
// {"id":4,"price":15, "title":"Cup", "description":"Paris Saint-Germain Crest Mug","image":"https://c.cdnmp.net/129542290/p/m/1/cana-club-fotbal-paris-saint-germain~6107311.jpg"}
// ]

export default function Home() {


    // functii pentru butoane de in fata si in spate 
    const history = useNavigate();
    // cand dau inapoi scade cu 1
    function backHandler(){
        if(parseInt(id)>1)
            history (`${parseInt(id)-1}`)
    }

    // in fata creste cu 1
    function nextHandler(){
        console.log(pages)
        if (parseInt(id)<pages)
            history (`${parseInt(id)+1}`)
    }

    const [products, setProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    
    // ne afiseaza 3 produse pe pagina
    const OnPage=3;
    var {id}=useParams();
    var pages=0;
    // paginile incep de la 1 ( id = 1)
    if (id===undefined) id=1;
    useEffect(()=>{
        axios.get("https://localhost:7002/api/Product/GetAllRange?offset="+(id-1)*OnPage+"&limit="+OnPage)
        .then((response) => {
            // console.log(response.data)
            setProducts(response.data)
            
        }).catch(() => {
            
        });
    },[id])
       
    if (products.length!==0){
        pages=products.total/OnPage;
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

            {/* produsele noastre */}
            <div className="our-products">
                <center><h2>Our Products</h2></center>
            </div>

            {/* butonul pentru sortare */}
            <div className = "small-container">
                <div className = "row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option>Default Sorting</option>
                        <option>Sort by price</option>
                    </select>
                </div>
            </div>

            <main>
            {/* ne folosim de componente */}
            {products.products.map((product) => (<ProductHome key={product.id} product={product} />))}

            </main>

        



         {/* buton de jos */}
         <div className = "page-btn">
                <span onClick = {backHandler}>&#8592;</span>
                <span onClick = {nextHandler}>&#8594;</span>
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
    }else{
        return <p>No data</p>}
}