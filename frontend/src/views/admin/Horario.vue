<template>
  <div class="horario">
    <div class="formodal">
      <v-dialog v-model="dialog" max-width="800px">
        <v-btn color="primary" dark slot="activator" class="mb-2">New horario</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="UID horario" v-model="editedItem.idhorario"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Hora Inicio" v-model="editedItem.horainit"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Hora Fin" v-model="editedItem.horafin"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Estado" v-model="editedItem.state"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select
                    label="UID Aula"
                    autocomplete
                    chips
                    v-model="editedItem.idaula"
                    :items="aulas"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select
                    label="UID Docente"
                    autocomplete
                    chips
                    v-model="editedItem.iddocente"
                    :items="docentes"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select
                    label="UID Materia"
                    autocomplete
                    chips
                    v-model="editedItem.idmateria"
                    :items="materias"
                  ></v-select>
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
      :items="horarios"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.idhorario }}</td>
        <td class="text-xs-left">{{ props.item.horainit }}</td>
        <td class="text-xs-left">{{ props.item.horafin }}</td>
        <td class="text-xs-left">{{ props.item.state }}</td>
        <td class="text-xs-left">{{ props.item.idaula }}</td>
        <td class="text-xs-left">{{ props.item.iddocente }}</td>
        <td class="text-xs-left">{{ props.item.idmateria }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteHorario(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="getData">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import apiService from '@/services/ApiService'
export default {
  name: 'horarios',
  data () {
    return {
      horarios: [],
      docentes: [],
      materias: [],
      aulas: [],
      dialog: false,
      editedIndex: -1,
      editedItem: {
        idhorario: '',
        horainit: '',
        horafin: '',
        estate: '',
        idaula: '',
        iddocente: '',
        idmateria: ''
      },
      headers: [
        {
          text: 'UID horario',
          align: 'left',
          sortable: true,
          value: 'idhorario'
        },
        {
          text: 'Hora Inicio',
          align: 'left',
          sortable: true,
          value: 'horainit'
        },
        {
          text: 'Hora Fin',
          align: 'left',
          sortable: false,
          value: 'horafin'
        },
        {
          text: 'State',
          align: 'left',
          sortable: false,
          value: 'state'
        },
        {
          text: 'UID Aula',
          align: 'left',
          sortable: false,
          value: 'idaula'
        },
        {
          text: 'UID Docente',
          align: 'left',
          sortable: false,
          value: 'iddocente'
        },
        {
          text: 'UID Materia',
          align: 'left',
          sortable: false,
          value: 'idmateria'
        },
        { text: 'Actions', value: 'name', sortable: false }
      ]
    }
  },
  mounted () {
    this.getData()
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
    async getData () {
      const responseHor = await apiService.fetchHorarios()
      this.horarios = responseHor.data
      const responseDoc = await apiService.fetchDocentes()
      this.docentes = responseDoc.data
      const responseMat = await apiService.fetchMaterias()
      this.materias = responseMat.data
      const responseAu = await apiService.fetchAulas()
      this.aulas = responseAu.data
    },

    async save () {
      try {
        if (this.editedIndex === -1) {
          await apiService.addHorario(this.editedItem)
          this.horarios.push(this.editedItem)
        } else {
          await apiService.updateHorario(this.editedItem)
          Object.assign(this.horarios[this.editedIndex], this.editedItem)
        }
      } catch (err) {
        return console.log(err.message)
      } finally {
        this.close()
      }
    },

    async deleteHorario (horario) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          apiService.deleteHorario(horario.idhorario)
          const index = this.horarios.indexOf(horario)
          this.horarios.splice(index, 1)
        }
      })
    },

    editItem (item) {
      this.editedIndex = this.horarios.indexOf(item)
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
