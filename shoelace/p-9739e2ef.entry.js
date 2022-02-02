import{r as s,c as i,h as t,g as a}from"./p-bf36b983.js";import{c as o}from"./p-ebd93006.js";import{f as r}from"./p-33061500.js";const n=class{constructor(t){s(this,t),this.slChange=i(this,"sl-change",7),this.hoverValue=0,this.isHovering=!1,this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill"></sl-icon>'}handleValueChange(){this.slChange.emit()}connectedCallback(){this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this)}async setFocus(s){this.rating.focus(s)}async removeFocus(){this.rating.blur()}componentDidLoad(){r.observe(this.rating)}disconnectedCallback(){r.unobserve(this.rating)}getValueFromMousePosition(s){const i=this.rating.getBoundingClientRect().left,t=this.rating.getBoundingClientRect().width;return o(this.roundToPrecision((s.clientX-i)/t*this.max,this.precision),0,this.max)}handleClick(s){if(this.disabled||this.readonly)return;const i=this.getValueFromMousePosition(s);this.value=i===this.value?0:i,this.isHovering=!1}handleKeyDown(s){this.disabled||this.readonly||("ArrowLeft"===s.key&&(this.value=Math.max(0,this.value-(s.shiftKey?1:this.precision)),s.preventDefault()),"ArrowRight"===s.key&&(this.value=Math.min(this.max,this.value+(s.shiftKey?1:this.precision)),s.preventDefault()),"Home"===s.key&&(this.value=0,s.preventDefault()),"End"===s.key&&(this.value=this.max,s.preventDefault()))}handleMouseEnter(){this.isHovering=!0}handleMouseLeave(){this.isHovering=!1}handleMouseMove(s){this.hoverValue=this.getValueFromMousePosition(s)}roundToPrecision(s,i=.5){const t=1/i;return Math.ceil(s*t)/t}render(){const s=Array.from(Array(this.max).keys());let i=0;return i=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,t("div",{ref:s=>this.rating=s,part:"base",class:{rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled},"aria-disabled":this.disabled?"true":"false","aria-readonly":this.readonly?"true":"false","aria-value":this.value,"aria-valuemin":0,"aria-valuemax":this.max,tabIndex:this.disabled?-1:0,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onMouseMove:this.handleMouseMove},t("span",{class:"rating__symbols rating__symbols--inactive"},s.map((s=>t("span",{class:{rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1},role:"presentation",onMouseEnter:this.handleMouseEnter,innerHTML:this.getSymbol(s+1)})))),t("span",{class:"rating__symbols rating__symbols--indicator"},s.map((s=>t("span",{class:{rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(i)===s+1},style:{clipPath:i>s+1?null:`inset(0 ${100-(i-s)/1*100}% 0 0)`},role:"presentation",innerHTML:this.getSymbol(s+1)})))))}get host(){return a(this)}static get watchers(){return{value:["handleValueChange"]}}};n.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--symbol-color:var(--sl-color-gray-300);--symbol-color-active:#ffbe00;--symbol-size:1.2rem;--symbol-spacing:var(--sl-spacing-xxx-small);display:inline-flex}.rating{position:relative;display:inline-flex;border-radius:var(--sl-border-radius-medium);vertical-align:middle}.rating:focus{outline:none}.rating.focus-visible:focus{box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.rating__symbols{display:inline-flex;position:relative;font-size:var(--symbol-size);line-height:0;color:var(--symbol-color);white-space:nowrap;cursor:pointer}.rating__symbols>*{padding:var(--symbol-spacing)}.rating__symbols--indicator{position:absolute;top:0;left:0;color:var(--symbol-color-active);pointer-events:none}.rating__symbol{transition:var(--sl-transition-fast) transform}.rating__symbol--hover{transform:scale(1.2)}.rating--disabled .rating__symbols,.rating--readonly .rating__symbols{cursor:default}.rating--disabled .rating__symbol--hover,.rating--readonly .rating__symbol--hover{transform:none}.rating--disabled{opacity:0.5}.rating--disabled .rating__symbols{cursor:not-allowed}";export{n as sl_rating}