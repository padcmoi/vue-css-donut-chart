(function(e){function t(t){for(var o,a,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)a=i[d],r[a]&&m.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},s=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-css-donut-chart/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b75":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Main"),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._v("\n    Made with "),n("strong",[e._v("👐")]),e._v(" and "),n("strong",[e._v("⌨️")]),e._v(" by\n    "),n("a",{attrs:{href:"https://github.com/dumptyd"}},[e._v("dumptyd")]),e._v(".\n  ")])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),e._m(1),n("div",{staticClass:"container-donut"},[n("Donut",{attrs:{background:e.background,foreground:e.foreground,size:e.size,unit:e.unit,thickness:e.thickness,hasLegend:e.hasLegend,legendPlacement:e.legendPlacement,sections:e.validatedSections,total:e.total,"start-angle":e.startAngle},on:{"section-click":e.handleSectionClick}},[n("div",{domProps:{innerHTML:e._s(e.donutHTML)}})])],1),n("div",{staticClass:"container-body"},[n("div",{staticClass:"configuration"},[n("div",[n("h3",[e._v("Donut configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"background"}},[e._v("Background")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.background,expression:"background"}],attrs:{name:"background",type:"color"},domProps:{value:e.background},on:{input:function(t){t.target.composing||(e.background=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"foreground"}},[e._v("Foreground")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.foreground,expression:"foreground"}],attrs:{name:"foreground",type:"color"},domProps:{value:e.foreground},on:{input:function(t){t.target.composing||(e.foreground=t.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"size"}},[e._v("Size")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.size,expression:"size",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"size",type:"number"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.unit,expression:"unit"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.unit=t.target.multiple?n:n[0]}}},e._l(e.unitOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}),0)]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"thickness"}},[e._v("Ring thickness (%)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.thickness,expression:"thickness",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"thickness",type:"number",min:"0",max:"100"},domProps:{value:e.thickness},on:{input:function(t){t.target.composing||(e.thickness=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"start-angle"}},[e._v("Start angle (in degrees)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.startAngle,expression:"startAngle",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"start-angle",type:"number"},domProps:{value:e.startAngle},on:{input:function(t){t.target.composing||(e.startAngle=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])]),n("div",[n("h3",[e._v("Legend configuration")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control"},[n("label",{attrs:{for:"has-legend"}},[e._v("Has legend?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hasLegend,expression:"hasLegend"}],attrs:{name:"has-legend",type:"checkbox"},domProps:{checked:Array.isArray(e.hasLegend)?e._i(e.hasLegend,null)>-1:e.hasLegend},on:{change:function(t){var n=e.hasLegend,o=t.target,r=!!o.checked;if(Array.isArray(n)){var s=null,a=e._i(n,s);o.checked?a<0&&(e.hasLegend=n.concat([s])):a>-1&&(e.hasLegend=n.slice(0,a).concat(n.slice(a+1)))}else e.hasLegend=r}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"placement"}},[e._v("Legend Placement")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.legendPlacement,expression:"legendPlacement"}],attrs:{name:"placement",disabled:!e.hasLegend},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.legendPlacement=t.target.multiple?n:n[0]}}},e._l(e.placementOptions,function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])}),0)])])]),n("div",[n("h3",[e._v("Donut content")]),n("div",{staticClass:"control-group"},[n("div",{staticClass:"control control-vertical flex-grow-1 flex-start"},[e._m(2),"HTML"===e.textType?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.donutHTML,expression:"donutHTML"}],attrs:{name:"text",rows:"3"},domProps:{value:e.donutHTML},on:{input:function(t){t.target.composing||(e.donutHTML=t.target.value)}}}):e._e()])])]),n("div",{staticClass:"donut-sections"},[n("h3",[e._v("Donut sections")]),e._l(e.sections,function(t,o){return n("div",{key:o,staticClass:"control-group"},[n("div",{staticClass:"control"},[n("pre",[n("small",[e._v(e._s(o+1)+".")])])]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-value-"+(o+1)}},[e._v("Value")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"section.value",modifiers:{number:!0}}],staticClass:"sm",attrs:{name:"`section-value-${idx + 1}`",min:0,max:t.value+e.remaining,type:"number"},domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-label-"+(o+1)}},[e._v("Label")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"section.label"}],attrs:{name:"`section-label-${idx + 1}`",type:"text"},domProps:{value:t.label},on:{input:function(n){n.target.composing||e.$set(t,"label",n.target.value)}}})]),n("div",{staticClass:"control"},[n("label",{attrs:{for:"section-color-"+(o+1)}},[e._v("Color")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"section.color"}],staticClass:"sm",attrs:{name:"`section-color-${idx + 1}`",type:"color"},domProps:{value:t.color},on:{input:function(n){n.target.composing||e.$set(t,"color",n.target.value)}}})]),n("div",{staticClass:"control"},[n("button",{staticClass:"outline-red",on:{click:function(t){return e.removeSection(o)}}},[e._v("- remove")])])])})],2),n("button",{staticClass:"outline-green",on:{click:e.addSection}},[e._v("\n        + add "+e._s(e.sections.length?"another":"a")+" section\n      ")])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-header"},[n("h1",[e._v("vue-css-donut-chart")]),n("span",[e._v("Lightweight Vue component for drawing pure CSS donut charts")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"container-nav"},[n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md"}},[e._v("Documentation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#installation"}},[e._v("Installation")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart/blob/master/README.md#usage"}},[e._v("Usage")]),n("a",{attrs:{href:"https://github.com/dumptyd/vue-css-donut-chart"}},[e._v("Github")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{attrs:{for:"text"}},[e._v("Content "),n("small",[e._v("(HTML supported)")])])}],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-container",style:e.placementStyles.container},[n("div",{ref:"donut",staticClass:"cdc",style:e.donutStyles},[n("DonutSections",{attrs:{sections:e.donutSections,"start-angle":e.startAngle},on:{"section-click":e.emitSectionClick}}),n("div",{staticClass:"cdc-overlay",style:e.overlayStyles},[n("div",{staticClass:"cdc-text",style:e.donutTextStyles},[e._t("default",[e._v(e._s(e.text))])],2)])],1),e._t("legend",[e.hasLegend?n("div",{staticClass:"cdc-legend",style:e.placementStyles.legend},e._l(e.legend,function(t,o){return n("span",{key:o,staticClass:"cdc-legend-item",attrs:{title:t.percent}},[n("span",{staticClass:"cdc-legend-item-color",style:t.styles}),n("span",[e._v(e._s(t.label))])])}),0):e._e()])],2)},c=[];n("ac6a");const u=["#FF6384","#36A2EB","#FFCE56","#F58231","#46F0F0","#D2F53C","#911EB4","#F032E6","#3CB44B","#FFE119","#E6194B","#FABEBE","#008080","#E6BEFF","#0082C8","#AA6E28","#FFFAC8","#800000","#AAFFC3","#808000","#FFD8B1","#000080","#808080","#000000"];var d=u;const m="1em",v="dodgerblue",p={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},f={[p.TOP]:{container:{flexDirection:"column"},legend:{order:-1,margin:0,marginBottom:m}},[p.RIGHT]:{container:{},legend:{flexDirection:"column",margin:0,marginLeft:m}},[p.BOTTOM]:{container:{flexDirection:"column"},legend:{}},[p.LEFT]:{container:{},legend:{flexDirection:"column",order:-1,margin:0,marginRight:m}}},g=e=>!!e&&e.constructor===Object,h=[{type:"number",key:"value",required:!0},{key:"label"},{key:"color"}];function b(e){return!!g(e)&&h.reduce((t,n)=>{if(!t)return!1;let o=!0;return n.required&&(o=o&&Object.hasOwnProperty.call(e,n.key)),n.type&&(o=o&&typeof e[n.key]===n.type),t&&o},!0)}var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cdc-sections",style:e.containerStyles},e._l(e.dSections,function(t,o){return n("div",{key:o,staticClass:"cdc-section",class:t.className,style:t.sectionStyles,on:{click:function(t){return e.emitClick(e.sections[o])}}},[n("div",{staticClass:"cdc-filler",style:t.fillerStyles,attrs:{title:t.label}})])}),0)},_=[];const k={LEFT:"cdc-section-left",RIGHT:"cdc-section-right"};var C={props:{startAngle:{type:Number,default:0},sections:{type:Array,default:()=>[]}},computed:{containerStyles(){return{transform:`rotate(${this.startAngle}deg)`}},dSections(){const e=180;let t=0,n=0;const o=this.sections.map(o=>{let r=[k.RIGHT,-180],s=r[0],a=r[1];if(t>=e){var i=[k.LEFT,180];s=i[0],a=i[1]}const l=a+o.degree,c={backgroundColor:o.color||v,transform:`rotate(${l}deg)`},u={transform:`rotate(${n}deg)`};return t+=o.degree,180===t?n=0:n+=o.degree,{label:o.label,className:s,fillerStyles:c,sectionStyles:u}});return o}},methods:{emitClick(e){this.$emit("section-click",e)}}},S=C,x=n("2877"),L=Object(x["a"])(S,y,_,!1,null,null,null),w=L.exports,E=(n("7e79"),{name:"vc-donut",props:{size:{type:Number,default:250,validator:e=>e>0},unit:{type:String,default:"px"},thickness:{type:Number,default:20,validator:e=>e>=0&&e<=100},text:{type:String,default:null},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#eeeeee"},sections:{type:Array,default:()=>[],validator(e){for(let t=0;t<e.length;++t)if(!b(e[t]))return!1;return!0}},total:{type:Number,default:100,validator:e=>e>0},hasLegend:{type:Boolean,default:!1},legendPlacement:{default:p.BOTTOM,validator:e=>!!p[e.toUpperCase()]},startAngle:{type:Number,default:0}},watch:{size(){this.recalcFontSize()},unit(){this.recalcFontSize()}},data(){return{donutEl:null,fontSize:"1em",resizeListener:null}},computed:{donutSections(){const e=this.sections.reduce((e,t)=>e+t.value,0);if(e>this.total){const t=`Sum of all the sections' values (${e}) should not exceed \`total\` (${this.total})`;throw new Error(t)}const t=360,n=180;let o=0,r=0;const s=[];return this.sections.forEach(e=>{const a=t*(e.value/this.total);let i=[a];a>n&&(i=[n,a-n]);const l=e.color||d[r++];i.forEach(t=>{const r=o+t;if(r>n){const r=n-o;s.push(Object.assign({},e,{degree:r,color:l}),Object.assign({},e,{degree:t-r,color:l}))}else s.push(Object.assign({},e,{degree:t,color:l}));o+=t,o>=n&&(o-=n)})}),s},legend(){if(!this.hasLegend)return null;let e=0;return this.sections.map((t,n)=>({label:t.label||`Section ${n+1}`,percent:`${t.value} (${t.value/this.total*100}%)`,styles:{backgroundColor:t.color||d[e++]}}))},placementStyles(){return this.hasLegend?f[this.legendPlacement]:{}},donutStyles(){const e=`${this.size}${this.unit}`,t={width:e,paddingBottom:e,backgroundColor:this.foreground};return t},overlayStyles(){const e=100,t=e-this.thickness,n=`${t}%`,o=`calc(50% - ${t/2}%)`;return{height:n,width:n,top:o,left:o,backgroundColor:this.background}},donutTextStyles(){const e=this.fontSize;return{fontSize:e}}},methods:{recalcFontSize(){const e=.08;let t=this.size;this.$nextTick(()=>{"px"!==this.unit&&(t=this.donutEl?this.donutEl.clientWidth:null),this.fontSize=t?`${(t*e).toFixed(2)}px`:"1em"})},emitSectionClick(e){this.$emit("section-click",e)}},mounted(){this.donutEl=this.$refs.donut,this.recalcFontSize(),this.resizeListener=this.recalcFontSize.bind(this),window.addEventListener("resize",this.resizeListener)},beforeDestroy(){window.removeEventListener("resize",this.resizeListener)},components:{DonutSections:w}}),$=E,T=Object(x["a"])($,l,c,!1,null,null,null),F=T.exports;n("ce52"),n("0b75");function O(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var P={data(){const e=["px","%"],t=["top","right","bottom","left"],n=["text","HTML"],o=["Wake up","Work","Eat donuts","Sleep"],r=100,s=Array(4).fill(!0).map((e,t,n)=>({value:O(r/n.length/2,r/n.length),label:o[t],color:d[t]})),a=s.reduce((e,t)=>e+t.value,0);return{background:"#ffffff",foreground:"#eeeeee",size:200,unit:"px",thickness:20,startAngle:0,total:r,hasLegend:!0,legendPlacement:"bottom",textType:"HTML",donutHTML:`<h1 style="margin: 0;">${a}%</h1> donut consumed`,donutText:"",unitOptions:e,placementOptions:t,textTypeOptions:n,sections:s}},computed:{consumed(){return this.sections.reduce((e,t)=>e+t.value,0)},remaining(){return this.total-this.consumed},validatedSections(){return this.consumed>this.total?[]:this.sections}},methods:{addSection(){this.sections.push({value:0,label:null,color:d[this.sections.length]||null})},removeSection(e){this.sections.splice(e,1)},handleSectionClick(e){window.alert(`${e.label||"Section"} clicked`)}},components:{Donut:F}},z=P,A=Object(x["a"])(z,a,i,!1,null,null,null),M=A.exports,N={components:{Main:M}},D=N,j=Object(x["a"])(D,r,s,!1,null,null,null),B=j.exports;o["a"].config.productionTip=!1,new o["a"]({render:e=>e(B)}).$mount("#app")},"7e79":function(e,t,n){},ce52:function(e,t,n){}});