import "../home.css"

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
        <section class="product">
			<img src="https://m.media-amazon.com/images/I/81lQzmnqRhL._AC_SL1500_.jpg" alt="produs 1"></img>
			<h2>Product 1</h2>
			<p>T-Shirt</p>
            <p>$50.00</p>
			<a href="#">Buy now</a>
		</section>
		<section class="product">
			<img src="https://cdn.sportdepot.bg/files/products/DJ9960-010_01.jpg" alt="produs 2"></img>
			<h2>Product 2</h2>
			<p>Ball</p>
            <p>&29.99</p>
			<a href="#">Buy now</a>
		</section>
		<section class="product">
			<img src="https://img01.ztat.net/article/spp-media-p1/0822bdcbffc34cf9a6905ea163dfc357/b3f6aad4991647639e8595a6c639e175.jpg?imwidth=762" alt="produs 3"></img>
			<h2>Product 3</h2>
			<p>Hoodie</p>
            <p>$60.00</p>
			<a href="#">Buy now</a>
		</section>
		<section class="product">
			<img src="https://s13emagst.akamaized.net/products/42857/42856220/images/res_3c5020873f5414d012f093de176253b5.jpg?width=450&height=450&hash=48BF6B93FE04B78C85F34002AF3A82B0" alt="produs 4"></img>
			<h2>Product 4</h2>
			<p>Cup</p>
            <p>$19.99</p>
			<a href="#">Buy now</a>
		</section>
        <section class="product">
			<img src="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-classic-bedding-set-140-x-200-63-x-63_ss4_p-12046295+u-178sr81ted3y3g838a4p+v-ee833ecd496c41d79ca6ab93b851b8c8.jpg?_hv=2&w=340" alt="produs 5"></img>
			<h2>Product 5</h2>
			<p>Bedding Set</p>
            <p>$89.99</p>
			<a href="#">Buy now</a>
		</section>
        <section class="product">
			<img src="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-diamonds-travel-dri-fit-pant-beige-mens_ss4_p-13329413+u-lyxtkfewm431zfbc1gh7+v-4db8c0f1beae4919b12b56b30ffc8f08.jpg?_hv=2&w=340" alt="produs 6"></img>
			<h2>Product 6</h2>
			<p>Pants</p>
            <p>$39.99</p>
			<a href="#">Buy now</a>
		</section>
        <section class="product">
			<img src="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-x-jordan-strike-tracksuit-black_ss4_p-13354704+u-1d6zw01gzm1ohldeg5jl+v-c721332c0e294b6db635945bf7f0c3e3.jpg?_hv=2&w=340" alt="produs 7"></img>
			<h2>Product 7</h2>
			<p>Tracksuit</p>
            <p>$99.99</p>
			<a href="#">Buy now</a>
		</section>
        <section class="product">
			<img src="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-away-vapor-match-shorts-2022-23_ss4_p-13309578+u-bgzataamxq04nrp0sdf5+v-5abcdad03c934f749e0bc1d78495ca54.jpg?_hv=2&w=340" alt="produs 8"></img>
			<h2>Product 8</h2>
			<p>Shorts</p>
            <p>$49.99</p>
			<a href="#">Buy now</a>
		</section>
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