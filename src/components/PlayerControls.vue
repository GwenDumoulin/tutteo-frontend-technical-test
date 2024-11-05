<template>
  <div class="player-controls">
    <button @click="play" v-if="!isPlaying">Play</button>
    <button @click="pause" v-if="isPlaying">Pause</button>
    <button @click="stop">Stop</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isPlaying: Boolean,
});

const emit = defineEmits(['play', 'pause', 'stop']);

const play = () => emit('play');
const pause = () => emit('pause');
const stop = () => emit('stop');
</script>

<style scoped>
/* 
.player-controls {

}
*/
</style>
