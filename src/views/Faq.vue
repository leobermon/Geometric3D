<template>
  <div class="hello">
    <Header/>
    

<div class="offcanvas-wrapper">
      <!-- Page Title-->
      <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Help / FAQ</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="index.html">Inicio</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li>Help / FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Page Content-->
      <div class="container padding-bottom-3x">
        <div class="row">
          <!-- Side Menu-->
          <div class="col-lg-3 col-md-4">
            <nav class="list-group">
              <a @click="selected = 0" :class="(selected == 0) ? 'list-group-item active':'list-group-item'  " href="#">Preguntas populares</a>
              <a @click="selected = 1" :class="(selected == 1) ? 'list-group-item active':'list-group-item'  " href="#">Terminos &amp; Condiciones</a>
            </nav>
            <div class="padding-bottom-3x hidden-md-up"></div>
          </div>
          <!-- Content-->
          <div class="col-lg-9 col-md-8">
            <div v-if="selected == 0" class="accordion" id="accordion" role="tablist">
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a href="#collapseOne" data-toggle="collapse">¿ Que metodos de pago aceptan ?</a></h6>
                </div>
                <div class="collapse show" id="collapseOne" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">
                    <p> Usted puede realizar su pago en cualquier de las siguiente maneras: </p>
                    <center>
                      <ul>
                      <li>  - Transferencias bancarias</li>
                      <li> - Paypal</li>
                      <li>- Efectivo</li>
                    </ul>  
                    </center>
                    
                
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseTwo" data-toggle="collapse">¿Cuanto tiempo tardan en entregar mi pedido?</a></h6>
                </div>
                <div class="collapse" id="collapseTwo" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">El tiempo de impresion de su pieza varia dependiendo de las medidas de su pieza. le damos un ejemplo: si usted quiere imprimir una pieza del tamaño de una lata de refresco, este puede ser realizado en unas 6 horas. contamos con varias impresoras por lo cual se pueden hacer varias piezas simultaneamente, asi podemos imprimir 30 piezas en esas 6 horas (el tiempo puede variar dependiendo del material utilizado). 
                    <p>si quiere saber exactamente el tiempo de su pieza, envienos un correo donde adjunte su archivo y le damos el tiempo que tomara hacer su modelo realidad </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseThree" data-toggle="collapse">¿Cual es el costo de la impresion ?</a></h6>
                </div>
                <div class="collapse" id="collapseThree" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">Mientras la competencia le cobra por minuto de impresion, nosotros le hacemos el calculo con base en el material utilizado durante la impresion.
                    <p>El precio varia dependiendo delmaterial que el cliente solicite y las especificaciones que quiere que se haga(para saber el precio de su producto es necesario que nos envie su modelo, asi ya podremos calcular el precio de manera exacta) </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseFour" data-toggle="collapse">¿Cual es la medida maxima que pueden imprimir?</a></h6>
                </div>
                <div class="collapse" id="collapseFour" data-parent="#accordion" role="tabpanel">
                  <div class="card-body"> 

                    <p> El tamaño maximo de una sola pieza en resina es de 115x65x165 mm  </p>
                    <p> El tamaño maximo de una sola pieza en PLA/ABS/PET/NYLON es de 400x400x450 mm</p>
                    <p>si su pieza es mayor que estas medidas, se puede realizar la impresion por secciones, para despues en el postprocesado, se ensamblen y tenga un tamaño mayor</p>

                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseFive" data-toggle="collapse">¿Realizan facturas?</a></h6>
                </div>
                <div class="collapse" id="collapseFive" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">
                    <p>Asi es, nosotros facturamos todos sus pedidos</p>
                    <p>*Si su metodo de pago es via paypal, en este caso, no se puede realizar su factura</p>

                    

                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab">
                  <h6><a class="collapsed" href="#collapseSix" data-toggle="collapse">¿Que tipos de impresion manejan?</a></h6>
                </div>
                <div class="collapse" id="collapseSix" data-parent="#accordion" role="tabpanel">
                  <div class="card-body">
                    <p>Utilizamos impresoras con tecnologia (FDM) Modelado por deposición fundida, fundicion de plastico</p>
                    <p>Utilizamos impresoras con tecnologia (DLP) Procesamiento digital de luz. impresion con resina </p>

                    

                  </div>
                </div>
              </div>
            
           
            </div>
            <div v-else>
              <h2>Aqui van los terminos y condiciones </h2>
            </div>


            <h3 class="padding-top-2x">No resolvio sus dudas? Mandenos un mensaje y nosotros le responderemos todas las preguntas que usted tenga.</h3>
            <p class="text-muted mb-30">Tiempo de respuesta no mayor a 2 dias habiles .</p>
            
              <li> <router-link to="/cotizaciones"> Contactar </router-link> </li>

          </div>
        </div>
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
        slider:[],
        selected: 0
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
