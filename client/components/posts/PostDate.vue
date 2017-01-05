<template>
  <span class="postData">
    {{dateFormatted}}
  </span>
  
</template>

<script>
  import moment from 'moment';

  export default {
    props: {
      timestamp: 0
    },
    created: function(){
      this.setFormatoData();
    },
    data: function() {
      return {
        dateFormatted: ""
      }
    },
    methods: {
      setFormatoData: function(){
        /*console.log('PostDate.methods.setFormatoData:timestamp', this.timestamp);*/
        moment.locale('it');
        let data  = new Date(this.timestamp);
        this.dateFormatted = moment(this.timestamp).format('LLLL');
      }
    }
  }
</script>

<style lang="sass">
.postData {
    border: 1px solid blue;
    color: #6f6f6f;
    float: left;
    padding: 0.5em;
  }
</style>
