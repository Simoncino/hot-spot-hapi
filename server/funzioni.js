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

  ,getSimpleList: function (request, reply) {
    const lista = [
      {nome:"Rand al'Thor", link:"https://it.wikipedia.org/wiki/Rand_al%27Thor", note:""}
      ,{nome:"Matrim Cauthon", link:"https://it.wikipedia.org/wiki/Matrim_Cauthon", note:""}
      ,{nome:"Perrin Aybara", link:"https://it.wikipedia.org/wiki/Perrin_Aybara", note:""}
      ,{nome:"Egwene al'Vere", link:"https://it.wikipedia.org/wiki/Egwene_al%27Vere", note:""}
      ,{nome:"Nynaeve al'Meara", link:"https://it.wikipedia.org/wiki/Nynaeve_al%27Meara", note:""}
      ,{nome:"Elayne Trakand", link:"https://it.wikipedia.org/wiki/Elayne_Trakand", note:""}
      ,{nome:"Moiraine Damodred", link:"https://it.wikipedia.org/wiki/Moiraine_Damodred", note:""}
      ,{nome:"al'Lan Mandragoran", link:"https://it.wikipedia.org/wiki/Lan_Mandragoran", note:""}
    ];
    const result = {
      success: true,
      message: '',
      lista: lista
    };
    reply(result);
  }

}

