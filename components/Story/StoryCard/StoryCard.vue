<template>
  <v-card @click="$emit('story-card-click', id)" flat class="story-card">
    <v-container class="">
      <v-row>
        <v-col cols="5" class="py-0">
          <v-img
            :src="image || require('~/assets/images/no-image.jpg')"
            :alt="title"
            :lazy-src="require('~/assets/images/image-loading.jpeg')"
            height="220"
          ></v-img>
        </v-col>
        <v-col cols="7" class="d-flex flex-column px-2">
          <span class="date accent--text text--darken-2">{{ formatDate }}</span>
          <h3 class="title">
            {{ title | capitalizeFirstLetter }}
          </h3>
          <p class="accent--text text--darken-4 font-weight-light content">
            {{ content | truncate(320) }}
          </p>
          <div class="mt-auto d-flex">
            <Author :name="`${author.name} ${author.lastName}`" class="mr-2" />
            <Like v-if="likes > 0" :likes="likes" />
            <v-btn
              @click.stop="$emit('story-card-save')"
              depressed
              small
              color="primary"
              class="ml-auto"
            >
              Save</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import dayjs from 'dayjs';
import Author from '~/components/Story/Author';
import Like from '~/components/Story/Like';

export default {
  name: 'StoryCard',
  components: { Author, Like },
  props: {
    id: {
      type: String,
      default: ''
    },
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
