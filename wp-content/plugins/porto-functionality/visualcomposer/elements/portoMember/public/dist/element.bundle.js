(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./portoMember/editor.css":function(e,t){e.exports=".vce-element-porto-member {\n  min-height: 10em;\n}\n\n.vce-element-porto-member-wrapper { \n  margin-bottom: 0;\n}\n"},"./portoMember/index.js":function(e,t,o){"use strict";o.r(t);var a=o("./node_modules/vc-cake/index.js"),l=o("./node_modules/@babel/runtime/helpers/extends.js"),s=o.n(l),i=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),n=o.n(i),r=o("./node_modules/@babel/runtime/helpers/createClass.js"),c=o.n(r),u=o("./node_modules/@babel/runtime/helpers/get.js"),p=o.n(u),m=o("./node_modules/@babel/runtime/helpers/inherits.js"),v=o.n(m),b=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=o.n(b),g=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),y=o.n(g),f=o("./node_modules/react/index.js"),h=o.n(f);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,a=y()(e);if(t){var l=y()(this).constructor;o=Reflect.construct(a,arguments,l)}else o=a.apply(this,arguments);return d()(this,o)}}var x=function(e){v()(o,e);var t=w(o);function o(e){return n()(this,o),t.call(this,e)}return c()(o,[{key:"componentDidMount",value:function(){p()(y()(o.prototype),"updateShortcodeToHtml",this).call(this,o.getShortcode(this.props.atts,this),this.refs.vcvhelper)}},{key:"componentDidUpdate",value:function(e){o.getShortcode(this.props.atts,this)!==o.getShortcode(e.atts,this)&&p()(y()(o.prototype),"updateShortcodeToHtml",this).call(this,o.getShortcode(this.props.atts,this),this.refs.vcvhelper)}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"validateSize",value:function(e){var t=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(t)?e:null}},{key:"getAttr",value:function(e){for(var t="",o=0;o<Object.keys(e).length;o++){var a=Object.keys(e)[o],l=e[a];""!==l&&("boolean"==typeof l&&!1===l&&(l=""),t+=a+"=",t+="number"==typeof l||"boolean"==typeof l?l+" ":'"'+l+'" ')}return t}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.atts,l=e.editor,i=a.customClass,n="vce-element-porto-member";"string"==typeof i&&i&&(n=n.concat(" "+i));var r=this.applyDO("all");return h.a.createElement("div",s()({className:n,id:"el-"+t},r,l),h.a.createElement("div",{className:"vcvhelper",ref:"vcvhelper","data-vcvs-html":o.getShortcode(a,this)}))}}],[{key:"getShortcode",value:function(e,t){var o={title:e.title?e.title:"",style:e.memberStyle?e.memberStyle:"",columns:e.columns?parseInt(e.columns):4,view:e.viewType?e.viewType:"classic",hover_image_effect:e.hoverImageEffect?e.hoverImageEffect:"zoom",overview:!!e.overview&&"yes",socials:!!e.socials&&"yes",cats:e.cats?e.cats:"",post_in:e.postIn?e.postIn:"",number:e.postCount?parseInt(e.postCount):8,role:!!e.role&&"yes",view_more:!!e.viewMore&&e.viewMore,view_more_class:e.viewMoreClass?e.viewMoreClass:"",filter:!!e.filter&&e.filter,pagination:!!e.pagination&&e.pagination,ajax_load:!!e.ajaxLoad&&"yes",ajax_modal:!!e.ajaxModal&&"yes",el_class:e.extraClassforMember?e.extraClassforMember:""};return"[porto_members "+t.getAttr(o)+"]"}}]),o}(Object(a.getService)("portoComponent").shortcodeComponent);(0,Object(a.getService)("cook").add)(o("./portoMember/settings.json"),(function(e){e.add(x)}),{css:!1,editorCss:o("./node_modules/raw-loader/index.js!./portoMember/editor.css")})},"./portoMember/settings.json":function(e){e.exports=JSON.parse('{"title":{"type":"string","access":"public","value":"","options":{"label":"Title"}},"memberStyle":{"type":"dropdown","access":"public","value":"","options":{"label":"Style","values":[{"label":"Basic","value":""},{"label":"Advanced","value":"advanced"}]}},"columns":{"type":"dropdown","access":"public","value":"4","options":{"label":"Columns","values":[{"label":"2","value":"2"},{"label":"3","value":"3"},{"label":"4","value":"4"},{"label":"5","value":"5"},{"label":"6","value":"6"}],"onChange":{"rules":{"memberStyle":{"rule":"value","options":{"value":""}}},"actions":[{"action":"toggleVisibility"}]}}},"viewType":{"type":"dropdown","access":"public","value":"classic","options":{"label":"View Type","values":[{"label":"Standard","value":"classic"},{"label":"Text On Image","value":"onimage"},{"label":"Text Out Image","value":"outimage"},{"label":"Text & Cat Out Image","value":"outimage_cat"},{"label":"Simple & Out Image","value":"simple"}],"onChange":{"rules":{"memberStyle":{"rule":"value","options":{"value":""}}},"actions":[{"action":"toggleVisibility"}]}}},"hoverImageEffect":{"type":"dropdown","access":"public","value":"zoom","options":{"label":"Hover Image Effect","values":[{"label":"Zoom","value":"zoom"},{"label":"No_Zoom","value":"no_zoom"}]}},"overview":{"type":"toggle","access":"public","value":true,"options":{"label":"Show Overview","onChange":{"rules":{"memberStyle":{"rule":"value","options":{"value":""}}},"actions":[{"action":"toggleVisibility"}]}}},"socials":{"type":"toggle","access":"public","value":true,"options":{"label":"Show Social Links"}},"cats":{"type":"autocomplete","access":"public","value":"","options":{"label":"Category IDs or slugs","description":"comma separated list of category ids or slugs","action":"portoMemberCatIDs","validation":true,"single":false}},"postIn":{"type":"autocomplete","access":"public","value":"","options":{"label":"Member IDs","description":"comma separated list of member ids","action":"portoMemberIDs","validation":true,"single":false}},"postCount":{"type":"number","access":"public","value":8,"options":{"label":"Posts Count","min":0,"max":32}},"role":{"type":"toggle","access":"public","value":false,"options":{"label":"Show Role","onChange":{"rules":{"vieType":{"rule":"value","options":{"value":"outimage_cat"}}},"actions":[{"action":"toggleVisibility"}]}}},"viewMore":{"type":"toggle","access":"public","value":false,"options":{"label":"Show Archive Link"}},"viewMoreClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name for Archive Link","onChange":{"rules":{"viewMore":{"rule":"toggle"}},"actions":[{"action":"toggleVisibility"}]}}},"filter":{"type":"toggle","access":"public","value":false,"options":{"label":"Show Filter"}},"pagination":{"type":"toggle","access":"public","value":false,"options":{"label":"Show Pagination"}},"ajaxLoad":{"type":"toggle","access":"public","value":false,"options":{"label":"Enable Ajax Load"}},"ajaxModal":{"type":"toggle","access":"public","value":false,"options":{"label":"Ajax Load on Modal","onChange":{"rules":{"ajaxLoad":{"rule":"toggle"}},"actions":[{"action":"toggleVisibility"}]}}},"extraClassforMember":{"type":"string","access":"public","value":"","options":{"label":"Extra class name for Member"}},"darkTextSkin":{"type":"toggleSmall","access":"public","value":false},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["title","memberStyle","columns","viewType","hoverImageEffect","overview","socials","cats","postIn","postCount","role","viewMore","viewMoreClass","filter","pagination","ajaxLoad","ajaxModal","extraClassforMember","outputInline","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["General"]},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"tag":{"access":"protected","type":"string","value":"portoMember"}}')}},[["./portoMember/index.js"]]]);