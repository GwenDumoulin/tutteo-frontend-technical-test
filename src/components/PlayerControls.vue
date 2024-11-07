<template>
  <div :class="$style.controls">
    <button :class="[$style.button, 'prev-button']" @click="prev">
      <i class="fas fa-step-backward"></i>
    </button>
    <button
      v-if="!audioState.isPlaying"
      :class="[$style.button, 'play-button']"
      @click="play"
    >
      <i class="fas fa-play"></i>
    </button>
    <button v-else :class="[$style.button, 'pause-button']" @click="pause">
      <i class="fas fa-pause"></i>
    </button>
    <button :class="[$style.button, 'stop-button']" @click="stop">
      <i class="fas fa-stop"></i>
    </button>
    <button :class="[$style.button, 'next-button']" @click="next">
      <i class="fas fa-step-forward"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { AudioState } from '../stores/useAudioStore';

export default defineComponent({
  name: 'PlayerControls',
  setup() {
    const audioState = inject<AudioState>('audioState');
    const play = inject<() => void>('play');
    const pause = inject<() => void>('pause');
    const stop = inject<() => void>('stop');
    const next = inject<() => void>('next');
    const prev = inject<() => void>('prev');

    if (!audioState || !play || !pause || !stop || !next || !prev) {
      throw new Error('Audio store is not properly injected');
    }

    return { audioState, play, pause, stop, next, prev };
  },
});
</script>

<style module>
.controls {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button {
  background: none;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  transition: background 0.2s ease;
  border: none;
  outline: none !important;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:hover {
  background-color: #6b39f4;
}

.button i {
  font-size: 20px;
}
</style>
