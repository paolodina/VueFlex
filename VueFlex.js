!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.VueFlex=n()}(this,function(){"use strict";var e={name:"VueFlexBox",props:{tag:{type:String,default:"div"},directionColumn:{type:Boolean,default:!1},reverseDirection:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},reverseWrap:{type:Boolean,default:!1},justifyContent:{type:String,default:"start"},alignItems:{type:String,default:"stretch"},alignContent:{type:String,default:"stretch"},spacing:{type:[Number,String],default:0}},computed:{normalizedJustifyContent:function(){var e=this.justifyContent;switch(e){case"start":return"flex-start";case"end":return"flex-end"}return e},normalizedAlignItems:function(){var e=this.alignItems;switch(e){case"start":return"flex-start";case"end":return"flex-end"}return e},normalizedAlignContent:function(){var e=this.alignContent;switch(e){case"start":return"flex-start";case"end":return"flex-end"}return e},normalizedSpacing:function(){var e=this.spacing;return"number"==typeof e?e+"px":e},nested:function(){return this.$parent&&this.$parent.$options.name===this.$options.name},margin:function(){if(this.nested)return this.$parent.childMargin},childMarginExpression:function(){return this.nested?this.$parent.childMarginExpression:this.normalizedSpacing+" / 2"},childMargin:function(){return"calc("+this.childMarginExpression+")"},innerMarginExpression:function(){return"-1 * ("+this.childMarginExpression+")"},innerMargin:function(){return"calc("+this.innerMarginExpression+")"},innerSizeExpression:function(){return"100% - ("+this.innerMarginExpression+") * 2"},innerSize:function(){return"calc("+this.innerSizeExpression+")"}},render:function(e){var n=this,t=n.tag,i=n.nested,r=n.margin,a=n.innerMargin,s=n.innerSize,o=n.directionColumn,u=n.reverseDirection,l=n.wrap,c=n.reverseWrap;return e(t,{style:{margin:r}},[e("div",{style:{margin:a,width:s,height:s,display:i?"flex":"inline-flex",flexDirection:o?u?"column-reverse":"column":u?"row-reverse":"row",flexWrap:l?c?"wrap-reverse":"wrap":"nowrap",justifyContent:n.normalizedJustifyContent,alignItems:n.normalizedAlignItems,alignContent:n.normalizedAlignContent}},n.$slots.default)])}},n={name:"VueFlexItem",props:{tag:{type:String,default:"div"}},computed:{margin:function(){return this.$parent.childMargin}},render:function(e){var n=this;return e(n.tag,{style:{margin:n.margin}},n.$slots.default)}},t=Object.freeze({Box:e,Item:n}),i=Object.assign({},{install:function(n){Object.values(this.components).forEach(function(e){n.component(e.name,e)})},components:t},t);return"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),i});
