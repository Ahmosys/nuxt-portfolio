<template>
  <CommonContainerWrapper>
    <h2
      class="text-3xl font-semibold leading-none tracking-tight md:text-2xl lg:text-2xl"
    >
      work with
    </h2>
    <p class="mb-10 text-muted-foreground">
      Some of the technologies I work with.
    </p>
    <div class="flex flex-col items-center md:flex-row">
      <div class="flex flex-col w-full gap-3 md:w-1/2">
        <TechstackIconList title="Languages" :items="languagesDevIcons" />
        <TechstackIconList title="Frameworks" :items="frameworksDevIcons" />
        <TechstackIconList title="Tools" :items="toolsDevIcons" />
      </div>
      <TechstackOrbit class="hidden md:block" />
    </div>
  </CommonContainerWrapper>
</template>

<script lang="ts" setup>
import {
  languagesDevIcons,
  frameworksDevIcons,
  toolsDevIcons,
} from "@/utils/techstackData";
</script>

<style scoped></style>
