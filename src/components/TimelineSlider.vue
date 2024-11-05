<template>
  <div class="timeline-slider">
    <input
      type="range"
      min="0"
      :max="duration"
      v-model="currentTime"
      @input="onSeek"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    currentTime: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  emits: ['seek'],
  setup(props, { emit }) {
    const onSeek = () => {
      emit('seek', props.currentTime);
    };

    return { onSeek };
  },
});
</script>

<style scoped>
/* Style pour le slider */
</style>
