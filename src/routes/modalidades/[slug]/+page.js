import { error } from '@sveltejs/kit';
import { globalModalidades } from '#lib/stores/modalidades.svelte.js';

export function load({ params }) {
	const modalidade = globalModalidades.find((item) => item.slug === params.slug);
	if (!modalidade) {
		error(404, 'Modalidade não encontrada');
	}
	return modalidade;
}
