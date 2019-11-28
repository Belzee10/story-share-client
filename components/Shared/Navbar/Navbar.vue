<template>
  <v-container>
    <v-app-bar flat height="100">
      <v-row>
        <v-col cols="4" offset="4" class="d-flex justify-center">
          <v-img
            :src="require('~/assets/images/logo.png')"
            max-width="180"
          ></v-img>
        </v-col>
        <v-col cols="4" class="d-flex justify-end align-center">
          <v-btn color="primary" class="text-capitalize">
            Get Started
          </v-btn>
        </v-col>
      </v-row>
      <template v-slot:extension>
        <v-row>
          <v-col
            :class="getExtensionbarStyles"
            class="d-flex justify-center py-2"
          >
            <nuxt-link
              v-for="item in getLinks"
              :key="item.id"
              :to="item.to"
              class="category-link"
            >
              {{ item.name }}
            </nuxt-link>
          </v-col>
        </v-row>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapState('Categories', ['categories']),
    getExtensionbarStyles() {
      return !this.$vuetify.theme.dark ? 'border' : '';
    },
    getLinks() {
      const links = this.categories.map(item => ({
        ...item,
        to: item.name.toLowerCase()
      }));
      return [{ id: 'all', name: 'All', to: '/' }, ...links];
    }
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    ...mapActions('Categories', ['getCategories'])
  }
};
</script>

<style lang="scss" scoped>
.border {
  border-top: 1px solid var(--v-accent-base);
  border-bottom: 1px solid var(--v-accent-base);
}
a {
  text-decoration: none;
  margin-right: 1.5rem;
  text-transform: uppercase;
}
a:hover {
  color: var(--v-anchor-lighten);
}
</style>
