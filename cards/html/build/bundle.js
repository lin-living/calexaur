!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function p(){return i(" ")}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function d(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let g;function m(t){g=t}const $=[],y=[],b=[],x=[],v=Promise.resolve();let _=!1;function z(t){b.push(t)}let k=!1;const C=new Set;function w(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];m(e),A(e.$$)}for(m(null),$.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];C.has(e)||(C.add(e),e())}b.length=0}while($.length);for(;x.length;)x.pop()();_=!1,k=!1,C.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const E=new Set;function j(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,v.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(r,c,s,f,a,i,p=[-1]){const h=g;m(r);const d=r.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:p,skip_bound:!1};let $=!1;if(d.ctx=s?s(r,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),$&&j(r,t)),e})):[],d.update(),$=!0,o(d.before_update),d.fragment=!!f&&f(d.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();c.intro&&((y=r.$$.fragment)&&y.i&&(E.delete(y),y.i(b))),function(t,n,r){const{fragment:c,on_mount:s,on_destroy:u,after_update:f}=t.$$;c&&c.m(n,r),z((()=>{const n=s.map(e).filter(l);u?u.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(z)}(r,c.target,c.anchor),w()}var y,b;m(h)}function N(t,e,n){const o=t.slice();return o[1]=e[n],o}function O(t,e,n){const o=t.slice();return o[1]=e[n],o}function P(t,e,n){const o=t.slice();return o[1]=e[n],o}function S(e){let n,o,l=e[1]+"";return{c(){n=a("button"),o=i(l),h(n,"class","card posx"+(e[1]%6+1)+" posy"+(Math.floor(e[1]/6)+1)+" svelte-1ec1hz0")},m(t,e){s(t,n,e),c(n,o)},p:t,d(t){t&&u(n)}}}function T(e){let n,o,l=e[1]+"";return{c(){n=a("button"),o=i(l),h(n,"class","card posx1 posy4 svelte-1ec1hz0"),d(n,"transform","translate("+20*e[1]+"%, 0)")},m(t,e){s(t,n,e),c(n,o)},p:t,d(t){t&&u(n)}}}function q(e){let n,o,l=e[1]+"";return{c(){n=a("button"),o=i(l),h(n,"class","card posx1 posy6 svelte-1ec1hz0"),d(n,"transform","translate(0, "+20*e[1]+"%)")},m(t,e){s(t,n,e),c(n,o)},p:t,d(t){t&&u(n)}}}function B(e){let n,o,l,r,i,g,m,$,y,b,x,v,_,z,k=e[0],C=[];for(let t=0;t<k.length;t+=1)C[t]=S(P(e,k,t));let w=e[0],A=[];for(let t=0;t<w.length;t+=1)A[t]=T(O(e,w,t));let E=e[0],j=[];for(let t=0;t<E.length;t+=1)j[t]=q(N(e,E,t));return{c(){n=a("div"),o=a("div"),o.innerHTML='table\n        test\n        <button class="card posc svelte-1ec1hz0" style="background-color:red">center</button>',l=p(),r=a("div"),i=a("h2"),i.textContent="user",g=p(),m=a("p"),m.textContent=" ♠play1",$=p();for(let t=0;t<C.length;t+=1)C[t].c();y=p(),b=a("p"),b.textContent=" ♥play2",x=p();for(let t=0;t<A.length;t+=1)A[t].c();v=p(),_=a("p"),_.textContent=" ♦play3",z=p();for(let t=0;t<j.length;t+=1)j[t].c();h(o,"class","playtable svelte-1ec1hz0"),h(m,"class","posx0 posy1 svelte-1ec1hz0"),d(m,"position","absolute"),d(m,"text-align","left"),h(b,"class","posx0 posy4 svelte-1ec1hz0"),d(b,"position","absolute"),d(b,"text-align","left"),h(_,"class","posx0 posy6 svelte-1ec1hz0"),d(_,"position","absolute"),d(_,"text-align","left"),h(r,"class","message svelte-1ec1hz0"),h(n,"class","game svelte-1ec1hz0")},m(t,e){s(t,n,e),c(n,o),c(n,l),c(n,r),c(r,i),c(r,g),c(r,m),c(r,$);for(let t=0;t<C.length;t+=1)C[t].m(r,null);c(r,y),c(r,b),c(r,x);for(let t=0;t<A.length;t+=1)A[t].m(r,null);c(r,v),c(r,_),c(r,z);for(let t=0;t<j.length;t+=1)j[t].m(r,null)},p(t,[e]){if(1&e){let n;for(k=t[0],n=0;n<k.length;n+=1){const o=P(t,k,n);C[n]?C[n].p(o,e):(C[n]=S(o),C[n].c(),C[n].m(r,y))}for(;n<C.length;n+=1)C[n].d(1);C.length=k.length}if(1&e){let n;for(w=t[0],n=0;n<w.length;n+=1){const o=O(t,w,n);A[n]?A[n].p(o,e):(A[n]=T(o),A[n].c(),A[n].m(r,v))}for(;n<A.length;n+=1)A[n].d(1);A.length=w.length}if(1&e){let n;for(E=t[0],n=0;n<E.length;n+=1){const o=N(t,E,n);j[n]?j[n].p(o,e):(j[n]=q(o),j[n].c(),j[n].m(r,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=E.length}},i:t,o:t,d(t){t&&u(n),f(C,t),f(A,t),f(j,t)}}}function H(t){return[Array(8).fill(0).map(((t,e)=>e))]}new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),M(this,t,H,B,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map