<template>
  <TooltipProvider>
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
</template>

<script lang="ts" setup>
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";

defineProps<{
  iconName: string;
  tooltipText: string;
}>();
</script>

<style scoped></style>
