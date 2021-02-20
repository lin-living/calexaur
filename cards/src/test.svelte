<script lang="ts">
	import {card_info, deck} from "./deck";
	let dk = new deck([
		{status:"deck",attr:{name:"gene"}},
		{status:"deck",attr:{name:"amy"}},
		{status:"deck",attr:{name:"martin"}},
		{status:"deck",attr:{name:"bety"}},
		{status:"deck",attr:{name:"gene"}},
		{status:"deck",attr:{name:"amy"}},
		{status:"deck",attr:{name:"martin"}},
		{status:"deck",attr:{name:"bety"}}
	]);
	let p1 = dk.deal(5) as card_info[];
</script>

<style>
</style>
	
<h1>
	test
</h1>

<div>
{#each p1 as p}
	<p>{p.attr["name"]}</p>
	
{/each}

</div>