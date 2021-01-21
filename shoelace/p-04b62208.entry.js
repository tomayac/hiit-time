import{r,c as o,h as t}from"./p-bf36b983.js";const i=class{constructor(t){r(this,t),this.slChange=o(this,"sl-change",7),this.slBlur=o(this,"sl-blur",7),this.slFocus=o(this,"sl-focus",7),this.hasFocus=!1,this.hasTooltip=!1,this.name="",this.disabled=!1,this.invalid=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=r=>r.toString()}connectedCallback(){this.handleInput=this.handleInput.bind(this),this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this)}componentWillLoad(){null==this.value&&(this.value=this.min),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max)}componentDidLoad(){this.syncTooltip(),this.resizeObserver=new ResizeObserver((()=>this.syncTooltip()))}async setFocus(r){this.input.focus(r)}async removeFocus(){this.input.blur()}async setCustomValidity(r){this.input.setCustomValidity(r),this.invalid=!this.input.checkValidity()}handleInput(){this.value=Number(this.input.value),this.slChange.emit(),requestAnimationFrame((()=>this.syncTooltip()))}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.slBlur.emit(),this.resizeObserver.unobserve(this.input)}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.slFocus.emit(),this.resizeObserver.observe(this.input)}handleTouchStart(){this.setFocus()}syncTooltip(){if("none"!==this.tooltip){const r=Math.max(0,(this.value-this.min)/(this.max-this.min)),o=this.input.offsetWidth,t=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size");this.output.style.transform=`translateX(calc(${o*r}px - calc(calc(${r} * ${i}) - calc(${i} / 2))))`,this.output.style.marginLeft=`-${t/2}px`}}render(){return t("div",{part:"base",class:{range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip},onTouchStart:this.handleTouchStart},t("input",{part:"input",ref:r=>this.input=r,type:"range",class:"range__control",name:this.name,disabled:this.disabled,min:this.min,max:this.max,step:this.step,value:this.value,onInput:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur}),"none"!==this.tooltip&&t("output",{part:"tooltip",ref:r=>this.output=r,class:"range__tooltip"},this.tooltipFormatter(this.value)))}};i.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--thumb-size:20px;--tooltip-offset-y:10px;--track-color:var(--sl-color-gray-200);--track-height:6px;display:block}.range{position:relative}.range .range__control{-webkit-appearance:none;width:100%;height:var(--sl-input-height-medium);background:transparent;line-height:var(--sl-input-height-medium);vertical-align:middle}.range .range__control::-webkit-slider-runnable-track{width:100%;height:var(--track-height);background-color:var(--track-color);border-radius:3px;border:none}.range .range__control::-webkit-slider-thumb{border:none;width:var(--thumb-size);height:var(--thumb-size);border-radius:50%;background-color:var(--sl-color-primary-500);border:solid var(--sl-input-border-width) var(--sl-color-primary-500);-webkit-appearance:none;margin-top:calc(var(--thumb-size) / -2 + var(--track-height) / 2);transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-webkit-slider-thumb:hover{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400)}.range .range__control:not(:disabled):focus::-webkit-slider-thumb{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.range .range__control:not(:disabled)::-webkit-slider-thumb:active{background-color:var(--sl-color-primary-500);border-color:var(--sl-color-primary-500);cursor:grabbing}.range .range__control::-moz-focus-outer{border:0}.range .range__control::-moz-range-track{width:100%;height:var(--track-height);background-color:var(--track-color);border-radius:3px;border:none}.range .range__control::-moz-range-thumb{border:none;height:var(--thumb-size);width:var(--thumb-size);border-radius:50%;background-color:var(--sl-color-primary-500);border-color:var(--sl-color-primary-500);transition:var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color, var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-moz-range-thumb:hover{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400)}.range .range__control:not(:disabled):focus::-moz-range-thumb{background-color:var(--sl-color-primary-400);border-color:var(--sl-color-primary-400);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary)}.range .range__control:not(:disabled)::-moz-range-thumb:active{background-color:var(--sl-color-primary-600);border-color:var(--sl-color-primary-600);cursor:grabbing}.range .range__control:focus{outline:none}.range .range__control:disabled{opacity:0.5}.range .range__control:disabled::-webkit-slider-thumb{cursor:not-allowed}.range .range__control:disabled::-moz-range-thumb{cursor:not-allowed}.range__tooltip{position:absolute;z-index:var(--sl-z-index-tooltip);left:1px;border-radius:var(--sl-tooltip-border-radius);background-color:var(--sl-tooltip-background-color);font-family:var(--sl-tooltip-font-family);font-size:var(--sl-tooltip-font-size);font-weight:var(--sl-tooltip-font-weight);line-height:var(--sl-tooltip-line-height);color:var(--sl-tooltip-color);opacity:0;padding:var(--sl-tooltip-padding);transition:var(--sl-transition-fast) opacity;pointer-events:none}.range__tooltip::after{content:"";position:absolute;width:0;height:0;left:50%;margin-left:calc(-1 * var(--sl-tooltip-arrow-size))}.range--tooltip-visible .range__tooltip{opacity:1}.range--tooltip-top .range__tooltip{top:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-top .range__tooltip::after{border-top:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent;top:100%}.range--tooltip-bottom .range__tooltip{bottom:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-bottom .range__tooltip::after{border-bottom:var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);border-left:var(--sl-tooltip-arrow-size) solid transparent;border-right:var(--sl-tooltip-arrow-size) solid transparent;bottom:100%}';export{i as sl_range}