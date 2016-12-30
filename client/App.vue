<template>
  <div class="containerLogin">
    <h2>{{varfiglio}}</h2>
    <label for="idUsername">Username:</label>
    <input id="idUsername" type="text" placeholder="username" v-model.trim="logUser.username">
    <label for="idPassword">Password:</label>
    <input id="idPassword" type="password" placeholder="password" v-model.trim="logUser.password">
    <button v-on:click="loginClick" >Login</button>
    <div class="errore">
      {{error}}
    </div>
    <div class="success">
      {{success}}
    </div>

    <hr>
    <hr>
    <SimpleList></SimpleList>
    <hr>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <hr>
    <router-view></router-view>
    <hr><hr>
    showLogin : {{showLogin}}
    <div v-if="showLogin">
     <Login v-on:logged="showTrue"></Login> 
   </div>
   <div v-else>
    <SimpleList></SimpleList>
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
      },
      loginClick: function(){
        if(this.logUser && this.logUser.username && this.logUser.password){
          let user = {};
          user.username = this.logUser.username;
          user.password = this.logUser.password;
          this.axios({
            method: 'POST',
            url: '/api/login',
            data: user
          }).then((response) => {
            const result = response.data;
            this.showLogin = !result.success;
            if(result.success){
             this.success = 'A CANNONE!!!!!' + result.message;
             this.error = '';
           } else {
            this.success = '';
            this.error = result.message;
          }

          console.log("aaaaaaaaaaa"+this.showLogin);

        }, (response) => {
          this.error = response.data
          this.success = ''
        })
        } else {
          this.error = 'L\'username e la password sono obbligatori!';
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
