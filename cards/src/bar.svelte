<script lang="ts">
    import { afterUpdate, onMount,createEventDispatcher,beforeUpdate } from 'svelte';
	export let data = [30, 86, 168, 281, 303, 365,300];
	
	let bars=[];
	let max;
	let sum;
	$: max = data.reduce((a,b)=>(a>b)?a:b,0);
	$: sum =  data.reduce((a,b)=>a+b,0);
	// afterUpdate(() => {
	// 	 max = data.reduce((a,b)=>(a>b)?a:b,0);
	// 	 sum = data.reduce((a,b)=>a+b,0);
	// 	bars= data.map(d=>{return `<div style="width:${d/max*90}vw">[${d.toFixed(2)}] ${(d/sum*100).toFixed(1)}%</div>`});
	// });
</script>

<style>
	.chart :global(div) {
		font: 10px sans-serif;
		background-color: steelblue;
		text-align: right;
		padding: 3px;
		margin: 1px;
		color: white;
	}
</style>

<!-- <div class="chart">
	{#each bars as bar}
		{@html bar}
	{/each}
</div> -->
<br>
<div class="chart">
	{#each data as d}
	<div style="width:{d/max*90}vw">[{d.toFixed(2)}]{(d/sum*200).toFixed(2)}%</div>
	{/each}
</div>