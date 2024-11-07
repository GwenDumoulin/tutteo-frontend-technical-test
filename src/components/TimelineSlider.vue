<template>
  <div :class="$style.timelineSlider">
    <input
      type="range"
      :value="audioState.currentTime"
      @input="onSeek"
      :min="0"
      :max="audioState.duration"
    />
    <div :class="$style.progressContainer">
      <span :class="$style.currentTime">{{
        formatTime(audioState.currentTime)
      }}</span>
      <span :class="$style.totalTime">{{
        formatTime(audioState.duration)
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { AudioState } from '../stores/useAudioStore';

export default defineComponent({
  name: 'TimelineSlider',
  setup() {
    const audioState = inject<AudioState>('audioState');
    const seek = inject<(time: number) => void>('seek');

    if (!audioState || !seek) {
      throw new Error('Audio store is not properly injected');
    }

    const onSeek = (event: Event) => {
      const time = (event.target as HTMLInputElement).valueAsNumber;
      seek(time);
    };

    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return { audioState, onSeek, formatTime };
  },
});
</script>

<style module scoped>
.timelineSlider input {
  width: 100%;
  margin-top: 10px;
  accent-color: #6b39f4;
  cursor: pointer;
}

.progressContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.currentTime,
.totalTime {
  font-size: 12px;
  color: #aaa;
}

.currentTime {
  margin-left: 5px;
}
</style>
