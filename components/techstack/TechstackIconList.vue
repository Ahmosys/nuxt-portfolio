<template>
  <div>
    <h3 class="text-base">{{ title }}</h3>
    <div class="flex flex-wrap gap-2">
      <TechstackIcon
        v-for="(item, index) in items"
        :key="index"
        :iconName="item.iconName"
        :tooltipText="item.tooltipText"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
