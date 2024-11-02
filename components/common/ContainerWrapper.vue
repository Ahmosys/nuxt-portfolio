<template>
  <div
    :class="
      cn(
        'flex flex-col w-full max-w-screen-xl mx-auto mt-16 mb-16 sm:mt-32',
        $attrs.class ?? ''
      )
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>
