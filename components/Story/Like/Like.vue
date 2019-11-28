<template>
  <div class="like d-flex">
    <v-icon :size="size">{{ getIcon }}</v-icon>
    <span v-if="likes > 0" class="accent--text text--darken-4">{{
      likes
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'Like',
  props: {
    likes: {
      type: Number,
      default: null
    },
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    getIcon() {
      return this.likes > 0 ? 'mdi-heart' : 'mdi-heart-outline';
    }
  }
};
</script>

<style lang="scss" scoped></style>
