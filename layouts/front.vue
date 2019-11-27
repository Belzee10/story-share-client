<template>
  <v-app>
    <Navbar :links="categories" />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Footer from '~/components/Shared/Footer';
import Navbar from '~/components/Shared/Navbar';

export default {
  components: { Footer, Navbar },
  computed: {
    ...mapState('Categories', ['categories'])
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    ...mapActions('Categories', ['getCategories'])
  }
};
</script>
