import{r as t,h as e}from"./p-bf36b983.js";const s=class{constructor(e){t(this,e),this.aspectRatio="16:9"}handleAspectRatioChange(){this.setAspectRatio()}connectedCallback(){this.handleSlotChange=this.handleSlotChange.bind(this)}handleSlotChange(){this.setAspectRatio()}setAspectRatio(){const t=this.aspectRatio.split(":"),e=parseInt(t[0]),s=parseInt(t[1]);this.base.style.paddingBottom=e&&s?s/e*100+"%":null}render(){return e("div",{ref:t=>this.base=t,part:"base",class:"responsive-embed"},e("slot",{onSlotchange:this.handleSlotChange}))}static get watchers(){return{aspectRatio:["handleAspectRatioChange"]}}};s.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.responsive-embed{position:relative}.responsive-embed ::slotted(embed),.responsive-embed ::slotted(iframe),.responsive-embed ::slotted(object){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important}";export{s as sl_responsive_embed}