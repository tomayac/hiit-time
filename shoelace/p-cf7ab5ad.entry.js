import{r,h as o}from"./p-bf36b983.js";const i=class{constructor(o){r(this,o),this.percentage=0,this.indeterminate=!1}render(){return o("div",{part:"base",class:{"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate},role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.indeterminate?null:this.percentage},o("div",{part:"indicator",class:"progress-bar__indicator",style:{width:this.percentage+"%"}},!this.indeterminate&&o("span",{part:"label",class:"progress-bar__label"},o("slot",null))))}};i.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--height:16px;--track-color:var(--sl-color-gray-200);--indicator-color:var(--sl-color-primary-500);--label-color:var(--sl-color-white);display:block}.progress-bar{position:relative;background-color:var(--track-color);height:var(--height);border-radius:var(--sl-border-radius-pill);overflow:hidden}.progress-bar__indicator{height:100%;font-family:var(--sl-font-sans);font-size:12px;font-weight:var(--sl-font-weight-normal);background-color:var(--indicator-color);color:var(--label-color);text-align:center;line-height:var(--height);white-space:nowrap;overflow:hidden;transition:400ms width, 400ms background-color;user-select:none}.progress-bar--indeterminate .progress-bar__indicator{position:absolute;animation:indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1)}@keyframes indeterminate{0%{left:-50%;width:50%}75%,100%{left:100%;width:50%}}";export{i as sl_progress_bar}