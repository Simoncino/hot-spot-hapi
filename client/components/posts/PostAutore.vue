<template>
  <span class="postAutore">
    <a v-bind:href="link.link" target="_blank" v-bind:title="link.nome">
      {{autore.username}}
    </a>
  </span>
</template>

<script>
  export default {
    props: {
      indice: 0,
      post: {}
    },
    created: function(){
      this.getAutore();
    },
    data: function() {
      return {
        autore: {},
        link: {}
      }
    },
    methods: {
      getAutore: function(){
        this.axios({
          method: 'GET',
          url: '/api/usersList'
        }).then((response) => {
          //in realta' questa funzione sarebbe 
          //get utente by id, da sistemare lato backend
          const result = response.data;
          if(result){
            if(result.success){
              let elemento = this.post;
              const autori = result.lista.filter(function(item){
                return item.id == elemento.idAutore;
              });
              this.autore = autori[0];
              this.post.autore = autori[0];

              if(this.autore && this.autore.social){
                this.link = this.autore.social[0];
              }
            } else {
              this.message = result.message;
              this.post.autore = {};
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
  .postAutore {
    border: 1px solid gray;
    color: #6f6f6f;
    float: left;
    padding: 0.5em;

    a {
      text-decoration: none;
      color: blue;
      text-weight: bold;
    }
  }
</style>
