<template>
  <div :class="$style.trackInfo">
    <img
      :src="audioState.currentTrack.thumbnail"
      alt="Thumbnail"
      :class="$style.thumbnail"
    />
    <div :class="$style.containerInfo">
      <div :class="$style.title">{{ audioState.currentTrack.title }}</div>
      <div :class="$style.artist">{{ audioState.currentTrack.artist }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { AudioState } from '../stores/useAudioStore';

export default defineComponent({
  name: 'TrackInfo',
  setup() {
    const audioState = inject<AudioState>('audioState');
    if (!audioState) {
      throw new Error('Audio store is not properly injected');
    }

    return { audioState };
  },
});
</script>

<style module>
.trackInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
}

.thumbnail {
  width: 180px;
  height: 180px;
  border-radius: 10px;
  margin: 15px;
}

.containerInfo {
  min-height: 75px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: white;
}

.artist {
  font-size: 14px;
  color: #aaa;
}
</style>
