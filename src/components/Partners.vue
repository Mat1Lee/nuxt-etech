<template>
  <section class="partners">
    <div class="partners__content container">
      <div class="section-title" v-html="t('partners.title')"></div>
      <div class="partners__list" style="position: relative;">
          <Swiper
            :slides-per-view="5"
            :space-between="30"
            :modules="modules"
            :centered-slides="true"
            :free-mode="false"
            :breakpoints="{
              320: { slidesPerView: 1.5, spaceBetween: 10, centeredSlides: true },
              480: { slidesPerView: 2, spaceBetween: 15, centeredSlides: true },
              768: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
              1024: { slidesPerView: 4, spaceBetween: 25 },
              1280: { slidesPerView: 5, spaceBetween: 30 },
            }"
            :loop="true"
            :navigation="{
              nextEl: '.box-controls .swiper-button-next-list',
              prevEl: '.box-controls .swiper-button-prev-list',
            }"
            pagination
            class="partners__items"
          >
        <SwiperSlide
          v-for="(item, index) in response.data.info"
          :key="index"
          class="partners__item"
        >
       
            <img :src="item.icon" :alt="item.title" class="partners__item-icon" />
          
     

        </SwiperSlide>
        

      </Swiper>
      <div class="box-controls">
        <div class="box-btn">
          <button class="swiper-button swiper-button-prev-list">
            <img src="/arrow-square-left.png" alt="Previous" />
          </button>
        </div>
        <div class="box-btn">
          <button class="swiper-button swiper-button-next-list">
            <img src="/arrow-square-right.png" alt="Next" />
          </button>
        </div>
      </div>
      </div>
    
    </div>
  </section>
</template>


<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import{nextTick,onMounted} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,FreeMode } from "swiper/modules";
const modules = [Navigation];
const response = {
  data:{
    title:'Our Partners',
    description:'',
    info:[
      { link:"#", icon:"/part1.png", title:"Partner 1" },
      { link:"#", icon:"/part2.png", title:"Partner 2" },
      { link:"#", icon:"/part3.png", title:"Partner 3" },
      { link:"#", icon:"/part4.png", title:"Partner 4" },
      { link:"#", icon:"/part5.png", title:"Partner 5" },
      { link:"#", icon:"/part6.png", title:"Partner 6" },
      { link:"#", icon:"/part7.png", title:"Partner 7" },
    ],
  }
}
const handleStyleTopButton = () => {
      const product = document.querySelector(".partners__list");
      
      const button_option = document.querySelectorAll(".box-controls .box-btn .swiper-button");
      if (!product&&!button_option) return;
      else{
      const height = product?.clientHeight || 100;
      console.log(height)
        button_option.forEach((btn: any) => {
        btn.style.top = ((height / 2) - 27) + "px";
      });
      }

    };
onMounted(() => {
  nextTick(()=>{
    handleStyleTopButton();
  })
  
  window.addEventListener("resize", handleStyleTopButton);
});
</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/partners.scss";
</style>
