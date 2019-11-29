<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <v-card outlined>
          <v-card-title
            class="headline title d-flex justify-center"
            primary-title
          >
            Register
          </v-card-title>
          <v-card-text class="pa-4">
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                placeholder="Name"
                solo
              ></v-text-field>
              <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
                label="LastName"
                placeholder="LastName"
                solo
              ></v-text-field>
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
                  @click="handleRegister"
                  depressed
                  outlined
                  block
                  color="info"
                  class="text-capitalize"
                  >Register</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'front',
  data: () => ({
    valid: true,
    name: '',
    lastName: '',
    email: '',
    password: '',
    nameRules: [v => !!v || 'Name is required'],
    lastNameRules: [v => !!v || 'LastName is required'],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [v => !!v || 'Password is required']
  }),
  methods: {
    handleRegister() {
      if (this.$refs.form.validate()) {
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
