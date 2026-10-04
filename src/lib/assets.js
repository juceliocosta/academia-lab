// O Vite importa todas as imagens de src/lib/assets/ e obtém suas URLs processadas
const assets = import.meta.glob('#lib/assets/*.{png,jpg,jpeg,svg,webp}', {
	eager: true,
	query: '?url',
	import: 'default'
});

// Função para buscar a URL final da imagem pelo nome do arquivo
export function getAssetUrl(filename = '') {
	const path = `/src/lib/assets/${filename}`;
	return assets[path] || '';
}
