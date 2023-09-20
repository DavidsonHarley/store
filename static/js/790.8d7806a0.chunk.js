"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[790],{5186:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var r=s(2791),i=s(4942),n=s(3433),c=s(9439),a=s(1413),l=s(5048),o=s(7689),d=s(7110),u={wrapper:"Category_wrapper__I4YSc",filters:"Category_filters__e9TyU",filter:"Category_filter__bjR4K",full:"Category_full__ojDyi",more:"Category_more__LElEM",back:"Category_back__ju6Fs"},_=s(1391),m=s(184),h=function(){var e=(0,o.UO)().id,t=(0,l.v9)((function(e){return e.categories})).list,s={title:"",price_min:0,price_max:0},h=(0,a.Z)({categoryId:e,limit:5,offset:0},s),f=(0,r.useState)(!1),p=(0,c.Z)(f,2),j=p[0],x=p[1],v=(0,r.useState)(null),N=(0,c.Z)(v,2),g=N[0],Z=N[1],b=(0,r.useState)([]),y=(0,c.Z)(b,2),P=y[0],C=y[1],H=(0,r.useState)(s),S=(0,c.Z)(H,2),E=S[0],I=S[1],k=(0,r.useState)(h),w=(0,c.Z)(k,2),L=w[0],M=w[1],A=(0,d.C$)(L),U=A.data,V=void 0===U?[]:U,Y=A.isLoading,z=A.isSuccess;(0,r.useEffect)((function(){e&&(I(s),C([]),x(!1),M((0,a.Z)((0,a.Z)({},h),{},{categoryId:e})))}),[e]),(0,r.useEffect)((function(){if(!Y)return V.length?void C((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(V))})):x(!0)}),[V,Y]),(0,r.useEffect)((function(){if(e&&t.length){var s=t.find((function(t){return t.id===1*e}));Z(s)}}),[t,e]);var O=function(e){var t=e.target,s=t.value,r=t.name;I((0,a.Z)((0,a.Z)({},E),{},(0,i.Z)({},r,s)))};return(0,m.jsxs)("section",{className:u.wrapper,children:[(0,m.jsx)("h2",{className:u.title,children:null===g||void 0===g?void 0:g.name}),(0,m.jsxs)("form",{className:u.filters,onSubmit:function(e){e.preventDefault(),C([]),x(!1),M((0,a.Z)((0,a.Z)({},h),E))},children:[(0,m.jsx)("div",{className:u.filter,children:(0,m.jsx)("input",{type:"text",name:"title",onChange:O,placeholder:"Product name",value:E.title})}),(0,m.jsxs)("div",{className:u.filter,children:[(0,m.jsx)("input",{type:"number",name:"price_min",onChange:O,placeholder:"0",value:E.price_min}),(0,m.jsx)("span",{children:"Price from"})]}),(0,m.jsxs)("div",{className:u.filter,children:[(0,m.jsx)("input",{type:"number",name:"price_max",onChange:O,placeholder:"0",value:E.price_max}),(0,m.jsx)("span",{children:"Price to"})]}),(0,m.jsx)("button",{type:"submit",hidden:!0})]}),Y?(0,m.jsx)("div",{className:"preloader",children:"Loading..."}):z&&P.length?(0,m.jsx)(_.Z,{title:"",products:P,style:{padding:0},amount:P.length}):(0,m.jsxs)("div",{className:u.back,children:[(0,m.jsx)("span",{children:"No results"}),(0,m.jsx)("button",{onClick:function(){I(s),M(h),x(!1)},children:"Reset"})]}),!j&&(0,m.jsx)("div",{className:u.more,children:(0,m.jsx)("button",{onClick:function(){return M((0,a.Z)((0,a.Z)({},L),{},{offset:L.offset+L.limit}))},children:"See more"})})]})},f=s(1429),p=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f.Z,{}),(0,m.jsx)(h,{})]})}},1429:function(e,t,s){s.d(t,{Z:function(){return c}});s(2791);var r=s(9443),i=s.p+"static/media/computer.5e56530d0ea3793fd73d.png",n=s(184),c=function(){return(0,n.jsxs)("section",{className:r.Z.home,children:[(0,n.jsx)("div",{className:r.Z.title,children:"BIG SALE 20%"}),(0,n.jsxs)("div",{className:r.Z.product,children:[(0,n.jsxs)("div",{className:r.Z.text,children:[(0,n.jsx)("div",{className:r.Z.subtitle,children:"the bestseller of 2022"}),(0,n.jsx)("h1",{className:r.Z.head,children:"LENNON r2d2 with NVIDIA 5090 TI"}),(0,n.jsx)("button",{className:r.Z.button,children:"Shop Now"})]}),(0,n.jsx)("div",{className:r.Z.image,children:(0,n.jsx)("img",{src:i,alt:""})})]})]})}},1391:function(e,t,s){s.d(t,{Z:function(){return j}});s(2791);var r=s(1087),i="Products_products__IzuXY",n="Products_list__nhfIw",c="Products_product__TjzZV",a="Products_image__EiUqK",l="Products_wrapper__h4UBi",o="Products_title__7ggYL",d="Products_cat__0llHp",u="Products_info__R3OlS",_="Products_prices__n9YA1",m="Products_price__I96sm",h="Products_oldPrice__Xb0mo",f="Products_purchases__GlpYh",p=s(184),j=function(e){var t=e.title,s=e.style,j=void 0===s?{}:s,x=e.products,v=void 0===x?[]:x,N=e.amount,g=v.filter((function(e,t){return t<N}));return(0,p.jsxs)("section",{className:i,style:j,children:[t&&(0,p.jsx)("h2",{children:t}),(0,p.jsx)("div",{className:n,children:g.map((function(e){var t=e.id,s=e.images,i=e.title,n=e.category.name,j=e.price;return(0,p.jsxs)(r.rU,{to:"/products/".concat(t),className:c,children:[(0,p.jsx)("div",{className:a,style:{backgroundImage:"url(".concat(s[0],")")}}),(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("h3",{className:o,children:i}),(0,p.jsx)("div",{className:d,children:n}),(0,p.jsxs)("div",{className:u,children:[(0,p.jsxs)("div",{className:_,children:[(0,p.jsxs)("div",{className:m,children:[j,"$"]}),(0,p.jsxs)("div",{className:h,children:[Math.floor(.8*j),"$"]})]}),(0,p.jsxs)("div",{className:f,children:[Math.floor(20*Math.random()+1)," purchased"]})]})]})]},t)}))})]})}},9443:function(e,t){t.Z={home:"Home_home__VceHV",title:"Home_title__ANWNn",product:"Home_product__-EQ++",subtitle:"Home_subtitle__sfeEg",head:"Home_head__l2Exm",image:"Home_image__+LNCV",banner:"Home_banner__LTM-B",left:"Home_left__6vz02",content:"Home_content__HnpMW",more:"Home_more__jeJNK",right:"Home_right__lwAjt",discount:"Home_discount__zQNnO"}}}]);
//# sourceMappingURL=790.8d7806a0.chunk.js.map