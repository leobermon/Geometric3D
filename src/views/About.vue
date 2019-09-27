<template>
  <div >
  	<Header/>
    <div class="offcanvas-wrapper">
      <!-- Page Title-->
      <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Acerca de Nosotros</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="index.html">Inicio</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li>Acerca de nosotros </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Page Content-->
      <div class="container padding-bottom-2x mb-2">
        <div class="row align-items-center padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto" src="@/assets/img/logo/newlogo.png" alt="Online Shopping"></div>
          <div class="col-md-7 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2>Geometric3D</h2>
            <p>Somos una empresa mexicana encargada del diseño e impresion de piezas 3D</p>
            <p>Nuestro inicio fue trabajando con las industrias del plástico y la fundición. realizando moldes y prototipos de manera rapida y economica. 
              Nuestro objetivo es brindar un servicio de calidad y de manera accesible para nuestros clientes, queremos utilizar todo el potencial de esta tecnologia, ofreciendo el servicio hacia cualquier sector de la industria que lo requiera. haz realidad ese modelo que tienes en mente, nosotros te ayudamos.</p>
          </div>
        </div>
        <hr>
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5 order-md-2"><img class="d-block w-270 m-auto" src="img/features/02.jpg" alt="Delivery"></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2>Somos diseñadores y Fabricantes</h2>
            <p>Contamos con un equipo de diseñadores, los cuales te pueden ayudar a concretar la idea que tienes en mente, asi posteriormente tenerlo de manera fisica y realizar todas las pruebas que necesitas hacer con ese modelo</p>
            <p>Si usted ya cuenta con su modelo 3D, nosotros solo le cobramos el trabajo de impresion, posteriormente realizamos el envio del modelo de manera rapida para que usted no se detenga realizando sus proyectos </p>
          </div>
        </div>
        <hr>
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5"><img class="d-block w-270 m-auto" src="img/features/03.jpg" alt="Mobile App"></div>
          <div class="col-md-7 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2>Aceptamos diferentes medios de pago</h2>
            <p class="mb-4"> Usted puede realizar su pago de diferentes maneras, Efectivo, Transferencia, Paypal. Nosotros le podemos facturar por el trabajo realizado, si usted requiere facturacion , solicitela </p>
            
          </div>
        </div>

        <!-- <hr>
        <div class="row align-items-center padding-top-2x padding-bottom-2x">
          <div class="col-md-5 order-md-2"><img class="d-block w-270 m-auto" src="img/features/04.jpg" alt="Delivery"></div>
          <div class="col-md-7 order-md-1 text-md-left text-center">
            <div class="mt-30 hidden-md-up"></div>
            <h2>Shop Offline. Cozy Outlet Stores.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor, tristique nec placerat nec.</p><a class="text-medium text-decoration-none" href="contacts.html">See Outlet Stores&nbsp;<i class="icon-arrow-right"></i></a>
          </div>
        </div> -->
        
      </div>
     
    </div>

    <Footer/>
  </div>
</template>

<script>

import axios from 'axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HelloWorld',
  props: {    msg: String  },
  components: {
    Header,
    Footer
  },
  data(){
    return{
        slider:[]
    }
 
  },
  created(){

  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
