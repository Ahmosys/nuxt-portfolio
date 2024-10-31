<template>
  <Button variant="ghost" size="icon" @click="toggleTheme">
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
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<style></style>
