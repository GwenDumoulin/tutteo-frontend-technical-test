<template>
  <div class="audio-player">
    <TrackInfo :track="track" />
    <TimelineSlider
      :currentTime="currentTime"
      :duration="duration"
      @seek="onSeek"
    />
    <PlayerControls
      :isPlaying="isPlaying"
      @play="play"
      @pause="pause"
      @stop="stop"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import TrackInfo from './TrackInfo.vue';
import TimelineSlider from './TimelineSlider.vue';
import PlayerControls from './PlayerControls.vue';

const track = {
  title: 'Titre de la musique',
  artist: "Nom de l'artiste",
  thumbnail: 'url-de-la-miniature.jpg',
  audioUrl: 'url-du-fichier-audio.mp3',
};

const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

let audio = new Audio(track.audioUrl);

const play = () => {
  audio.play();
  isPlaying.value = true;
};

const pause = () => {
  audio.pause();
  isPlaying.value = false;
};

const stop = () => {
  audio.pause();
  audio.currentTime = 0;
  isPlaying.value = false;
};

const onSeek = (time: number) => {
  audio.currentTime = time;
  currentTime.value = time;
};

const updateCurrentTime = () => {
  currentTime.value = audio.currentTime;
  if (audio.ended) {
    isPlaying.value = false;
  }
};

onMounted(() => {
  audio.addEventListener('timeupdate', updateCurrentTime);
  audio.addEventListener('loadedmetadata', () => {
    duration.value = audio.duration;
  });
});

onUnmounted(() => {
  audio.removeEventListener('timeupdate', updateCurrentTime);
});
</script>

<style scoped>
/* 
.audio-player {
  
}
*/
</style>
