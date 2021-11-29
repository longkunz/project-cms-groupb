(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./googleFontsHeading/index.js":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/vc-cake/index.js"),l=t.n(o),i=t("./node_modules/@babel/runtime/helpers/extends/index.js"),a=t.n(i),s=t("./node_modules/@babel/runtime/helpers/classCallCheck/index.js"),r=t.n(s),c=t("./node_modules/@babel/runtime/helpers/createClass/index.js"),g=t.n(c),d=t("./node_modules/@babel/runtime/helpers/inherits/index.js"),u=t.n(d),p=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn/index.js"),f=t.n(p),m=t("./node_modules/@babel/runtime/helpers/getPrototypeOf/index.js"),v=t.n(m),h=t("./node_modules/react/index.js"),y=t.n(h);function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=v()(e);if(n){var l=v()(this).constructor;t=Reflect.construct(o,arguments,l)}else t=o.apply(this,arguments);return f()(this,t)}}var x=function(e){u()(t,e);var n=b(t);function t(){return r()(this,t),n.apply(this,arguments)}return g()(t,[{key:"validateSize",value:function(e){var n=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(n)?e:null}},{key:"render",value:function(){var e=this.props,n=e.id,t=e.atts,o=e.editor,l=t.text,i=t.elementTag,s=t.font,r=t.fontSize,c=t.alignment,g=t.lineHeight,d=t.letterSpacing,u=t.link,p=t.colorType,f=t.customClass,m=t.metaCustomId,v="vce-google-fonts-heading",h={},b={style:{}},x=i,k=l;if(u&&u.url){var F={href:u.url,title:u.title,target:u.targetBlank?"_blank":void 0,rel:u.relNofollow?"nofollow":void 0};k=y.a.createElement("a",a()({className:"vce-google-fonts-heading-link"},F),k)}"string"==typeof f&&f&&(v+=" "+f),r&&(r=this.validateSize(r))&&(r=/^\d+$/.test(r)?r+"px":r,b.style.fontSize=r),g&&(g=this.validateSize(g))&&(b.style.lineHeight=g),d&&(d=this.validateSize(d))&&(d=/^\d+$/.test(d)?d+"px":d,b.style.letterSpacing=d),c&&(v+=" vce-google-fonts-heading--align-".concat(c));var w=this.getMixinData("textColor");if(w)switch(p){case"gradient":v+=" vce-google-fonts-heading--gradient-".concat(w.selector);break;case"color":v+=" vce-google-fonts-heading--color-".concat(w.selector);break;default:console.warn("There was an issue assigning color type.")}if((w=this.getMixinData("fontFamily"))&&(v+=" vce-google-fonts-heading--font-family-".concat(w.selector)),s&&"active"===s.status){var S=s.fontStyle?"regular"===s.fontStyle.style?"normal":s.fontStyle.style:"normal";b.style.fontWeight=s.fontStyle?s.fontStyle.weight:400,b.style.fontStyle=S}m&&(h.id=m);var C=this.applyDO("border background animation padding margin");return y.a.createElement("div",a()({},h,{className:v},o),y.a.createElement("div",{className:"vce-google-fonts-heading-wrapper"},y.a.createElement("div",a()({className:"vce-google-fonts-heading--background vce",id:"el-"+n},C),y.a.createElement(x,a()({className:"vce-google-fonts-heading-inner"},b),k))))}}]),t}(l.a.getService("api").elementComponent);(0,l.a.getService("cook").add)(t("./googleFontsHeading/settings.json"),(function(e){e.add(x)}),{css:t("./node_modules/raw-loader/index.js!./googleFontsHeading/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./googleFontsHeading/editor.css"),mixins:{textColor:{mixin:t("./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/textColor.pcss")},fontFamily:{mixin:t("./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/fontFamily.pcss")}}},"")},"./googleFontsHeading/settings.json":function(e){e.exports=JSON.parse('{"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["text","font","elementTag","colorType","color","gradientStart","gradientEnd","gradientAngle","fontSize","alignment","lineHeight","letterSpacing","link","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"text":{"type":"string","access":"public","value":"The sky was cloudless and of a deep dark blue.","options":{"label":"Title text","inline":true,"inlineMode":"text","dynamicField":true}},"font":{"type":"googleFonts","access":"public","value":{"fontFamily":"Lato","fontStyle":{"weight":"400","style":"regular"},"status":"active","fontText":"The sky was cloudless and of a deep dark blue."},"options":{"label":"","cssMixin":{"mixin":"fontFamily","property":"fontFamily","namePattern":"[a-z]+","valueKey":"fontFamily"}}},"elementTag":{"type":"dropdown","access":"public","value":"h2","options":{"label":"Element tag","values":[{"label":"h1","value":"h1"},{"label":"h2","value":"h2"},{"label":"h3","value":"h3"},{"label":"h4","value":"h4"},{"label":"h5","value":"h5"},{"label":"h6","value":"h6"},{"label":"p","value":"p"},{"label":"div","value":"div"}]}},"colorType":{"type":"dropdown","access":"public","value":"color","options":{"label":"Gradient overlay type","values":[{"label":"Color","value":"color"},{"label":"Gradient","value":"gradient"}]}},"color":{"type":"color","access":"public","value":"","options":{"label":"Title color","cssMixin":{"mixin":"textColor","property":"color","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"color"}}},"actions":[{"action":"toggleVisibility"}]}}},"gradientStart":{"type":"color","access":"public","value":" #FF7200","options":{"label":"Start color","cssMixin":{"mixin":"textColor","property":"gradientStart","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"gradient"}}},"actions":[{"action":"toggleVisibility"}]}}},"gradientEnd":{"type":"color","access":"public","value":" #5C00FF","options":{"label":"End color","cssMixin":{"mixin":"textColor","property":"gradientEnd","namePattern":"[\\\\da-f]+"},"onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"gradient"}}},"actions":[{"action":"toggleVisibility"}]}}},"gradientAngle":{"type":"range","access":"public","value":"45","options":{"label":"Gradient angle","cssMixin":{"mixin":"textColor","property":"gradientAngle","namePattern":"[\\\\d\\\\-]+"},"min":0,"max":180,"measurement":"°","onChange":{"rules":{"colorType":{"rule":"value","options":{"value":"gradient"}}},"actions":[{"action":"toggleVisibility"}]}}},"fontSize":{"type":"string","access":"public","value":"","options":{"label":"Font size"}},"alignment":{"type":"buttonGroup","access":"public","value":"left","options":{"label":"Alignment","values":[{"label":"Left","value":"left","icon":"vcv-ui-icon-attribute-alignment-left"},{"label":"Center","value":"center","icon":"vcv-ui-icon-attribute-alignment-center"},{"label":"Right","value":"right","icon":"vcv-ui-icon-attribute-alignment-right"}]}},"lineHeight":{"type":"string","access":"public","value":"","options":{"label":"Line height"}},"letterSpacing":{"type":"string","access":"public","value":"","options":{"label":"Letter spacing"}},"link":{"type":"url","access":"public","value":{"url":"","title":"","targetBlank":true,"relNofollow":false},"options":{"label":"Link selection","description":"Opens the field to add a link to the element.","dynamicField":true}},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from the custom CSS option."}},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only)."}},"tag":{"type":"string","access":"protected","value":"googleFontsHeading"}}')},"./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/fontFamily.pcss":function(e,n){e.exports=".vce-google-fonts-heading {\n  &--font-family-$selector {\n    .vce-google-fonts-heading-inner {\n      @if $fontFamily != false {\n        font-family: $fontFamily !important;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./googleFontsHeading/cssMixins/textColor.pcss":function(e,n){e.exports=".vce-google-fonts-heading {\n  &--color-$selector {\n    .vce-google-fonts-heading-inner {\n      @if $color != false {\n        color: $color !important;\n      }\n    }\n  }\n  &--gradient-$selector {\n    .vce-google-fonts-heading-inner {\n      @if $gradientStart != false {\n        background-image: linear-gradient($(gradientAngle)deg, $gradientStart, $gradientEnd);\n        background-clip: text;\n        -webkit-background-clip: text;\n        color: transparent !important;\n      }\n    }\n  }\n}\n"},"./node_modules/raw-loader/index.js!./googleFontsHeading/editor.css":function(e,n){e.exports=".vce-google-fonts-heading {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./googleFontsHeading/styles.css":function(e,n){e.exports=".vce-google-fonts-heading-inner {\n  padding: 0;\n  margin-bottom: 0;\n}\n\n.vce-google-fonts-heading-inner .medium-editor-placeholder {\n  background: inherit;\n}\n\n.vce-google-fonts-heading-wrapper {\n  max-width: 100%;\n  display: inline-block;\n}\n\n.vce-google-fonts-heading-link,\n.vce-google-fonts-heading-link:hover,\n.vce-google-fonts-heading-link:focus,\n.vce-google-fonts-heading-link:visited {\n  border: none;\n  text-decoration: inherit;\n  color: inherit;\n  background: inherit;\n}\n\n.vce-google-fonts-heading--align-center {\n  text-align: center;\n}\n\n.vce-google-fonts-heading--align-right {\n  text-align: right;\n}\n\n.vce-google-fonts-heading--align-left {\n  text-align: left;\n}\n\n"}},[["./googleFontsHeading/index.js"]]]);