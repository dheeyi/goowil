<template>
  <div class="docente">
    <div class="formodal">
      <v-dialog v-model="dialog" max-width="800px">
        <v-btn color="primary" dark slot="activator" class="mb-2">New docente</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="ID Docente" v-model="editedItem.iddocente"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Nombres" v-model="editedItem.name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Apellidos" v-model="editedItem.apellidos"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="edad" v-model="editedItem.edad"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="email" v-model="editedItem.email"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-data-table
      :headers="headers"
      :items="docentes"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.iddocente }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.apellidos }}</td>
        <td class="text-xs-left">{{ props.item.edad }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteDocente(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="getDocente">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import apiService from '@/services/ApiService'
export default {
  name: 'Docentes',
  data () {
    return {
      docentes: [],
      dialog: false,
      editedIndex: -1,
      editedItem: {
        iddocente: '',
        name: '',
        apellidos: '',
        edad: '',
        email: ''
      },
      headers: [
        {
          text: 'UID Docente',
          align: 'left',
          sortable: true,
          value: 'iddocente'
        },
        {
          text: 'Nombres',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Apellidos',
          align: 'left',
          sortable: false,
          value: 'apellidos'
        },
        {
          text: 'Edad',
          align: 'left',
          sortable: false,
          value: 'edad'
        },
        {
          text: 'E-mail',
          align: 'left',
          sortable: false,
          value: 'email'
        },
        { text: 'Actions', value: 'name', sortable: false }
      ]
    }
  },
  mounted () {
    this.getDocente()
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    async getDocente () {
      const response = await apiService.fetchDocentes()
      this.docentes = response.data
    },

    async save () {
      try {
        if (this.editedIndex === -1) {
          await apiService.addDocente(this.editedItem)
          this.docentes.push(this.editedItem)
        } else {
          await apiService.updateDocente(this.editedItem)
          Object.assign(this.docentes[this.editedIndex], this.editedItem)
        }
      } catch (err) {
        return console.log(err.message)
      } finally {
        this.close()
      }
    },

    async deleteDocente (docente) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          apiService.deleteDocente(docente.iddocente)
          const index = this.docentes.indexOf(docente)
          this.docentes.splice(index, 1)
        }
      })
    },

    editItem (item) {
      this.editedIndex = this.docentes.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  }
}
</script>

<style>

</style>
