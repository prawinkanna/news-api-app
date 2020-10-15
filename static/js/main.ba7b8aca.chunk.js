(this["webpackJsonpnews-api-app"]=this["webpackJsonpnews-api-app"]||[]).push([[0],{20:function(e,a,t){e.exports=t(33)},25:function(e,a,t){},26:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),o=t.n(r),l=(t(25),t(26),t(11)),s=t(1),i=t(6),m=t(8),d=Object(n.createContext)(),p=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],o=t[1],l=Object(n.useState)({name:"India",code:"in"}),s=Object(i.a)(l,2),m=s[0],p=s[1],u=Object(n.useState)("business"),v=Object(i.a)(u,2),b=v[0],h=v[1];return c.a.createElement(d.Provider,{value:{api_host:"http://newsapi.org/v2",api_key:"0b1aa3a797ef4fa48ea7bf7e7bb59690",countries:[m,p],categories:[b,h],news_list:[r,o]}},e.children)};var u=function(e){var a=e.domain_path,t=c.a.useContext(d),n=t.countries,r=t.categories,o=Object(i.a)(n,2),l=o[0],s=(o[1],Object(i.a)(r,2));return s[0],s[1],c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},c.a.createElement("a",{className:"navbar-brand",href:a},"Home"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"".concat(a,"top-headlines/").concat(l.code)},"Top Headlines")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Select Country"),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},m.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("a",{className:"dropdown-item",href:"".concat(a,"top-headlines/").concat(e.code)},e.name),c.a.createElement("div",{className:"dropdown-divider"}))}))))),c.a.createElement("div",{className:"d-inline-flex my-2 my-lg-0"},c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-cog","aria-hidden":"true"})))))))};var v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home-bnr"}))},b=function(e){e.news;return c.a.createElement("div",{className:"card"})},h=t(12),E=t.n(h),f=t(18);var g=function(){var e=c.a.useContext(d),a=e.api_host,t=e.api_key,r=e.countries,o=e.categories,l=e.news_list,p=Object(i.a)(r,2),u=p[0],v=(p[1],Object(i.a)(o,2)),b=(v[0],v[1],Object(i.a)(l,2)),h=b[0],g=b[1],w=u.name,N=Object(s.f)().country_id;return console.log(N),Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var n,c,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(a,"/top-headlines?country=").concat(N,"&apiKey=").concat(t),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,console.log(r),g(r.articles);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),m.map((function(e){e.code==N[2]&&(w=e.name)})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"headlines_title"},"Top Headlines from ",w),c.a.createElement("div",{className:"headlines row"},h.map((function(e,a){return c.a.createElement("div",{key:a,className:"hd-col col-lg-3 col-md-3 col-sm-6 col-xs-12"},c.a.createElement("div",{className:"hd-card card"},c.a.createElement("img",{src:e.urlToImage,alt:e.source}),c.a.createElement("div",{className:"card-body"},c.a.createElement("a",{href:"#",className:"card-title"},e.title))))})))))};var w=function(){return window.location.hostname,c.a.createElement(p,null,c.a.createElement(l.a,null,c.a.createElement(u,{domain_path:"/news-api-app/"}),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"".concat("/news-api-app/"),exact:!0,component:v}),c.a.createElement(s.a,{path:"".concat("/news-api-app/","index.html"),exact:!0,component:v}),c.a.createElement(s.a,{path:"".concat("/news-api-app/","top-headlines/:country_id"),exact:!0,component:g}),c.a.createElement(s.a,{path:"".concat("/news-api-app/","view/:catId"),exact:!0,component:b}),c.a.createElement(s.a,null,c.a.createElement("h1",{className:"my-5 mx-5"},"page not found")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('[{"name":"Argentina","code":"ar"},{"name":"Australia","code":"au"},{"name":"Austria","code":"at"},{"name":"Belgium","code":"be"},{"name":"Brazil","code":"br"},{"name":"Bulgaria","code":"bg"},{"name":"Canada","code":"ca"},{"name":"China","code":"cn"},{"name":"Colombia","code":"co"},{"name":"Cuba","code":"cu"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.ba7b8aca.chunk.js.map