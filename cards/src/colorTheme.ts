export class cTheme{
    mainColor: string;
    rgb: [number,number,number];
    shades: string[];
    tints: string[];
    triadic: string[];
    analogous: string[];
    complementary: string[];
    monochromatic: string[];
    monochromatic2: string[];
    hsv: [number,number,number];
    private colorString(i:number){
        if (i> 255) i = 255;
        else if (i<0 ) i=0;
        let r = "00"+ Math.floor(i).toString(16);
        return r.substr(r.length-2,2);
    };
    test = console.log;
    private rgb2hsv(r:number, g:number, b:number):[number,number,number];
    private rgb2hsv(rgb:[number,number,number]):[number,number,number];
    private rgb2hsv(rgb:string):[number,number,number];
    private rgb2hsv(rgb:{r:number, g:number, b:number}):[number,number,number];

    private rgb2hsv(r,g?,b?) {
        if (typeof r =="object") 
           if (r.r) return this.rgb2hsv(r.r,r.g,r.b);
           else return this.rgb2hsv(r[0],r[1],r[2]);
        if (typeof r == "string") 
            if (r.length == 6) return this.rgb2hsv(parseInt(r.substr(0,2),16),parseInt(r.substr(2,2),16),parseInt(r.substr(4,2),16));
            else if (r.length == 7) this.rgb2hsv(parseInt(r.substr(1,2),16),parseInt(r.substr(3,2),16),parseInt(r.substr(5,2),16));
            else return [0,0,0];
        if (arguments.length == 3) {
            var max = Math.max(r, g, b), min = Math.min(r, g, b),
            d = max - min,
            h,
            s = (max === 0 ? 0 : d / max),
            v = max / 255;
            switch (max) {
                case min: h = 0; break;
                case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
                case g: h = (b - r) + d * 2; h /= 6 * d; break;
                case b: h = (r - g) + d * 4; h /= 6 * d; break;
            }
            return [h,s,v]; //0<= h,s,v <=1
        }            
        return [0,0,0];
    };

    private hsv2rgb(hsv:[number,number,number]):[number,number,number];
    private hsv2rgb(h:number,s:number,v:number):[number,number,number];

    private hsv2rgb(h, s?, v?) {
        if (arguments.length == 1) return this.hsv2rgb(h[0],h[1],h[2]);
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return [ Math.round(r * 255), Math.round(g * 255), Math.round(b * 255) ]
        ;
    }
    colorNameToHex(color) {
        let d = document.createElement("div");
        d.style.color = color;
        document.body.appendChild(d);
        return (<string>window.getComputedStyle(d).color).split('(')[1].split(')')[0].split(',')
        .map(d=>{ let r="0"+parseInt(d).toString(16); return r.substr(r.length-2,2)}).join("");
    }

    setMainColor(mainColor:number | string = "445566"){
        if (typeof mainColor == "number")
            this.mainColor = mainColor.toString(16);
        else {
            this.mainColor = this.colorNameToHex(mainColor);
        };
        if ( this.mainColor == "212529" && typeof mainColor == "string")
        if (mainColor.length == 7) this.mainColor = mainColor.substr(1,6);
        else if (mainColor.length == 6) this.mainColor = mainColor;
        else this.mainColor = "ff0000";

        this.rgb = [parseInt(this.mainColor.substr(0,2),16),parseInt(this.mainColor.substr(2,2),16),parseInt(this.mainColor.substr(4,2),16)];
        this.rgb.forEach((d,i)=>{ if (d==NaN) this.rgb[i]= 255});
        this.hsv = this.rgb2hsv(this.rgb);
        this.shades = [];
        let split = this.rgb.map(d=>{return d/10});
        for (let i=0;i<10;i++) 
          this.shades.push("#" +this.rgb.map((d,ii)=>{return this.colorString(d-split[ii]*i)}).join(""));
        this.shades.push("000000");  
        split = this.rgb.map(d=>{return (256 - d)/10});
        this.tints =[];
        for (let i=0;i<10;i++) 
          this.tints.push("#" +this.rgb.map((d,ii)=>{return this.colorString(d+split[ii]*i)}).join(""));
        this.tints.push("#ffffff"); 
        let t = this.rgb[0]+this.rgb[1]+this.rgb[2];

        split = this.rgb.map(d=>{return Math.min(26, Math.round(1+ 16 * d /t))});
        this.monochromatic = [
            this.tints[6],this.tints[4],this.tints[2],this.tints[0],
            this.shades[2],this.shades[4],this.shades[6]
        ];
        // for (let i=-3;i<4;i++) 
        //     this.monochromatic.push("#" +this.rgb.map((d,ii)=>{return this.colorString((d+split[ii]*i))}).join(""));

        split = [32,32,32];
        this.monochromatic2 = [];
        for (let i=-3;i<4;i++) 
            this.monochromatic2.push("#" +this.rgb.map((d,ii)=>{return this.colorString((d-split[ii]*i))}).join(""));
    

        this.triadic = [
            `#${this.rgb.map(d=>this.colorString(d)).join("")}`,
            `#${ [this.rgb[2],this.rgb[0],this.rgb[1]].map(d=>this.colorString(d)).join("")}`,
            `#${ [this.rgb[1],this.rgb[2],this.rgb[0]].map(d=>this.colorString(d)).join("")}`
        ];
        this.analogous = [
            `#${this.rgb.map(d=>this.colorString(d)).join("")}`,
            `#${this.hsv2rgb.apply(null,[this.hsv[0]+30/360,this.hsv[1],this.hsv[2]]).map(d=>this.colorString(d)).join("")}`,
            `#${this.hsv2rgb.apply(null,[this.hsv[0]+60/360,this.hsv[1],this.hsv[2]]).map(d=>this.colorString(d)).join("")}`,
        ];
        let bound = Math.max.apply(null,this.rgb) + Math.min.apply(null,this.rgb) ;
        this.complementary =[
            `#${this.rgb.map(d=>this.colorString(d)).join("")}`,
            `#${ [bound - this.rgb[0],bound - this.rgb[1],bound - this.rgb[2]].map(d=>this.colorString(d)).join("")}`,
        ];


    }
    constructor(mainColor:number | string = "445566"){
        this.setMainColor(mainColor);
    }
}

export function tempColor(temp) {
    let t = temp / 350;
    t = Math.max(0, Math.min(1, t));
    return "rgb("
        + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", "
        + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", "
        + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66)))))))
        + ")";
  };
