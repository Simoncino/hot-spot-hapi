<template>
<div class="containerPost">
  <div>{{indice}}</div>
  <div>{{data}}</div>
  <div>{{autore.nome}}</div>
  <div>{{elemento.nome}}</div>
  <div>{{elemento.note}}</div>
  <div class="clear"></div>
</div>
</template>

<script>
  export default {
    props: {
      indice: 0,
      elemento: {}
    },
    created: function(){
      this.getAutore();
    },
    data: function() {
      return {
        autore: {},
        data: new Date()
      }
    }
    ,
    methods: {
      getAutore: function(){
        this.axios({
          method: 'GET',
          url: '/api/usersList'
        }).then((response) => {
          const result = response.data;
          console.log('elemento', this.elemento);
          if(result){
            if(result.success){
              this.streaming = result.lista;
              const i = Math.floor(Math.random() * 3);
              this.autore = result.lista[i];
              console.log("autore", result.lista[i]);
            } else {
              this.message = result.message;
              this.streaming = [];
            }
            this.success = result.success;
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
  .containerPost {
    border: 1px solid blue;
    min-height: 10px;
    margin: 0 auto;
    margin-bottom: 1em;
    div {
      border-left: 1px solid gray;      
      border-bottom: 1px solid gray;     
      margin: 1em; 
      float: left;
      width: 20%;
    }
  }
  .clear{width: 0.01em;height: 0.01em;clear:both;}
</style>
