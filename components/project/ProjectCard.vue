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
      <div class="flex flex-wrap gap-2 mt-2">
        <Badge
          v-for="(tech, index) in props.technos"
          :key="index"
          variant="secondary"
        >
          {{ tech }}
        </Badge>
      </div>
      <p class="mt-2 mb-3 text-sm text-muted-foreground">
        {{ props.description }}
      </p>

      <div class="flex items-center justify-between mt-auto">
        <a href="#" class="text-sm font-medium text-foreground">
          View Project
        </a>
        <div class="flex items-center gap-2">
          <a href="#" class="text-sm font-medium text-foreground">
            <span class="mr-1">Source</span>
          </a>
          <a href="#" class="text-sm font-medium text-foreground">Live</a>
        </div>
      </div>
    </div>
  </StunningSpotlightCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  technos: string[];
}>();
</script>
