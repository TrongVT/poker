_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"/K/j":function(e,t,n){"use strict";n.r(t);var o=n("vOnD");t.default=function(){return Object(o.b)(["display:flex;align-items:center;justify-content:center;.component-room__title{display:flex;}.component-room__content{display:flex;flex-direction:column;align-items:center;max-width:780px;text-align:center;a{display:block;}}"])}},"Gmp/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var o=n("ODXe"),r=n("q1tI"),a=n.n(r),c=n("nOHt"),i=n("KLul"),s=n("aWea"),l=n("GuNu"),u=n("okHz"),d=n("PceL"),p=n("vOnD"),m=a.a.createElement,f=function(e){var t=e.children,n=e.className;return m("div",{className:"".concat(n," card-list-component")},t)};f.defaultProps={children:[],className:""};var b=f,v=Object(p.c)(b).withConfig({displayName:"styled-card-list-component",componentId:"sc-smkqtj-0"})(["display:flex;justify-content:center;flex-wrap:wrap;margin:0;padding:0;list-style:none;"]),h=a.a.createElement,g=function(e){var t=e.className,n=e.children,o=e.onClick;return h("div",{className:"".concat(t," card-list-item"),onClick:o},n)};g.defaultProps={className:"",onClick:function(){}};var y=g,k=n("rqZI"),w=n.n(k),x=Object(p.c)(y).withConfig({displayName:"styled-card-list-item-component",componentId:"sc-180t3rp-0"})(["width:140px;height:200px;display:flex;align-items:center;justify-content:center;border-radius:8px;font-weight:300;font-size:2.3rem;cursor:pointer;transition:all 0.3s;background-color:",";border:5px solid ",";box-shadow:0 5px 10px 5px rgba(0,0,0,.25);flex-direction:column;justify-content:center;padding:0 20px;&:hover{color:#1f754b;background-color:#39f197;border-color:#87ffc4;box-shadow:0px 10px 20px 10px rgba(0,0,0,.5);span{color:#1e774c;}}span{color:",";}small{font-size:0.8rem;display:flex;font-weight:400;text-align:center;}"," "," "," ",""],w.a.primaryText,w.a.primaryLight,w.a.primaryTextDark,(function(e){return e.error&&"\n    background-color: ".concat(w.a.error,";\n    border-color: ").concat(w.a.errorLight,";\n\n    span {\n      color: ").concat(w.a.errorText,";\n    }\n  ")}),(function(e){return e.disabled&&"\n    background-color: #38384c;\n    border-color: #47475f;\n    pointer-events: none;\n\n    span {\n      color: #1d1d27;\n    }\n\n    small {\n      color: #1d1d28;\n    }\n  "}),(function(e){var t=e.revealed,n=e.selected;return(t||n)&&"\n    background-color: ".concat(w.a.greyLighter,";\n    border-color: ").concat(w.a.white,";\n    pointer-events: none;\n\n    &:hover {\n      background-color: ").concat(w.a.greyLighter,";\n      border-color: ").concat(w.a.white,";\n    }\n\n    span {\n      color: ").concat(w.a.greyDarker,";\n    }\n  ")}),(function(e){return e.readOnly&&"\n    pointer-events: none;\n  "})),O=n("HlVv"),j=a.a.createElement,_=function(e){var t=e.className,n=e.room,o=e.guestsVoted,c=e.hostVoted,i=e.clearVotes,s=e.isHost,u=e.startSession,d=e.sessionStarted,p=Object(r.useState)(""),m=p[0],f=p[1],b=Object(l.b)(),h="".concat("http://localhost:3000","/join?id=").concat(n.id),g=Object(r.useCallback)((function(e){var t=n.guests.find((function(t){return t.id===e})).vote;return void 0===t?null:t}),[n.guests]),y=Object(r.useCallback)((function(e){var t=e.id,o=e.name;window.confirm('Do you really want to kick "'.concat(o,'" out?'))&&b.emit("kickGuestOut",{roomId:n.id,guestId:t})}),[b,n.id]),k=o&&c;return j("div",{className:"".concat(t," component-host-view")},s&&j("p",null,"Hi"," ",n.host.name,", b\u1ea1n l\xe0 ch\u1ee7. S\u1eed d\u1ee5ng li\xean k\u1ebft n\xe0y \u0111\u1ec3 m\u1eddi nh\u1eefng ng\u01b0\u1eddi kh\xe1c:",j("a",{href:h,target:"_blank",rel:"noreferrer"},h)),j("div",{className:"component-host-view__cards"},j(v,null,j("div",{className:"component-host-view__card-wrap"},j(x,{disabled:!o,revealed:k,readOnly:!0},j("span",null,n.host.vote?n.host.vote:"?"),!c&&j("small",null,"Wait until all guests voted")),j("span",null,n.host.name)),n.guests.map((function(e){var t=e.id,n=e.name,o=e.vote,r=void 0===o?"?":o;return j("div",{className:"component-host-view__card-wrap",key:t},j(x,{disabled:!d||!g(t),revealed:k,readOnly:!0},j("span",null,k?r:"?")),s?j("button",{className:"kick-guest-button",onClick:function(){return y({id:t,name:n})},type:"button"},"+"):null,j("span",null,n))})))),s&&!d&&!!n.guests.length&&j(O.a,{onClick:u,className:"component-host-view__button component-host-view__button--start"},"Start session"),k&&s&&j(a.a.Fragment,null,j(O.a,{onClick:i,className:"component-host-view__button component-host-view__button-reset"},"X\xf3a phi\u1ebfu b\u1ea7u"),j(a.a.Fragment,null," "),j(O.a,{onClick:function(){var e=n.guests.map((function(e){return e.vote})),t={};e.forEach((function(e){t[e]=(t[e]||0)+1})),f(JSON.stringify(t))},className:"component-host-view__button component-host-view__button-reset"},"T\u1ed5ng k\u1ebft"),j("hr",null),j("p",null,"K\u1ebft qu\u1ea3: ",m)))};_.defaultProps={room:{}};var N=_,C=Object(p.c)(N).withConfig({displayName:"styled-host-view-component",componentId:"sc-1dbk9jg-0"})([".component-host-view__button{display:inline-block;width:auto;margin-top:16px;}.component-host-view__cards{display:flex;justify-content:center;}.component-host-view__card-wrap{padding:8px;text-align:center;position:relative;&:hover{.kick-guest-button{display:flex;&:hover,&:active{background-color:#ccc;}}}}.card-list-item{margin:0 0 10px 0;}.kick-guest-button{display:none;transform:rotate(45deg);font-size:20px;position:absolute;align-items:center;justify-content:center;cursor:pointer;line-height:0;top:0;right:0;width:22px;height:22px;background:#ddd;border-radius:10px;border:none;border-radius:100%;}"]),S={fibonacci:["1","2","3","5","8","13","21","34","?","\u2615"],tShirtSize:["XS","S","M","L","XL","","?","\u2615"],Assessment122022:["Mon","Ernesta","Keely","Leo","Sop","Dante","Shin","\u2615"]},I=a.a.createElement,L=function(e){var t=e.className,n=e.room,o=e.vote,r=e.votedValue,a=e.sessionStarted;return I("div",{className:"component-guest-view ".concat(t)},a?I(v,null,S[n.cardsMode].map((function(e){return I("div",{className:"component-guest-view__card-wrap",key:e},I(x,{selected:r&&e&&r===e,onClick:function(){return o(e)}},I("span",null,e)))}))):I("p",null,"Ch\u1edd m\xe1y ch\u1ee7 b\u1eaft \u0111\u1ea7u phi\xean."))};L.defaultProps={room:{},votedValue:null};var E=L,D=Object(p.c)(E).withConfig({displayName:"styled-guest-view-component",componentId:"sc-mom5e1-0"})([".component-guest-view__card-wrap{padding:8px;position:relative;}.card-list-item{margin:0 0 10px 0;}"]),V=a.a.createElement;function z(e){var t=e.className,n=Object(c.useRouter)(),a=Object(l.b)(),p=Object(s.b)(),m=Object(o.a)(p,2),f=m[0].room,b=void 0===f?{}:f,v=m[1],h=Object(r.useState)(!1),g=h[0],y=h[1],k=Object(r.useState)(!1),w=k[0],x=k[1],O=Object(r.useState)(!1),j=O[0],_=O[1],N=Object(r.useState)(null),S=N[0],I=N[1],L=Object(r.useState)(!1),E=L[0],z=L[1],P=Object(r.useCallback)((function(e){v(Object(i.a)(e))}),[v]),T=Object(r.useCallback)((function(e){alert(e),n.replace("/unexisting-room",{reason:e})}),[n]),A=Object(r.useCallback)((function(e){E||z(!1),v(Object(i.a)(e))}),[v,E]),H=Object(r.useCallback)((function(e){e.guests.every((function(e){return!!e.vote}))&&x(!0)}),[]),K=Object(r.useCallback)((function(e){e.host.vote&&_(!0)}),[]),X=Object(r.useCallback)((function(e){H(e),K(e),v(Object(i.a)(e))}),[v,H,K]),q=Object(r.useCallback)((function(e){x(!1),_(!1),I(null),v(Object(i.a)(e))}),[v]),J=Object(r.useCallback)((function(e){var t=e.guestId,o=e.room;a&&a.id===t?n.replace("/kicked-out"):(H(o),K(o),P(o))}),[n,a,P,H,K]),M=Object(r.useCallback)((function(){a&&!g&&(a.on("unexistingRoom",(function(){return T("The room does no longer exist")})),a.on("guestJoined",A),a.on("guestLeft",P),a.on("hostLeft",(function(){return T("The host has ended the session")})),a.on("voted",X),a.on("votesCleared",q),a.on("sessionStarted",(function(){return z(!0)})),a.on("guestKickedOut",J),y(!0))}),[a,X,q,T,g,A,P,J]),G=Object(r.useCallback)((function(e){I(e),a.emit("vote",{roomId:b.id,value:e})}),[a,b.id]),R=Object(r.useCallback)((function(){a.emit("clearVotes",b.id)}),[a,b.id]),F=Object(r.useCallback)((function(){a.emit("startSession",b.id)}),[a,b]);Object(r.useEffect)((function(){b.id?a&&!g&&M():n.push("/")}),[a,n,b.id,M,g]);var W=Object(r.useMemo)((function(){if(!a||!b.id)return null;var e=a.id===b.host.id,t=V(D,{room:b,vote:G,votedValue:S,sessionStarted:E}),n=V(C,{room:b,guestsVoted:w,hostVoted:j,clearVotes:R,isHost:e,startSession:F,sessionStarted:E});return e?w&&!j?t:n:w&&j?n:t}),[b,E,a,S,w,G,R,j,F]);return a&&b.id?V("div",{id:"room-component",className:"".concat(t)},V(u.a,null,V(d.a,{title:"Scrum poker - Room"}),V("div",{className:"component-room__content"},V("h1",{className:"component-room__title"},b.name),W))):null}z.defaultProps={className:""}},HlVv:function(e,t,n){"use strict";var o=n("vOnD"),r=n("q1tI"),a=n.n(r).a.createElement,c=function(e){var t=e.onClick,n=e.className,o=e.children;return a("button",{className:"".concat(n),type:"button",onClick:t},o)};c.defaultProps={className:"",children:"click me",onClick:function(){},size:"md"};var i=c,s=n("rqZI"),l=n.n(s),u=Object(o.c)(i).withConfig({displayName:"styled-button-component",componentId:"sc-18fccyc-0"})(["display:flex;border:none;box-shadow:none;background:",";border-radius:4px;font-size:1rem;padding:12px 20px;cursor:pointer;color:",";width:100%;justify-content:center;transition:all 0.3s;box-shadow:0 0 0 0 rgba(0,0,0,0);&:hover,&:active{background:",";}"," "," ",""],l.a.primary,l.a.white,l.a.primaryLight,(function(e){return"lg"===e.size&&"\n    font-size: 1.3rem;\n    padding: 20px 24px;\n  "}),(function(e){return"sm"===e.size&&"\n    padding: 8px 16px;\n  "}),(function(e){return e.disabled&&"\n    cursor: default;\n    pointer-events: none;\n    background-color: ".concat(l.a.backgroundLight,";\n\n    &:focus {\n      box-shadow: none;\n    }\n  ")}));t.a=u},KLul:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var o=n("PgiJ"),r=function(e){return{type:o.a,room:e}},a=function(e){return{type:o.b,updates:e}}},ODXe:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,c,i=[],s=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(o=a.call(n)).done)&&(i.push(o.value),i.length!==t);s=!0);}catch(u){l=!0,r=u}finally{try{if(!s&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},"OI/r":function(e,t,n){"use strict";n.r(t);var o=n("vOnD"),r=n("Gmp/"),a=n("/K/j");t.default=Object(o.c)(r.default).withConfig({displayName:"room",componentId:"sc-smdfsa-0"})(["",""],a.default)},uLxD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/room",function(){return n("OI/r")}])}},[["uLxD",0,1,2,3,4,5]]]);