<template>
  <div class="containerLogin">
    <h2>{{varfiglio}}</h2>
    <template v-if="showLogin">
      <Login v-on:logged="showTrue" :logUser="logUser"></Login> 
    </template>
    <template v-else>
      <h1>router-view</h1>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-view></router-view>
      <hr>
      <Streaming :logUser="logUser"></Streaming>
      <hr>
      <SimpleList></SimpleList>
      <hr>
      <h4>PrintUtente</h4>
      <pre>{{logUser}}</pre>
    </template>
  </div>
</template>

<script>
  import SimpleList from './components/SimpleList.vue'
  import Login from './components/Login.vue'
  import Streaming from './components/Posts/Streaming.vue'

  export default {
    props: {
      varfiglio: ''
    },
    components: {
      SimpleList
      ,Login
      ,Streaming
    },
    data: function() {
      return {
        error: ''
        ,success: ''
        ,showLogin: true
        ,logUser: {}
      }
    },
    methods: {
      showTrue: function(){
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
