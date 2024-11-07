import { shallowMount } from '@vue/test-utils';
import PlayerControls from '@/components/PlayerControls.vue';

describe('PlayerControls.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(PlayerControls, {
      propsData: {
        isPlaying: false,
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('emits "prev" event when prev button is clicked', async () => {
    const prevButton = wrapper.find('button:nth-child(1)');
    await prevButton.trigger('click');
    expect(wrapper.emitted().prev).toBeTruthy();
  });

  it('emits "play" event when play button is clicked', async () => {
    const playButton = wrapper.find('button:nth-child(2)');
    await playButton.trigger('click');
    expect(wrapper.emitted().play).toBeTruthy();
  });

  it('emits "pause" event when pause button is clicked', async () => {
    await wrapper.setProps({ isPlaying: true });

    const pauseButton = wrapper.find('button:nth-child(2)');
    await pauseButton.trigger('click');
    expect(wrapper.emitted().pause).toBeTruthy();
  });

  it('emits "stop" event when stop button is clicked', async () => {
    const stopButton = wrapper.find('button:nth-child(3)');
    await stopButton.trigger('click');
    expect(wrapper.emitted().stop).toBeTruthy();
  });

  it('emits "next" event when next button is clicked', async () => {
    const nextButton = wrapper.find('button:nth-child(4)');
    await nextButton.trigger('click');
    expect(wrapper.emitted().next).toBeTruthy();
  });
});
