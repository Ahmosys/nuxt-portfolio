<template>
  <StunningSpotlightCard color="rgba(255, 255, 255, 0.1)">
    <div class="flex flex-col col-span-1 p-6 lg:p-5">
      <div class="overflow-hidden">
        <img
          :src="props.imageSrc"
          :alt="props.imageAlt"
          class="rounded-lg object-fit"
        />
      </div>
      <h3 class="mt-5 text-lg font-medium leading-none tracking-tight">
        {{ props.title }}
      </h3>
      <p class="mt-2 mb-3 text-sm text-muted-foreground">
        {{ props.description }}
      </p>
    </div>
  </StunningSpotlightCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}>();
</script>
