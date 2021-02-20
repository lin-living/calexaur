function setJSONValue(json:any,path:string,value:any) {
    if (path.indexOf('.') < 0){
        if (typeof value === 'object') json[path] = JSON.parse(JSON.stringify(value));
        else json[path] = value;
    }
    else {
        let p1 = path.split('.')[0]; 
        let p2 = path.substr(path.indexOf('.')+1,1000);
        json[p1] = json[p1] || {};
        setJSONValue(json[p1],p2,value);
    };
}
function getJSONValue(json:any,path:string) {
    if (path.indexOf('.') < 0){
        return json[path];
    }
    else {
        let p1 = path.split('.')[0]; 
        let p2 = path.substr(path.indexOf('.')+1,1000);
        json[p1] = json[p1] || {};
        return getJSONValue(json[p1],p2);
    };
}
    
    
export type card_status="deck"|"open"|"close"|"discard";
export type card_info ={status:card_status,img?:string,attr?:{}};

export class deck{
    cards:card_info[] =[];
    total: number;
    status: { deck: number[]; open: any[]; close: any[]; discard: any[]; };
    constructor (cs:card_info[]){
        this.init(cs);
    }
    init(cs=this.cards){
        this.cards = cs.map(d=>{ return {status:"deck", img:d.img, attr:d.attr}})
        this.total = cs.length;
        this.status = {deck:this.cards.map((d,i)=>i),open:[],close:[],discard:[]}
    }
    setCardValue(id:number,attrname:"",value){
        let card = this.cards[id]
        setJSONValue(card,attrname,value);
    }
    changeStatus(id:number,from:card_status,to:card_status){
        let card = this.cards[id];
        if (card.status !== from ) return `from status error ${from}/${card.status}`;
        let idx = this.status[from].indexOf(id);  this.status[from].splice(idx,1);
        this.status[to].push(id);
        card.status = to;
    }
    deal(num=1,status:card_status="close"){
        let out;
        if (num >1) out = this.deal(--num,status);
        else out =[];
        if (this.status.deck.length > 0){
            let idx = Math.floor(Math.random()* this.status.deck.length);
            out.push(this.cards[this.status.deck[idx]]);        
            this.changeStatus(this.status.deck[idx],"deck",status);
        } 
        return out;
    }
}

