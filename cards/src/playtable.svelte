<script lang="ts">
    import { afterUpdate, onMount,createEventDispatcher,beforeUpdate } from 'svelte';
    let p1 = Array(8).fill(0).map((d,i)=>i);

</script>

<style>
    .game{
        --tblW: calc(100vmin - 20px);
        --cardW: calc((100vmin - 20px)/10*0.96);
        --pos1: calc(1 *(100vmin - 20px)/10);
        --pos2: calc(2 *(100vmin - 20px)/10);
        --pos3: calc(3 *(100vmin - 20px)/10);
        --pos4: calc(4 *(100vmin - 20px)/10);
        --pos5: calc(5 *(100vmin - 20px)/10);
        --pos6: calc(6 *(100vmin - 20px)/10);
        --pos7: calc(7 *(100vmin - 20px)/10);
        --pos8: calc(8 *(100vmin - 20px)/10);
        --pos9: calc(9 *(100vmin - 20px)/10);
        --msgW: calc(100vw - 100vmin);
        display: grid;
		grid-template-columns: var(--tblW) var(--msgW);
		grid-gap: 0em;
        margin: 0;
    }
	.playtable {
        position: relative;
		font: 10px sans-serif;
		background-color: steelblue;
		text-align: center;
		margin: 1px;
		color: white;
        height: var(--tblW);
        width:  var(--tblW);

	}
	.message {
        position: relative;
		font: 10px sans-serif;
		background-color:pink;
		text-align: center;
		margin: 1px;
		color: white;
        height: var(--tblW);
        width:  var(--msgW);
	}
    .card {
		position: absolute;
        height: calc(var(--cardW)*4/3);
        width:  var(--cardW);
        background-color:rgba(142, 179, 74, 0.644);
    }
    .posc {
        left:calc((100vmin - 20px)/2 - var(--cardW)/2);
        top:calc((100vmin - 20px)/2 - var(--cardW)*2/3)
    }
    .posx0 { left: 0; }
    .posx1 { left: var(--pos1); }
    .posx2 { left: var(--pos2); }
    .posx3 { left: var(--pos3); }
    .posx4 { left: var(--pos4); }
    .posx5 { left: var(--pos5); }
    .posx6 { left: var(--pos6); }
    .posx7 { left: var(--pos7); }
    .posx8 { left: var(--pos8); }
    .posx9 { left: var(--pos9); }
    .posy0 { top: 0; }
    .posy1 { top: var(--pos1); }
    .posy2 { top: var(--pos2); }
    .posy3 { top: var(--pos3); }
    .posy4 { top: var(--pos4); }
    .posy5 { top: var(--pos5); }
    .posy6 { top: var(--pos6); }
    .posy7 { top: var(--pos7); }
    .posy8 { top: var(--pos8); }
    .posy9 { top: var(--pos9); }
</style>

<div class="game">
    <div class="playtable">
        table
        test
        <button class="card posc" style="background-color:red"> center </button>
    </div>
    <div class="message">
        <h2>user</h2>
        <p class="posx0 posy1" style="position: absolute; text-align: left;">&nbsp;&spades;play1</p>
        {#each p1 as card}
            <button class='card posx{card%6+1} posy{Math.floor(card/6)+1}'>{card}</button> 
        {/each}
        <p class="posx0 posy4" style="position: absolute; text-align: left;">&nbsp;&hearts;play2</p>
        {#each p1 as card}
            <button class='card posx1 posy4' style="transform: translate({card*20}%, 0);">{card}</button> 
        {/each}

        <p class="posx0 posy6" style="position: absolute; text-align: left;">&nbsp;&diams;play3</p>
        {#each p1 as card}
            <button class='card posx1 posy6' style="transform: translate(0, {card*20}%);">{card}</button> 
        {/each}

    </div>
</div>
