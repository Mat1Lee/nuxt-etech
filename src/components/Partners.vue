<template>
  <section class="partners">
    <div class="partners__content container">
      <div class="section-title" v-html="response.data.title"></div>
      <div class="partners__list" style="position: relative;">
          <Swiper
        :slides-per-view="5"
        :space-between="30"
        :modules="modules"

        :breakpoints="{
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 1, spaceBetween: 10 }, 
    768: { slidesPerView: 3, spaceBetween: 20 }, 
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
import { onMounted, nextTick } from 'vue';

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
   
      const height = product?.clientHeight || 0;
      if (!product&&!button_option) return;
      button_option.forEach((btn: any) => {
        btn.style.top = ((height / 2) - 27) + "px";
      });
    };
onMounted(() => {
  nextTick(() => {
    handleStyleTopButton();
  }); 
 
  window.addEventListener("resize", handleStyleTopButton);
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 15px;
  box-sizing: border-box;
}
.partners {
  &__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 20px;

    .custom-nav {
      background-color: #000;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 24px;
      cursor: pointer;
      border-radius: 4px;
      transition: 0.3s;

      &:hover {
        background-color: #333;
      }
    }
  }
  &__content {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:80px;
  }
  &__items {
    width: 100%;
    max-width: 1440px;
    box-sizing: border-box;
  }

}


.box-controls {
        top: 60%;
        .swiper-button-prev-list {
          background-size: contain;
          position: absolute;
          outline: none;
          background: transparent;
          border: none;
          border-radius: 5px;
          z-index: 9;
          cursor: pointer;
          &.swiper-button-disabled {
            opacity: .35;
            pointer-events: auto;
          }
         
        }
  
        .swiper-button-next-list {
          background-size: contain;
          position: absolute;
          outline: none;
          background: transparent;
          border: none;
          z-index: 9;
          right: 0;
          top: 125px;
          cursor: pointer;
          &.swiper-button-disabled {
            opacity: .35;
            pointer-events: auto;
          }
        
        }
      }
      .partners__list {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.partners__items {
  width: 100%;
  max-width: 1440px;
  box-sizing: border-box;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  // box-sizing: border-box;
  padding: 0 10px;
}

</style>
