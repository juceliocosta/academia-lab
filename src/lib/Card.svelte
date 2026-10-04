<script>
	import { getAssetUrl } from '#lib/assets.js';
	import { page } from '$app/state';
	let archive = page.route.id;
	let { info } = $props();
</script>

<a href="{archive}/{info.slug}" class="card">
	<img src={getAssetUrl(info.img)} alt={info.name} width="120" height="120" />
	<h2>{info.name}</h2>
</a>

<style>
	img {
		object-fit: cover;
		border-radius: 4px;
	}
	h2 {
		padding: 8px 16px;
	}
	.card {
		border: 1px solid var(--subtle);
		padding: 4px;
		display: flex;
		align-items: center;
		border-radius: 8px;
	}
	a {
		color: #fff;
		transition: 250ms;
	}
	a:hover {
		border-color: #fff;
		transition: 125ms;
	}
</style>
