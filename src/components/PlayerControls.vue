<template>
  <div class="player-controls">
    <button @click="$emit('play')">Play</button>
    <button @click="$emit('pause')">Pause</button>
    <button @click="$emit('stop')">Stop</button>
    <button @click="$emit('next')">Next</button>
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
};
</script>

<style scoped></style>
