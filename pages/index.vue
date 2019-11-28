<template>
  <div class="home">
    <v-row>
      <v-col cols="8">
        <List :items="stories" :cols="12">
          <template v-slot:default="{ itemProps }">
            <StoryCard v-bind="itemProps" />
          </template>
        </List>
      </v-col>
      <v-col cols="4">
        <v-sheet class="pa-4 light mt-3">
          <h2 class="subtitle-1 text-uppercase text-center">Popular Stories</h2>
          <List :items="popularStories" :cols="12">
            <template v-slot:default="{ itemProps }">
              <PopularStoryCard
                :title="itemProps.title"
                :image="itemProps.image"
                :author="itemProps.author"
                :content="itemProps.content"
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

export default {
  layout: 'front',
  components: { StoryCard, List, PopularStoryCard },
  computed: {
    ...mapState('Stories', ['stories', 'popularStories'])
  },
  mounted() {
    this.getStories();
    this.getPopularStories();
  },
  methods: {
    ...mapActions('Stories', ['getStories', 'getPopularStories'])
  }
};
</script>
