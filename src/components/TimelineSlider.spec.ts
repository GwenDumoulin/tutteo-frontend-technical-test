import { mount } from '@vue/test-utils';
import TimelineSlider from '@/components/TimelineSlider.vue';

describe('TimelineSlider.vue', () => {
  let wrapper: any;
  const seekMock = jest.fn();

  beforeEach(() => {
    wrapper = mount(TimelineSlider, {
      global: {
        provide: {
          seek: seekMock,
          audioState: {
            currentTime: 50,
            duration: 300,
          },
        },
      },
    });
  });

  it('updates currentTime when slider value changes', async () => {
    const slider = wrapper.find('input[type="range"]');
    await slider.setValue(150);
    expect(seekMock).toHaveBeenCalledWith(150);
  });

  it('formats time correctly', () => {
    expect(wrapper.vm.formatTime(125)).toBe('2:05');
    expect(wrapper.vm.formatTime(360)).toBe('6:00');
    expect(wrapper.vm.formatTime(59)).toBe('0:59');
  });
});
