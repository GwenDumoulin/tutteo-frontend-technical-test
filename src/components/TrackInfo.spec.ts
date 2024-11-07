import { mount } from '@vue/test-utils';
import TrackInfo from '@/components/TrackInfo.vue';

describe('TrackInfo.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(TrackInfo, {
      global: {
        provide: {
          audioState: {
            currentTrack: {
              title: 'Test Title',
              artist: 'Test Artist',
              thumbnail: 'test-thumbnail.jpg',
            },
          },
        },
      },
    });
  });

  it('displays the correct track title and artist', () => {
    expect(wrapper.find('.title').text()).toBe('Test Title');
    expect(wrapper.find('.artist').text()).toBe('Test Artist');
  });

  it('displays the correct track thumbnail', () => {
    expect(wrapper.find('img').attributes('src')).toBe('test-thumbnail.jpg');
  });
});
