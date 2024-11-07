import amalgam from '../assets/amalgam-217007.mp3';
import flow from '../assets/flow-211881.mp3';
import creativeTechnologyShowreel from '../assets/creative-technology-showreel-241274.mp3';
import inSlowMotion from '../assets/in-slow-motion-inspiring-ambient-lounge-219592.mp3';
import lazyDay from '../assets/lazy-day-stylish-futuristic-chill-239287.mp3';
import nightDetective from '../assets/night-detective-226857.mp3';
import nightfall from '../assets/nightfall-future-bass-music-228100.mp3';
import noPlaceToGo from '../assets/no-place-to-go-216744.mp3';
import soulsweeper from '../assets/soulsweeper-252499.mp3';

export interface Track {
  title: string;
  artist: string;
  thumbnail: string;
  audioUrl: string;
}

export const tracks: Track[] = [
  {
    title: 'AMALGAM',
    artist: 'Rockot',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/06/17/18-00-00-760_200x200.jpg',
    audioUrl: amalgam,
  },
  {
    title: 'Flow',
    artist: 'Loksii',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/05/24/15-24-57-666_200x200.png',
    audioUrl: flow,
  },
  {
    title: 'Creative Technology Showreel',
    artist: 'Pumpupthemind',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/09/17/10-46-15-772_200x200.png',
    audioUrl: creativeTechnologyShowreel,
  },
  {
    title: 'In Slow Motion (Inspiring Ambient Lounge)',
    artist: 'soundbay',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/06/25/10-06-34-296_200x200.jpg',
    audioUrl: inSlowMotion,
  },
  {
    title: 'Lazy Day - Stylish Futuristic Chill',
    artist: 'penguinmusic',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/09/09/18-40-47-52_200x200.png',
    audioUrl: lazyDay,
  },
  {
    title: 'Night Detective',
    artist: 'Amaksi',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/08/19/01-12-14-352_200x200.png',
    audioUrl: nightDetective,
  },
  {
    title: 'Nightfall / Future Bass Music',
    artist: 'SoulProdMusic',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/07/30/00-45-40-450_200x200.jpg',
    audioUrl: nightfall,
  },
  {
    title: 'No Place To Go',
    artist: 'SergePavkinMusic',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/06/13/07-16-52-755_200x200.jpg',
    audioUrl: noPlaceToGo,
  },
  {
    title: 'Soulsweeper',
    artist: 'ItsWatR',
    thumbnail:
      'https://cdn.pixabay.com/audio/2024/10/18/19-17-44-643_200x200.png',
    audioUrl: soulsweeper,
  },
];
