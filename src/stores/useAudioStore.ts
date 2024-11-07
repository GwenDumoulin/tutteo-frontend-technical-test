import { reactive } from 'vue';
import { tracks } from '../data/tracks';

export interface AudioState {
  currentTrackIndex: number;
  currentTrack: {
    title: string;
    artist: string;
    thumbnail: string;
    audioUrl: string;
  };
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

export function useAudioStore() {
  const audio = new Audio();
  const state = reactive<AudioState>({
    currentTrackIndex: 0,
    currentTrack: tracks[0],
    isPlaying: false,
    currentTime: 0,
    duration: 0,
  });

  const loadTrack = () => {
    audio.src = state.currentTrack.audioUrl;
    audio.load();
  };

  audio.addEventListener('loadedmetadata', () => {
    state.duration = audio.duration;
  });

  audio.addEventListener('timeupdate', () => {
    state.currentTime = audio.currentTime;
  });

  const play = () => {
    audio.play();
    state.isPlaying = true;
  };

  const pause = () => {
    audio.pause();
    state.isPlaying = false;
  };

  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
    state.isPlaying = false;
  };

  const next = () => {
    state.currentTrackIndex = (state.currentTrackIndex + 1) % tracks.length;
    state.currentTrack = tracks[state.currentTrackIndex];
    loadTrack();
    play();
  };

  const prev = () => {
    state.currentTrackIndex =
      (state.currentTrackIndex - 1 + tracks.length) % tracks.length;
    state.currentTrack = tracks[state.currentTrackIndex];
    loadTrack();
    play();
  };

  const seek = (time: number) => {
    audio.currentTime = time;
    state.currentTime = time;
  };

  audio.addEventListener('ended', next);

  loadTrack();

  return { state, play, pause, stop, next, prev, seek };
}
