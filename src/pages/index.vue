<template>
  <div class="home-page" @scroll="handleScroll">
    <BannerHeader/>
    <AboutUs ref="aboutUsRef"/>
    <ListItem/>
    <Partners/>
   <button class="scroll-to-top" @click="scrollTo">
      <img :src="sttArrow ? '/arrow-circle.png' : '/arrow-circle-up.png'" alt="Scroll to Top" class="scroll-icon" />
    </button>
  
   

  
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted,onUnmounted } from 'vue';
import AboutUs from '~/components/AboutUs.vue';
import Partners from '~/components/Partners.vue';
import BannerHeader from '~/components/BannerHeader.vue';
import ListItem from '~/components/ListItem.vue';
import Footer from '~/components/Footer.vue';
const aboutUsRef = ref<HTMLElement | null>(null);
const scrolltop = ref<number>(0);
const sttArrow = ref<boolean>(false);
const handleScroll = () => {
  scrolltop.value = window.scrollY;
  if (scrolltop.value > 200) {
    sttArrow.value = true;
  } else {
    sttArrow.value = false;
  }
};
const scrollTo = async () => {
  if (sttArrow.value) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    if (aboutUsRef.value && aboutUsRef.value.$el) {
      const elementPosition = aboutUsRef.value.$el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 112;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
const handleResize = () => {
  if (window.innerWidth < 768) {
    scrolltop.value = 0;
  }
};
useHead({
  title: '4Tech - Home',
  meta: [
    { name: 'description', content: '4Tech Home Page' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
});
const response = {
  data:{
    home_banner:{
      url: '/4tech-banner.png',
      alt: '4Tech Banner Image',
      title:'We\'re Getting Ready',
      description:'We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.',
    }
  }
}

</script>
<style scoped lang="scss">
.home-page {
  position: relative;
  .scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    outline: none;
    border: none;
    background-color: transparent;
  
    cursor: pointer;
    z-index: 2;
    transition: background-color 0.3s ease;

    .scroll-icon {
      width: 80px;
      height: 80px;
      padding: 5px;
    }
  }
}

</style>