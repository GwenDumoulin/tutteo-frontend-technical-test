import { config } from '@vue/test-utils';
import { createApp } from 'vue';

config.global = {
  ...config.global,
  Vue: createApp({}),
};
