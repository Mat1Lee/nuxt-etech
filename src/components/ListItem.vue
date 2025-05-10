<!-- OurGames.vue -->
<template>
  <section class="our-games">
    <div class="container-list">
      <div class="our-games__title section-title" v-html="response.data.title"></div>
      <div class="our-games__description text-p1" v-html="response.data.description"></div>
      <!-- <div class="our-games__grid">
        <div 
          v-for="(item, index) in response.data.list_games" 
          :key="item.id"
          class="our-games__item"
          :class="{ 
            'column-2': (index % 4 === 1), 
            'column-4': (index % 4 === 3)
          }"
        >
          <CustomItem :item="item" />
        </div>
      </div> -->
      <div class="list-container">
        <div class="our-games_list" v-for="(chunks, index) in chunkedItems" :key="index">
          <div class="our-games__col" v-for="(chunk, index) in chunks" :key="index">
            <div class="our-games__grids">
              <div v-for="(item, index) in chunk" :key="item.id" class="our-games__item" :class="{
                'column-2': (index % 4 === 1),
                'column-4': (index % 4 === 3)
              }">
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
import { Interface } from 'readline';
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
.container-list {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 80px;

  @media screen and (max-width: 1440px) {
    padding: 0 40px;

  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;

  }
}

.our-games {
  // padding: 40px 0;

  &__title {
    font-family: "Playfair Display";
    text-align: center;

  }

  &__description {
    text-align: center;
    margin-top: 24px;
    display: flex;
    justify-content: center;

    :deep p {
      width: 860px;
    }
  }



  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    row-gap: 40px;
    // max-width: 1200px;
    margin: 0 auto;
    margin-top: 80px;

    @media screen and (max-width: 1440px) {
      gap: 20px;

    }
  }

  &__item {
    position: relative;

    width: 100%;

  }

  @media (max-width: 1320px) {
    &__grid {
      grid-template-columns: repeat(3, 1fr);
    }


  }

  @media (max-width: 768px) {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }


  }


}

.list-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    gap: 15px;
    margin-top: 40px;
  }
}

.our-games_list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  &:nth-child(2n+2) {
    @media (max-width: 1280px) {
      margin-top: 0;
      margin-top: 40px;
    }
    @media (max-width: 768px){
      margin-top:36px;
    }
  }

  @media screen and (max-width: 1440px) {
    gap: 40px;

  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }

  .our-games__col {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: space-between;

    &:nth-child(2n+2) {
      margin-top: 40px;

      @media (max-width: 1280px) {
        margin-top: 0;
      }
    }

    @media (max-width: 768px) {
      gap: 20px;
    }
    .our-games__grids {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;
      justify-content: space-between;

      @media (max-width: 768px) {
        gap: 20px;
      }
    }
  }
}
</style>
