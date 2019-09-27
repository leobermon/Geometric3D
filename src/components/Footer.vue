<template>
  <div >
    <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <!-- Contact Info-->
              <section class="widget widget-light-skin">
                <h3 class="widget-title">Contactanos</h3>
                <ul class="list-unstyled text-sm text-white">
                  <li>contacto@geometric3d.com</li>
                  <li><span class="opacity-50">Telefono:</span>9983857823</li>
                </ul>
                  <a class="social-button shape-circle sb-facebook sb-light-skin" href="https://www.facebook.com/geometric3d"><i class="socicon-facebook"></i></a>
                  <!-- <a class="social-button shape-circle sb-twitter sb-light-skin" href="https://www.twitter.com/geometric3d"><i class="socicon-twitter"></i></a> -->
                  <a class="social-button shape-circle sb-instagram sb-light-skin" href="https://www.instagram.com/geometric3d"><i class="socicon-instagram"></i></a>
              </section>
            </div>
            
            <div class="col-lg-4 col-md-6">
              <!-- About Us-->
                <section class="widget widget-light-skin">
                <h3 class="widget-title">Horarios</h3>
                <ul class="list-unstyled text-sm text-white">
                  
                  <li><span class="opacity-50">Lunes-Viernes:</span>9.00 am - 8.00 pm</li>
                  <li><span class="opacity-50">Sabado:</span>10.00 am - 6.00 pm</li>
                </ul>
              </section>
            </div>
            <div class="col-lg-4 col-md-6">
              <!-- Account / Shipping Info-->
              <section class="widget widget-links widget-light-skin">
                <h3 class="widget-title">Cuenta &amp; Envio</h3>
                <ul>
                  <!-- <li><a href="#">Mi Cuenta</a></li> -->
                   <li> <router-link to="/about">Acerca</router-link> </li>
                   <li> <router-link to="/servicios">Servicios</router-link> </li>
                   <li> <router-link to="/faq">Help / FAQ</router-link> </li>
                  
                  <!-- <li><a href="#">Impuestos</a></li> -->
                </ul>
              </section>
            </div>
          </div>
          <hr class="hr-light mt-2 margin-bottom-2x">
          <div class="row">
            <div class="col-md-12 padding-bottom-1x">
              
              <!-- Payment Methods-->
              <center>
                <div class="margin-bottom-1x" style="max-width: 615px;"><img src="img/payment_methods.png" alt="Payment Methods"> </div>
              </center>

            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  methods:{
    cambiarComponente: function (a) {
      this.$parent.cambiarComponente(a)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .site-footer {
    padding-top: 20px;
    background-color: #374250;
  }

  .widget {
    margin-bottom: 5px;
  }

  .margin-bottom-2x {
    margin-bottom: 10px !important;
  }

  .padding-bottom-1x {
    padding-bottom: 0px !important;
  }

</style>
