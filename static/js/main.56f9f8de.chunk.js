(this.webpackJsonpstackoverflowquestions=this.webpackJsonpstackoverflowquestions||[]).push([[0],{47:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(52),a(104)),i=a(24),s=a.n(i),u=a(13),m=a(36),h=a(12),f=a(43),b=a(94),d=a(4),E=a(105),g=a(96),p=a(97),v=a(98),w=a(99),O=a(100),j=a(101),k=a(102),y=a(103),x=Object(b.a)({table:{minWidth:650}}),S=Object(d.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(E.a),q=function(e){var t=e.data,a=e.onNearTableEnd,n=x();return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{component:p.a},r.a.createElement(v.a,{className:n.table,"aria-label":"simple table"},r.a.createElement(w.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a,null,"Author"),r.a.createElement(j.a,null,"Title"),r.a.createElement(j.a,null,"Created On"))),r.a.createElement(k.a,null,t.map((function(e,n){return r.a.createElement(r.a.Fragment,{key:e.question_id},r.a.createElement(S,{interactive:!0,placement:"top",title:r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{color:"inherit"},e.title),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Go to this question"))},r.a.createElement(O.a,null,r.a.createElement(j.a,{component:"th",scope:"row"},e.owner.display_name),r.a.createElement(j.a,null,n===t.length-5&&r.a.createElement(f.a,{as:"div",onChange:a?function(e,t){e&&a()}:function(){},triggerOnce:!0},r.a.createElement(r.a.Fragment,null)),e.title),r.a.createElement(j.a,null,new Date(e.creation_date).toLocaleString()))))}))))))},W=a(41),_=a(17),F=a(42),M=a.n(F).a.create({baseURL:"https://api.stackexchange.com/2.2/"}),T=new(function(){function e(){Object(W.a)(this,e),this.baseUrl=void 0,this.baseUrl="questions?"}return Object(_.a)(e,[{key:"getQuestions",value:function(e,t){return M.get("".concat(this.baseUrl,"page=").concat(e,"&order=desc&sort=").concat(t,"&site=stackoverflow")).then((function(e){var t=e.data;return{items:t.items,hasMore:t.has_more}})).catch((function(){throw new Error("API:Something went wrong")}))}}]),e}()),U=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),l=Object(h.a)(c,2),i=l[0],f=l[1],b=Object(n.useState)(1),d=Object(h.a)(b,2),E=d[0],g=d[1],p=function(){var e=Object(m.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=9;break}return e.next=3,T.getQuestions(E.toString(),"activity");case 3:t=e.sent,n=t.items,r=t.hasMore,g(E+1),o([].concat(Object(u.a)(a),Object(u.a)(n))),f(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T.getQuestions(E.toString(),"activity").then((function(e){var t=e.items,n=e.hasMore;g(E+1),o([].concat(Object(u.a)(a),Object(u.a)(t))),f(n)}))}),[]),r.a.createElement("main",null,r.a.createElement(q,{data:a,onNearTableEnd:p}))},C=(a(76),function(){return r.a.createElement(l.a,{maxWidth:!1},r.a.createElement(U,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.56f9f8de.chunk.js.map