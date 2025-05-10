<template>
  <footer class="footer">
   
    <div class="footer__content">
      <!-- Logo + Social -->
      <div class="footer__column">
        <div class="footer-logo">
        <img src="/White_logo.png" alt="Logo" class="footer__logo" />
        <div class="footer__socials">
          <a v-for="(social, index) in dataFooter.socials" :key="index" :href="social.link" target="_blank">
            <img :src="social.icon" :alt="social.name" />
          </a>
        </div>
        </div>
        
      </div>

      <!-- Address -->
      <div class="footer__column">
        <h4>Address</h4>
        <div class="footer__address">
          <img src="/location.png" alt="Location" />
        <div v-html="dataFooter.address.location.address"></div>
        </div>
 
        <div class="footer__phone">
          <img src="/mobile.png" alt="Phone" />
          <div v-html="dataFooter.address.phone.number"></div>
        </div>
      </div>

      <!-- Subscribe -->
      <div class="footer__column">
        <h4>Subscribe</h4>
        <p>Subscribe to our newsletter and be the first to know about our updates</p>
        <form class="footer__form" @submit.prevent>
          <input type="email" placeholder="Enter your email" />
          <img src="/arrow-right.png" alt="Arrow" class="input-icon" />
            <!-- <img src="/icons/arrow-right.svg" alt="Submit" /> -->
          
        </form>
      </div>
    </div>
   
  </footer> 
  <div class="footer__bottom">
      <p>2017 Copyright. Policy.</p>
      
    </div>
</template>
<script lang="ts" setup>
import { link } from 'fs';


const dataFooter = {
  socials: [
    { name: 'Twitter', icon: '/twitter-outlined.png',link:'https://twitter.com/' },
    { name: 'Facebook', icon: '/facebook-filled.png',link:'https://www.facebook.com/' },
    { name: 'LinkedIn', icon: '/linkedin-filled.png',link:'https://www.linkedin.com/' },
  ],

  address:{
    location : {
      icon: '/location.png',
      address: '<p> Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US </p> <p> 20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</p>',
    },
    phone: {
      icon: '/mobile.png',
      number: '<p>(+1) 555-0108-000 or (+236) 555-0108</p>',
    },
}
}
</script>
<style scoped lang="scss">
  @import "@/assets/scss/footer.scss";

</style>
