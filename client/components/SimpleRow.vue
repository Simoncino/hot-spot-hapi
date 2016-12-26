<template>
  <tr>
    <td>{{this.indice}}</td>
    <td>{{this.elemento.nome}}</td>
    <td><a v-bind:href="elemento.link" target="_blank">{{this.elemento.nome}}</a></td>
    <td>{{this.elemento.note}}</td>
    <td><button v-on:click="clickElimina(this.indice)">-</button></td>
  </tr>  
</template>

<script>
  export default {
    props: {
      indice: 0,
      elemento: {}
    },
    data: function() {
      return {
      }
    },
    methods: {
      clickElimina: function(index){
        this.$emit('eliminaFromList', this.indice);
      }
    }
  }
</script>

<style lang="sass">
  body {
    font-family: Open Sans, sans-serif;
  }
  tr {

    td {
      border-left: 1px solid gray;      
      border-bottom: 1px solid gray;      
    }
  }
</style>
