import { mount } from '@vue/test-utils';
import AudioPlayer from '@/components/AudioPlayer.vue';
import { nextTick } from 'vue';

global.Audio = jest.fn().mockImplementation(() => ({
  play: jest.fn().mockResolvedValue(undefined),
  pause: jest.fn(),
  load: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe('AudioPlayer.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AudioPlayer, {
      global: {
        stubs: ['TrackInfo', 'PlayerControls', 'TimelineSlider'],
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the current track information', () => {
    const currentTrack = wrapper.vm.currentTrack;
    const title = wrapper.find('.title');
    const artist = wrapper.find('.artist');

    expect(title.text()).toBe(currentTrack.title);
    expect(artist.text()).toBe(currentTrack.artist);
  });

  it('changes the track when the next button is clicked', async () => {
    const nextButton = wrapper.find('.button i.fas.fa-step-forward');
    const initialTrack = wrapper.vm.currentTrack;

    await nextButton.trigger('click');
    await nextTick();

    expect(wrapper.vm.currentTrack).not.toBe(initialTrack);
  });

  it('changes the track when the previous button is clicked', async () => {
    const prevButton = wrapper.find('.button i.fas.fa-step-backward');
    const initialTrack = wrapper.vm.currentTrack;

    await prevButton.trigger('click');
    await nextTick();

    expect(wrapper.vm.currentTrack).not.toBe(initialTrack);
  });

  it('starts playing when play button is clicked', async () => {
    const playButton = wrapper.find('.button i.fas.fa-play');

    await playButton.trigger('click');
    await nextTick();

    expect(wrapper.vm.isPlaying).toBe(true);
  });

  it('pauses when pause button is clicked', async () => {
    const playButton = wrapper.find('.button i.fas.fa-play');
    await playButton.trigger('click');
    await nextTick();

    expect(wrapper.vm.isPlaying).toBe(true);

    const pauseButton = wrapper.find('.button i.fas.fa-pause');
    await pauseButton.trigger('click');
    await nextTick();

    expect(wrapper.vm.isPlaying).toBe(false);
  });

  it('stops playing and resets current time when stop button is clicked', async () => {
    wrapper.vm.play();
    await nextTick();

    const stopButton = wrapper.find('.button i.fas.fa-stop');
    await stopButton.trigger('click');
    await nextTick();

    expect(wrapper.vm.isPlaying).toBe(false);
    expect(wrapper.vm.currentTime).toBe(0);
  });

  it('formats time correctly', () => {
    expect(wrapper.vm.formatTime(125)).toBe('2:05');
    expect(wrapper.vm.formatTime(360)).toBe('6:00');
    expect(wrapper.vm.formatTime(59)).toBe('0:59');
  });
});
