<template>

  <div class="hello offcanvas-wrapper">
  	<Header/>
 
        <div class="page-title">
        <div class="container">
          <div class="column">
            <h1>Galeria</h1>
          </div>
          <div class="column">
            <ul class="breadcrumbs">
              <li><a href="index.html">Inicio</a>
              </li>
              <li class="separator">&nbsp;</li>
              <li>Galleria</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Page Content-->
      <div class="container padding-bottom-3x mb-1">
        <div class="row">
          <div class="col-lg-9 col-md-8 order-md-2">
            <h6 class="text-muted text-normal text-uppercase">With Gap (Bootstrap Grid)</h6>
            <hr class="margin-bottom-1x">
            <div class="gallery-wrapper">
              <div class="row">

                <div class="col-md-12 col-sm-12">
                  <div class="gallery-item">

                    <div class="images" v-viewer>
                      <img src="@/assets/img/gallery/02.jpg"> 
                      <img src="@/assets/img/gallery/03.jpg"> 
                      <img src="@/assets/img/gallery/04.jpg"> 
                    </div>

                    <span class="caption">Never War Bag</span>
                  </div>
                </div>

      <!--           <div class="col-md-4 col-sm-6">
                  <div class="gallery-item">
                     <div class="images" v-viewer>
                      <img src="@/assets/img/gallery/03.jpg"> 
                    </div>
                    <span class="caption">BRXTN Cap</span>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="gallery-item">
                    <a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://www.youtube-nocookie.com/embed/n2CCz4x2xGE?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;">
                      <img src="@/assets/img/gallery/th01.jpg" alt="Image">
                    </a>
                    <span class="caption">Converse by Nike</span>
                  </div>
                </div> -->
              

              </div>
            </div>
            <h6 class="text-muted text-normal text-uppercase padding-top-1x mt-1">No Gap (Isotope Grid)</h6>
            <hr class="margin-bottom-1x">
            <div class="gallery-wrapper isotope-grid cols-3 grid-no-gap">
              <div class="gutter-sizer"></div>
              <div class="grid-sizer"></div>
              <div class="grid-item gallery-item">
                <a href="@/assets/img/gallery/03.jpg" data-size="1000x667">
                    <img src="@/assets/img/gallery/th03.jpg" alt="Image">
                </a>
                <span class="caption">Never War Bag</span>
              </div>
              <div class="grid-item gallery-item">
                <a href="@/assets/img/gallery/02.jpg" data-size="1000x667">
                  <img src="@/assets/img/gallery/th02.jpg" alt="Image">
                </a>
                <span class="caption">BRXTN Cap</span>
              </div>
              <div class="grid-item gallery-item">
                <a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://www.youtube-nocookie.com/embed/n2CCz4x2xGE?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;">
                    <img src="@/assets/img/gallery/th01.jpg" alt="Image">
                </a>
                <span class="caption">Converse by Nike</span>
              </div>
              <div class="grid-item gallery-item">
                <a href="@/assets/img/gallery/04.jpg" data-size="1000x667">
                  <img src="@/assets/img/gallery/th04.jpg" alt="Image">
                </a>
                <span class="caption">T-Shirt Collection</span>
              </div>
              <div class="grid-item gallery-item">
                <a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://player.vimeo.com/video/70022464?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;">
                  <img src="@/assets/img/gallery/th05.jpg" alt="Image">
                </a>
                <span class="caption">Summer Dress</span>
              </div>
              <div class="grid-item gallery-item">
                <a href="@/assets/img/gallery/06.jpg" data-size="1000x667">
                  <img src="@/assets/img/gallery/th06.jpg" alt="Image">
                </a>
                <span class="caption">Hoodie</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 order-md-1">
            <!-- Side Menu-->
            <div class="padding-top-3x hidden-md-up"></div>
            <div class="card rounded-bottom-0" data-filter-list="#components-list">
     
            </div>
              <nav class="list-group" id="components-list">
                <a class="list-group-item list-group-item-action" href="forms.html" data-filter-item="af">Forms</a>
                <a class="list-group-item list-group-item-action active" href="gallery.html" data-filter-item="gm">Gallery</a>
                <a class="list-group-item list-group-item-action" href="google-maps.html" data-filter-item="gm">Google Maps</a>
                <a class="list-group-item list-group-item-action" href="images.html" data-filter-item="gm">Images &amp; Figures</a>
              </nav>
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
