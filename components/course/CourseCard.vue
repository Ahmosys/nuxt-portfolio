<template>
  <NuxtLink
    :to="certificationLink"
    class="relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
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
        <span class="text-sm font-medium dark:text-white">
          {{ certificationName }}
        </span>
        <p class="text-xs font-medium dark:text-white/40">
          @{{ institutionName }}
        </p>
        <p class="text-xs dark:text-white/40">{{ certificationDate }}</p>
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
