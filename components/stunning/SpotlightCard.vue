<template>
  <div ref="spotlightCardRef">
    <div
      :style="{
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--spotlight-color-stops': `${color}, transparent`,
        '--spotlight-size': `${size}px`,
      }"
      class="h-full spotlight-card before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 relative transform-gpu overflow-hidden rounded-2xl border border-neutral-950/10 dark:border-white/10 bg-card shadow-sm"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UseMouseEventExtractor } from "@vueuse/core";
import { useMouse } from "@vueuse/core";

withDefaults(
  defineProps<{
    color: string;
    size?: number;
  }>(),
  {
    color: "rgba(255, 255, 255, 0.1)",
    size: 300,
  }
);

const spotlightCardRef = ref<HTMLElement | null>(null);
// const parentEl = useParentElement()
const extractor: UseMouseEventExtractor = (event) =>
  event instanceof Touch ? null : [event.offsetX, event.offsetY];
const { x, y } = useMouse({ target: spotlightCardRef, type: extractor });
</script>

<style scoped>
.spotlight-card:before {
  opacity: 0;
  transition: opacity 0.3s;
  background-image: radial-gradient(
    var(--spotlight-size) circle at var(--x) var(--y),
    var(--spotlight-color-stops)
  );
}
.spotlight-card:hover:before {
  opacity: 1;
  transition: opacity 0.3s;
}
</style>
