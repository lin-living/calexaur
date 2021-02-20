<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

    const dispatch = createEventDispatcher();
    let start=new Date();
    export let monthdays:{day:string,density:number,attr?:{}}[] =[];
    export let width=33;
    export let dInfo:{year:number,month:number}={year:0,month:0};
    let weekdays =[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    let monthnames=[ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ]                   
    onMount(()=>{
        // width = Math.floor(width*0.14)*7;
        dInfo.year = start.getFullYear();
        dInfo.month = start.getMonth();
        monthdays =[];
        for (let i=0;i<new Date(dInfo.year,dInfo.month,1).getDay();i++) monthdays.push({day:"",density:0});
        for (let i=1;i<new Date(dInfo.year,dInfo.month+1,0).getDate()+1;i++) monthdays.push({day:i.toFixed(0),density:Math.min(255,Math.floor(Math.random()*25)*4)});
    });

    const priMon= ()=>{
            dInfo.month--; 
            if(dInfo.month<0) {dInfo.year--;dInfo.month=11};
            dispatch("monthChanged",{dInfo:dInfo})
        };
    const nextMon=()=>{
            dInfo.month++; 
            if(dInfo.month>11) {dInfo.year++;dInfo.month=0};
            dispatch("monthChanged",{dInfo:dInfo})
        };

</script>

<style>
    .contain{
        /* position: absolute; */
        height: calc(var(--card_width)*0.75vw);
        /* width: 30vw; */
        width: calc(var(--card_width)*0.98vw);
        font-size: calc(var(--card_width)*0.045vw);
        border-radius:0.5vw;
        /* left: 50%;
        top:50%;
        transform: translate(-50%, -50%); */
        background-color: #E09416;
        padding: 1vw;
    }
	.weekly, .mon-days {
        display: grid;
		grid-template-columns: repeat(7, calc(var(--card_width)*0.14vw));
        grid-template-rows: repeat(1, var(--row_height));
		grid-gap: 0em;
        margin: 0;
    }
    .weekly span{
        text-align: center;
    }

	.mon-days button {
        margin: 0;
        border: 1;
	}
</style>


<div class="contain" style="--card_width: {width}">
    <div style="text-align: center; padding:0">
        <span >
            <input type="number" bind:value={dInfo.year} style="width:20%;background-color: #E09416;border:0">
            <button on:click={priMon} style="background-color: #E09416;border:0">&laquo</button>{monthnames[dInfo.month]}<button on:click={nextMon} style="background-color: #E09416;border:0">&raquo</button>
        </span>
    </div>
    
    <div class="weekly" style="--col_width:{Math.floor(width/7)+'vw'};--row_height:{width/18+'vw'}">
        {#each weekdays as wk}
            <span>{wk}</span>
        {/each}
    </div>
    
    <div class="mon-days" style="--col_width:{Math.floor(width/7)+'vw'};--row_height:auto">
        {#each monthdays as md}
            <button on:click={()=>{
                //console.log(new Date(dInfo.year,dInfo.month,parseInt(md.day)))
                    dispatch("daySelected",{year:dInfo.year,month:dInfo.month,day:parseInt(md.day)})
                }} style="background-color:rgb(255,{255-md.density*0.4},{255-md.density})">{md.day}</button>
        {/each}
    </div>
    
</div>
