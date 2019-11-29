<template>
  <v-row>
    <v-col cols="5">
      <v-skeleton-loader type="image"> </v-skeleton-loader>
    </v-col>
    <v-col cols="7" class="d-flex flex-column">
      <v-skeleton-loader type="heading"> </v-skeleton-loader>
      <v-skeleton-loader type="paragraph@2" class="mt-4"> </v-skeleton-loader>
      <div class="mt-auto d-flex justify-end">
        <v-skeleton-loader type="button"> </v-skeleton-loader>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'StoryCardSkeleton'
};
</script>

<style lang="scss" scoped></style>
