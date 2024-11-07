import { mount } from '@vue/test-utils';
import AudioPlayer from '@/components/AudioPlayer.vue';
import { useAudioStore } from '@/stores/useAudioStore';

jest.mock('@/stores/useAudioStore', () => ({
  useAudioStore: jest.fn(() => ({
    state: {
      isPlaying: false,
      currentTime: 0,
      duration: 120,
      currentTrackIndex: 0,
      currentTrack: {
        title: 'Test Track',
        artist: 'Test Artist',
        thumbnail: 'test-thumbnail.jpg',
        audioUrl: 'test-audio.mp3',
      },
      tracks: [
        {
          title: 'Test Track 1',
          artist: 'Artist 1',
          thumbnail: 'thumbnail1.jpg',
          audioUrl: 'audio1.mp3',
        },
        {
          title: 'Test Track 2',
          artist: 'Artist 2',
          thumbnail: 'thumbnail2.jpg',
          audioUrl: 'audio2.mp3',
        },
      ],
    },
    play: jest.fn(),
    pause: jest.fn(),
    stop: jest.fn(),
    next: jest.fn(),
    prev: jest.fn(),
    seek: jest.fn(),
  })),
}));

describe('AudioPlayer.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AudioPlayer);
  });

  it('renders all subcomponents', () => {
    expect(wrapper.findComponent({ name: 'TrackInfo' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'TimelineSlider' }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: 'PlayerControls' }).exists()).toBe(
      true
    );
  });
});
