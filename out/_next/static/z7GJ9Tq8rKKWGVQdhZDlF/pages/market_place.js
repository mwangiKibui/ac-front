(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"30+C":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),c=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("kKAo"),o=n("H2TA"),l=c.forwardRef((function(e,t){var n=e.classes,o=e.className,l=e.raised,u=void 0!==l&&l,d=Object(r.a)(e,["classes","className","raised"]);return c.createElement(s.a,Object(a.a)({className:Object(i.a)(n.root,o),elevation:u?8:1,ref:t},d))}));t.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"83O6":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market_place",function(){return n("Dji1")}])},CLn9:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("aWxQ"),i=r.a.createElement,s=function(e){var t=Object(a.useState)(8)[0],n=Object(a.useState)(e.items)[0],s=Object(a.useState)([]),o=s[0],l=s[1],u=Object(a.useState)(e.currentPage)[0];return Object(a.useEffect)((function(){!function(){l([]);var e=t*u,a=e-t,r=n.slice(a,e);l(r)}()}),[e.currentPage]),i(r.a.Fragment,null,o.map((function(e,t){return i("div",{className:"col-12 'col-sm-3 col-md-3",key:t},i(c.a,{data:e}))})))};s.defaultProps={page:!1},t.a=s},DS6H:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n("rePB"),r="SIDEBAR_OPEN",c="SIDEBAR_CLOSE";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o={open:!1};function l(){return{type:r}}function u(){return{type:c}}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return s({},e,{open:!0});case c:return s({},e,{open:!1});default:return e}}},Dji1:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),c=n("KQm4"),i=n("q1tI"),s=n.n(i),o=n("5Yp1"),l=n("QDlW"),u=n("TbMw"),d=n("rnyU"),m=n("wgMw"),f=n("SnVr"),p=n("/MKj"),b=n("Nm0s"),g=n("TSYQ"),v=n.n(g),h=n("ma3e"),O=n("DS6H"),y=n("1OyB"),j=n("vuIU"),w=n("JX7q"),N=n("Ji7U"),k=n("md7G"),_=n("foSv"),E=n("rePB");function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(e){Object(N.a)(a,e);var t,n=(t=a,function(){var e,n=Object(_.a)(t);if(P()){var a=Object(_.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(k.a)(this,e)});function a(){var e;Object(y.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return e=n.call.apply(n,[this].concat(r)),Object(E.a)(Object(w.a)(e),"handleTransitionEnd",(function(t){e.content&&"height"===t.propertyName&&(e.content.style.height="")})),Object(E.a)(Object(w.a)(e),"handleToggle",(function(){var t=e.props.toggleClass;e.item&&e.content&&t&&(e.item.classList.contains(t)?e.collapse():e.expand())})),Object(E.a)(Object(w.a)(e),"setItemRef",(function(t){e.item=t})),Object(E.a)(Object(w.a)(e),"setContentRef",(function(t){e.content=t})),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){if(this.content){var e=this.props.open;this.content.addEventListener("transitionend",this.handleTransitionEnd),!0===e&&this.expand(!0),!1===e&&this.collapse(!0)}}},{key:"componentDidUpdate",value:function(){var e=this.props.open;"boolean"===typeof e&&(e?this.expand():this.collapse())}},{key:"componentWillUnmount",value:function(){this.content&&this.content.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"expand",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props.toggleClass;if(this.item&&this.content&&t)if(e)this.item.classList.add(t),this.content.style.height="";else{var n=this.content.getBoundingClientRect().height;this.item.classList.add(t);var a=this.content.getBoundingClientRect().height;this.content.style.height="".concat(n,"px"),this.content.getBoundingClientRect(),this.content.style.height="".concat(a,"px")}}},{key:"collapse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props.toggleClass;if(e)this.item.classList.remove(t),this.content.style.height="";else{var n=this.content.getBoundingClientRect().height;this.content.style.height="".concat(n,"px"),this.item.classList.remove(t),this.content.getBoundingClientRect(),this.content.style.height=""}}},{key:"render",value:function(){var e=this.props.render;return e?e({toggle:this.handleToggle,setItemRef:this.setItemRef,setContentRef:this.setContentRef}):null}}]),a}(i.Component),S=n("YFqc"),R=n.n(S),x=s.a.createElement,I=Object(p.b)((function(e){return{categories:e.categories.categories,basic:e.products.basic,premium:e.products.premium,services:e.services.services}}),null)((function(e){var t=Object(i.useState)(e.categories.map((function(e){return e.name})))[0],n=Object(i.useState)([].concat(Object(c.a)(e.premium),Object(c.a)(e.basic)))[0],a=t.map((function(t,a){var r=v()("filter-categories__item");return x("li",{key:a,className:r},x(R.a,{href:"/market_place/".concat(t)},x("a",null,t)),x("div",{className:"filter-categories__counter"},t.startsWith("services")?e.services.length:n.filter((function(e){return e.type===t})).length))}));return x("div",{className:"filter-categories"},x("div",{className:"filter-categories__list"},a))})),D=s.a.createElement,T=function(e){var t=e.offcanvas,n=D(I,null),a=D("div",{className:"widget-filters__item"},D(C,{toggleClass:"filter--opened",render:function(e){e.toggle;var t=e.setItemRef,a=e.setContentRef;return D("div",{className:"filter filter--opened",ref:t},D("div",{className:"filter__body",ref:a},D("div",{className:"filter__container"},n)))}})),r=v()("widget-filters widget",{"widget-filters--offcanvas--always":"always"===t,"widget-filters--offcanvas--mobile":"mobile"===t});return D("div",{className:r},D("h4",{className:"widget-filters__title"},"Categories"),D("div",{className:"widget-filters__list"},a))};T.defaultProps={offcanvas:"mobile"};var L=T,M=s.a.createElement;function A(e){var t=e.sidebarClose,n=e.sidebarState,a=e.offcanvas,r=v()("block block-sidebar",{"block-sidebar--open":n.open,"block-sidebar--offcanvas--always":"always"===a,"block-sidebar--offcanvas--mobile":"mobile"===a}),c=Object(i.useRef)(null),s=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=matchMedia("(max-width: 991px)"),r=!1,i=function(){if("mobile"===a&&(n.open&&!e.matches&&t(),!n.open&&e.matches&&r)){var i=c.current,o=s.current;i.style.transition="none",o.style.transition="none",i.getBoundingClientRect(),i.style.transition="",o.style.transition=""}};return e.addEventListener?e.addEventListener("change",i):e.addListener(i),i(),r=!0,function(){e.removeEventListener?e.removeEventListener("change",i):e.removeListener(i)}}),[a,n.open,t]),Object(i.useEffect)((function(){if(n.open){var e=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.paddingRight="".concat(document.body.clientWidth-e,"px")}else document.body.style.overflow="",document.body.style.paddingRight=""}),[n.open]),M("div",{className:r},M("div",{className:"block-sidebar__backdrop",ref:c,onClick:function(){return t()}}),M("div",{className:"block-sidebar__body",ref:s},M("div",{className:"block-sidebar__header"},M("div",{className:"block-sidebar__title"},"Categories"),M("button",{className:"block-sidebar__close",type:"button",onClick:function(){return t()}},M(h.a,null))),M("div",{className:"block-sidebar__item"},M(L,{offcanvas:a}))))}A.defaultProps={offcanvas:"mobile"};var B={sidebarClose:O.b},q=Object(p.b)((function(e){return{sidebarState:e.mp_sidebar}}),B)(A),F=n("CLn9"),H=n("KzMt"),U=s.a.createElement,G=function(e){var t=e.products,n=e.services,a=e.sidebarOpen,r=e.columns,o=Object(i.useState)([].concat(Object(c.a)(t),Object(c.a)(n)))[0],l=Object(i.useState)(!1),u=l[0],d=l[1],m=Object(i.useState)(1),f=m[0],p=m[1],g=function(e){setTimeout((function(){return p(e),d(!1)}),1e3),d(!0)},v=3===r?"mobile":"always";return U(s.a.Fragment,null,U("div",{className:"d-block d-sm-none d-md-none"},U("div",{className:"row"},U("div",{className:"col-12"},U("button",{className:"btn btn-outline-success",onClick:function(){return a()}},"show categories"),U(q,{offcanvas:v})),u?U("div",{className:"col-12 text-center"},U(b.ClipLoader,{size:"30px",color:"#009933"})):U(F.a,{items:o,currentPage:f}),U("div",{className:"col-12"},U(H.a,{elementsPerPage:8,totalElements:o.length,paginate:g,currentPage:f})))),U("div",{className:"d-none d-sm-block d-md-block"},U("div",{className:"row"},U("div",{className:"col-sm-2 col-md-2"},U(q,{offcanvas:v})),U("div",{className:"col-sm-9 col-md-9"},U("div",{className:"row"},u?U("div",{className:"col-sm-12 col-md-12 text-center"},U(b.ClipLoader,{size:"30px",color:"#009933"})):U(F.a,{items:o,currentPage:f})),U("div",{className:"col-sm-12 col-md-12"},U(H.a,{elementsPerPage:8,totalElements:o.length,paginate:g,currentPage:f}))))))},W={sidebarClose:O.b,sidebarOpen:O.c};G.defaultProps={columns:3,sidebarPosition:"start"};var z=Object(p.b)(null,W)(G),K=s.a.createElement,Q=function(e){var t=e.products,n=e.services;return K(o.a,null,K(l.a,{title:"Marketplace on allcomrades",description:"Sell and buy electronics,furnitures,clothings,footwears,beauties and also publish your service with us",url:"https://allcomrades.co.ke/market_place",image:t[0].profiles[0]}),K("section",{className:"mp"},K("div",{className:"container-fluid"},K("div",{className:"row"},K("div",{className:"col-12 col-sm-12 col-md-12"},K(u.a,{breadcrumb:[{url:"/",title:"Home"},{url:"/market_place",title:"Market place"}]}))),K(z,{products:t,services:n}))))};Q.getInitialProps=function(e){var t,n,a;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.store,i.next=3,r.a.awrap(t.dispatch(Object(d.d)()));case 3:return i.next=5,r.a.awrap(t.dispatch(Object(d.f)()));case 5:return i.next=7,r.a.awrap(t.dispatch(Object(f.b)()));case 7:return i.next=9,r.a.awrap(t.dispatch(Object(m.b)()));case 9:return n=[].concat(Object(c.a)(t.getState().products.premium),Object(c.a)(t.getState().products.basic)),a=Object(c.a)(t.getState().services.services),i.abrupt("return",{products:n,services:a});case 12:case"end":return i.stop()}}),null,null,null,Promise)};t.default=Q},Ie8z:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),c=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("H2TA"),o=["video","audio","picture","iframe","img"],l=c.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,u=e.component,d=void 0===u?"div":u,m=e.image,f=e.src,p=e.style,b=Object(r.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==o.indexOf(d),v=!g&&m?Object(a.a)({backgroundImage:'url("'.concat(m,'")')},p):p;return c.createElement(d,Object(a.a)({className:Object(i.a)(s.root,l,g&&s.media,-1!=="picture img".indexOf(d)&&s.img),ref:t,style:v,src:g?m||f:void 0},b),n)}));t.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},KzMt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("TSYQ"),i=n.n(c),s=r.a.createElement;t.a=function(e){for(var t=e.elementsPerPage,n=e.totalElements,a=e.paginate,r=e.currentPage,c=[],o=1;o<=Math.ceil(n/t);o++)c.push(o);return s("nav",{className:"pagination_nav"},s("ul",{className:"pagination"},c.map((function(e){var t=i()("page-item",{"page-item active":e===r});return s("li",{key:e,className:t},s("span",{onClick:function(){return a(e)},className:"page-link"},e))}))))}},QDlW:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("8Kt/"),i=n.n(c),s=r.a.createElement,o=function(e){return s(i.a,null,s("title",null,e.title),s("meta",{name:"description",content:e.description}),s("meta",{property:"og:type",content:"website"}),s("meta",{name:"og:title",property:"og:title",content:e.title}),s("meta",{name:"og:description",property:"og:description",content:e.description}),s("meta",{name:"og:site_name",content:"allcomrades platform"}),s("meta",{name:"og:url",content:e.url}),s("meta",{name:"twitter:card",content:"summary"}),s("meta",{name:"twitter:title",content:e.title}),s("meta",{name:"twitter:description",content:e.description}),s("meta",{name:"twitter:site",content:e.url}),s("meta",{name:"twitter:creator",content:"allcomrades platform"}),s("meta",{name:"twitter:image",content:e.image}),s("meta",{name:"twitter:image:width",content:"1200"}),s("meta",{name:"twitter:image:height",content:"600"}),s("link",{rel:"icon",type:"image/png",href:"/static/images/favicon.ico"}),s("link",{rel:"apple-touch-icon",href:"/static/images/favicon.ico"}),s("meta",{property:"og:image",content:e.image}),s("meta",{name:"og:image:width",content:"1200"}),s("meta",{name:"og:image:height",content:"600"}))};o.defaultProps={description:"A comrades platform for student marketplace, business and influencer marketing and much more",url:"https://allcomrades.co.ke",title:"allcomrades platform",desc:"A platform for karatina university students to sell and interact with businesses."},t.a=o},TbMw:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("YFqc"),i=n.n(c),s=n("IdFE"),o=r.a.createElement;function l(e){var t=e.header,n=e.breadcrumb;if(t&&(t=o("div",{className:"page-header__title"},o("h1",null,t))),n.length>0){var a=n.length-1;n=n.map((function(e,t){return a===t?o("li",{key:t,className:"breadcrumb-item active","aria-current":"page"},o(i.a,{href:e.url},o("a",null,e.title))):o("li",{key:t,className:"breadcrumb-item"},o(i.a,{href:e.url},o("a",null,e.title)),o(s.a,{className:"breadcrumb-arrow"}))})),n=o("div",{className:"page-header__breadcrumb"},o("nav",{"aria-label":"breadcrumb"},o("ol",{className:"breadcrumb"},n)))}return o("div",{className:"page-header"},o("div",{className:"page-header__container container"},n,t))}l.defaultProps={breadcrumb:[]},t.a=l},"oa/T":function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),c=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("H2TA"),o=c.forwardRef((function(e,t){var n=e.classes,s=e.className,o=e.component,l=void 0===o?"div":o,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(l,Object(a.a)({className:Object(i.a)(n.root,s),ref:t},u))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},wgMw:function(e,t,n){"use strict";n.d(t,"b",(function(){return m}));var a=n("rePB");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={loading:!1,categories:[]},s=n("o0o1"),o=n.n(s),l=n("vDqi"),u=n.n(l),d=function(e){return{type:"CATEGORIES_FETCH",payload:e}},m=function(){return function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CATEGORIES_LOADING"}),t.next=3,o.a.awrap(u.a.get("".concat("https://karuapi.herokuapp.com/api/","/prodCategories/fetchProdCategories")).then((function(t){var n=t.data.message;return e(d(n))})).catch(console.log));case 3:case"end":return t.stop()}}),null,null,null,Promise)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CATEGORIES_LOADING":return c({},e,{loading:!0});case"CATEGORIES_FETCH":return c({},e,{loading:!1,categories:t.payload});default:return c({},e)}}}},[["83O6",0,1,3,8,13,2,4,6,5,10,9,11,12]]]);