<template>
  <div class="home">
    <v-row>
      <v-col cols="8">
        <div v-if="loadingPopularStories">
          <StoryCardSkeleton v-for="item in 3" :key="item" />
        </div>
        <List v-else :items="stories" :cols="12">
          <template v-slot:default="{ itemProps }">
            <StoryCard v-bind="itemProps" @story-card-click="goToStory" />
          </template>
        </List>
      </v-col>
      <v-col cols="4">
        <div v-if="loadingPopularStories">
          <PopularStoryCardSkeleton v-for="item in 3" :key="item" />
        </div>
        <v-sheet v-else class="pa-4 light mt-3">
          <h2 class="subtitle-1 text-uppercase text-center">
            Popular Stories
          </h2>
          <List :items="popularStories" :cols="12">
            <template v-slot:default="{ itemProps }">
              <PopularStoryCard
                v-bind="itemProps"
                @popular-story-card-click="goToStory"
              />
            </template>
          </List>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import StoryCard from '~/components/Story/StoryCard';
import PopularStoryCard from '~/components/Story/PopularStoryCard';
import List from '~/components/Shared/List';
import StoryCardSkeleton from '~/components/Shared/Skeletons/StoryCardSkeleton';
import PopularStoryCardSkeleton from '~/components/Shared/Skeletons/PopularStoryCardSkeleton';

export default {
  layout: 'front',
  components: {
    StoryCard,
    List,
    PopularStoryCard,
    StoryCardSkeleton,
    PopularStoryCardSkeleton
  },
  computed: {
    ...mapState('Stories', [
      'stories',
      'popularStories',
      'loading',
      'loadingPopularStories'
    ])
  },
  mounted() {
    this.getStories();
    this.getPopularStories();
  },
  methods: {
    ...mapActions('Stories', ['getStories', 'getPopularStories']),
    goToStory(id) {
      this.$router.push({
        name: 'stories-id',
        params: { id }
      });
    }
  }
};
</script>
