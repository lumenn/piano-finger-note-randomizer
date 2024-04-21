<script>
	import '../main.css';
</script>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-black;
		@apply text-white;
	}
</style>
