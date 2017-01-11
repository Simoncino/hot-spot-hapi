'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

const funzioni = require('./funzioni.js');

const server = new Hapi.Server();
server.connection({
  port: 3000
});

// Register webpack HMR, fallback to development environment
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {

  const WebpackConfig = require('../config/webpack.config.js'); // Webpack config
  const HapiWebpackDevMiddleware = require('hapi-webpack-dev-middleware');
  const HapiWebpackHotMiddleware = require('hapi-webpack-hot-middleware');

  server.register([{
    register: HapiWebpackDevMiddleware,
    options: {
      config: WebpackConfig,
      options: {
        noInfo: true,
        publicPath: WebpackConfig.output.publicPath,
        stats: {
          colors: true
        }
      }
    }
  }, {
    register: HapiWebpackHotMiddleware
  }], function (err) {
    if (err) {
      throw err;
    }
  });

}

server.register([Inert], function (err) {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/assets/{filepath*}',
    config: {
      auth: false,
      cache: {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public'
      }
    },
    handler: {
      directory: {
        path: __dirname + '/public/assets/',
        listing: true,
        index: false
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/build/{filepath*}',
    config: {
      auth: false,
      cache: {
        expiresIn: 24 * 60 * 60 * 1000,
        privacy: 'public'
      }
    },
    handler: {
      directory: {
        path: __dirname + '/public/build/',
        listing: false,
        index: false
      }
    }
  });

  // Example api call
  server.route({
    method: 'GET',
    path: '/api/call',
    handler: function (request, reply) {
      reply({
        message: 'Hello!',
        bestemmia: 'Madonna vacca!'
      })
    }
  });

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: function (request, reply) {
      console.log('request.params.path:',request.params.path)
      reply.file('../public/index.html');
    }
  });

  server.route({
    method: 'POST',
    path: '/api/login',
    handler: funzioni.loginHandler 
  });

  server.route({
    method: 'GET',
    path: '/api/simpleList',
    handler: funzioni.getSimpleListHandler 
  });

  server.route({
    method: 'GET',
    path: '/api/postStreaming',
    handler: funzioni.postStreamingHandler 
  });

  server.route({
    method: 'GET',
    path: '/api/usersList',
    handler: funzioni.usersListHandler
  });

  server.route({
    method: 'GET',
    path: '/api/user/{userid}',
    handler: funzioni.userHandler
  });

  server.route({
    method: 'GET',
    path: '/api/spot/{spotid}/posts',
    handler: funzioni.postsListHandler
  });

  server.route({
    method: 'GET',
    path: '/api/spots',
    handler: funzioni.spotsListHandler
  });


  server.route({
    method: 'GET',
    path: '/api/post/{postid}/photos',
    handler: funzioni.photoListHandler
  });

  server.route({
    method: 'GET',
    path: '/api/post/{postid}/photos/{photoid}',
    handler: funzioni.photoHandler
  });

  server.route({
    method: 'GET',
    path: '/api/post/{postid}/photosImg/{photoid}',
    handler: funzioni.photoImgHandler
  });

});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
