<template>
  <CommonContainerWrapper>
    <h2
      class="text-3xl font-semibold leading-none tracking-tight md:text-2xl lg:text-2xl"
    >
      certifications
    </h2>
    <p class="mb-10 text-muted-foreground">
      Certifications I have been able to obtain.
    </p>

    <StunningSkewWrapper>
      <template #content>
        <div
          class="relative flex flex-col items-center justify-center w-full overflow-hidden"
        >
          <CourseCardList pauseOnHover class="[--duration:50s]">
            <CourseCard
              v-for="certification in firstRow"
              :key="certification.certificationName"
              :institutionLogo="certification.institutionLogo"
              :certificationName="certification.certificationName"
              :institutionName="certification.institutionName"
              :certificationDate="certification.certificationDate"
              :certificationDescription="certification.certificationDescription"
              :certificationLink="certification.certificationLink"
            />
          </CourseCardList>
          <CourseCardList reverse pauseOnHover class="[--duration:50s]">
            <CourseCard
              v-for="certification in secondRow"
              :key="certification.certificationName"
              :institutionLogo="certification.institutionLogo"
              :certificationName="certification.certificationName"
              :institutionName="certification.institutionName"
              :certificationDate="certification.certificationDate"
              :certificationDescription="certification.certificationDescription"
              :certificationLink="certification.certificationLink"
            />
          </CourseCardList>
        </div>
      </template>
    </StunningSkewWrapper>
  </CommonContainerWrapper>
</template>

<script lang="ts" setup>
import { certifications } from "@/utils/certificationData";

const firstRow = ref(certifications.slice(0, certifications.length / 2));
const secondRow = ref(certifications.slice(certifications.length / 2));
</script>
