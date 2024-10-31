<template>
  <section id="course">
    <div
      class="flex flex-col w-full max-w-screen-xl mx-auto mt-16 mb-16 sm:mt-32"
    >
      <h2
        class="text-3xl font-semibold leading-none tracking-tight md:text-2xl lg:text-2xl"
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
        <Marquee pauseOnHover class="[--duration:40s]">
          <ReviewCard
            v-for="certification in firstRow"
            :key="certification.certificationName"
            :institutionLogo="certification.institutionLogo"
            :certificationName="certification.certificationName"
            :institutionName="certification.institutionName"
            :certificationDate="certification.certificationDate"
            :certificationDescription="certification.certificationDescription"
          />
        </Marquee>

        <!-- Second Marquee (reverse) -->
        <Marquee reverse pauseOnHover class="[--duration:40s]">
          <ReviewCard
            v-for="certification in secondRow"
            :key="certification.certificationName"
            :institutionLogo="certification.institutionLogo"
            :certificationName="certification.certificationName"
            :institutionName="certification.institutionName"
            :certificationDate="certification.certificationDate"
            :certificationDescription="certification.certificationDescription"
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
    certificationName: "CCNA Cybersecurity Operations",
    institutionName: "Cisco",
    certificationDate: "May 2021",
    certificationDescription:
      "Cisco certification in cybersecurity operations.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNLVVS0PaqrSH66PI7NmuwF_R9rGAs1Q7iA&s",
  },
  {
    certificationName: "Pix Certification",
    institutionName: "Pix",
    certificationDate: "January 2022",
    certificationDescription: "Digital skills certification by Pix.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtEZf5mvNDuy6b_Yg1x4jNWdeGPpxKHfJZA&s",
  },
  {
    certificationName: "C# (Basic)",
    institutionName: "HackerRank",
    certificationDate: "May 2022",
    certificationDescription: "Basic skills certification in C# programming.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QF45Z8xO4l2MF4KiJlyV7r4Lp2bYBFA2Ng&s",
  },
  {
    certificationName: "Python (Basic)",
    institutionName: "HackerRank",
    certificationDate: "May 2022",
    certificationDescription:
      "Certification covering fundamental Python programming skills.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QF45Z8xO4l2MF4KiJlyV7r4Lp2bYBFA2Ng&s",
  },
  {
    certificationName: "SQL (Basic)",
    institutionName: "HackerRank",
    certificationDate: "May 2022",
    certificationDescription:
      "Foundational certification in SQL querying and database management.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QF45Z8xO4l2MF4KiJlyV7r4Lp2bYBFA2Ng&s",
  },
  {
    certificationName:
      "Symfony 6 Fundamentals: Services, Config & Environments",
    institutionName: "SymfonyCasts",
    certificationDate: "September 2022",
    certificationDescription:
      "Core concepts in Symfony 6 services and configurations.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Harmonious Development with Symfony 6",
    institutionName: "SymfonyCasts",
    certificationDate: "September 2022",
    certificationDescription:
      "Mastery of Symfony 6 for harmonious application development.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Create 4 applications with Symfony v4",
    institutionName: "Udemy",
    certificationDate: "September 2022",
    certificationDescription:
      "Practical course on building applications with Symfony 4.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1yEx7_7iIvltIqom0u8er8rKtc6fqzN9GA&s",
  },
  {
    certificationName: "Doctrine, Symfony 6 & the Database",
    institutionName: "SymfonyCasts",
    certificationDate: "October 2022",
    certificationDescription:
      "Advanced training in Doctrine ORM with Symfony 6.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Easy Admin 4",
    institutionName: "SymfonyCasts",
    certificationDate: "October 2022",
    certificationDescription:
      "Mastering EasyAdmin 4 for Symfony application administration.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Symfony 5 Security: Authenticators",
    institutionName: "SymfonyCasts",
    certificationDate: "October 2022",
    certificationDescription:
      "In-depth study of Symfony 5 authenticators for secure applications.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Python: Unit testing",
    institutionName: "LinkedIn Learning",
    certificationDate: "November 2022",
    certificationDescription: "An in-depth course on unit testing in Python.",
    institutionLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    certificationName: "Git essentials",
    institutionName: "LinkedIn",
    certificationDate: "November 2022",
    certificationDescription: "Essential Git concepts for version control.",
    institutionLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    certificationName: "MOOC SecNumAcadémie",
    institutionName: "ANSSI",
    certificationDate: "January 2023",
    certificationDescription:
      "Security training provided by ANSSI on information systems.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAjY8EUbjPFc8Im1f1ZGVPcQ21lXRcUBwfw&s",
  },
  {
    certificationName: "The foundations of the Scrum method",
    institutionName: "LinkedIn",
    certificationDate: "September 2023",
    certificationDescription:
      "Fundamentals of the Scrum methodology for agile project management.",
    institutionLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    certificationName: "Application Security and Secure Coding Training",
    institutionName: "Codebashing",
    certificationDate: "September 2023",
    certificationDescription:
      "Training on secure coding practices and application security.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bodRwWWRVTMM4sRzKugsnAn0IF_gECqeWw&s",
  },
  {
    certificationName: "L1 Foundational",
    institutionName: "Ivalua",
    certificationDate: "October 2023",
    certificationDescription: "Foundational training for Ivalua applications.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
  {
    certificationName: "L2 Technical",
    institutionName: "Ivalua",
    certificationDate: "December 2023",
    certificationDescription:
      "Technical certification for Ivalua configurations.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
  {
    certificationName: "L2 Configuration",
    institutionName: "Ivalua",
    certificationDate: "April 2024",
    certificationDescription:
      "Intermediate certification in Ivalua configuration.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
  {
    certificationName: "L3 P2P",
    institutionName: "Ivalua",
    certificationDate: "August 2024",
    certificationDescription: "Advanced certification in Ivalua P2P.",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
];

// Split certifications into two rows
const firstRow = ref(certifications.slice(0, certifications.length / 2));
const secondRow = ref(certifications.slice(certifications.length / 2));
</script>
