<template>
  <div class="simpleList">
    <button v-on:click="getLista">Carica lista</button>
    <table cellpadding="2" cellspacing="2" class="simpleTable">

      <simpleRow v-for="(item, index) in simpleList" 
      v-bind:elemento="item" 
      v-bind:indice="index" 
      v-on:eliminaFromList="elimina"></simpleRow>
    </table>
  </div>
</template>
<script>

  import SimpleRow from './SimpleRow.vue'
/*
  TODO DA SISTEMARE è SOLO IN FASE EMBRIONALE
  SE LA LOGIN VA BENE BISOGNA CREARE IL REDIREZIONAMENTO ALLA HOME
  BISOGNA INOLTRE METTERE QUESTO FILE IN UNA CARTELLA PER SEPARARLO 
  DAL CASINO CHE VERRà DOPO
  */
  export default {
    created: function(){
      this.getLista();
    },
    data: function() {
      return {
        logUser: {},
        simpleList: []
      }
    },
    components: {
      SimpleRow
    },
    methods: {
      elimina: function(index){
        this.simpleList.splice(index,1);
        this.$emit()
      },
      getLista: function(){

        this.axios({
          method: 'GET',
          url: '/api/simpleList'
        }).then((response) => {
          const result = response.data;
          if(result.success){
           this.success = 'A CANNONE!!!!!' + result.message;
           this.error = '';
           this.simpleList = result.lista;
           /*console.log(this.simpleList);*/
         } else {
          this.success = '';
          this.error = result.message;
          this.simpleList = [];

        }

      }, (response) => {
        this.error = response.data
        this.success = ''
      })

      }
    }
  }
</script>

<style lang="sass">
  body {
    font-family: Open Sans, sans-serif;
  }
  .simpleTable{
    width: 40%;
  }
</style>
