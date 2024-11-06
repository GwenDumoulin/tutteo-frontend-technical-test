<template>
  <div class="audio-player">
    <TrackInfo :track="currentTrack" />
    <PlayerControls
      :isPlaying="isPlaying"
      @play="play"
      @pause="pause"
      @stop="stop"
      @next="next"
      @prev="prev"
    />
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

const tracks = [
  {
    title: 'AMALGAM',
    artist: 'Rockot',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/06/17/18-00-00-760_200x200.jpg',
    audioUrl: new URL('../assets/amalgam-217007.mp3', import.meta.url).href,
  },
  {
    title: 'Flow',
    artist: 'Loksii',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/05/24/15-24-57-666_200x200.png',
    audioUrl: new URL('../assets/flow-211881.mp3', import.meta.url).href,
  },
  {
    title: 'Creative Technology Showreel',
    artist: 'Pumpupthemind',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/09/17/10-46-15-772_200x200.png',
    audioUrl: new URL(
      '../assets/creative-technology-showreel-241274.mp3',
      import.meta.url
    ).href,
  },
  {
    title: 'In Slow Motion (Inspiring Ambient Lounge)',
    artist: 'soundbay',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/06/25/10-06-34-296_200x200.jpg',
    audioUrl: new URL(
      '../assets/in-slow-motion-inspiring-ambient-lounge-219592.mp3',
      import.meta.url
    ).href,
  },
  {
    title: 'Lazy Day - Stylish Futuristic Chill',
    artist: 'penguinmusic',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/09/09/18-40-47-52_200x200.png',
    audioUrl: new URL(
      '../assets/lazy-day-stylish-futuristic-chill-239287.mp3',
      import.meta.url
    ).href,
  },
  {
    title: 'Night Detective',
    artist: 'Amaksi',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/08/19/01-12-14-352_200x200.jpg',
    audioUrl: new URL('../assets/night-detective-226857.mp3', import.meta.url)
      .href,
  },
  {
    title: 'Nightfall / Future Bass Music',
    artist: 'SoulProdMusic',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/07/30/00-45-40-450_200x200.jpg',
    audioUrl: new URL(
      '../assets/nightfall-future-bass-music-228100.mp3',
      import.meta.url
    ).href,
  },
  {
    title: 'No Place To Go',
    artist: 'SergePavkinMusic',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/06/13/07-16-52-755_200x200.jpg',
    audioUrl: new URL('../assets/no-place-to-go-216744.mp3', import.meta.url)
      .href,
  },
  {
    title: 'Soulsweeper',
    artist: 'ItsWatR',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/10/18/19-17-44-643_200x200.png',
    audioUrl: new URL('../assets/soulsweeper-252499.mp3', import.meta.url).href,
  },
];

export default {
  components: { TrackInfo, PlayerControls, TimelineSlider },
  setup() {
    const currentTrackIndex = ref(0);
    const currentTrack = ref(tracks[currentTrackIndex.value]);
    const audio = new Audio(currentTrack.value.audioUrl);
    const currentTime = ref(0);
    const duration = ref(0);
    const isPlaying = ref(false);

    audio.addEventListener('timeupdate', () => {
      currentTime.value = audio.currentTime;
      duration.value = audio.duration;
    });

    const play = () => {
      audio
        .play()
        .then(() => {
          isPlaying.value = true;
        })
        .catch((error) => {
          console.error('Error playing audio:', error);
        });
    };

    const stop = () => {
      audio.pause();
      audio.currentTime = 0;
      isPlaying.value = false;
    };

    const pause = () => {
      audio.pause();
      isPlaying.value = false;
    };

    const seek = (time: number) => {
      audio.currentTime = time;
    };

    const next = () => {
      currentTrackIndex.value = (currentTrackIndex.value + 1) % tracks.length;
      currentTrack.value = tracks[currentTrackIndex.value];
      audio.src = currentTrack.value.audioUrl;
      audio.play();
      isPlaying.value = true;
    };

    const prev = () => {
      currentTrackIndex.value =
        (currentTrackIndex.value - 1 + tracks.length) % tracks.length;
      currentTrack.value = tracks[currentTrackIndex.value];
      audio.src = currentTrack.value.audioUrl;
      audio.play();
      isPlaying.value = true;
    };

    audio.addEventListener('ended', next);

    return {
      currentTime,
      duration,
      currentTrack,
      play,
      pause,
      stop,
      next,
      prev,
      isPlaying,
      seek,
    };
  },
};
</script>
