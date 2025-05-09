<template>
    <!-- <Banner path="Publications / 11th Singapore Media Festival" title="11th Singapore Media Festival" />
      -->
      <div  class="error-page">
        <div class="container">
            <div class="error-page__content">
                <div class="error-page__content__title"><h1>404 Error</h1></div>
                <div class="error-page__content__description">
                    <h2>Page not found</h2>
                    <button class="btn-home" @click="() => $router.push('/')">Homepage</button>
                </div>
            </div>
        </div>

      </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from "vue";

const headerHeight = ref(0);
const footerHeight = ref(0);

</script>
<style scoped lang="scss">

.error-page{
  background: url('../assets/images/error-page.png');
  background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    &__content{
        display: flex;
        justify-content: center;
        align-items: center;
        // height: 100vh;
        gap:120px;
        flex-direction: column;
        padding:60px 0;
        @media screen and (max-width: 460px) {
          gap:60px;
        }
        &__description{
            display: flex;
            flex-direction: column;
            gap: 60px;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 460px) {
                gap:30px;
              }
            // padding-bottom:60px;
        }
   
            
        
    }
}
  
button {
        padding: 15px 25px;
        background-color: #D2302C;
        color: #F7F7F9;

        /* P1 */
        font-family: "Montserrat";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-align: left;
        max-width: max-content;
        &:hover {
          background-color: #ae0015;
        }
        @media screen and (max-width: 460px) {
          font-size: 14px;
        }
      }
</style>