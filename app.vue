<template>
  <div class="font-inter">
    <NuxtLayout>
      <Lenis root>
        <NuxtPage />
      </Lenis>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "ahmosys.dev - Software Engineer",
  ogTitle: "ahmosys.dev - Software Engineer",
  description: "ahmosys.dev - Software Engineer",
  ogDescription: "ahmosys.dev - Software Engineer",
  ogImage: "/seo/seo-banner.png",
  ogUrl: "https://ahmosys.dev.vercel.app",
  twitterCard: "/seo/seo-banner.png",
  twitterTitle: "ahmosys.dev",
  twitterDescription: "ahmosys.dev - Software Engineer",
  twitterImage: "/seo/seo-banner.png",
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/jpg",
      href: "/images/hero-pfps.jpg",
    },
  ],
});
</script>
