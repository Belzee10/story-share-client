<template>
  <div class="d-flex align-end">
    <div>
      <v-img
        :src="avatar || require('~/assets/images/no-image.jpg')"
        :alt="name"
        :lazy-src="require('~/assets/images/image-loading.jpeg')"
        :height="size.height"
        :width="size.width"
        class="avatar"
      ></v-img>
    </div>
    <span class="text-capitalize ml-1 name accent--text text--darken-4">{{
      name
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    avatar: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    size: {
      type: Object,
      default: () => ({
        height: 20,
        width: 20
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
}
.name {
  font-size: 13px;
  text-decoration: underline;
}
</style>
