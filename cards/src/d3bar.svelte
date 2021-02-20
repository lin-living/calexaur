<script>
	import { afterUpdate, onMount } from 'svelte';
	import * as d3 from 'd3';
	export var data = [30, 86, 168, 281, 303, 365,300];
	
	let el;

	onMount(() => {
		let max = d3.max(data);
		let sum = d3.sum(data);
		d3.select(el)
			.selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.style("width", function(d) {
				return (d/max*90).toFixed(1) + 'vw';
			})
			.text(function(d) {
				return (d/sum*100).toFixed(2) +'%';
			});
	});
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

<div bind:this={el} class="chart"></div>