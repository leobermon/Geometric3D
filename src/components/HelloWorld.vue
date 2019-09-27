<template>
  <div class="hello">
    <div class="offcanvas-wrapper">
      <!-- Page Content-->
      <!-- Main Slider-->
      <section class="hero-slider" style="background-image: url(img/hero-slider/main-bg.jpg);">
        <div class="owl-carousel large-controls dots-inside" data-owl-carousel="{ &quot;nav&quot;: true, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 7000 }">
          <div class="item">
            <div class="container padding-top-3x">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div class="from-bottom"> 
                    <div class="h2 text-body text-normal mb-2 pt-1"> Servicios de impresion 3D profesionales </div>
                    <div class="h3 text-body text-normal mb-4 pb-1"> Refacciones | Prototipos | Piezas finales </div>
                    <div class="h3 text-body text-normal mb-4 pb-1"> Realizamos el servicio de impresion 3D de manera rapida, segura con calidad </div>
                    <div class="h3 text-body text-normal mb-4 pb-1">  </div>
                  </div><a class="btn btn-primary scale-up delay-1" href="shop-single.html"> Conoce mas sobre la impresion 3D </a>
                </div>
                <div class="col-md-6 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="img/hero-slider/dos.png" alt="Chuck Taylor All Star II"></div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="container padding-top-3x">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div class="from-bottom">
                    <div class="h1 text-body text-normal mb-2 pt-1"> Industrias Presentes </div>
                    <div class="h3 text-body text-normal mb-2 pt-1"> La impresion 3D se utiliza en el campo de ingenierias, medicina, diseño, robotica, muchos sectores ya estan utilizando esta tecnologia   </div>
                  </div><a class="btn btn-primary scale-up delay-1" href="shop-single.html"> Conoce las industrias disponibles </a>
                </div>
                <div class="col-md-6 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="img/hero-slider/adn.png" alt="Moto 360"></div>
              </div>
            </div>
          </div>

            <div class="item">
            <div class="container padding-top-3x">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div class="from-bottom">
                    <div class="h1 text-body text-normal mb-2 pt-1"> Haz realidad tu diseño </div>
                    <div class="h3 text-body text-normal mb-2 pt-1"> Hacemos tu idea, tu concepto o tu diseño 3D en objetos físicos para que puedas trabajar con ello </div>
                  </div><a class="btn btn-primary scale-up delay-1" href="shop-single.html"> Ver ejemplos </a>
                </div>
                <div class="col-md-6 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="img/hero-slider/tres.png" alt="Moto 360"></div>
              </div>
            </div>
          </div>


          <div v-for="slide in slider" class="item">
            {{ slide }}

            <div class="container padding-top-3x">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                  <div class="from-bottom"><img class="d-inline-block w-150 mb-4" src="img/hero-slider/logo02.png" alt="Puma">
                    <div class="h1 text-body text-normal mb-2 pt-1"> prueba </div>
                    <div class="h3 text-body text-normal mb-4 pb-1"> Desde <span class="text-bold">$99</span></div>
                  </div><a class="btn btn-primary scale-up delay-1" href="shop-grid-ls.html"> Ver Producto </a>
                </div>
                <div class="col-md-6 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="img/hero-slider/groot.png" alt="Puma Backpack"></div>
              </div>
            </div>

          </div>


        </div>
      </section>
      <!-- Top Categories-->
      <section class="container padding-top-3x">
        
          <div class="row">
   
            <div class="col-lg-4 margin-bottom-1x">
              <div class="card text-center">
                <div class="card-body">
                  <h4 class="card-title">Materiales</h4>
                  <p class="card-text">Prueba diferentes materiales, asi podra saber cual es el que se adapta y funciona mejor con su prototipo</p>
                  <a class="btn btn-outline-primary btn-sm" href="#">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 margin-bottom-1x">
              <div class="card text-center">
                <div class="card-body">
                  <h4 class="card-title">Bajo Costo</h4>
                  <p class="card-text">Una ventaja de la impresion 3D es lo barato que puede ser realizar un protitipo </p><a class="btn btn-outline-primary btn-sm" href="#">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 margin-bottom-1x">
              <div class="card text-center">
                <div class="card-body">
                  <h4 class="card-title">Prototipos</h4>
                  <p class="card-text"> Crea prototipos, asi te podras dar cuenta de algunos aspectos a mejorar en tu diseño.  </p><a class="btn btn-outline-primary btn-sm" href="#">Go somewhere</a>
                </div>
              </div>
            </div>

          </div>
      </section>
      <!-- Promo #1-->
      
      <!-- Promo #2-->
      <section class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12">
            <div class="fw-section rounded padding-top-4x padding-bottom-4x" style="background-image: url(img/banners/home02.jpg);"><span class="overlay rounded" style="opacity: .35;"></span>
              <div class="text-center">
                <h2 class="display-2 text-bold text-white text-shadow">Nuestros Proyectos!</h2>
                <h4 class="d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4">Echa un vistazo a algunos proyectos echos con piezas 3D </h4><br>
                <router-link to="/projects">
                  <a class="btn btn-primary margin-bottom-none" href="contacts.html">Ver proyectos</a>  
                </router-link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Featured Products Carousel-->
      <section class="container padding-top-3x padding-bottom-3x">
        <h3 class="text-center mb-30">Sectores Industriales </h3>
        <div class="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;margin&quot;: 30, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;768&quot;:{&quot;items&quot;:3},&quot;991&quot;:{&quot;items&quot;:4},&quot;1200&quot;:{&quot;items&quot;:4}} }">
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product"></a>
              <h3 class="product-title"><a href="shop-single.html">Construccion</a></h3>
              <div class="product-buttons">
                <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Ver Ejemplos</button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product"></a>
              <h3 class="product-title"><a href="shop-single.html">Educacion</a></h3>
              <div class="product-buttons">
                <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Ver Ejemplos</button>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product"></a>
              <h3 class="product-title"><a href="shop-single.html">Robotica</a></h3>
              <div class="product-buttons">
                <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Ver Ejemplos</button>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product"></a>
              <h3 class="product-title"><a href="shop-single.html">Electronica</a></h3>
              <div class="product-buttons">
                <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Ver Ejemplos</button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product"></a>
              <h3 class="product-title"><a href="shop-single.html">Ingenierias</a></h3>
              <div class="product-buttons">
                <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Ver Ejemplos</button>
              </div>
            </div>
          </div>
          <!-- Product-->
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product"></a>
              <h3 class="product-title"><a href="shop-single.html">Salud</a></h3>
              <div class="product-buttons">
                <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Ver Ejemplos</button>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="product-card">
              <a class="product-thumb" href="shop-single.html"><img src="img/shop/products/09.jpg" alt="Product"></a>
              <h3 class="product-title"><a href="shop-single.html">Arte & Diseño</a></h3>
              <div class="product-buttons">
                <button class="btn btn-outline-primary btn-sm" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Product" data-toast-message="successfuly added to cart!">Ver Ejemplos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Popular Brands-->
      <section class="bg-faded padding-top-3x padding-bottom-3x">
        <div class="container">
          <h3 class="text-center mb-30 pb-2">Contamos con diferentes materiales</h3>
          <div class="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2}, &quot;470&quot;:{&quot;items&quot;:3},&quot;630&quot;:{&quot;items&quot;:4},&quot;991&quot;:{&quot;items&quot;:5},&quot;1200&quot;:{&quot;items&quot;:6}} }">
            <h1 class="text-center mb-40 pb-1" style="font-family:fantasy; font-size:60px;" > PLA </h1>
            <h1 class="text-center mb-40 pb-1" style="font-family:fantasy; font-size:60px;" > ABS </h1>
            <h1 class="text-center mb-40 pb-1" style="font-family:fantasy; font-size:60px;" > TPU </h1>
            <h1 class="text-center mb-40 pb-1" style="font-family:fantasy; font-size:60px;" > PETG </h1>
            <h1 class="text-center mb-40 pb-1" style="font-family:fantasy; font-size:60px;" > NYLON </h1>
            <h1 class="text-center mb-40 pb-1" style="font-family:fantasy; font-size:60px;" > PVC </h1>            
            <h1 class="text-center mb-40 pb-1" style="font-family:fantasy; font-size:60px;" > HIPS </h1>            
          </div>
        </div>
      </section>
      <!-- Services-->


      <section class="container padding-top-3x padding-bottom-2x">
        <div class="row">
          <div class="col-md-12 padding-bottom-2x mb-3"><img class="d-block mx-auto" src="img/hero-slider/background2.png" alt="Puma Backpack"></div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/01.png" alt="Shipping">
            <h6>Envio Gratis </h6>
            <p class="text-muted margin-bottom-none">En compras mayores a $899 Mxn</p>
          </div>
          <div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/02.png" alt="Money Back">
            <h6>Garantia de satisfaccion</h6>
            <p class="text-muted margin-bottom-none">Le regresamos su dinero en menos de 30 dias</p>
          </div>
          <div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/03.png" alt="Support">
            <h6>Cotizaciones</h6>
            <p class="text-muted margin-bottom-none">Pongase en contacto para cualquier duda y sugerencia</p>
          </div>
          <div class="col-md-3 col-sm-6 text-center mb-30"><img class="d-block w-90 img-thumbnail rounded-circle mx-auto mb-3" src="img/services/04.png" alt="Payment">
            <h6>Pago Seguro</h6>
            <p class="text-muted margin-bottom-none">Pago seguro a travez de Paypal</p>
          </div>
        </div>
      </section>
      <!-- Site Footer-->

      

    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {    msg: String  },
  data(){
    return{
        slider:[]
    }

  },
  created(){

  },
  mounted(){
    console.log('mounted');
    
  },
  methods:{
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
