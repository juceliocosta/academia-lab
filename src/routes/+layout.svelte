<script>
	import favicon from '#lib/assets/favicon.svg';
	import '../global.css';
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import Header from '#lib/Header.svelte';
	import Footer from '#lib/Footer.svelte';
	import Credits from '#lib/Credits.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
	<Header />
	<div class="main">
		{@render children()}
	</div>
	<div class="footer__container">
		<Footer />
	</div>
	<div class="credits__container">
		<Credits />
	</div>
</div>

<style>
	.layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.footer__container {
		margin-bottom: auto;
	}
	.credits__container {
		margin-bottom: -70px;
	}
</style>
