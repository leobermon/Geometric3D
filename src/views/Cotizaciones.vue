<template>
  <div class="hello">
    <Header/>

      <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Contacto</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="index.html">Inicio</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Page Content-->
      <div class="container padding-bottom-1x mb-1">
        <div class="row">
          <div class="col-md-7">
            <div class="display-3 text-muted opacity-75 mb-30">Servicio al cliente</div>
            <div class="display-3 text-muted opacity-75 mb-30">Cotizaciones</div>
          </div>
          <div class="col-md-5">
            <ul class="list-icon">
              <li> <i class="icon-mail"></i><a class="navi-link" href="mailto:contacto@geometric3d.com">contacto@geometric3d.com</a></li>
              <li> <i class="icon-bell"></i>+52 9983857823</li>
              <li> <i class="icon-clock"></i>1 - 2 dias habiles</li>
            </ul>
          </div>
        </div>
        <hr class="margin-top-1x">
   
        <h3 class="margin-top-1x text-center mb-30">Nuestra ubicacion</h3>
        <div class="row">
          <div class="col-md-4 col-sm-6"> </div>
          <div class="col-md-4 col-sm-6">
            <div class="card mb-30">
   
              <div class="card-body">
                <ul class="list-icon">
                  <li> <i class="icon-map"></i>Cancun, Quintana Roo, Mexico</li>
                  <li> <i class="icon-bell"></i>+52 9983857823</li>
                  <li> <i class="icon-mail"></i><a class="navi-link" href="mailto:contacto@geometric3d.com">contacto@geometric3d.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6"> </div>
  
        </div>
      </div>

      <div class="container padding-bottom-1x mb-2">
     
        <hr class="margin-top-2x">
        <h3 class="padding-top-2x">Envianos un mensaje.</h3>
        <p class="text-muted mb-30">Respondemos en un lapso mayor a 2 dias habiles. Puede encontrar las preguntas frecuentes en FAQ.</p>
        <form class="row" method="post">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="help_name">Nombre</label>
              <input class="form-control form-control-rounded" type="text" id="help_name" required>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="help_email">Correo Electronico</label>
              <input class="form-control form-control-rounded" type="email" id="help_email" required>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="help_subject">Asunto</label>
              <input class="form-control form-control-rounded" type="text" id="help_subject" required>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="help_category">Categoria</label>
              <select class="form-control form-control-rounded" id="help_category">
                <option>Cotizacion</option>
                <option>Envios</option>
                <option>Pagos</option>
                <option>Materiales</option>
                <option>Garantia</option>
              </select>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="help_question">Pregunta </label>
              <textarea class="form-control form-control-rounded" id="help_question" rows="8" required></textarea>
            </div>
          </div>
          <div class="col-12 text-right">
            <button class="btn btn-primary btn-rounded" type="submit"> Enviar Mensaje </button>
          </div>
        </form>

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
}
</script>