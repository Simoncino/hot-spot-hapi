"use strict";

module.exports = {
	scrivi: function(request){
    console.log('scrivi',request.payload)
  },


  loginHandler: function (request, reply) {
    let user = request.payload
    let result = {
      success: false,
      message: 'PORCA MADONNA non sei loggato COJONE!!!!!!'
    };
    if(user && user.username && user.password 
        && user.username == 'a' && user.password == 'a'){
      result.success = true;
      result.message = 'Loggato correttamente dio FROCIO';
      const user = require('./json_fake/user.json');
      user.random = Math.floor((Math.random() * 10) + 1);
      result.user = user;
    }
    reply(result);
  }

  ,getSimpleListHandler: function (request, reply) {
    const lista = require('./json_fake/ruotaDelTempo.json');
    const result = {
      success: true,
      message: '',
      lista: lista
    };
    reply(result);
  }
  
  ,postStreamingHandler: function (request, reply) {
    const lista = require('./json_fake/ruotaDelTempo.json');

    let result = {
      success: false,
      message: 'Errore nel caricamento della lista',
      lista: []
    };

    if(lista){
      result = {
        success: true,
        message: '',
        lista: lista
      };

    } 

    reply(result);
  }

  ,usersListHandler: function (request, reply) {
    let lista = require('./json_fake/userList.json');

    for(let i in lista){
        console.log(i, lista[i].random);
        lista[i].random = Math.floor((Math.random() * 10) + 1);
      }

    const result = {
      success: true,
      message: '',
      lista: lista
    };
    reply(result);
  }
}

