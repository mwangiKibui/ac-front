(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{ObPK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market_place/clothing",function(){return a("t7D6")}])},t7D6:function(e,t,a){"use strict";a.r(t);var c=a("o0o1"),r=a.n(c),n=a("KQm4"),s=a("q1tI"),l=a.n(s),o=a("Nm0s"),i=a("5Yp1"),u=a("KzMt"),m=a("uCnE"),d=a("P9Z8"),p=a("TbMw"),b=a("rnyU"),g=a("SnVr"),h=a("CLn9"),w=a("NeII"),f=a("QDlW"),v=l.a.createElement,O=function(e){var t=e.premiums,a=e.basic,c=e.services,r=e.related,l=Object(s.useState)([].concat(Object(n.a)(t),Object(n.a)(a),Object(n.a)(c)).filter((function(e){return"clothing"===e.type})))[0],b=Object(s.useState)(!1),g=b[0],O=b[1],j=Object(s.useState)(1),N=j[0],P=j[1];return v(i.a,null,v(f.a,{title:"Clothings at allcomrades marketplace",description:"Sell and buy for tshirt,hoodies and much more easily at allcomrades platform at your own convenience",url:"https://allcomrades.co.ke/market_place/clothing",image:"https://karu-api.s3.amazonaws.com/adverts/1587474987692.jpg"}),v("section",{className:"clothing"},v("div",{className:"container"},v("div",{className:"row"},v("div",{className:"co-12 col-sm-12 col-md-12"},v(p.a,{breadcrumb:[{title:"Home",url:"/"},{title:"Market Place",url:"/market_place"},{title:"Clothing",url:"/market_place/clothing"}]})),v("div",{className:"col-12 col-sm-12 col-md-12"},v(d.a,{title:"Clothing(s) at allcomrades"})),g?v("div",{className:"col-12 col-sm-12 col-md-12"},v(o.ClipLoader,{size:"30px",color:"#009933"})):l.length>0?v(h.a,{items:l,page:!0}):v(m.a,{message:"No clothings uploaded yet!!",btn:!0}),v("div",{className:"col-12 col-sm-12 col-md-12"},v(u.a,{elementsPerPage:8,totalElements:l.length,paginate:function(e){setTimeout((function(){return P(e),O(!1)}),1e3),O(!0)},currentPage:N}))),v(w.a,{data:r,title:"Related",card:"products"}))))};O.getInitialProps=function(e){var t,a,c,s,l;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.store,o.next=3,r.a.awrap(t.dispatch(Object(b.c)()));case 3:return o.next=5,r.a.awrap(t.dispatch(Object(b.d)()));case 5:return o.next=7,r.a.awrap(t.dispatch(Object(g.b)()));case 7:return a=t.getState().products.premium,c=t.getState().products.basic,s=t.getState().services.services,l=[].concat(Object(n.a)(a),Object(n.a)(c),Object(n.a)(s)).filter((function(e){return"clothing"!==e.type})),o.abrupt("return",{premiums:a,basic:c,related:l,services:s});case 12:case"end":return o.stop()}}),null,null,null,Promise)},t.default=O}},[["ObPK",0,1,5,9,15,2,3,6,4,7,8,10,12,11,14,13,16]]]);