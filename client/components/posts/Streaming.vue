<template>
	<div class="containerStreaming">
		<h1>Streaming dei post</h1>
		<template v-if="success">
			<Post v-for="(item, index) in streaming" 
			v-bind:elemento="item" 
			v-bind:indice="index" ></Post>

		</template>
		<template v-else>
			<p class="error">{{message}}</p>
		</template>

	</div>

</template>

<script>
	import Post from './Post.vue'

	export default {
		props: {
			logUser: {}
		}, 
		created: function(){
			this.getLista();
		},
		data: function() {
			return {
				streaming : []
				,success : false
				,message : ''
			}
		},
		components: {
			Post
		},
		methods: {
			getLista: function(){
				this.axios({
					method: 'GET',
					url: '/api/spot/1/posts'
				}).then((response) => {
					const result = response.data;
					if(result){
						if(result.success){
							this.streaming = result.lista;
						} else {
							this.message = result.message;
							this.streaming = [];
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


</script>

<style lang="sass">
	.containerStreaming{
		width: 40%;
		max-height: 400px;
		overflow-x: hidden;
		margin: 0 auto;
	}
	.error{
		color: red;
	}
</style>