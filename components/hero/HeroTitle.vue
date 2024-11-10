<template>
  <h1 class="max-w-4xl text-3xl font-bold md:text-4xl lg:text-5xl">
    Hi there! I'm
    <span
      class="text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500"
      >Ahmosys</span
    >
    a software engineer creating modern web apps.
  </h1>
  <p class="my-5 max-w-prose text-muted-foreground sm:text-lg">
    {{ currentSubtitleSentence }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: number;
}>();

const subtitleSentences = [
  "A software engineer based in France. Passionate about crafting seamless user experiences, I transform ideas into innovative digital solutions.",
  "A software engineer based in France. With a focus on performance and accessibility, I strive to build applications that empower users.",
  "A software engineer based in France. Driven by curiosity and a love for learning, I constantly explore new technologies to elevate my work.",
  "A software engineer based in France. From concept to deployment, I thrive on turning complex problems into elegant, user-friendly solutions.",
  "A software engineer based in France. My mission is to bridge the gap between design and technology, creating impactful web experiences.",
  "A software engineer based in France. As a lifelong learner, I'm always seeking new challenges to enhance my skills and deliver exceptional results.",
  "A software engineer based in France. I believe in the power of collaboration and value the insights that diverse perspectives bring to every project.",
  "A software engineer based in France. Whether it's a small startup or a large enterprise, I'm dedicated to making technology accessible for all.",
  "At 22, I’m a software engineer based in France, fueled by curiosity and a passion for learning. I constantly explore new technologies to enhance and perfect my work.",
];

const currentSubtitleSentence =
  subtitleSentences[props.variant - 1] || subtitleSentences[0];
</script>
