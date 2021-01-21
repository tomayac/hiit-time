import{r as e,c as r,h as o}from"./p-bf36b983.js";import{c as t}from"./p-ebd93006.js";const i=class{constructor(o){e(this,o),this.slChange=r(this,"sl-change",7),this.position=50}handlePositionChange(){this.slChange.emit()}connectedCallback(){this.handleDrag=this.handleDrag.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}handleDrag(e){const{width:r}=this.base.getBoundingClientRect();this.handle.focus(),e.preventDefault(),function(e,r,o){const t=e=>{const t=r.getBoundingClientRect();o((e.changedTouches?e.changedTouches[0].pageX:e.pageX)-(t.left+r.ownerDocument.defaultView.pageXOffset))};t(e);const i=()=>{document.removeEventListener("mousemove",t),document.removeEventListener("touchmove",t),document.removeEventListener("mouseup",i),document.removeEventListener("touchend",i)};document.addEventListener("mousemove",t),document.addEventListener("touchmove",t),document.addEventListener("mouseup",i),document.addEventListener("touchend",i)}(e,this.base,(e=>{this.position=t(e/r*100,0,100)}))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const r=e.shiftKey?10:1;let o=this.position;e.preventDefault(),"ArrowLeft"===e.key&&(o-=r),"ArrowRight"===e.key&&(o+=r),"Home"===e.key&&(o=0),"End"===e.key&&(o=100),o=t(o,0,100),this.position=o}}render(){return o("div",{ref:e=>this.base=e,part:"base",class:"image-comparer",onKeyDown:this.handleKeyDown},o("div",{class:"image-comparer__image"},o("div",{part:"before",class:"image-comparer__before"},o("slot",{name:"before"})),o("div",{part:"after",class:"image-comparer__after",style:{clipPath:`inset(0 ${100-this.position}% 0 0)`}},o("slot",{name:"after"}))),o("div",{ref:e=>this.divider=e,part:"divider",class:"image-comparer__divider",style:{left:this.position+"%"},onMouseDown:this.handleDrag,onTouchStart:this.handleDrag},o("div",{ref:e=>this.handle=e,part:"handle",class:"image-comparer__handle",role:"scrollbar","aria-valuenow":this.position,"aria-valuemin":"0","aria-valuemax":"100",tabIndex:0},o("sl-icon",{class:"image-comparer__handle-icon",name:"grip-vertical"}))))}static get watchers(){return{position:["handlePositionChange"]}}};i.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--divider-width:2px;--handle-size:2.5rem;display:block;position:relative}.image-comparer{max-width:100%;max-height:100%;overflow:hidden}.image-comparer__before,.image-comparer__after{pointer-events:none}.image-comparer__before ::slotted(img),.image-comparer__before ::slotted(svg),.image-comparer__after ::slotted(img),.image-comparer__after ::slotted(svg){display:block;max-width:100% !important;height:auto}.image-comparer__after{position:absolute;top:0;left:0;height:100%;width:100%}.image-comparer__divider{display:flex;align-items:center;justify-content:center;position:absolute;top:0;width:var(--divider-width);height:100%;background-color:var(--sl-color-white);transform:translateX(calc(var(--divider-width) / -2));cursor:ew-resize}.image-comparer__handle{display:flex;align-items:center;justify-content:center;position:absolute;top:calc(50% - (var(--handle-size) / 2));width:var(--handle-size);height:var(--handle-size);background-color:var(--sl-color-white);border-radius:var(--sl-border-radius-circle);font-size:calc(var(--handle-size) * 0.5);color:var(--sl-color-gray-500);cursor:inherit;z-index:10}.image-comparer__handle:focus{outline:none;box-shadow:0 0 0 1px var(--sl-color-primary-500), 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}";export{i as sl_image_comparer}