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

  </style>
  