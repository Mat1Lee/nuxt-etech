<template>
    <div class="test-page">
        <div class="test-page__content ">
            <ListItem />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ListItem from '~/components/ListItem.vue';
</script>