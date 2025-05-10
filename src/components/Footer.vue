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
.footer {
  position: relative;
  background-image: url('/BG-footer.png');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 40px 16px;

 
  &-logo{
    display: flex;
    align-items: start;
    flex-direction: column;
    @media screen and (max-width: 575px) {
      align-items: center;
      
    }

  }
  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__column {
    flex: 1;
    min-width: 250px;

    h4 {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 40px;
      @media screen and (max-width: 575px) {
      font-size:24px;
      margin-bottom:20px;
    }
    }

    p {
      margin-bottom: 12px;
      display: flex;
      align-items: start;
      gap: 8px;
      font-size: 14px;
      line-height: 1.4;
    }
  }

  &__logo {
    max-width: 100px;
    margin-bottom: 40px;
  }

  &__socials {
    display: flex;
    gap: 24px;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
  &__address {
    display: flex;
    
    gap: 8px;
    margin-bottom: 40px;
    img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    :deep p{
      
      font-size: 14px;
      line-height: 1.4;
      &:first-child {
        margin-bottom: 12px;
      }
    }
  @media screen and (max-width: 575px) {
      margin-bottom:20px;
    }
    
  
  }

  &__phone {
    display: flex;
    align-items: center;
    gap: 8px;
    // margin-bottom: 40px;
    img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
    :deep p{
      
      font-size: 14px;
      line-height: 1.4;
    }
  }
  &__form {
    display: flex;
    margin-top: 1rem;
    border: 1px solid #FFF;  
     border-radius: 8px;
    .input-icon {
     
    padding:16px 14px
    }
    input {
      flex: 1;
      padding: 16px;
      
      background: transparent;
      color: white;
   
      outline: none;
      border:none;
      &::placeholder {
        color: #ccc;
      }
    }

    button {
      padding: 10px 14px;
      background: transparent;
      border: 1px solid #ffffff50;
      border-left: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  &__bottom {
   padding:30px 0;
   font-size: 18px;
   font-family: "Montserrat";
   line-height: 1.26;
   background: #000;
   color:#FFF;
   text-align: center;
  }
}
</style>
