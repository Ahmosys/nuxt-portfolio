<template>
  <!-- Navigation Container -->
  <nav
    class="flex-col hidden w-full h-full border-b md:flex md:flex-row md:items-center md:justify-between bg-background"
  >
    <!-- Logo and Brand Name -->
    <NuxtLink class="flex items-center gap-2 font-medium" to="/">
      <p>ahmosys.dev</p>
    </NuxtLink>

    <!-- Navigation Links Container -->
    <div
      class="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6"
    >
      <!-- Looping through 'links' array to create navigation links -->
      <NuxtLink
        v-for="(link, index) in links"
        @click="play"
        :key="index"
        :to="link.to"
        :class="[
          'hover:text-foreground',
          $route.path === link.to ? 'text-foreground' : 'text-muted-foreground',
        ]"
      >
        {{ link.label }}
      </NuxtLink>

      <!-- Theme Toggle and Command Button Container -->
      <div class="flex gap-1">
        <NavbarThemeSwitcherButton />
        <NavbarCommandButton />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useSound } from "@vueuse/sound";

const { play } = useSound("sounds/minecraft-click.mp3", { volume: 0.2 });

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/projects", label: "projects" },
  { to: "/blog", label: "blog" },
  { to: "/contact", label: "contact" },
];
</script>

<style scoped></style>
