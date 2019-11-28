<template>
  <v-card flat class="story-card pa-0">
    <v-container class="pa-0">
      <v-row>
        <v-col cols="5" class="py-0">
          <v-img
            :src="image || require('~/assets/images/no-image.jpg')"
            :alt="title"
            :lazy-src="require('~/assets/images/image-loading.jpeg')"
            height="200"
          ></v-img>
        </v-col>
        <v-col cols="7" class="py-0 d-flex flex-column">
          <span class="date accent--text text--darken-2">{{ formatDate }}</span>
          <h3 class="title text-capitalize">{{ title }}</h3>
          <p class="accent--text text--darken-4 font-weight-light content">
            {{ content | truncate }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import dayjs from 'dayjs';
export default {
  name: 'StoryCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    likes: {
      type: Number,
      default: null
    },
    author: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formatDate() {
      return dayjs(this.date).format('MMM DD, YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
.date {
  font-size: 12px;
}

.content {
  font-size: 14px;
}
</style>
