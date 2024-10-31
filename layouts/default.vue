<template>
  <header
    class="sticky top-0 z-50 flex items-center w-full h-16 max-w-screen-lg gap-4 px-6 mx-auto md:px-20"
  >
    <Navbar />
  </header>
  <main
    class="z-50 w-full max-w-screen-lg px-6 mx-auto overflow-hidden md:px-20"
  >
    <slot />
  </main>
  <footer
    class="z-50 w-full max-w-screen-lg px-6 mx-auto bg-background md:px-20"
  >
    <Footer />
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
