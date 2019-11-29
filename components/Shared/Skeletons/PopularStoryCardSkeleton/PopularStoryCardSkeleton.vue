<template>
  <v-row>
    <v-col cols="5">
      <v-skeleton-loader height="80" type="image"> </v-skeleton-loader>
    </v-col>
    <v-col cols="7">
      <v-skeleton-loader type="paragraph" class="mt-4"> </v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PopularStoryCardSkeleton'
};
</script>

<style lang="scss" scoped></style>
