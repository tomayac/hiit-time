let t=[];class s{constructor(t,s){this.element=t,this.options=s,this.handleFocusIn=this.handleFocusIn.bind(this)}activate(){t.push(this.element),document.addEventListener("focusin",this.handleFocusIn)}deactivate(){t=t.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn)}isActive(){return t[t.length-1]===this.element}handleFocusIn(t){console.log(this.element);const s=t.target,i=this.element.tagName.toLowerCase();this.isActive()&&s.closest(i)!==this.element&&"function"==typeof this.options.onFocusOut&&this.options.onFocusOut(t)}}export{s as M}