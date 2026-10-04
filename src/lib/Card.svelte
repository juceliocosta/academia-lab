<script>
	import { getAssetUrl } from '#lib/assets.js';
	let { info } = $props();
</script>

<h1>Nome: {info.name}</h1>
<h2>Slug: {info.slug}</h2>
<img src={getAssetUrl(info.img)} alt={info.name} />
