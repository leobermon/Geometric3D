

<template>
  <div class="home">
    <Header/>

      <component :is="compon" ></component>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <!-- <About/> -->
      
    <Footer/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Footer

    // Historia
    // Servicios
    // Faq
    
  },
  data(){
    return{
      compon:HelloWorld
    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>