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
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import StoryCard from '~/components/Story/StoryCard';
import List from '~/components/Shared/List';

export default {
  layout: 'front',
  components: { StoryCard, List },
  computed: {
    ...mapState('Stories', ['stories'])
  },
  mounted() {
    this.getStories();
  },
  methods: {
    ...mapActions('Stories', ['getStories'])
  }
};
</script>
