<template>
  <div class="materia">
    <div class="formodal">
      <v-dialog v-model="dialog" max-width="800px">
        <v-btn color="primary" dark slot="activator" class="mb-2">New materia</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="ID materia" v-model="editedItem.idmateria"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Nombre" v-model="editedItem.name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Cod materia" v-model="editedItem.codmat"></v-text-field>
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
      :items="materias"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.idmateria }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.codmat }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteMateria(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="getMateria">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import apiService from '@/services/ApiService'
export default {
  name: 'materias',
  data () {
    return {
      materias: [],
      dialog: false,
      editedIndex: -1,
      editedItem: {
        idmateria: '',
        name: '',
        codmat: ''
      },
      headers: [
        {
          text: 'UID materia',
          align: 'left',
          sortable: true,
          value: 'idmateria'
        },
        {
          text: 'Nombre',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Codigo de Materia',
          align: 'left',
          sortable: false,
          value: 'codmat'
        },
        { text: 'Actions', value: 'name', sortable: false }
      ]
    }
  },
  mounted () {
    this.getMateria()
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
    async getMateria () {
      const response = await apiService.fetchMaterias()
      this.materias = response.data
    },

    async save () {
      try {
        if (this.editedIndex === -1) {
          await apiService.addMateria(this.editedItem)
          this.materias.push(this.editedItem)
        } else {
          await apiService.updateMateria(this.editedItem)
          Object.assign(this.materias[this.editedIndex], this.editedItem)
        }
      } catch (err) {
        return console.log(err.message)
      } finally {
        this.close()
      }
    },

    async deleteMateria (materia) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          apiService.deleteMateria(materia.idmateria)
          const index = this.materias.indexOf(materia)
          this.materias.splice(index, 1)
        }
      })
    },

    editItem (item) {
      this.editedIndex = this.materias.indexOf(item)
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
