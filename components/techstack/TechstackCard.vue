<template>
  <div class="flex flex-col w-1/2 gap-3">
    <h3 class="text-base">Languages</h3>
    <div class="flex flex-wrap gap-2">
      <TechstackIcon
        v-for="(language, index) in languages"
        :key="index"
        :iconName="language.iconName"
        :tooltipText="language.tooltipText"
      />
    </div>

    <h3 class="text-base">Frameworks</h3>
    <div class="flex flex-wrap gap-2">
      <TechstackIcon
        v-for="(framework, index) in frameworks"
        :key="index"
        :iconName="framework.iconName"
        :tooltipText="framework.tooltipText"
      />
    </div>

    <h3 class="text-base">Tools</h3>
    <div class="flex flex-wrap gap-2">
      <TechstackIcon
        v-for="(tool, index) in tools"
        :key="index"
        :iconName="tool.iconName"
        :tooltipText="tool.tooltipText"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const languages = [
  { iconName: "mdi:language-python", tooltipText: "Python" },
  { iconName: "mdi:language-javascript", tooltipText: "JavaScript" },
  { iconName: "mdi:language-typescript", tooltipText: "TypeScript" },
  { iconName: "mdi:language-csharp", tooltipText: "CSharp" },
  { iconName: "mdi:language-php", tooltipText: "PHP" },
];

const frameworks = [
  { iconName: "mdi:vuejs", tooltipText: "Vue.js" },
  { iconName: "mdi:nuxt", tooltipText: "Nuxt" },
  { iconName: "mdi:symfony", tooltipText: "Symfony" },
  { iconName: "devicon-plain:dotnetcore", tooltipText: ".NET Core" },
  { iconName: "mdi:tailwind", tooltipText: "Tailwind CSS" },
];

const tools = [
  { iconName: "mdi:docker", tooltipText: "Docker" },
  { iconName: "mdi:bash", tooltipText: "Bash" },
  { iconName: "devicon-plain:githubactions", tooltipText: "GitHub Actions" },
  { iconName: "mdi:github", tooltipText: "GitHub" },
  { iconName: "mdi:gitlab", tooltipText: "GitLab" },
];
</script>

<style></style>
