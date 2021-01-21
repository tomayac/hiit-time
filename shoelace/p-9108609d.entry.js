import{r as t,c as e,h as a,g as r}from"./p-bf36b983.js";import{h as o}from"./p-c650e734.js";import{F as s}from"./p-d1be58c6.js";let i=0;const l=class{constructor(a){t(this,a),this.slChange=e(this,"sl-change",7),this.slInput=e(this,"sl-input",7),this.slFocus=e(this,"sl-focus",7),this.slBlur=e(this,"sl-blur",7),this.inputId="textarea-"+ ++i,this.labelId="textarea-label-"+i,this.helpTextId="textarea-help-text-"+i,this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.size="medium",this.name="",this.value="",this.label="",this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.invalid=!1}handleLabelChange(){this.handleSlotChange()}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.textarea.checkValidity()}connectedCallback(){this.handleChange=this.handleChange.bind(this),this.handleInput=this.handleInput.bind(this),this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleSlotChange=this.handleSlotChange.bind(this),this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}componentWillLoad(){this.handleSlotChange()}componentDidLoad(){this.setTextareaHeight(),this.resizeObserver=new ResizeObserver((()=>this.setTextareaHeight())),this.resizeObserver.observe(this.textarea)}disconnectedCallback(){this.resizeObserver.unobserve(this.textarea),this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}async setFocus(t){this.textarea.focus(t)}async removeFocus(){this.textarea.blur()}async select(){return this.textarea.select()}async setSelectionRange(t,e,a="none"){return this.textarea.setSelectionRange(t,e,a)}async setRangeText(t,e,a,r="preserve"){this.textarea.setRangeText(t,e,a,r),this.value!==this.textarea.value&&(this.value=this.textarea.value,this.setTextareaHeight(),this.slChange.emit(),this.slInput.emit())}async reportValidity(){return this.textarea.reportValidity()}async setCustomValidity(t){this.textarea.setCustomValidity(t),this.invalid=!this.textarea.checkValidity()}handleChange(){this.slChange.emit()}handleInput(){this.value=this.textarea.value,this.setTextareaHeight(),this.slInput.emit()}handleBlur(){this.hasFocus=!1,this.slBlur.emit()}handleFocus(){this.hasFocus=!0,this.slFocus.emit()}handleSlotChange(){this.hasLabelSlot=o(this.host,"label"),this.hasHelpTextSlot=o(this.host,"help-text")}setTextareaHeight(){"auto"===this.resize?(this.textarea.style.height="auto",this.textarea.style.height=this.textarea.scrollHeight+"px"):this.textarea.style.height=void 0}render(){var t;return a(s,{inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:this.size},a("div",{part:"base",class:{textarea:!0,"textarea--small":"small"===this.size,"textarea--medium":"medium"===this.size,"textarea--large":"large"===this.size,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":0===(null===(t=this.value)||void 0===t?void 0:t.length),"textarea--invalid":this.invalid,"textarea--resize-none":"none"===this.resize,"textarea--resize-vertical":"vertical"===this.resize,"textarea--resize-auto":"auto"===this.resize}},a("textarea",{part:"textarea",ref:t=>this.textarea=t,id:this.inputId,class:"textarea__control",name:this.name,placeholder:this.placeholder,disabled:this.disabled,readOnly:this.readonly,rows:this.rows,minLength:this.minlength,maxLength:this.maxlength,value:this.value,autoCapitalize:this.autocapitalize,autoCorrect:this.autocorrect,autoFocus:this.autofocus,spellcheck:this.spellcheck,required:this.required,inputMode:this.inputmode,"aria-labelledby":this.labelId,onChange:this.handleChange,onInput:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur})))}get host(){return r(this)}static get watchers(){return{label:["handleLabelChange"],rows:["handleRowsChange"],value:["handleValueChange"]}}};l.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--sl-input-label-color);margin-bottom:var(--sl-spacing-xxx-small)}.form-control--has-label.form-control--small .form-control__label{font-size:var(--sl-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--sl-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--sl-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--sl-input-help-text-color)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--sl-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--sl-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--sl-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--sl-input-help-text-font-size-large)}:host{display:block}.textarea{display:flex;align-items:center;position:relative;width:100%;font-family:var(--sl-input-font-family);font-weight:var(--sl-input-font-weight);line-height:var(--sl-line-height-normal);letter-spacing:var(--sl-input-letter-spacing);background-color:var(--sl-input-background-color);border:solid var(--sl-input-border-width) var(--sl-input-border-color);vertical-align:middle;transition:var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;cursor:text}.textarea:hover:not(.textarea--disabled){background-color:var(--sl-input-background-color-hover);border-color:var(--sl-input-border-color-hover)}.textarea:hover:not(.textarea--disabled) .textarea__control{color:var(--sl-input-color-hover)}.textarea.textarea--focused:not(.textarea--disabled){background-color:var(--sl-input-background-color-focus);border-color:var(--sl-input-border-color-focus);box-shadow:0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);color:var(--sl-input-color-focus)}.textarea.textarea--focused:not(.textarea--disabled) .textarea__control{color:var(--sl-input-color-focus)}.textarea.textarea--disabled{background-color:var(--sl-input-background-color-disabled);border-color:var(--sl-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.textarea.textarea--disabled .textarea__control{color:var(--sl-input-color-disabled)}.textarea.textarea--disabled .textarea__control::placeholder{color:var(--sl-input-placeholder-color-disabled)}.textarea__control{flex:1 1 auto;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1.4;color:var(--sl-input-color);border:none;background:none;box-shadow:none;cursor:inherit;-webkit-appearance:none}.textarea__control::-webkit-search-decoration,.textarea__control::-webkit-search-cancel-button,.textarea__control::-webkit-search-results-button,.textarea__control::-webkit-search-results-decoration{-webkit-appearance:none}.textarea__control::placeholder{color:var(--sl-input-placeholder-color);user-select:none}.textarea__control:focus{outline:none}.textarea--small{border-radius:var(--sl-input-border-radius-small);font-size:var(--sl-input-font-size-small)}.textarea--small .textarea__control{padding:0.5em var(--sl-input-spacing-small)}.textarea--medium{border-radius:var(--sl-input-border-radius-medium);font-size:var(--sl-input-font-size-medium)}.textarea--medium .textarea__control{padding:0.5em var(--sl-input-spacing-medium)}.textarea--large{border-radius:var(--sl-input-border-radius-large);font-size:var(--sl-input-font-size-large)}.textarea--large .textarea__control{padding:0.5em var(--sl-input-spacing-large)}.textarea--resize-none .textarea__control{resize:none}.textarea--resize-vertical .textarea__control{resize:vertical}.textarea--resize-auto .textarea__control{height:auto;resize:none}";export{l as sl_textarea}