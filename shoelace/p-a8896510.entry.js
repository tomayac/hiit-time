import{r,h as a,g as o}from"./p-bf36b983.js";import{h as d}from"./p-c650e734.js";const e=class{constructor(a){r(this,a),this.hasFooter=!1,this.hasImage=!1,this.hasHeader=!1}connectedCallback(){this.handleSlotChange=this.handleSlotChange.bind(this)}componentWillLoad(){this.handleSlotChange()}handleSlotChange(){this.hasFooter=d(this.host,"footer"),this.hasImage=d(this.host,"image"),this.hasHeader=d(this.host,"header")}render(){return a("div",{part:"base",class:{card:!0,"card--has-footer":this.hasFooter,"card--has-image":this.hasImage,"card--has-header":this.hasHeader}},a("div",{part:"image",class:"card__image"},a("slot",{name:"image",onSlotchange:this.handleSlotChange})),a("div",{part:"header",class:"card__header"},a("slot",{name:"header",onSlotchange:this.handleSlotChange})),a("div",{part:"body",class:"card__body"},a("slot",null)),a("div",{part:"footer",class:"card__footer"},a("slot",{name:"footer",onSlotchange:this.handleSlotChange})))}get host(){return o(this)}};e.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--border-color:var(--sl-color-gray-200);--border-radius:var(--sl-border-radius-medium);--border-width:1px;--padding:var(--sl-spacing-large);display:inline-block}.card{display:flex;flex-direction:column;background-color:var(--sl-color-white);box-shadow:var(--sl-shadow-x-small);border:solid var(--border-width) var(--border-color);border-radius:var(--border-radius)}.card__image{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);margin:calc(-1 * var(--border-width));overflow:hidden}.card__image ::slotted(img){display:block;width:100%}.card:not(.card--has-image) .card__image{display:none}.card__header{border-bottom:solid var(--border-width) var(--border-color);padding:calc(var(--padding) / 2) var(--padding)}.card:not(.card--has-header) .card__header{display:none}.card__body{padding:var(--padding)}.card--has-footer .card__footer{border-top:solid var(--border-width) var(--border-color);padding:var(--padding)}.card:not(.card--has-footer) .card__footer{display:none}";export{e as sl_card}