<template>
  <div :class="$style.audioPlayer">
    <TrackInfo :currentTrack="state.currentTrack" />
    <TimelineSlider
      :currentTime="state.currentTime"
      :duration="state.duration"
      :seek="seek"
    />
    <PlayerControls />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import TrackInfo from './TrackInfo.vue';
import PlayerControls from './PlayerControls.vue';
import TimelineSlider from './TimelineSlider.vue';
import { useAudioStore, AudioState } from '../stores/useAudioStore';

export default defineComponent({
  components: { TrackInfo, PlayerControls, TimelineSlider },
  setup() {
    const { state, play, pause, stop, next, prev, seek } = useAudioStore();

    provide('audioState', state as AudioState);
    provide('play', play);
    provide('pause', pause);
    provide('stop', stop);
    provide('next', next);
    provide('prev', prev);
    provide('seek', seek);

    return { state, seek };
  },
});
</script>

<style module>
.audioPlayer {
  background-color: #13122a;
  color: white;
  width: 100vw;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 40px 30px;
}
</style>
