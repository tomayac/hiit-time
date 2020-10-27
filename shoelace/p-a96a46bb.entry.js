import{r as s,c as t,h as i}from"./p-f58ba550.js";import{g as r}from"./p-f86f6644.js";const a=class{constructor(i){s(this,i),this.slFocus=t(this,"sl-focus",7),this.slBlur=t(this,"sl-blur",7),this.slSelect=t(this,"sl-select",7),this.typeToSelectString="",this.hasFocus=!1}connectedCallback(){this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this)}async setFocus(){this.hasFocus=!0,this.menu.focus()}async removeFocus(){this.hasFocus=!1,this.menu.blur()}async typeToSelect(s){clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=setTimeout(()=>this.typeToSelectString="",750),this.typeToSelectString+=s.toLowerCase();const t=this.getItems();for(const s of t){const i=s.shadowRoot.querySelector("slot:not([name])");if(r(i).toLowerCase().trim().substring(0,this.typeToSelectString.length)===this.typeToSelectString){t.map(t=>t.active=t===s);break}}}getItems(){return[...this.menu.querySelector("slot").assignedElements({flatten:!0})].filter(s=>"sl-menu-item"===s.tagName.toLowerCase()&&!s.disabled)}getActiveItem(){return this.getItems().find(s=>s.active)}setActiveItem(s){this.getItems().map(t=>t.active=t===s)}handleFocus(){if(this.slFocus.emit(),!this.getActiveItem()){const s=this.getItems();this.setActiveItem(s[0])}}handleBlur(){this.setActiveItem(),this.slBlur.emit()}handleClick(s){const t=s.target.closest("sl-menu-item");t&&!t.disabled&&this.slSelect.emit({item:t})}handleKeyDown(s){if("Enter"===s.key){const t=this.getActiveItem();s.preventDefault(),t&&this.slSelect.emit({item:t})}if(" "===s.key&&s.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(s.key)){const t=this.getItems(),i=this.getActiveItem();let r=t.indexOf(i);if(t.length)return s.preventDefault(),"ArrowDown"===s.key?r++:"ArrowUp"===s.key?r--:"Home"===s.key?r=0:"End"===s.key&&(r=t.length-1),r<0&&(r=0),r>t.length-1&&(r=t.length-1),void this.setActiveItem(t[r])}this.typeToSelect(s.key)}handleMouseOver(s){const t=s.target.closest("sl-menu-item");this.setActiveItem(t)}handleMouseOut(){this.setActiveItem(null)}render(){return i("div",{ref:s=>this.menu=s,part:"base",class:{menu:!0,"menu--has-focus":this.hasFocus},tabIndex:0,role:"menu",onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},i("slot",null))}};a.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.menu{padding:var(--sl-spacing-x-small) 0}.menu:focus{outline:none}";const l=class{constructor(i){s(this,i),this.slClear=t(this,"sl-clear",7),this.type="primary",this.size="medium",this.pill=!1,this.clearable=!1}connectedCallback(){this.handleClearClick=this.handleClearClick.bind(this)}handleClearClick(){this.slClear.emit()}render(){return i("span",{ref:s=>this.tag=s,part:"base",class:{tag:!0,"tag--primary":"primary"===this.type,"tag--success":"success"===this.type,"tag--info":"info"===this.type,"tag--warning":"warning"===this.type,"tag--danger":"danger"===this.type,"tag--text":"text"===this.type,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--clearable":this.clearable}},i("span",{part:"content",class:"tag__content"},i("slot",null)),this.clearable&&i("sl-icon-button",{part:"clear-button",name:"x",class:"tag__clear",onClick:this.handleClearClick}))}};l.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block}.tag{display:flex;align-items:center;border:solid 1px;line-height:1;white-space:nowrap;user-select:none;cursor:default}.tag__clear::part(base){color:inherit;padding:0}.tag--primary{background-color:var(--sl-color-primary-95);border-color:var(--sl-color-primary-80);color:var(--sl-color-primary-35)}.tag--success{background-color:var(--sl-color-success-95);border-color:var(--sl-color-success-80);color:var(--sl-color-success-30)}.tag--info{background-color:var(--sl-color-info-95);border-color:var(--sl-color-info-80);color:var(--sl-color-info-40)}.tag--warning{background-color:var(--sl-color-warning-95);border-color:var(--sl-color-warning-80);color:var(--sl-color-warning-30)}.tag--danger{background-color:var(--sl-color-danger-95);border-color:var(--sl-color-danger-80);color:var(--sl-color-danger-40)}.tag--small{font-size:var(--sl-button-font-size-small);height:calc(var(--sl-input-height-small) * 0.8);line-height:calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-small);padding:0 var(--sl-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xxx-small))}.tag--medium{font-size:var(--sl-button-font-size-medium);height:calc(var(--sl-input-height-medium) * 0.8);line-height:calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-medium);padding:0 var(--sl-spacing-small)}.tag--medium .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-xx-small))}.tag--large{font-size:var(--sl-button-font-size-large);height:calc(var(--sl-input-height-large) * 0.8);line-height:calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);border-radius:var(--sl-input-border-radius-large);padding:0 var(--sl-spacing-medium)}.tag--large .tag__clear{margin-left:var(--sl-spacing-xx-small);margin-right:calc(-1 * var(--sl-spacing-x-small))}.tag--pill{border-radius:var(--sl-border-radius-pill)}";export{a as sl_menu,l as sl_tag}