var t="top",e="bottom",n="right",r="left",i=[t,e,n,r],o=i.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),a=[].concat(i,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),u=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function f(t){return t?(t.nodeName||"").toLowerCase():null}function c(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function s(t){return t instanceof c(t).Element||t instanceof Element}function p(t){return t instanceof c(t).HTMLElement||t instanceof HTMLElement}function d(t){return t.split("-")[0]}function h(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function l(t,e){var n,r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if((n=r)instanceof c(n).ShadowRoot||n instanceof ShadowRoot){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function v(t){return c(t).getComputedStyle(t)}function b(t){return["table","td","th"].indexOf(f(t))>=0}function m(t){return((s(t)?t.ownerDocument:t.document)||window.document).documentElement}function y(t){return"html"===f(t)?t:t.assignedSlot||t.parentNode||t.host||m(t)}function O(t){if(!p(t)||"fixed"===v(t).position)return null;var e=t.offsetParent;if(e){var n=m(e);if("body"===f(e)&&"static"===v(e).position&&"static"!==v(n).position)return n}return e}function j(t){for(var e=c(t),n=O(t);n&&b(n)&&"static"===v(n).position;)n=O(n);return n&&"body"===f(n)&&"static"===v(n).position?e:n||function(t){for(var e=y(t);p(e)&&["html","body"].indexOf(f(e))<0;){var n=v(e);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return e;e=e.parentNode}return null}(t)||e}function w(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function g(t,e,n){return Math.max(t,Math.min(e,n))}function x(t){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),t)}function M(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var E={top:"auto",right:"auto",bottom:"auto",left:"auto"};function k(i){var o,a=i.popper,u=i.popperRect,f=i.placement,s=i.offsets,p=i.position,d=i.gpuAcceleration,h=i.adaptive,l=function(t){var e=t.y,n=window.devicePixelRatio||1;return{x:Math.round(t.x*n)/n||0,y:Math.round(e*n)/n||0}}(s),v=l.x,b=l.y,y=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),w=r,g=t,x=window;if(h){var M=j(a);M===c(a)&&(M=m(a)),f===t&&(g=e,b-=M.clientHeight-u.height,b*=d?1:-1),f===r&&(w=n,v-=M.clientWidth-u.width,v*=d?1:-1)}var k,q=Object.assign({position:p},h&&E);return Object.assign(Object.assign({},q),{},d?((k={})[g]=O?"0":"",k[w]=y?"0":"",k.transform=(x.devicePixelRatio||1)<2?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",k):((o={})[g]=O?b+"px":"",o[w]=y?v+"px":"",o.transform="",o))}var q={passive:!0},A={left:"right",right:"left",bottom:"top",top:"bottom"};function P(t){return t.replace(/left|right|bottom|top/g,(function(t){return A[t]}))}var B={start:"end",end:"start"};function S(t){return t.replace(/start|end/g,(function(t){return B[t]}))}function T(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function L(t){var e=c(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function R(t){return T(m(t)).left+L(t).scrollLeft}function I(t){var e=v(t);return/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function W(t,e){void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].indexOf(f(e))>=0?e.ownerDocument.body:p(e)&&I(e)?e:t(y(e))}(t),r="body"===f(n),i=c(n),o=r?[i].concat(i.visualViewport||[],I(n)?n:[]):n,a=e.concat(o);return r?a:a.concat(W(y(o)))}function C(t){return Object.assign(Object.assign({},t),{},{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function F(t,e){return"viewport"===e?C(function(t){var e=c(t),n=m(t),r=e.visualViewport,i=n.clientWidth,o=n.clientHeight,a=0,u=0;return r&&(i=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,u=r.offsetTop)),{width:i,height:o,x:a+R(t),y:u}}(t)):p(e)?function(t){var e=T(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):C(function(t){var e=m(t),n=L(t),r=t.ownerDocument.body,i=Math.max(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Math.max(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+R(t),u=-n.scrollTop;return"rtl"===v(r||e).direction&&(a+=Math.max(e.clientWidth,r?r.clientWidth:0)-i),{width:i,height:o,x:a,y:u}}(m(t)))}function H(t){return t.split("-")[1]}function z(i){var o,a=i.reference,u=i.element,f=i.placement,c=f?d(f):null,s=f?H(f):null,p=a.x+a.width/2-u.width/2,h=a.y+a.height/2-u.height/2;switch(c){case t:o={x:p,y:a.y-u.height};break;case e:o={x:p,y:a.y+a.height};break;case n:o={x:a.x+a.width,y:h};break;case r:o={x:a.x-u.width,y:h};break;default:o={x:a.x,y:a.y}}var l=c?w(c):null;if(null!=l){var v="y"===l?"height":"width";switch(s){case"start":o[l]=Math.floor(o[l])-Math.floor(a[v]/2-u[v]/2);break;case"end":o[l]=Math.floor(o[l])+Math.ceil(a[v]/2-u[v]/2)}}return o}function D(r,o){void 0===o&&(o={});var a=o.placement,u=void 0===a?r.placement:a,c=o.boundary,d=void 0===c?"clippingParents":c,h=o.rootBoundary,b=void 0===h?"viewport":h,O=o.elementContext,w=void 0===O?"popper":O,g=o.altBoundary,E=void 0!==g&&g,k=o.padding,q=void 0===k?0:k,A=x("number"!=typeof q?q:M(q,i)),P=r.elements.reference,B=r.rects.popper,S=r.elements[E?"popper"===w?"reference":"popper":w],L=function(t,e,n){var r="clippingParents"===e?function(t){var e=W(y(t)),n=["absolute","fixed"].indexOf(v(t).position)>=0&&p(t)?j(t):t;return s(n)?e.filter((function(t){return s(t)&&l(t,n)&&"body"!==f(t)})):[]}(t):[].concat(e),i=[].concat(r,[n]),o=i.reduce((function(e,n){var r=F(t,n);return e.top=Math.max(r.top,e.top),e.right=Math.min(r.right,e.right),e.bottom=Math.min(r.bottom,e.bottom),e.left=Math.max(r.left,e.left),e}),F(t,i[0]));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}(s(S)?S:S.contextElement||m(r.elements.popper),d,b),R=T(P),I=z({reference:R,element:B,strategy:"absolute",placement:u}),H=C(Object.assign(Object.assign({},B),I)),D="popper"===w?H:R,U={top:L.top-D.top+A.top,bottom:D.bottom-L.bottom+A.bottom,left:L.left-D.left+A.left,right:D.right-L.right+A.right},V=r.modifiersData.offset;if("popper"===w&&V){var _=V[u];Object.keys(U).forEach((function(r){var i=[n,e].indexOf(r)>=0?1:-1,o=[t,e].indexOf(r)>=0?"y":"x";U[r]+=_[o]*i}))}return U}function U(t,e){void 0===e&&(e={});var n=e.boundary,r=e.rootBoundary,u=e.padding,f=e.flipVariations,c=e.allowedAutoPlacements,s=void 0===c?a:c,p=H(e.placement),h=p?f?o:o.filter((function(t){return H(t)===p})):i,l=h.filter((function(t){return s.indexOf(t)>=0}));0===l.length&&(l=h);var v=l.reduce((function(e,i){return e[i]=D(t,{placement:i,boundary:n,rootBoundary:r,padding:u})[d(i)],e}),{});return Object.keys(v).sort((function(t,e){return v[t]-v[e]}))}function V(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function _(i){return[t,n,e,r].some((function(t){return i[t]>=0}))}function G(t,e,n){void 0===n&&(n=!1);var r,i,o=m(e),a=T(t),u=p(e),s={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(u||!u&&!n)&&(("body"!==f(e)||I(o))&&(s=(r=e)!==c(r)&&p(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:L(r)),p(e)?((d=T(e)).x+=e.clientLeft,d.y+=e.clientTop):o&&(d.x=R(o))),{x:a.left+s.scrollLeft-d.x,y:a.top+s.scrollTop-d.y,width:a.width,height:a.height}}var J={placement:"bottom",modifiers:[],strategy:"absolute"};function K(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function N(t){void 0===t&&(t={});var e=t.defaultModifiers,n=void 0===e?[]:e,r=t.defaultOptions,i=void 0===r?J:r;return function(t,e,r){void 0===r&&(r=i);var o,a,f={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},J),i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],p=!1,d={state:f,setOptions:function(r){l(),f.options=Object.assign(Object.assign(Object.assign({},i),f.options),r),f.scrollParents={reference:s(t)?W(t):t.contextElement?W(t.contextElement):[],popper:W(e)};var o,a,p=function(t){var e=function(t){var e=new Map,n=new Set,r=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||function t(i){n.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var i=e.get(r);i&&t(i)}})),r.push(i)}(t)})),r}(t);return u.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((o=[].concat(n,f.options.modifiers),a=o.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign(Object.assign(Object.assign({},n),e),{},{options:Object.assign(Object.assign({},n.options),e.options),data:Object.assign(Object.assign({},n.data),e.data)}):e,t}),{}),Object.keys(a).map((function(t){return a[t]}))));return f.orderedModifiers=p.filter((function(t){return t.enabled})),f.orderedModifiers.forEach((function(t){var e=t.options,n=t.effect;if("function"==typeof n){var r=n({state:f,name:t.name,instance:d,options:void 0===e?{}:e});c.push(r||function(){})}})),d.update()},forceUpdate:function(){if(!p){var t=f.elements,e=t.reference,n=t.popper;if(K(e,n)){f.rects={reference:G(e,j(n),"fixed"===f.options.strategy),popper:h(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(t){return f.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var i=f.orderedModifiers[r],o=i.fn,a=i.options;"function"==typeof o&&(f=o({state:f,options:void 0===a?{}:a,name:i.name,instance:d})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(t){d.forceUpdate(),t(f)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(o())}))}))),a}),destroy:function(){l(),p=!0}};if(!K(t,e))return d;function l(){c.forEach((function(t){return t()})),c=[]}return d.setOptions(r).then((function(t){!p&&r.onFirstUpdate&&r.onFirstUpdate(t)})),d}}var Q=N({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,o=void 0===i||i,a=r.resize,u=void 0===a||a,f=c(e.elements.popper),s=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&s.forEach((function(t){t.addEventListener("scroll",n.update,q)})),u&&f.addEventListener("resize",n.update,q),function(){o&&s.forEach((function(t){t.removeEventListener("scroll",n.update,q)})),u&&f.removeEventListener("resize",n.update,q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state;e.modifiersData[t.name]=z({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,u={placement:d(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),k(Object.assign(Object.assign({},u),{},{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),k(Object.assign(Object.assign({},u),{},{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},i=e.elements[t];p(i)&&f(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],i=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});p(r)&&f(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var i=e.state,o=e.name,u=e.options.offset,f=void 0===u?[0,0]:u,c=a.reduce((function(e,o){return e[o]=function(e,i,o){var a=d(e),u=[r,t].indexOf(a)>=0?-1:1,f="function"==typeof o?o(Object.assign(Object.assign({},i),{},{placement:e})):o,c=f[0],s=f[1];return c=c||0,s=(s||0)*u,[r,n].indexOf(a)>=0?{x:s,y:c}:{x:c,y:s}}(o,i.rects,f),e}),{}),s=c[i.placement],p=s.y;null!=i.modifiersData.popperOffsets&&(i.modifiersData.popperOffsets.x+=s.x,i.modifiersData.popperOffsets.y+=p),i.modifiersData[o]=c}},{name:"flip",enabled:!0,phase:"main",fn:function(i){var o=i.state,a=i.options,u=i.name;if(!o.modifiersData[u]._skip){for(var f=a.mainAxis,c=void 0===f||f,s=a.altAxis,p=void 0===s||s,h=a.fallbackPlacements,l=a.padding,v=a.boundary,b=a.rootBoundary,m=a.altBoundary,y=a.flipVariations,O=void 0===y||y,j=a.allowedAutoPlacements,w=o.options.placement,g=d(w),x=h||(g!==w&&O?function(t){if("auto"===d(t))return[];var e=P(t);return[S(t),e,S(e)]}(w):[P(w)]),M=[w].concat(x).reduce((function(t,e){return t.concat("auto"===d(e)?U(o,{placement:e,boundary:v,rootBoundary:b,padding:l,flipVariations:O,allowedAutoPlacements:j}):e)}),[]),E=o.rects.reference,k=o.rects.popper,q=new Map,A=!0,B=M[0],T=0;T<M.length;T++){var L=M[T],R=d(L),I="start"===H(L),W=[t,e].indexOf(R)>=0,C=W?"width":"height",F=D(o,{placement:L,boundary:v,rootBoundary:b,altBoundary:m,padding:l}),z=W?I?n:r:I?e:t;E[C]>k[C]&&(z=P(z));var V=P(z),_=[];if(c&&_.push(F[R]<=0),p&&_.push(F[z]<=0,F[V]<=0),_.every((function(t){return t}))){B=L,A=!1;break}q.set(L,_)}if(A)for(var G=function(t){var e=M.find((function(e){var n=q.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return B=e,"break"},J=O?3:1;J>0&&"break"!==G(J);J--);o.placement!==B&&(o.modifiersData[u]._skip=!0,o.placement=B,o.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(i){var o=i.state,a=i.options,u=i.name,f=a.mainAxis,c=void 0===f||f,s=a.altAxis,p=void 0!==s&&s,l=a.tether,v=void 0===l||l,b=a.tetherOffset,m=void 0===b?0:b,y=D(o,{boundary:a.boundary,rootBoundary:a.rootBoundary,padding:a.padding,altBoundary:a.altBoundary}),O=d(o.placement),x=H(o.placement),M=!x,E=w(O),k="x"===E?"y":"x",q=o.modifiersData.popperOffsets,A=o.rects.reference,P=o.rects.popper,B="function"==typeof m?m(Object.assign(Object.assign({},o.rects),{},{placement:o.placement})):m,S={x:0,y:0};if(q){if(c){var T="y"===E?t:r,L="y"===E?e:n,R="y"===E?"height":"width",I=q[E],W=q[E]+y[T],C=q[E]-y[L],F=v?-P[R]/2:0,z="start"===x?A[R]:P[R],U="start"===x?-P[R]:-A[R],V=o.elements.arrow,_=v&&V?h(V):{width:0,height:0},G=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[T],K=G[L],N=g(0,A[R],_[R]),Q=M?A[R]/2-F-N-J-B:z-N-J-B,X=M?-A[R]/2+F+N+K+B:U+N+K+B,Y=o.elements.arrow&&j(o.elements.arrow),Z=o.modifiersData.offset?o.modifiersData.offset[o.placement][E]:0,$=q[E]+X-Z,tt=g(v?Math.min(W,q[E]+Q-Z-(Y?"y"===E?Y.clientTop||0:Y.clientLeft||0:0)):W,I,v?Math.max(C,$):C);q[E]=tt,S[E]=tt-I}if(p){var et=q[k],nt=g(et+y["x"===E?t:r],et,et-y["x"===E?e:n]);q[k]=nt,S[k]=nt-et}o.modifiersData[u]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(i){var o,a=i.state,u=i.name,f=a.elements.arrow,c=a.modifiersData.popperOffsets,s=d(a.placement),p=w(s),l=[r,n].indexOf(s)>=0?"height":"width";if(f&&c){var v=a.modifiersData[u+"#persistent"].padding,b=h(f),m="y"===p?t:r,y="y"===p?e:n,O=a.rects.reference[l]+a.rects.reference[p]-c[p]-a.rects.popper[l],x=c[p]-a.rects.reference[p],M=j(f),E=M?"y"===p?M.clientHeight||0:M.clientWidth||0:0,k=E/2-b[l]/2+(O/2-x/2),q=g(v[m],k,E-b[l]-v[y]);a.modifiersData[u]=((o={})[p]=q,o.centerOffset=q-k,o)}},effect:function(t){var e=t.state,n=t.options,r=t.name,o=n.element,a=void 0===o?"[data-popper-arrow]":o,u=n.padding,f=void 0===u?0:u;null!=a&&("string"!=typeof a||(a=e.elements.popper.querySelector(a)))&&l(e.elements.popper,a)&&(e.elements.arrow=a,e.modifiersData[r+"#persistent"]={padding:x("number"!=typeof f?f:M(f,i))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,o=e.modifiersData.preventOverflow,a=D(e,{elementContext:"reference"}),u=D(e,{altBoundary:!0}),f=V(a,r),c=V(u,i,o),s=_(f),p=_(c);e.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:s,hasPopperEscaped:p},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{},{"data-popper-reference-hidden":s,"data-popper-escaped":p})}}]});class X{constructor(t,e,n){this.handleTransitionEnd=this.handleTransitionEnd.bind(this),this.anchor=t,this.popover=e,this.options=Object.assign({skidding:0,distance:0,placement:"bottom-start",strategy:"absolute",transitionElement:this.popover,visibleClass:"popover-visible",onAfterShow:()=>{},onAfterHide:()=>{},onTransitionEnd:()=>{}},n),this.isVisible=!1,this.popover.hidden=!0,this.popover.classList.remove(this.options.visibleClass),this.popover.addEventListener("transitionend",this.handleTransitionEnd)}handleTransitionEnd(t){t.target===this.options.transitionElement&&(this.options.onTransitionEnd.call(this,t),this.isVisible||this.popover.hidden||(this.popover.hidden=!0,this.popover.classList.remove(this.options.visibleClass),this.options.onAfterHide.call(this)))}destroy(){this.popover.removeEventListener("transitionend",this.handleTransitionEnd),this.popper&&(this.popper.destroy(),this.popper=null)}show(){this.isVisible=!0,this.popover.hidden=!1,requestAnimationFrame(()=>this.popover.classList.add(this.options.visibleClass)),this.popper&&this.popper.destroy(),this.popper=Q(this.anchor,this.popover,{placement:this.options.placement,strategy:this.options.strategy,modifiers:[{name:"flip",options:{boundary:"viewport"}},{name:"offset",options:{offset:[this.options.skidding,this.options.distance]}}]}),this.popover.addEventListener("transitionend",()=>this.options.onAfterShow.call(this),{once:!0}),requestAnimationFrame(()=>this.popper.update())}hide(){this.isVisible=!1,this.popover.classList.remove(this.options.visibleClass)}setOptions(t){this.options=Object.assign(this.options,t),this.isVisible?this.popover.classList.add(this.options.visibleClass):this.popover.classList.remove(this.options.visibleClass),this.popper&&(this.popper.setOptions({placement:this.options.placement,strategy:this.options.strategy}),requestAnimationFrame(()=>this.popper.update()))}}export{X as P}