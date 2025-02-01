<template>
  <CommonContainerWrapper>
    <div class="flex items-center justify-between mb-10">
      <div class="flex flex-col">
        <h2
          class="text-2xl font-semibold leading-none tracking-tight md:text-2xl lg:text-2xl"
        >
          featured projects
        </h2>
        <p class="text-muted-foreground">Recent projects I want to share.</p>
      </div>
      <ProjectViewMoreButton />
    </div>

    <div class="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 sm:gap-4">
      <ProjectCard
        title="Daily Scrum Picker"
        description="Daily Scrum Picker is a tool that helps Scrum Masters to randomly select team members for the daily stand-up meeting."
        image-src="https://github.com/Ahmosys/daily-scrum-picker/raw/main/docs/images/readme-presentation.png"
        image-alt="Daily Scrum Picker"
        :technos="['Vue.js', 'Vuetify', 'TypeScript', 'Vite']"
        live-url="https://daily-scrum-picker.vercel.app/"
        source-url="https://github.com/Ahmosys/daily-scrum-picker"
      />
      <ProjectCard
        title="Nordpapers"
        description="Nordpapers is your ultimate destination for a curated collection of wallpapers inspired by the soothing Nord color palettes."
        image-src="https://github.com/Ahmosys/nordpapers/raw/main/docs/images/readme-presentation.png"
        image-alt="Nordpapers"
        :technos="['Vue.js', 'Vuetify', 'TypeScript']"
        live-url="https://nordpapers.vercel.app/"
        source-url="https://github.com/Ahmosys/nordpapers"
      />
    </div>
  </CommonContainerWrapper>
</template>

<script setup lang="ts"></script>
