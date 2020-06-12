<template>
  <v-row justify="center">
    <v-dialog v-model="showLoginModal" persistent max-width="600px">
        <v-card ref="formLogin">
          <div class="logo">
            <base-image
                :src="require('@/assets/article-1.jpg')"
                class="mx-auto mb-12"
                height="180"
                width="100%"
            />
          </div>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col style="height: 88px">
                  <v-text-field
                      label="Your email"
                      ref="email"
                      prepend-icon="email"
                      v-model="email"
                      :rules="[() => !!email || 'This field is required']"
                      :error-messages="errorMessages"
                      outlined
                      required
                      filled
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col style="height: 88px">
                  <v-text-field
                      ref="password"
                      v-model="password"
                      label="Your Password"
                      type="password"
                      prepend-icon="lock"
                      :rules="[() => !!email || 'This field is required']"
                      required
                      outlined
                      filled
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
              <div class="button-login">
                <template>
                  <div class="text-center">
                    <v-btn
                        class="ma-2"
                        tile large color="teal"
                        @click="executeBack"
                        icon>
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-btn
                        class="ma-2"
                        tile color="success"
                        @click="submit"
                        dark>Login or Register</v-btn>
                  </div>
                </template>
              </div>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  /* eslint-disable no-debugger */

  export default {
    name: 'Login',
    data: () => ({
      errorMessages: '',
      email: null,
      password: null,
      formHasErrors: false,
      showLoginModal: true,
    }),
    computed: {
      formLogin () {
        return {
          email: this.email,
          password: this.password,
        }
      },
    },
    watch: {
      name () {
        this.errorMessages = ''
      },
    },
    methods: {
      executeBack () {
        this.$router.back()
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.formLogin).forEach(f => {
          if (!this.formLogin[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>

<style lang="sass">
  .button-login
    margin-top: -30px
    width: 100% !important

  .logo
    margin-bottom: -35px

</style>
