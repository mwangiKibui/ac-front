(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"1Pes":function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),c=a.n(n),r=a("KQm4"),i=a("q1tI"),o=a.n(i),s=a("5Yp1"),l=a("KzMt"),m=a("uCnE"),u=a("TbMw"),p=a("P9Z8"),d=a("rnyU"),g=a("SnVr"),f=a("CLn9"),b=a("NeII"),v=a("QDlW"),w=a("Nm0s"),y=o.a.createElement,h=function(e){var t=e.premiums,a=e.basic,n=e.services,c=e.related,o=Object(i.useState)([].concat(Object(r.a)(t),Object(r.a)(a),Object(r.a)(n)).filter((function(e){return"beauty"===e.type})))[0],d=Object(i.useState)(!1),g=d[0],h=d[1],k=Object(i.useState)(1),P=k[0],j=k[1];return y(s.a,null,y(v.a,{title:"Beauty Products at allcomrades marketplace",description:"view all sorts of beauty products being sold out at allcomrades platform at your own convenience",url:"https://allcomrades.co.ke/market_place/beauty",image:"https://karu-api.s3.amazonaws.com/adverts/1587492770696.jpg"}),y("section",{className:"beauty"},y("div",{className:"container"},y("div",{className:"row"},y("div",{className:"col-12 col-sm-12 col-md-12"},y(u.a,{breadcrumb:[{title:"Home",url:"/"},{title:"Market Place",url:"/market_place"},{title:"Beauty",url:"/market_place/beauty"}]})),y("div",{className:"col-12 col-sm-12 col-md-12"},y(p.a,{title:"Beauties at allcomrades"})),y("div",{className:"col-12 col-sm-12 col-md-12"},g?y("div",{className:"col-12 col-sm-12 col-md-12 text-center"},y(w.ClipLoader,{size:"30px",color:"#009933"})):o.length>0?y(f.a,{items:o,currentPage:P}):y(m.a,{message:"No beauty products added yet!",btn:!0})),y("div",{className:"col-12 col-sm-12 col-md-12"},y(l.a,{elementsPerPage:8,totalElements:o.length,paginate:function(e){setTimeout((function(){return j(e),h(!1)}),1e3),h(!0)},currentPage:P}))),y(b.a,{data:c,title:"Related",card:"products"}))))};h.getInitialProps=function(e){var t,a,n,i,o;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.store,s.next=3,c.a.awrap(t.dispatch(Object(d.d)()));case 3:return s.next=5,c.a.awrap(t.dispatch(Object(d.f)()));case 5:return s.next=7,c.a.awrap(t.dispatch(Object(g.b)()));case 7:return a=t.getState().products.premium,n=t.getState().products.basic,i=t.getState().services.services,o=[].concat(Object(r.a)(a),Object(r.a)(n),Object(r.a)(i)).filter((function(e){return"beauty"!==e.type})),s.abrupt("return",{premiums:a,basic:n,related:o,services:i});case 12:case"end":return s.stop()}}),null,null,null,Promise)},t.default=h},CLn9:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("aWxQ"),i=c.a.createElement,o=function(e){var t=Object(n.useState)(8)[0],a=Object(n.useState)(e.items)[0],o=Object(n.useState)([]),s=o[0],l=o[1],m=Object(n.useState)(e.currentPage)[0];return Object(n.useEffect)((function(){!function(){l([]);var e=t*m,n=e-t,c=a.slice(n,e);l(c)}()}),[e.currentPage]),i(c.a.Fragment,null,s.map((function(e,t){return i("div",{className:"col-12 'col-sm-3 col-md-3",key:t},i(r.a,{data:e}))})))};o.defaultProps={page:!1},t.a=o},G6T3:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market_place/beauty",function(){return a("1Pes")}])},KzMt:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("TSYQ"),i=a.n(r),o=c.a.createElement;t.a=function(e){for(var t=e.elementsPerPage,a=e.totalElements,n=e.paginate,c=e.currentPage,r=[],s=1;s<=Math.ceil(a/t);s++)r.push(s);return o("nav",{className:"pagination_nav"},o("ul",{className:"pagination"},r.map((function(e){var t=i()("page-item",{"page-item active":e===c});return o("li",{key:e,className:t},o("span",{onClick:function(){return n(e)},className:"page-link"},e))}))))}},QDlW:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),r=a("8Kt/"),i=a.n(r),o=c.a.createElement,s=function(e){return o(i.a,null,o("title",null,e.title),o("meta",{name:"description",content:e.description}),o("meta",{property:"og:type",content:"website"}),o("meta",{name:"og:title",property:"og:title",content:e.title}),o("meta",{name:"og:description",property:"og:description",content:e.description}),o("meta",{name:"og:site_name",content:"allcomrades platform"}),o("meta",{name:"og:url",content:e.url}),o("meta",{name:"twitter:card",content:"summary"}),o("meta",{name:"twitter:title",content:e.title}),o("meta",{name:"twitter:description",content:e.description}),o("meta",{name:"twitter:site",content:e.url}),o("meta",{name:"twitter:creator",content:"allcomrades platform"}),o("meta",{name:"twitter:image",content:e.image}),o("meta",{name:"twitter:image:width",content:"1200"}),o("meta",{name:"twitter:image:height",content:"600"}),o("link",{rel:"icon",type:"image/png",href:"/static/images/favicon.ico"}),o("link",{rel:"apple-touch-icon",href:"/static/images/favicon.ico"}),o("meta",{property:"og:image",content:e.image}),o("meta",{name:"og:image:width",content:"1200"}),o("meta",{name:"og:image:height",content:"600"}))};s.defaultProps={description:"A comrades platform for student marketplace, business and influencer marketing and much more",url:"https://allcomrades.co.ke",title:"allcomrades platform",desc:"A platform for karatina university students to sell and interact with businesses."},t.a=s}},[["G6T3",0,1,6,9,14,2,4,3,5,7,8,11,10,12,13,16,15,17]]]);