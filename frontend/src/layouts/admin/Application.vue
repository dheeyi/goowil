<template>
  <div>
    <v-app>
      <v-navigation-drawer
          fixed
          :clipped="$vuetify.breakpoint.mdAndUp"
          app
          v-model="drawer"
      >
        <v-list dense v-if="loggedIn">
          <v-list-item
              v-for="(item, i) in menu"
              :key="i"
              :to="{path: item.path}"
          >
            <v-list-item-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.label"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="primary" dark fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <span class="hidden-sm-and-down" v-text="appTitle"></span>
        </v-toolbar-title>
        <v-text-field
            flat
            solo-inverted
            prepend-icon="search"
            label="Search"
            class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-menu v-if="!loggedIn" open-on-hover top offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon large slot="activator">
              <v-avatar size="32px" tile>
                <img
                    src="../../assets/user-icon.svg"
                    alt="Login"
                    v-on="on"
                >
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :key="items.login.title" @click.stop="dialogLogin = true">
              <v-list-item-title v-text="items.login.title"></v-list-item-title>
            </v-list-item>
            <v-list-item :key="items.register.title" @click.stop="dialogRegister = true">
              <v-list-item-title v-text="items.register.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-dialog v-model="dialogLogin" max-width="800px">
          <v-card>
            <v-card-text>
              <v-card-title>
                <span class="headline">Login</span>
              </v-card-title>
              <v-alert outlined color="error" icon="warning" :value="error" v-text="error"></v-alert>
              <v-form v-model="valid" ref="formLogin" lazy-validation>
                <v-text-field
                    prepend-icon="person"
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    type="text"
                    placeholder="example@gmail.com"
                ></v-text-field>
                <v-text-field
                    prepend-icon="lock"
                    label="Password"
                    v-model="password"
                    :rules="passwordRules"
                    :counter="10"
                    required
                    type="password"
                    placeholder="your password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed large color="primary" @click.prevent="login">Sign in</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogRegister" max-width="800px">
          <v-card>
            <v-card-text>
              <v-card-title>
                <span class="headline">Register</span>
              </v-card-title>
              <v-alert outlined color="error" icon="warning" :value="error" v-text="error"></v-alert>
              <v-form v-model="valid2" ref="formRegister" lazy-validation>
                <v-text-field
                    prepend-icon="face"
                    label="Name"
                    v-model="register.name"
                    :rules="nameRules"
                    required
                    type="text"
                    placeholder="Your name"
                ></v-text-field>
                <v-text-field
                    prepend-icon="person"
                    label="Lastname"
                    v-model="register.apellidos"
                    required
                    type="text"
                    placeholder="Your lastname"
                ></v-text-field>
                <v-text-field
                    prepend-icon="room"
                    label="Age"
                    v-model="register.edad"
                    required
                    type="text"
                    placeholder="18"
                ></v-text-field>
                <v-text-field
                    prepend-icon="person"
                    label="E-mail"
                    v-model="register.email"
                    :rules="emailRules"
                    required
                    type="text"
                    placeholder="example@gmail.com"
                ></v-text-field>
                <v-text-field
                    prepend-icon="lock"
                    label="Password"
                    v-model="register.password"
                    :rules="passwordRules"
                    :counter="10"
                    required
                    type="password"
                    placeholder="Password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed large color="primary" dark @click.prevent="addUser">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer
          app
          fixed
          color="primary" dark>
        <span>&copy; 2018</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  import apiService from '@/services/ApiService'

  export default {
    mounted () {
      this.path = this.$route.path
    },
    data () {
      return {
        tabs: null,
        dialogLogin: false,
        dialogRegister: false,
        drawer: null,
        appTitle: 'Application ',
        loginTitle: 'Login Form',
        path: '/',
        menu: [
          {
            path: '/',
            label: 'Home',
            icon: 'home'
          },
          {
            path: '/api/docente',
            label: 'Docentes',
            icon: 'list'
          },
          {
            path: '/api/aula',
            label: 'Aulas',
            icon: 'class'
          },
          {
            path: '/api/materia',
            label: 'Materias',
            icon: 'description'
          },
          {
            path: '/api/horario',
            label: 'Horarios',
            icon: 'event'
          },
          {
            path: '/logout',
            label: 'Logout',
            icon: 'lock'
          }
        ],
        items: {
          login: { title: 'login' },
          register: { title: 'register' }
        },
        register: {
          name: '',
          apellidos: '',
          edad: '',
          email: '',
          password: ''
        },
        valid: true,
        valid2: true,
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
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
        error: false
      }
    },
    computed: {
      loggedIn: {
        get: () => {
          return Boolean(localStorage.getItem('user'))
        }
      }
    },
    watch: {
      '$route' (to, from) {
        this.path = to.path
      }
    },
    methods: {
      login () {
        if (this.$refs.formLogin.validate()) {
          apiService.userLogin({
            email: this.email,
            password: this.password
          })
            .then(response => this.loginSuccessful(response))
            .catch(response => this.loginFailed(response))
        }
      },
      loginSuccessful (response) {
        this.error = false
        localStorage.user = JSON.stringify(response.data)
        this.$router.replace('/')
        this.$router.go('/')
      },
      loginFailed (response) {
        this.error = response.response.data.message || 'Error Login'
        delete localStorage.token
      },
      addUser () {
        if (this.$refs.formRegister.validate()) {
          apiService.addUser({
            name: this.register.name,
            apellidos: this.register.apellidos,
            edad: this.register.edad,
            email: this.register.email,
            password: this.register.password
          })
            .then(response => this.loginSuccessful(response))
            .catch(response => this.loginFailed(response))
        }
      }
    }
  }
</script>

<style>

</style>
