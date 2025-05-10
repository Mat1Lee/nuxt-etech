<template>
  <div class="custom-item">
      <img class="custom-item__image" :src="item.image.url" :alt="item.image.alt" />
      <div class="custom-item__overlay">
        <div class="custom-item__title">{{ item.title }}</div>
        <div class="custom-item__desc" v-html="item.description" />
      </div>

  </div>
</template>

<script lang="ts" setup>
interface Item {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
}
const props = defineProps<{
  item: Item;
}>();

</script>

<style scoped lang="scss">
  @import "@/assets/scss/components/custom-item.scss";

</style>
