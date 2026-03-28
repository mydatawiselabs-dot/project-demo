
import "./App.css"

import black from "./assets/black.jpg"
import golden from "./assets/golden.jpg"
import organic from "./assets/organic.jpg"
import green from "./assets/green.jpg"

function App(){

return(

<>

<nav>

<h2>Hariom Enterprises</h2>

<div>

<a href="#home">Home</a>
<a href="#products">Products</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>

</div>

</nav>


<section className="hero" id="home">

<div className="hero-content">

<h1>Welcome to Hariom Enterprises</h1>

<h2>Trusted Supplier of Premium Quality Raisins</h2>

<p>

Delivering carefully selected Golden, Black, Green, and Organic Raisins with consistent quality and reliable service.

</p>


<a href="#products" className="hero-btn">

View Products

</a>


</div>

</section>


<section id="products">

<h2 className="title">Our Products</h2>

<div className="products">

<div className="card">

<img src={golden}/>

<h3>Golden Raisins</h3>

</div>


<div className="card">

<img src={black}/>

<h3>Black Raisins</h3>

</div>


<div className="card">

<img src={green}/>

<h3>Green Raisins</h3>

</div>


<div className="card">

<img src={organic}/>

<h3>Organic Raisins</h3>

</div>


</div>

</section>


<section className="about" id="about">

<h2>About Us</h2>

<p className="about-intro">

Hariom Enterprises is a trusted Supplier, Wholesaler, and Stockist of premium quality Raisins in India. We are committed to delivering carefully selected and hygienically processed products that meet high quality standards.

</p>


<div className="about-points">

<div>

<h3>Premium Quality</h3>

<p>

We source raisins from well-known farming regions and process them using modern techniques to maintain freshness, natural taste, and nutritional value.

</p>

</div>


<div>

<h3>Wide Variety</h3>

<p>

We offer different varieties including Golden Raisins, Black Raisins, Green Raisins, and Organic Raisins to meet diverse customer requirements.

</p>

</div>


<div>

<h3>Trusted Service</h3>

<p>

Our focus is to build long-term relationships by providing reliable supply, competitive pricing, and consistent product quality.

</p>

</div>


<div>

<h3>Customer Satisfaction</h3>

<p>

We aim to deliver value through timely service and dependable business support for wholesalers, retailers, and partners.

</p>

</div>

</div>


</section>


<section className="contact" id="contact">

<h2>Contact Us</h2>

<p className="contact-intro">
We are here to help you with any enquiry related to our products.
Feel free to contact us anytime.
</p>


<div className="contact-box">

<div>

<h3>📍 Office Location</h3>

<p>Sangli, Maharashtra, India</p>

</div>


<div>

<h3>📧 Email Us</h3>

<p>info@hariomtraders.com</p>

</div>


<div>

<h3>📞 Call For Help</h3>

<p>+91 XXXXXXXXX</p>

</div>


</div>


</section>


<footer>

© 2026 Hari Om Traders

</footer>


</>

)

}

export default App
