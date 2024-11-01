<template>
  <Container>
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
      <Marquee pauseOnHover class="[--duration:50s]">
        <ReviewCard
          v-for="certification in firstRow"
          :key="certification.certificationName"
          :institutionLogo="certification.institutionLogo"
          :certificationName="certification.certificationName"
          :institutionName="certification.institutionName"
          :certificationDate="certification.certificationDate"
          :certificationDescription="certification.certificationDescription"
          :certificationLink="certification.certificationLink"
        />
      </Marquee>
      <Marquee reverse pauseOnHover class="[--duration:50s]">
        <ReviewCard
          v-for="certification in secondRow"
          :key="certification.certificationName"
          :institutionLogo="certification.institutionLogo"
          :certificationName="certification.certificationName"
          :institutionName="certification.institutionName"
          :certificationDate="certification.certificationDate"
          :certificationDescription="certification.certificationDescription"
          :certificationLink="certification.certificationLink"
        />
      </Marquee>
      <div
        class="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"
      ></div>
      <div
        class="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"
      ></div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import ReviewCard from "@/components/course/CourseCard.vue";
import Marquee from "@/components/course/CourseCardList.vue";
import Container from "@/components/common/Container.vue";

const certifications = [
  {
    certificationName: "CCNA Cybersecurity Operations",
    institutionName: "Cisco",
    certificationDate: "May 2021",
    certificationDescription:
      "Cisco certification in cybersecurity operations.",
    certificationLink:
      "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cyberops/cyberops-associate/index.html",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNLVVS0PaqrSH66PI7NmuwF_R9rGAs1Q7iA&s",
  },
  {
    certificationName: "Pix Certification",
    institutionName: "Pix",
    certificationDate: "January 2022",
    certificationDescription: "Digital skills certification by Pix.",
    certificationLink: "https://pix.fr/",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtEZf5mvNDuy6b_Yg1x4jNWdeGPpxKHfJZA&s",
  },
  {
    certificationName: "C# (Basic)",
    institutionName: "HackerRank",
    certificationDate: "May 2022",
    certificationDescription: "Basic skills certification in C# programming.",
    certificationLink:
      "https://www.hackerrank.com/skills-directory/c_sharp_basic",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QF45Z8xO4l2MF4KiJlyV7r4Lp2bYBFA2Ng&s",
  },
  {
    certificationName: "Python (Basic)",
    institutionName: "HackerRank",
    certificationDate: "May 2022",
    certificationDescription:
      "Certification covering fundamental Python programming skills.",
    certificationLink:
      "https://www.hackerrank.com/skills-directory/python_basic",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QF45Z8xO4l2MF4KiJlyV7r4Lp2bYBFA2Ng&s",
  },
  {
    certificationName: "SQL (Basic)",
    institutionName: "HackerRank",
    certificationDate: "May 2022",
    certificationDescription:
      "Foundational certification in SQL querying and database management.",
    certificationLink: "https://www.hackerrank.com/skills-directory/sql_basic",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QF45Z8xO4l2MF4KiJlyV7r4Lp2bYBFA2Ng&s",
  },
  {
    certificationName: "Symfony 6 Fundamentals",
    institutionName: "SymfonyCasts",
    certificationDate: "September 2022",
    certificationDescription:
      "Core concepts in Symfony 6 services and configurations.",
    certificationLink:
      "https://symfonycasts.com/screencast/symfony6-fundamentals",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Harmonious Development with Symfony 6",
    institutionName: "SymfonyCasts",
    certificationDate: "September 2022",
    certificationDescription:
      "Mastery of Symfony 6 for harmonious application development.",
    certificationLink:
      "https://symfonycasts.com/screencast/symfony6-fundamentals",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Create 4 applications with Symfony 4",
    institutionName: "Udemy",
    certificationDate: "September 2022",
    certificationDescription:
      "Practical course on building applications with Symfony 4.",
    certificationLink:
      "https://www.udemy.com/course/creer-4-applications-avec-symfony-v4-evolution-progressive/",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1yEx7_7iIvltIqom0u8er8rKtc6fqzN9GA&s",
  },
  {
    certificationName: "Doctrine, Symfony 6 & the Database",
    institutionName: "SymfonyCasts",
    certificationDate: "October 2022",
    certificationDescription:
      "Advanced training in Doctrine ORM with Symfony 6.",
    certificationLink: "https://symfonycasts.com/screencast/symfony-doctrine",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Easy Admin 4",
    institutionName: "SymfonyCasts",
    certificationDate: "October 2022",
    certificationDescription:
      "Mastering EasyAdmin 4 for Symfony application administration.",
    certificationLink: "https://symfonycasts.com/screencast/easyadminbundle",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Symfony 5 Security: Authenticators",
    institutionName: "SymfonyCasts",
    certificationDate: "October 2022",
    certificationDescription:
      "In-depth study of Symfony 5 authenticators for secure applications.",
    certificationLink: "https://symfonycasts.com/screencast/symfony-security",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEwKj6JChM0aF242Iv0k1E2zyyyyTJJ_DXA&s",
  },
  {
    certificationName: "Python: Unit testing",
    institutionName: "LinkedIn Learning",
    certificationDate: "November 2022",
    certificationDescription: "An in-depth course on unit testing in Python.",
    certificationLink:
      "https://www.linkedin.com/learning/python-les-tests-unitaires",
    institutionLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    certificationName: "Git essentials",
    institutionName: "LinkedIn Learning",
    certificationDate: "November 2022",
    certificationDescription: "Essential Git concepts for version control.",
    certificationLink: "https://www.linkedin.com/learning/l-essentiel-de-git",
    institutionLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    certificationName: "MOOC SecNumAcadémie",
    institutionName: "ANSSI",
    certificationDate: "January 2023",
    certificationDescription:
      "Security training provided by ANSSI on information systems.",
    certificationLink: "https://secnumacademie.gouv.fr/",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAjY8EUbjPFc8Im1f1ZGVPcQ21lXRcUBwfw&s",
  },
  {
    certificationName: "The foundations of the Scrum method",
    institutionName: "LinkedIn",
    certificationDate: "September 2023",
    certificationDescription:
      "Fundamentals of the Scrum methodology for agile project management.",
    certificationLink:
      "https://www.linkedin.com/learning/les-fondements-de-la-methode-scrum-14953321",
    institutionLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    certificationName: "Application Security and Secure Coding Training",
    institutionName: "Codebashing",
    certificationDate: "September 2023",
    certificationDescription:
      "Training on secure coding practices and application security.",
    certificationLink: "https://www.codebashing.com/",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4bodRwWWRVTMM4sRzKugsnAn0IF_gECqeWw&s",
  },
  {
    certificationName: "L1 Foundational",
    institutionName: "Ivalua",
    certificationDate: "October 2023",
    certificationDescription: "Foundational training for Ivalua applications.",
    certificationLink: "https://info.ivalua.com/certification/l1-foundational",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
  {
    certificationName: "L2 Technical",
    institutionName: "Ivalua",
    certificationDate: "December 2023",
    certificationDescription:
      "Technical certification for Ivalua configurations.",
    certificationLink: "https://info.ivalua.com/certification/l2-technical",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
  {
    certificationName: "L2 Configuration",
    institutionName: "Ivalua",
    certificationDate: "April 2024",
    certificationDescription:
      "Intermediate certification in Ivalua configuration.",
    certificationLink: "https://info.ivalua.com/certification/l2-configuration",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
  {
    certificationName: "L3 Procure to Pay",
    institutionName: "Ivalua",
    certificationDate: "August 2024",
    certificationDescription: "Advanced certification in Ivalua P2P.",
    certificationLink:
      "https://info.ivalua.com/certification/l3-procure-to-pay-p2p",
    institutionLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRF45PDeO1WY8eAj4o-2PcesAQz7p8mMdw&s",
  },
];

const firstRow = ref(certifications.slice(0, certifications.length / 2));
const secondRow = ref(certifications.slice(certifications.length / 2));
</script>
