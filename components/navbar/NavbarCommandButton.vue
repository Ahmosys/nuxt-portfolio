<template>
  <div>
    <Button variant="ghost" size="icon" @click="handleOpenChange">
      <Icon name="lucide:command" class="h-[1.2rem] w-[1.2rem]" />
    </Button>
    <CommandDialog :open="open" @update:open="handleOpenChange">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <!-- <CommandGroup heading="Pages">
          <CommandItem value="home">
            <Icon name="lucide:house" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>Home</span>
          </CommandItem>
          <CommandItem value="about">
            <Icon name="lucide:user" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>About</span>
          </CommandItem>
          <CommandItem value="projects">
            <Icon name="lucide:code-xml" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem value="blog">
            <Icon
              name="lucide:gallery-vertical-end"
              class="mr-2 h-[1.2rem] w-[1.2rem]"
            />
            <span>Blog</span>
          </CommandItem>
          <CommandItem value="contact">
            <Icon
              name="lucide:message-circle"
              class="mr-2 h-[1.2rem] w-[1.2rem]"
            />
            <span>Contact</span>
          </CommandItem>
        </CommandGroup> -->
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem value="resume">
            <Icon name="lucide:printer" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>Print resume</span>
          </CommandItem>
          <CommandItem value="toggle-theme">
            <Icon name="lucide:moon" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>Toggle theme</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Socials">
          <CommandItem value="linkedin">
            <Icon name="lucide:linkedin" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>Visit LinkedIn</span>
          </CommandItem>
          <CommandItem value="x">
            <Icon name="lucide:twitter" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>Visit X</span>
          </CommandItem>
          <CommandItem value="github">
            <Icon name="lucide:github" class="mr-2 h-[1.2rem] w-[1.2rem]" />
            <span>Visit GitHub</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>

<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";

import { ref, watch } from "vue";

const open = ref(false);

const keys = useMagicKeys();
const CmdK = keys["Cmd+K"];

function handleOpenChange() {
  open.value = !open.value;
}

watch(CmdK, (v) => {
  if (v) handleOpenChange();
});
</script>
