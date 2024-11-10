<template>
  <NuxtLink
    :to="certificationLink"
    class="relative p-4 overflow-hidden border cursor-pointer w-72 rounded-xl bg-card text-card-foreground transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
    target="_blank"
    rel="noopener"
    external
  >
    <div class="flex flex-row items-center gap-2">
      <NuxtImg
        :src="institutionLogo"
        class="rounded-full"
        width="32"
        height="32"
        alt="Institution Logo"
      />
      <div class="flex flex-col">
        <span class="text-sm font-medium">
          {{ certificationName }}
        </span>
        <p class="text-xs font-medium">@{{ institutionName }}</p>
        <p class="text-xs text-muted-foreground">{{ certificationDate }}</p>
      </div>
    </div>
    <blockquote class="mt-2 text-sm">
      {{ certificationDescription }}
    </blockquote>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  institutionLogo: { type: String, required: true },
  certificationName: { type: String, required: true },
  institutionName: { type: String, required: true },
  certificationDate: { type: String, required: true },
  certificationDescription: { type: String, required: false },
  certificationLink: { type: String, required: false },
});
</script>
