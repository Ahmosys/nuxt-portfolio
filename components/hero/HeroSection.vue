<template>
  <PatternBackground
    :animate="true"
    :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
    :variant="PATTERN_BACKGROUND_VARIANT.Dot"
    class="flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto mt-16 text-center sm:mt-32"
    :speed="PATTERN_BACKGROUND_SPEED.Slow"
    :mask="PATTERN_BACKGROUND_MAS"
  >
    <HeroImage />
    <HeroTitle :variant="9" />
    <!-- <HeroStatus /> -->
  </PatternBackground>
</template>

<script lang="ts" setup>
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
  PATTERN_BACKGROUND_MASK,
} from "@/components/ui/pattern-background";
</script>

<style></style>
