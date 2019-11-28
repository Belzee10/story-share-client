<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/Shared/Footer';
import Navbar from '~/components/Shared/Navbar';

export default {
  components: { Footer, Navbar }
};
</script>
