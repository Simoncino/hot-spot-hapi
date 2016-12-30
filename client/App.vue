<template>
  <div class="containerLogin">
    <h2>{{varfiglio}}</h2>
    showLogin : {{showLogin}}
    <div v-if="showLogin">
     <Login v-on:logged="showTrue"></Login> 
   </div>
   <div v-else>
    <SimpleList></SimpleList>
    <hr>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <hr>
    <router-view></router-view>
  </div>
</div>

</template>

<script>
  import SimpleList from './components/SimpleList.vue'
  import Login from './components/Login.vue'

  export default {
    props: {
      logUser: {},
      varfiglio: ''
    },
    components: {
      SimpleList,
      Login
    },
    data: function() {
      return {
        error: '',
        success: '',
        showLogin: true
      }
    },
    methods: {
      showTrue: function(){
        console.log('showTrue: function(){');
        this.showLogin = false;
      }
    }
  }
</script>

<style lang="sass">
  body {
    font-family: Open Sans, sans-serif;
  }
</style>
