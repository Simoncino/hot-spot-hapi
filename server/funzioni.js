"use strict";

module.exports = {
	scrivi: function(request){
    let x = 5;
    console.log(x + '!');
    console.log('scrivi',request.payload)
  },


  loginHandler: function (request, reply) {
    const user = request.payload
    let result = {
      success: false,
      message: 'PORCA MADONNA'
    };
    if(user && user.username && user.password){
      result.success = true;
      result.message = 'Loggato correttamente dio FROCIO';
    }
    reply(result);
  }

}

