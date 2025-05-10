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
        <div>
          <p>{{ t('footer.address.address1') }}</p>
          <p>{{ t('footer.address.address2') }}</p>
        </div>
        </div>
 
        <div class="footer__phone">
          <img src="/mobile.png" alt="Phone" />
          <div v-html="dataFooter.address.phone.number"></div>
        </div>
      </div>

      <!-- Subscribe -->
      <div class="footer__column">
        <h4>{{ t('subscribe.title') }}</h4>
        <p>{{ t('subscribe.desc') }}</p>
        <form class="footer__form" @submit.prevent>
          <input type="email" :placeholder="t('subscribe.email')" />
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

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

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
