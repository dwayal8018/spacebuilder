(this.webpackJsonpacres=this.webpackJsonpacres||[]).push([[25,8],{109:function(e){e.exports=JSON.parse('{"e":["Any Location","California, CA","Lawndale, CA","Stroudsburg, PA","West Roxbury, MA","Ponte Vedra Beach, FL","Fort Worth, TX","Willingboro, NJ"],"h":["Any Status","For Rent","Featured","For Sale","Leased","New Addition","Sold","Rental","Reduced","Special Offer"],"f":["Any Range","$60k - $80k","$80k - $100k","$100k - $120k","$120k - $140k","$140k - $160k","$160k - $180k","$180k - $200k"],"b":["Any amount","1","2","3","4","5+"],"a":["Any amount","1","2","3","4","5+"],"i":["Any Type","House","Apartment","Condo","Townhome","Villa","Duplex"],"c":["Any Range","Within 2 miles","Within 4 miles","Within 6 miles","Within 8 miles","Within 10 miles","Within 22 miles"],"d":["Any floor","1st","2nd","3rd","4th","5th"],"g":["Any","Top Selling","Most Popular","Price: High - Low","Price: Low - High","Number of baths","Number of beds"]}')},129:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=s(9),o=s(80),b=s(153),d=s.n(b),m=s(57),h=s(109),u=s(83),O=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={open:!0,open2:!0,open3:!0},c}return Object(c.a)(s,[{key:"render",value:function(){var e=this,t=this.state.open,s=this.state.open2,a=this.state.open3;return Object(l.jsxs)("div",{className:"sidebar sidebar-left",children:[Object(l.jsxs)("div",{className:"sidebar-widget",children:[Object(l.jsxs)("div",{className:"acr-collapse-trigger acr-custom-chevron-wrapper",onClick:function(){return e.setState({open:!t})},children:[Object(l.jsx)("h5",{children:"Filter Listings"}),Object(l.jsxs)("div",{className:"acr-custom-chevron",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})]}),Object(l.jsx)(u.a,{in:this.state.open,children:Object(l.jsx)("div",{className:"acr-collapsable",children:Object(l.jsx)("div",{className:"acr-filter-form",children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(l.jsx)("label",{children:"Location: "}),Object(l.jsx)(d.a,{data:h.e,options:{placeholder:"Any Location"}})]}),Object(l.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(l.jsx)("label",{children:"Status: "}),Object(l.jsx)(d.a,{data:h.h,options:{placeholder:"Any Status"}})]}),Object(l.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(l.jsx)("label",{children:"Price Range: "}),Object(l.jsx)(d.a,{data:h.f,options:{placeholder:"Any Range"}})]}),Object(l.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(l.jsx)("label",{children:"Beds: "}),Object(l.jsx)(d.a,{data:h.b,options:{placeholder:"Any amount"}})]}),Object(l.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(l.jsx)("label",{children:"Bathrooms: "}),Object(l.jsx)(d.a,{data:h.a,options:{placeholder:"Any amount"}})]}),Object(l.jsxs)("div",{className:"acr-custom-select form-group",children:[Object(l.jsx)("label",{children:"Type: "}),Object(l.jsx)(d.a,{data:h.i,options:{placeholder:"Any Type"}})]}),Object(l.jsx)("button",{type:"submit",className:"btn-block btn-custom",name:"button",children:"Apply filters"})]})})})})]}),Object(l.jsxs)("div",{className:"sidebar-widget",children:[Object(l.jsxs)("div",{className:"acr-collapse-trigger acr-custom-chevron-wrapper",onClick:function(){return e.setState({open2:!s})},children:[Object(l.jsx)("h5",{children:"Recent Listing"}),Object(l.jsxs)("div",{className:"acr-custom-chevron",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})]}),Object(l.jsx)(u.a,{in:this.state.open2,children:Object(l.jsx)("div",{className:"acr-collapsable",children:m.filter((function(e){return!0===e.recent})).slice(0,4).map((function(e,t){return Object(l.jsxs)("div",{className:"listing listing-list",children:[Object(l.jsx)("div",{className:"listing-thumbnail",children:Object(l.jsx)(j.b,{to:"/listing-details-v1",children:Object(l.jsx)("img",{src:"/"+e.gridimg,alt:"listing"})})}),Object(l.jsxs)("div",{className:"listing-body",children:[Object(l.jsxs)("h6",{className:"listing-title",children:[" ",Object(l.jsx)(j.b,{to:"/listing-details-v1",title:e.title,children:e.title})," "]}),Object(l.jsxs)("span",{className:"listing-price",children:[(new Intl.NumberFormat).format(e.monthlyprice.toFixed(2)),"$ ",Object(l.jsx)("span",{children:"/month"})," "]})]})]},t)}))})})]}),Object(l.jsxs)("div",{className:"sidebar-widget",children:[Object(l.jsxs)("div",{className:"acr-collapse-trigger acr-custom-chevron-wrapper",onClick:function(){return e.setState({open3:!a})},children:[Object(l.jsx)("h5",{children:"Mortgage Calculator"}),Object(l.jsxs)("div",{className:"acr-custom-chevron",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})]}),Object(l.jsx)(u.a,{in:this.state.open3,children:Object(l.jsx)("div",{className:"acr-collapsable",children:Object(l.jsx)(o.a,{})})})]})]})}}]),s}(r.Component);t.a=O},370:function(e,t,s){"use strict";s.r(t);var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=s(54),o=s.n(j),b=s(50),d=s(55),m=s(51),h=s(45),u=s(9),O=s(120),x=s(348),g=s(157),p=s(352),f=s(129),v=s(57),N=s(44),y=s.n(N),k=s(74),C=Object(l.jsx)(O.a,{children:"Gallery"}),w=Object(l.jsx)(O.a,{children:"Grid"}),T=Object(l.jsx)(O.a,{children:"List"}),A=Object(l.jsx)(O.a,{children:"Map"}),S=Object(l.jsx)(O.a,{children:"Beds"}),L=Object(l.jsx)(O.a,{children:"Bathrooms"}),P=Object(l.jsx)(O.a,{children:"Square Feet"}),M=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;return Object(a.a)(this,s),(e=t.call(this)).state={items:v,currentPage:1,itemsPerPage:4,loading:!1},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e}return Object(c.a)(s,[{key:"handleClick",value:function(e){var t=this,s=e.target.closest(".pagination-content");s&&s.scrollIntoView(),this.setState({loading:!0}),setTimeout((function(){t.setState({currentPage:Number(e.target.getAttribute("data-page")),loading:!1})}),2e3)}},{key:"render",value:function(){for(var e=this,t=this.state,s=t.items,a=t.currentPage,c=t.itemsPerPage,i=a*c,n=i-c,j=s.slice(n,i).map((function(e,t){return Object(l.jsxs)("div",{className:"listing listing-list",children:[Object(l.jsxs)("div",{className:"listing-thumbnail",children:[Object(l.jsx)(u.b,{to:"/listing-details-v1",children:Object(l.jsx)("img",{src:"/"+e.listimg,alt:"listing"})}),Object(l.jsxs)("div",{className:"listing-badges",children:[!0===e.star?Object(l.jsxs)("span",{className:"listing-badge featured",children:[" ",Object(l.jsx)("i",{className:"fas fa-star"})," "]}):"",!0===e.sale?Object(l.jsx)("span",{className:"listing-badge sale",children:"On Sale"}):"",!0===e.pending?Object(l.jsx)("span",{className:"listing-badge pending",children:" Pending"}):"",!0===e.rental?Object(l.jsx)("span",{className:"listing-badge rent",children:" Rental"}):""]}),Object(l.jsxs)("div",{className:"listing-controls",children:[Object(l.jsx)(u.b,{to:"#",className:"favorite",children:Object(l.jsx)("i",{className:"far fa-heart"})}),Object(l.jsx)(u.b,{to:"#",className:"compare",children:Object(l.jsx)("i",{className:"fas fa-sync-alt"})})]})]}),Object(l.jsxs)("div",{className:"listing-body",children:[Object(l.jsxs)("div",{className:"listing-author",children:[Object(l.jsx)("img",{src:"/"+e.authorimg,alt:"author"}),Object(l.jsxs)("div",{className:"listing-author-body",children:[Object(l.jsxs)("p",{children:[" ",Object(l.jsx)(u.b,{to:"#",children:e.authorname})," "]}),Object(l.jsx)("span",{className:"listing-date",children:e.postdate})]}),Object(l.jsxs)(x.a,{className:"options-dropdown",children:[Object(l.jsx)(x.a.Toggle,{as:g.a,children:Object(l.jsx)("i",{className:"fas fa-ellipsis-v"})}),Object(l.jsx)(x.a.Menu,{className:"dropdown-menu-right",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(u.b,{to:"tel:+123456789",children:[" ",Object(l.jsx)("i",{className:"fas fa-phone"})," Call Agent"]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(u.b,{to:"mailto:+123456789",children:[" ",Object(l.jsx)("i",{className:"fas fa-envelope"})," Send Message"]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(u.b,{to:"/listing-details-v1",children:[" ",Object(l.jsx)("i",{className:"fas fa-bookmark"})," Book Tour"]})," "]})]})})]})]}),Object(l.jsxs)("h5",{className:"listing-title",children:[" ",Object(l.jsx)(u.b,{to:"/listing-details-v1",title:e.title,children:e.title})," "]}),Object(l.jsxs)("span",{className:"listing-price",children:[(new Intl.NumberFormat).format(e.monthlyprice.toFixed(2)),"$ ",Object(l.jsx)("span",{children:"/month"})," "]}),Object(l.jsx)("p",{className:"listing-text",children:e.text}),Object(l.jsxs)("div",{className:"acr-listing-icons",children:[Object(l.jsx)(p.a,{overlay:S,children:Object(l.jsxs)("div",{className:"acr-listing-icon",children:[Object(l.jsx)("i",{className:"flaticon-bedroom"}),Object(l.jsx)("span",{className:"acr-listing-icon-value",children:e.beds})]})}),Object(l.jsx)(p.a,{overlay:L,children:Object(l.jsxs)("div",{className:"acr-listing-icon",children:[Object(l.jsx)("i",{className:"flaticon-bathroom"}),Object(l.jsx)("span",{className:"acr-listing-icon-value",children:e.bathrooms})]})}),Object(l.jsx)(p.a,{overlay:P,children:Object(l.jsxs)("div",{className:"acr-listing-icon",children:[Object(l.jsx)("i",{className:"flaticon-ruler"}),Object(l.jsx)("span",{className:"acr-listing-icon-value",children:(new Intl.NumberFormat).format(e.area)})]})})]}),Object(l.jsxs)("div",{className:"listing-gallery-wrapper",children:[Object(l.jsx)(u.b,{to:"/listing-details-v1",className:"btn-custom btn-sm secondary",children:"View Details"}),Object(l.jsx)(p.a,{overlay:C,children:Object(l.jsxs)(u.b,{to:"#",className:"listing-gallery",children:[" ",Object(l.jsx)("i",{className:"fas fa-camera"})," "]})})]})]})]},t)})),o=[],b=1;b<=Math.ceil(s.length/c);b++)o.push(b);var d=o.map((function(t){var s=e.state.currentPage===t?"active":"";return Object(l.jsx)(r.Fragment,{children:o.length>1?Object(l.jsx)("li",{className:y()("page-item",{active:s}),children:Object(l.jsx)(u.b,{className:"page-link",to:"#","data-page":t,onClick:e.handleClick,children:t})}):""},t)}));return Object(l.jsx)("div",{className:"section pagination-content",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-4",children:Object(l.jsx)(f.a,{})}),Object(l.jsxs)("div",{className:"col-lg-8",children:[Object(l.jsxs)("div",{className:"acr-global-listing-controls",children:[Object(l.jsxs)("div",{className:"acr-listing-active-filters",children:[Object(l.jsxs)(u.b,{to:"#",children:[Object(l.jsxs)("div",{className:"close-btn close-dark",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),"Any Status"]}),Object(l.jsxs)(u.b,{to:"#",children:[Object(l.jsxs)("div",{className:"close-btn close-dark",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),"West Roxbury, MA"]}),Object(l.jsxs)(u.b,{to:"#",children:[Object(l.jsxs)("div",{className:"close-btn close-dark",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),"House"]})]}),Object(l.jsxs)("div",{className:"acr-toggle-views",children:[Object(l.jsx)(p.a,{placement:"top",overlay:w,children:Object(l.jsx)(u.b,{to:"/listing-grid",children:Object(l.jsx)("i",{className:"fas fa-th-large"})})}),Object(l.jsx)(p.a,{placement:"top",overlay:T,children:Object(l.jsx)(u.b,{to:"/listing-list",className:"active",children:Object(l.jsx)("i",{className:"fas fa-th-list"})})}),Object(l.jsx)(p.a,{placement:"top",overlay:A,children:Object(l.jsx)(u.b,{to:"/listing-map",children:Object(l.jsx)("i",{className:"fas fa-map"})})})]})]}),Object(l.jsx)("div",{className:"row",children:!1===this.state.loading?j:Object(l.jsx)(k.a,{})}),o.length>1?Object(l.jsxs)("ul",{className:"pagination",children:[o.length>1&&1!==this.state.currentPage?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)(u.b,{className:"page-link",to:"#","data-page":this.state.currentPage-1,onClick:this.handleClick,children:Object(l.jsx)("i",{className:"fas fa-chevron-left"})})}):"",d,o.length>1&&this.state.currentPage!==o.length?Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)(u.b,{className:"page-link",to:"#","data-page":parseInt(this.state.currentPage+1),onClick:this.handleClick,children:Object(l.jsx)("i",{className:"fas fa-chevron-right"})})}):""]}):""]})]})})})}}]),s}(r.Component),E=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)(o.a,{children:[Object(l.jsx)("title",{children:"Spacebuilders Group | Listing List"}),Object(l.jsx)("meta",{name:"description",content:"#"})]}),Object(l.jsx)(b.a,{}),Object(l.jsx)(d.a,{breadcrumb:{pagename:"Listing List"}}),Object(l.jsx)(M,{}),Object(l.jsx)(m.a,{})]})}}]),s}(r.Component);t.default=E},46:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=s(9),o=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)(j.b,{className:"navbar-brand",to:"/",children:[" ",Object(l.jsx)("img",{src:"/assets/img/spclogo.png",alt:"logo"})," "]}),Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(l.jsx)(j.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(l.jsx)(j.b,{to:"/about",children:"About us"})}),Object(l.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(l.jsx)(j.b,{to:"/projects",children:"Projects"})}),Object(l.jsx)("li",{className:"menu-item menu-item-has-children",children:Object(l.jsx)(j.b,{to:"/contact",children:"Contact us"})})]})]})}}]),s}(r.Component);t.a=o},47:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=s(9),o=s(48),b=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).getNextSibling=function(e,t){var s=e.nextElementSibling;if(!t)return s;for(;s;){if(s.matches(t))return s;s=s.nextElementSibling}},e.triggerChild=function(t){var s="";null!==(s=void 0!==e.getNextSibling(t.target,".submenu")?e.getNextSibling(t.target,".submenu"):null)&&void 0!==s&&""!==s&&(s.classList=s.classList.contains("d-block")?"submenu":"submenu d-block")},e}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return Object(l.jsx)("div",{className:"aside-scroll",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"menu-section-title",children:"Space Builder"}),o.length>0?o.map((function(t,s){return Object(l.jsxs)("li",{className:"menu-item ".concat(t.child?"menu-item-has-children":""," "),onClick:e.triggerChild,children:[t.child?Object(l.jsxs)(j.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",Object(l.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}):Object(l.jsxs)(j.b,{to:t.link,children:[" ",Object(l.jsx)("i",{className:"flaticon-"+t.icon})," ",t.linkText," "]}),t.child?Object(l.jsx)("ul",{className:"submenu",role:"menu",children:t.submenu.map((function(e,t){return Object(l.jsxs)("li",{className:"menu-item ".concat(e.child?"menu-item-has-children":""," "),children:[e.child?Object(l.jsxs)(j.b,{onClick:function(e){return e.preventDefault()},to:"/",children:[" ",e.linkText," "]}):Object(l.jsxs)(j.b,{to:e.link,children:[" ",e.linkText," "]}),e.submenu?Object(l.jsx)("ul",{className:"submenu",children:e.submenu.map((function(e,t){return Object(l.jsx)("li",{className:"menu-item",children:Object(l.jsx)(j.b,{to:e.link,children:e.linkText})},t)}))}):null]},t)}))}):null]},s)})):null,Object(l.jsx)("li",{className:"menu-section-title",children:"Get Social"}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-facebook"}),"Facebook"]})," "]}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-linkedin"})," Linkedin "]})," "]}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-twitter"})," Twitter "]})," "]}),Object(l.jsxs)("li",{className:"menu-item",children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[" ",Object(l.jsx)("i",{className:"flaticon-instagram"})," Instagram "]})," "]})]})})}}]),s}(r.Component);t.a=b},48:function(e){e.exports=JSON.parse('[{"id":1,"linkText":"Home Pages","child":false,"icon":"home","link":"/"},{"id":2,"linkText":"About Us","child":false,"icon":"layers","link":"/about"},{"id":3,"linkText":"Project","child":false,"icon":"list","link":"/projects"},{"id":4,"linkText":"Development Management","child":false,"icon":"work-table","link":"/"},{"id":7,"linkText":"Blog","child":false,"icon":"blog","link":"/"},{"id":8,"linkText":"Contact us","child":false,"icon":"headset","link":"/contact"}]')},49:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(45),n=s(43),l=s(42),r=s(1),j=s(0),o=function(e){Object(n.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={navtoggle:!1},c.navtoggleClass=c.navtoggleClass.bind(Object(i.a)(c)),c}return Object(c.a)(s,[{key:"navtoggleClass",value:function(){this.setState({navtoggle:!this.state.navtoggle})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.setState({isTop:window.scrollY>100})}),!1)}},{key:"render",value:function(){return Object(r.jsx)(j.Fragment,{})}}]),s}(j.Component);t.a=o},50:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=s(46),o=s(47),b=s(49),d=s(44),m=s.n(d),h=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){var e=this.state.isTop?"sticky":"";return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)("aside",{className:m()("main-aside",{open:this.state.navtoggle}),children:[Object(l.jsx)("div",{className:"aside-title",children:Object(l.jsxs)("div",{className:"aside-controls aside-trigger",children:[Object(l.jsx)("h4",{children:"Menu"}),Object(l.jsxs)("div",{className:"close-btn close-dark",onClick:this.navtoggleClass,children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})]})}),Object(l.jsx)(o.a,{})]}),Object(l.jsx)("div",{className:"aside-overlay aside-trigger",onClick:this.navtoggleClass}),Object(l.jsx)("header",{className:"main-header header-fw can-sticky header-1 ".concat(e),children:Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)(j.a,{}),Object(l.jsx)("div",{className:"header-controls",children:Object(l.jsxs)("div",{className:"aside-toggler aside-trigger",onClick:this.navtoggleClass,children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})})]})})]})}}]),s}(b.a);t.a=h},51:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=s(9),o=s(348),b=s(157),d=(r.Component,function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(l.jsxs)("footer",{className:"acr-footer footer-2",children:[Object(l.jsx)("div",{className:"footer-middle",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg-5 col-sm-12 footer-widget",children:[Object(l.jsxs)("div",{className:"footer-logo",children:[" ",Object(l.jsx)("img",{src:"/assets/img/logo.png",alt:"acres"})," "]}),Object(l.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "}),Object(l.jsxs)(o.a,{className:"acr-language-selector",children:[Object(l.jsxs)(o.a.Toggle,{as:b.a,className:"dropdownicon",children:[Object(l.jsx)("img",{src:"/assets/img/flags/united-states.png",alt:"flag"}),Object(l.jsx)("span",{children:"English"})]}),Object(l.jsx)(o.a.Menu,{className:"dropdown-menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[Object(l.jsx)("img",{src:"/assets/img/flags/germany.png",alt:"flag"})," German"]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[Object(l.jsx)("img",{src:"/assets/img/flags/russia.png",alt:"flag"})," Russian"]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[Object(l.jsx)("img",{src:"/assets/img/flags/united-states.png",alt:"flag"}),"English"]})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(j.b,{to:"#",children:[Object(l.jsx)("img",{src:"/assets/img/flags/spain.png",alt:"flag"})," Spanish"]})," "]})]})})]})]}),Object(l.jsxs)("div",{className:"col-lg-2 offset-lg-1 col-sm-4 footer-widget",children:[Object(l.jsx)("h5",{className:"widget-title",children:"Menu"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/#",children:"Find Home"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/#",children:"Add Listing"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/#",children:"Listings"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/#",children:"Blog"})," "]})]})]}),Object(l.jsxs)("div",{className:"col-lg-2 col-sm-4 footer-widget",children:[Object(l.jsx)("h5",{className:"widget-title",children:"Information"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/about",children:"About Us"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/contact",children:"Contact Us"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/services",children:"Services"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/faq",children:"FAQ"})," "]})]})]}),Object(l.jsxs)("div",{className:"col-lg-2 col-sm-4 footer-widget",children:[Object(l.jsx)("h5",{className:"widget-title",children:"Legal"}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/legal",children:"Privacy Policy"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/legal",children:"Refund Policy"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/legal",children:"Cookie Policy"})," "]}),Object(l.jsxs)("li",{children:[" ",Object(l.jsx)(j.b,{to:"/legal",children:"Legal Terms"})," "]})]})]})]})})}),Object(l.jsx)("div",{className:"footer-bottom",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-7",children:Object(l.jsxs)("p",{className:"m-0",children:["\xa9 Copyright 2020 - ",Object(l.jsx)(j.b,{to:"#",children:"Space Builder"})," All Rights Reserved."]})}),Object(l.jsx)("div",{className:"col-lg-5"})]})})})]})}}]),s}(r.Component));t.a=d},55:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=s(9),o=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"subheader bg-cover bg-center dark-overlay",style:{backgroundImage:"url(/assets/img/about-us.jpg )"},children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"subheader-inner",children:[Object(l.jsx)("h1",{className:"text-white",children:this.props.breadcrumb.pagename}),Object(l.jsx)("nav",{"aria-label":"breadcrumb",children:Object(l.jsxs)("ol",{className:"breadcrumb",children:[Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsxs)(j.b,{to:"/",children:[" ",Object(l.jsx)("i",{className:"fas fa-home"})," "]})}),Object(l.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})})]})})})}}]),s}(r.Component);t.a=o},57:function(e){e.exports=JSON.parse('[{"id":1,"gridimg":"assets/img/listings/l4.jpg","listimg":"assets/img/listings-list/4.jpg","title":"Partner Connect - August 2020","authorimg":"assets/img/people/2.jpg","authorname":"Partner Connect - August 2020","postdate":"March 3, 2020","monthlyprice":3500,"text":"An overwhelming response at our recently held Channel Partner meet at GMK Banquets with over 200 attendees.","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":false,"rental":false,"recent":true},{"id":2,"gridimg":"assets/img/listings/l5.jpg","listimg":"assets/img/listings-list/l5.jpg","title":"SHIVOM REGENCY, Baner ","authorimg":"assets/img/people/2.jpg","authorname":"Full O.C Received","postdate":"March 3, 2020","monthlyprice":3500,"text":"Our Landmark project at Main Baner Road is Sold Out and we have received Full O.C. of the Project. ","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":false,"rental":false,"recent":false},{"id":3,"gridimg":"assets/img/listings/l6.jpg","listimg":"assets/img/listings-list/l6.jpg","title":" D-MART Ready , Sinhagad Road ","authorimg":"assets/img/people/2.jpg","authorname":"Long - Lease ","postdate":"March 3, 2020","monthlyprice":3500,"text":"Overwhelmed to have D\'mart as our newest Leaser\'s at Marigold, Sinhagad Road","beds":3,"bathrooms":2,"area":2499,"star":true,"sale":false,"pending":false,"rental":false,"recent":false}]')},74:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"pagination-loader",children:Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(l.jsx)("g",{transform:"translate(80,50)",children:Object(l.jsx)("g",{transform:"rotate(0)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:1,children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(45)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.875",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(l.jsx)("g",{transform:"translate(50,80)",children:Object(l.jsx)("g",{transform:"rotate(90)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.75",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(l.jsx)("g",{transform:"rotate(135)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.625",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(l.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(l.jsx)("g",{transform:"rotate(180)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.5",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(l.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(l.jsx)("g",{transform:"rotate(225)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.375",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(l.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(l.jsx)("g",{transform:"rotate(270)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.25",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(l.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(l.jsx)("g",{transform:"rotate(315)",children:Object(l.jsxs)("circle",{cx:0,cy:0,r:6,fill:"#01bbbc",fillOpacity:"0.125",children:[Object(l.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(l.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})}}]),s}(r.Component);t.a=j},80:function(e,t,s){"use strict";var a=s(40),c=s(41),i=s(43),n=s(42),l=s(1),r=s(0),j=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(l.jsxs)("form",{children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Total Amount",name:"total"})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Down Payment",name:"down-p"})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Interest Rate",name:"interest"})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Loan Term",name:"loan-term"})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("select",{className:"form-control",name:"cycle",children:[Object(l.jsx)("option",{value:"Daily",children:"Daily"}),Object(l.jsx)("option",{value:"Monthly",children:"Monthly"}),Object(l.jsx)("option",{value:"Yearly",children:"Yearly"})]})}),Object(l.jsx)("button",{type:"submit",className:"btn-custom btn-block",name:"button",children:"Calculate"})]})}}]),s}(r.Component);t.a=j},83:function(e,t,s){"use strict";var a,c=s(3),i=s(7),n=s(44),l=s.n(n),r=s(65),j=s(67),o=s(0),b=s.n(o),d=s(73),m=s(89),h=s(68),u={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function O(e,t){var s=t["offset"+e[0].toUpperCase()+e.slice(1)],a=u[e];return s+parseInt(Object(r.a)(t,a[0]),10)+parseInt(Object(r.a)(t,a[1]),10)}var x=((a={})[d.c]="collapse",a[d.d]="collapsing",a[d.b]="collapsing",a[d.a]="collapse show",a),g={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:O},p=b.a.forwardRef((function(e,t){var s=e.onEnter,a=e.onEntering,n=e.onEntered,r=e.onExit,u=e.onExiting,g=e.className,p=e.children,f=e.dimension,v=void 0===f?"height":f,N=e.getDimensionValue,y=void 0===N?O:N,k=Object(i.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),C="function"===typeof v?v():v,w=Object(o.useMemo)((function(){return Object(m.a)((function(e){e.style[C]="0"}),s)}),[C,s]),T=Object(o.useMemo)((function(){return Object(m.a)((function(e){var t="scroll"+C[0].toUpperCase()+C.slice(1);e.style[C]=e[t]+"px"}),a)}),[C,a]),A=Object(o.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=null}),n)}),[C,n]),S=Object(o.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=y(C,e)+"px",Object(h.a)(e)}),r)}),[r,y,C]),L=Object(o.useMemo)((function(){return Object(m.a)((function(e){e.style[C]=null}),u)}),[C,u]);return b.a.createElement(d.e,Object(c.a)({ref:t,addEndListener:j.a},k,{"aria-expanded":k.role?k.in:null,onEnter:w,onEntering:T,onEntered:A,onExit:S,onExiting:L}),(function(e,t){return b.a.cloneElement(p,Object(c.a)({},t,{className:l()(g,p.props.className,x[e],"width"===C&&"width")}))}))}));p.defaultProps=g,t.a=p}}]);
//# sourceMappingURL=25.82de8c71.chunk.js.map