<template>
	<div class="erore">
		|||||----{{messaggio}}----|||||
	</div>
</template>

<script>
	export default {
		props: {
			messaggio: ''
		}
	}
</script>

<style lang="sass">
	.erore{
		margin: 0 auto;
		color: red;
	}

</style>