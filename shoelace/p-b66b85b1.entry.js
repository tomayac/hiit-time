import{r as e,h as i}from"./p-bf36b983.js";const t=class{constructor(i){e(this,i),this.hasFocus=!1,this.checked=!1,this.value="",this.disabled=!1}connectedCallback(){this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}async setFocus(e){this.menuItem.focus(e)}async removeFocus(){this.menuItem.blur()}handleBlur(){this.hasFocus=!1}handleFocus(){this.hasFocus=!0}handleMouseEnter(){this.setFocus()}handleMouseLeave(){this.removeFocus()}render(){return i("div",{ref:e=>this.menuItem=e,part:"base",class:{"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--focused":this.hasFocus},role:"menuitem","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false",tabIndex:this.disabled?null:0,onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},i("span",{part:"checked-icon",class:"menu-item__check"},i("sl-icon",{name:"check2","aria-hidden":"true"})),i("span",{part:"prefix",class:"menu-item__prefix"},i("slot",{name:"prefix"})),i("span",{part:"label",class:"menu-item__label"},i("slot",null)),i("span",{part:"suffix",class:"menu-item__suffix"},i("slot",{name:"suffix"})))}};t.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.menu-item{position:relative;display:flex;align-items:stretch;font-family:var(--sl-font-sans);font-size:var(--sl-font-size-medium);font-weight:var(--sl-font-weight-normal);line-height:var(--sl-line-height-normal);letter-spacing:var(--sl-letter-spacing-normal);text-align:left;color:var(--sl-color-gray-700);padding:var(--sl-spacing-xx-small) var(--sl-spacing-x-large);transition:var(--sl-transition-fast) fill;user-select:none;white-space:nowrap;cursor:pointer}.menu-item.menu-item--focused:not(.menu-item--disabled){outline:none;background-color:var(--sl-color-primary-50);color:var(--sl-color-primary-500)}.menu-item.menu-item--disabled{outline:none;color:var(--sl-color-gray-400);cursor:not-allowed}.menu-item .menu-item__label{flex:1 1 auto}.menu-item .menu-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__prefix ::slotted(:last-child){margin-right:0.5em}.menu-item .menu-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__suffix ::slotted(:first-child){margin-left:0.5em}.menu-item .menu-item__check{display:flex;position:absolute;left:0.5em;top:calc(50% - 0.5em);visibility:hidden;align-items:center;font-size:inherit}.menu-item--checked .menu-item__check{visibility:visible}";export{t as sl_menu_item}