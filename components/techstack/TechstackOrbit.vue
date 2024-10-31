<template>
  <div
    class="relative flex h-[15rem] w-[25rem] overflow-hidden ml-auto [mask-image:radial-gradient(ellipse,#000_10%,transparent_75%)]"
  >
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :duration="20"
      :delay="20"
      :radius="20"
      :direction="ORBIT_DIRECTION.CounterClockwise"
      path
    >
      <Icon name="mdi:language-python" class="text-2xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :duration="20"
      :delay="20"
      :radius="60"
      :direction="ORBIT_DIRECTION.Clockwise"
      path
    >
      <Icon name="mdi:nuxt" class="text-3xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :duration="10"
      :delay="120"
      :radius="60"
      :direction="ORBIT_DIRECTION.Clockwise"
      path
    >
      <Icon name="mdi:docker" class="text-3xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :duration="20"
      :delay="10"
      :radius="100"
      :direction="ORBIT_DIRECTION.CounterClockwise"
      path
    >
      <Icon name="mdi:vuejs" class="text-4xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :duration="20"
      :delay="45"
      :radius="100"
      :direction="ORBIT_DIRECTION.CounterClockwise"
      path
    >
      <Icon name="mdi:language-csharp" class="text-4xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :duration="20"
      :delay="100"
      :radius="100"
      :direction="ORBIT_DIRECTION.CounterClockwise"
      path
    >
      <Icon name="mdi:github" class="text-4xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :radius="160"
      :duration="20"
      :direction="ORBIT_DIRECTION.Clockwise"
      path
    >
      <Icon name="mdi:tailwind" class="text-5xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :radius="160"
      :duration="20"
      :delay="200"
      :direction="ORBIT_DIRECTION.Clockwise"
      path
    >
      <Icon name="mdi:language-typescript" class="text-5xl" />
    </Orbit>
    <Orbit
      class="items-center justify-center bg-transparent border-none"
      :radius="160"
      :delay="4"
      :direction="ORBIT_DIRECTION.Clockwise"
      path
    >
      <Icon name="mdi:language-php" class="text-5xl" />
    </Orbit>
  </div>
</template>

<script lang="ts" setup>
import Orbit from "@/components/ui/orbit/Orbit.vue";
import { ORBIT_DIRECTION } from "@/components/ui/orbit";
</script>

<style></style>
