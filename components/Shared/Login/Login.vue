<template>
  <v-dialog v-model="isOpen" persistent width="500" class="login">
    <v-card>
      <v-card-title class="headline title d-flex justify-center" primary-title>
        Login
        <v-icon @click="$emit('close-modal')" class="close">mdi-close</v-icon>
      </v-card-title>
      <v-card-text class="pa-4">
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            type="email"
            placeholder="Email"
            solo
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            placeholder="Password"
            solo
          ></v-text-field>
          <div class="d-flex flex-column align-center mt-6">
            <v-btn
              @click="submit"
              depressed
              block
              color="primary"
              class="text-capitalize"
              >Login</v-btn
            >
            <span class="text-center my-1">or</span>
            <v-btn
              @click="$emit('go-to-register')"
              outlined
              depressed
              block
              color="info"
              class="text-capitalize"
              >Register</v-btn
            >
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Login',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    valid: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [v => !!v || 'Password is required']
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$emit('submit', {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
}
</style>
