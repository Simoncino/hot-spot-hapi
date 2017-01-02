<template>
	<div>
		<h1>Streaming dei post</h1>
		<template v-if="success">
			<table cellpadding="2" cellspacing="2" class="streaming">

				<Post v-for="(item, index) in streaming" 
				v-bind:elemento="item" 
				v-bind:indice="index" ></Post>
			</table>
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

				console.log("per vedere se esiste l'utente passatogli: ", this.logUser);

				this.axios({
					method: 'GET',
					url: '/api/postStreaming'
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
	.streaming{
		width: 40%;
	}
	.error{
		color: red;
	}
</style>