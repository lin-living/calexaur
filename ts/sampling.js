function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

function samples(samplesize=10,ranges=[0,100],fn=x=>x^2,dev=1){
    r = (ranges[1] - ranges[0])/samplesize;
    for (let i=0;i<samplesize;i++) {
        let x = ranges[0] + r * (i);
        //console.log(`id:${i},x: ${x},y: ${(fn(x) + randn_bm() * dev).toFixed(2)} `);
        console.log(` ${x.toFixed(2)},${(fn(x) + randn_bm() * dev).toFixed(2)}`);
    }

}
// console.warn( `y=x^2 + n(0,1)`)
// samples();

// console.warn( `y=x^2 + 2x +10 + n(0,2)`)
// samples(10,[0,5],x=>x^2 + 2*x +4 ,1.414);

console.warn( `y=x^2 + 2x +10 + n(0,2)`)
samples(10,[0,5],x=>2*x +4 ,Math.sqrt(2));