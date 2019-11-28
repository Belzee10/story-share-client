<template>
  <v-row>
    <v-col v-for="item in items" :key="item.id" :cols="cols">
      <slot :itemProps="item"></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    cols: {
      type: Number,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>
