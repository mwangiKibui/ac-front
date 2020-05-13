(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"/PZL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},"7FV1":function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n("q1tI"),l=(n("i8i4"),n("xFC4"),n("wT0s")),u=n("zPnG"),f=n("17x9"),d=n("Dy/p"),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},m={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||u,f=function(t){function u(e){a(this,u);var t=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));return m.call(t),t.state={active:!1},t}return s(u,t),o(u,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();l.isMounted(e)||l.mount(e),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&l.addStateHandler(this.stateHandler),l.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){l.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var o in p)n.hasOwnProperty(o)&&delete n[o];return n.className=t,n.onClick=this.handleClick,c.createElement(e,n)}}]),u}(c.Component),m=function(){var e=this;this.scrollTo=function(t,o){n.scrollTo(t,r({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var o=e.props.to,a=null,i=0,s=0,c=0;if(r.getBoundingClientRect)c=r.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(o)))return;var u=a.getBoundingClientRect();s=(i=u.top-c+t)+u.height}var f=t-e.props.offset,p=f>=Math.floor(i)&&f<Math.floor(s),m=f<Math.floor(i)||f>=Math.floor(s),h=n.getActiveLink();return m?(o===h&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===o&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),l.updateStates()):p&&h!==o?(n.setActiveLink(o),e.props.hashSpy&&d.changeHash(o),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(o)),l.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return s(n,t),o(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;u.unregister(this.props.name)}},{key:"registerElems",value:function(e){u.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return c.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(c.Component);return t.propTypes={name:f.string,id:f.string},t}};e.exports=m},"7wkA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n("q1tI")),a=i(n("pUFB"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return o.default.createElement("input",this.props,this.props.children)}}]),t}(o.default.Component);t.default=(0,a.default)(s)},"8QoP":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("QLqi"),o=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!==typeof document&&o.forEach((function(t){return(0,r.addPassiveEventListener)(document,t,e)}))}}},"Dy/p":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("QLqi");var r,o=n("xFC4"),a=(r=o)&&r.__esModule?r:{default:r};var i={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var r=this.containers[e]||document;n.scrollTo(e,{container:r})}},getHash:function(){return a.default.getHash()},changeHash:function(e){this.isInitialized()&&a.default.getHash()!==e&&a.default.pushHash(e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=i},EenU:function(e,t,n){"use strict";n.d(t,"b",(function(){return p}));var r=n("KQm4"),o=n("rePB");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={loading:!1,hostels:[],hostel:{},reviews:[]},c=n("o0o1"),l=n.n(c),u=n("vDqi"),f=n.n(u),d="https://karuapi.herokuapp.com/api/",p=function(){return function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"HOSTEL_LOADING"}),t.next=3,l.a.awrap(f.a.get("".concat(d,"/hostels/fetchHostels")).then((function(t){return e({type:"HOSTELS_FETCH",payload:t.data.message})})).catch(console.log));case 3:case"end":return t.stop()}}),null,null,null,Promise)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HOSTEL_LOADING":return i({},e,{loading:!0});case"RESET_HOSTEL_LOADING":return i({},e,{loading:!1});case"HOSTELS_FETCH":return i({},e,{loading:!1,hostels:t.payload});case"HOSTEL_FETCH":return i({},e,{loading:!1,hostel:t.payload});case"LOAD_REVIEWS":return i({},e,{reviews:t.payload,loading:!1});case"ADD_REVIEW":return i({},e,{reviews:[].concat(Object(r.a)(e.reviews),[t.payload]),loading:!1});case"DELETE_REVIEW":return i({},e,{reviews:e.reviews.filter((function(e){return e._id!==t.payload})),loading:!1});default:return i({},e)}}},NEP4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=(s(n("xFC4")),s(n("/PZL"))),a=s(n("8QoP")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return o.default[e.smooth]||o.default.defaultEasing},l=function(){if("undefined"!==typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},u=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,r="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},f=function e(t,n,r){var o=n.data;if(n.ignoreCancelEvents||!o.cancel)if(o.deltaTop=Math.round(o.targetPositionY-o.startPositionY),null===o.start&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPositionY=o.startPositionY+Math.ceil(o.deltaTop*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?o.containerElement.scrollTop=o.currentPositionY:window.scrollTo(0,o.currentPositionY),o.percent<1){var a=e.bind(null,t,n);l.call(window,a)}else i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPositionY);else i.default.registered.end&&i.default.registered.end(o.to,o.target,o.currentPositionY)},d=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},p=function(e,t,n,r){if(t.data=t.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),a.default.subscribe((function(){t.data.cancel=!0})),d(t),t.data.start=null,t.data.cancel=!1,t.data.startPositionY=u(t),t.data.targetPositionY=t.absolute?e:e+t.data.startPositionY,t.data.startPositionY!==t.data.targetPositionY){var o;t.data.deltaTop=Math.round(t.data.targetPositionY-t.data.startPositionY),t.data.duration=("function"===typeof(o=t.duration)?o:function(){return o})(t.data.deltaTop),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=r;var s=c(t),p=f.bind(null,s,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),l.call(window,p)}),t.delay):(i.default.registered.begin&&i.default.registered.begin(t.data.to,t.data.target),l.call(window,p))}else i.default.registered.end&&i.default.registered.end(t.data.to,t.data.target,t.data.currentPositionY)},m=function(e){return(e=r({},e)).data=e.data||{currentPositionY:0,startPositionY:0,targetPositionY:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,deltaTop:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:p,getAnimationType:c,scrollToTop:function(e){p(0,m(e))},scrollToBottom:function(e){e=m(e),d(e),p(function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,r=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)}(e),e)},scrollTo:function(e,t){p(e,m(t))},scrollMore:function(e,t){t=m(t),d(t),p(u(t)+e,t)}}},PGca:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),o=a(n("pUFB"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.render=function(){return r.default.createElement("a",o.props,o.props.children)},i(o,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(r.default.Component);t.default=(0,o.default)(s)},QDlW:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),s=o.a.createElement,c=function(e){return s(i.a,null,s("title",null,e.title),s("meta",{name:"description",content:e.description}),s("meta",{property:"og:type",content:"website"}),s("meta",{name:"og:title",property:"og:title",content:e.title}),s("meta",{name:"og:description",property:"og:description",content:e.description}),s("meta",{name:"og:site_name",content:"allcomrades platform"}),s("meta",{name:"og:url",content:e.url}),s("meta",{name:"twitter:card",content:"summary"}),s("meta",{name:"twitter:title",content:e.title}),s("meta",{name:"twitter:description",content:e.description}),s("meta",{name:"twitter:site",content:e.url}),s("meta",{name:"twitter:creator",content:"allcomrades platform"}),s("meta",{name:"twitter:image",content:e.image}),s("meta",{name:"twitter:image:width",content:"1200"}),s("meta",{name:"twitter:image:height",content:"600"}),s("link",{rel:"icon",type:"image/png",href:"/static/images/favicon.ico"}),s("link",{rel:"apple-touch-icon",href:"/static/images/favicon.ico"}),s("meta",{property:"og:image",content:e.image}),s("meta",{name:"og:image:width",content:"1200"}),s("meta",{name:"og:image:height",content:"600"}))};c.defaultProps={description:"A comrades platform for student marketplace, business and influencer marketing and much more",url:"https://allcomrades.co.ke",title:"allcomrades platform",desc:"A platform for karatina university students to sell and interact with businesses."},t.a=c},QLqi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var r=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!r&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},QQPg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={registered:{},scrollEvent:{register:function(e,t){r.registered[e]=t},remove:function(e){r.registered[e]=null}}};t.default=r},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("KQm4"),i=n("q1tI"),s=n.n(i),c=n("/MKj"),l=n("5Yp1"),u=n("QDlW"),f=n("1OyB"),d=n("vuIU"),p=n("Ji7U"),m=n("md7G"),h=n("foSv"),v=n("oqc9"),y=s.a.createElement;function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var b=function(e){Object(p.a)(r,e);var t,n=(t=r,function(){var e,n=Object(h.a)(t);if(g()){var r=Object(h.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(m.a)(this,e)});function r(){return Object(f.a)(this,r),n.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return y("section",{className:"home",style:{backgroundImage:"url(/static/images/nba.webp)"}},y("div",{className:"home_overlay"},y("div",{className:"home_content"},y("div",{className:"container"},y("div",{className:"row"},y("div",{className:"col-12 col-sm-12 col-md-12 text-left"},y("div",{className:"slideshow_content"},y("div",{className:"slideshow_content_title"},y("h2",null,"A comrades platform, "),y("h2",null,"For the rest of us.")),y("div",{className:"slideshow_content_action"},y(v.Link,{to:"mp",className:"btn btn-info",duration:500,smooth:!0,delay:1},"Explore our services")))))))))}}]),r}(i.Component),w=n("P9Z8"),O=n("aWxQ"),_=s.a.createElement,S=Object(c.b)(null,null)((function(e){var t=e.products;return _("section",{className:"blockAds"},_("div",{className:"container"},_("div",{className:"row"},_(s.a.Fragment,null,_("div",{className:"col-12 col-sm-12 col-md-12"},_(w.a,{title:"Trending Ads",link:"/products"})),t.map((function(e,t){return _("div",{className:"col-12 col-sm-3 col-md-3",key:t},_(O.a,{data:e}))}))))))})),E=n("yZtX"),P=s.a.createElement,j=function(e){var t=e.services;return P("section",{className:"blockServices"},P("div",{className:"container"},P("div",{className:"row"},P("div",{className:"col-12 col-sm-12 col-md-12"},P(w.a,{title:"Services Offered",link:"/services"})),t.map((function(e,t){return P("div",{className:"col-12 col-sm-3 col-md-3",key:t},P(E.a,{data:e}))})))))},k=n("zcru"),T=s.a.createElement,C=function(e){var t=e.hostels,n=Object(i.useState)(t.slice(0,4))[0];return T("section",{className:"blockHostels"},T("div",{className:"container"},T("div",{className:"row"},T("div",{className:"col-12 col-sm-12 col-md-12"},T(w.a,{title:"Hostels",link:"/hostels"})),n.map((function(e,t){return T("div",{className:"col-12 col-sm-3 col-md-3",key:t},T(k.a,{data:e}))})))))},N=n("YFqc"),H=n.n(N),I=s.a.createElement,M=function(){return I("section",{className:"advert",style:{backgroundImage:"url(/static/images/services.webp)"}},I("div",{className:"advert_overlay"},I("div",{className:"advert_content"},I("div",{className:"container"},I("div",{className:"row"},I("div",{className:"col-12 col-sm-12 col-md-12"},I("h3",{className:"advert_content_heading"},"Do you have a product or service you are selling while at home ?"),I("h4",{className:"advert_content_sub-heading"},"Well, Make your fellow comrades know, Its easy!!"),I("div",{className:"advert_content_links"},I(H.a,{href:"account/store/service_form"},I("a",{className:"btn btn-outline-success"},"add a service")),I(H.a,{href:"account/store/product_form"},I("a",{className:"btn btn-outline-info"},"add a product")))))))))},x=s.a.createElement,L=function(){return x("section",{className:"advert",style:{backgroundImage:"url(/static/images/covid19.webp)"}},x("div",{className:"advert_overlay"},x("div",{className:"advert_content"},x("div",{className:"container"},x("div",{className:"row"},x("div",{className:"col-12 col-sm-12 col-md-12"},x("h3",{className:"advert_content_heading"},"Realtime statistics for infected, recovered and death cases of Covid19 all around the world."),x("h4",{className:"advert_content_sub-heading"},x("b",null,"And your country in particular!.")),x("div",{className:"advert_content_links"},x(H.a,{href:"/covid19"},x("a",{className:"btn btn-outline-success"},"view now")))))))))},D=n("luDC"),B=s.a.createElement,A=function(e){var t=e.influencers;return B("section",{className:"blockInfluencers"},B("div",{className:"container"},B("div",{className:"row"},B("div",{className:"col-12 col-sm-12 col-md-12"},B(w.a,{title:"People you Follow"})),t.map((function(e,t){return B("div",{className:"col-12 col-sm-3 col-md-3",key:t},B(D.a,{data:e}))})))))},Y=n("30+C"),R=n("oa/T"),F=n("Ie8z"),Q=n("vW3o"),q=n("i0TO"),z=n("f0ot"),U=s.a.createElement,W={subscribe:z.e},G=Object(c.b)((function(e){return{user:e.user.user,loading:e.user.loading,error:e.user.error}}),W)((function(e){var t=e.data,n=e.user,r=e.subscribe,a=e.loading,s=(e.error,Object(i.useState)(!1)),c=s[0],l=s[1],u=Object(i.useState)(!1),f=u[0],d=u[1],p=Object(i.useState)("subscribe"),m=p[0],h=p[1];Object(i.useEffect)((function(){!function(){if(n){var e=t.subscribers.find((function(e){return e.user===n._id}));l(!!e)}}()}),[]);return U(Y.a,{className:"seller_card-root"},U("div",{className:"seller_card-details"},U(R.a,{className:"seller_card-content"},U(H.a,{href:"/sellers/".concat(t.slug)},U("a",{className:"seller_card_name"},t.name.split(" ")[0].toLowerCase())),U("button",{className:c?"btn btn-info":"btn btn-outline-info",onClick:function(){return function(){var e,i;return o.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!c){s.next=2;break}return s.abrupt("return");case 2:if(n){s.next=4;break}return s.abrupt("return",d(!0));case 4:if(e={},!n.endpoint){s.next=9;break}e={user:n._id},s.next=15;break;case 9:return s.next=11,o.a.awrap(Object(q.a)().catch(console.log));case 11:if(i=s.sent){s.next=14;break}return s.abrupt("return",h("Subscribe"));case 14:e={user:n._id,response:i};case 15:return h("Loading..."),s.next=18,o.a.awrap(r(e,t._id).then((function(){if(!a)return l(!0)})).catch(console.log));case 18:case"end":return s.stop()}}),null,null,null,Promise)}()}},c?"subscribed":m),U(Q.a,{isOpen:f,toggle:function(){return d(!f)}}))),U(F.a,{className:"seller_card-cover",title:"".concat(t.name," as an allcomrades seller")},U("img",{src:t.profile?t.profile:"/static/images/default.webp",alt:"Loading..",className:"seller_card-img"})))})),K=s.a.createElement,V=function(e){var t=e.sellers,n=Object(i.useState)(t.slice(0,8))[0];return K("section",{className:"blockSellers"},K("div",{className:"container"},K("div",{className:"row"},K("div",{className:"col-12 col-sm-12 col-md-12"},K(w.a,{title:"Top sellers"})),n.map((function(e,t){return K("div",{className:"col-12 col-sm-3 col-md-3",key:t},K(G,{data:e}))})))))},J=n("rnyU"),X=n("SnVr"),Z=n("EenU"),$=n("pzDA"),ee=(n("OdrH"),s.a.createElement),te=function(e){return ee(l.a,null,ee(u.a,{image:"https://karu-api.s3.amazonaws.com/adverts/1587206512007.webp"}),ee(b,null),ee(S,{products:e.products}),ee(j,{services:e.services}),ee(M,null),ee(C,{hostels:e.hostels}),ee(L,null),ee(A,{influencers:e.influencers}),ee(V,{sellers:e.sellers}))};te.getInitialProps=function(e){var t,n,r,i,s,c;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.store,l.next=3,o.a.awrap(t.dispatch(Object(J.f)()));case 3:return l.next=5,o.a.awrap(t.dispatch(Object(X.b)()));case 5:return l.next=7,o.a.awrap(t.dispatch(Object(Z.b)()));case 7:return l.next=9,o.a.awrap(t.dispatch(Object($.c)()));case 9:return n=t.getState().products.basic,r=t.getState().services.services,i=[].concat(Object(a.a)(n),Object(a.a)(r)).map((function(e){return e.seller})),i=Object(a.a)(new Set(i.map(JSON.stringify))).map(JSON.parse),s=t.getState().hostels.hostels,c=t.getState().influencers.influencers,l.abrupt("return",{products:n,services:r,hostels:s,influencers:c,sellers:i});case 16:case"end":return l.stop()}}),null,null,null,Promise)};t.default=Object(c.b)()(te)},Y30y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n("q1tI")),i=c(n("w2Tm")),s=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this,t=r({},this.props);return t.parentBindings&&delete t.parentBindings,a.default.createElement("div",r({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(a.default.Component);l.propTypes={name:s.default.string,id:s.default.string},t.default=(0,i.default)(l)},"hKI/":function(e,t,n){(function(t){var n="Expected a function",r=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=u||f||Function("return this")(),p=Object.prototype.toString,m=Math.max,h=Math.min,v=function(){return d.Date.now()};function y(e,t,r){var o,a,i,s,c,l,u=0,f=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function y(t){var n=o,r=a;return o=a=void 0,u=t,s=e.apply(r,n)}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=i}function O(){var e=v();if(w(e))return _(e);c=setTimeout(O,function(e){var n=t-(e-l);return d?h(n,i-(e-u)):n}(e))}function _(e){return c=void 0,p&&o?y(e):(o=a=void 0,s)}function S(){var e=v(),n=w(e);if(o=arguments,a=this,l=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(O,t),f?y(e):s}(l);if(d)return c=setTimeout(O,t),y(l)}return void 0===c&&(c=setTimeout(O,t)),s}return t=b(t)||0,g(r)&&(f=!!r.leading,i=(d="maxWait"in r)?m(b(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),S.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=l=a=c=void 0},S.flush=function(){return void 0===c?s:_(v())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==o}(e))return r;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?r:+e}e.exports=function(e,t,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(n);return g(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),y(e,t,{leading:o,maxWait:t,trailing:a})}}).call(this,n("yLpj"))},oqc9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Helpers=t.ScrollElement=t.ScrollLink=t.animateScroll=t.scrollSpy=t.Events=t.scroller=t.Element=t.Button=t.Link=void 0;var r=p(n("PGca")),o=p(n("7wkA")),a=p(n("Y30y")),i=p(n("zPnG")),s=p(n("QQPg")),c=p(n("wT0s")),l=p(n("NEP4")),u=p(n("pUFB")),f=p(n("w2Tm")),d=p(n("7FV1"));function p(e){return e&&e.__esModule?e:{default:e}}t.Link=r.default,t.Button=o.default,t.Element=a.default,t.scroller=i.default,t.Events=s.default,t.scrollSpy=c.default,t.animateScroll=l.default,t.ScrollLink=u.default,t.ScrollElement=f.default,t.Helpers=d.default,t.default={Link:r.default,Button:o.default,Element:a.default,scroller:i.default,Events:s.default,scrollSpy:c.default,animateScroll:l.default,ScrollLink:u.default,ScrollElement:f.default,Helpers:d.default}},pUFB:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=u(n("q1tI")),i=u(n("wT0s")),s=u(n("zPnG")),c=u(n("17x9")),l=u(n("Dy/p"));function u(e){return e&&e.__esModule?e:{default:e}}var f={to:c.default.string.isRequired,containerId:c.default.string,container:c.default.object,activeClass:c.default.string,spy:c.default.bool,smooth:c.default.oneOfType([c.default.bool,c.default.string]),offset:c.default.number,delay:c.default.number,isDynamic:c.default.bool,onClick:c.default.func,duration:c.default.oneOfType([c.default.number,c.default.func]),absolute:c.default.bool,onSetActive:c.default.func,onSetInactive:c.default.func,ignoreCancelEvents:c.default.bool,hashSpy:c.default.bool};t.default=function(e,t){var n=t||s.default,c=function(t){function s(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return u.call(t),t.state={active:!1},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),o(s,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();i.default.isMounted(e)||i.default.mount(e),this.props.hashSpy&&(l.default.isMounted()||l.default.mount(n),l.default.mapContainer(this.props.to,e)),i.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=r({},this.props);for(var o in f)n.hasOwnProperty(o)&&delete n[o];return n.className=t,n.onClick=this.handleClick,a.default.createElement(e,n)}}]),s}(a.default.PureComponent),u=function(){var e=this;this.scrollTo=function(t,o){n.scrollTo(t,r({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t){var r=e.getScrollSpyContainer();if(!l.default.isMounted()||l.default.isInitialized()){var o=e.props.to,a=null,i=0,s=0,c=0;if(r.getBoundingClientRect)c=r.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=n.get(o)))return;var u=a.getBoundingClientRect();s=(i=u.top-c+t)+u.height}var f=t-e.props.offset,d=f>=Math.floor(i)&&f<Math.floor(s),p=f<Math.floor(i)||f>=Math.floor(s),m=n.getActiveLink();p&&(o===m&&n.setActiveLink(void 0),e.props.hashSpy&&l.default.getHash()===o&&l.default.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(o,a))),!d||m===o&&!1!==e.state.active||(n.setActiveLink(o),e.props.hashSpy&&l.default.changeHash(o),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(o,a)))}}};return c.propTypes=f,c.defaultProps={offset:0},c}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},w2Tm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n("q1tI")),i=(c(n("i8i4")),c(n("zPnG"))),s=c(n("17x9"));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),o(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"===typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){i.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return a.default.createElement(e,r({},this.props,{parentBindings:this.childBindings}))}}]),n}(a.default.Component);return t.propTypes={name:s.default.string,id:s.default.string},t}},wT0s:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("hKI/"),a=(r=o)&&r.__esModule?r:{default:r},i=n("QLqi");var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e){if(e){var t=function(e){return(0,a.default)(e,66)}((function(t){s.scrollHandler(e)}));s.scrollSpyContainers.push(e),(0,i.addPassiveEventListener)(e,"scroll",t)}},isMounted:function(e){return-1!==s.scrollSpyContainers.indexOf(e)},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(s.currentPositionY(e))}))},addStateHandler:function(e){s.spySetState.push(e)},addSpyHandler:function(e,t){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(s.currentPositionY(t))},updateStates:function(){s.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){s.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(e),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(e){return s.scrollHandler(e)}))}};t.default=s},xFC4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={pushHash:function(e){if(e=e?0===e.indexOf("#")?e:"#"+e:"",history.pushState){var t=window.location;history.pushState(null,null,e?t.pathname+t.search+e:t.pathname+t.search)}else location.hash=e},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t){return e===document?t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset):"static"!==getComputedStyle(e).position?t.offsetTop:t.offsetTop-e.offsetTop}}},zPnG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("xFC4")),a=s(n("NEP4")),i=s(n("QQPg"));function s(e){return e&&e.__esModule?e:{default:e}}var c={},l=void 0;t.default={unmount:function(){c={}},register:function(e,t){c[e]=t},unregister:function(e){delete c[e]},get:function(e){return c[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return l=e},getActiveLink:function(){return l},scrollTo:function(e,t){var n=this.get(e);if(n){var s=(t=r({},t,{absolute:!1})).containerId,c=t.container,l=void 0;l=s?document.getElementById(s):c&&c.nodeType?c:document,t.absolute=!0;var u=o.default.scrollOffset(l,n)+(t.offset||0);if(!t.smooth)return i.default.registered.begin&&i.default.registered.begin(e,n),l===document?window.scrollTo(0,u):l.scrollTop=u,void(i.default.registered.end&&i.default.registered.end(e,n));a.default.animateTopScroll(u,t,e,n)}else console.warn("target Element not found")}}}},[["vlRD",0,1,3,8,2,4,6,5,7,10,9,12,14]]]);