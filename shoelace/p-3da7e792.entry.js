import{r as t,c as s,h as i,g as e}from"./p-bf36b983.js";import{a as n,g as a,w as h}from"./p-dd8456ca.js";const r=new Map,o=new DOMParser,c=class{constructor(i){t(this,i),this.slLoad=s(this,"sl-load",7),this.slError=s(this,"sl-error",7),this.library="default"}handleChange(){this.setIcon()}connectedCallback(){h(this.host)}componentDidLoad(){this.setIcon()}disconnectedCallback(){n(this.host)}async redraw(){this.setIcon()}getLabel(){let t="";return this.label?t=this.label:this.name?t=this.name.replace(/-/g," "):this.src&&(t=this.src.replace(/.*\//,"").replace(/-/g," ").replace(/\.svg/i,"")),t}async setIcon(){const t=a(this.library);let s=this.src;if(this.name&&t&&(s=t.resolver(this.name)),s)try{const i=await(t=>{if(r.has(t))return r.get(t);{const s=fetch(t).then((async t=>{if(t.ok){const s=document.createElement("div");s.innerHTML=await t.text();const i=s.firstElementChild;return{ok:t.ok,status:t.status,svg:i&&"svg"===i.tagName.toLowerCase()?i.outerHTML:""}}return{ok:t.ok,status:t.status,svg:null}}));return r.set(t,s),s}})(s);if(i.ok){const s=o.parseFromString(i.svg,"text/html").body.querySelector("svg");s?(t&&t.mutator&&t.mutator(s),this.svg=s.outerHTML,this.slLoad.emit()):(this.svg="",this.slError.emit({status:i.status}))}}catch(t){this.slError.emit()}else this.svg&&(this.svg=null)}render(){return i("div",{part:"base",class:"icon",role:"img","aria-label":this.getLabel(),innerHTML:this.svg})}static get assetsDirs(){return["icons"]}get host(){return e(this)}static get watchers(){return{name:["handleChange"],src:["handleChange"],library:["handleChange"]}}};c.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block;width:1em;height:1em;contain:strict;box-sizing:content-box !important}.icon,svg{display:block;height:100%;width:100%}";export{c as sl_icon}