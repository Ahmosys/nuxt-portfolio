<template>
  <CommonContainerWrapper class="sm:mt-16">
    <div
      class="relative flex flex-col items-center justify-center px-40 pt-8 pb-40 overflow-hidden size-full md:pb-60 gradient-mask-b-60"
    >
      <span class="max-w-4xl text-3xl font-bold md:text-4xl lg:text-5xl">
        Get in touch
      </span>
      <p class="mb-5 text-muted-foreground sm:text-lg">
        Let's connect and create something amazing together.
      </p>
      <InspiraGlobe class="top-28" />
    </div>
    <Icon
      name="material-symbols-light:keyboard-double-arrow-down-rounded"
      class="w-[2rem] h-[2em] mx-auto my-4"
    />
    <div class="flex justify-center">
      <form class="w-full max-w-lg space-y-6" @submit="onSubmit">
        <!-- Name Field -->
        <FormField
          v-slot="{ componentField }"
          name="name"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Your Name"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Email Field -->
        <FormField
          v-slot="{ componentField }"
          name="email"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Your Email"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Message Field -->
        <FormField
          v-slot="{ componentField }"
          name="message"
          :validate-on-blur="!isFieldDirty"
        >
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Your Message"
                v-bind="componentField"
              ></Textarea>
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <InspiraRainbowButton type="submit" class="w-full"
            >Send message</InspiraRainbowButton
          >
        </div>
      </form>
    </div>
  </CommonContainerWrapper>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast/use-toast";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

// Validation schema for the form
const formSchema = toTypedSchema(
  z.object({
    name: z
      .string()
      .min(2, "Name is required")
      .max(50, "Name must be 50 characters or less"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters long"),
  })
);

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  toast({
    title: "Message Sent",
    description: `Thank you for your message, ${values.name}! I'll get back to you soon.`,
  });
});
</script>

<style scoped></style>
