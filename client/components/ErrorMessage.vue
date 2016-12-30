<templete>
	<div class="erore">
		|||||----{{messaggio}}----|||||
	</div>
	
</templete>

<script>
	export default {
		props: {
			messaggio: ''
		}
	}
	
</script>

<style lang="sass">
	.erore{
		border: 3px solid gray;
		h1 {
			color: red;
		}
	}

</style>