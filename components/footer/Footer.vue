<template>
  <footer class="border-t w-full py-6">
    <div
      class="mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <nav class="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          class="hover:text-foreground transition-colors"
          :to="link.to"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>
      <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <a
          v-for="social in socialLinks"
          :key="social.href"
          class="hover:text-foreground transition-colors flex items-center gap-1 group"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ social.text }}
          <Icon
            name="lucide:arrow-up-right"
            class="transition-transform duration-500 ease-in-out group-hover:-translate-y-1"
          />
        </a>
      </div>
    </div>
    <p class="mt-5 text-sm">
      © 2024 ahmosys - Built with
      <Icon name="lucide:heart" class="text-red-600"></Icon> and a keyboard.
    </p>
  </footer>
</template>

<script lang="ts" setup>
// Définir les liens de navigation
const navLinks = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Projects", to: "/projects" },
  { text: "Blog", to: "/blog" },
  { text: "Contact", to: "/contact" },
];

// Définir les liens sociaux
const socialLinks = [
  { text: "Github", href: "https://github.com/ahmosys" },
  { text: "LinkedIn", href: "https://www.linkedin.com/in/ahmosys" },
  { text: "X", href: "https://twitter.com/ahmosys" },
  { text: "Buy me a coffee", href: "https://buymeacoffee.com/ahmosys" },
];
</script>

<style scoped></style>
