(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"7+cn":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),s=n("q1tI"),o=n.n(s),c=n("5Yp1"),u=n("P9Z8"),i=n("iuot"),l=n("QDlW"),p=n("RWZv"),d=o.a.createElement,f=function(e){var t=e.drinks;return d(c.a,null,d(l.a,{title:"Drinks from Ovo at allcomrades platform",description:"Enjoy cool drinks at affordable prices from Ovo fry's inn through allcomrades platform",url:"https://allcomrades.co.ke/bs/ovo_fries/drinks",image:t[0].profile}),d("section",{className:"ovo_fries"},d("div",{className:"container"},d("div",{className:"row"},d("div",{className:"col-12 col-sm-12 col-md-12"},d(u.a,{title:"Drinks from Ovo"})),t.map((function(e,t){return d("div",{className:"col-12 col-sm-4 col-md-4",key:t},d(i.a,{data:e}))}))))))};f.getInitialProps=function(e){var t,n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.store,r.next=3,a.a.awrap(t.dispatch(Object(p.d)()));case 3:return n=t.getState().bs.drinks,r.abrupt("return",{drinks:n});case 5:case"end":return r.stop()}}),null,null,null,Promise)},t.default=f},RWZv:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return y})),n.d(t,"a",(function(){return S})),n.d(t,"d",(function(){return _}));var r=n("rePB");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o={loading:!1,error:"",message:"",bs:null,meals:[],drinks:[],offers:[]},c=n("o0o1"),u=n.n(c),i=n("vDqi"),l=n.n(i),p="https://karuapi.herokuapp.com/api",d=function(e){return{type:"BS_ERROR",payload:e}},f=function(e){return{type:"LOAD_BS",payload:e}},m=function(e){return{type:"BS_MESSAGE",payload:e}},g=function(e){return{type:"REQUEST_ORDER",payload:e}},b=function(e){return{type:"LOAD_DRINKS",payload:e}},h=function(e){return{type:"LOAD_OFFERS",payload:e}},O=function(){var e={username:"ovo_fries"};return function(t){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"BS_LOADING"}),n.next=3,u.a.awrap(l.a.post("".concat(p,"/bs/fetchBs"),e,{headers:{"Content-Type":"application/json"}}).then((function(e){return t(f(e.data.message))})).catch(console.log));case 3:case"end":return n.stop()}}),null,null,null,Promise)}},v=function(e){return function(t){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"BS_LOADING"}),n.next=3,u.a.awrap(l.a.post("".concat(p,"/bs/addOrder"),e,{headers:{"Content-Type":"application/json"}}).then((function(e){return t(g(e.data.message))})).catch(console.log));case 3:case"end":return n.stop()}}),null,null,null,Promise)}},y=function(e){return function(t){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"BS_LOADING"}),n.next=3,u.a.awrap(l.a.post("".concat(p,"/bs/addReview"),e,{headers:{"Content-Type":"application/json"}}).then((function(){return t(m("Review sent"))})).catch(console.log));case 3:case"end":return n.stop()}}),null,null,null,Promise)}},S=function(e){return function(t){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"BS_LOADING"}),n.next=3,u.a.awrap(l.a.post("".concat(p,"/orders/claimOrder"),e,{headers:{"Content-Type":"application/json"}}).then((function(e){var n=e.data.success;return t(n?m(e.data.message):d(e.data.message))})).catch(console.log));case 3:case"end":return n.stop()}}),null,null,null,Promise)}},_=function(){return function(e){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"BS_LOADING"}),t.next=3,u.a.awrap(l.a.get("".concat(p,"/bs/products")).then((function(t){return e({type:"LOAD_MEALS",payload:t.data.meals}),e(b(t.data.drinks)),e(h(t.data.offers))})).catch(console.log));case 3:case"end":return t.stop()}}),null,null,null,Promise)}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BS_LOADING":return s({},e,{error:"",message:"",loading:!0});case"BS_ERROR":return s({},e,{loading:!1,error:t.payload});case"LOAD_BS":return s({},e,{loading:!1,bs:t.payload});case"BS_MESSAGE":case"REQUEST_ORDER":return s({},e,{loading:!1,message:t.payload});case"LOAD_MEALS":return s({},e,{meals:t.payload});case"LOAD_DRINKS":return s({},e,{drinks:t.payload});case"LOAD_OFFERS":return s({},e,{offers:t.payload,loading:!1});default:return s({},e)}}},iuot:function(e,t,n){"use strict";var r=n("o0o1"),a=n.n(r),s=n("q1tI"),o=n.n(s),c=n("30+C"),u=n("oa/T"),i=n("Ie8z"),l=n("/MKj"),p=n("vW3o"),d=n("1OyB"),f=n("vuIU"),m=n("JX7q"),g=n("Ji7U"),b=n("md7G"),h=n("foSv"),O=n("rePB"),v=n("DCcX"),y=n("vkoW"),S=n("CaDr"),_=n("OBzv"),j=n("RWZv"),w=n("f0ot"),N=o.a.createElement;function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var D=function(e){Object(g.a)(r,e);var t,n=(t=r,function(){var e,n=Object(h.a)(t);if(k()){var r=Object(h.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(b.a)(this,e)});function r(){var e;Object(d.a)(this,r);for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return e=n.call.apply(n,[this].concat(s)),Object(O.a)(Object(m.a)(e),"state",{message:"",location:"",product:e.props.product,action:"Request delivery",error:"",response:"",redirect:!1,isOpen:!1}),Object(O.a)(Object(m.a)(e),"toggle",(function(){return e.setState({isOpen:!e.state.isOpen})})),Object(O.a)(Object(m.a)(e),"onChange",(function(t){return e.setState(Object(O.a)({},t.target.name,t.target.value))})),Object(O.a)(Object(m.a)(e),"onSubmit",(function(t){var n,r,s,o;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(t.preventDefault(),e.setState({error:""}),e.setState({action:"Loading...."}),e.props.token){c.next=6;break}return c.abrupt("return",e.setState({isOpen:!0}));case 6:if(n=e.state,r=n.message,s=n.location,r&&s){c.next=9;break}return c.abrupt("return",e.setState({error:"Fill out all the details",action:"Request delivery"}));case 9:return o={message:r,location:s,user:e.props.user._id,bs:e.props.bs.username},c.next=12,a.a.awrap(e.props.requestOrder(o).then((function(){return e.setState({response:e.props.message,error:"",message:"",location:"",action:"Requested"})})).catch(console.log));case 12:case"end":return c.stop()}}),null,null,null,Promise)})),e}return Object(f.a)(r,[{key:"render",value:function(){var e=this.state.product;return N(v.a,{isOpen:this.props.isOpen,toggle:this.props.toggle},N(y.a,{toggle:this.props.toggle},N("h5",{className:"details_heading"},"Request for ",e.name," delivery")),N(S.a,null,N("form",{onSubmit:this.onSubmit},N("div",{className:"form-group"},this.state.error?N("div",{className:"alert alert-danger"},this.state.error):null,this.state.response?N("div",{className:"alert alert-success"},this.state.response):null,N("div",{className:"form-group"},N("label",{htmlFor:"message"},"What are you ordering?"),N("textarea",{name:"message",className:"form-control",onChange:this.onChange,placeholder:"e.g ".concat(e.name),value:this.state.message,rows:"5",cols:"40"})),N("div",{className:"form-group"},N("label",{htmlFor:"location"},"Where are you at?"),N("input",{type:"text",name:"location",onChange:this.onChange,value:this.state.location,className:"form-control",placeholder:"e.g victoria hostels"})),N("div",{className:"form-group"},N("input",{type:"submit",onClick:this.onSubmit,className:"btn btn-outline-success",value:this.state.action})))),N(p.a,{isOpen:this.state.isOpen,toggle:this.toggle})),N(_.a,null,N("button",{className:"btn btn-outline-danger",onClick:this.props.toggle},"close")))}}]),r}(s.Component),R={requestOrder:j.e,fetchOvo:j.c,fetchUser:w.b},x=Object(l.b)((function(e){return{user:e.user.user,token:e.user.message,user_loading:e.user.loading,loading:e.bs.loading,message:e.bs.message,bs:e.bs.bs}}),R)(D),E=o.a.createElement,P={fetchUser:w.b,claimOrder:j.a};t.a=Object(l.b)((function(e){return{user:e.user.user,user_loading:e.user.loading,token:e.user.message}}),P)((function(e){var t=e.data,n=Object(s.useState)(!1),r=n[0],o=n[1],l=Object(s.useState)(!1),d=l[0],f=l[1];return E(c.a,{className:"bs_card-root"},E("div",{className:"bs_card-details"},E(u.a,{className:"bs_card-content"},E("p",{className:"bs_card-name"},t.name),E("p",{className:"bs_card-price"},"Kshs:",parseInt(t.price).toLocaleString()),E("button",{className:"btn btn-outline-success",onClick:function(){var t;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.token){n.next=3;break}return n.abrupt("return",f(!0));case 3:if(!e.user){n.next=9;break}return n.abrupt("return",o(!0));case 9:return n.next=11,a.a.awrap(e.fetchUser(t).catch(console.log));case 11:if(e.user_loading||!e.user){n.next=13;break}return n.abrupt("return",o(!0));case 13:case 14:case"end":return n.stop()}}),null,null,null,Promise)}},"order"),E(x,{isOpen:r,toggle:function(){return o(!r)},product:t}),E(p.a,{isOpen:d,toggle:function(){return f(!d)}}))),E(i.a,{className:"bs_card-cover",title:t.name},E("img",{src:t.profile,className:"bs_card-img",alt:"Loading.."})))}))},jSIB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bs/ovo_fries/drinks",function(){return n("7+cn")}])}},[["jSIB",0,1,5,2,3,6,4,7,8]]]);