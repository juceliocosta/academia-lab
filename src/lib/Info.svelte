<script>
	import iconPlus from '#lib/assets/icon-plus.svg';
	let { question = '', answer = '', active = false } = $props();
	let handleActive = () => {
		active = !active;
	};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="info" onclick={handleActive} onkeyup={handleActive} tabindex="0">
	<div class="question">
		<h3>{question}</h3>
		<img src={iconPlus} alt="" width="20" />
	</div>
	{#if active}
		<div class="answer">
			<p>{answer}</p>
		</div>
	{/if}
</div>

<style>
	.question {
		display: flex;
		align-items: center;
		border: 1px solid var(--subtle);
		padding: 17px 16px;
		height: 70px;
	}
	img {
		margin-left: auto;
	}
	.answer {
		padding: 0 16px;
		border-left: 1px solid var(--feat);
		margin: 16px 0px;
	}
</style>
