<!-- OurGames.vue -->
<template>
  <section class="our-games">
    <div class="container-list">
      <div class="our-games__title section-title" v-html="t('our-games.title')"></div>
      <div class="our-games__description text-p1" v-html="t('our-games.desc')"></div>

      <div class="list-container">
              <div class="our-games_list"
      v-for="(chunks, index) in chunkedItems"
      :key="index"
      >
        <div class="our-games__col"
        v-for="(chunk, index) in chunks"
        :key="index"
        >
          <div class="our-games__grids">
            <div 
              v-for="(item, index) in chunk" 
              :key="item.id"
              class="our-games__item"
              :class="{ 
                'column-2': (index % 4 === 1), 
                'column-4': (index % 4 === 3)
              }"
            >
              <CustomItem :item="item" />
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref } from 'vue';
interface Item {
  id: number;
  image: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
};
interface ResponseData {
  status: number;
  data: {
    title: string;
    description: string;
    list_games: Item[];
  };
}
const response = ref<ResponseData>({
  status: 200,
  data: {
    title: 'Our Games',
    description: '<p>As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.</p>',
    list_games: [
      {
        id: 1,
        image: {
          url: '/Bitmap.png',
          alt: 'E-Space',
        },
        title: 'E-Space1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: {
          url: '/printest.png',
          alt: 'Pirates',
        },
        title: 'Pirates',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: {
          url: '/magin-tree.png',
          alt: 'Magic Tree',
        },
        title: 'Magic Tree',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: {
          url: '/kingland.png',
          alt: 'Kingland',
        },
        title: 'Kingland2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 5,
        image: {
          url: '/witch.png',
          alt: 'Witch',
        },
        title: 'Witch Party',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 6,
        image: {
          url: '/abori.png',
          alt: 'Abori',
        },
        title: 'Aborigines',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 7,
        image: {
          url: '/kingland.png',
          alt: 'Kingland',
        },
        title: 'Kingland3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 8,
        image: {
          url: '/witch.png',
          alt: 'Witch',
        },
        title: 'Witch Party',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 9,
        image: {
          url: '/abori.png',
          alt: 'Abori',
        },
        title: 'Aborigines',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 10,
        image: {
          url: '/kingland.png',
          alt: 'Kingland4',
        },
        title: 'Kingland4',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 11,
        image: {
          url: '/witch.png',
          alt: 'Witch',
        },
        title: 'Witch Party',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 12,
        image: {
          url: '/abori.png',
          alt: 'Abori',
        },
        title: 'Aborigines',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  }
});
const chunkedItems = computed(() => {
  const chunkSize = 3;
  const groupSize = 2;
  const listGames = response.value.data.list_games;
  const result = [];

  for (let i = 0; i < listGames.length; i += chunkSize * groupSize) {
    const group = [];
    for (let j = 0; j < groupSize; j++) {
      const start = i + j * chunkSize;
      const end = start + chunkSize;
      if (start < listGames.length) {
        group.push(listGames.slice(start, end));
      }
    }
    result.push(group);
  }

  console.log(result);
  return result;
});
console.log(chunkedItems.value);
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/list-item.scss";

</style>
