<template>
  <div class="containerLogin">
    <label for="idUsername">Username:</label>
    <input id="idUsername" type="text" placeholder="username" v-model.trim="logUser.username">
    <label for="idPassword">Password:</label>
    <input id="idPassword" type="password" placeholder="password" v-model.trim="logUser.password">
    <button v-on:click="loginClicke" >Login</button>
  </div>
  
</template>

<script>
/*import ErrorMessage from './ErrorMessage.vue'*/
  export default {
    props: {
      logUser: {}
    },
    components: {
      /*ErrorMessage*/
    },
    data: function() {
      return {
        error: ''
        ,success: ''
      }
    },
    methods: {
      loginClicke: function(){
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
             this.showLogin = true;
             this.$emit('logged');
             this.logUser = result.user
           } else {
            this.success = '';
            this.error = result.message;
            this.showLogin = false;
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
