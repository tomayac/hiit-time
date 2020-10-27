import{r,h as s}from"./p-f58ba550.js";const t=class{constructor(s){r(this,s),this.size=128,this.strokeWidth=4}handlePercentageChange(){this.updateProgress()}componentDidLoad(){this.updateProgress()}updateProgress(){const r=2*this.indicator.r.baseVal.value*Math.PI,s=r-this.percentage/100*r;this.indicator.style.strokeDasharray=`${r} ${r}`,this.indicator.style.strokeDashoffset=""+s}render(){return s("div",{part:"base",class:"progress-ring"},s("svg",{class:"progress-ring__image",width:this.size,height:this.size},s("circle",{class:"progress-ring__track","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-2*this.strokeWidth,cx:this.size/2,cy:this.size/2}),s("circle",{ref:r=>this.indicator=r,class:"progress-ring__indicator","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-2*this.strokeWidth,cx:this.size/2,cy:this.size/2})),s("span",{part:"label",class:"progress-ring__label"},s("slot",null)))}static get watchers(){return{percentage:["handlePercentageChange"]}}};t.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--track-color:var(--sl-color-gray-90);--indicator-color:var(--sl-color-primary-50);display:inline-flex}.progress-ring{display:inline-flex;align-items:center;justify-content:center;position:relative}.progress-ring__image{transform:rotate(-90deg);transform-origin:50% 50%}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);transition:0.35s stroke-dashoffset, 0.35s stroke}.progress-ring__label{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;user-select:none}";export{t as sl_progress_ring}