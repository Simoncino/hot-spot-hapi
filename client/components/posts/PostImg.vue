<template>
  <div class="postImg">
    <iframe v-bind:src="imgSrc" v-bind:alt="photo.nome">
    </iframe>
  </div>
  
</template>

<script>
  export default {
    props: {
      post: {}
    },
    created: function(){
      this.getImageMeta();
    },
    data: function() {
      return {
        photo: {}
      }
    },
    computed: {
      imgSrc: function(){
        const url = 'http://localhost:3000/api/post/'+this.post.id+'/photoImg/'+this.post.photo.id;
        console.log(url);
        return url;
      }
    },
    methods: {
      getImageMeta: function(){
        this.axios({
          method: 'GET',
          url: '/api/post/'+this.post.id+'/photos/'+this.post.photo.id
        }).then((response) => {
          const result = response.data;
          if(result){
            if(result.success){
              this.photo = result.item;
            } else {
              this.message = result.message;
              this.photo = {};
            }
            this.success = result.success;
          }

        }, (response) => {
          this.error = response.data
          this.success = ''
        })
      }
    }
  }
</script>

<style lang="sass">
.postImg {
    border: 1px solid blue;
    color: #6f6f6f;
    clear: both;
    padding: 0.5em;
  }
</style>
