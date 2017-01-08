<template>
  <div class="containerPost">
    <!-- <div>Indice: {{indice}}</div> -->
    <PostDate :timestamp="elemento.timestamp"></PostDate>
    <PostAutore :post="elemento"></PostAutore>
    <!-- <div>
      Liv. onda: {{elemento.livelloOnda}} -- PORCA MADONNA LADRA
      <img src="../../assets/img/wave5.gif" alt="ondina">--
    </div> -->
    <PostOnda :livelloOnda="elemento.livelloOnda"></PostOnda>

    <div>Didascalia: {{elemento.didascalia}}</div>
    <div>Foto: {{elemento.foto}}</div>
    <div>
      Pulsantiera con tanti 
      <button>azione1</button>
      <button>azione2</button>
      <button>azione3</button>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  import PostDate from './PostDate.vue'
  import PostAutore from './PostAutore.vue'
  import PostOnda from './PostOnda.vue'

  export default {
    components: {
      PostDate,
      PostOnda,
      PostAutore
    },
    props: {
      indice: 0,
      elemento: {}
    },
    data: function() {
      return {
        autore: {}
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
