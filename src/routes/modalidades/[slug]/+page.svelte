<script>
	import { page } from '$app/state';
	import { globalModalidades } from '#lib/stores/modalidades.svelte.js';

	let modalidade = $derived(page.params.slug);
	let data = $derived(globalModalidades.find((e) => e.slug === modalidade));
</script>

<h1>{data?.name ?? 'Modalidade não encontrada'}</h1>
