<script>
	import exercises from '../../../static/exercises.json';

	let keys = Object.keys(exercises);
	let values = Object.values(exercises);
	let entries = Object.entries(exercises);
</script>

<svelte:head>
	<title>Excercises - FitSchedule</title>
</svelte:head>

<div class="excercises-container">
	<h1>Excercises</h1>
	<!-- {#each entries as [key, value]}
		<div>{key} - {value}</div>
	{/each} -->
	{#each keys as key}
		<p>{key}</p>
	{/each}
</div>
