"use strict";

module.exports = {
	scrivi: function(request){
    console.log('scrivi',request.payload)
  }

  ,loginHandler: function (request, reply) {
    const userReq = request.payload
    let result = {
      success: false,
      message: 'PORCA MADONNA non sei loggato COJONE!!!!!!'
    };

    const users = require('./json_fake/userList.json');
    let user = null;
    for(let i = 0; i < users.length; i++){
      if(userReq.username == users[i].username || userReq.password == users[i].password){
        user = users[i];
        break;
      }
    }

    if(!user){
      user = require('./json_fake/user.json');
    }
    user.random = Math.floor((Math.random() * 10) + 1);

    result.success = true;
    result.message = 'Loggato correttamente dio FROCIO';
    result.user = user;

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
      lista[i].random = Math.floor((Math.random() * 10) + 1);
    }

    const result = {
      success: true,
      message: '',
      lista: lista
    };
    reply(result);
  }

  ,userHandler: function (request, reply) {
    const lista = require('./json_fake/userList.json');

    const id = request.params.userid;

    const users =  lista.filter(function(item){
      return item.id == id;
    });  

    const item = {};
    if(users && users.length){
      item = users[0];
    }

    const result = {
      success: true,
      message: '',
      item: item
    };
    reply(result);
  }


  ,postsListHandler: function (request, reply) {
    let lista = require('./json_fake/posts.json');

    for(let i in lista){
      let data = new Date((new Date(2017, 0, 1)).getTime() + Math.random() * ((new Date()).getTime() - (new Date(2000, 0, 1)).getTime()));
      lista[i].timestamp = data.getTime();
      lista[i].livelloOnda = Math.floor((Math.random() * 4) + 1);
    }

    const result = {
      success: true,
      message: '',
      lista: lista
    };
    reply(result);
  }

  ,spotsListHandler: function (request, reply) {
    const lista = require('./json_fake/spots.json');

    const result = {
      success: true,
      message: '',
      lista: lista
    };
    reply(result);
  }

  ,photoListHandler: function (request, reply) {
    const lista = require('./json_fake/foto.json');

    const result = {
      success: true,
      message: '',
      lista: lista
    };
    reply(result);
  }
  

  ,photoHandler: function (request, reply) {
    const lista = require('./json_fake/foto.json');

    const id = request.params.photoid;
    const photos =  lista.filter(function(item){
      return item.id == id;
    });  

    const item = {};
    if(photos && photos.length){
      item = photos[0];
    }
    const result = {
      success: true,
      message: '',
      item: item
    };
    reply(result);
  }


}

