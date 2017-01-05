<template>
  <div class="containerPost">
    <PostDate :timestamp="elemento.timestamp"></PostDate>
    <div>Indice: {{indice}}</div>
    <div>Autore username: {{autore.username}}</div>
    <div>Liv. onda: {{elemento.livelloOnda}}</div>
    <div>Didascalia: {{elemento.didascalia}}</div>
    <div>Foto: {{elemento.foto}}</div>
    <div class="clear"></div>
  </div>
</template>

<script>
  import PostDate from './PostDate.vue'

  export default {
    components: {
      PostDate
    },
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
    },
    methods: {
      getAutore: function(){
        this.axios({
          method: 'GET',
          url: '/api/usersList'
        }).then((response) => {
          /*console.log('Post.created:elemento', this.elemento);*/
          //in realta' questa funzione sarebbe 
          //get utente by id, da sistemare lato backend
          const result = response.data;
          if(result){
            if(result.success){
              let elemento = this.elemento;
              const autori = result.lista.filter(function(item){
                return item.id == elemento.idAutore;
              });
              this.autore = autori[0];
              this.elemento.autore = autori[0];
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
  }
  .dataPost {
    border: 1px solid blue;
    color: #6f6f6f;
    float: left;
    padding: 0.5em;
  }
  .clear{width: 0.01em;height: 0.01em;clear:both;}
</style>
