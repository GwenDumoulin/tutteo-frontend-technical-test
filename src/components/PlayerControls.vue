<template>
  <div class="player-controls">
    <button @click="$emit('prev')">Prev</button>
    <button v-if="!isPlaying" @click="$emit('play')">Play</button>
    <button v-if="isPlaying" @click="$emit('pause')">Pause</button>
    <button @click="$emit('stop')">Stop</button>
    <button @click="$emit('next')">Next</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isPlaying: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
