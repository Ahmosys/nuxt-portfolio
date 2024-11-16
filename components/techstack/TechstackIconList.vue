<template>
  <div>
    <h3 class="mb-2 text-base">{{ props.title }}</h3>
    <div class="flex flex-col gap-2 md:flex-wrap md:flex-row">
      <TechstackIcon
        v-for="(item, index) in props.items"
        :key="index"
        :iconName="item.iconName"
        :tooltipText="item.tooltipText"
        class="w-full md:w-auto"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  items: Array<{
    iconName: string;
    tooltipText: string;
  }>;
}>();
</script>
