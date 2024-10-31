<template>
  <section id="course">
    ≈
    <div
      class="flex flex-col w-full max-w-screen-xl mx-auto mt-16 mb-16 sm:mt-32"
    >
      <h2
        class="text-3xl font-semibold leading-none tracking-tight md:text-3xl lg:text-3xl"
      >
        02. Certifications
      </h2>
      <p class="mb-10 text-muted-foreground">
        Certifications I have been able to obtain.
      </p>

      <div
        class="relative flex flex-col items-center justify-center w-full overflow-hidden"
      >
        <!-- First Marquee -->
        <Marquee pauseOnHover class="[--duration:20s]">
          <ReviewCard
            v-for="certification in firstRow"
            :key="certification.name"
            :img="certification.img"
            :name="certification.name"
            :username="certification.username"
            :body="certification.body"
          />
        </Marquee>

        <!-- Second Marquee (reverse) -->
        <Marquee reverse pauseOnHover class="[--duration:20s]">
          <ReviewCard
            v-for="certification in secondRow"
            :key="certification.name"
            :img="certification.img"
            :name="certification.name"
            :username="certification.username"
            :body="certification.body"
          />
        </Marquee>

        <!-- Left Gradient -->
        <div
          class="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"
        ></div>

        <!-- Right Gradient -->
        <div
          class="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ReviewCard from "@/components/techstack/ReviewCard.vue";
import Marquee from "@/components/techstack/Marquee.vue";

const certifications = [
  {
    name: "Web Development Certification",
    username: "@devweb",
    body: "This certification allowed me to master modern web development technologies.",
    img: "https://avatar.vercel.sh/devweb",
  },
  {
    name: "Python Certification",
    username: "@pythonista",
    body: "An excellent training to understand the fundamentals of Python.",
    img: "https://avatar.vercel.sh/pythonista",
  },
  {
    name: "Machine Learning Certification",
    username: "@mlguy",
    body: "I gained valuable skills in machine learning through this certification.",
    img: "https://avatar.vercel.sh/mlguy",
  },
  {
    name: "Cybersecurity Certification",
    username: "@infosec",
    body: "A comprehensive training on information systems security.",
    img: "https://avatar.vercel.sh/infosec",
  },
  {
    name: "UX/UI Design Certification",
    username: "@uxui",
    body: "I learned to design effective and aesthetically pleasing user interfaces.",
    img: "https://avatar.vercel.sh/uxui",
  },
  {
    name: "Project Management Certification",
    username: "@projectmanager",
    body: "An essential certification for effectively managing complex projects.",
    img: "https://avatar.vercel.sh/projectmanager",
  },
];

// Split certifications into two rows
const firstRow = ref(certifications.slice(0, certifications.length / 2));
const secondRow = ref(certifications.slice(certifications.length / 2));
</script>
