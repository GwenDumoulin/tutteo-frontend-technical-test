<template>
  <div class="audio-player">
    <TrackInfo :track="currentTrack" />
    <PlayerControls @play="play" @pause="pause" @stop="stop" />
    <TimelineSlider
      :currentTime="currentTime"
      :duration="duration"
      @seek="seek"
    />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import TrackInfo from './TrackInfo.vue';
import PlayerControls from './PlayerControls.vue';
import TimelineSlider from './TimelineSlider.vue';

export default {
  components: { TrackInfo, PlayerControls, TimelineSlider },
  setup() {
    const audio = new Audio('/path/to/your/audio.mp3');
    const currentTime = ref(0);
    const duration = ref(0);
    const currentTrack = ref({
      title: 'Titre de la chanson',
      artist: 'Artiste',
      thumbnail: 'url/de/ton/image.jpg',
    });

    audio.addEventListener('timeupdate', () => {
      currentTime.value = audio.currentTime;
      duration.value = audio.duration;
    });

    const play = () => {
      audio.play();
    };

    const pause = () => {
      audio.pause();
    };

    const stop = () => {
      audio.pause();
      audio.currentTime = 0;
    };

    const seek = (time: number) => {
      audio.currentTime = time;
    };

    return { currentTime, duration, currentTrack, play, pause, stop, seek };
  },
};
</script>

<style scoped>
/* 
.audio-player {
  
}
*/
</style>
