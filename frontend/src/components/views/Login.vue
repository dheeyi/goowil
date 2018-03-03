<template>
  <div>
    <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    target="#"
                    slot="activator"
                  >
                    <v-icon large>list</v-icon>
                  </v-btn>
                  <span>Escribir...<br>email: dheeyi@gmail.com<br>password:123456</span>
                </v-tooltip>
              </v-toolbar>
              <v-alert color="error" :value="error">{{ error }}</v-alert>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    prepend-icon="person"
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    type="text"
                    placeholder="dheeyi@gmail.com"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    :counter="10"
                    required
                    type="password"
                    placeholder="123456"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed large color="primary" @click.prevent="submit">Sign in</v-btn>
                <v-btn depressed large color="error" @click="clear">clear</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be less than 10 characters'
      ],
      error: false,
      fakeUSer: {
        email: 'dheeyi@gmail.com',
        password: '123456',
        token: 'userLogged'
      }
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    login () {
      const fakeResponse = this.fakeUSer
      if (this.email === this.fakeUSer.email && this.password === this.fakeUSer.password) {
        this.loginSuccessful(fakeResponse)
      } else {
        this.loginFailed()
      }
    },
    loginSuccessful (fakeResponse) {
      (!fakeResponse.token) ? this.loginFailed() : this.redirectHome(fakeResponse.token)
    },
    loginFailed () {
      this.error = 'Escribir... email:' + this.fakeUSer.email + ' y password:' + this.fakeUSer.password
      delete localStorage.token
    },
    redirectHome (token) {
      this.error = false
      localStorage.token = token
      this.$router.replace('/')
      this.$router.go({ path: '/' })
    },
    clear () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>

</style>
