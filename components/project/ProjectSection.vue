<template>
  <CommonContainerWrapper>
    <h2
      class="text-3xl font-semibold leading-none tracking-tight md:text-2xl lg:text-2xl"
    >
      featured projects
    </h2>
    <p class="mb-10 text-muted-foreground">Recent projects I want to share.</p>
    <div class="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 sm:gap-4">
      <ProjectCard
        title="Daily Scrum Picker"
        description="Daily Scrum Picker is a tool that helps Scrum Masters to randomly select team members for the daily stand-up meeting."
        image-src="https://github.com/Ahmosys/daily-scrum-picker/raw/main/docs/images/readme-presentation.png"
        image-alt="Daily Scrum Picker"
      />
      <ProjectCard
        title="Nordpapers"
        description="Nordpapers is your ultimate destination for a curated collection of wallpapers inspired by the soothing Nord color palettes."
        image-src="https://github.com/Ahmosys/nordpapers/raw/main/docs/images/readme-presentation.png"
        image-alt="Nordpapers"
      />
    </div>
  </CommonContainerWrapper>
</template>

<script setup lang="ts"></script>
