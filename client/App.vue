<template>
  <div class="containerLogin">
    <h2>{{varfiglio}}</h2>
    showLogin : {{showLogin}}
    <template v-if="showLogin">
      <Login v-on:logged="showTrue"></Login> 
    </template>
    <template v-else>
      <SimpleList></SimpleList>
      <hr>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <hr>
      <router-view></router-view>
      <hr>
      <ErrorMessage :messaggio="success"></ErrorMessage>
    </template>
  </div>
</template>

<script>
  import SimpleList from './components/SimpleList.vue'
  import Login from './components/Login.vue'
  import ErrorMessage from './components/ErrorMessage.vue'

  export default {
    props: {
      logUser: {},
      varfiglio: ''
    },
    components: {
      SimpleList,
      Login,
      ErrorMessage
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
