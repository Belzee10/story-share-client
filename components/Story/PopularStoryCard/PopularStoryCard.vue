<template>
  <v-card flat class="story-card transparent">
    <v-container class="pa-0">
      <v-row>
        <v-col cols="5" class="py-0">
          <v-img
            :src="image || require('~/assets/images/no-image.jpg')"
            :alt="title"
            :lazy-src="require('~/assets/images/image-loading.jpeg')"
            height="80"
          ></v-img>
        </v-col>
        <v-col cols="7" class="d-flex flex-column py-0">
          <h3 class="title body-1">
            {{ title | capitalizeFirstLetter }}
          </h3>
          <p class="accent--text text--darken-4 font-weight-light content">
            {{ content | truncate(50) }}
          </p>
          <Author :name="`${author.name} ${author.lastName}`" class="mt-auto" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Author from '~/components/Story/Author';

export default {
  name: 'PopularStoryCard',
  components: { Author },
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: Object,
      default: () => ({
        name: '',
        lastName: ''
      })
    },
    image: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  font-size: 12px;
  margin: 0;
}
</style>
