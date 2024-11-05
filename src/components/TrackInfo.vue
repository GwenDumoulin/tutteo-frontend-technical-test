<template>
  <div class="track-info">
    <img :src="track.thumbnail" alt="Track Thumbnail" />
    <h3>{{ track.title }}</h3>
    <p>{{ track.artist }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  track: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
/* 
.track-info {

}
*/
</style>
