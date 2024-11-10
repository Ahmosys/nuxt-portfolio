<template>
  <CommonContainerWrapper>
    <h2
      class="text-3xl font-semibold leading-none tracking-tight md:text-2xl lg:text-2xl"
    >
      03. Projects
    </h2>
    <p class="mb-10 text-muted-foreground">Recent projects I want to share.</p>
    <div class="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 sm:gap-4">
      <StunningSpotlightCard>
        <div class="flex flex-col col-span-1 p-6 lg:p-5">
          <div class="overflow-hidden">
            <img
              src="https://github.com/Ahmosys/daily-scrum-picker/raw/main/docs/images/readme-presentation.png"
              alt=""
              class="rounded-lg object-fit"
            />
          </div>
          <p class="mt-5 text-lg font-medium leading-none tracking-tight">
            Daily Scrum Picker
          </p>
          <p class="mt-2 mb-3 text-sm text-muted-foreground">
            Daily Scrum Picker is a tool that helps Scrum Masters to randomly
            select team members for the daily stand-up meeting.
          </p>
        </div>
      </StunningSpotlightCard>
      <StunningSpotlightCard>
        <div class="flex flex-col col-span-1 p-6 lg:p-5">
          <div class="overflow-hidden">
            <img
              src="https://github.com/Ahmosys/nordpapers/raw/main/docs/images/readme-presentation.png"
              alt=""
              class="rounded-lg object-fit"
            />
          </div>
          <h3 class="mt-5 text-lg font-medium leading-none tracking-tight">
            Nordpapers
          </h3>
          <p class="mt-2 mb-3 text-sm text-muted-foreground">
            Nordpapers is your ultimate destination for a curated collection of
            wallpapers inspired by the soothing Nord color palettes.
          </p>
        </div>
      </StunningSpotlightCard>
    </div>
  </CommonContainerWrapper>
</template>
