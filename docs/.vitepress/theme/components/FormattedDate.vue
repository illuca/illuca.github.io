<template>
    <div class="formatted-date">
      <time :datetime="date">{{ formattedDate }}</time>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    date: {
      type: String,
      required: true,
    },
  });
  
  const formattedDate = computed(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(props.date).toLocaleDateString(undefined, options);
  });
  </script>
  
  <style scoped>
  .formatted-date {
    text-align: center;
    color: gray;
    font-size: 0.9em;
  }
  </style>