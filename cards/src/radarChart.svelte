<script>

    export const tk = 5;
    export let scores = [15, 20, 30, 40, 50, 60, 30,40];
    export let width = 60;
    export let aixnames = [ "政治", "國際", "社會", "財經", "環保", "選舉", "體育", "娛樂" ];
    let maxScore;
    $: maxScore = Math.max(...scores);
    let vbW;
    $: vbW = Math.floor(maxScore * 1.2);

    let aixs, aix_score, scores_path, angs;
    $: aixs = aixnames.map((d, i) => {
        return {
            idx: i,
            name: d,
            ang1: (360 / aixnames.length) * i,
            ang2: ((2 * Math.PI) / aixnames.length) * i,
        };
    });
    $: angs = (2 * Math.PI) / aixnames.length;
    $: aix_scores = scores.map((d, i) => {
        return {
            idx: i,
            score: d,
            cx: d * Math.cos(angs * i),
            cy: d * Math.sin(angs * i),
        };
    });
    $: scores_path =
        aix_scores.reduce((a, b, i) => {
            return (a += `${b.cx},${b.cy} `);
        }, "M") + "Z";
    let Ticks;
    $: Ticks = Array.from({ length: tk + 1 }, (_, i) => (i * maxScore) / tk);
</script>

<style>
    svg {
        position: relative;
        /* background-color: #ebc8c8f6; */
        width: calc(var(--width) * 1vw);
        height: calc(var(--width) * 1vw);
    }
    .aix {
        fill: none;
        stroke: grey;
        stroke-width: calc(var(--width) * 0.001vw);
    }
    .aix text {
        fill: black;
        stroke: grey;
        stroke-width: 0;
    }
</style>

<svg
    viewport="{-vbW}, {-vbW}, {vbW * 2}, {vbW * 2}"
    viewBox="{-vbW}, {-vbW}, {vbW * 2}, {vbW * 2}"
    style="--width:{width};">
    <g class="aix">
        {#each Ticks as tk}
            <circle cx="0" cy="0" r={tk} />
        {/each}
        {#each aixs as ax}
            <line x1="0" y1="0" x2={Math.cos(ax.ang2) * maxScore} y2={Math.sin(ax.ang2) * maxScore} />
            <text
                font-size={vbW / 12}
                x={Math.cos(ax.ang2) * vbW * 0.9 - vbW / 10}
                y={Math.sin(ax.ang2) * vbW * 0.9}
                transform="rotate(
                    {ax.ang1 + 90} 
                    {Math.cos(ax.ang2) * vbW * 0.9} 	
                    {Math.sin(ax.ang2) * vbW * 0.9})">
                {ax.name}
            </text>
        {/each}
    </g>
    <g class="score">
        {#each aix_scores as sc}
            <circle cx={sc.cx} cy={sc.cy} r={maxScore / 50} />
        {/each}
    </g>
    <path d={scores_path} stroke="black" fill="rgb(255,255,0,0.3)" />
</svg>
