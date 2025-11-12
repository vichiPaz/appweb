const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-DBsMLQvw.js","assets/HomeView-EkVjdq4_.css","assets/AdministracionView-AsHEFAE_.js","assets/AdministracionView-DLAu-JKJ.css","assets/CarritoView-CbdBsc1S.js","assets/CarritoView-VCsUQYu3.css","assets/EditarView-C1wojdB5.js","assets/EditarView-nBzlNJuk.css","assets/LoginView-C5I_L7Vd.js","assets/LoginView-RnWH4VUO.css","assets/RegisterView-DpoKP3z0.js","assets/RegisterView-D8XNuWUV.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},ss=[],rn=()=>{},hp=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nl=t=>t.startsWith("onUpdate:"),dt=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fy=Object.prototype.hasOwnProperty,we=(t,e)=>Fy.call(t,e),se=Array.isArray,is=t=>Bi(t)==="[object Map]",bs=t=>Bi(t)==="[object Set]",xh=t=>Bi(t)==="[object Date]",le=t=>typeof t=="function",Ue=t=>typeof t=="string",fn=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",fp=t=>(Pe(t)||le(t))&&le(t.then)&&le(t.catch),dp=Object.prototype.toString,Bi=t=>dp.call(t),By=t=>Bi(t).slice(8,-1),pp=t=>Bi(t)==="[object Object]",xl=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ci=Dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},jy=/-\w/g,Ut=Ea(t=>t.replace(jy,e=>e.slice(1).toUpperCase())),$y=/\B([A-Z])/g,Ur=Ea(t=>t.replace($y,"-$1").toLowerCase()),va=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),gc=Ea(t=>t?`on${va(t)}`:""),Zn=(t,e)=>!Object.is(t,e),So=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mh;const Ta=()=>Mh||(Mh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ml(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?zy(r):Ml(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Pe(t))return t}const qy=/;(?![^(]*\))/g,Hy=/:([^]+)/,Gy=/\/\*[^]*?\*\//g;function zy(t){const e={};return t.replace(Gy,"").split(qy).forEach(n=>{if(n){const r=n.split(Hy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ia(t){let e="";if(Ue(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Ia(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ky=Dl(Wy);function mp(t){return!!t||t===""}function Qy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ji(t[r],e[r]);return n}function ji(t,e){if(t===e)return!0;let n=xh(t),r=xh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?Qy(t,e):!1;if(n=Pe(t),r=Pe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ji(t[o],e[o]))return!1}}return String(t)===String(e)}function Ll(t,e){return t.findIndex(n=>ji(n,e))}const _p=t=>!!(t&&t.__v_isRef===!0),jo=t=>Ue(t)?t:t==null?"":se(t)||Pe(t)&&(t.toString===dp||!le(t.toString))?_p(t)?jo(t.value):JSON.stringify(t,yp,2):String(t),yp=(t,e)=>_p(e)?yp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[mc(r,i)+" =>"]=s,n),{})}:bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mc(n))}:fn(e)?mc(e):Pe(e)&&!se(e)&&!pp(e)?String(e):e,mc=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vt;class Yy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){++this._on===1&&(this.prevScope=vt,vt=this)}off(){this._on>0&&--this._on===0&&(vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jy(){return vt}let Oe;const _c=new WeakSet;class Ep{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vt&&vt.active&&vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_c.has(this)&&(_c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lh(this),Ip(this);const e=Oe,n=$t;Oe=this,$t=!0;try{return this.fn()}finally{wp(this),Oe=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,Lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qc(this)&&this.run()}get dirty(){return qc(this)}}let vp=0,li,ui;function Tp(t,e=!1){if(t.flags|=8,e){t.next=ui,ui=t;return}t.next=li,li=t}function Ul(){vp++}function Fl(){if(--vp>0)return;if(ui){let e=ui;for(ui=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;li;){let e=li;for(li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ip(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bl(r),Xy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ap(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ap(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wi)||(t.globalVersion=wi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qc(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=$t;Oe=t,$t=!0;try{Ip(t);const s=t.fn(t._value);(e.version===0||Zn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,$t=r,wp(t),t.flags&=-3}}function Bl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const Sp=[];function bn(){Sp.push($t),$t=!1}function Rn(){const t=Sp.pop();$t=t===void 0?!0:t}function Lh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let wi=0;class Zy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!$t||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new Zy(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,bp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,wi++,this.notify(e)}notify(e){Ul();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fl()}}}function bp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)bp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Hc=new WeakMap,Pr=Symbol(""),Gc=Symbol(""),Ai=Symbol("");function lt(t,e,n){if($t&&Oe){let r=Hc.get(t);r||Hc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new jl),s.map=r,s.key=n),s.track()}}function vn(t,e,n,r,s,i){const o=Hc.get(t);if(!o){wi++;return}const c=l=>{l&&l.trigger()};if(Ul(),e==="clear")o.forEach(c);else{const l=se(t),u=l&&xl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ai||!fn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ai)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Pr)),is(t)&&c(o.get(Gc)));break;case"delete":l||(c(o.get(Pr)),is(t)&&c(o.get(Gc)));break;case"set":is(t)&&c(o.get(Pr));break}}Fl()}function Wr(t){const e=Ie(t);return e===t?e:(lt(e,"iterate",Ai),Mt(t)?e:e.map(et))}function wa(t){return lt(t=Ie(t),"iterate",Ai),t}const eE={__proto__:null,[Symbol.iterator](){return yc(this,Symbol.iterator,et)},concat(...t){return Wr(this).concat(...t.map(e=>se(e)?Wr(e):e))},entries(){return yc(this,"entries",t=>(t[1]=et(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(et),arguments)},find(t,e){return _n(this,"find",t,e,et,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,et,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ec(this,"includes",t)},indexOf(...t){return Ec(this,"indexOf",t)},join(t){return Wr(this).join(t)},lastIndexOf(...t){return Ec(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return Uh(this,"reduce",t,e)},reduceRight(t,...e){return Uh(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return Wr(this).toReversed()},toSorted(t){return Wr(this).toSorted(t)},toSpliced(...t){return Wr(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return yc(this,"values",et)}};function yc(t,e,n){const r=wa(t),s=r[e]();return r!==t&&!Mt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const tE=Array.prototype;function _n(t,e,n,r,s,i){const o=wa(t),c=o!==t&&!Mt(t),l=o[e];if(l!==tE[e]){const p=l.apply(t,i);return c?et(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,et(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Uh(t,e,n,r){const s=wa(t);let i=n;return s!==t&&(Mt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,et(c),l,t)}),s[e](i,...r)}function Ec(t,e,n){const r=Ie(t);lt(r,"iterate",Ai);const s=r[e](...n);return(s===-1||s===!1)&&Hl(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Ys(t,e,n=[]){bn(),Ul();const r=Ie(t)[e].apply(t,n);return Fl(),Rn(),r}const nE=Dl("__proto__,__v_isRef,__isVue"),Rp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function rE(t){fn(t)||(t=String(t));const e=Ie(this);return lt(e,"has",t),e.hasOwnProperty(t)}class Cp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?dE:Dp:i?kp:Op).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=eE[n]))return l;if(n==="hasOwnProperty")return rE}const c=Reflect.get(e,n,ft(e)?e:r);if((fn(n)?Rp.has(n):nE(n))||(s||lt(e,"get",n),i))return c;if(ft(c)){const l=o&&xl(n)?c:c.value;return s&&Pe(l)?Wc(l):l}return Pe(c)?s?Wc(c):$i(c):c}}class Pp extends Cp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=or(i);if(!Mt(r)&&!or(r)&&(i=Ie(i),r=Ie(r)),!se(e)&&ft(i)&&!ft(r))return l||(i.value=r),!0}const o=se(e)&&xl(n)?Number(n)<e.length:we(e,n),c=Reflect.set(e,n,r,ft(e)?e:s);return e===Ie(s)&&(o?Zn(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),c}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!Rp.has(n))&&lt(e,"has",n),r}ownKeys(e){return lt(e,"iterate",se(e)?"length":Pr),Reflect.ownKeys(e)}}class sE extends Cp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const iE=new Pp,oE=new sE,aE=new Pp(!0);const zc=t=>t,po=t=>Reflect.getPrototypeOf(t);function cE(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=is(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?zc:e?$o:et;return!e&&lt(i,"iterate",l?Gc:Pr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lE(t,e){const n={get(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);t||(Zn(s,c)&&lt(o,"get",s),lt(o,"get",c));const{has:l}=po(o),u=e?zc:t?$o:et;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&lt(Ie(s),"iterate",Pr),s.size},has(s){const i=this.__v_raw,o=Ie(i),c=Ie(s);return t||(Zn(s,c)&&lt(o,"has",s),lt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ie(c),u=e?zc:t?$o:et;return!t&&lt(l,"iterate",Pr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return dt(n,t?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(s){!e&&!Mt(s)&&!or(s)&&(s=Ie(s));const i=Ie(this);return po(i).has.call(i,s)||(i.add(s),vn(i,"add",s,s)),this},set(s,i){!e&&!Mt(i)&&!or(i)&&(i=Ie(i));const o=Ie(this),{has:c,get:l}=po(o);let u=c.call(o,s);u||(s=Ie(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?Zn(i,f)&&vn(o,"set",s,i):vn(o,"add",s,i),this},delete(s){const i=Ie(this),{has:o,get:c}=po(i);let l=o.call(i,s);l||(s=Ie(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&vn(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,o=s.clear();return i&&vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cE(s,t,e)}),n}function $l(t,e){const n=lE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,i)}const uE={get:$l(!1,!1)},hE={get:$l(!1,!0)},fE={get:$l(!0,!1)};const Op=new WeakMap,kp=new WeakMap,Dp=new WeakMap,dE=new WeakMap;function pE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gE(t){return t.__v_skip||!Object.isExtensible(t)?0:pE(By(t))}function $i(t){return or(t)?t:ql(t,!1,iE,uE,Op)}function Np(t){return ql(t,!1,aE,hE,kp)}function Wc(t){return ql(t,!0,oE,fE,Dp)}function ql(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=gE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function os(t){return or(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function Mt(t){return!!(t&&t.__v_isShallow)}function Hl(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function mE(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&gp(t,"__v_skip",!0),t}const et=t=>Pe(t)?$i(t):t,$o=t=>Pe(t)?Wc(t):t;function ft(t){return t?t.__v_isRef===!0:!1}function Gl(t){return Vp(t,!1)}function _E(t){return Vp(t,!0)}function Vp(t,e){return ft(t)?t:new yE(t,e)}class yE{constructor(e,n){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Mt(e)||or(e);e=r?e:Ie(e),Zn(e,n)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function nn(t){return ft(t)?t.value:t}const EE={get:(t,e,n)=>e==="__v_raw"?t:nn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function xp(t){return os(t)?t:new Proxy(t,EE)}class vE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Tp(this,!0),!0}get value(){const e=this.dep.track();return Ap(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function TE(t,e,n=!1){let r,s;return le(t)?r=t:(r=t.get,s=t.set),new vE(r,s,n)}const mo={},qo=new WeakMap;let Sr;function IE(t,e=!1,n=Sr){if(n){let r=qo.get(n);r||qo.set(n,r=[]),r.push(t)}}function wE(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=K=>s?K:Mt(K)||s===!1||s===0?Tn(K,1):Tn(K);let f,p,g,_,O=!1,k=!1;if(ft(t)?(p=()=>t.value,O=Mt(t)):os(t)?(p=()=>u(t),O=!0):se(t)?(k=!0,O=t.some(K=>os(K)||Mt(K)),p=()=>t.map(K=>{if(ft(K))return K.value;if(os(K))return u(K);if(le(K))return l?l(K,2):K()})):le(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){bn();try{g()}finally{Rn()}}const K=Sr;Sr=f;try{return l?l(t,3,[_]):t(_)}finally{Sr=K}}:p=rn,e&&s){const K=p,ue=s===!0?1/0:s;p=()=>Tn(K(),ue)}const V=Jy(),q=()=>{f.stop(),V&&V.active&&Vl(V.effects,f)};if(i&&e){const K=e;e=(...ue)=>{K(...ue),q()}}let $=k?new Array(t.length).fill(mo):mo;const H=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const ue=f.run();if(s||O||(k?ue.some((de,w)=>Zn(de,$[w])):Zn(ue,$))){g&&g();const de=Sr;Sr=f;try{const w=[ue,$===mo?void 0:k&&$[0]===mo?[]:$,_];$=ue,l?l(e,3,w):e(...w)}finally{Sr=de}}}else f.run()};return c&&c(H),f=new Ep(p),f.scheduler=o?()=>o(H,!1):H,_=K=>IE(K,!1,f),g=f.onStop=()=>{const K=qo.get(f);if(K){if(l)l(K,4);else for(const ue of K)ue();qo.delete(f)}},e?r?H(!0):$=f.run():o?o(H.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function Tn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ft(t))Tn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(bs(t)||is(t))t.forEach(r=>{Tn(r,e,n)});else if(pp(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Aa(s,e,n)}}function dn(t,e,n,r){if(le(t)){const s=qi(t,e,n,r);return s&&fp(s)&&s.catch(i=>{Aa(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(dn(t[i],e,n,r));return s}}function Aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){bn(),qi(i,null,10,[t,l,u]),Rn();return}}AE(t,n,s,r,o)}function AE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const _t=[];let Jt=-1;const as=[];let Hn=null,Jr=0;const Mp=Promise.resolve();let Ho=null;function zl(t){const e=Ho||Mp;return t?e.then(this?t.bind(this):t):e}function SE(t){let e=Jt+1,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Si(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wl(t){if(!(t.flags&1)){const e=Si(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=Si(n)?_t.push(t):_t.splice(SE(e),0,t),t.flags|=1,Lp()}}function Lp(){Ho||(Ho=Mp.then(Fp))}function bE(t){se(t)?as.push(...t):Hn&&t.id===-1?Hn.splice(Jr+1,0,t):t.flags&1||(as.push(t),t.flags|=1),Lp()}function Fh(t,e,n=Jt+1){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Up(t){if(as.length){const e=[...new Set(as)].sort((n,r)=>Si(n)-Si(r));if(as.length=0,Hn){Hn.push(...e);return}for(Hn=e,Jr=0;Jr<Hn.length;Jr++){const n=Hn[Jr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hn=null,Jr=0}}const Si=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fp(t){try{for(Jt=0;Jt<_t.length;Jt++){const e=_t[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<_t.length;Jt++){const e=_t[Jt];e&&(e.flags&=-2)}Jt=-1,_t.length=0,Up(),Ho=null,(_t.length||as.length)&&Fp()}}let Ot=null,Bp=null;function Go(t){const e=Ot;return Ot=t,Bp=t&&t.type.__scopeId||null,e}function Rr(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ko(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&Ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function A0(t,e){if(Ot===null)return t;const n=Ca(Ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ce]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(bn(),dn(l,n,8,[t.el,c,t,e]),Rn())}}const RE=Symbol("_vte"),CE=t=>t.__isTeleport,PE=Symbol("_leaveCb");function Kl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jp(t,e){return le(t)?dt({name:t.name},e,{setup:t}):t}function $p(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const zo=new WeakMap;function hi(t,e,n,r,s=!1){if(se(t)){t.forEach((O,k)=>hi(O,e&&(se(e)?e[k]:e),n,r,s));return}if(fi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&hi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ca(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,g=Ie(p),_=p===Ce?hp:O=>we(g,O);if(u!=null&&u!==l){if(Bh(e),Ue(u))f[u]=null,_(u)&&(p[u]=null);else if(ft(u)){u.value=null;const O=e;O.k&&(f[O.k]=null)}}if(le(l))qi(l,c,12,[o,f]);else{const O=Ue(l),k=ft(l);if(O||k){const V=()=>{if(t.f){const q=O?_(l)?p[l]:f[l]:l.value;if(s)se(q)&&Vl(q,i);else if(se(q))q.includes(i)||q.push(i);else if(O)f[l]=[i],_(l)&&(p[l]=f[l]);else{const $=[i];l.value=$,t.k&&(f[t.k]=$)}}else O?(f[l]=o,_(l)&&(p[l]=o)):k&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const q=()=>{V(),zo.delete(t)};q.id=-1,zo.set(t,q),Pt(q,n)}else Bh(t),V()}}}function Bh(t){const e=zo.get(t);e&&(e.flags|=8,zo.delete(t))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const fi=t=>!!t.type.__asyncLoader,qp=t=>t.type.__isKeepAlive;function OE(t,e){Hp(t,"a",e)}function kE(t,e){Hp(t,"da",e)}function Hp(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qp(s.parent.vnode)&&DE(r,e,n,s),s=s.parent}}function DE(t,e,n,r){const s=Sa(e,t,r,!0);zp(()=>{Vl(r[e],s)},n)}function Sa(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{bn();const c=Hi(n),l=dn(e,n,t,o);return c(),Rn(),l});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=ht)=>{(!Ri||t==="sp")&&Sa(t,(...r)=>e(...r),n)},NE=Dn("bm"),Gp=Dn("m"),VE=Dn("bu"),xE=Dn("u"),ME=Dn("bum"),zp=Dn("um"),LE=Dn("sp"),UE=Dn("rtg"),FE=Dn("rtc");function BE(t,e=ht){Sa("ec",t,e)}const Wp="components";function Ql(t,e){return Qp(Wp,t,!0,e)||t}const Kp=Symbol.for("v-ndc");function jE(t){return Ue(t)?Qp(Wp,t,!1)||t:t||Kp}function Qp(t,e,n=!0,r=!1){const s=Ot||ht;if(s){const i=s.type;{const c=Pv(i,!1);if(c&&(c===e||c===Ut(e)||c===va(Ut(e))))return i}const o=jh(s[t]||i[t],e)||jh(s.appContext[t],e);return!o&&r?i:o}}function jh(t,e){return t&&(t[e]||t[Ut(e)]||t[va(Ut(e))])}function S0(t,e,n,r){let s;const i=n,o=se(t);if(o||Ue(t)){const c=o&&os(t);let l=!1,u=!1;c&&(l=!Mt(t),u=or(t),t=wa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?$o(et(t[f])):et(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Kc=t=>t?mg(t)?Ca(t):Kc(t.parent):null,di=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kc(t.parent),$root:t=>Kc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Jp(t),$forceUpdate:t=>t.f||(t.f=()=>{Wl(t.update)}),$nextTick:t=>t.n||(t.n=zl.bind(t.proxy)),$watch:t=>cv.bind(t)}),vc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&we(t,e),$E={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vc(r,e))return o[e]=1,r[e];if(s!==Ce&&we(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&we(u,e))return o[e]=3,i[e];if(n!==Ce&&we(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const f=di[e];let p,g;if(f)return e==="$attrs"&&lt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&we(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,we(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vc(s,e)?(s[e]=n,!0):r!==Ce&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ce&&c[0]!=="$"&&we(t,c)||vc(e,c)||(l=i[0])&&we(l,c)||we(r,c)||we(di,c)||we(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $h(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function qE(t){const e=Jp(t),n=t.proxy,r=t.ctx;Qc=!1,e.beforeCreate&&qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:O,activated:k,deactivated:V,beforeDestroy:q,beforeUnmount:$,destroyed:H,unmounted:K,render:ue,renderTracked:de,renderTriggered:w,errorCaptured:E,serverPrefetch:T,expose:S,inheritAttrs:A,components:R,directives:v,filters:Fe}=e;if(u&&HE(u,r,null),o)for(const ve in o){const _e=o[ve];le(_e)&&(r[ve]=_e.bind(n))}if(s){const ve=s.call(n,n);Pe(ve)&&(t.data=$i(ve))}if(Qc=!0,i)for(const ve in i){const _e=i[ve],Et=le(_e)?_e.bind(n,n):le(_e.get)?_e.get.bind(n,n):rn,Wt=!le(_e)&&le(_e.set)?_e.set.bind(n):rn,St=It({get:Et,set:Wt});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>St.value,set:Je=>St.value=Je})}if(c)for(const ve in c)Yp(c[ve],r,n,ve);if(l){const ve=le(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(_e=>{bo(_e,ve[_e])})}f&&qh(f,t,"c");function Be(ve,_e){se(_e)?_e.forEach(Et=>ve(Et.bind(n))):_e&&ve(_e.bind(n))}if(Be(NE,p),Be(Gp,g),Be(VE,_),Be(xE,O),Be(OE,k),Be(kE,V),Be(BE,E),Be(FE,de),Be(UE,w),Be(ME,$),Be(zp,K),Be(LE,T),se(S))if(S.length){const ve=t.exposed||(t.exposed={});S.forEach(_e=>{Object.defineProperty(ve,_e,{get:()=>n[_e],set:Et=>n[_e]=Et,enumerable:!0})})}else t.exposed||(t.exposed={});ue&&t.render===rn&&(t.render=ue),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),v&&(t.directives=v),T&&$p(t)}function HE(t,e,n=rn){se(t)&&(t=Yc(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qh(t,e,n){dn(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yp(t,e,n,r){let s=r.includes(".")?ug(n,r):()=>n[r];if(Ue(t)){const i=e[t];le(i)&&ls(s,i)}else if(le(t))ls(s,t.bind(n));else if(Pe(t))if(se(t))t.forEach(i=>Yp(i,e,n,r));else{const i=le(t.handler)?t.handler.bind(n):e[t.handler];le(i)&&ls(s,i,t)}}function Jp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Wo(l,u,o,!0)),Wo(l,e,o)),Pe(e)&&i.set(e,l),l}function Wo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wo(t,i,n,!0),s&&s.forEach(o=>Wo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=GE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const GE={data:Hh,props:Gh,emits:Gh,methods:Zs,computed:Zs,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Zs,directives:Zs,watch:WE,provide:Hh,inject:zE};function Hh(t,e){return e?t?function(){return dt(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function zE(t,e){return Zs(Yc(t),Yc(e))}function Yc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?dt(Object.create(null),t,e):e}function Gh(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:dt(Object.create(null),$h(t),$h(e??{})):e}function WE(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function Xp(){return{app:null,config:{isNativeTag:hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KE=0;function QE(t,e){return function(r,s=null){le(r)||(r=dt({},r)),s!=null&&!Pe(s)&&(s=null);const i=Xp(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:KE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kv,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&le(f.install)?(o.add(f),f.install(u,...p)):le(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!l){const _=u._ceVNode||Ve(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),l=!0,u._container=f,f.__vue_app__=u,Ca(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(dn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=cs;cs=u;try{return f()}finally{cs=p}}};return u}}let cs=null;function bo(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=Av();if(r||cs){let s=cs?cs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&le(e)?e.call(r&&r.proxy):e}}const Zp={},eg=()=>Object.create(Zp),tg=t=>Object.getPrototypeOf(t)===Zp;function YE(t,e,n,r=!1){const s={},i=eg();t.propsDefaults=Object.create(null),ng(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Np(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function JE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ba(t.emitsOptions,g))continue;const _=e[g];if(l)if(we(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const O=Ut(g);s[O]=Jc(l,c,O,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{ng(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!we(e,p)&&((f=Ur(p))===p||!we(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Jc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!we(e,p))&&(delete i[p],u=!0)}u&&vn(t.attrs,"set","")}function ng(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ci(l))continue;const u=e[l];let f;s&&we(s,f=Ut(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:ba(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Jc(s,l,p,u[p],t,!we(u,p))}}return o}function Jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=we(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&le(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Hi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ur(n))&&(r=!0))}return r}const XE=new WeakMap;function rg(t,e,n=!1){const r=n?XE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!le(t)){const f=p=>{l=!0;const[g,_]=rg(p,e,!0);dt(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Pe(t)&&r.set(t,ss),ss;if(se(i))for(let f=0;f<i.length;f++){const p=Ut(i[f]);zh(p)&&(o[p]=Ce)}else if(i)for(const f in i){const p=Ut(f);if(zh(p)){const g=i[f],_=o[p]=se(g)||le(g)?{type:g}:dt({},g),O=_.type;let k=!1,V=!0;if(se(O))for(let q=0;q<O.length;++q){const $=O[q],H=le($)&&$.name;if(H==="Boolean"){k=!0;break}else H==="String"&&(V=!1)}else k=le(O)&&O.name==="Boolean";_[0]=k,_[1]=V,(k||we(_,"default"))&&c.push(p)}}const u=[o,c];return Pe(t)&&r.set(t,u),u}function zh(t){return t[0]!=="$"&&!ci(t)}const Yl=t=>t==="_"||t==="_ctx"||t==="$stable",Jl=t=>se(t)?t.map(en):[en(t)],ZE=(t,e,n)=>{if(e._n)return e;const r=Rr((...s)=>Jl(e(...s)),n);return r._c=!1,r},sg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Yl(s))continue;const i=t[s];if(le(i))e[s]=ZE(s,i,r);else if(i!=null){const o=Jl(i);e[s]=()=>o}}},ig=(t,e)=>{const n=Jl(e);t.slots.default=()=>n},og=(t,e,n)=>{for(const r in e)(n||!Yl(r))&&(t[r]=e[r])},ev=(t,e,n)=>{const r=t.slots=eg();if(t.vnode.shapeFlag&32){const s=e._;s?(og(r,e,n),n&&gp(r,"_",s,!0)):sg(e,r)}else e&&ig(t,e)},tv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:og(s,e,n):(i=!e.$stable,sg(e,s)),o=e}else e&&(ig(t,e),o={default:1});if(i)for(const c in s)!Yl(c)&&o[c]==null&&delete s[c]},Pt=mv;function nv(t){return rv(t)}function rv(t,e){const n=Ta();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=rn,insertStaticContent:O}=t,k=(y,I,b,x=null,L=null,D=null,z=void 0,j=null,F=!!I.dynamicChildren)=>{if(y===I)return;y&&!Js(y,I)&&(x=N(y),Je(y,L,D,!0),y=null),I.patchFlag===-2&&(F=!1,I.dynamicChildren=null);const{type:B,ref:ne,shapeFlag:Q}=I;switch(B){case Ra:V(y,I,b,x);break;case ar:q(y,I,b,x);break;case Ic:y==null&&$(I,b,x,z);break;case Zt:R(y,I,b,x,L,D,z,j,F);break;default:Q&1?ue(y,I,b,x,L,D,z,j,F):Q&6?v(y,I,b,x,L,D,z,j,F):(Q&64||Q&128)&&B.process(y,I,b,x,L,D,z,j,F,Z)}ne!=null&&L?hi(ne,y&&y.ref,D,I||y,!I):ne==null&&y&&y.ref!=null&&hi(y.ref,null,D,y,!0)},V=(y,I,b,x)=>{if(y==null)r(I.el=c(I.children),b,x);else{const L=I.el=y.el;I.children!==y.children&&u(L,I.children)}},q=(y,I,b,x)=>{y==null?r(I.el=l(I.children||""),b,x):I.el=y.el},$=(y,I,b,x)=>{[y.el,y.anchor]=O(y.children,I,b,x,y.el,y.anchor)},H=({el:y,anchor:I},b,x)=>{let L;for(;y&&y!==I;)L=g(y),r(y,b,x),y=L;r(I,b,x)},K=({el:y,anchor:I})=>{let b;for(;y&&y!==I;)b=g(y),s(y),y=b;s(I)},ue=(y,I,b,x,L,D,z,j,F)=>{I.type==="svg"?z="svg":I.type==="math"&&(z="mathml"),y==null?de(I,b,x,L,D,z,j,F):T(y,I,L,D,z,j,F)},de=(y,I,b,x,L,D,z,j)=>{let F,B;const{props:ne,shapeFlag:Q,transition:ee,dirs:re}=y;if(F=y.el=o(y.type,D,ne&&ne.is,ne),Q&8?f(F,y.children):Q&16&&E(y.children,F,null,x,L,Tc(y,D),z,j),re&&wr(y,null,x,"created"),w(F,y,y.scopeId,z,x),ne){for(const be in ne)be!=="value"&&!ci(be)&&i(F,be,null,ne[be],D,x);"value"in ne&&i(F,"value",null,ne.value,D),(B=ne.onVnodeBeforeMount)&&Yt(B,x,y)}re&&wr(y,null,x,"beforeMount");const fe=sv(L,ee);fe&&ee.beforeEnter(F),r(F,I,b),((B=ne&&ne.onVnodeMounted)||fe||re)&&Pt(()=>{B&&Yt(B,x,y),fe&&ee.enter(F),re&&wr(y,null,x,"mounted")},L)},w=(y,I,b,x,L)=>{if(b&&_(y,b),x)for(let D=0;D<x.length;D++)_(y,x[D]);if(L){let D=L.subTree;if(I===D||fg(D.type)&&(D.ssContent===I||D.ssFallback===I)){const z=L.vnode;w(y,z,z.scopeId,z.slotScopeIds,L.parent)}}},E=(y,I,b,x,L,D,z,j,F=0)=>{for(let B=F;B<y.length;B++){const ne=y[B]=j?Gn(y[B]):en(y[B]);k(null,ne,I,b,x,L,D,z,j)}},T=(y,I,b,x,L,D,z)=>{const j=I.el=y.el;let{patchFlag:F,dynamicChildren:B,dirs:ne}=I;F|=y.patchFlag&16;const Q=y.props||Ce,ee=I.props||Ce;let re;if(b&&Ar(b,!1),(re=ee.onVnodeBeforeUpdate)&&Yt(re,b,I,y),ne&&wr(I,y,b,"beforeUpdate"),b&&Ar(b,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(j,""),B?S(y.dynamicChildren,B,j,b,x,Tc(I,L),D):z||_e(y,I,j,null,b,x,Tc(I,L),D,!1),F>0){if(F&16)A(j,Q,ee,b,L);else if(F&2&&Q.class!==ee.class&&i(j,"class",null,ee.class,L),F&4&&i(j,"style",Q.style,ee.style,L),F&8){const fe=I.dynamicProps;for(let be=0;be<fe.length;be++){const Ee=fe[be],st=Q[Ee],it=ee[Ee];(it!==st||Ee==="value")&&i(j,Ee,st,it,L,b)}}F&1&&y.children!==I.children&&f(j,I.children)}else!z&&B==null&&A(j,Q,ee,b,L);((re=ee.onVnodeUpdated)||ne)&&Pt(()=>{re&&Yt(re,b,I,y),ne&&wr(I,y,b,"updated")},x)},S=(y,I,b,x,L,D,z)=>{for(let j=0;j<I.length;j++){const F=y[j],B=I[j],ne=F.el&&(F.type===Zt||!Js(F,B)||F.shapeFlag&198)?p(F.el):b;k(F,B,ne,null,x,L,D,z,!0)}},A=(y,I,b,x,L)=>{if(I!==b){if(I!==Ce)for(const D in I)!ci(D)&&!(D in b)&&i(y,D,I[D],null,L,x);for(const D in b){if(ci(D))continue;const z=b[D],j=I[D];z!==j&&D!=="value"&&i(y,D,j,z,L,x)}"value"in b&&i(y,"value",I.value,b.value,L)}},R=(y,I,b,x,L,D,z,j,F)=>{const B=I.el=y?y.el:c(""),ne=I.anchor=y?y.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:re}=I;re&&(j=j?j.concat(re):re),y==null?(r(B,b,x),r(ne,b,x),E(I.children||[],b,ne,L,D,z,j,F)):Q>0&&Q&64&&ee&&y.dynamicChildren?(S(y.dynamicChildren,ee,b,L,D,z,j),(I.key!=null||L&&I===L.subTree)&&ag(y,I,!0)):_e(y,I,b,ne,L,D,z,j,F)},v=(y,I,b,x,L,D,z,j,F)=>{I.slotScopeIds=j,y==null?I.shapeFlag&512?L.ctx.activate(I,b,x,z,F):Fe(I,b,x,L,D,z,F):yt(y,I,F)},Fe=(y,I,b,x,L,D,z)=>{const j=y.component=wv(y,x,L);if(qp(y)&&(j.ctx.renderer=Z),Sv(j,!1,z),j.asyncDep){if(L&&L.registerDep(j,Be,z),!y.el){const F=j.subTree=Ve(ar);q(null,F,I,b),y.placeholder=F.el}}else Be(j,y,I,b,L,D,z)},yt=(y,I,b)=>{const x=I.component=y.component;if(pv(y,I,b))if(x.asyncDep&&!x.asyncResolved){ve(x,I,b);return}else x.next=I,x.update();else I.el=y.el,x.vnode=I},Be=(y,I,b,x,L,D,z)=>{const j=()=>{if(y.isMounted){let{next:Q,bu:ee,u:re,parent:fe,vnode:be}=y;{const Rt=cg(y);if(Rt){Q&&(Q.el=be.el,ve(y,Q,z)),Rt.asyncDep.then(()=>{y.isUnmounted||j()});return}}let Ee=Q,st;Ar(y,!1),Q?(Q.el=be.el,ve(y,Q,z)):Q=be,ee&&So(ee),(st=Q.props&&Q.props.onVnodeBeforeUpdate)&&Yt(st,fe,Q,be),Ar(y,!0);const it=Kh(y),bt=y.subTree;y.subTree=it,k(bt,it,p(bt.el),N(bt),y,L,D),Q.el=it.el,Ee===null&&gv(y,it.el),re&&Pt(re,L),(st=Q.props&&Q.props.onVnodeUpdated)&&Pt(()=>Yt(st,fe,Q,be),L)}else{let Q;const{el:ee,props:re}=I,{bm:fe,m:be,parent:Ee,root:st,type:it}=y,bt=fi(I);Ar(y,!1),fe&&So(fe),!bt&&(Q=re&&re.onVnodeBeforeMount)&&Yt(Q,Ee,I),Ar(y,!0);{st.ce&&st.ce._def.shadowRoot!==!1&&st.ce._injectChildStyle(it);const Rt=y.subTree=Kh(y);k(null,Rt,b,x,y,L,D),I.el=Rt.el}if(be&&Pt(be,L),!bt&&(Q=re&&re.onVnodeMounted)){const Rt=I;Pt(()=>Yt(Q,Ee,Rt),L)}(I.shapeFlag&256||Ee&&fi(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&y.a&&Pt(y.a,L),y.isMounted=!0,I=b=x=null}};y.scope.on();const F=y.effect=new Ep(j);y.scope.off();const B=y.update=F.run.bind(F),ne=y.job=F.runIfDirty.bind(F);ne.i=y,ne.id=y.uid,F.scheduler=()=>Wl(ne),Ar(y,!0),B()},ve=(y,I,b)=>{I.component=y;const x=y.vnode.props;y.vnode=I,y.next=null,JE(y,I.props,x,b),tv(y,I.children,b),bn(),Fh(y),Rn()},_e=(y,I,b,x,L,D,z,j,F=!1)=>{const B=y&&y.children,ne=y?y.shapeFlag:0,Q=I.children,{patchFlag:ee,shapeFlag:re}=I;if(ee>0){if(ee&128){Wt(B,Q,b,x,L,D,z,j,F);return}else if(ee&256){Et(B,Q,b,x,L,D,z,j,F);return}}re&8?(ne&16&&rt(B,L,D),Q!==B&&f(b,Q)):ne&16?re&16?Wt(B,Q,b,x,L,D,z,j,F):rt(B,L,D,!0):(ne&8&&f(b,""),re&16&&E(Q,b,x,L,D,z,j,F))},Et=(y,I,b,x,L,D,z,j,F)=>{y=y||ss,I=I||ss;const B=y.length,ne=I.length,Q=Math.min(B,ne);let ee;for(ee=0;ee<Q;ee++){const re=I[ee]=F?Gn(I[ee]):en(I[ee]);k(y[ee],re,b,null,L,D,z,j,F)}B>ne?rt(y,L,D,!0,!1,Q):E(I,b,x,L,D,z,j,F,Q)},Wt=(y,I,b,x,L,D,z,j,F)=>{let B=0;const ne=I.length;let Q=y.length-1,ee=ne-1;for(;B<=Q&&B<=ee;){const re=y[B],fe=I[B]=F?Gn(I[B]):en(I[B]);if(Js(re,fe))k(re,fe,b,null,L,D,z,j,F);else break;B++}for(;B<=Q&&B<=ee;){const re=y[Q],fe=I[ee]=F?Gn(I[ee]):en(I[ee]);if(Js(re,fe))k(re,fe,b,null,L,D,z,j,F);else break;Q--,ee--}if(B>Q){if(B<=ee){const re=ee+1,fe=re<ne?I[re].el:x;for(;B<=ee;)k(null,I[B]=F?Gn(I[B]):en(I[B]),b,fe,L,D,z,j,F),B++}}else if(B>ee)for(;B<=Q;)Je(y[B],L,D,!0),B++;else{const re=B,fe=B,be=new Map;for(B=fe;B<=ee;B++){const Xe=I[B]=F?Gn(I[B]):en(I[B]);Xe.key!=null&&be.set(Xe.key,B)}let Ee,st=0;const it=ee-fe+1;let bt=!1,Rt=0;const Bt=new Array(it);for(B=0;B<it;B++)Bt[B]=0;for(B=re;B<=Q;B++){const Xe=y[B];if(st>=it){Je(Xe,L,D,!0);continue}let We;if(Xe.key!=null)We=be.get(Xe.key);else for(Ee=fe;Ee<=ee;Ee++)if(Bt[Ee-fe]===0&&Js(Xe,I[Ee])){We=Ee;break}We===void 0?Je(Xe,L,D,!0):(Bt[We-fe]=B+1,We>=Rt?Rt=We:bt=!0,k(Xe,I[We],b,null,L,D,z,j,F),st++)}const qr=bt?iv(Bt):ss;for(Ee=qr.length-1,B=it-1;B>=0;B--){const Xe=fe+B,We=I[Xe],xs=I[Xe+1],yr=Xe+1<ne?xs.el||xs.placeholder:x;Bt[B]===0?k(null,We,b,yr,L,D,z,j,F):bt&&(Ee<0||B!==qr[Ee]?St(We,b,yr,2):Ee--)}}},St=(y,I,b,x,L=null)=>{const{el:D,type:z,transition:j,children:F,shapeFlag:B}=y;if(B&6){St(y.component.subTree,I,b,x);return}if(B&128){y.suspense.move(I,b,x);return}if(B&64){z.move(y,I,b,Z);return}if(z===Zt){r(D,I,b);for(let Q=0;Q<F.length;Q++)St(F[Q],I,b,x);r(y.anchor,I,b);return}if(z===Ic){H(y,I,b);return}if(x!==2&&B&1&&j)if(x===0)j.beforeEnter(D),r(D,I,b),Pt(()=>j.enter(D),L);else{const{leave:Q,delayLeave:ee,afterLeave:re}=j,fe=()=>{y.ctx.isUnmounted?s(D):r(D,I,b)},be=()=>{D._isLeaving&&D[PE](!0),Q(D,()=>{fe(),re&&re()})};ee?ee(D,fe,be):be()}else r(D,I,b)},Je=(y,I,b,x=!1,L=!1)=>{const{type:D,props:z,ref:j,children:F,dynamicChildren:B,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:re}=y;if(Q===-2&&(L=!1),j!=null&&(bn(),hi(j,null,b,y,!0),Rn()),re!=null&&(I.renderCache[re]=void 0),ne&256){I.ctx.deactivate(y);return}const fe=ne&1&&ee,be=!fi(y);let Ee;if(be&&(Ee=z&&z.onVnodeBeforeUnmount)&&Yt(Ee,I,y),ne&6)Vn(y.component,b,x);else{if(ne&128){y.suspense.unmount(b,x);return}fe&&wr(y,null,I,"beforeUnmount"),ne&64?y.type.remove(y,I,b,Z,x):B&&!B.hasOnce&&(D!==Zt||Q>0&&Q&64)?rt(B,I,b,!1,!0):(D===Zt&&Q&384||!L&&ne&16)&&rt(F,I,b),x&&mn(y)}(be&&(Ee=z&&z.onVnodeUnmounted)||fe)&&Pt(()=>{Ee&&Yt(Ee,I,y),fe&&wr(y,null,I,"unmounted")},b)},mn=y=>{const{type:I,el:b,anchor:x,transition:L}=y;if(I===Zt){Ft(b,x);return}if(I===Ic){K(y);return}const D=()=>{s(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:j}=L,F=()=>z(b,D);j?j(y.el,D,F):F()}else D()},Ft=(y,I)=>{let b;for(;y!==I;)b=g(y),s(y),y=b;s(I)},Vn=(y,I,b)=>{const{bum:x,scope:L,job:D,subTree:z,um:j,m:F,a:B}=y;Wh(F),Wh(B),x&&So(x),L.stop(),D&&(D.flags|=8,Je(z,y,I,b)),j&&Pt(j,I),Pt(()=>{y.isUnmounted=!0},I)},rt=(y,I,b,x=!1,L=!1,D=0)=>{for(let z=D;z<y.length;z++)Je(y[z],I,b,x,L)},N=y=>{if(y.shapeFlag&6)return N(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const I=g(y.anchor||y.el),b=I&&I[RE];return b?g(b):I};let Y=!1;const W=(y,I,b)=>{y==null?I._vnode&&Je(I._vnode,null,null,!0):k(I._vnode||null,y,I,null,null,null,b),I._vnode=y,Y||(Y=!0,Fh(),Up(),Y=!1)},Z={p:k,um:Je,m:St,r:mn,mt:Fe,mc:E,pc:_e,pbc:S,n:N,o:t};return{render:W,hydrate:void 0,createApp:QE(W)}}function Tc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function sv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ag(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Gn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ag(o,c)),c.type===Ra&&c.patchFlag!==-1&&(c.el=o.el),c.type===ar&&!c.el&&(c.el=o.el)}}function iv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cg(e)}function Wh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ov=Symbol.for("v-scx"),av=()=>Lt(ov);function ls(t,e,n){return lg(t,e,n)}function lg(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:o}=n,c=dt({},n),l=e&&r||!e&&i!=="post";let u;if(Ri){if(i==="sync"){const _=av();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=rn,_.resume=rn,_.pause=rn,_}}const f=ht;c.call=(_,O,k)=>dn(_,f,O,k);let p=!1;i==="post"?c.scheduler=_=>{Pt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,O)=>{O?_():Wl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=wE(t,e,c);return Ri&&(u?u.push(g):l&&g()),g}function cv(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?ug(r,t):()=>r[t]:t.bind(r,r);let i;le(e)?i=e:(i=e.handler,n=e);const o=Hi(this),c=lg(s,i.bind(r),n);return o(),c}function ug(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Ur(e)}Modifiers`];function uv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&lv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),o.number&&(s=n.map(Bo)));let c,l=r[c=gc(e)]||r[c=gc(Ut(e))];!l&&i&&(l=r[c=gc(Ur(e))]),l&&dn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,dn(u,t,6,s)}}const hv=new WeakMap;function hg(t,e,n=!1){const r=n?hv:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!le(t)){const l=u=>{const f=hg(u,e,!0);f&&(c=!0,dt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Pe(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):dt(o,i),Pe(t)&&r.set(t,o),o)}function ba(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Ur(e))||we(t,e))}function Kh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:g,setupState:_,ctx:O,inheritAttrs:k}=t,V=Go(t);let q,$;try{if(n.shapeFlag&4){const K=s||r,ue=K;q=en(u.call(ue,K,f,p,_,g,O)),$=c}else{const K=e;q=en(K.length>1?K(p,{attrs:c,slots:o,emit:l}):K(p,null)),$=e.props?c:fv(c)}}catch(K){pi.length=0,Aa(K,t,1),q=Ve(ar)}let H=q;if($&&k!==!1){const K=Object.keys($),{shapeFlag:ue}=H;K.length&&ue&7&&(i&&K.some(Nl)&&($=dv($,i)),H=gs(H,$,!1,!0))}return n.dirs&&(H=gs(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Kl(H,n.transition),q=H,Go(V),q}const fv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},dv=(t,e)=>{const n={};for(const r in t)(!Nl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function pv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!ba(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Qh(r,o,u):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ba(n,i))return!0}return!1}function gv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const fg=t=>t.__isSuspense;function mv(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):bE(t)}const Zt=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),Ic=Symbol.for("v-stc"),pi=[];let kt=null;function Nt(t=!1){pi.push(kt=t?null:[])}function _v(){pi.pop(),kt=pi[pi.length-1]||null}let bi=1;function Ko(t,e=!1){bi+=t,t<0&&kt&&e&&(kt.hasOnce=!0)}function dg(t){return t.dynamicChildren=bi>0?kt||ss:null,_v(),bi>0&&kt&&kt.push(t),t}function tn(t,e,n,r,s,i){return dg(at(t,e,n,r,s,i,!0))}function pg(t,e,n,r,s){return dg(Ve(t,e,n,r,s,!0))}function Qo(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const gg=({key:t})=>t??null,Ro=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||ft(t)||le(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function at(t,e=null,n=null,r=0,s=null,i=t===Zt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gg(e),ref:e&&Ro(e),scopeId:Bp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return c?(Xl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),bi>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const Ve=yv;function yv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Kp)&&(t=ar),Qo(t)){const c=gs(t,e,!0);return n&&Xl(c,n),bi>0&&!i&&kt&&(c.shapeFlag&6?kt[kt.indexOf(t)]=c:kt.push(c)),c.patchFlag=-2,c}if(Ov(t)&&(t=t.__vccOpts),e){e=Ev(e);let{class:c,style:l}=e;c&&!Ue(c)&&(e.class=Ia(c)),Pe(l)&&(Hl(l)&&!se(l)&&(l=dt({},l)),e.style=Ml(l))}const o=Ue(t)?1:fg(t)?128:CE(t)?64:Pe(t)?4:le(t)?2:0;return at(t,e,n,r,s,o,i,!0)}function Ev(t){return t?Hl(t)||tg(t)?dt({},t):t:null}function gs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?vv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&gg(u),ref:e&&e.ref?n&&i?se(i)?i.concat(Ro(e)):[i,Ro(e)]:Ro(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Zt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Kl(f,l.clone(f)),f}function ei(t=" ",e=0){return Ve(Ra,null,t,e)}function Yh(t="",e=!1){return e?(Nt(),pg(ar,null,t)):Ve(ar,null,t)}function en(t){return t==null||typeof t=="boolean"?Ve(ar):se(t)?Ve(Zt,null,t.slice()):Qo(t)?Gn(t):Ve(Ra,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function Xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!tg(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[ei(e)]):n=8);t.children=e,t.shapeFlag|=n}function vv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ia([e.class,r.class]));else if(s==="style")e.style=Ml([e.style,r.style]);else if(ya(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){dn(t,e,7,[n,r])}const Tv=Xp();let Iv=0;function wv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Tv,i={uid:Iv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(r,s),emitsOptions:hg(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uv.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const Av=()=>ht||Ot;let Yo,Xc;{const t=Ta(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Xc=e("__VUE_SSR_SETTERS__",n=>Ri=n)}const Hi=t=>{const e=ht;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},Jh=()=>{ht&&ht.scope.off(),Yo(null)};function mg(t){return t.vnode.shapeFlag&4}let Ri=!1;function Sv(t,e=!1,n=!1){e&&Xc(e);const{props:r,children:s}=t.vnode,i=mg(t);YE(t,r,i,e),ev(t,s,n||e);const o=i?bv(t,e):void 0;return e&&Xc(!1),o}function bv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$E);const{setup:r}=n;if(r){bn();const s=t.setupContext=r.length>1?Cv(t):null,i=Hi(t),o=qi(r,t,0,[t.props,s]),c=fp(o);if(Rn(),i(),(c||t.sp)&&!fi(t)&&$p(t),c){if(o.then(Jh,Jh),e)return o.then(l=>{Xh(t,l)}).catch(l=>{Aa(l,t,0)});t.asyncDep=o}else Xh(t,o)}else _g(t)}function Xh(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=xp(e)),_g(t)}function _g(t,e,n){const r=t.type;t.render||(t.render=r.render||rn);{const s=Hi(t);bn();try{qE(t)}finally{Rn(),s()}}}const Rv={get(t,e){return lt(t,"get",""),t[e]}};function Cv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Rv),slots:t.slots,emit:t.emit,expose:e}}function Ca(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xp(mE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}})):t.proxy}function Pv(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function Ov(t){return le(t)&&"__vccOpts"in t}const It=(t,e)=>TE(t,e,Ri);function yg(t,e,n){try{Ko(-1);const r=arguments.length;return r===2?Pe(e)&&!se(e)?Qo(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qo(n)&&(n=[n]),Ve(t,e,n))}finally{Ko(1)}}const kv="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zc;const Zh=typeof window<"u"&&window.trustedTypes;if(Zh)try{Zc=Zh.createPolicy("vue",{createHTML:t=>t})}catch{}const Eg=Zc?t=>Zc.createHTML(t):t=>t,Dv="http://www.w3.org/2000/svg",Nv="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,ef=En&&En.createElement("template"),Vv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(Dv,t):e==="mathml"?En.createElementNS(Nv,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ef.innerHTML=Eg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ef.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xv=Symbol("_vtc");function Mv(t,e,n){const r=t[xv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const tf=Symbol("_vod"),Lv=Symbol("_vsh"),Uv=Symbol(""),Fv=/(?:^|;)\s*display\s*:/;function Bv(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Co(r,c,"")}else for(const o in e)n[o]==null&&Co(r,o,"");for(const o in n)o==="display"&&(i=!0),Co(r,o,n[o])}else if(s){if(e!==n){const o=r[Uv];o&&(n+=";"+o),r.cssText=n,i=Fv.test(n)}}else e&&t.removeAttribute("style");tf in t&&(t[tf]=i?r.display:"",t[Lv]&&(r.display="none"))}const nf=/\s*!important$/;function Co(t,e,n){if(se(n))n.forEach(r=>Co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jv(t,e);nf.test(n)?t.setProperty(Ur(r),n.replace(nf,""),"important"):t[r]=n}}const rf=["Webkit","Moz","ms"],wc={};function jv(t,e){const n=wc[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return wc[e]=r;r=va(r);for(let s=0;s<rf.length;s++){const i=rf[s]+r;if(i in t)return wc[e]=i}return e}const sf="http://www.w3.org/1999/xlink";function of(t,e,n,r,s,i=Ky(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sf,e.slice(6,e.length)):t.setAttributeNS(sf,e,n):n==null||i&&!mp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function af(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Eg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Wn(t,e,n,r){t.addEventListener(e,n,r)}function $v(t,e,n,r){t.removeEventListener(e,n,r)}const cf=Symbol("_vei");function qv(t,e,n,r,s=null){const i=t[cf]||(t[cf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Hv(e);if(r){const u=i[e]=Wv(r,s);Wn(t,c,u,l)}else o&&($v(t,c,o,l),i[e]=void 0)}}const lf=/(?:Once|Passive|Capture)$/;function Hv(t){let e;if(lf.test(t)){e={};let r;for(;r=t.match(lf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ur(t.slice(2)),e]}let Ac=0;const Gv=Promise.resolve(),zv=()=>Ac||(Gv.then(()=>Ac=0),Ac=Date.now());function Wv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(Kv(r,n.value),e,5,[r])};return n.value=t,n.attached=zv(),n}function Kv(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const uf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Qv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Mv(t,r,o):e==="style"?Bv(t,n,r):ya(e)?Nl(e)||qv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yv(t,e,r,o))?(af(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&of(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(r))?af(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),of(t,e,r,o))};function Yv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&uf(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return uf(e)&&Ue(n)?!1:e in t}const ms=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>So(e,n):e};function Jv(t){t.target.composing=!0}function hf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const An=Symbol("_assign"),b0={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[An]=ms(s);const i=r||s.props&&s.props.type==="number";Wn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Bo(c)),t[An](c)}),n&&Wn(t,"change",()=>{t.value=t.value.trim()}),e||(Wn(t,"compositionstart",Jv),Wn(t,"compositionend",hf),Wn(t,"change",hf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[An]=ms(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Bo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},R0={deep:!0,created(t,e,n){t[An]=ms(n),Wn(t,"change",()=>{const r=t._modelValue,s=Ci(t),i=t.checked,o=t[An];if(se(r)){const c=Ll(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(bs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(vg(t,i))})},mounted:ff,beforeUpdate(t,e,n){t[An]=ms(n),ff(t,e,n)}};function ff(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(se(e))s=Ll(e,r.props.value)>-1;else if(bs(e))s=e.has(r.props.value);else{if(e===n)return;s=ji(e,vg(t,!0))}t.checked!==s&&(t.checked=s)}const C0={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=bs(e);Wn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Bo(Ci(o)):Ci(o));t[An](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,zl(()=>{t._assigning=!1})}),t[An]=ms(r)},mounted(t,{value:e}){df(t,e)},beforeUpdate(t,e,n){t[An]=ms(n)},updated(t,{value:e}){t._assigning||df(t,e)}};function df(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!bs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ci(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Ll(e,c)>-1}else o.selected=e.has(c);else if(ji(Ci(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ci(t){return"_value"in t?t._value:t.value}function vg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Xv=["ctrl","shift","alt","meta"],Zv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xv.some(n=>t[`${n}Key`]&&!e.includes(n))},P0=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Zv[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},eT=dt({patchProp:Qv},Vv);let pf;function tT(){return pf||(pf=nv(eT))}const nT=((...t)=>{const e=tT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sT(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function rT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sT(t){return Ue(t)?document.querySelector(t):t}const Gi=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},iT={};function oT(t,e){const n=Ql("router-view");return Nt(),pg(jE(t.$route.meta.layout||"div"),null,{default:Rr(()=>[Ve(n)]),_:1})}const aT=Gi(iT,[["render",oT]]),cT="modulepreload",lT=function(t){return"/appweb/"+t},gf={},Kr=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(n.map(u=>{if(u=lT(u),u in gf)return;gf[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":cT,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((_,O)=>{g.addEventListener("load",_),g.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Xr=typeof document<"u";function Tg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Tg(t.default)}const Te=Object.assign;function Sc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const gi=()=>{},Ht=Array.isArray,Ig=/#/g,hT=/&/g,fT=/\//g,dT=/=/g,pT=/\?/g,wg=/\+/g,gT=/%5B/g,mT=/%5D/g,Ag=/%5E/g,_T=/%60/g,Sg=/%7B/g,yT=/%7C/g,bg=/%7D/g,ET=/%20/g;function Zl(t){return encodeURI(""+t).replace(yT,"|").replace(gT,"[").replace(mT,"]")}function vT(t){return Zl(t).replace(Sg,"{").replace(bg,"}").replace(Ag,"^")}function el(t){return Zl(t).replace(wg,"%2B").replace(ET,"+").replace(Ig,"%23").replace(hT,"%26").replace(_T,"`").replace(Sg,"{").replace(bg,"}").replace(Ag,"^")}function TT(t){return el(t).replace(dT,"%3D")}function IT(t){return Zl(t).replace(Ig,"%23").replace(pT,"%3F")}function wT(t){return t==null?"":IT(t).replace(fT,"%2F")}function Pi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const AT=/\/$/,ST=t=>t.replace(AT,"");function bc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=PT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Pi(o)}}function bT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function RT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_s(e.matched[r],n.matched[s])&&Rg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CT(t[n],e[n]))return!1;return!0}function CT(t,e){return Ht(t)?_f(t,e):Ht(e)?_f(e,t):t===e}function _f(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function PT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Oi;(function(t){t.pop="pop",t.push="push"})(Oi||(Oi={}));var mi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mi||(mi={}));function OT(t){if(!t)if(Xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ST(t)}const kT=/^[^#]+#/;function DT(t,e){return t.replace(kT,"#")+e}function NT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function VT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=NT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yf(t,e){return(history.state?history.state.position-e:-1)+t}const tl=new Map;function xT(t,e){tl.set(t,e)}function MT(t){const e=tl.get(t);return tl.delete(t),e}let LT=()=>location.protocol+"//"+location.host;function Cg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),mf(l,"")}return mf(n,t)+r+s}function UT(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=Cg(t,location),O=n.value,k=e.value;let V=0;if(g){if(n.value=_,e.value=g,o&&o===O){o=null;return}V=k?g.position-k.position:0}else r(_);s.forEach(q=>{q(n.value,O,{delta:V,type:Oi.pop,direction:V?V>0?mi.forward:mi.back:mi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const _=()=>{const O=s.indexOf(g);O>-1&&s.splice(O,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(Te({},g.state,{scroll:Pa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Ef(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pa():null}}function FT(t){const{history:e,location:n}=window,r={value:Cg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:LT()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,u){const f=Te({},e.state,Ef(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Te({},s.value,e.state,{forward:l,scroll:Pa()});i(f.current,f,!0);const p=Te({},Ef(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function BT(t){t=OT(t);const e=FT(t),n=UT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Te({location:"",base:t,go:r,createHref:DT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jT(t){return typeof t=="string"||t&&typeof t=="object"}function Pg(t){return typeof t=="string"||typeof t=="symbol"}const Og=Symbol("");var vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vf||(vf={}));function ys(t,e){return Te(new Error,{type:t,[Og]:!0},e)}function yn(t,e){return t instanceof Error&&Og in t&&(e==null||!!(t.type&e))}const Tf="[^/]+?",$T={sensitive:!1,strict:!1,start:!0,end:!0},qT=/[.+*?^${}()[\]/\\]/g;function HT(t,e){const n=Te({},$T,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(qT,"\\$&"),_+=40;else if(g.type===1){const{value:O,repeatable:k,optional:V,regexp:q}=g;i.push({name:O,repeatable:k,optional:V});const $=q||Tf;if($!==Tf){_+=10;try{new RegExp(`(${$})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${O}" (${$}): `+K.message)}}let H=k?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(H=V&&u.length<2?`(?:/${H})`:"/"+H),V&&(H+="?"),s+=H,_+=20,V&&(_+=-8),k&&(_+=-20),$===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",O=i[g-1];p[O.name]=_&&O.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:O,repeatable:k,optional:V}=_,q=O in u?u[O]:"";if(Ht(q)&&!k)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const $=Ht(q)?q.join("/"):q;if(!$)if(V)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);f+=$}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function GT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=GT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(If(r))return 1;if(If(s))return-1}return s.length-r.length}function If(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zT={type:0,value:""},WT=/[a-zA-Z0-9_]/;function KT(t){if(!t)return[[]];if(t==="/")return[[zT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:WT.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function QT(t,e,n){const r=HT(KT(t.path),n),s=Te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function YT(t,e){const n=[],r=new Map;e=bf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const O=!_,k=Af(p);k.aliasOf=_&&_.record;const V=bf(e,p),q=[k];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const ue of K)q.push(Af(Te({},k,{components:_?_.record.components:k.components,path:ue,aliasOf:_?_.record:k})))}let $,H;for(const K of q){const{path:ue}=K;if(g&&ue[0]!=="/"){const de=g.record.path,w=de[de.length-1]==="/"?"":"/";K.path=g.record.path+(ue&&w+ue)}if($=QT(K,g,V),_?_.alias.push($):(H=H||$,H!==$&&H.alias.push($),O&&p.name&&!Sf($)&&o(p.name)),Dg($)&&l($),k.children){const de=k.children;for(let w=0;w<de.length;w++)i(de[w],$,_&&_.children[w])}_=_||$}return H?()=>{o(H)}:gi}function o(p){if(Pg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=ZT(p,n);n.splice(g,0,p),p.record.name&&!Sf(p)&&r.set(p.record.name,p)}function u(p,g){let _,O={},k,V;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ys(1,{location:p});V=_.record.name,O=Te(wf(g.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&wf(p.params,_.keys.map(H=>H.name))),k=_.stringify(O)}else if(p.path!=null)k=p.path,_=n.find(H=>H.re.test(k)),_&&(O=_.parse(k),V=_.record.name);else{if(_=g.name?r.get(g.name):n.find(H=>H.re.test(g.path)),!_)throw ys(1,{location:p,currentLocation:g});V=_.record.name,O=Te({},g.params,p.params),k=_.stringify(O)}const q=[];let $=_;for(;$;)q.unshift($.record),$=$.parent;return{name:V,path:k,params:O,matched:q,meta:XT(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function wf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Af(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:JT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function JT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XT(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function bf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ZT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;kg(t,e[i])<0?r=i:n=i+1}const s=eI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function eI(t){let e=t;for(;e=e.parent;)if(Dg(e)&&kg(t,e)===0)return e}function Dg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function tI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(wg," "),o=i.indexOf("="),c=Pi(o<0?i:i.slice(0,o)),l=o<0?null:Pi(i.slice(o+1));if(c in e){let u=e[c];Ht(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Rf(t){let e="";for(let n in t){const r=t[n];if(n=TT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(i=>i&&el(i)):[r&&el(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rI=Symbol(""),Cf=Symbol(""),Oa=Symbol(""),eu=Symbol(""),nl=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(ys(4,{from:n,to:e})):g instanceof Error?l(g):jT(g)?l(ys(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Rc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Tg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(zn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=uT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&zn(_,n,r,o,c,s)()}))}}return i}function Pf(t){const e=Lt(Oa),n=Lt(eu),r=It(()=>{const l=nn(t.to);return e.resolve(l)}),s=It(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(_s.bind(null,f));if(g>-1)return g;const _=Of(l[u-2]);return u>1&&Of(f)===_&&p[p.length-1].path!==_?p.findIndex(_s.bind(null,l[u-2])):g}),i=It(()=>s.value>-1&&cI(n.params,r.value.params)),o=It(()=>s.value>-1&&s.value===n.matched.length-1&&Rg(n.params,r.value.params));function c(l={}){if(aI(l)){const u=e[nn(t.replace)?"replace":"push"](nn(t.to)).catch(gi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:It(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function sI(t){return t.length===1?t[0]:t}const iI=jp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Pf,setup(t,{slots:e}){const n=$i(Pf(t)),{options:r}=Lt(Oa),s=It(()=>({[kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&sI(e.default(n));return t.custom?i:yg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oI=iI;function aI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Of(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kf=(t,e,n)=>t??e??n,lI=jp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Lt(nl),s=It(()=>t.route||r.value),i=Lt(Cf,0),o=It(()=>{let u=nn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=It(()=>s.value.matched[o.value]);bo(Cf,It(()=>o.value+1)),bo(rI,c),bo(nl,s);const l=Gl();return ls(()=>[l.value,c.value,t.name],([u,f,p],[g,_,O])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!_s(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Df(n.default,{Component:g,route:u});const _=p.props[f],O=_?_===!0?u.params:typeof _=="function"?_(u):_:null,V=yg(g,Te({},O,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Df(n.default,{Component:V,route:u})||V}}});function Df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uI=lI;function hI(t){const e=YT(t.routes,t),n=t.parseQuery||tI,r=t.stringifyQuery||Rf,s=t.history,i=Xs(),o=Xs(),c=Xs(),l=_E(jn);let u=jn;Xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Sc.bind(null,N=>""+N),p=Sc.bind(null,wT),g=Sc.bind(null,Pi);function _(N,Y){let W,Z;return Pg(N)?(W=e.getRecordMatcher(N),Z=Y):Z=N,e.addRoute(Z,W)}function O(N){const Y=e.getRecordMatcher(N);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(N=>N.record)}function V(N){return!!e.getRecordMatcher(N)}function q(N,Y){if(Y=Te({},Y||l.value),typeof N=="string"){const b=bc(n,N,Y.path),x=e.resolve({path:b.path},Y),L=s.createHref(b.fullPath);return Te(b,x,{params:g(x.params),hash:Pi(b.hash),redirectedFrom:void 0,href:L})}let W;if(N.path!=null)W=Te({},N,{path:bc(n,N.path,Y.path).path});else{const b=Te({},N.params);for(const x in b)b[x]==null&&delete b[x];W=Te({},N,{params:p(b)}),Y.params=p(Y.params)}const Z=e.resolve(W,Y),Se=N.hash||"";Z.params=f(g(Z.params));const y=bT(r,Te({},N,{hash:vT(Se),path:Z.path})),I=s.createHref(y);return Te({fullPath:y,hash:Se,query:r===Rf?nI(N.query):N.query||{}},Z,{redirectedFrom:void 0,href:I})}function $(N){return typeof N=="string"?bc(n,N,l.value.path):Te({},N)}function H(N,Y){if(u!==N)return ys(8,{from:Y,to:N})}function K(N){return w(N)}function ue(N){return K(Te($(N),{replace:!0}))}function de(N){const Y=N.matched[N.matched.length-1];if(Y&&Y.redirect){const{redirect:W}=Y;let Z=typeof W=="function"?W(N):W;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=$(Z):{path:Z},Z.params={}),Te({query:N.query,hash:N.hash,params:Z.path!=null?{}:N.params},Z)}}function w(N,Y){const W=u=q(N),Z=l.value,Se=N.state,y=N.force,I=N.replace===!0,b=de(W);if(b)return w(Te($(b),{state:typeof b=="object"?Te({},Se,b.state):Se,force:y,replace:I}),Y||W);const x=W;x.redirectedFrom=Y;let L;return!y&&RT(r,Z,W)&&(L=ys(16,{to:x,from:Z}),St(Z,Z,!0,!1)),(L?Promise.resolve(L):S(x,Z)).catch(D=>yn(D)?yn(D,2)?D:Wt(D):_e(D,x,Z)).then(D=>{if(D){if(yn(D,2))return w(Te({replace:I},$(D.to),{state:typeof D.to=="object"?Te({},Se,D.to.state):Se,force:y}),Y||x)}else D=R(x,Z,!0,I,Se);return A(x,Z,D),D})}function E(N,Y){const W=H(N,Y);return W?Promise.reject(W):Promise.resolve()}function T(N){const Y=Ft.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(N):N()}function S(N,Y){let W;const[Z,Se,y]=fI(N,Y);W=Rc(Z.reverse(),"beforeRouteLeave",N,Y);for(const b of Z)b.leaveGuards.forEach(x=>{W.push(zn(x,N,Y))});const I=E.bind(null,N,Y);return W.push(I),rt(W).then(()=>{W=[];for(const b of i.list())W.push(zn(b,N,Y));return W.push(I),rt(W)}).then(()=>{W=Rc(Se,"beforeRouteUpdate",N,Y);for(const b of Se)b.updateGuards.forEach(x=>{W.push(zn(x,N,Y))});return W.push(I),rt(W)}).then(()=>{W=[];for(const b of y)if(b.beforeEnter)if(Ht(b.beforeEnter))for(const x of b.beforeEnter)W.push(zn(x,N,Y));else W.push(zn(b.beforeEnter,N,Y));return W.push(I),rt(W)}).then(()=>(N.matched.forEach(b=>b.enterCallbacks={}),W=Rc(y,"beforeRouteEnter",N,Y,T),W.push(I),rt(W))).then(()=>{W=[];for(const b of o.list())W.push(zn(b,N,Y));return W.push(I),rt(W)}).catch(b=>yn(b,8)?b:Promise.reject(b))}function A(N,Y,W){c.list().forEach(Z=>T(()=>Z(N,Y,W)))}function R(N,Y,W,Z,Se){const y=H(N,Y);if(y)return y;const I=Y===jn,b=Xr?history.state:{};W&&(Z||I?s.replace(N.fullPath,Te({scroll:I&&b&&b.scroll},Se)):s.push(N.fullPath,Se)),l.value=N,St(N,Y,W,I),Wt()}let v;function Fe(){v||(v=s.listen((N,Y,W)=>{if(!Vn.listening)return;const Z=q(N),Se=de(Z);if(Se){w(Te(Se,{replace:!0,force:!0}),Z).catch(gi);return}u=Z;const y=l.value;Xr&&xT(yf(y.fullPath,W.delta),Pa()),S(Z,y).catch(I=>yn(I,12)?I:yn(I,2)?(w(Te($(I.to),{force:!0}),Z).then(b=>{yn(b,20)&&!W.delta&&W.type===Oi.pop&&s.go(-1,!1)}).catch(gi),Promise.reject()):(W.delta&&s.go(-W.delta,!1),_e(I,Z,y))).then(I=>{I=I||R(Z,y,!1),I&&(W.delta&&!yn(I,8)?s.go(-W.delta,!1):W.type===Oi.pop&&yn(I,20)&&s.go(-1,!1)),A(Z,y,I)}).catch(gi)}))}let yt=Xs(),Be=Xs(),ve;function _e(N,Y,W){Wt(N);const Z=Be.list();return Z.length?Z.forEach(Se=>Se(N,Y,W)):console.error(N),Promise.reject(N)}function Et(){return ve&&l.value!==jn?Promise.resolve():new Promise((N,Y)=>{yt.add([N,Y])})}function Wt(N){return ve||(ve=!N,Fe(),yt.list().forEach(([Y,W])=>N?W(N):Y()),yt.reset()),N}function St(N,Y,W,Z){const{scrollBehavior:Se}=t;if(!Xr||!Se)return Promise.resolve();const y=!W&&MT(yf(N.fullPath,0))||(Z||!W)&&history.state&&history.state.scroll||null;return zl().then(()=>Se(N,Y,y)).then(I=>I&&VT(I)).catch(I=>_e(I,N,Y))}const Je=N=>s.go(N);let mn;const Ft=new Set,Vn={currentRoute:l,listening:!0,addRoute:_,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:k,resolve:q,options:t,push:K,replace:ue,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Be.add,isReady:Et,install(N){const Y=this;N.component("RouterLink",oI),N.component("RouterView",uI),N.config.globalProperties.$router=Y,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(l)}),Xr&&!mn&&l.value===jn&&(mn=!0,K(s.location).catch(Se=>{}));const W={};for(const Se in jn)Object.defineProperty(W,Se,{get:()=>l.value[Se],enumerable:!0});N.provide(Oa,Y),N.provide(eu,Np(W)),N.provide(nl,l);const Z=N.unmount;Ft.add(N),N.unmount=function(){Ft.delete(N),Ft.size<1&&(u=jn,v&&v(),v=null,l.value=jn,mn=!1,ve=!1),Z()}}};function rt(N){return N.reduce((Y,W)=>Y.then(()=>T(W)),Promise.resolve())}return Vn}function fI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>_s(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>_s(u,l))||s.push(l))}return[n,r,s]}function dI(){return Lt(Oa)}function O0(t){return Lt(eu)}function pI(){return Ng().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ng(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const gI=typeof Proxy=="function",mI="devtools-plugin:setup",_I="plugin:settings:set";let Qr,rl;function yI(){var t;return Qr!==void 0||(typeof window<"u"&&window.performance?(Qr=!0,rl=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Qr=!0,rl=globalThis.perf_hooks.performance):Qr=!1),Qr}function EI(){return yI()?rl.now():Date.now()}class vI{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return EI()}},n&&n.on(_I,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(u=>{this.targetQueue.push({method:c,args:l,resolve:u})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function TI(t,e){const n=t,r=Ng(),s=pI(),i=gI&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(mI,t,e);else{const o=i?new vI(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Vg="store";function II(t){return t===void 0&&(t=null),Lt(t!==null?t:Vg)}function Rs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function wI(t){return t!==null&&typeof t=="object"}function AI(t){return t&&typeof t.then=="function"}function SI(t,e){return function(){return t(e)}}function xg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Mg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ka(t,n,[],t._modules.root,!0),tu(t,n,e)}function tu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Rs(s,function(o,c){i[c]=SI(o,t),Object.defineProperty(t.getters,c,{get:function(){return i[c]()},enumerable:!0})}),t._state=$i({data:e}),t.strict&&OI(t),r&&n&&t._withCommit(function(){r.data=null})}function ka(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=nu(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var u=r.context=bI(t,o,n);r.forEachMutation(function(f,p){var g=o+p;RI(t,g,f,u)}),r.forEachAction(function(f,p){var g=f.root?p:o+p,_=f.handler||f;CI(t,g,_,u)}),r.forEachGetter(function(f,p){var g=o+p;PI(t,g,f,u)}),r.forEachChild(function(f,p){ka(t,e,n.concat(p),f,s)})}function bI(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=Jo(i,o,c),u=l.payload,f=l.options,p=l.type;return(!f||!f.root)&&(p=e+p),t.dispatch(p,u)},commit:r?t.commit:function(i,o,c){var l=Jo(i,o,c),u=l.payload,f=l.options,p=l.type;(!f||!f.root)&&(p=e+p),t.commit(p,u,f)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Lg(t,e)}},state:{get:function(){return nu(t.state,n)}}}),s}function Lg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function RI(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function CI(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return AI(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function PI(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function OI(t){ls(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function nu(t,e){return e.reduce(function(n,r){return n[r]},t)}function Jo(t,e,n){return wI(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var kI="vuex bindings",Nf="vuex:mutations",Cc="vuex:actions",Yr="vuex",DI=0;function NI(t,e){TI({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[kI]},function(n){n.addTimelineLayer({id:Nf,label:"Vuex Mutations",color:Vf}),n.addTimelineLayer({id:Cc,label:"Vuex Actions",color:Vf}),n.addInspector({id:Yr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Yr)if(r.filter){var s=[];jg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Bg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Yr){var s=r.nodeId;Lg(e,s),r.state=MI(UI(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Yr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Yr),n.sendInspectorState(Yr),n.addTimelineEvent({layerId:Nf,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=DI++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:Cc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:Cc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Vf=8702998,VI=6710886,xI=16777215,Ug={label:"namespaced",textColor:xI,backgroundColor:VI};function Fg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Bg(t,e){return{id:e||"root",label:Fg(e),tags:t.namespaced?[Ug]:[],children:Object.keys(t._children).map(function(n){return Bg(t._children[n],e+n+"/")})}}function jg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Ug]:[]}),Object.keys(e._children).forEach(function(s){jg(t,e._children[s],n,r+s+"/")})}function MI(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=LI(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Fg(o):o,editable:!1,value:sl(function(){return i[o]})}})}return s}function LI(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=sl(function(){return t[n]})}else e[n]=sl(function(){return t[n]})}),e}function UI(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function sl(t){try{return t()}catch(e){return e}}var zt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},$g={namespaced:{configurable:!0}};$g.namespaced.get=function(){return!!this._rawModule.namespaced};zt.prototype.addChild=function(e,n){this._children[e]=n};zt.prototype.removeChild=function(e){delete this._children[e]};zt.prototype.getChild=function(e){return this._children[e]};zt.prototype.hasChild=function(e){return e in this._children};zt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};zt.prototype.forEachChild=function(e){Rs(this._children,e)};zt.prototype.forEachGetter=function(e){this._rawModule.getters&&Rs(this._rawModule.getters,e)};zt.prototype.forEachAction=function(e){this._rawModule.actions&&Rs(this._rawModule.actions,e)};zt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Rs(this._rawModule.mutations,e)};Object.defineProperties(zt.prototype,$g);var Fr=function(e){this.register([],e,!1)};Fr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Fr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Fr.prototype.update=function(e){qg([],this.root,e)};Fr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new zt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Rs(n.modules,function(c,l){s.register(e.concat(l),c,r)})};Fr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Fr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function qg(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;qg(t.concat(r),e.getChild(r),n.modules[r])}}function FI(t){return new At(t)}var At=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Fr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,c=this,l=c.dispatch,u=c.commit;this.dispatch=function(g,_){return l.call(o,g,_)},this.commit=function(g,_,O){return u.call(o,g,_,O)},this.strict=s;var f=this._modules.root.state;ka(this,f,[],this._modules.root),tu(this,f),r.forEach(function(p){return p(n)})},ru={state:{configurable:!0}};At.prototype.install=function(e,n){e.provide(n||Vg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&NI(e,this)};ru.state.get=function(){return this._state.data};ru.state.set=function(t){};At.prototype.commit=function(e,n,r){var s=this,i=Jo(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},u=this._mutations[o];u&&(this._withCommit(function(){u.forEach(function(p){p(c)})}),this._subscribers.slice().forEach(function(f){return f(l,s.state)}))};At.prototype.dispatch=function(e,n){var r=this,s=Jo(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(f){return f.before}).forEach(function(f){return f.before(c,r.state)})}catch{}var u=l.length>1?Promise.all(l.map(function(f){return f(o)})):l[0](o);return new Promise(function(f,p){u.then(function(g){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}f(g)},function(g){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,g)})}catch{}p(g)})})}};At.prototype.subscribe=function(e,n){return xg(e,this._subscribers,n)};At.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return xg(r,this._actionSubscribers,n)};At.prototype.watch=function(e,n,r){var s=this;return ls(function(){return e(s.state,s.getters)},n,Object.assign({},r))};At.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};At.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ka(this,this.state,e,this._modules.get(e),r.preserveState),tu(this,this.state)};At.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=nu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Mg(this)};At.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};At.prototype.hotUpdate=function(e){this._modules.update(e),Mg(this,!0)};At.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(At.prototype,ru);const BI=()=>{};var xf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new $I;const g=i<<2|c>>4;if(r.push(g),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const O=u<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qI=function(t){const e=Hg(t);return Gg.encodeByteArray(e,!0)},Xo=function(t){return qI(t).replace(/\./g,"")},zg=function(t){try{return Gg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=()=>HI().__FIREBASE_DEFAULTS__,zI=()=>{if(typeof process>"u"||typeof xf>"u")return;const t=xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zg(t[1]);return e&&JSON.parse(e)},Da=()=>{try{return BI()||GI()||zI()||WI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wg=t=>Da()?.emulatorHosts?.[t],KI=t=>{const e=Wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kg=()=>Da()?.config,Qg=t=>Da()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),""].join(".")}const _i={};function JI(){const t={prod:[],emulator:[]};for(const e of Object.keys(_i))_i[e]?t.emulator.push(e):t.prod.push(e);return t}function XI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Mf=!1;function Jg(t,e){if(typeof window>"u"||typeof document>"u"||!Cs(window.location.host)||_i[t]===e||_i[t]||Mf)return;_i[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=JI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Mf=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=XI(r),_=n("text"),O=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),V=document.getElementById(k)||document.createElement("a"),q=n("preprendIcon"),$=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const H=g.element;c(H),f(V,k);const K=u();l($,q),H.append($,O,V,K),document.body.appendChild(H)}i?(O.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function ew(){const t=Da()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sw(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iw(){return!ew()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ow(){try{return typeof indexedDB=="object"}catch{return!1}}function aw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cw,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?lw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,c,r)}}function lw(t,e){return t.replace(uw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const uw=/\{\$([^}]+)}/g;function hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lf(i)&&Lf(o)){if(!kr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fw(t,e){const n=new dw(t,e);return n.subscribe.bind(n)}class dw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pc),s.error===void 0&&(s.error=Pc),s.complete===void 0&&(s.complete=Pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mw(t){return t===br?void 0:t}function _w(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Ew={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},vw=pe.INFO,Tw={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Iw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Tw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class su{constructor(e){this.name=e,this._logLevel=vw,this._logHandler=Iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ew[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const ww=(t,e)=>e.some(n=>t instanceof n);let Uf,Ff;function Aw(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sw(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,il=new WeakMap,Zg=new WeakMap,Oc=new WeakMap,iu=new WeakMap;function bw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),iu.set(e,t),e}function Rw(t){if(il.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});il.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return il.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cw(t){ol=t(ol)}function Pw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return Zg.set(r,e.sort?e.sort():[e]),er(r)}:Sw().includes(t)?function(...e){return t.apply(kc(this),e),er(Xg.get(this))}:function(...e){return er(t.apply(kc(this),e))}}function Ow(t){return typeof t=="function"?Pw(t):(t instanceof IDBTransaction&&Rw(t),ww(t,Aw())?new Proxy(t,ol):t)}function er(t){if(t instanceof IDBRequest)return bw(t);if(Oc.has(t))return Oc.get(t);const e=Ow(t);return e!==t&&(Oc.set(t,e),iu.set(e,t)),e}const kc=t=>iu.get(t);function kw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(er(o.result),l.oldVersion,l.newVersion,er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Dw=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],Dc=new Map;function Bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Dc.set(e,i),i}Cw(t=>({...t,get:(e,n,r)=>Bf(e,n)||t.get(e,n,r),has:(e,n)=>!!Bf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xw(t){return t.getComponent()?.type==="VERSION"}const al="@firebase/app",jf="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new su("@firebase/app"),Mw="@firebase/app-compat",Lw="@firebase/analytics-compat",Uw="@firebase/analytics",Fw="@firebase/app-check-compat",Bw="@firebase/app-check",jw="@firebase/auth",$w="@firebase/auth-compat",qw="@firebase/database",Hw="@firebase/data-connect",Gw="@firebase/database-compat",zw="@firebase/functions",Ww="@firebase/functions-compat",Kw="@firebase/installations",Qw="@firebase/installations-compat",Yw="@firebase/messaging",Jw="@firebase/messaging-compat",Xw="@firebase/performance",Zw="@firebase/performance-compat",eA="@firebase/remote-config",tA="@firebase/remote-config-compat",nA="@firebase/storage",rA="@firebase/storage-compat",sA="@firebase/firestore",iA="@firebase/ai",oA="@firebase/firestore-compat",aA="firebase",cA="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="[DEFAULT]",lA={[al]:"fire-core",[Mw]:"fire-core-compat",[Uw]:"fire-analytics",[Lw]:"fire-analytics-compat",[Bw]:"fire-app-check",[Fw]:"fire-app-check-compat",[jw]:"fire-auth",[$w]:"fire-auth-compat",[qw]:"fire-rtdb",[Hw]:"fire-data-connect",[Gw]:"fire-rtdb-compat",[zw]:"fire-fn",[Ww]:"fire-fn-compat",[Kw]:"fire-iid",[Qw]:"fire-iid-compat",[Yw]:"fire-fcm",[Jw]:"fire-fcm-compat",[Xw]:"fire-perf",[Zw]:"fire-perf-compat",[eA]:"fire-rc",[tA]:"fire-rc-compat",[nA]:"fire-gcs",[rA]:"fire-gcs-compat",[sA]:"fire-fst",[oA]:"fire-fst-compat",[iA]:"fire-vertex","fire-js":"fire-js",[aA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map,uA=new Map,ll=new Map;function $f(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(ll.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;ll.set(e,t);for(const n of Zo.values())$f(n,t);for(const n of uA.values())$f(n,t);return!0}function ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new zi("app","Firebase",hA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=cA;function em(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:cl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=Kg()),!n)throw tr.create("no-options");const i=Zo.get(s);if(i){if(kr(n,i.options)&&kr(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const o=new yw(s);for(const l of ll.values())o.addComponent(l);const c=new fA(n,r,o);return Zo.set(s,c),c}function tm(t=cl){const e=Zo.get(t);if(!e&&t===cl&&Kg())return em();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){let r=lA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(o.join(" "));return}Es(new Dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="firebase-heartbeat-database",pA=1,ki="firebase-heartbeat-store";let Nc=null;function nm(){return Nc||(Nc=kw(dA,pA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function gA(t){try{const n=(await nm()).transaction(ki),r=await n.objectStore(ki).get(rm(t));return await n.done,r}catch(e){if(e instanceof Nn)Cn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e?.message});Cn.warn(n.message)}}}async function qf(t,e){try{const r=(await nm()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,rm(t)),await r.done}catch(n){if(n instanceof Nn)Cn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n?.message});Cn.warn(r.message)}}}function rm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=1024,_A=30;class yA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>_A){const s=TA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hf(),{heartbeatsToSend:n,unsentEntries:r}=EA(this._heartbeatsCache.heartbeats),s=Xo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Cn.warn(e),""}}}function Hf(){return new Date().toISOString().substring(0,10)}function EA(t,e=mA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ow()?aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return qf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gf(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}function TA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){Es(new Dr("platform-logger",e=>new Vw(e),"PRIVATE")),Es(new Dr("heartbeat",e=>new yA(e),"PRIVATE")),nr(al,jf,t),nr(al,jf,"esm2020"),nr("fire-js","")}IA("");function sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wA=sm,im=new zi("auth","Firebase",sm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new su("@firebase/auth");function AA(t,...e){ea.logLevel<=pe.WARN&&ea.warn(`Auth (${Ps}): ${t}`,...e)}function Po(t,...e){ea.logLevel<=pe.ERROR&&ea.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw au(t,...e)}function sn(t,...e){return au(t,...e)}function om(t,e,n){const r={...wA(),[e]:n};return new zi("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return om(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function au(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return im.create(t,...e)}function ie(t,e,...n){if(!t)throw au(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function Pn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){return typeof self<"u"&&self.location?.href||""}function SA(){return zf()==="http:"||zf()==="https:"}function zf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SA()||nw()||"connection"in navigator)?navigator.onLine:!0}function RA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZI()||rw()}get(){return bA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OA=new Ki(3e4,6e4);function pr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function gr(t,e,n,r,s={}){return cm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Wi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return tw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(u.credentials="include"),am.fetch()(await lm(t,t.config.apiHost,n,c),u)})}async function cm(t,e,n){t._canInitEmulator=!1;const r={...CA,...e};try{const s=new DA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _o(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw om(t,f,u);Gt(t,f)}}catch(s){if(s instanceof Nn)throw s;Gt(t,"network-request-failed",{message:String(s)})}}async function Qi(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function lm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?cu(t.config,s):`${t.config.apiScheme}://${s}`;return PA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function kA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),OA.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function Wf(t){return t!==void 0&&t.enterprise!==void 0}class NA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function VA(t,e){return gr(t,"GET","/v2/recaptchaConfig",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function ta(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MA(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=lu(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:yi(Vc(s.auth_time)),issuedAtTime:yi(Vc(s.iat)),expirationTime:yi(Vc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Vc(t){return Number(t)*1e3}function lu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=zg(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Kf(t){const e=lu(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&LA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t){const e=t.auth,n=await t.getIdToken(),r=await Di(t,ta(e,{idToken:n}));ie(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?um(s.providerUserInfo):[],o=BA(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!o?.length,u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function FA(t){const e=Ye(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function um(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e){const n=await cm(t,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await lm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(l.credentials="include"),am.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $A(t,e){return gr(t,"POST","/v2/accounts:revokeToken",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Kf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new us;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new UA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Di(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MA(this,e)}reload(){return FA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await Di(this,xA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:_,providerData:O,stsTokenManager:k}=n;ie(p&&k,e,"internal-error");const V=us.fromJSON(this.name,k);ie(typeof p=="string",e,"internal-error"),$n(r,e.name),$n(s,e.name),ie(typeof g=="boolean",e,"internal-error"),ie(typeof _=="boolean",e,"internal-error"),$n(i,e.name),$n(o,e.name),$n(c,e.name),$n(l,e.name),$n(u,e.name),$n(f,e.name);const q=new jt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:u,lastLoginAt:f});return O&&Array.isArray(O)&&(q.providerData=O.map($=>({...$}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new us;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?um(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new us;c.updateFromIdToken(r);const l=new jt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;function wn(t){Pn(t instanceof Function,"Expected a class definition");let e=Qf.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hm.type="NONE";const Yf=hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ta(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(wn(Yf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||wn(Yf);const o=Oo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await ta(e,{idToken:f}).catch(()=>{});if(!g)break;p=await jt._fromGetAccountInfoResponse(e,g,f)}else p=jt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new hs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_m(e))return"Blackberry";if(ym(e))return"Webos";if(dm(e))return"Safari";if((e.includes("chrome/")||pm(e))&&!e.includes("edge/"))return"Chrome";if(mm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function fm(t=pt()){return/firefox\//i.test(t)}function dm(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pm(t=pt()){return/crios\//i.test(t)}function gm(t=pt()){return/iemobile/i.test(t)}function mm(t=pt()){return/android/i.test(t)}function _m(t=pt()){return/blackberry/i.test(t)}function ym(t=pt()){return/webos/i.test(t)}function uu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qA(t=pt()){return uu(t)&&!!window.navigator?.standalone}function HA(){return sw()&&document.documentMode===10}function Em(t=pt()){return uu(t)||mm(t)||ym(t)||_m(t)||/windows phone/i.test(t)||gm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t,e=[]){let n;switch(t){case"Browser":n=Jf(pt());break;case"Worker":n=`${Jf(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e={}){return gr(t,"GET","/v2/passwordPolicy",pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=6;class KA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??WA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xf(this),this.idTokenSubscription=new Xf(this),this.beforeStateQueue=new GA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=im,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ta(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Vt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Sn(this));const n=e?Ye(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zA(this),n=new KA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $A(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&AA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Br(t){return Ye(t)}class Xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=fw(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YA(t){Na=t}function Tm(t){return Na.loadJS(t)}function JA(){return Na.recaptchaEnterpriseScript}function XA(){return Na.gapiScript}function ZA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class eS{constructor(){this.enterprise=new tS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nS="recaptcha-enterprise",Im="NO_RECAPTCHA";class rS{constructor(e){this.type=nS,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{VA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new NA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Wf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Im)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Wf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=JA();l.length!==0&&(l+=c),Tm(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Zf(t,e,n,r=!1,s=!1){const i=new rS(t);let o;if(s)o=Im;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function fl(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Zf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t,e){const n=ou(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(kr(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function iS(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(wn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function oS(t,e,n){const r=Br(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wm(e),{host:o,port:c}=aS(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(kr(u,r.config.emulator)&&kr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Cs(o)?(Yg(`${i}//${o}${l}`),Jg("Auth",!0)):cS()}function wm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aS(t){const e=wm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ed(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ed(o)}}}function ed(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function lS(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e){return Qi(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}async function fS(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends hu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(e,n,"signInWithPassword",uS);case"emailLink":return hS(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(e,r,"signUpPassword",lS);case"emailLink":return fS(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Qi(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="http://localhost";class Nr extends hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:dS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gS(t){const e=ti(ni(t)).link,n=e?ti(ni(e)).deep_link_id:null,r=ti(ni(t)).deep_link_id;return(r?ti(ni(r)).link:null)||r||n||e||t}class fu{constructor(e){const n=ti(ni(e)),r=n.apiKey??null,s=n.oobCode??null,i=pS(n.mode??null);ie(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=gS(e);try{return new fu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fu.parseLink(n);return ie(r,"argument-error"),Ni._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Am{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Yi{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Yi{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Yi{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e){return Qi(t,"POST","/v1/accounts:signUp",pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),o=td(r);return new Vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=td(r);return new Vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Nn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ra(e,n,r,s)}}function Sm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(t,i,e,r):i})}async function _S(t,e,n=!1){const r=await Di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(Sn(r));const s="reauthenticate";try{const i=await Di(t,Sm(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=lu(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),Vr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(t,e,n=!1){if(Vt(t.app))return Promise.reject(Sn(t));const r="signIn",s=await Sm(t,r,e),i=await Vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ES(t,e){return bm(Br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(t){const e=Br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vS(t,e,n){if(Vt(t.app))return Promise.reject(Sn(t));const r=Br(t),o=await fl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Rm(t),l}),c=await Vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function TS(t,e,n){return Vt(t.app)?Promise.reject(Sn(t)):ES(Ye(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Rm(t),r})}function IS(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function wS(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function AS(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function SS(t){return Ye(t).signOut()}const sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=1e3,RS=10;class Pm extends Cm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);HA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pm.type="LOCAL";const CS=Pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om extends Cm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Om.type="SESSION";const km=Om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await PS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=du("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function kS(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function DS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NS(){return navigator?.serviceWorker?.controller||null}function VS(){return Dm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="firebaseLocalStorageDb",xS=1,ia="firebaseLocalStorage",Vm="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function MS(){const t=indexedDB.deleteDatabase(Nm);return new Ji(t).toPromise()}function dl(){const t=indexedDB.open(Nm,xS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ia,{keyPath:Vm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await MS(),e(await dl()))})})}async function nd(t,e,n){const r=xa(t,!0).put({[Vm]:e,value:n});return new Ji(r).toPromise()}async function LS(t,e){const n=xa(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function rd(t,e){const n=xa(t,!0).delete(e);return new Ji(n).toPromise()}const US=800,FS=3;class xm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(VS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await DS(),!this.activeServiceWorker)return;this.sender=new OS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dl();return await nd(e,sa,"1"),await rd(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xa(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xm.type="LOCAL";const BS=xm;new Ki(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(t,e){return e?wn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends hu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $S(t){return bm(t.auth,new pu(t),t.bypassAuthState)}function qS(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),yS(n,new pu(t),t.bypassAuthState)}async function HS(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),_S(n,new pu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $S;case"linkViaPopup":case"linkViaRedirect":return HS;case"reauthViaPopup":case"reauthViaRedirect":return qS;default:Gt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=new Ki(2e3,1e4);class rs extends Mm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GS.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="pendingRedirect",ko=new Map;class WS extends Mm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await KS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KS(t,e){const n=JS(e),r=YS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function QS(t,e){ko.set(t._key(),e)}function YS(t){return wn(t._redirectPersistence)}function JS(t){return Oo(zS,t.config.apiKey,t.name)}async function XS(t,e,n=!1){if(Vt(t.app))return Promise.reject(Sn(t));const r=Br(t),s=jS(r,e),o=await new WS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=600*1e3;class eb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Lm(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(sn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZS&&this.cachedEventUids.clear(),this.cachedEventUids.has(sd(e))}saveEventToCache(e){this.cachedEventUids.add(sd(e)),this.lastProcessedEventTime=Date.now()}}function sd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lm({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function tb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nb(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sb=/^https?/;async function ib(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nb(t);for(const n of e)try{if(ob(n))return}catch{}Gt(t,"unauthorized-domain")}function ob(t){const e=ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sb.test(n))return!1;if(rb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new Ki(3e4,6e4);function id(){const t=on().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cb(t){return new Promise((e,n)=>{function r(){id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{id(),n(sn(t,"network-request-failed"))},timeout:ab.get()})}if(on().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(on().gapi?.load)r();else{const s=ZA("iframefcb");return on()[s]=()=>{gapi.load?r():n(sn(t,"network-request-failed"))},Tm(`${XA()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Do=null,e})}let Do=null;function lb(t){return Do=Do||cb(t),Do}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new Ki(5e3,15e3),hb="__/auth/iframe",fb="emulator/auth/iframe",db={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gb(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cu(e,fb):`https://${t.config.authDomain}/${hb}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=pb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Wi(r).slice(1)}`}async function mb(t){const e=await lb(t),n=on().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:gb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:db,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),c=on().setTimeout(()=>{i(o)},ub.get());function l(){on().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yb=500,Eb=600,vb="_blank",Tb="http://localhost";class od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ib(t,e,n,r=yb,s=Eb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={..._b,width:r.toString(),height:s.toString(),top:i,left:o},u=pt().toLowerCase();n&&(c=pm(u)?vb:n),fm(u)&&(e=e||Tb,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,O])=>`${g}${_}=${O},`,"");if(qA(u)&&c!=="_self")return wb(e||"",c),new od(null);const p=window.open(e||"",c,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new od(p)}function wb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="__/auth/handler",Sb="emulator/auth/handler",bb=encodeURIComponent("fac");async function ad(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof Am){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Yi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${bb}=${encodeURIComponent(l)}`:"";return`${Rb(t)}?${Wi(c).slice(1)}${u}`}function Rb({config:t}){return t.emulator?cu(t,Sb):`https://${t.authDomain}/${Ab}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="webStorageSupport";class Cb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=km,this._completeRedirectFn=XS,this._overrideRedirectResult=QS}async _openPopup(e,n,r,s){Pn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ad(e,n,r,ul(),s);return Ib(e,i,du())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ad(e,n,r,ul(),s);return kS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mb(e),r=new eb(e);return n.register("authEvent",s=>(ie(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},s=>{const i=s?.[0]?.[xc];i!==void 0&&n(!!i),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ib(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Em()||dm()||uu()}}const Pb=Cb;var cd="@firebase/auth",ld="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Db(t){Es(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vm(t)},u=new QA(r,s,i,l);return iS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Dr("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new Ob(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(cd,ld,kb(t)),nr(cd,ld,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=300,Vb=Qg("authIdTokenMaxAge")||Nb;let ud=null;const xb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vb)return;const s=n?.token;ud!==s&&(ud=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mb(t=tm()){const e=ou(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sS(t,{popupRedirectResolver:Pb,persistence:[BS,CS,km]}),r=Qg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=xb(i.toString());wS(n,o,()=>o(n.currentUser)),IS(n,c=>o(c))}}const s=Wg("auth");return s&&oS(n,`http://${s}`),n}function Lb(){return document.getElementsByTagName("head")?.[0]??document}YA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Lb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Db("Browser");var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rr,Um;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function T(){}T.prototype=E.prototype,w.F=E.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(S,A,R){for(var v=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)v[Fe-2]=arguments[Fe];return E.prototype[A].apply(S,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,E,T){T||(T=0);const S=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)S[A]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(A=0;A<16;++A)S[A]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=w.g[0],T=w.g[1],A=w.g[2];let R=w.g[3],v;v=E+(R^T&(A^R))+S[0]+3614090360&4294967295,E=T+(v<<7&4294967295|v>>>25),v=R+(A^E&(T^A))+S[1]+3905402710&4294967295,R=E+(v<<12&4294967295|v>>>20),v=A+(T^R&(E^T))+S[2]+606105819&4294967295,A=R+(v<<17&4294967295|v>>>15),v=T+(E^A&(R^E))+S[3]+3250441966&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(R^T&(A^R))+S[4]+4118548399&4294967295,E=T+(v<<7&4294967295|v>>>25),v=R+(A^E&(T^A))+S[5]+1200080426&4294967295,R=E+(v<<12&4294967295|v>>>20),v=A+(T^R&(E^T))+S[6]+2821735955&4294967295,A=R+(v<<17&4294967295|v>>>15),v=T+(E^A&(R^E))+S[7]+4249261313&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(R^T&(A^R))+S[8]+1770035416&4294967295,E=T+(v<<7&4294967295|v>>>25),v=R+(A^E&(T^A))+S[9]+2336552879&4294967295,R=E+(v<<12&4294967295|v>>>20),v=A+(T^R&(E^T))+S[10]+4294925233&4294967295,A=R+(v<<17&4294967295|v>>>15),v=T+(E^A&(R^E))+S[11]+2304563134&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(R^T&(A^R))+S[12]+1804603682&4294967295,E=T+(v<<7&4294967295|v>>>25),v=R+(A^E&(T^A))+S[13]+4254626195&4294967295,R=E+(v<<12&4294967295|v>>>20),v=A+(T^R&(E^T))+S[14]+2792965006&4294967295,A=R+(v<<17&4294967295|v>>>15),v=T+(E^A&(R^E))+S[15]+1236535329&4294967295,T=A+(v<<22&4294967295|v>>>10),v=E+(A^R&(T^A))+S[1]+4129170786&4294967295,E=T+(v<<5&4294967295|v>>>27),v=R+(T^A&(E^T))+S[6]+3225465664&4294967295,R=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(R^E))+S[11]+643717713&4294967295,A=R+(v<<14&4294967295|v>>>18),v=T+(R^E&(A^R))+S[0]+3921069994&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(A^R&(T^A))+S[5]+3593408605&4294967295,E=T+(v<<5&4294967295|v>>>27),v=R+(T^A&(E^T))+S[10]+38016083&4294967295,R=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(R^E))+S[15]+3634488961&4294967295,A=R+(v<<14&4294967295|v>>>18),v=T+(R^E&(A^R))+S[4]+3889429448&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(A^R&(T^A))+S[9]+568446438&4294967295,E=T+(v<<5&4294967295|v>>>27),v=R+(T^A&(E^T))+S[14]+3275163606&4294967295,R=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(R^E))+S[3]+4107603335&4294967295,A=R+(v<<14&4294967295|v>>>18),v=T+(R^E&(A^R))+S[8]+1163531501&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(A^R&(T^A))+S[13]+2850285829&4294967295,E=T+(v<<5&4294967295|v>>>27),v=R+(T^A&(E^T))+S[2]+4243563512&4294967295,R=E+(v<<9&4294967295|v>>>23),v=A+(E^T&(R^E))+S[7]+1735328473&4294967295,A=R+(v<<14&4294967295|v>>>18),v=T+(R^E&(A^R))+S[12]+2368359562&4294967295,T=A+(v<<20&4294967295|v>>>12),v=E+(T^A^R)+S[5]+4294588738&4294967295,E=T+(v<<4&4294967295|v>>>28),v=R+(E^T^A)+S[8]+2272392833&4294967295,R=E+(v<<11&4294967295|v>>>21),v=A+(R^E^T)+S[11]+1839030562&4294967295,A=R+(v<<16&4294967295|v>>>16),v=T+(A^R^E)+S[14]+4259657740&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(T^A^R)+S[1]+2763975236&4294967295,E=T+(v<<4&4294967295|v>>>28),v=R+(E^T^A)+S[4]+1272893353&4294967295,R=E+(v<<11&4294967295|v>>>21),v=A+(R^E^T)+S[7]+4139469664&4294967295,A=R+(v<<16&4294967295|v>>>16),v=T+(A^R^E)+S[10]+3200236656&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(T^A^R)+S[13]+681279174&4294967295,E=T+(v<<4&4294967295|v>>>28),v=R+(E^T^A)+S[0]+3936430074&4294967295,R=E+(v<<11&4294967295|v>>>21),v=A+(R^E^T)+S[3]+3572445317&4294967295,A=R+(v<<16&4294967295|v>>>16),v=T+(A^R^E)+S[6]+76029189&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(T^A^R)+S[9]+3654602809&4294967295,E=T+(v<<4&4294967295|v>>>28),v=R+(E^T^A)+S[12]+3873151461&4294967295,R=E+(v<<11&4294967295|v>>>21),v=A+(R^E^T)+S[15]+530742520&4294967295,A=R+(v<<16&4294967295|v>>>16),v=T+(A^R^E)+S[2]+3299628645&4294967295,T=A+(v<<23&4294967295|v>>>9),v=E+(A^(T|~R))+S[0]+4096336452&4294967295,E=T+(v<<6&4294967295|v>>>26),v=R+(T^(E|~A))+S[7]+1126891415&4294967295,R=E+(v<<10&4294967295|v>>>22),v=A+(E^(R|~T))+S[14]+2878612391&4294967295,A=R+(v<<15&4294967295|v>>>17),v=T+(R^(A|~E))+S[5]+4237533241&4294967295,T=A+(v<<21&4294967295|v>>>11),v=E+(A^(T|~R))+S[12]+1700485571&4294967295,E=T+(v<<6&4294967295|v>>>26),v=R+(T^(E|~A))+S[3]+2399980690&4294967295,R=E+(v<<10&4294967295|v>>>22),v=A+(E^(R|~T))+S[10]+4293915773&4294967295,A=R+(v<<15&4294967295|v>>>17),v=T+(R^(A|~E))+S[1]+2240044497&4294967295,T=A+(v<<21&4294967295|v>>>11),v=E+(A^(T|~R))+S[8]+1873313359&4294967295,E=T+(v<<6&4294967295|v>>>26),v=R+(T^(E|~A))+S[15]+4264355552&4294967295,R=E+(v<<10&4294967295|v>>>22),v=A+(E^(R|~T))+S[6]+2734768916&4294967295,A=R+(v<<15&4294967295|v>>>17),v=T+(R^(A|~E))+S[13]+1309151649&4294967295,T=A+(v<<21&4294967295|v>>>11),v=E+(A^(T|~R))+S[4]+4149444226&4294967295,E=T+(v<<6&4294967295|v>>>26),v=R+(T^(E|~A))+S[11]+3174756917&4294967295,R=E+(v<<10&4294967295|v>>>22),v=A+(E^(R|~T))+S[2]+718787259&4294967295,A=R+(v<<15&4294967295|v>>>17),v=T+(R^(A|~E))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,E){E===void 0&&(E=w.length);const T=E-this.blockSize,S=this.C;let A=this.h,R=0;for(;R<E;){if(A==0)for(;R<=T;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<E;)if(S[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,S),A=0;break}}else for(;R<E;)if(S[A++]=w[R++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,T=0;T<4;++T)for(let S=0;S<32;S+=8)w[E++]=this.g[T]>>>S&255;return w};function i(w,E){var T=c;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=E(w)}function o(w,E){this.h=E;const T=[];let S=!0;for(let A=w.length-1;A>=0;A--){const R=w[A]|0;S&&R==E||(T[A]=R,S=!1)}this.g=T}var c={};function l(w){return-128<=w&&w<128?i(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return V(u(-w));const E=[];let T=1;for(let S=0;w>=T;S++)E[S]=w/T|0,T*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return V(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(E,8));let S=p;for(let R=0;R<w.length;R+=8){var A=Math.min(8,w.length-R);const v=parseInt(w.substring(R,R+A),E);A<8?(A=u(Math.pow(E,A)),S=S.j(A).add(u(v))):(S=S.j(T),S=S.add(u(v)))}return S}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-V(this).m();let w=0,E=1;for(let T=0;T<this.g.length;T++){const S=this.i(T);w+=(S>=0?S:4294967296+S)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(k(this))return"-"+V(this).toString(w);const E=u(Math.pow(w,6));var T=this;let S="";for(;;){const A=K(T,E).g;T=q(T,A.j(E));let R=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=A,O(T))return R+S;for(;R.length<6;)R="0"+R;S=R+S}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=q(this,w),k(w)?-1:O(w)?0:1};function V(w){const E=w.g.length,T=[];for(let S=0;S<E;S++)T[S]=~w.g[S];return new o(T,~w.h).add(g)}t.abs=function(){return k(this)?V(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),T=[];let S=0;for(let A=0;A<=E;A++){let R=S+(this.i(A)&65535)+(w.i(A)&65535),v=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);S=v>>>16,R&=65535,v&=65535,T[A]=v<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function q(w,E){return w.add(V(E))}t.j=function(w){if(O(this)||O(w))return p;if(k(this))return k(w)?V(this).j(V(w)):V(V(this).j(w));if(k(w))return V(this.j(V(w)));if(this.l(_)<0&&w.l(_)<0)return u(this.m()*w.m());const E=this.g.length+w.g.length,T=[];for(var S=0;S<2*E;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<w.g.length;A++){const R=this.i(S)>>>16,v=this.i(S)&65535,Fe=w.i(A)>>>16,yt=w.i(A)&65535;T[2*S+2*A]+=v*yt,$(T,2*S+2*A),T[2*S+2*A+1]+=R*yt,$(T,2*S+2*A+1),T[2*S+2*A+1]+=v*Fe,$(T,2*S+2*A+1),T[2*S+2*A+2]+=R*Fe,$(T,2*S+2*A+2)}for(w=0;w<E;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=E;w<2*E;w++)T[w]=0;return new o(T,0)};function $(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function H(w,E){this.g=w,this.h=E}function K(w,E){if(O(E))throw Error("division by zero");if(O(w))return new H(p,p);if(k(w))return E=K(V(w),E),new H(V(E.g),V(E.h));if(k(E))return E=K(w,V(E)),new H(V(E.g),E.h);if(w.g.length>30){if(k(w)||k(E))throw Error("slowDivide_ only works with positive integers.");for(var T=g,S=E;S.l(w)<=0;)T=ue(T),S=ue(S);var A=de(T,1),R=de(S,1);for(S=de(S,2),T=de(T,2);!O(S);){var v=R.add(S);v.l(w)<=0&&(A=A.add(T),R=v),S=de(S,1),T=de(T,1)}return E=q(w,A.j(E)),new H(A,E)}for(A=p;w.l(E)>=0;){for(T=Math.max(1,Math.floor(w.m()/E.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),R=u(T),v=R.j(E);k(v)||v.l(w)>0;)T-=S,R=u(T),v=R.j(E);O(R)&&(R=g),A=A.add(R),w=q(w,v)}return new H(A,w)}t.B=function(w){return K(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),T=[];for(let S=0;S<E;S++)T[S]=this.i(S)&w.i(S);return new o(T,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),T=[];for(let S=0;S<E;S++)T[S]=this.i(S)|w.i(S);return new o(T,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),T=[];for(let S=0;S<E;S++)T[S]=this.i(S)^w.i(S);return new o(T,this.h^w.h)};function ue(w){const E=w.g.length+1,T=[];for(let S=0;S<E;S++)T[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(T,w.h)}function de(w,E){const T=E>>5;E%=32;const S=w.g.length-T,A=[];for(let R=0;R<S;R++)A[R]=E>0?w.i(R+T)>>>E|w.i(R+T+1)<<32-E:w.i(R+T);return new o(A,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Um=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,rr=o}).apply(typeof hd<"u"?hd:typeof self<"u"?self:typeof window<"u"?window:{});var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fm,ri,Bm,No,pl,jm,$m,qm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yo=="object"&&yo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,C,P){for(var G=Array(arguments.length-2),he=2;he<arguments.length;he++)G[he-2]=arguments[he];return h.prototype[C].apply(m,G)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function O(a,h){for(let m=1;m<arguments.length;m++){const C=arguments[m];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const P=C.length||0;a.length=d+P;for(let G=0;G<P;G++)a[d+G]=C[G]}else a.push(C)}}class k{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){o.setTimeout(()=>{throw a},0)}function q(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,d){const m=H.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var H=new k(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,de=!1,w=new $,E=()=>{const a=Promise.resolve(void 0);ue=()=>{a.then(T)}};function T(){for(var a;a=q();){try{a.h.call(a.g)}catch(d){V(d)}var h=H;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}de=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a})();function v(a){return/^[\s\xa0]*$/.test(a)}function Fe(a,h){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Fe,A),Fe.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Fe.Z.h.call(this)},Fe.prototype.h=function(){Fe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(Math.random()*1e6|0),Be=0;function ve(a,h,d,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++Be,this.da=this.fa=!1}function _e(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Et(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function Wt(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function St(a){const h={};for(const d in a)h[d]=a[d];return h}const Je="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mn(a,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let P=0;P<Je.length;P++)d=Je[P],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Ft(a){this.src=a,this.g={},this.h=0}Ft.prototype.add=function(a,h,d,m,C){const P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);const G=rt(a,h,m,C);return G>-1?(h=a[G],d||(h.fa=!1)):(h=new ve(h,this.src,P,!!m,C),h.fa=d,a.push(h)),h};function Vn(a,h){const d=h.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,h,void 0),P;(P=C>=0)&&Array.prototype.splice.call(m,C,1),P&&(_e(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function rt(a,h,d,m){for(let C=0;C<a.length;++C){const P=a[C];if(!P.da&&P.listener==h&&P.capture==!!d&&P.ha==m)return C}return-1}var N="closure_lm_"+(Math.random()*1e6|0),Y={};function W(a,h,d,m,C){if(Array.isArray(h)){for(let P=0;P<h.length;P++)W(a,h[P],d,m,C);return null}return d=z(d),a&&a[yt]?a.J(h,d,c(m)?!!m.capture:!1,C):Z(a,h,d,!1,m,C)}function Z(a,h,d,m,C,P){if(!h)throw Error("Invalid event type");const G=c(C)?!!C.capture:!!C;let he=L(a);if(he||(a[N]=he=new Ft(a)),d=he.add(h,d,m,G,P),d.proxy)return d;if(m=Se(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)R||(C=G),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(b(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Se(){function a(d){return h.call(a.src,a.listener,d)}const h=x;return a}function y(a,h,d,m,C){if(Array.isArray(h))for(var P=0;P<h.length;P++)y(a,h[P],d,m,C);else m=c(m)?!!m.capture:!!m,d=z(d),a&&a[yt]?(a=a.i,P=String(h).toString(),P in a.g&&(h=a.g[P],d=rt(h,d,m,C),d>-1&&(_e(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[P],a.h--)))):a&&(a=L(a))&&(h=a.g[h.toString()],a=-1,h&&(a=rt(h,d,m,C)),(d=a>-1?h[a]:null)&&I(d))}function I(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yt])Vn(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(b(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=L(h))?(Vn(d,a),d.h==0&&(d.src=null,h[N]=null)):_e(a)}}}function b(a){return a in Y?Y[a]:Y[a]="on"+a}function x(a,h){if(a.da)a=!0;else{h=new Fe(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&I(a),a=d.call(m,h)}return a}function L(a){return a=a[N],a instanceof Ft?a:null}var D="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[D]||(a[D]=function(h){return a.handleEvent(h)}),a[D])}function j(){S.call(this),this.i=new Ft(this),this.M=this,this.G=null}p(j,S),j.prototype[yt]=!0,j.prototype.removeEventListener=function(a,h,d,m){y(this,a,h,d,m)};function F(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new A(h,a);else if(h instanceof A)h.target=h.target||a;else{var C=h;h=new A(m,a),mn(h,C)}C=!0;let P,G;if(d)for(G=d.length-1;G>=0;G--)P=h.g=d[G],C=B(P,m,!0,h)&&C;if(P=h.g=a,C=B(P,m,!0,h)&&C,C=B(P,m,!1,h)&&C,d)for(G=0;G<d.length;G++)P=h.g=d[G],C=B(P,m,!1,h)&&C}j.prototype.N=function(){if(j.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)_e(d[m]);delete a.g[h],a.h--}}this.G=null},j.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},j.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function B(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let P=0;P<h.length;++P){const G=h[P];if(G&&!G.da&&G.capture==d){const he=G.listener,He=G.ha||G.src;G.fa&&Vn(a.i,G),C=he.call(He,m)!==!1&&C}}return C&&!m.defaultPrevented}function ne(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Q(a){a.g=ne(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ee extends S{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function re(a){S.call(this),this.h=a,this.g={}}p(re,S);var fe=[];function be(a){Et(a.g,function(h,d){this.g.hasOwnProperty(d)&&I(h)},a),a.g={}}re.prototype.N=function(){re.Z.N.call(this),be(this)},re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ee=o.JSON.stringify,st=o.JSON.parse,it=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function bt(){}function Rt(){}var Bt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qr(){A.call(this,"d")}p(qr,A);function Xe(){A.call(this,"c")}p(Xe,A);var We={},xs=null;function yr(){return xs=xs||new j}We.Ia="serverreachability";function Wu(a){A.call(this,We.Ia,a)}p(Wu,A);function Ms(a){const h=yr();F(h,new Wu(h))}We.STAT_EVENT="statevent";function Ku(a,h){A.call(this,We.STAT_EVENT,a),this.stat=h}p(Ku,A);function gt(a){const h=yr();F(h,new Ku(h,a))}We.Ja="timingevent";function Qu(a,h){A.call(this,We.Ja,a),this.size=h}p(Qu,A);function Ls(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Us(){this.g=!0}Us.prototype.ua=function(){this.g=!1};function _y(a,h,d,m,C,P){a.info(function(){if(a.g)if(P){var G="",he=P.split("&");for(let Re=0;Re<he.length;Re++){var He=he[Re].split("=");if(He.length>1){const Ke=He[0];He=He[1];const Qt=Ke.split("_");G=Qt.length>=2&&Qt[1]=="type"?G+(Ke+"="+He+"&"):G+(Ke+"=redacted&")}}}else G=null;else G=P;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+G})}function yy(a,h,d,m,C,P,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+P+" "+G})}function Hr(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+vy(a,d)+(m?" "+m:"")})}function Ey(a,h){a.info(function(){return"TIMEOUT: "+h})}Us.prototype.info=function(){};function vy(a,h){if(!a.g)return h;if(!h)return null;try{const P=JSON.parse(h);if(P){for(a=0;a<P.length;a++)if(Array.isArray(P[a])){var d=P[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var C=m[0];if(C!="noop"&&C!="stop"&&C!="close")for(let G=1;G<m.length;G++)m[G]=""}}}}return Ee(P)}catch{return h}}var ro={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ju;function tc(){}p(tc,bt),tc.prototype.g=function(){return new XMLHttpRequest},Ju=new tc;function Fs(a){return encodeURIComponent(String(a))}function Ty(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function xn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new re(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Zu={},nc={};function rc(a,h,d){a.M=1,a.A=io(Kt(h)),a.u=d,a.R=!0,eh(a,null)}function eh(a,h){a.F=Date.now(),so(a),a.B=Kt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),dh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Xu,a.g=kh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ee(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(fe[0]=C.toString()),C=fe);for(let P=0;P<C.length;P++){const G=W(d,C[P],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.J?St(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ms(),_y(a.i,a.v,a.B,a.l,a.S,a.u)}xn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Un(a)==3?h.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const he=Un(this.g),He=this.g.ya(),Re=this.g.ca();if(!(he<3)&&(he!=3||this.g&&(this.h.h||this.g.la()||vh(this.g)))){this.K||he!=4||He==7||(He==8||Re<=0?Ms(3):Ms(2)),sc(this);var h=this.g.ca();this.X=h;var d=Iy(this);if(this.o=h==200,yy(this.i,this.v,this.B,this.l,this.S,he,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,C=this.g;if((m=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(m)){var P=m;break t}}P=null}if(a=P)Hr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ic(this,a);else{this.o=!1,this.m=3,gt(12),Er(this),Bs(this);break e}}if(this.R){a=!0;let Ke;for(;!this.K&&this.C<d.length;)if(Ke=wy(this,d),Ke==nc){he==4&&(this.m=4,gt(14),a=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Zu){this.m=4,gt(15),Hr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Hr(this.i,this.l,Ke,null),ic(this,Ke);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),he!=4||d.length!=0||this.h.h||(this.m=1,gt(16),a=!1),this.o=this.o&&a,!a)Hr(this.i,this.l,d,"[Invalid Chunked Response]"),Er(this),Bs(this);else if(d.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),dc(G),G.P=!0,gt(11))}}else Hr(this.i,this.l,d,null),ic(this,d);he==4&&Er(this),this.o&&!this.K&&(he==4?Rh(this.j,this):(this.o=!1,so(this)))}else Ly(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,gt(12)):(this.m=0,gt(13)),Er(this),Bs(this)}}}catch{}finally{}};function Iy(a){if(!th(a))return a.g.la();const h=vh(a.g);if(h==="")return"";let d="";const m=h.length,C=Un(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Er(a),Bs(a),"";a.h.i=new o.TextDecoder}for(let P=0;P<m;P++)a.h.h=!0,d+=a.h.i.decode(h[P],{stream:!(C&&P==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function th(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function wy(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?nc:(d=Number(h.substring(d,m)),isNaN(d)?Zu:(m+=1,m+d>h.length?nc:(h=h.slice(m,m+d),a.C=m+d,h)))}xn.prototype.cancel=function(){this.K=!0,Er(this)};function so(a){a.T=Date.now()+a.H,nh(a,a.H)}function nh(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ls(u(a.aa,a),h)}function sc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}xn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ey(this.i,this.B),this.M!=2&&(Ms(),gt(17)),Er(this),this.m=2,Bs(this)):nh(this,this.T-a)};function Bs(a){a.j.I==0||a.K||Rh(a.j,a)}function Er(a){sc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,be(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ic(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||oc(d.h,a))){if(!a.L&&oc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)uo(d),co(d);else break e;fc(d),gt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ls(u(d.Va,d),6e3));ih(d.h)<=1&&d.ta&&(d.ta=void 0)}else Tr(d,11)}else if((a.L||d.g==a)&&uo(d),!v(h))for(C=d.Ba.g.parse(h),h=0;h<C.length;h++){let Re=C[h];const Ke=Re[0];if(!(Ke<=d.K))if(d.K=Ke,Re=Re[1],d.I==2)if(Re[0]=="c"){d.M=Re[1],d.ba=Re[2];const Qt=Re[3];Qt!=null&&(d.ka=Qt,d.j.info("VER="+d.ka));const Ir=Re[4];Ir!=null&&(d.za=Ir,d.j.info("SVER="+d.za));const Fn=Re[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(m=1.5*Fn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Bn=a.g;if(Bn){const fo=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fo){var P=m.h;P.g||fo.indexOf("spdy")==-1&&fo.indexOf("quic")==-1&&fo.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ac(P,P.h),P.h=null))}if(m.G){const pc=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(m.wa=pc,ke(m.J,m.G,pc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var G=a;if(m.na=Oh(m,m.L?m.ba:null,m.W),G.L){oh(m.h,G);var he=G,He=m.O;He&&(he.H=He),he.D&&(sc(he),so(he)),m.g=G}else Sh(m);d.i.length>0&&lo(d)}else Re[0]!="stop"&&Re[0]!="close"||Tr(d,7);else d.I==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Tr(d,7):hc(d):Re[0]!="noop"&&d.l&&d.l.qa(Re),d.A=0)}}Ms(4)}catch{}}var Ay=class{constructor(a,h){this.g=a,this.map=h}};function rh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ih(a){return a.h?1:a.g?a.g.size:0}function oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ac(a,h){a.g?a.g.add(h):a.h=h}function oh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ah(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sy(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let C,P=null;m>=0?(C=a[d].substring(0,m),P=a[d].substring(m+1)):C=a[d],h(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Mn?(this.l=a.l,js(this,a.j),this.o=a.o,this.g=a.g,$s(this,a.u),this.h=a.h,cc(this,ph(a.i)),this.m=a.m):a&&(h=String(a).match(ch))?(this.l=!1,js(this,h[1]||"",!0),this.o=qs(h[2]||""),this.g=qs(h[3]||"",!0),$s(this,h[4]),this.h=qs(h[5]||"",!0),cc(this,h[6]||"",!0),this.m=qs(h[7]||"")):(this.l=!1,this.i=new Gs(null,this.l))}Mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Hs(h,lh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Hs(h,lh,!0),"@"),a.push(Fs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Hs(d,d.charAt(0)=="/"?Cy:Ry,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Hs(d,Oy)),a.join("")},Mn.prototype.resolve=function(a){const h=Kt(this);let d=!!a.j;d?js(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)$s(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var C=h.h.lastIndexOf("/");C!=-1&&(m=h.h.slice(0,C+1)+m)}if(C=m,C==".."||C==".")m="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){m=C.lastIndexOf("/",0)==0,C=C.split("/");const P=[];for(let G=0;G<C.length;){const he=C[G++];he=="."?m&&G==C.length&&P.push(""):he==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),m&&G==C.length&&P.push("")):(P.push(he),m=!0)}m=P.join("/")}else m=C}return d?h.h=m:d=a.i.toString()!=="",d?cc(h,ph(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Kt(a){return new Mn(a)}function js(a,h,d){a.j=d?qs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function $s(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function cc(a,h,d){h instanceof Gs?(a.i=h,ky(a.i,a.l)):(d||(h=Hs(h,Py)),a.i=new Gs(h,a.l))}function ke(a,h,d){a.i.set(h,d)}function io(a){return ke(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function qs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,by),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function by(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lh=/[#\/\?@]/g,Ry=/[#\?:]/g,Cy=/[#\?]/g,Py=/[#\?@]/g,Oy=/#/g;function Gs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function vr(a){a.g||(a.g=new Map,a.h=0,a.i&&Sy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Gs.prototype,t.add=function(a,h){vr(this),this.i=null,a=Gr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function uh(a,h){vr(a),h=Gr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hh(a,h){return vr(a),h=Gr(a,h),a.g.has(h)}t.forEach=function(a,h){vr(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(h,C,m,this)},this)},this)};function fh(a,h){vr(a);let d=[];if(typeof h=="string")hh(a,h)&&(d=d.concat(a.g.get(Gr(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return vr(this),this.i=null,a=Gr(this,a),hh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=fh(this,a),a.length>0?String(a[0]):h):h};function dh(a,h,d){uh(a,h),d.length>0&&(a.i=null,a.g.set(Gr(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const C=Fs(d);d=fh(this,d);for(let P=0;P<d.length;P++){let G=C;d[P]!==""&&(G+="="+Fs(d[P])),a.push(G)}}return this.i=a.join("&")};function ph(a){const h=new Gs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Gr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ky(a,h){h&&!a.j&&(vr(a),a.i=null,a.g.forEach(function(d,m){const C=m.toLowerCase();m!=C&&(uh(this,m),dh(this,C,d))},a)),a.j=h}function Dy(a,h){const d=new Us;if(o.Image){const m=new Image;m.onload=f(Ln,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(Ln,d,"TestLoadImage: error",!1,h,m),m.onabort=f(Ln,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(Ln,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Ny(a,h){const d=new Us,m=new AbortController,C=setTimeout(()=>{m.abort(),Ln(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(P=>{clearTimeout(C),P.ok?Ln(d,"TestPingServer: ok",!0,h):Ln(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Ln(d,"TestPingServer: error",!1,h)})}function Ln(a,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function Vy(){this.g=new it}function lc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(lc,bt),lc.prototype.g=function(){return new oo(this.i,this.h)};function oo(a,h){j.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(oo,j),t=oo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ws(this)),this.g&&(this.readyState=3,Ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;gh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function gh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zs(this):Ws(this),this.readyState==3&&gh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,zs(this))},t.Na=function(a){this.g&&(this.response=a,zs(this))},t.ga=function(){this.g&&zs(this)};function zs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ws(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mh(a){let h="";return Et(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function uc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=mh(d),typeof a=="string"?d!=null&&Fs(d):ke(a,h,d))}function Me(a){j.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Me,j);var xy=/^https?$/i,My=["POST","PUT"];t=Me.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ju.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(P){_h(this,P);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(My,h,void 0)>=0)||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,G]of d)this.g.setRequestHeader(P,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(P){_h(this,P)}};function _h(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,yh(a),ao(a)}function yh(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,F(this,"complete"),F(this,"abort"),ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ao(this,!0)),Me.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Eh(this):this.Xa())},t.Xa=function(){Eh(this)};function Eh(a){if(a.h&&typeof i<"u"){if(a.v&&Un(a)==4)setTimeout(a.Ca.bind(a),0);else if(F(a,"readystatechange"),Un(a)==4){a.h=!1;try{const P=a.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=P===0){let G=String(a.D).match(ch)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),m=!xy.test(G?G.toLowerCase():"")}d=m}if(d)F(a,"complete"),F(a,"success");else{a.o=6;try{var C=Un(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",yh(a)}}finally{ao(a)}}}}function ao(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||F(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),st(h)}};function vh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ly(a){const h={};a=(a.g&&Un(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(v(a[m]))continue;var d=Ty(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=h[C]||[];h[C]=P,P.push(d)}Wt(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Th(a){this.za=0,this.i=[],this.j=new Us,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ks("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ks("baseRetryDelayMs",5e3,a),this.Za=Ks("retryDelaySeedMs",1e4,a),this.Ta=Ks("forwardChannelMaxRetries",2,a),this.va=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new rh(a&&a.concurrentRequestLimit),this.Ba=new Vy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Th.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,m){gt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Oh(this,null,this.W),lo(this)};function hc(a){if(Ih(a),a.I==3){var h=a.V++,d=Kt(a.J);if(ke(d,"SID",a.M),ke(d,"RID",h),ke(d,"TYPE","terminate"),Qs(a,d),h=new xn(a,a.j,h),h.M=2,h.A=io(Kt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=kh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),so(h)}Ph(a)}function co(a){a.g&&(dc(a),a.g.cancel(),a.g=null)}function Ih(a){co(a),a.v&&(o.clearTimeout(a.v),a.v=null),uo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function lo(a){if(!sh(a.h)&&!a.m){a.m=!0;var h=a.Ea;ue||E(),de||(ue(),de=!0),w.add(h,a),a.D=0}}function Uy(a,h){return ih(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ls(u(a.Ea,a,h),Ch(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new xn(this,this.j,a);let P=this.o;if(this.U&&(P?(P=St(P),mn(P,this.U)):P=this.U),this.u!==null||this.R||(C.J=P,P=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Ah(this,C,h),d=Kt(this.J),ke(d,"RID",a),ke(d,"CVER",22),this.G&&ke(d,"X-HTTP-Session-Id",this.G),Qs(this,d),P&&(this.R?h="headers="+Fs(mh(P))+"&"+h:this.u&&uc(d,this.u,P)),ac(this.h,C),this.Ra&&ke(d,"TYPE","init"),this.S?(ke(d,"$req",h),ke(d,"SID","null"),C.U=!0,rc(C,d,null)):rc(C,d,h),this.I=2}}else this.I==3&&(a?wh(this,a):this.i.length==0||sh(this.h)||wh(this))};function wh(a,h){var d;h?d=h.l:d=a.V++;const m=Kt(a.J);ke(m,"SID",a.M),ke(m,"RID",d),ke(m,"AID",a.K),Qs(a,m),a.u&&a.o&&uc(m,a.u,a.o),d=new xn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ah(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ac(a.h,d),rc(d,m,h)}function Qs(a,h){a.H&&Et(a.H,function(d,m){ke(h,m,d)}),a.l&&Et({},function(d,m){ke(h,m,d)})}function Ah(a,h,d){d=Math.min(a.i.length,d);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var C=a.i;let he=-1;for(;;){const He=["count="+d];he==-1?d>0?(he=C[0].g,He.push("ofs="+he)):he=0:He.push("ofs="+he);let Re=!0;for(let Ke=0;Ke<d;Ke++){var P=C[Ke].g;const Qt=C[Ke].map;if(P-=he,P<0)he=Math.max(0,C[Ke].g-100),Re=!1;else try{P="req"+P+"_"||"";try{var G=Qt instanceof Map?Qt:Object.entries(Qt);for(const[Ir,Fn]of G){let Bn=Fn;c(Fn)&&(Bn=Ee(Fn)),He.push(P+Ir+"="+encodeURIComponent(Bn))}}catch(Ir){throw He.push(P+"type="+encodeURIComponent("_badmap")),Ir}}catch{m&&m(Qt)}}if(Re){G=He.join("&");break e}}G=void 0}return a=a.i.splice(0,d),h.G=a,G}function Sh(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;ue||E(),de||(ue(),de=!0),w.add(h,a),a.A=0}}function fc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ls(u(a.Da,a),Ch(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,bh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ls(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,gt(10),co(this),bh(this))};function dc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function bh(a){a.g=new xn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Kt(a.na);ke(h,"RID","rpc"),ke(h,"SID",a.M),ke(h,"AID",a.K),ke(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ke(h,"TO",a.ia),ke(h,"TYPE","xmlhttp"),Qs(a,h),a.u&&a.o&&uc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=io(Kt(h)),d.u=null,d.R=!0,eh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,co(this),fc(this),gt(19))};function uo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rh(a,h){var d=null;if(a.g==h){uo(a),dc(a),a.g=null;var m=2}else if(oc(a.h,h))d=h.G,oh(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var C=a.D;m=yr(),F(m,new Qu(m,d)),lo(a)}else Sh(a);else if(C=h.m,C==3||C==0&&h.X>0||!(m==1&&Uy(a,h)||m==2&&fc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function Ch(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Tr(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),m=a.Ua;const C=!m;m=new Mn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||js(m,"https"),io(m),C?Dy(m.toString(),d):Ny(m.toString(),d)}else gt(2);a.I=0,a.l&&a.l.pa(h),Ph(a),Ih(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Ph(a){if(a.I=0,a.ja=[],a.l){const h=ah(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ja,h),O(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function Oh(a,h,d){var m=d instanceof Mn?Kt(d):new Mn(d);if(m.g!="")h&&(m.g=h+"."+m.g),$s(m,m.u);else{var C=o.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const P=new Mn(null);m&&js(P,m),h&&(P.g=h),C&&$s(P,C),d&&(P.h=d),m=P}return d=a.G,h=a.wa,d&&h&&ke(m,d,h),ke(m,"VER",a.ka),Qs(a,m),m}function kh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Me(new lc({ab:d})):new Me(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dh(){}t=Dh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ho(){}ho.prototype.g=function(a,h){return new Ct(a,h)};function Ct(a,h){j.call(this),this.g=new Th(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!v(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new zr(this)}p(Ct,j),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){hc(this.g)},Ct.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ee(a),a=d);h.i.push(new Ay(h.Ya++,a)),h.I==3&&lo(h)},Ct.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,Ct.Z.N.call(this)};function Nh(a){qr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Nh,qr);function Vh(){Xe.call(this),this.status=1}p(Vh,Xe);function zr(a){this.g=a}p(zr,Dh),zr.prototype.ra=function(){F(this.g,"a")},zr.prototype.qa=function(a){F(this.g,new Nh(a))},zr.prototype.pa=function(a){F(this.g,new Vh)},zr.prototype.oa=function(){F(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,qm=function(){return new ho},$m=function(){return yr()},jm=We,pl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ro.NO_ERROR=0,ro.TIMEOUT=8,ro.HTTP_ERROR=6,No=ro,Yu.COMPLETE="complete",Bm=Yu,Rt.EventType=Bt,Bt.OPEN="a",Bt.CLOSE="b",Bt.ERROR="c",Bt.MESSAGE="d",j.prototype.listen=j.prototype.J,ri=Rt,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,Fm=Me}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});const fd="@firebase/firestore",dd="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new su("@firebase/firestore");function Zr(){return xr.logLevel}function J(t,...e){if(xr.logLevel<=pe.DEBUG){const n=e.map(gu);xr.debug(`Firestore (${ks}): ${t}`,...n)}}function On(t,...e){if(xr.logLevel<=pe.ERROR){const n=e.map(gu);xr.error(`Firestore (${ks}): ${t}`,...n)}}function vs(t,...e){if(xr.logLevel<=pe.WARN){const n=e.map(gu);xr.warn(`Firestore (${ks}): ${t}`,...n)}}function gu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Hm(t,r,n)}function Hm(t,e,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function Ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Hm(e,s,r)}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ub{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ct.UNAUTHENTICATED)))}shutdown(){}}class Fb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Bb{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string",31837,{l:r}),new Gm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string",2055,{h:e}),new ct(e)}}class jb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $b{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new jb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ct.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ae(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new pd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new pd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Hb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function gl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Mc(s)===Mc(i)?ge(s,i):Mc(s)?1:-1}return ge(t.length,e.length)}const Gb=55296,zb=57343;function Mc(t){const e=t.charCodeAt(0);return e>=Gb&&e<=zb}function Ts(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="__name__";class Xt{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Xt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=Xt.isNumericId(e),s=Xt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Xt.extractNumericId(e).compare(Xt.extractNumericId(n)):gl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rr.fromString(e.substring(4,e.length-2))}}class De extends Xt{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new De(n)}static emptyPath(){return new De([])}}const Wb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Xt{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return Wb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gd}static keyField(){return new tt([gd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new X(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new X(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t,e,n){if(!n)throw new X(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Kb(t,e,n,r){if(e===!0&&r===!0)throw new X(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function md(t){if(!te.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _d(t){if(te.isDocumentKey(t))throw new X(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new X(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function Xi(t,e){if(!Wm(t))throw new X(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=-62135596800,Ed=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ed);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yd)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ed}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xi(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:$e("string",Ne._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Ne(0,0))}static max(){return new ae(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=-1;function Qb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new cr(s,te.empty(),e)}function Yb(t){return new cr(t.readTime,t.key,Vi)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(ae.min(),te.empty(),Vi)}static max(){return new cr(ae.max(),te.empty(),Vi)}}function Jb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Xb)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function eR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ma.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=-1;function La(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function tR(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="";function nR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=vd(e)),e=rR(t.get(n),e);return vd(e)}function rR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Km:n+="";break;default:n+=i}}return n}function vd(t){return t+Km+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eo(this.root,e,this.comparator,!0)}}class Eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Id(this.data.getIterator())}getIteratorFrom(e){return new Id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new ze(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ym("Invalid base64 string: "+i):i}})(e);return new nt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const sR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(Ae(!!t,39018),typeof t=="string"){let e=0;const n=sR.exec(t);if(Ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="server_timestamp",Xm="__type__",Zm="__previous_value__",e_="__local_write_time__";function Eu(t){return(t?.mapValue?.fields||{})[Xm]?.stringValue===Jm}function Ua(t){const e=t.mapValue.fields[Zm];return Eu(e)?Ua(e):e}function xi(t){const e=lr(t.mapValue.fields[e_].timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const aa="(default)";class Mi{constructor(e,n){this.projectId=e,this.database=n||aa}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database===aa}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="__type__",oR="__max__",vo={mapValue:{}},n_="__vector__",ca="value";function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Eu(t)?4:cR(t)?9007199254740991:aR(t)?10:11:oe(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xi(t).isEqual(xi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=lr(s.timestampValue),c=lr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return ur(s.bytesValue).isEqual(ur(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),c=Le(i.doubleValue);return o===c?oa(o)===oa(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Td(o)!==Td(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pn(o[l],c[l])))return!1;return!0})(t,e);default:return oe(52216,{left:t})}}function Li(t,e){return(t.values||[]).find((n=>pn(n,e)))!==void 0}function Is(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Le(i.integerValue||i.doubleValue),l=Le(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return wd(t.timestampValue,e.timestampValue);case 4:return wd(xi(t),xi(e));case 5:return gl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=ur(i),l=ur(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(Le(i.latitude),Le(o.latitude));return c!==0?c:ge(Le(i.longitude),Le(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Ad(t.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[ca]?.arrayValue,f=l[ca]?.arrayValue,p=ge(u?.values?.length||0,f?.values?.length||0);return p!==0?p:Ad(u,f)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===vo.mapValue&&o===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(o===vo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=gl(l[p],f[p]);if(g!==0)return g;const _=Is(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw oe(23264,{he:n})}}function wd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=lr(t),r=lr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function Ad(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Is(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function ws(t){return ml(t)}function ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return ur(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return te.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ml(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ml(n.fields[o])}`;return s+"}"})(t.mapValue):oe(61005,{value:t})}function Vo(t){switch(hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ua(t);return e?16+Vo(e):16;case 5:return 2*t.stringValue.length;case 6:return ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Vo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return mr(r.fields,((i,o)=>{s+=i.length+Vo(o)})),s})(t.mapValue);default:throw oe(13486,{value:t})}}function _l(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function Sd(t){return!!t&&"nullValue"in t}function bd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xo(t){return!!t&&"mapValue"in t}function aR(t){return(t?.mapValue?.fields||{})[t_]?.stringValue===n_}function Ei(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ei(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ei(t.arrayValue.values[n]);return e}return{...t}}function cR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===oR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ei(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){mr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new wt(Ei(this.value))}}function r_(t){const e=[];return mr(t.fields,((n,r)=>{const s=new tt([n]);if(xo(r)){const i=r_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ut(e,0,ae.min(),ae.min(),ae.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ae.min(),ae.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ae.min(),ae.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function Rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n="asc"){this.field=e,this.dir=n}}function lR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{}class Ge extends s_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hR(e,n,r):n==="array-contains"?new pR(e,r):n==="in"?new gR(e,r):n==="not-in"?new mR(e,r):n==="array-contains-any"?new _R(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fR(e,r):new dR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Is(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends s_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new gn(e,n)}matches(e){return i_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function i_(t){return t.op==="and"}function o_(t){return uR(t)&&i_(t)}function uR(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function yl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(o_(t))return t.filters.map((e=>yl(e))).join(",");{const e=t.filters.map((n=>yl(n))).join(",");return`${t.op}(${e})`}}function a_(t,e){return t instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)})(t,e):t instanceof gn?(function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&a_(o,s.filters[c])),!0):!1})(t,e):void oe(19439)}function c_(t){return t instanceof Ge?(function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`})(t):t instanceof gn?(function(n){return n.op.toString()+" {"+n.getFilters().map(c_).join(" ,")+"}"})(t):"Filter"}class hR extends Ge{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class fR extends Ge{constructor(e,n){super(e,"in",n),this.keys=l_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class dR extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=l_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function l_(t,e){return(e.arrayValue?.values||[]).map((n=>te.fromName(n.referenceValue)))}class pR extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&Li(n.arrayValue,this.value)}}class gR extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class mR extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Li(this.value.arrayValue,n)}}class _R extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Li(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Pd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new yR(t,e,n,r,s,i,o)}function Tu(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>yl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),La(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ws(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ws(r))).join(",")),e.Te=n}return e.Te}function Iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cd(t.startAt,e.startAt)&&Cd(t.endAt,e.endAt)}function El(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ER(t,e,n,r,s,i,o,c){return new Fa(t,e,n,r,s,i,o,c)}function Ba(t){return new Fa(t)}function Od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vR(t){return t.collectionGroup!==null}function vi(t){const e=ce(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ze(tt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ua(i,r))})),n.has(tt.keyField().canonicalString())||e.Ie.push(new ua(tt.keyField(),r))}return e.Ie}function cn(t){const e=ce(t);return e.Ee||(e.Ee=TR(e,vi(t))),e.Ee}function TR(t,e){if(t.limitType==="F")return Pd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ua(s.field,i)}));const n=t.endAt?new la(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new la(t.startAt.position,t.startAt.inclusive):null;return Pd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vl(t,e,n){return new Fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ja(t,e){return Iu(cn(t),cn(e))&&t.limitType===e.limitType}function u_(t){return`${Tu(cn(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>c_(s))).join(", ")}]`),La(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ws(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ws(s))).join(",")),`Target(${r})`})(cn(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Rd(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,vi(r),s)||r.endAt&&!(function(o,c,l){const u=Rd(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,vi(r),s))})(t,e)}function IR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function h_(t){return(e,n)=>{let r=!1;for(const s of vi(t)){const i=wR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wR(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Is(l,u):oe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Qm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new xe(te.comparator);function kn(){return AR}const f_=new xe(te.comparator);function si(...t){let e=f_;for(const n of t)e=e.insert(n.key,n);return e}function d_(t){let e=f_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Cr(){return Ti()}function p_(){return Ti()}function Ti(){return new jr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const SR=new xe(te.comparator),bR=new ze(te.comparator);function me(...t){let e=bR;for(const n of t)e=e.add(n);return e}const RR=new ze(ge);function CR(){return RR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function g_(t){return{integerValue:""+t}}function PR(t,e){return tR(e)?g_(e):wu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this._=void 0}}function OR(t,e,n){return t instanceof ha?(function(s,i){const o={fields:{[Xm]:{stringValue:Jm},[e_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Eu(i)&&(i=Ua(i)),i&&(o.fields[Zm]=i),{mapValue:o}})(n,e):t instanceof Ui?__(t,e):t instanceof Fi?y_(t,e):(function(s,i){const o=m_(s,i),c=kd(o)+kd(s.Ae);return _l(o)&&_l(s.Ae)?g_(c):wu(s.serializer,c)})(t,e)}function kR(t,e,n){return t instanceof Ui?__(t,e):t instanceof Fi?y_(t,e):n}function m_(t,e){return t instanceof fa?(function(r){return _l(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ha extends qa{}class Ui extends qa{constructor(e){super(),this.elements=e}}function __(t,e){const n=E_(e);for(const r of t.elements)n.some((s=>pn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Fi extends qa{constructor(e){super(),this.elements=e}}function y_(t,e){let n=E_(e);for(const r of t.elements)n=n.filter((s=>!pn(s,r)));return{arrayValue:{values:n}}}class fa extends qa{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function kd(t){return Le(t.integerValue||t.doubleValue)}function E_(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof Fi&&s instanceof Fi?Ts(r.elements,s.elements,pn):r instanceof fa&&s instanceof fa?pn(r.Ae,s.Ae):r instanceof ha&&s instanceof ha})(t.transform,e.transform)}class NR{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ha{}function v_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Au(t.key,qt.none()):new Zi(t.key,t.data,qt.none());{const n=t.data,r=wt.empty();let s=new ze(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _r(t.key,r,new Dt(s.toArray()),qt.none())}}function VR(t,e,n){t instanceof Zi?(function(s,i,o){const c=s.value.clone(),l=Nd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof _r?(function(s,i,o){if(!Mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Nd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(T_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ii(t,e,n,r){return t instanceof Zi?(function(i,o,c,l){if(!Mo(i.precondition,o))return c;const u=i.value.clone(),f=Vd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof _r?(function(i,o,c,l){if(!Mo(i.precondition,o))return c;const u=Vd(i.fieldTransforms,l,o),f=o.data;return f.setAll(T_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function xR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=m_(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function Dd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ts(r,s,((i,o)=>DR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends Ha{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends Ha{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Nd(t,e,n){const r=new Map;Ae(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,kR(o,c,n[s]))}return r}function Vd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OR(i,o,e))}return r}class Au extends Ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MR extends Ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&VR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=p_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=v_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),me())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,((n,r)=>Dd(n,r)))&&Ts(this.baseMutations,e.baseMutations,((n,r)=>Dd(n,r)))}}class Su{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return SR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Su(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,ye;function BR(t){switch(t){case U.OK:return oe(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function I_(t){if(t===void 0)return On("GRPC error has no .code"),U.UNKNOWN;switch(t){case je.OK:return U.OK;case je.CANCELLED:return U.CANCELLED;case je.UNKNOWN:return U.UNKNOWN;case je.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case je.INTERNAL:return U.INTERNAL;case je.UNAVAILABLE:return U.UNAVAILABLE;case je.UNAUTHENTICATED:return U.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case je.NOT_FOUND:return U.NOT_FOUND;case je.ALREADY_EXISTS:return U.ALREADY_EXISTS;case je.PERMISSION_DENIED:return U.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case je.ABORTED:return U.ABORTED;case je.OUT_OF_RANGE:return U.OUT_OF_RANGE;case je.UNIMPLEMENTED:return U.UNIMPLEMENTED;case je.DATA_LOSS:return U.DATA_LOSS;default:return oe(39323,{code:t})}}(ye=je||(je={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new rr([4294967295,4294967295],0);function xd(t){const e=jR().encode(t),n=new Um;return n.update(e),new Uint8Array(n.digest())}function Md(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rr([n,r],0),new rr([s,i],0)]}class bu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=rr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(rr.fromNumber(r)));return s.compare($R)===1&&(s=new rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=xd(e),[r,s]=Md(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=xd(e),[r,s]=Md(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ga(ae.min(),s,new xe(ge),kn(),me())}}class eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class w_{constructor(e,n){this.targetId=e,this.Ce=n}}class A_{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ld{constructor(){this.ve=0,this.Fe=Ud(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=me(),n=me(),r=me();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}})),new eo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ud()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ae(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class qR{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=To(),this.He=To(),this.Ye=new xe(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:oe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(El(i))if(r===0){const o=new te(i.path);this.et(n,o,ut.newNoDocument(o,ae.min()))}else Ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ur(r).toUint8Array()}catch(l){if(l instanceof Ym)return vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bu(o,s,i)}catch(l){return vs(l instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&El(c.target)){const l=new te(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ut.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}}));let r=me();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Ga(e,n,this.Ye,this.je,r);return this.je=kn(),this.Je=To(),this.He=To(),this.Ye=new xe(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ld,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ze(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ze(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ld),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function To(){return new xe(te.comparator)}function Ud(){return new xe(te.comparator)}const HR={asc:"ASCENDING",desc:"DESCENDING"},GR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zR={and:"AND",or:"OR"};class WR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tl(t,e){return t.useProto3Json||La(e)?e:{value:e}}function da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KR(t,e){return da(t,e.toTimestamp())}function ln(t){return Ae(!!t,49232),ae.fromTimestamp((function(n){const r=lr(n);return new Ne(r.seconds,r.nanos)})(t))}function Ru(t,e){return Il(t,e).canonicalString()}function Il(t,e){const n=(function(s){return new De(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function b_(t){const e=De.fromString(t);return Ae(k_(e),10190,{key:e.toString()}),e}function wl(t,e){return Ru(t.databaseId,e.path)}function Lc(t,e){const n=b_(e);if(n.get(1)!==t.databaseId.projectId)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(C_(n))}function R_(t,e){return Ru(t.databaseId,e)}function QR(t){const e=b_(t);return e.length===4?De.emptyPath():C_(e)}function Al(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C_(t){return Ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Fd(t,e,n){return{name:wl(t,e),fields:n.value.mapValue.fields}}function YR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:oe(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ae(f===void 0||typeof f=="string",58123),nt.fromBase64String(f||"")):(Ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),nt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?U.UNKNOWN:I_(u.code);return new X(f,u.message||"")})(o);n=new A_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lc(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):ae.min(),c=new wt({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Lo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lc(t,r.document),i=r.readTime?ln(r.readTime):ae.min(),o=ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Lo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lc(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FR(s,i),c=r.targetId;n=new w_(c,o)}}return n}function JR(t,e){let n;if(e instanceof Zi)n={update:Fd(t,e.key,e.value)};else if(e instanceof Au)n={delete:wl(t,e.key)};else if(e instanceof _r)n={update:Fd(t,e.key,e.data),updateMask:oC(e.fieldMask)};else{if(!(e instanceof MR))return oe(16599,{Vt:e.type});n={verify:wl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ha)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw oe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:KR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)})(t,e.precondition)),n}function XR(t,e){return t&&t.length>0?(Ae(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(ae.min())&&(o=ln(i)),new NR(o,s.transformResults||[])})(n,e)))):[]}function ZR(t,e){return{documents:[R_(t,e.path)]}}function eC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=R_(t,s);const i=(function(u){if(u.length!==0)return O_(gn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(g){return{field:ts(g.field),direction:rC(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Tl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function tC(t){let e=QR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const g=P_(p);return g instanceof gn&&o_(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((g=>(function(O){return new ua(ns(O.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let g;return g=typeof p=="object"?p.value:p,La(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(p){const g=!!p.before,_=p.values||[];return new la(_,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const g=!p.before,_=p.values||[];return new la(_,g)})(n.endAt)),ER(e,s,o,i,c,"F",l,u)}function nC(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function P_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ge.create(ns(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return gn.create(n.compositeFilter.filters.map((r=>P_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}})(n.compositeFilter.op))})(t):oe(30097,{filter:t})}function rC(t){return HR[t]}function sC(t){return GR[t]}function iC(t){return zR[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return tt.fromServerFormat(t.fieldPath)}function O_(t){return t instanceof Ge?(function(n){if(n.op==="=="){if(bd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(Sd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(Sd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:sC(n.op),value:n.value}}})(t):t instanceof gn?(function(n){const r=n.getFilters().map((s=>O_(s)));return r.length===1?r[0]:{compositeFilter:{op:iC(n.op),filters:r}}})(t):oe(54877,{filter:t})}function oC(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function k_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),c=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.yt=e}}function cC(t){const e=tC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.Cn=new uC}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(cr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class uC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},D_=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(D_,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new As(0)}static cr(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="LruGarbageCollector",hC=1048576;function $d([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class fC{constructor(e){this.Ir=e,this.buffer=new ze($d),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$d(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){J(jd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?J(jd,"Ignoring IndexedDB error during garbage collection: ",n):await Ds(n)}await this.Vr(3e5)}))}}class pC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ma.ce);const r=new fC(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Bd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bd):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Zr()<=pe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function gC(t,e){return new pC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.changes=new jr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ii(r.mutation,s,Dt.empty(),Ne.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,me()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=me()){const s=Cr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=si();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,me())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=kn();const o=Ti(),c=(function(){return Ti()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof _r)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ii(f.mutation,u,f.mutation.getFieldMask(),Ne.now())):o.set(u.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>c.set(u,new _C(f,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Ti();let s=new xe(((o,c)=>o-c)),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Dt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=p_();f.forEach((g=>{if(!i.has(g)){const _=v_(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Cr());let c=Vi,l=i;return o.next((u=>M.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,me()))).next((f=>({batchId:c,changes:d_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next((r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=si();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const u=(function(p,g){return new Fa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))}));let c=si();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Ii(f.mutation,u,Dt.empty(),Ne.now()),$a(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:cC(s.bundledQuery),readTime:ln(s.readTime)}})(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.overlays=new xe(te.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Cr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Cr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UR(n,r));let i=this.qr.get(n);i===void 0&&(i=me(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.Qr=new ze(Qe.$r),this.Ur=new ze(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new te(new De([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(o=>{this.Gr(o),i.push(o.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new te(new De([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=me();return this.Ur.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return te.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ze(Qe.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?yu:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(o=>{const c=this.Xr(o.Yr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ge);return n.forEach((s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],(c=>{r=r.add(c.Yr)}))})),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new te(i),0);let c=new ze(ge);return this.Zr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)}),o),M.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ae(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,(s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.ri=e,this.docs=(function(){return new xe(te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jb(Yb(f),r)<=0||(s.has(f.key)||$a(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ii(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new AC(this)}getSize(e){return M.resolve(this.size)}}class AC extends mC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.persistence=e,this.si=new jr((n=>Tu(n)),Iu),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.oi=0,this._i=new Cu,this.targetCount=0,this.ai=As.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new As(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ma(0),this.li=!1,this.li=!0,this.hi=new TC,this.referenceDelegate=e(this),this.Pi=new SC(this),this.indexManager=new lC,this.remoteDocumentCache=(function(s){return new wC(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new aC(n),this.Ii=new EC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new IC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new bC(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return M.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class bC extends Zb{constructor(e){super(),this.currentSequenceNumber=e}}class Pu{constructor(e){this.persistence=e,this.Ri=new Cu,this.Vi=null}static mi(e){return new Pu(e)}get fi(){if(this.Vi)return this.Vi;throw oe(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,(r=>{const s=te.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,ae.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class pa{constructor(e,n){this.persistence=e,this.pi=new jr((r=>nR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=gC(this,n)}static mi(e,n){return new pa(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return M.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(o=>this.br(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ae.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Vo(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ou(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return iw()?8:eR(pt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new RC;return this.Ss(e,n,o).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Zr()<=pe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Zr()<=pe.DEBUG&&J("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Zr()<=pe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):M.resolve())}ys(e,n){if(Od(n))return M.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=vl(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=me(...i);return this.ps.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,vl(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ws(e,n,r,s){return Od(n)||s.isEqual(ae.min())?M.resolve(null):this.ps.getDocuments(e,r).next((i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?M.resolve(null):(Zr()<=pe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.vs(e,o,n,Qb(s,Vi)).next((c=>c)))}))}Ds(e,n){let r=new ze(h_(e));return n.forEach(((s,i)=>{$a(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Zr()<=pe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",es(n)),this.ps.getDocumentsMatchingQuery(e,n,cr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="LocalStore",PC=3e8;class OC{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new xe(ge),this.xs=new jr((i=>Tu(i)),Iu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function kC(t,e,n,r){return new OC(t,e,n,r)}async function V_(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=me();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ls:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function DC(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,g=p.keys();let _=M.resolve();return g.forEach((O=>{_=_.next((()=>f.getEntry(l,O))).next((k=>{const V=u.docVersions.get(O);Ae(V!==null,48541),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=me();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function x_(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function NC(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(nt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(k,V,q){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=PC?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(g,_,f)&&c.push(n.Pi.updateTargetData(i,_))}));let l=kn(),u=me();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(VC(i,o,e.documentUpdates).next((f=>{l=f.ks,u=f.qs}))),!r.isEqual(ae.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function VC(t,e,n){let r=me(),s=me();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=kn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):J(ku,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{ks:o,qs:s}}))}function xC(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=yu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function MC(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.Pi.allocateTargetId(r).next((o=>(s=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function Sl(t,e,n){const r=ce(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ns(o))throw o;J(ku,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function qd(t,e,n){const r=ce(t);let s=ae.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=ce(l),g=p.xs.get(f);return g!==void 0?M.resolve(p.Ms.get(g)):p.Pi.getTargetData(u,f)})(r,o,cn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:me()))).next((c=>(LC(r,IR(e),c),{documents:c,Qs:i})))))}function LC(t,e,n){let r=t.Os.get(e)||ae.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Hd{constructor(){this.activeTargetIds=CR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UC{constructor(){this.Mo=new Hd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Hd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="ConnectivityMonitor";class zd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){J(Gd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){J(Gd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io=null;function bl(){return Io===null?Io=(function(){return 268435456+Math.round(2147483648*Math.random())})():Io++,"0x"+Io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="RestConnection",BC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===aa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=bl(),c=this.zo(e,n.toUriEncodedString());J(Uc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=Cs(u);return this.Jo(e,c,l,r,f).then((p=>(J(Uc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw vs(Uc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ks})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=BC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class qC extends jC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=bl();return new Promise(((c,l)=>{const u=new Fm;u.setWithCredentials(!0),u.listenOnce(Bm.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case No.NO_ERROR:const p=u.getResponseJson();J(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case No.TIMEOUT:J(ot,`RPC '${e}' ${o} timed out`),l(new X(U.DEADLINE_EXCEEDED,"Request time out"));break;case No.HTTP_ERROR:const g=u.getStatus();if(J(ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const O=_?.error;if(O&&O.status&&O.message){const k=(function(q){const $=q.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf($)>=0?$:U.UNKNOWN})(O.status);l(new X(k,O.message))}else l(new X(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new X(U.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{J(ot,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);J(ot,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=bl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=qm(),c=$m(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");J(ot,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,_=!1;const O=new $C({Yo:V=>{_?J(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(J(ot,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),J(ot,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),k=(V,q,$)=>{V.listen(q,(H=>{try{$(H)}catch(K){setTimeout((()=>{throw K}),0)}}))};return k(p,ri.EventType.OPEN,(()=>{_||(J(ot,`RPC '${e}' stream ${s} transport opened.`),O.o_())})),k(p,ri.EventType.CLOSE,(()=>{_||(_=!0,J(ot,`RPC '${e}' stream ${s} transport closed`),O.a_(),this.E_(p))})),k(p,ri.EventType.ERROR,(V=>{_||(_=!0,vs(ot,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),O.a_(new X(U.UNAVAILABLE,"The operation could not be completed")))})),k(p,ri.EventType.MESSAGE,(V=>{if(!_){const q=V.data[0];Ae(!!q,16349);const $=q,H=$?.error||$[0]?.error;if(H){J(ot,`RPC '${e}' stream ${s} received error:`,H);const K=H.status;let ue=(function(E){const T=je[E];if(T!==void 0)return I_(T)})(K),de=H.message;ue===void 0&&(ue=U.INTERNAL,de="Unknown error status: "+K+" with message "+H.message),_=!0,O.a_(new X(ue,de)),p.close()}else J(ot,`RPC '${e}' stream ${s} received:`,q),O.u_(q)}})),k(c,jm.STAT_EVENT,(V=>{V.stat===pl.PROXY?J(ot,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===pl.NOPROXY&&J(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return new WR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="PersistentStream";class L_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new M_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new X(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return J(Wd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(J(Wd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class HC extends L_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=YR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?ln(o.readTime):ae.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Al(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=El(l)?{documents:ZR(i,l)}:{query:eC(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=S_(i,o.resumeToken);const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ae.min())>0){c.readTime=da(i,o.snapshotVersion.toTimestamp());const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=nC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Al(this.serializer),n.removeTarget=e,this.q_(n)}}class GC extends L_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=XR(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Al(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>JR(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{}class WC extends zC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Go(e,Il(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(U.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Ho(e,Il(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(U.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class KC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="RemoteStore";class QC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((o=>{r.enqueueAndForget((async()=>{$r(this)&&(J(Mr,"Restarting streams for network reachability change."),await(async function(l){const u=ce(l);u.Ea.add(4),await to(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Wa(u)})(this))}))})),this.Ra=new KC(r,s)}}async function Wa(t){if($r(t))for(const e of t.da)await e(!0)}async function to(t){for(const e of t.da)await e(!1)}function U_(t,e){const n=ce(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),xu(n)?Vu(n):Vs(n).O_()&&Nu(n,e))}function Du(t,e){const n=ce(t),r=Vs(n);n.Ia.delete(e),r.O_()&&F_(n,e),n.Ia.size===0&&(r.O_()?r.L_():$r(n)&&n.Ra.set("Unknown"))}function Nu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).Y_(e)}function F_(t,e){t.Va.Ue(e),Vs(t).Z_(e)}function Vu(t){t.Va=new qR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.Ra.ua()}function xu(t){return $r(t)&&!Vs(t).x_()&&t.Ia.size>0}function $r(t){return ce(t).Ea.size===0}function B_(t){t.Va=void 0}async function YC(t){t.Ra.set("Online")}async function JC(t){t.Ia.forEach(((e,n)=>{Nu(t,e)}))}async function XC(t,e){B_(t),xu(t)?(t.Ra.ha(e),Vu(t)):t.Ra.set("Unknown")}async function ZC(t,e,n){if(t.Ra.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){J(Mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ga(t,r)}else if(e instanceof Lo?t.Va.Ze(e):e instanceof w_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ae.min()))try{const r=await x_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),F_(i,l);const p=new Xn(f.target,l,u,f.sequenceNumber);Nu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){J(Mr,"Failed to raise snapshot:",r),await ga(t,r)}}async function ga(t,e,n){if(!Ns(e))throw e;t.Ea.add(1),await to(t),t.Ra.set("Offline"),n||(n=()=>x_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{J(Mr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Wa(t)}))}function j_(t,e){return e().catch((n=>ga(t,n,e)))}async function Ka(t){const e=ce(t),n=fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:yu;for(;eP(e);)try{const s=await xC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,tP(e,s)}catch(s){await ga(e,s)}$_(e)&&q_(e)}function eP(t){return $r(t)&&t.Ta.length<10}function tP(t,e){t.Ta.push(e);const n=fr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function $_(t){return $r(t)&&!fr(t).x_()&&t.Ta.length>0}function q_(t){fr(t).start()}async function nP(t){fr(t).ra()}async function rP(t){const e=fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function sP(t,e,n){const r=t.Ta.shift(),s=Su.from(r,e,n);await j_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ka(t)}async function iP(t,e){e&&fr(t).X_&&await(async function(r,s){if((function(o){return BR(o)&&o!==U.ABORTED})(s.code)){const i=r.Ta.shift();fr(r).B_(),await j_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ka(r)}})(t,e),$_(t)&&q_(t)}async function Kd(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),J(Mr,"RemoteStore received new credentials");const r=$r(n);n.Ea.add(3),await to(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Wa(n)}async function oP(t,e){const n=ce(t);e?(n.Ea.delete(2),await Wa(n)):e||(n.Ea.add(2),await to(n),n.Ra.set("Unknown"))}function Vs(t){return t.ma||(t.ma=(function(n,r,s){const i=ce(n);return i.sa(),new HC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:YC.bind(null,t),t_:JC.bind(null,t),r_:XC.bind(null,t),H_:ZC.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),xu(t)?Vu(t):t.Ra.set("Unknown")):(await t.ma.stop(),B_(t))}))),t.ma}function fr(t){return t.fa||(t.fa=(function(n,r,s){const i=ce(n);return i.sa(),new GC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:nP.bind(null,t),r_:iP.bind(null,t),ta:rP.bind(null,t),na:sP.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await Ka(t)):(await t.fa.stop(),t.Ta.length>0&&(J(Mr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Mu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lu(t,e){if(On("AsyncQueue",`${e}: ${t}`),Ns(t))return new X(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static emptySet(e){return new ds(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=si(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.ga=new xe(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):oe(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ss{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ss(e,n,ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class cP{constructor(){this.queries=Yd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ce(n),i=s.queries;s.queries=Yd(),i.forEach(((o,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new X(U.ABORTED,"Firestore shutting down"))}}function Yd(){return new jr((t=>u_(t)),ja)}async function H_(t,e){const n=ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new aP,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Lu(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Uu(n)}async function G_(t,e){const n=ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lP(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Uu(n)}function uP(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Uu(t){t.Ca.forEach((e=>{e.next()}))}var Rl,Jd;(Jd=Rl||(Rl={})).Ma="default",Jd.Cache="cache";class z_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.key=e}}class K_{constructor(e){this.key=e}}class hP{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=me(),this.mutatedKeys=me(),this.eu=h_(e),this.tu=new ds(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Qd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const g=s.get(f),_=$a(this.query,p)?p:null,O=!!g&&this.mutatedKeys.has(g.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let V=!1;g&&_?g.data.isEqual(_.data)?O!==k&&(r.track({type:3,doc:_}),V=!0):this.su(g,_)||(r.track({type:2,doc:_}),V=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),V=!0):g&&!_&&(r.track({type:1,doc:g}),V=!0,(l||u)&&(c=!0)),V&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((f,p)=>(function(_,O){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{Rt:V})}};return k(_)-k(O)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new Ss(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=me(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new K_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new W_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=me();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ss.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Fu="SyncEngine";class fP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dP{constructor(e){this.key=e,this.hu=!1}}class pP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jr((c=>u_(c)),ja),this.Iu=new Map,this.Eu=new Set,this.du=new xe(te.comparator),this.Au=new Map,this.Ru=new Cu,this.Vu={},this.mu=new Map,this.fu=As.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gP(t,e,n=!0){const r=ey(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Q_(r,e,n,!0),s}async function mP(t,e){const n=ey(t);await Q_(n,e,!0,!1)}async function Q_(t,e,n,r){const s=await MC(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await _P(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&U_(t.remoteStore,s),c}async function _P(t,e,n,r,s){t.pu=(p,g,_)=>(async function(k,V,q,$){let H=V.view.ru(q);H.Cs&&(H=await qd(k.localStore,V.query,!1).then((({documents:w})=>V.view.ru(w,H))));const K=$&&$.targetChanges.get(V.targetId),ue=$&&$.targetMismatches.get(V.targetId)!=null,de=V.view.applyChanges(H,k.isPrimaryClient,K,ue);return Zd(k,V.targetId,de.au),de.snapshot})(t,p,g,_);const i=await qd(t.localStore,e,!0),o=new hP(e,i.Qs),c=o.ru(i.documents),l=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Zd(t,n,u.au);const f=new fP(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function yP(t,e,n){const r=ce(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ja(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Sl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Du(r.remoteStore,s.targetId),Cl(r,s.targetId)})).catch(Ds)):(Cl(r,s.targetId),await Sl(r.localStore,s.targetId,!0))}async function EP(t,e){const n=ce(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Du(n.remoteStore,r.targetId))}async function vP(t,e,n){const r=RP(t);try{const s=await(function(o,c){const l=ce(o),u=Ne.now(),f=c.reduce(((_,O)=>_.add(O.key)),me());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let O=kn(),k=me();return l.Ns.getEntries(_,f).next((V=>{O=V,O.forEach(((q,$)=>{$.isValidDocument()||(k=k.add(q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,O))).next((V=>{p=V;const q=[];for(const $ of c){const H=xR($,p.get($.key).overlayedDocument);H!=null&&q.push(new _r($.key,H,r_(H.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,q,c)})).next((V=>{g=V;const q=V.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,V.batchId,q)}))})).then((()=>({batchId:g.batchId,changes:d_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new xe(ge)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u})(r,s.batchId,n),await no(r,s.changes),await Ka(r.remoteStore)}catch(s){const i=Lu(s,"Failed to persist write");n.reject(i)}}async function Y_(t,e){const n=ce(t);try{const r=await NC(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ae(o.hu,14607):s.removedDocuments.size>0&&(Ae(o.hu,42227),o.hu=!1))})),await no(n,r,e)}catch(r){await Ds(r)}}function Xd(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ce(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(c)&&(u=!0)})),u&&Uu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TP(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new xe(te.comparator);o=o.insert(i,ut.newNoDocument(i,ae.min()));const c=me().add(i),l=new Ga(ae.min(),new Map,new xe(ge),o,c);await Y_(r,l),r.du=r.du.remove(i),r.Au.delete(e),Bu(r)}else await Sl(r.localStore,e,!1).then((()=>Cl(r,e,n))).catch(Ds)}async function IP(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await DC(n.localStore,e);X_(n,r,null),J_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,s)}catch(s){await Ds(s)}}async function wP(t,e,n){const r=ce(t);try{const s=await(function(o,c){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ae(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);X_(r,e,n),J_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,s)}catch(s){await Ds(s)}}function J_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function X_(t,e,n){const r=ce(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Z_(t,r)}))}function Z_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Du(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Bu(t))}function Zd(t,e,n){for(const r of n)r instanceof W_?(t.Ru.addReference(r.key,e),AP(t,r)):r instanceof K_?(J(Fu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Z_(t,r.key)):oe(19791,{wu:r})}function AP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(J(Fu,"New document in limbo: "+n),t.Eu.add(r),Bu(t))}function Bu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new te(De.fromString(e)),r=t.fu.next();t.Au.set(r,new dP(n)),t.du=t.du.insert(n,r),U_(t.remoteStore,new Xn(cn(Ba(n.path)),r,"TargetPurposeLimboResolution",Ma.ce))}}async function no(t,e,n){const r=ce(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ou.As(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.H_(s),await(async function(l,u){const f=ce(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(g=>M.forEach(g.Es,(_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_))).next((()=>M.forEach(g.ds,(_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))))))}catch(p){if(!Ns(p))throw p;J(ku,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=f.Ms.get(g),O=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(g,k)}}})(r.localStore,i))}async function SP(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){J(Fu,"User change. New user:",e.toKey());const r=await V_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new X(U.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.Ls)}}function bP(t,e){const n=ce(t),r=n.Au.get(e);if(r&&r.hu)return me().add(r.key);{let s=me();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function ey(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TP.bind(null,e),e.Pu.H_=lP.bind(null,e.eventManager),e.Pu.yu=uP.bind(null,e.eventManager),e}function RP(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wP.bind(null,e),e}class ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=za(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return kC(this.persistence,new CC,e.initialUser,this.serializer)}Cu(e){return new N_(Pu.mi,this.serializer)}Du(e){return new UC}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ma.provider={build:()=>new ma};class CP extends ma{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ae(this.persistence.referenceDelegate instanceof pa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new N_((r=>pa.mi(r,n)),this.serializer)}}class Pl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SP.bind(null,this.syncEngine),await oP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new cP})()}createDatastore(e){const n=za(e.databaseInfo.databaseId),r=(function(i){return new qC(i)})(e.databaseInfo);return(function(i,o,c,l){return new WC(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new QC(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Xd(this.syncEngine,n,0)),(function(){return zd.v()?new zd:new FC})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new pP(s,i,o,c,l,u);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=ce(n);J(Mr,"RemoteStore shutting down."),r.Ea.add(5),await to(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Pl.provider={build:()=>new Pl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="FirestoreClient";class PP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=mu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{J(dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(J(dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),J(dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await V_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ep(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OP(t);J(dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Kd(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Kd(e.remoteStore,s))),t._onlineComponents=e}async function OP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(dr,"Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await Bc(t,new ma)}}else J(dr,"Using default OfflineComponentProvider"),await Bc(t,new CP(void 0));return t._offlineComponents}async function ny(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(dr,"Using user provided OnlineComponentProvider"),await ep(t,t._uninitializedComponentsProvider._online)):(J(dr,"Using default OnlineComponentProvider"),await ep(t,new Pl))),t._onlineComponents}function kP(t){return ny(t).then((e=>e.syncEngine))}async function Ol(t){const e=await ny(t),n=e.eventManager;return n.onListen=gP.bind(null,e.syncEngine),n.onUnlisten=yP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EP.bind(null,e.syncEngine),n}function DP(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new ty({next:g=>{f.Nu(),o.enqueueAndForget((()=>G_(i,p)));const _=g.docs.has(c);!_&&g.fromCache?u.reject(new X(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?u.reject(new X(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new z_(Ba(c.path),f,{includeMetadataChanges:!0,qa:!0});return H_(i,p)})(await Ol(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="firestore.googleapis.com",np=!0;class rp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sy,this.ssl=np}else this.host=e.host,this.ssl=e.ssl??np;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=D_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hC)throw new X(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ry(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ub;switch(r.type){case"firstParty":return new $b(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=tp.get(n);r&&(J("ComponentProvider","Removing Datastore"),tp.delete(n),r.terminate())})(this),Promise.resolve()}}function NP(t,e,n,r={}){t=an(t,Qa);const s=Cs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Yg(`https://${c}`),Jg("Firestore",!0)),i.host!==sy&&i.host!==c&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!kr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=ct.MOCK_USER;else{u=YI(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new X(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ct(p)}t._authCredentials=new Fb(new Gm(u,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ya(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Xi(n,qe._jsonSchema))return new qe(e,r||null,new te(De.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:$e("string",qe._jsonSchemaVersion),referencePath:$e("string")};class ir extends Ya{constructor(e,n,r){super(e,n,Ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new te(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function wo(t,e,...n){if(t=Ye(t),zm("collection","path",e),t instanceof Qa){const r=De.fromString(e,...n);return _d(r),new ir(t,null,r)}{if(!(t instanceof qe||t instanceof ir))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return _d(r),new ir(t.firestore,null,r)}}function oi(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=mu.newId()),zm("doc","path",e),t instanceof Qa){const r=De.fromString(e,...n);return md(r),new qe(t,null,new te(r))}{if(!(t instanceof qe||t instanceof ir))throw new X(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return md(r),new qe(t.firestore,t instanceof ir?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="AsyncQueue";class ip{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new M_(this,"async_queue_retry"),this._c=()=>{const r=Fc();r&&J(sp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new sr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ns(e))throw e;J(sp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,On("INTERNAL UNHANDLED ERROR: ",op(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Mu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&oe(47125,{Pc:op(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function op(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Lr extends Qa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ip,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ip(e),this._firestoreClient=void 0,await e}}}function VP(t,e){const n=typeof t=="object"?t:tm(),r=typeof t=="string"?t:aa,s=ou(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=KI("firestore");i&&NP(s,...i)}return s}function ju(t){if(t._terminated)throw new X(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xP(t),t._firestoreClient}function xP(t){const e=t._freezeSettings(),n=(function(s,i,o,c){return new iR(s,i,o,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ry(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new PP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(nt.fromBase64String(e))}catch(n){throw new X(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xi(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:$e("string",xt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:un._jsonSchemaVersion}}static fromJSON(e){if(Xi(e,un._jsonSchema))return new un(e.latitude,e.longitude)}}un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:$e("string",un._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xi(e,hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new hn(e.vectorValues);throw new X(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}hn._jsonSchemaVersion="firestore/vectorValue/1.0",hn._jsonSchema={type:$e("string",hn._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=/^__.*__$/;class LP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}class iy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ac:t})}}class qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new qu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return _a(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(oy(this.Ac)&&MP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class UP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||za(e)}Cc(e,n,r,s=!1){return new qu({Ac:e,methodName:n,Dc:r,path:tt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ay(t){const e=t._freezeSettings(),n=za(t._databaseId);return new UP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FP(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Hu("Data must be an object, but it was:",o,r);const c=cy(r,o);let l,u;if(i.merge)l=new Dt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=kl(e,p,n);if(!o.contains(g))throw new X(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);uy(f,g)||f.push(g)}l=new Dt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new LP(new wt(c),l,u)}class Xa extends $u{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xa}}function BP(t,e,n,r){const s=t.Cc(1,e,n);Hu("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();mr(r,((l,u)=>{const f=Gu(e,l,n);u=Ye(u);const p=s.yc(f);if(u instanceof Xa)i.push(f);else{const g=Za(u,p);g!=null&&(i.push(f),o.set(f,g))}}));const c=new Dt(i);return new iy(o,c,s.fieldTransforms)}function jP(t,e,n,r,s,i){const o=t.Cc(1,e,n),c=[kl(e,r,n)],l=[s];if(i.length%2!=0)throw new X(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(kl(e,i[g])),l.push(i[g+1]);const u=[],f=wt.empty();for(let g=c.length-1;g>=0;--g)if(!uy(u,c[g])){const _=c[g];let O=l[g];O=Ye(O);const k=o.yc(_);if(O instanceof Xa)u.push(_);else{const V=Za(O,k);V!=null&&(u.push(_),f.set(_,V))}}const p=new Dt(u);return new iy(f,p,o.fieldTransforms)}function Za(t,e){if(ly(t=Ye(t)))return Hu("Unsupported field value:",e,t),cy(t,e);if(t instanceof $u)return(function(r,s){if(!oy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Za(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:da(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:da(s.serializer,i)}}if(r instanceof un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:S_(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ru(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof hn)return(function(o,c){return{mapValue:{fields:{[t_]:{stringValue:n_},[ca]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return wu(c.serializer,u)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${_u(r)}`)})(t,e)}function cy(t,e){const n={};return Qm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,((r,s)=>{const i=Za(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function ly(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof un||t instanceof xt||t instanceof qe||t instanceof $u||t instanceof hn)}function Hu(t,e,n){if(!ly(n)||!Wm(n)){const r=_u(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function kl(t,e,n){if((e=Ye(e))instanceof Ja)return e._internalPath;if(typeof e=="string")return Gu(t,e);throw _a("Field path arguments must be of type string or ",t,!1,void 0,n)}const $P=new RegExp("[~\\*/\\[\\]]");function Gu(t,e,n){if(e.search($P)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ja(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new X(U.INVALID_ARGUMENT,c+t+l)}function uy(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qP extends hy{data(){return super.data()}}function fy(t,e){return typeof e=="string"?Gu(t,e):e instanceof Ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class GP{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return mr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[ca].arrayValue?.values?.map((r=>Le(r.doubleValue)));return new hn(n)}convertGeoPoint(e){return new un(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ua(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xi(e));default:return null}}convertTimestamp(e){const n=lr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ae(k_(r),9688,{name:e});const s=new Mi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Or extends hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Or._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Or._jsonSchemaVersion="firestore/documentSnapshot/1.0",Or._jsonSchema={type:$e("string",Or._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class Uo extends Or{data(e={}){return super.data(e)}}class ps{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:WP(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){t=an(t,qe);const e=an(t.firestore,Lr);return DP(ju(e),t._key).then((n=>py(e,t,n)))}ps._jsonSchemaVersion="firestore/querySnapshot/1.0",ps._jsonSchema={type:$e("string",ps._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class dy extends GP{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function jc(t,e,n,...r){t=an(t,qe);const s=an(t.firestore,Lr),i=ay(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Ja?jP(i,"updateDoc",t._key,e,n,r):BP(i,"updateDoc",t._key,e),zu(s,[o.toMutation(t._key,qt.exists(!0))])}function KP(t){return zu(an(t.firestore,Lr),[new Au(t._key,qt.none())])}function lp(t,e){const n=an(t.firestore,Lr),r=oi(t),s=zP(t.converter,e);return zu(n,[FP(ay(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then((()=>r))}function up(t,...e){t=Ye(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ap(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(ap(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,o,c;if(t instanceof qe)o=an(t.firestore,Lr),c=Ba(t._key.path),i={next:l=>{e[r]&&e[r](py(o,t,l))},error:e[r+1],complete:e[r+2]};else{const l=an(t,Ya);o=an(l.firestore,Lr),c=l._query;const u=new dy(o);i={next:f=>{e[r]&&e[r](new ps(o,u,l,f))},error:e[r+1],complete:e[r+2]},HP(t._query)}return(function(u,f,p,g){const _=new ty(g),O=new z_(f,_,p);return u.asyncQueue.enqueueAndForget((async()=>H_(await Ol(u),O))),()=>{_.Nu(),u.asyncQueue.enqueueAndForget((async()=>G_(await Ol(u),O)))}})(ju(o),c,s,i)}function zu(t,e){return(function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget((async()=>vP(await kP(r),s,i))),i.promise})(ju(t),e)}function py(t,e,n){const r=n.docs.get(e._key),s=new dy(t);return new Or(t,s,e._key,r,new ai(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ks=s})(Ps),Es(new Dr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Lr(new Bb(r.getProvider("auth-internal")),new qb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(u.options.projectId,f)})(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),nr(fd,dd,e),nr(fd,dd,"esm2020")})();var QP="firebase",YP="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(QP,YP,"app");const JP={apiKey:"AIzaSyC92WRht8eyV1sYdvzTCru6v-BepOAUH_4",authDomain:"vue-firebase-2-31128-afb7c.firebaseapp.com",projectId:"vue-firebase-2-31128-afb7c",storageBucket:"vue-firebase-2-31128-afb7c.firebasestorage.app",messagingSenderId:"501569443145",appId:"1:501569443145:web:f9707c0544df869974f698"},gy=em(JP),Ao=Mb(gy),qn=VP(gy),my=FI({state:{user:null,loadingUser:!1,cursos:[],loadingCursos:!1,carrito:[],inscripciones:[],loadingInscripciones:!1,unsubscribeCursos:null,unsubscribeInscripciones:null},getters:{getUser:t=>t.user,isAuthenticated:t=>t.user!==null,getUserEmail:t=>t.user?.email||"",getCursos:t=>t.cursos,getCursoById:t=>e=>t.cursos.find(n=>n.id===e),getCursosActivos:t=>t.cursos.filter(e=>e.estado===!0),getTotalCursos:t=>t.cursos.length,isLoadingCursos:t=>t.loadingCursos,isLoadingUser:t=>t.loadingUser,getCarrito:t=>t.carrito,getTotalCarrito:t=>t.carrito.length,getTotalPrecioCarrito:t=>t.carrito.reduce((e,n)=>e+n.cursoPrecio,0),getCursoEnCarrito:t=>e=>t.carrito.find(n=>n.cursoId===e),getInscripciones:t=>t.inscripciones,isLoadingInscripciones:t=>t.loadingInscripciones,getInscripcionesPorCurso:t=>e=>t.inscripciones.filter(n=>n.cursoId===e)},mutations:{SET_USER(t,e){t.user=e},SET_LOADING_USER(t,e){t.loadingUser=e},SET_CURSOS(t,e){t.cursos=e},SET_LOADING_CURSOS(t,e){t.loadingCursos=e},ADD_CURSO(t,e){t.cursos.push(e)},UPDATE_CURSO(t,e){const n=t.cursos.findIndex(r=>r.id===e.id);n!==-1&&(t.cursos[n]=e)},DELETE_CURSO(t,e){t.cursos=t.cursos.filter(n=>n.id!==e)},SET_UNSUBSCRIBE_CURSOS(t,e){t.unsubscribeCursos=e},RESET_CURSOS(t){t.cursos=[],t.unsubscribeCursos&&(t.unsubscribeCursos(),t.unsubscribeCursos=null)},AGREGAR_AL_CARRITO(t,e){t.carrito.find(r=>r.cursoId===e.id)||t.carrito.push({cursoId:e.id,cursoNombre:e.nombre,cursoPrecio:parseInt(e.precio),cursoImagen:e.img,cursoCodigo:e.codigo})},ELIMINAR_DEL_CARRITO(t,e){t.carrito=t.carrito.filter(n=>n.cursoId!==e)},LIMPIAR_CARRITO(t){t.carrito=[]},SET_INSCRIPCIONES(t,e){t.inscripciones=e},SET_LOADING_INSCRIPCIONES(t,e){t.loadingInscripciones=e},SET_UNSUBSCRIBE_INSCRIPCIONES(t,e){t.unsubscribeInscripciones=e},RESET_INSCRIPCIONES(t){t.inscripciones=[],t.unsubscribeInscripciones&&(t.unsubscribeInscripciones(),t.unsubscribeInscripciones=null)}},actions:{async registerUser({commit:t},{email:e,password:n}){t("SET_LOADING_USER",!0);try{const{user:r}=await vS(Ao,e,n);t("SET_USER",{email:r.email,uid:r.uid}),Fo.push({name:"home"})}catch(r){throw console.error("Error al registrar usuario:",r),alert("Error al registrar usuario: "+r.message),r}finally{t("SET_LOADING_USER",!1)}},async loginUser({commit:t},{email:e,password:n}){t("SET_LOADING_USER",!0);try{const{user:r}=await TS(Ao,e,n);t("SET_USER",{email:r.email,uid:r.uid}),Fo.push({name:"home"})}catch(r){throw console.error("Error al iniciar sesión:",r),alert("Error al iniciar sesión: "+r.message),r}finally{t("SET_LOADING_USER",!1)}},async logoutUser({commit:t}){try{await SS(Ao),t("SET_USER",null),t("RESET_CURSOS"),Fo.push({name:"login"})}catch(e){console.error("Error al cerrar sesión:",e),alert("Error al cerrar sesión: "+e.message)}},currentUser({commit:t}){return new Promise((e,n)=>{const r=AS(Ao,s=>{s?t("SET_USER",{email:s.email,uid:s.uid}):t("SET_USER",null),e(s),r()})})},async getCursos({commit:t,state:e}){if(!e.unsubscribeCursos){t("SET_LOADING_CURSOS",!0);try{const n=wo(qn,"cursos"),r=up(n,s=>{const i=[];s.forEach(o=>{i.push({id:o.id,...o.data()})}),t("SET_CURSOS",i),t("SET_LOADING_CURSOS",!1)},s=>{console.error("Error al obtener cursos:",s),t("SET_LOADING_CURSOS",!1)});t("SET_UNSUBSCRIBE_CURSOS",r)}catch(n){console.error("Error al configurar listener de cursos:",n),t("SET_LOADING_CURSOS",!1)}}},async addCurso({commit:t,dispatch:e},n){try{const r=wo(qn,"cursos"),s=await lp(r,n);return console.log("Curso agregado con ID:",s.id),await e("getCursos"),s.id}catch(r){throw console.error("Error al agregar curso:",r),alert("Error al agregar curso: "+r.message),r}},async updateCurso({commit:t,dispatch:e},n){try{const{id:r,...s}=n,i=oi(qn,"cursos",r);await jc(i,s),console.log("Curso actualizado:",r),await e("getCursos")}catch(r){throw console.error("Error al actualizar curso:",r),alert("Error al actualizar curso: "+r.message),r}},async deleteCurso({commit:t},e){try{const n=oi(qn,"cursos",e);await KP(n),console.log("Curso eliminado:",e)}catch(n){throw console.error("Error al eliminar curso:",n),alert("Error al eliminar curso: "+n.message),n}},agregarAlCarrito({commit:t},e){t("AGREGAR_AL_CARRITO",e)},async eliminarDelCarrito({commit:t,dispatch:e},n){t("ELIMINAR_DEL_CARRITO",n),await e("restaurarCupo",n)},async limpiarCarrito({commit:t,state:e,dispatch:n}){for(const r of e.carrito)await n("restaurarCupo",r.cursoId);t("LIMPIAR_CARRITO")},async reducirCupo({commit:t},e){try{const n=oi(qn,"cursos",e),r=await cp(n);if(r.exists()){const i=(r.data().inscritos||0)+1;await jc(n,{inscritos:i}),console.log("Cupo reducido exitosamente para curso:",e)}}catch(n){throw console.error("Error al reducir cupo:",n),n}},async restaurarCupo({commit:t},e){try{const n=oi(qn,"cursos",e),r=await cp(n);if(r.exists()){const s=r.data(),i=Math.max((s.inscritos||0)-1,0);await jc(n,{inscritos:i}),console.log("Cupo restaurado exitosamente para curso:",e)}}catch(n){throw console.error("Error al restaurar cupo:",n),n}},async getInscripciones({commit:t,state:e}){if(!e.unsubscribeInscripciones){t("SET_LOADING_INSCRIPCIONES",!0);try{const n=wo(qn,"inscripciones"),r=up(n,s=>{const i=[];s.forEach(o=>{i.push({id:o.id,...o.data()})}),t("SET_INSCRIPCIONES",i),t("SET_LOADING_INSCRIPCIONES",!1)},s=>{console.error("Error al obtener inscripciones:",s),t("SET_LOADING_INSCRIPCIONES",!1)});t("SET_UNSUBSCRIBE_INSCRIPCIONES",r)}catch(n){console.error("Error al configurar listener de inscripciones:",n),t("SET_LOADING_INSCRIPCIONES",!1)}}},async procesarCompra({commit:t,state:e},{metodoPago:n}){try{const r=e.user;if(!r)throw new Error("Usuario no autenticado");if(e.carrito.length===0)throw new Error("El carrito está vacío");const s=e.carrito.map(i=>({usuarioId:r.uid,usuarioEmail:r.email,cursoId:i.cursoId,cursoNombre:i.cursoNombre,cursoPrecio:i.cursoPrecio,fechaInscripcion:new Date,estado:"confirmada",metodoPago:n,total:i.cursoPrecio}));for(const i of s)await lp(wo(qn,"inscripciones"),i);return t("LIMPIAR_CARRITO"),console.log("Compra procesada exitosamente"),!0}catch(r){throw console.error("Error al procesar compra:",r),r}}}}),$c=async(t,e,n)=>{await my.dispatch("currentUser")?n():n({name:"login"})},Fo=hI({history:BT("/appweb/"),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:()=>Kr(()=>import("./HomeView-DBsMLQvw.js"),__vite__mapDeps([0,1])),meta:{layout:"DefaultLayout"}},{path:"/administracion",name:"administracion",component:()=>Kr(()=>import("./AdministracionView-AsHEFAE_.js"),__vite__mapDeps([2,3])),beforeEnter:$c,meta:{layout:"DefaultLayout"}},{path:"/carrito",name:"carrito",component:()=>Kr(()=>import("./CarritoView-CbdBsc1S.js"),__vite__mapDeps([4,5])),beforeEnter:$c,meta:{layout:"DefaultLayout"}},{path:"/editar/:id",name:"editar",component:()=>Kr(()=>import("./EditarView-C1wojdB5.js"),__vite__mapDeps([6,7])),beforeEnter:$c,meta:{layout:"DefaultLayout"}},{path:"/login",name:"login",component:()=>Kr(()=>import("./LoginView-C5I_L7Vd.js"),__vite__mapDeps([8,9]))},{path:"/register",name:"register",component:()=>Kr(()=>import("./RegisterView-DpoKP3z0.js"),__vite__mapDeps([10,11]))}]});function XP(){const t=Gl("light"),e=r=>{t.value=r,localStorage.setItem("theme",r),document.documentElement.setAttribute("data-theme",r)},n=()=>{e(t.value==="light"?"dark":"light")};return Gp(()=>{const r=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;e(r||(s?"dark":"light"))}),{theme:t,toggleTheme:n}}const ZP=["aria-label"],e0={key:0},t0={key:1},n0={__name:"ThemeToggle",setup(t){const{theme:e,toggleTheme:n}=XP();return(r,s)=>(Nt(),tn("button",{onClick:s[0]||(s[0]=(...i)=>nn(n)&&nn(n)(...i)),class:"theme-toggle-btn","aria-label":`Cambiar a modo ${nn(e)==="light"?"oscuro":"claro"}`,"aria-live":"polite"},[nn(e)==="light"?(Nt(),tn("span",e0,"🌙")):(Nt(),tn("span",t0,"☀️"))],8,ZP))}},r0=Gi(n0,[["__scopeId","data-v-173303fe"]]),s0={class:"navbar"},i0={class:"navbar__container"},o0=["aria-expanded"],a0={class:"navbar__nav"},c0={key:0},l0={key:1},u0={class:"navbar__actions"},h0={key:0,class:"navbar__user-info"},f0={key:1},d0={__name:"NavBar",setup(t){const e=II(),n=dI(),r=Gl(!1),s=It(()=>e.getters.getUserEmail),i=It(()=>e.getters.getTotalCarrito),o=It(()=>e.getters.isAuthenticated),c=()=>{confirm("¿Estás seguro de que deseas cerrar sesión?")&&(e.dispatch("logoutUser"),n.push("/login"))};return(l,u)=>{const f=Ql("router-link");return Nt(),tn("nav",s0,[at("div",i0,[Ve(f,{class:"navbar__brand",to:"/home"},{default:Rr(()=>[...u[1]||(u[1]=[at("img",{src:"https://i0.wp.com/31minutosoficial.cl/wp-content/uploads/2015/09/cropped-512logo31m-wpicon.png?resize=200%2C200&ssl=1",alt:"Logo 31 Minutos",class:"navbar__logo"},null,-1),at("strong",null,"31 MINUTOS - CURSOS",-1)])]),_:1}),at("button",{onClick:u[0]||(u[0]=p=>r.value=!r.value),class:"navbar__toggler","aria-controls":"navbarNav","aria-expanded":r.value,"aria-label":"Toggle navigation"},[...u[2]||(u[2]=[at("span",null,"☰",-1)])],8,o0),at("div",{class:Ia(["navbar__collapse",{"is-open":r.value}])},[at("ul",a0,[at("li",null,[Ve(f,{class:"navbar__link",to:"/home"},{default:Rr(()=>[...u[3]||(u[3]=[ei("Inicio",-1)])]),_:1})]),o.value?(Nt(),tn("li",c0,[Ve(f,{class:"navbar__link",to:"/carrito"},{default:Rr(()=>[ei(" 🛒 Carrito ("+jo(i.value)+") ",1)]),_:1})])):Yh("",!0),o.value?(Nt(),tn("li",l0,[Ve(f,{class:"navbar__link",to:"/administracion"},{default:Rr(()=>[...u[4]||(u[4]=[ei(" Administración ",-1)])]),_:1})])):Yh("",!0)]),at("div",u0,[o.value?(Nt(),tn("div",h0,[at("span",null,jo(s.value),1),at("button",{onClick:c,class:"btn btn-secondary"}," Cerrar Sesión ")])):(Nt(),tn("div",f0,[Ve(f,{to:"/login",class:"btn btn-primary"},{default:Rr(()=>[...u[5]||(u[5]=[ei(" Iniciar Sesión ",-1)])]),_:1})])),Ve(r0)])],2)])])}}},p0=Gi(d0,[["__scopeId","data-v-6bb55014"]]),g0={},m0={class:"footer"},_0={class:"container"},y0={class:"footer-text"};function E0(t,e){return Nt(),tn("footer",m0,[at("div",_0,[at("p",y0," © "+jo(new Date().getFullYear())+" | Adaptado con ❤️ por un fan de 31 Minutos ",1)])])}const v0=Gi(g0,[["render",E0],["__scopeId","data-v-ecd83fe4"]]),T0={class:"container"},I0={__name:"DefaultLayout",setup(t){return(e,n)=>{const r=Ql("router-view");return Nt(),tn(Zt,null,[Ve(p0),at("main",T0,[Ve(r)]),Ve(v0)],64)}}},w0=Gi(I0,[["__scopeId","data-v-25917d0e"]]),ec=nT(aT);ec.component("DefaultLayout",w0);ec.use(my);ec.use(Fo);ec.mount("#app");export{Zt as F,Gi as _,tn as a,at as b,It as c,dI as d,Nt as e,ei as f,Gl as g,Yh as h,A0 as i,R0 as j,Ve as k,Rr as l,Ql as m,Ia as n,Gp as o,C0 as p,O0 as q,S0 as r,nn as s,jo as t,II as u,b0 as v,P0 as w};
