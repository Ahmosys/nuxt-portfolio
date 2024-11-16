<template>
  <TooltipProvider v-if="!isMobile">
    <!-- Desktop layout with Tooltip -->
    <Tooltip>
      <TooltipTrigger as-child>
        <Card
          class="flex flex-col p-3 transition-transform duration-500 ease-in-out transform hover:rotate-6"
        >
          <Icon :name="iconName" class="h-[1.2rem] w-[3rem]" />
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <p>{{ tooltipText }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  <Card v-else class="flex flex-row items-center p-3">
    <Icon :name="iconName" class="h-[1.2rem] w-[3rem]" />
    <p class="text-sm font-medium">{{ tooltipText }}</p>
  </Card>
</template>

<script lang="ts" setup>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { useWindowSize } from "@vueuse/core";

defineProps<{
  iconName: string;
  tooltipText: string;
}>();

const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 768);
</script>

<style scoped></style>
