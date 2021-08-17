(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{487:function(e,t,a){},775:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(98),o=a.n(r),i=(a(487),a(814)),s=a(468),j=a(790),d=a(816),l=a(791),u=a(792),b=a(793),x=a(313),g=a.p+"static/media/logo-white.08fa8446.png",m=a.p+"static/media/logo-black.34082374.png",h=a(12);var O=function(){var e=Object(s.c)(),t=e.colorMode,a=e.toggleColorMode;return Object(h.jsx)(j.a,{width:"100%",maxW:"100%",mb:"4",children:Object(h.jsxs)(i.a,{m:"2",children:[Object(h.jsx)(d.a,{src:"light"===t?m:g,alt:"Logo",boxSize:"60px",objectFit:"contain"}),Object(h.jsx)(l.a,{}),Object(h.jsx)(u.a,{size:"lg",fontSize:"36px",bgGradient:"Linear(to-r, green.300, green.400, green.500)",bgClip:"text",children:"Todo List"}),Object(h.jsx)(l.a,{}),Object(h.jsx)(b.a,{"aria-label":"Toogle Theme",icon:"light"===t?Object(h.jsx)(x.b,{}):Object(h.jsx)(x.a,{}),isRound:!0,onClick:a})]})})},v=a(22),p=a(23),f=function e(t){Object(p.a)(this,e),this.id=void 0,this.text=void 0,this.text=t,this.id=(new Date).toISOString()},y=c.a.createContext({items:[],addTodo:function(){},removeTodo:function(e){}}),w=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],r=a[1],o={items:c,addTodo:function(e){var t=new f(e);r((function(e){return e.concat(t)}))},removeTodo:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}};return Object(h.jsx)(y.Provider,{value:o,children:e.children})},P=a(795),C=a(796),k=function(){var e=Object(n.useContext)(y),t=function(t){e.removeTodo(t)};return 0===e.items.length?Object(h.jsx)(P.a,{colorScheme:"green",px:"4",py:"2",borderRadius:"4",children:"Yippe!!! Nothing to do \xa0 \ud83d\ude00"}):Object(h.jsx)(i.c,{margin:"10px",divider:Object(h.jsx)(i.b,{borderColor:"gray.200"}),borderWidth:"2px",borderColor:"gray.200",borderRadius:"lg",p:"4",width:"100%",maxW:{base:"90vw",sm:"80vw",lg:"60vw"},children:e.items.map((function(e){return Object(h.jsx)(C.a,{onClick:t.bind(null,e.id),cursor:"pointer",children:e.text},e.id)}))})},A=a(811),M=a(815),D=a(465),S=function(e){var t=Object(n.useContext)(y),a=Object(n.useRef)(null),c=Object(A.a)();return Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=a.current.value;0!==n.trim().length?t.addTodo(n):c({title:"Add text to your TODO",status:"error",duration:2e3,isClosable:!0})},children:Object(h.jsxs)(i.a,{mt:"4",children:[Object(h.jsx)(M.a,{variant:"filled",placeholder:"Add todo",ref:a}),Object(h.jsx)(D.a,{px:"8",backgroundColor:"red.500",color:"white",type:"submit",children:"Add"})]})})},T=a(807),B=a(808),G=a(798),F=a(799),K=a(803),z=a(168),L=a(169),R=a(197),E=a(452);var I=function(){return Object(h.jsx)(G.a,{width:"100%",aspect:3,children:Object(h.jsxs)(F.a,{data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:10,right:30,left:0,bottom:0},children:[Object(h.jsx)(K.a,{strokeDasharray:"3 3"}),Object(h.jsx)(z.a,{dataKey:"name"}),Object(h.jsx)(L.a,{}),Object(h.jsx)(R.a,{}),Object(h.jsx)(E.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"})]})})},N=a(817),W=a(804),H=a(455),J=a(453);var V=function(){return Object(h.jsx)(G.a,{width:"100%",aspect:3,children:Object(h.jsxs)(N.a,{cx:"50%",cy:"50%",outerRadius:"80%",data:[{subject:"Math",A:120,B:110,fullMark:150},{subject:"Hindi",A:98,B:130,fullMark:150},{subject:"English",A:86,B:130,fullMark:150},{subject:"Geography",A:99,B:100,fullMark:150},{subject:"Physics",A:85,B:90,fullMark:150},{subject:"History",A:65,B:85,fullMark:150}],children:[Object(h.jsx)(W.a,{}),Object(h.jsx)(H.a,{dataKey:"subject"}),Object(h.jsx)(J.a,{name:"Zia",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6})]})})},X=a(805),Y=a(195),Z=a(466);var q=function(){return Object(h.jsx)(G.a,{width:"100%",aspect:3,children:Object(h.jsxs)(X.a,{width:500,height:300,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:20,right:30,left:20,bottom:5},children:[Object(h.jsx)(K.a,{strokeDasharray:"3 3"}),Object(h.jsx)(z.a,{dataKey:"name"}),Object(h.jsx)(L.a,{}),Object(h.jsx)(R.a,{}),Object(h.jsx)(Y.a,{}),Object(h.jsx)(Z.a,{dataKey:"pv",stackId:"a",fill:"#8884d8"}),Object(h.jsx)(Z.a,{dataKey:"uv",stackId:"a",fill:"#82ca9d"})]})})},Q=a(806),U=a(457);var $=function(){return Object(h.jsx)(G.a,{width:"100%",aspect:2.8,children:Object(h.jsxs)(Q.a,{width:500,height:300,data:[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:2210},{name:"Page C",uv:2e3,pv:9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(h.jsx)(K.a,{strokeDasharray:"3 3"}),Object(h.jsx)(z.a,{dataKey:"name"}),Object(h.jsx)(L.a,{}),Object(h.jsx)(R.a,{}),Object(h.jsx)(Y.a,{}),Object(h.jsx)(U.a,{type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8}}),Object(h.jsx)(U.a,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})]})})},_=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{m:"50px 0 !important",children:Object(h.jsx)(C.a,{textAlign:"center",size:"lg",fontSize:"32",bgGradient:"Linear(to-r, green.300, green.400, green.500)",bgClip:"text",children:"Recharts"})}),Object(h.jsxs)(T.a,{w:"100%",h:"auto",align:"center",direction:["column","column","row","row"],children:[Object(h.jsx)(B.a,{w:["90%","80%","50%","50%"],children:Object(h.jsx)(I,{})}),Object(h.jsx)(B.a,{w:["90%","80%","50%","50%"],children:Object(h.jsx)(V,{})})]}),Object(h.jsxs)(T.a,{w:["100%","90%","90%","99%"],h:"auto",align:"center",direction:["column","column","row","row"],overflowX:"hidden",children:[Object(h.jsx)(B.a,{w:["90%","80%","50%","50%"],children:Object(h.jsx)(q,{})}),Object(h.jsx)(B.a,{w:["90%","80%","50%","50%"],children:Object(h.jsx)($,{})})]})]})},ee=a(461);var te=function(){var e=c.a.useRef(),t=Object(n.useState)(!1),a=Object(v.a)(t,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){if(!r){console.log("isGraphAvailable",r);var t=new ee.a.Graph({container:o.a.findDOMNode(e.current),width:500,height:500,layout:{type:"force"},defaultNode:{size:15}});function a(e){var t=e.item.get("model");t.fx=e.x,t.fy=e.y}console.log("Graph",t),fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/relations.json").then((function(e){return e.json()})).then((function(e){t.data({nodes:e.nodes,edges:e.edges.map((function(e,t){return e.id="edge"+t,Object.assign({},e)}))}),t.render(),t.on("node:dragstart",(function(e){t.layout(),a(e)})),t.on("node:drag",(function(e){t.get("layoutController").layoutMethods[0].execute(),a(e)})),t.on("node:dragend",(function(e){e.item.get("model").fx=null,e.item.get("model").fy=null}))})),i(!0)}}),[r]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(C.a,{size:"lg",fontSize:"32",bgGradient:"Linear(to-r, green.300, green.400, green.500)",bgClip:"text",m:"50px 0 !important",textAlign:"center",children:"G6 Data Visualisation"}),Object(h.jsx)("div",{ref:e})]})};var ae=function(){return Object(h.jsxs)(i.c,{align:"center",justify:"center",children:[Object(h.jsx)(O,{}),Object(h.jsx)(k,{}),Object(h.jsx)(S,{}),Object(h.jsx)(_,{}),Object(h.jsx)(te,{})]})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,818)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))},ce=a(809),re=a(813),oe=a(810),ie=Object(ce.a)({config:{initialColorMode:"light",useSystemColorMode:!1}});o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{children:Object(h.jsxs)(re.a,{theme:ie,children:[Object(h.jsx)(oe.a,{initialColorMode:ie.config.initialColorMode}),Object(h.jsx)(ae,{})]})})}),document.getElementById("root")),ne()}},[[775,1,2]]]);
//# sourceMappingURL=main.b3510225.chunk.js.map