<template>
    <section class="master-main-banner_image">
      <img
        :src="dataBanner.bacground_desktop_image.url"
        alt="4Tech Banner Image"
        class="banner-background desktop"
       
      />
      <img
        :src="dataBanner.background_mobile_image.url"
        alt="4Tech Banner Image"
        class="banner-background mobile"
       
      />
    <img src="/Fairy.png" class="fairy"/>
      <div class="inner-banner">
        <div class="banner-text">
            <div class="banner-title" v-html="dataBanner.title_main"></div>
            <div class="countdown-container">
        <div class="countdown-wrapper">
          <div class="time-block">
            <div class="time-value">{{ padZero(timeLeft.days) }}</div>
            <div class="time-label">Days</div>
          </div>
          <div class="time-separator">:</div>
          <div class="time-block">
            <div class="time-value">{{ padZero(timeLeft.hours) }}</div>
            <div class="time-label">Hours</div>
          </div>
          <div class="time-separator">:</div>
          <div class="time-block">
            <div class="time-value">{{ padZero(timeLeft.minutes) }}</div>
            <div class="time-label">Minutes</div>
          </div>
          <div class="time-separator">:</div>
          <div class="time-block">
            <div class="time-value">{{ padZero(timeLeft.seconds) }}</div>
            <div class="time-label">Seconds</div>
          </div>
        </div>
      </div>
            <div class="banner-bottom">
                <div class="section-description banner-des" v-html="dataBanner.title_sub"></div>

                <div class="banner-bottom__input">
                  <input type="email" placeholder="Enter your email" />
                  <img src="/arrow-right-bl.png" alt="Arrow" class="input-icon" />
                    
                </div>
          
        </div>
        </div>
            
        
      </div>
      <div class="img_mb">
        <img src="/Fairy_mb.png" class="fairy-mb"/>

      </div>
      <!-- <div class="overlay-banner"></div> -->
    </section>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, ref, onMounted, watch } from "vue";
  const route = useRoute()
  const isSingle = ref(false);
  const dataBanner = {
    title_main: "We’re Getting Ready",
    title_sub: "We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.",
    time_countdown: "2025-06-08T00:00:00Z",
    bacground_desktop_image: {
        url: "/4tech-banner.webp",
        alt: "4Tech Banner Image",
    },
    background_mobile_image: {
        url: "/4tech-mobile.png",
        alt: "4Tech Banner Image",
    },
  }
  
  const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});
  onMounted(() => {
    // Check if the current path includes 'news/' or 'event/'
    isSingle.value = route.fullPath.includes('news/') || route.fullPath.includes('event/');
  });

  const isHover = ref([]); 
 
 


  const calculateTimeLeft = () => {
  const difference = new Date(dataBanner.time_countdown) - new Date();
  
  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    
    timeLeft.value = { days, hours, minutes, seconds };
  }
};

// Pad with leading zeros
const padZero = (value: number) => {
  return String(value).padStart(2, '0');
};


let timer: any = null;

onMounted(() => {
  calculateTimeLeft();
  timer = setInterval(calculateTimeLeft, 1000);
});

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
});
  </script>
  
  <style lang="scss">
   @import "@/assets/scss/components/banner-header.scss";

  
  .banner-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; 
    &.desktop {
      display: block;
    }
    &.mobile {
      display: none;
    }
    @media screen and (max-width: 768px) {
      &.desktop {
        display: none;
      }
      &.mobile {
        display: block;
      }
    }
  }
  
    .banner-text {
        text-align: center;
    max-width: 860px;
    padding:20px;
    padding-bottom:0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   @media screen and (max-width: 768px) {
    margin-top:95px;
   }
    
    }
    .banner-bottom{
        margin-top:97px;
        max-width: 560px;
        img{
          padding: 0 14px;
        }
        &__input{
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #FFFFFF;
            margin-top:32px; 
             border: 1px solid #FFF; 
            border-radius: 8px;
            input{
            flex: 1;
            padding: 10px;
          
            background: transparent;
            color: #545454;
           
            border: none;
            outline: none;
            width: 100%;
            max-width: 560px;
            &::placeholder {
                color: #545454;
            }
          
        }  
        @media screen and (max-width: 768px) {
              margin-top:16px;
              
            }
        }
    
        @media screen and (max-width: 768px) {
           margin-top:40px;
    }
  }
    .countdown-container {
     background: #FFFFFF;
    margin-top:20px;
      padding: 26px 40px;
      border-radius: 21px;
         max-width: 750px;
      .countdown-wrapper {
        display: flex;
      
        justify-content: space-between;
        gap:52px;
     @media screen and (max-width: 768px) {
          gap: 20px;
        }
        @media screen and (max-width: 575px) {
          gap: 4px;
        }
        
        @media screen and (max-width: 390px) {
          gap: 4px;
        }
        
     
        .time-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          
          .time-value {
            font-size: 60px;
            line-height: 64px;
            letter-spacing: 4.8px;
            font-family: "Playfair Display";
            font-weight: bold;
            block-size:80px;
            inline-size: 80px;
            @media screen and (max-width: 768px) {
              font-size: 36px;
              line-height: 45px;
              block-size:46px;
              letter-spacing: 0;
              inline-size: 46px;
                
            }
          }
          
          .time-label {
            font-size:15.64px;
            letter-spacing: -0.65px;
            font-weight: 700;
            font-family: "Montserrat";
            @media screen and (max-width: 768px) {
              font-size: 12px;
             
                
            }
          }
        }
        
        .time-separator {
          font-size: 65.17px;
          line-height: normal;
          font-family: "Montserrat";
          font-style: normal;
          letter-spacing: -0.65px;
          font-weight: bold;
          @media screen and (max-width: 768px) {
            font-size: 40px;
            line-height: normal;
            // left: ;
            
          }
        }
      }
      @media screen and (max-width: 768px) {
        padding: 24px 26px;
        max-width: 100%;
        
      }
    }
    .master-main-banner_image .fairy {
      @media screen and (max-width: 768px) {
        display: none;
        
      }
    }
    .master-main-banner_image .fairy-mb {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1; 
        
      }
    }
  </style>
  