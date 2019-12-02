<template>
  <v-container>
    <Login
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      @close-modal="closeModal"
      @go-to-register="goToRegister"
      @submit="handleSubmit"
    />
    <v-app-bar flat height="100">
      <v-row>
        <v-col cols="4" offset="4" class="d-flex justify-center">
          <NuxtLink to="/">
            <v-img
              :src="require('~/assets/images/logo.png')"
              max-width="180"
            ></v-img>
          </NuxtLink>
        </v-col>
        <v-col cols="4" class="d-flex justify-end align-center">
          <v-btn
            @click="openModal"
            depressed
            color="primary"
            class="text-capitalize"
          >
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
import Login from '~/components/Shared/Login';

export default {
  name: 'Navbar',
  components: { Login },
  data: () => ({
    isModalOpen: false
  }),
  computed: {
    ...mapState('Categories', ['categories'], 'Users', ['users']),
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
    ...mapActions('Categories', ['getCategories']),
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    goToRegister() {
      this.$router.push({ name: 'register' });
      this.closeModal();
    },
    handleSubmit(data) {}
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
