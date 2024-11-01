<template>
  <Container>
    <h2
      class="text-3xl font-semibold leading-none tracking-tight md:text-2xl lg:text-2xl"
    >
      01. Work with
    </h2>
    <p class="mb-10 text-muted-foreground">
      Some of the technologies I work with.
    </p>
    <div class="flex items-center">
      <TechstackCard />
      <TechstackOrbit />
    </div>
  </Container>
</template>

<script lang="ts" setup>
import Container from "@/components/common/Container.vue";
</script>

<style scoped></style>
