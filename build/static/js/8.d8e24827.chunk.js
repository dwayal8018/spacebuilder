(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[8],{109:function(e){e.exports=JSON.parse('{"e":["Any Location","California, CA","Lawndale, CA","Stroudsburg, PA","West Roxbury, MA","Ponte Vedra Beach, FL","Fort Worth, TX","Willingboro, NJ"],"h":["Any Status","For Rent","Featured","For Sale","Leased","New Addition","Sold","Rental","Reduced","Special Offer"],"f":["Any Range","$60k - $80k","$80k - $100k","$100k - $120k","$120k - $140k","$140k - $160k","$160k - $180k","$180k - $200k"],"b":["Any amount","1","2","3","4","5+"],"a":["Any amount","1","2","3","4","5+"],"i":["Any Type","House","Apartment","Condo","Townhome","Villa","Duplex"],"c":["Any Range","Within 2 miles","Within 4 miles","Within 6 miles","Within 8 miles","Within 10 miles","Within 22 miles"],"d":["Any floor","1st","2nd","3rd","4th","5th"],"g":["Any","Top Selling","Most Popular","Price: High - Low","Price: Low - High","Number of baths","Number of beds"]}')},129:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(43),c=s(42),r=s(1),l=s(0),o=s(9),j=s(80),b=s(153),d=s.n(b),m=s(57),u=s(109),h=s(83),O=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={open:!0,open2:!0,open3:!0},a}return Object(a.a)(s,[{key:"render",value:function(){var e=this,t=this.state.open,s=this.state.open2,n=this.state.open3;return Object(r.jsxs)("div",{className:"sidebar sidebar-left",children:[Object(r.jsxs)("div",{className:"sidebar-widget",children:[Object(r.jsxs)("div",{className:"acr-collapse-trigger acr-custom-chevron-wrapper",onClick:function(){return e.setState({open:!t})},children:[Object(r.jsx)("h5",{children:"Filter Listings"}),Object(r.jsxs)("div",{className:"acr-custom-chevron",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]}),Object(r.jsx)(h.a,{in:this.state.open,children:Object(r.jsx)("div",{className:"acr-collapsable",children:Object(r.jsx)("div",{className:"acr-filter-form",children:Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(r.jsx)("label",{children:"Location: "}),Object(r.jsx)(d.a,{data:u.e,options:{placeholder:"Any Location"}})]}),Object(r.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(r.jsx)("label",{children:"Status: "}),Object(r.jsx)(d.a,{data:u.h,options:{placeholder:"Any Status"}})]}),Object(r.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(r.jsx)("label",{children:"Price Range: "}),Object(r.jsx)(d.a,{data:u.f,options:{placeholder:"Any Range"}})]}),Object(r.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(r.jsx)("label",{children:"Beds: "}),Object(r.jsx)(d.a,{data:u.b,options:{placeholder:"Any amount"}})]}),Object(r.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(r.jsx)("label",{children:"Bathrooms: "}),Object(r.jsx)(d.a,{data:u.a,options:{placeholder:"Any amount"}})]}),Object(r.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(r.jsx)("label",{children:"Type: "}),Object(r.jsx)(d.a,{data:u.i,options:{placeholder:"Any Type"}})]}),Object(r.jsx)("button",{type:"submit",className:"btn-block btn-custom",name:"button",children:"Apply filters"})]})})})})]}),Object(r.jsxs)("div",{className:"sidebar-widget",children:[Object(r.jsxs)("div",{className:"acr-collapse-trigger acr-custom-chevron-wrapper",onClick:function(){return e.setState({open2:!s})},children:[Object(r.jsx)("h5",{children:"Recent Listing"}),Object(r.jsxs)("div",{className:"acr-custom-chevron",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]}),Object(r.jsx)(h.a,{in:this.state.open2,children:Object(r.jsx)("div",{className:"acr-collapsable",children:m.filter((function(e){return!0===e.recent})).slice(0,4).map((function(e,t){return Object(r.jsxs)("div",{className:"listing listing-list",children:[Object(r.jsx)("div",{className:"listing-thumbnail",children:Object(r.jsx)(o.b,{to:"/listing-details-v1",children:Object(r.jsx)("img",{src:"/"+e.gridimg,alt:"listing"})})}),Object(r.jsxs)("div",{className:"listing-body",children:[Object(r.jsxs)("h6",{className:"listing-title",children:[" ",Object(r.jsx)(o.b,{to:"/listing-details-v1",title:e.title,children:e.title})," "]}),Object(r.jsxs)("span",{className:"listing-price",children:[(new Intl.NumberFormat).format(e.monthlyprice.toFixed(2)),"$ ",Object(r.jsx)("span",{children:"/month"})," "]})]})]},t)}))})})]}),Object(r.jsxs)("div",{className:"sidebar-widget",children:[Object(r.jsxs)("div",{className:"acr-collapse-trigger acr-custom-chevron-wrapper",onClick:function(){return e.setState({open3:!n})},children:[Object(r.jsx)("h5",{children:"Mortgage Calculator"}),Object(r.jsxs)("div",{className:"acr-custom-chevron",children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]}),Object(r.jsx)(h.a,{in:this.state.open3,children:Object(r.jsx)("div",{className:"acr-collapsable",children:Object(r.jsx)(j.a,{})})})]})]})}}]),s}(l.Component);t.a=O},46:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(43),c=s(42),r=s(1),l=s(0),o=s(9),j=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(r.jsxs)(l.Fragment,{children:[Object(r.jsxs)(o.b,{className:"navbar-brand",to:"/",children:[" ",Object(r.jsx)("img",{src:"/assets/img/spclogo.png",alt:"logo"})," "]}),Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(r.jsx)(o.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(r.jsx)(o.b,{to:"/about",children:"About us"})}),Object(r.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(r.jsx)(o.b,{to:"/projects",children:"Projects"})}),Object(r.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(r.jsx)(o.b,{to:"/contact",children:"Contact us"})})]})]})}}]),s}(l.Component);t.a=j},47:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(43),c=s(42),r=s(1),l=s(0),o=s(9),j=s(48),b=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).getNextSibling=function(e,t){var s=e.nextElementSibling;if(!t)return s;for(;s;){if(s.matches(t))return s;s=s.nextElementSibling}},e.triggerChild=function(t){var s="";null!==(s=void 0!==e.getNextSibling(t.target,".submenu")?e.getNextSibling(t.target,".submenu"):null)&&void 0!==s&&""!==s&&(s.classList=s.classList.contains("d-block")?"submenu":"submenu d-block")},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"aside-scroll",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"menu-section-title",children:"Space Builder"}),j.length>0?j.map((function(t,s){return Object(r.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?Object(r.jsxs)(o.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",Object(r.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}):Object(r.jsxs)(o.b,{to:t.link,children:[" ",Object(r.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}),t.child?Object(r.jsx)("ul",{className:"submenu",role:"menu",children:t.submenu.map((function(e,t){return Object(r.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?Object(r.jsxs)(o.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):Object(r.jsxs)(o.b,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?Object(r.jsx)("ul",{className:"submenu",children:e.submenu.map((function(e,t){return Object(r.jsx)("li",{className:"menu-item",children:Object(r.jsx)(o.b,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},s)})):null,Object(r.jsx)("li",{className:"menu-section-title",children:"Get Social"}),Object(r.jsxs)("li",{className:"menu-item",children:[" ",Object(r.jsxs)(o.b,{to:"#",children:[" ",Object(r.jsx)("i",{className:"flaticon-facebook"}),"Facebook"]})," "]}),Object(r.jsxs)("li",{className:"menu-item",children:[" ",Object(r.jsxs)(o.b,{to:"#",children:[" ",Object(r.jsx)("i",{className:"flaticon-linkedin"})," Linkedin "]})," "]}),Object(r.jsxs)("li",{className:"menu-item",children:[" ",Object(r.jsxs)(o.b,{to:"#",children:[" ",Object(r.jsx)("i",{className:"flaticon-twitter"})," Twitter "]})," "]}),Object(r.jsxs)("li",{className:"menu-item",children:[" ",Object(r.jsxs)(o.b,{to:"#",children:[" ",Object(r.jsx)("i",{className:"flaticon-instagram"})," Instagram "]})," "]})]})})}}]),s}(l.Component);t.a=b},48:function(e){e.exports=JSON.parse('[{"id":1,"linkText":"Home Pages","child":false,"icon":"home","link":"/"},{"id":2,"linkText":"About Us","child":false,"icon":"layers","link":"/about"},{"id":3,"linkText":"Project","child":false,"icon":"list","link":"/projects"},{"id":4,"linkText":"Development Management","child":false,"icon":"work-table","link":"/"},{"id":7,"linkText":"Blog","child":false,"icon":"blog","link":"/"},{"id":8,"linkText":"Contact us","child":false,"icon":"headset","link":"/contact"}]')},49:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(45),c=s(43),r=s(42),l=s(1),o=s(0),j=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(e){var a;return Object(n.a)(this,s),(a=t.call(this,e)).state={navtoggle:!1},a.navtoggleClass=a.navtoggleClass.bind(Object(i.a)(a)),a}return Object(a.a)(s,[{key:"navtoggleClass",value:function(){this.setState({navtoggle:!this.state.navtoggle})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.setState({isTop:window.scrollY>100})}),!1)}},{key:"render",value:function(){return Object(l.jsx)(o.Fragment,{})}}]),s}(o.Component);t.a=j},50:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(43),c=s(42),r=s(1),l=s(0),o=s(46),j=s(47),b=s(49),d=s(44),m=s.n(d),u=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){var e=this.state.isTop?"sticky":"";return Object(r.jsxs)(l.Fragment,{children:[Object(r.jsxs)("aside",{className:m()("main-aside",{open:this.state.navtoggle}),children:[Object(r.jsx)("div",{className:"aside-title",children:Object(r.jsxs)("div",{className:"aside-controls aside-trigger",children:[Object(r.jsx)("h4",{children:"Menu"}),Object(r.jsxs)("div",{className:"close-btn close-dark",onClick:this.navtoggleClass,children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})]})}),Object(r.jsx)(j.a,{})]}),Object(r.jsx)("div",{className:"aside-overlay aside-trigger",onClick:this.navtoggleClass}),Object(r.jsx)("header",{className:"main-header header-fw can-sticky header-1 ".concat(e),children:Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)(o.a,{}),Object(r.jsx)("div",{className:"header-controls",children:Object(r.jsxs)("div",{className:"aside-toggler aside-trigger",onClick:this.navtoggleClass,children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]})})]})})]})}}]),s}(b.a);t.a=u},55:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(43),c=s(42),r=s(1),l=s(0),o=s(9),j=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(/assets/img/about-us.jpg )"},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"subheader-inner",children:[Object(r.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(r.jsx)("nav",{"aria-label":"breadcrumb",children:Object(r.jsxs)("ol",{className:"breadcrumb",children:[Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsxs)(o.b,{to:"/",children:[" ",Object(r.jsx)("i",{className:"fas fa-home"})," "]})}),Object(r.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),s}(l.Component);t.a=j},57:function(e){e.exports=JSON.parse('[{"id":1,"gridimg":"assets/img/listings/l4.jpg","listimg":"assets/img/listings-list/4.jpg","title":"Partner Connect - August 2020","authorimg":"assets/img/people/2.jpg","authorname":"Partner Connect - August 2020","postdate":"March 3, 2020","monthlyprice":3500,"text":"An overwhelming response at our recently held Channel Partner meet at GMK Banquets with over 200 attendees.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":false,"rental":false,"recent":true},{"id":2,"gridimg":"assets/img/listings/l5.jpg","listimg":"assets/img/listings-list/l5.jpg","title":"SHIVOM REGENCY, Baner ","authorimg":"assets/img/people/2.jpg","authorname":"Full O.C Received","postdate":"March 3, 2020","monthlyprice":3500,"text":"Our Landmark project at Main Baner Road is Sold Out and we have received Full O.C. of the Project. ","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":false,"rental":false,"recent":false},{"id":3,"gridimg":"assets/img/listings/l6.jpg","listimg":"assets/img/listings-list/l6.jpg","title":" D-MART Ready , Sinhagad Road ","authorimg":"assets/img/people/2.jpg","authorname":"Long - Lease ","postdate":"March 3, 2020","monthlyprice":3500,"text":"Overwhelmed to have D\'mart as our newest Leaser\'s at Marigold, Sinhagad Road","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":false,"rental":false,"recent":false}]')},74:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(43),c=s(42),r=s(1),l=s(0),o=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"pagination-loader",children:Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(r.jsx)("g",{transform:"translate(80,50)",children:Object(r.jsx)("g",{transform:"rotate(0)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:1,children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(45)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.875",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(r.jsx)("g",{transform:"translate(50,80)",children:Object(r.jsx)("g",{transform:"rotate(90)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.75",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(135)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.625",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(r.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(r.jsx)("g",{transform:"rotate(180)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.5",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(r.jsx)("g",{transform:"rotate(225)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.375",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(r.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(r.jsx)("g",{transform:"rotate(270)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.25",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(r.jsx)("g",{transform:"rotate(315)",children:Object(r.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.125",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})}}]),s}(l.Component);t.a=o},80:function(e,t,s){"use strict";var n=s(40),a=s(41),i=s(43),c=s(42),r=s(1),l=s(0),o=function(e){Object(i.a)(s,e);var t=Object(c.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("form",{children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Total Amount",name:"total"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Down Payment",name:"down-p"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Interest Rate",name:"interest"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Loan Term",name:"loan-term"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsxs)("select",{className:"form-control",name:"cycle",children:[Object(r.jsx)("option",{value:"Daily",children:"Daily"}),Object(r.jsx)("option",{value:"Monthly",children:"Monthly"}),Object(r.jsx)("option",{value:"Yearly",children:"Yearly"})]})}),Object(r.jsx)("button",{type:"submit",className:"btn-custom btn-block",name:"button",children:"Calculate"})]})}}]),s}(l.Component);t.a=o},83:function(e,t,s){"use strict";var n,a=s(3),i=s(7),c=s(44),r=s.n(c),l=s(65),o=s(67),j=s(0),b=s.n(j),d=s(73),m=s(89),u=s(68),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function O(e,t){var s=t["offset"+e[0].toUpperCase()+e.slice(1)],n=h[e];return s+parseInt(Object(l.a)(t,n[0]),10)+parseInt(Object(l.a)(t,n[1]),10)}var p=((n={})[d.c]="collapse",n[d.d]="collapsing",n[d.b]="collapsing",n[d.a]="collapse show",n),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:O},g=b.a.forwardRef((function(e,t){var s=e.onEnter,n=e.onEntering,c=e.onEntered,l=e.onExit,h=e.onExiting,x=e.className,g=e.children,f=e.dimension,v=void 0===f?"height":f,y=e.getDimensionValue,N=void 0===y?O:y,k=Object(i.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),C="function"===typeof v?v():v,T=Object(j.useMemo)((function(){return Object(m.a)((function(e){e.style[C]="0"}),s)}),[C,s]),w=Object(j.useMemo)((function(){return Object(m.a)((function(e){var t="scroll"+C[0].toUpperCase()+C.slice(1);e.style[C]=e[t]+"px"}),n)}),[C,n]),A=Object(j.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=null}),c)}),[C,c]),S=Object(j.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=N(C,e)+"px",Object(u.a)(e)}),l)}),[l,N,C]),E=Object(j.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=null}),h)}),[C,h]);return b.a.createElement(d.e,Object(a.a)({ref:t,addEndListener:o.a},k,{"aria-expanded":k.role?k.in:null,onEnter:T,onEntering:w,onEntered:A,onExit:S,onExiting:E}),(function(e,t){return b.a.cloneElement(g,Object(a.a)({},t,{className:r()(x,g.props.className,p[e],"width"===C&&"width")}))}))}));g.defaultProps=x,t.a=g}}]);
//# sourceMappingURL=8.d8e24827.chunk.js.map