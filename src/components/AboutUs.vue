<template>
    <section class="about-us">
        <div class="container">
            <div class="about-main">
                <div ref="aboutNumber" class="about-main__left">
                    <div class="section-title" >{{ t('about.title') }}</div>
                    <div class="section-description text-p1" v-html="t('about.desc')"></div>
                    <div ref="aboutNumber" class="about-main__info">
                        <div
                            class="about-main__info-item"
                            v-for="(item, index) in response.data.info"
                            :key="index"
                        >
                            <div class="about-main__info-item-description">
                            <span>{{ currentNumbers[index] }}</span
                            ><span
                                class="about-main__info-item-description-suffix"
                                v-if="item.suffix"
                                   >{{ t(`about.info[${index}].suffix`) }}</span
                            >+
                            </div>
                                                    <div class="about-main__info-item-title" v-html="t(`about.info[${index}].${item.title.toLowerCase().replace(/\s+/g, '')}`)"></div>
                        </div>
                        </div>
                

                </div>
                <div class="about-main__right pc">
                   <div class="about-main__right-item" v-for="(item, index) in response.data.detail" :key="index">
                        <div class="about-main__right-item-icon">  <img :src="item.icon" :alt="item.title" class="about-main__right-item-icon-img"></div>
                        <div class="about-main__right-item-title">
                            <div class="about-main__right-item-title-text" v-html="t(`about.detail[${index}].title`) "></div>
                            <div class="about-main__right-item-title-description" v-html="t(`about.detail[${index}].desc`)"></div>
                        </div>
                          
                       
                    </div>

                </div>
            </div>
        
        </div>    
                <div class="about-main__right mb">
                   <div class="about-main__right-item" v-for="(item, index) in response.data.detail" :key="index">
                        <div class="about-main__right-item-icon">  <img :src="item.icon" :alt="item.title" class="about-main__right-item-icon-img"></div>
                        <div class="about-main__right-item-title">
                                                       <div class="about-main__right-item-title-description" v-html="t(`about.detail[${index}].desc`)"></div>
                        </div>
                          
                       
                    </div>

                </div>
        <div class="about-main__image">
                <div class="about-main__image-witch">
                     <img  src="/Illustrator.png" class="witch"/>
                </div>
               <div class="about-main__image-map">
                <img src="/Pin-map.png" style="position: relative;" />
                </div>
               
               

            </div>
    </section>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
console.log('Current locale:', useI18n().locale.value);
console.log('Loaded messages:', useI18n().messages.value);
console.log('Translation for about.title:', t('about.title'));
const response = {
  data:{
    title:'About Us',
    description:'Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.com!',
    info:[{
        title:"Users",
        value:"600",
        suffix:"M",
        },
        {
            title:"Games",
            value:"135",

        }],
    detail:[{
        title:'24-Hours',
        description: '24/7 access ensures operators&#39; businesses runs smoothly all year long.',
        icon:'/calendar-tick.png',
        },
        {
        title:'Design',
        description:'Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.',
        icon:'/pen-tool-2.png',
        
        },
        {
        title:'Team',
        description:'Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.',
        icon:'/people.png',
        
        },
    ]

  }
}

const aboutNumber = ref(null);
const currentNumbers = ref([0, 0]); 
const hasRun = ref([false, false]); 

const countUp = (target: number, index: number, duration = 1500) => {
  const steps = Math.ceil(duration / 16); 
  let currentCount = 0;
  let progress = 0;

  const animate = () => {
    if (progress < 1) {
      progress += 1 / steps;
      currentCount = Math.floor(target * progress);
      currentNumbers.value[index] = currentCount;
      requestAnimationFrame(animate);
    } else {
      currentNumbers.value[index] = target; 
    }
  };

  animate();
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         
          [600, 135].forEach((target, index) => {
            if (!hasRun.value[index]) {
              countUp(target, index);
              hasRun.value[index] = true;
            }
          });
        }
      });
    },
    { threshold: 0.5 } 
  );

  if (aboutNumber.value) {
    observer.observe(aboutNumber.value);
  }
});

</script>
<style scoped lang="scss">
  @import "@/assets/scss/components/about.scss";

</style>