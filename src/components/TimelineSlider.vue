<template>
  <div class="timeline-slider">
    <input
      type="range"
      min="0"
      :max="duration"
      v-model="localCurrentTime"
      @input="onSeek"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

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
    const localCurrentTime = ref(props.currentTime);

    watch(
      () => props.currentTime,
      (newCurrentTime) => {
        localCurrentTime.value = newCurrentTime;
      }
    );

    const onSeek = () => {
      emit('seek', localCurrentTime.value);
    };

    return { localCurrentTime, onSeek };
  },
});
</script>
