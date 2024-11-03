<template>
  <div class="flex flex-col w-1/2 gap-3">
    <h3 class="text-base">Languages</h3>
    <div class="flex flex-wrap gap-2">
      <TechstackIcon
        v-for="(language, index) in languagesDevIcons"
        :key="index"
        :iconName="language.iconName"
        :tooltipText="language.tooltipText"
      />
    </div>

    <h3 class="text-base">Frameworks</h3>
    <div class="flex flex-wrap gap-2">
      <TechstackIcon
        v-for="(framework, index) in frameworksDevIcons"
        :key="index"
        :iconName="framework.iconName"
        :tooltipText="framework.tooltipText"
      />
    </div>

    <h3 class="text-base">Tools</h3>
    <div class="flex flex-wrap gap-2">
      <TechstackIcon
        v-for="(tool, index) in toolsDevIcons"
        :key="index"
        :iconName="tool.iconName"
        :tooltipText="tool.tooltipText"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
