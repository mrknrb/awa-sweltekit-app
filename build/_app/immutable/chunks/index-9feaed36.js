function j(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function S(){return Object.create(null)}function p(t){t.forEach(B)}function F(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return j;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(I(n,e))}function ut(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,s){if(c){const l=L(n,e,i,s);t.p(l,c)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function G(){$=!0}function J(){$=!1}function K(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=u?c+1:K(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const s=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);s.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<s.length&&l[r].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(l[r],f)}}function Q(t,n){if($){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){$&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function ht(){return N(" ")}function mt(){return N("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){X(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const s=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||s.push(o.name)}s.forEach(l=>c.removeAttribute(l))},()=>i(n))}function bt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function gt(t){return Z(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $t(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,e,i,n),c}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function Et(t){E().$$.on_mount.push(t)}function vt(t){E().$$.after_update.push(t)}function kt(){const t=E();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const s=tt(n,e,{cancelable:i});return c.slice().forEach(l=>{l.call(t,s)}),!s.defaultPrevented}return!0}}function wt(t,n){return E().$$.context.set(t,n),n}function jt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const _=[],M=[],g=[],P=[],T=Promise.resolve();let k=!1;function D(){k||(k=!0,T.then(q))}function Nt(){return D(),T}function w(t){g.push(t)}const v=new Set;let b=0;function q(){const t=m;do{for(;b<_.length;){const n=_[b];b++,h(n),nt(n.$$)}for(h(null),_.length=0,b=0;M.length;)M.pop()();for(let n=0;n<g.length;n+=1){const e=g[n];v.has(e)||(v.add(e),e())}g.length=0}while(_.length);for(;P.length;)P.pop()();k=!1,v.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const x=new Set;let d;function At(){d={r:0,c:[],p:d}}function Ct(){d.r||p(d.c),d=d.p}function et(t,n){t&&t.i&&(x.delete(t),t.i(n))}function St(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Mt(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const l=t[s],o=n[s];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[s]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function Bt(t){t&&t.c()}function Lt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||w(()=>{const r=s.map(B).filter(F);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(w)}function ct(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(_.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,c,s,l,o=[-1]){const r=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:j,not_equal:c,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,y,...A)=>{const C=A.length?A[0]:y;return u.ctx&&c(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&rt(t,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const a=V(n.target);u.fragment&&u.fragment.l(a),a.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),J(),q()}h(r)}class Tt{$destroy(){ct(this,1),this.$destroy=j}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Pt as A,ct as B,z as C,Nt as D,j as E,ut as F,Q as G,at as H,ft as I,st as J,pt as K,p as L,jt as M,_t as N,kt as O,ot as P,Tt as S,V as a,yt as b,bt as c,R as d,U as e,$t as f,dt as g,Z as h,Ot as i,xt as j,ht as k,mt as l,gt as m,At as n,St as o,Ct as p,et as q,wt as r,lt as s,N as t,vt as u,Et as v,Bt as w,Lt as x,it as y,Mt as z};
