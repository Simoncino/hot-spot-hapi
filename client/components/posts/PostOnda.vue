<template>
  <span class="postOnda">
    <template v-if="livelloOnda == 0">
     <img src="../../assets/img/wave0.gif" v-bind:alt="imgAlt"> 
   </template>
   <template v-else-if="livelloOnda == 1">
     <img src="../../assets/img/wave1.gif" v-bind:alt="imgAlt"> 
   </template>
   <template v-else-if="livelloOnda == 2">
     <img src="../../assets/img/wave2.gif" v-bind:alt="imgAlt"> 
   </template>
   <template v-else-if="livelloOnda == 3">
     <img src="../../assets/img/wave3.gif" v-bind:alt="imgAlt"> 
   </template>
   <template v-else-if="livelloOnda == 4">
     <img src="../../assets/img/wave4.gif" v-bind:alt="imgAlt"> 
   </template>
   <template v-else-if="livelloOnda == 5">
     <img src="../../assets/img/wave5.gif" v-bind:alt="imgAlt"> 
   </template>
   <template v-else-if="livelloOnda == 6">
     <img src="../../assets/img/wave6.gif" v-bind:alt="imgAlt"> 
   </template>
</span>
</template>

<script>

  export default {
    props: {
      livelloOnda: 0
    },
    data: function() {
      return {
      }
    },
    computed: {
      imgSrc: function(){
        //TODO : purtroppo se lo metto così il src non funziona, lascio comunque il codice
        let srcImage = '../../assets/img/';

        switch (this.livelloOnda){
          case 1:
          srcImage += "wave1.gif";
          break;
          case 2:
          srcImage += "wave2.gif";
          break;
          case 3:
          srcImage += "wave3.gif";
          break;
          case 4:
          srcImage += "wave4.gif";
          break;
          case 5:
          srcImage += "wave5.gif";
          break;
          case 6:
          srcImage += "wave6.gif";
          break;
          default:
          srcImage += "wave0.gif";
          break;
        }
        return srcImage;
      },
      imgAlt: function(){
        let value = '';
        switch (this.livelloOnda){
          case 1:
          value = "Appena mosso";
          break;
          case 2:
          value = "Mosso";
          break;
          case 3:
          value = "Molto mosso";
          break;
          case 4:
          value = "Agitato";
          break;
          case 5:
          value = "Molto agitato";
          break;
          case 6:
          value = "Tsunami";
          break;
          default:
          value = "Piatto";
          break;
        }
        return value;
      }

    }
  }
</script>

<style lang="sass">
  .postOnda {
    border: 1px solid blue;
    color: #6f6f6f;
    float: left;
    padding: 0.5em;

    img {
      border: 0;
    }
  }
</style>
