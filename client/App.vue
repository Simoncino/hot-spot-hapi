<template>
  <div class="containerLogin">
    <h2>App.vue</h2>
    <template v-if="showLogin">
      <Login v-on:logged="setUtente"></Login> 
    </template>
    <template v-else>
      <h4>creare la home.vue</h4>
      <router-view></router-view>
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
    created: function(){
      let loggedUser = this.s_info.loggedUser;
      if(loggedUser.username){
        showLogin = false;
      }
    },
    props: {
      s_info: {}
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
      setUtente: function(user){
        if(user){
         this.showLogin = false;
         this.logUser = user;
         this.s_info.loggedUser = user;
         /*this.router.push('foo')*/
       }

     }
   }
 }
</script>

<style lang="sass">
  body {
    font-family: Open Sans, sans-serif;
  }
</style>
