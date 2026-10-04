<script>
	import { page } from '$app/state';
	import { globalModalidades } from '#lib/stores/modalidades.svelte.js';
	import IntroSingle from '#lib/IntroSingle.svelte';

	let modalidade = $derived(page.params.slug);
	let data = $derived(globalModalidades.find((e) => e.slug === modalidade));
</script>

<IntroSingle {data} />
<!-- <h1>{data?.name ?? 'Modalidade não encontrada'}</h1> -->
