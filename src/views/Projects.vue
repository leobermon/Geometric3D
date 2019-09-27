<template>
  <div class="hello">
  	<Header/>

        <div class="container padding-bottom-3x mb-1">
        <div class="row">
          <div class="col-lg-9 col-md-8 order-md-2">
            <h6 class="text-muted text-normal text-uppercase">With Gap (Bootstrap Grid)</h6>
            <hr class="margin-bottom-1x">
            <div class="gallery-wrapper">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="gallery-item"><a href="@/assets/img/gallery/03.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th03.jpg" alt="Image"></a><span class="caption">Never War Bag</span></div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="gallery-item"><a href="@/assets/img/gallery/02.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th02.jpg" alt="Image"></a><span class="caption">BRXTN Cap</span></div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://www.youtube-nocookie.com/embed/n2CCz4x2xGE?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th01.jpg" alt="Image"></a><span class="caption">Converse by Nike</span></div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="gallery-item"><a href="@/assets/img/gallery/04.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th04.jpg" alt="Image"></a><span class="caption">T-Shirt Collection</span></div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://player.vimeo.com/video/70022464?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th05.jpg" alt="Image"></a><span class="caption">Summer Dress</span></div>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="gallery-item"><a href="@/assets/img/gallery/06.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th06.jpg" alt="Image"></a><span class="caption">Hoodie</span></div>
                </div>
              </div>
            </div>
            <h6 class="text-muted text-normal text-uppercase padding-top-1x mt-1">No Gap (Isotope Grid)</h6>
            <hr class="margin-bottom-1x">
            <div class="gallery-wrapper isotope-grid cols-3 grid-no-gap">
              <div class="gutter-sizer"></div>
              <div class="grid-sizer"></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/03.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th03.jpg" alt="Image"></a><span class="caption">Never War Bag</span></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/02.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th02.jpg" alt="Image"></a><span class="caption">BRXTN Cap</span></div>
              <div class="grid-item gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://www.youtube-nocookie.com/embed/n2CCz4x2xGE?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th01.jpg" alt="Image"></a><span class="caption">Converse by Nike</span></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/04.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th04.jpg" alt="Image"></a><span class="caption">T-Shirt Collection</span></div>
              <div class="grid-item gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://player.vimeo.com/video/70022464?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th05.jpg" alt="Image"></a><span class="caption">Summer Dress</span></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/06.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th06.jpg" alt="Image"></a><span class="caption">Hoodie</span></div>
            </div>
            <h6 class="text-muted text-normal text-uppercase padding-top-2x mt-2">Masonry (Isotope Grid)</h6>
            <hr class="margin-bottom-1x">
            <div class="gallery-wrapper isotope-grid cols-3">
              <div class="gutter-sizer"></div>
              <div class="grid-sizer"></div>
              <div class="grid-item gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://www.youtube-nocookie.com/embed/n2CCz4x2xGE?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th01.jpg" alt="Image"></a><span class="caption">Converse by Nike</span></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/07.jpg" data-size="1000x1000"><img src="@/assets/img/gallery/th07.jpg" alt="Image"></a><span class="caption">T-Shirt Collection</span></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/03.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th03.jpg" alt="Image"></a><span class="caption">Never War Bag</span></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/08.jpg" data-size="1000x1000"><img src="@/assets/img/gallery/th08.jpg" alt="Image"></a><span class="caption">White Snickers</span></div>
              <div class="grid-item gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://player.vimeo.com/video/70022464?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th05.jpg" alt="Image"></a><span class="caption">Summer Dress</span></div>
              <div class="grid-item gallery-item"><a href="@/assets/img/gallery/06.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th06.jpg" alt="Image"></a><span class="caption">Hoodie</span></div>
            </div>
            <h6 class="text-muted text-normal text-uppercase padding-top-2x mt-2">Inside Carousel</h6>
            <hr class="margin-bottom-1x">
            <div class="gallery-wrapper owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: true, &quot;loop&quot;: true, &quot;margin&quot;: 30, &quot;autoplay&quot;: false, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:1},&quot;576&quot;:{&quot;items&quot;:2},&quot;991&quot;:{&quot;items&quot;:3},&quot;1200&quot;:{&quot;items&quot;:3}} }">
              <div class="gallery-item"><a href="@/assets/img/gallery/03.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th03.jpg" alt="Image"></a><span class="caption">Never War Bag</span></div>
              <div class="gallery-item"><a href="@/assets/img/gallery/02.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th02.jpg" alt="Image"></a><span class="caption">BRXTN Cap</span></div>
              <div class="gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://www.youtube-nocookie.com/embed/n2CCz4x2xGE?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th01.jpg" alt="Image"></a><span class="caption">Converse by Nike</span></div>
              <div class="gallery-item"><a href="@/assets/img/gallery/04.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th04.jpg" alt="Image"></a><span class="caption">T-Shirt Collection</span></div>
              <div class="gallery-item"><a href="#" data-type="video" data-video="&lt;div class=&quot;wrapper&quot;&gt;&lt;div class=&quot;video-wrapper&quot;&gt;&lt;iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;https://player.vimeo.com/video/70022464?color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&quot; frameborder=&quot;0&quot; allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;"><img src="@/assets/img/gallery/th05.jpg" alt="Image"></a><span class="caption">Summer Dress</span></div>
              <div class="gallery-item"><a href="@/assets/img/gallery/06.jpg" data-size="1000x667"><img src="@/assets/img/gallery/th06.jpg" alt="Image"></a><span class="caption">Hoodie</span></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 order-md-1">
            <!-- Side Menu-->
            <div class="padding-top-3x hidden-md-up"></div>
            <div class="card rounded-bottom-0" data-filter-list="#components-list">
              <div class="card-body pb-3">
                <div class="widget mb-4">
                  <div class="input-group form-group"><span class="input-group-btn">
                      <button class="btn" type="submit" disabled><i class="icon-search"></i></button></span>
                    <input class="form-control" type="text" placeholder="Search components">
                  </div>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" id="filter-all" name="compFilter" value="all" checked>
                  <label class="custom-control-label" for="filter-all">ALL</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" id="filter-af" name="compFilter" value="af">
                  <label class="custom-control-label" for="filter-af">A-F</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" id="filter-gm" name="compFilter" value="gm">
                  <label class="custom-control-label" for="filter-gm">G-M</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" id="filter-pt" name="compFilter" value="pt">
                  <label class="custom-control-label" for="filter-pt">P-T</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input class="custom-control-input" type="radio" id="filter-vw" name="compFilter" value="vw">
                  <label class="custom-control-label" for="filter-vw">V-W</label>
                </div>
              </div>
            </div>
              <nav class="list-group" id="components-list"><a class="list-group-item list-group-item-action" href="accordion.html" data-filter-item="af">Accordion</a><a class="list-group-item list-group-item-action" href="alerts.html" data-filter-item="af">Alerts</a><a class="list-group-item list-group-item-action" href="buttons.html" data-filter-item="af">Buttons</a><a class="list-group-item list-group-item-action" href="cards.html" data-filter-item="af">Cards</a><a class="list-group-item list-group-item-action" href="carousel.html" data-filter-item="af">Carousel</a><a class="list-group-item list-group-item-action" href="countdown.html" data-filter-item="af">Countdown</a><a class="list-group-item list-group-item-action" href="forms.html" data-filter-item="af">Forms</a><a class="list-group-item list-group-item-action active" href="gallery.html" data-filter-item="gm">Gallery</a><a class="list-group-item list-group-item-action" href="google-maps.html" data-filter-item="gm">Google Maps</a><a class="list-group-item list-group-item-action" href="images.html" data-filter-item="gm">Images &amp; Figures</a><a class="list-group-item list-group-item-action" href="list-group.html" data-filter-item="gm">List Group</a><a class="list-group-item list-group-item-action" href="market-social-buttons.html" data-filter-item="gm">Market &amp; Social Buttons</a><a class="list-group-item list-group-item-action" href="media.html" data-filter-item="gm">Media Object</a><a class="list-group-item list-group-item-action" href="modal.html" data-filter-item="gm">Modal</a><a class="list-group-item list-group-item-action" href="pagination.html" data-filter-item="pt">Pagination</a><a class="list-group-item list-group-item-action" href="pills.html" data-filter-item="pt">Pills</a><a class="list-group-item list-group-item-action" href="progress-bars.html" data-filter-item="pt">Progress Bars</a><a class="list-group-item list-group-item-action" href="shop-items.html" data-filter-item="pt">Shop Items</a><a class="list-group-item list-group-item-action" href="steps.html" data-filter-item="pt">Steps</a><a class="list-group-item list-group-item-action" href="tables.html" data-filter-item="pt">Tables</a><a class="list-group-item list-group-item-action" href="tabs.html" data-filter-item="pt">Tabs</a><a class="list-group-item list-group-item-action" href="team.html" data-filter-item="pt">Team</a><a class="list-group-item list-group-item-action" href="toasts.html" data-filter-item="pt">Toast Notifications</a><a class="list-group-item list-group-item-action" href="tooltips-popovers.html" data-filter-item="pt">Tooltips &amp; Popovers</a><a class="list-group-item list-group-item-action" href="typography.html" data-filter-item="pt">Typography</a><a class="list-group-item list-group-item-action" href="video-player.html" data-filter-item="vw">Video Player</a><a class="list-group-item list-group-item-action" href="widgets.html" data-filter-item="vw">Widgets</a>
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
