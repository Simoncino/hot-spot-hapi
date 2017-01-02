<template>
  <div class="simpleList">
    <h3>SimpleList</h3>
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
  export default {
    created: function(){
      this.getLista();
    },
    data: function() {
      return {
        simpleList: []
        ,message: ''
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
          url: '/api/usersList'
        }).then((response) => {
          const result = response.data;
          if(result.success){
           this.success = 'A CANNONE!!!!!' + result.message;
           this.message = '';
           this.simpleList = result.lista;
         } else {
          this.success = '';
          this.message = result.message;
          this.simpleList = [];

        }

      }, (response) => {
        this.message = response.data
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
