<template>
  <Button variant="ghost" size="icon" @click="toggleThemeAndPlaySound">
    <Icon
      name="lucide:moon-star"
      class="h-[1.2rem] w-[1.2rem] duration-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Icon
      name="lucide:sun"
      class="absolute h-[1.2rem] w-[1.2rem] duration-500 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script lang="ts" setup>
import { useSound } from "@vueuse/sound";

const colorMode = useColorMode();
const { play } = useSound("sounds/lamp-switch.mp3", { volume: 0.2 });

const toggleThemeAndPlaySound = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
  play();
};
</script>

<style></style>
