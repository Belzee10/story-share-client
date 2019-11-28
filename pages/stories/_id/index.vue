<template>
  <v-row>
    <v-col v-if="!story">
      <span>Loading ...</span>
    </v-col>
    <v-col v-else cols="8" offset="2">
      <v-row>
        <v-col cols="12" class="d-flex flex-column">
          <h3 class="display-1 mb-2">
            {{ story.title | capitalizeFirstLetter }}
          </h3>
          <Author
            :size="{ height: 30, width: 30 }"
            :name="`${story.author.name} ${story.author.lastName}`"
          />
          <span class="date accent--text text--darken-2 mb-2"
            >Published: {{ formatDate }}</span
          >
          <v-img
            :src="story.image || require('~/assets/images/no-image.jpg')"
            :alt="story.title"
            :lazy-src="require('~/assets/images/image-loading.jpeg')"
            height="400"
          ></v-img>
          <p class="accent--text text--darken-4 font-weight-light content mt-8">
            {{ story.content }}
          </p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import dayjs from 'dayjs';
import Author from '~/components/Story/Author';

export default {
  name: 'Story',
  layout: 'front',
  components: { Author },
  computed: {
    ...mapState('Stories', ['story']),
    formatDate() {
      return this.story ? dayjs(this.story.date).format('MMM DD, YYYY') : '';
    }
  },
  mounted() {
    this.getStory(this.$route.params.id);
  },
  methods: {
    ...mapActions('Stories', ['getStory'])
  }
};
</script>

<style lang="scss" scoped>
.date {
  font-size: 14px;
}
</style>
