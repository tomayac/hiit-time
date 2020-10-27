import{r as t,c as e,h as i,g as r}from"./p-f58ba550.js";import{h as a}from"./p-f86f6644.js";import{u as s,l as o}from"./p-74222c65.js";import{M as h}from"./p-de179682.js";let l=0;const n=class{constructor(i){t(this,i),this.slShow=e(this,"sl-show",7),this.slAfterShow=e(this,"sl-after-show",7),this.slHide=e(this,"sl-hide",7),this.slAfterHide=e(this,"sl-after-hide",7),this.slOverlayDismiss=e(this,"sl-overlay-dismiss",7),this.componentId="drawer-"+ ++l,this.hasFooter=!1,this.isVisible=!1,this.open=!1,this.label="",this.placement="right",this.contained=!1,this.noHeader=!1}handleOpenChange(){this.open?this.show():this.hide()}connectedCallback(){this.handleCloseClick=this.handleCloseClick.bind(this),this.handleTransitionEnd=this.handleTransitionEnd.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleOverlayClick=this.handleOverlayClick.bind(this),this.handleSlotChange=this.handleSlotChange.bind(this),this.modal=new h(this.host,{onFocusOut:()=>this.contained?null:this.panel.focus()})}componentDidLoad(){this.open&&this.show()}disconnectedCallback(){s(this.host)}async show(){this.open||(this.slShow.emit().defaultPrevented?this.open=!1:(this.isVisible=!0,this.open=!0,this.contained||(this.modal.activate(),o(this.host))))}async hide(){this.open&&(this.slHide.emit().defaultPrevented?this.open=!0:(this.open=!1,this.modal.deactivate(),s(this.host)))}handleCloseClick(){this.hide()}handleKeyDown(t){"Escape"===t.key&&this.hide()}handleOverlayClick(){this.slOverlayDismiss.emit().defaultPrevented||this.hide()}handleSlotChange(){this.hasFooter=a(this.host,"footer")}handleTransitionEnd(t){"transform"===t.propertyName&&t.target.classList.contains("drawer__panel")&&(this.isVisible=this.open,this.open?this.slAfterShow.emit():this.slAfterHide.emit(),this.open&&this.panel.focus())}render(){return i("div",{ref:t=>this.drawer=t,part:"base",class:{drawer:!0,"drawer--open":this.open,"drawer--visible":this.isVisible,"drawer--top":"top"===this.placement,"drawer--right":"right"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--left":"left"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--has-footer":this.hasFooter},onKeyDown:this.handleKeyDown,onTransitionEnd:this.handleTransitionEnd},i("div",{part:"overlay",class:"drawer__overlay",onClick:this.handleOverlayClick}),i("div",{ref:t=>this.panel=t,part:"panel",class:"drawer__panel",role:"dialog","aria-modal":"true","aria-hidden":!this.open,"aria-label":this.noHeader?this.label:null,"aria-labelledby":this.noHeader?null:this.componentId+"-title",tabIndex:0},!this.noHeader&&i("header",{part:"header",class:"drawer__header"},i("span",{part:"title",class:"drawer__title",id:this.componentId+"-title"},i("slot",{name:"label"},this.label||String.fromCharCode(65279))),i("sl-icon-button",{part:"close-button",class:"drawer__close",name:"x",onClick:this.handleCloseClick})),i("div",{part:"body",class:"drawer__body"},i("slot",null)),i("footer",{part:"footer",class:"drawer__footer"},i("slot",{name:"footer",onSlotchange:this.handleSlotChange}))))}get host(){return r(this)}static get watchers(){return{open:["handleOpenChange"]}}};n.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--size:25rem;display:contents}.drawer{top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.drawer:not(.drawer--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.drawer--contained{position:absolute;z-index:initial}.drawer--fixed{position:fixed;z-index:var(--sl-z-index-drawer)}.drawer__panel{position:absolute;display:flex;flex-direction:column;z-index:2;max-width:100%;max-height:100%;background-color:var(--sl-panel-background-color);box-shadow:var(--sl-shadow-x-large);transition:var(--sl-transition-medium) transform;overflow:auto;pointer-events:all}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:100%;height:var(--size);transform:translate(0, -100%)}.drawer--right .drawer__panel{top:0;right:0;bottom:auto;left:auto;width:var(--size);height:100%;transform:translate(100%, 0)}.drawer--bottom .drawer__panel{top:auto;right:auto;bottom:0;left:0;width:100%;height:var(--size);transform:translate(0, 100%)}.drawer--left .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:var(--size);height:100%;transform:translate(-100%, 0)}.drawer--open .drawer__panel{transform:translate(0, 0)}.drawer__header{display:flex}.drawer__title{flex:1 1 auto;font-size:var(--sl-font-size-large);line-height:var(--sl-line-height-dense);padding:var(--sl-spacing-large)}.drawer__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--sl-font-size-x-large);padding:0 var(--sl-spacing-large)}.drawer__body{flex:1 1 auto;padding:var(--sl-spacing-large);overflow:auto;-webkit-overflow-scrolling:touch}.drawer__footer{text-align:right;padding:var(--sl-spacing-large)}.drawer__footer ::slotted(sl-button:not(:last-of-type)){margin-right:var(--sl-spacing-x-small)}.drawer:not(.drawer--has-footer) .drawer__footer{display:none}.drawer__overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sl-overlay-background-color);opacity:0;transition:var(--sl-transition-medium) opacity;pointer-events:all}.drawer--contained .drawer__overlay{position:absolute}.drawer--open .drawer__overlay{opacity:1}";export{n as sl_drawer}