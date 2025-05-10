
<template>
    <header :class="['header', { 'header-scrolled': isScrolled }]">
      <div class="container">
        <nav class="nav">
          <!-- Logo -->
          <div class="nav__logo">
            <NuxtLink 
              v-if="currentPath === '/'" 
              to="/" 
              @click.prevent="scrollToTop"
            >
              <img src="/White_logo.png" alt="4TECH VIETNAM"/>
            </NuxtLink>
            <NuxtLink v-else to="/">
              <img src="/White_logo.png" alt="4TECH VIETNAM"/>
            </NuxtLink>
          </div>
         
          <!-- Desktop Navigation -->
          <div class="nav__menus">
            <div class="nav__menu">
              <NuxtLink 
              v-for="item in menuItems" 
              :key="item.name"
              :to="item.children ? '#' : item.path"
              class="nav__link"
              :class="{
                'has-dropdown': item.children,
                'active': currentPath.includes(item.path.replace(/^\/+|\/+$/g, ''))
              }"
             
            >
            <span v-html="item.name"></span>
             
           
            </NuxtLink>     
            <div class="header-cta">
             <div class="header-cta__dropdown"
             @click="openDropdown"
             >
              <img :src="imgFlag" alt="Flag" class="header-cta__icon" />
              <img src="/arrow-drop-down.png" alt="Arrow" class="header-cta__arrow" />
              <div class="header-cta__dropdown-content">
                <div class="header-cta__dropdown-item" @click="clickFlag('vn')">
                  <img src="/tick-1.png" alt="Flag" class="header-cta__tick"
                  :class="{ 'show': imgFlag === '/VN.png' }"
                  />
                  <img src="/VN.png" alt="Flag" class="header-cta__icon" />
                  <span>Vietnam</span>
                </div>
                <div class="header-cta__dropdown-item"  @click="clickFlag('us')">
                  <img src="/tick-1.png" alt="Flag" class="header-cta__tick" 
                  :class="{ 'show': imgFlag === '/US.png' }"
                  />
                  <img src="/US.png" alt="Flag" class="header-cta__icon" />
                  <span>United States</span>
                </div>
              </div>
              </div>
            
             
            </div>   
            </div>

          </div>
          <button 
            @click="toggleMobileMenu"
            class="nav__mobile-toggle"
            aria-label="Menu"
          >
            <span :class="['hamburger', { 'is-open': isMobileMenuOpen }]"></span>
          </button>
        </nav>
      </div>
           <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
          <div class="mobile-menu__content">
            <div class="mobile-menu__top">
                          <div class="header-cta">
             <div class="header-cta__dropdown"
             @click="openDropdown"
             >
              <img :src="imgFlag" alt="Flag" class="header-cta__icon" />
              <img src="/arrow-drop-down-bl.png" alt="Arrow" class="header-cta__arrow" />
              <div class="header-cta__dropdown-content">
                <div class="header-cta__dropdown-item" @click="clickFlag('vn')">
                  <img src="/tick-1.png" alt="Flag" class="header-cta__tick"
                  :class="{ 'show': imgFlag === '/VN.png' }"
                  />
                  <img src="/VN.png" alt="Flag" class="header-cta__icon" />
                  <span>Vietnam</span>
                </div>
                <div class="header-cta__dropdown-item"  @click="clickFlag('us')">
                  <img src="/tick-1.png" alt="Flag" class="header-cta__tick" 
                  :class="{ 'show': imgFlag === '/US.png' }"
                  />
                  <img src="/US.png" alt="Flag" class="header-cta__icon" />
                  <span>United States</span>
                </div>
              </div>
              </div>
            
             
            </div>   
             <button 
            @click="toggleMobileMenu"
            class="nav__mobile-toggle"
            aria-label="Menu"
          >
            <span :class="['hamburger', { 'is-open': isMobileMenuOpen }]"></span>
          </button>
              </div>
            <div
              v-for="item in menuItems"
              :key="item.name"
              class="mobile-menu__item"
              :class="{
                  
                  'active': currentPath.includes(item.path.replace(/^\/+|\/+$/g, ''))
                }"
            >
              <NuxtLink
                :to="item.children ? '#' : item.path"
                @click="handleItemClick(item, $event)"
              
            
                class="flex items-center gap-2"
              >
                <span    @click="toggleMobileMenu" v-html="item.name"></span>
              
              </NuxtLink>
      
            </div>

          </div>
    </div>
    </header>
</template>
  
<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRuntimeConfig, useNuxtApp, useAsyncData } from '#app';

interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
}

interface HeaderMenuItem {
  id: number;
  title: string;
  url: string;
  type: string;
  classes: string[];
  children?: Record<string, HeaderMenuItem>;
}

interface DataHeader {
  [key: string]: HeaderMenuItem;
}



interface ApiResponse<T> {
  success: boolean;
  data: T;
}
import { useI18n } from 'vue-i18n';
const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const imgFlag = ref('/US.png');
const currentPath = computed(() => route.path);
const menuItems = ref<MenuItem[]>([]);
const dataHeader = ref<DataHeader>({});

const openDropdowns = ref<Record<string, boolean>>({});
const  { locale,t } = useI18n();

const clickFlag = (flag: string) => {
  imgFlag.value = flag === 'vn' ? '/VN.png' : '/US.png';
  locale.value = flag === 'vn' ? 'vi' : 'en'; 
  console.log(locale.value);
};
const handleItemClick = (item: MenuItem, event: Event) => {
  if (item.children) {
    event.preventDefault();
    openDropdowns.value[item.name] = !openDropdowns.value[item.name];
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const openDropdown = (event: MouseEvent) => {
  const dropdown = (event.target as HTMLElement).closest('.header-cta__dropdown')?.querySelector('.header-cta__dropdown-content') as HTMLElement;
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
};
const formatMenuData = (data: DataHeader): MenuItem[] => {
  return Object.values(data).map((item) => ({
    name: t(`header.${item.title.toLowerCase().replace(/\s+/g, '')}`),
    path: item.url,
    children: item.children
      ? Object.values(item.children).map((child) => ({
          name: t(`header.${child.title.toLowerCase().replace(/\s+/g, '')}`), 
          path: child.url,
        }))
      : undefined,
  }));
};

const fetchHeaderMenu = async () => {
  try {
    const data ={
  "success": true,
  "data": {
    "1": {
      "id": 427,
      "title": "About Us",
      "url": "/about-us/",
      "type": "post_type",
      "menu_order": 1,
      "classes": []
    },
    "2": {
      "id": 441,
      "title": "GAMEs",
      "url": "/games/",
      "type": "post_type",
      "menu_order": 2,
      "classes": []
    },
    "3": {
      "id": 443,
      "title": "Partners",
      "url": "/partners/",
      "type": "post_type",
      "menu_order": 3,
      "classes": []
    },
    "4": {
      "id": 442,
      "title": "Contact Us",
      "url": "/contact-us/",
      "type": "post_type",
      "menu_order": 4,
      "classes": []
    }
  }
}
    
    dataHeader.value = data.data;
    menuItems.value = formatMenuData(data.data);
  
  }catch(e){
    console.log(e)
  }
};

  fetchHeaderMenu();
  
  const handleClickOutside = (event: MouseEvent) => {
  const dropdown = document.querySelector('.header-cta__dropdown') as HTMLElement;
  if (dropdown && !dropdown.contains(event.target as Node)) {
    const dropdowns = document.querySelector('.header-cta__dropdown-content') as HTMLElement;
    dropdowns.classList.remove('show');
  }
};
onMounted(() => {
  imgFlag.value = useI18n().locale.value === 'vi' ? '/VN.png' : '/US.png';
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const toggleMobileMenu = () => {
  console.log('toggleMobileMenu');
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/components/header.scss" as *;
</style>
