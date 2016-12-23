<template>
  <div class="containerLogin">
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

  </div>
  
</template>

<script>
  export default {
    data: function() {
      return {
        logUser: {},
        error: '',
        success: ''
      }
    },
    methods: {
     /* helloCall: function() {
        this.axios.get('/api/call').then((response) => {
          this.api = response.data.message
          this.msg += response.data.bestemmia + " FIARPEOLO, oppure PAOLO"
        }, (response) => {
          this.error = response.data
        })
      },*/
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
            if(result.success){
             this.success = 'A CANNONE!!!!!' + result.message;
             this.error = '';
           } else {
            this.success = '';
            this.error = result.message;
          }

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
