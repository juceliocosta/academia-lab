<script>
	import favicon from '#lib/assets/favicon.svg';
	import '../global.css';
	import '@fontsource-variable/roboto-condensed';
	import '@fontsource-variable/cabin';
	import Header from '#lib/Header.svelte';
	import Footer from '#lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children()}

<Footer />
