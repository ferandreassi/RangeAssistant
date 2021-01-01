(this["webpackJsonp@holdem-poker-tools/range-assistant-web"]=this["webpackJsonp@holdem-poker-tools/range-assistant-web"]||[]).push([[0],{173:function(e){e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","properties":{"_id":{"maxLength":48,"minLength":16,"type":"string"},"tags":{"items":{"type":"string","maxLength":32,"minLength":1},"minItems":0,"type":"array","uniqueItems":true},"actions":{"$id":"actions","items":{"properties":{"color":{"pattern":"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$","type":"string"},"name":{"maxLength":32,"minLength":1,"type":"string"}},"required":["name","color"],"type":"object"},"maxItems":25,"minItems":2,"type":"array","uniqueItems":true},"author":{"minLength":1,"type":"string"},"combos":{"$id":"combos","additionalProperties":false,"maxProperties":169,"minProperties":0,"patternProperties":{"^([AKQJT2-9]{2})([os?])?$":{"items":{"type":"number"},"minItems":1,"type":"array"}}},"title":{"minLength":1,"type":"string"}},"required":["_id","title","actions","combos","author","tags"],"title":"Range","type":"object"}')},224:function(e){e.exports=JSON.parse('{"actions":[{"name":"Fold","color":"#d3d3d3","inRange":false},{"name":"Open","color":"#7ec78e","inRange":true}],"combos":{"55":[3,1],"66":[1,1],"77":[0,1],"88":[0,1],"99":[0,1],"AA":[0,1],"AKs":[0,1],"AQs":[0,1],"ATs":[0,1],"A8s":[0,1],"A7s":[0,1],"AJs":[0,1],"A9s":[0,1],"A6s":[0,1],"A5s":[0,1],"A4s":[0,1],"A3s":[0,1],"A2s":[3,1],"AKo":[0,1],"AQo":[0,1],"AJo":[0,1],"ATo":[0,1],"KJo":[0,1],"KQo":[0,1],"KK":[0,1],"KQs":[0,1],"QQ":[0,1],"QJo":[1,1],"JJ":[0,1],"QJs":[0,1],"KJs":[0,1],"TT":[0,1],"KTs":[0,1],"K9s":[0,1],"K8s":[0,1],"QTs":[0,1],"Q9s":[0,1],"JTs":[0,1],"J9s":[1,1],"T9s":[4,1],"98s":[4,1],"87s":[4,1],"76s":[4,1],"65s":[4,1]},"tags":["6max","LJ","RFI","100BB","GTO"]}')},225:function(e){e.exports=JSON.parse('{"actions":[{"name":"Fold","color":"#d3d3d3","inRange":false},{"name":"Call","color":"#7ec78e","inRange":true},{"name":"3 Bet","color":"#e89679","inRange":true}],"combos":{"22":[0,1,0],"33":[0,1,0],"44":[0,1,0],"55":[0,1,0],"66":[0,1,0],"77":[0,1,0],"88":[0,1,0],"99":[0,3,1],"AKs":[0,0,1],"AQs":[0,1,3],"ATs":[0,1,1],"A8s":[0,3,1],"A7s":[0,3,1],"AJs":[0,1,3],"A9s":[0,3,1],"A6s":[0,1,0],"A5s":[0,1,1],"A4s":[0,1,1],"A3s":[0,3,1],"A2s":[0,1,0],"AKo":[0,1,3],"AQo":[0,0,1],"AJo":[0,1,0],"ATo":[0,1,0],"KJo":[0,1,0],"KQo":[0,1,0],"KK":[0,0,1],"KQs":[0,0,1],"QQ":[0,0,1],"QJo":[0,1,0],"JJ":[0,1,1],"QJs":[0,1,3],"KJs":[0,1,3],"TT":[0,2,1],"KTs":[0,1,1],"K9s":[0,1,0],"K8s":[0,1,0],"QTs":[0,1,1],"Q9s":[0,3,1],"JTs":[0,2,1],"J9s":[0,3,1],"T9s":[0,3,1],"98s":[0,3,1],"87s":[0,3,1],"76s":[0,4,1],"65s":[0,4,1],"AA":[0,0,1],"K7s":[0,1,0],"K4s":[0,1,0],"K5s":[0,3,1],"K6s":[0,3,1],"Q8s":[0,1,0],"Q7s":[0,1,0],"J7s":[0,1,0],"J8s":[0,3,1],"T8s":[0,3,1],"T7s":[0,1,0],"T6s":[0,1,0],"97s":[0,4,1],"96s":[0,1,0],"95s":[0,1,0],"86s":[0,4,1],"85s":[0,1,0],"75s":[0,4,1],"74s":[0,1,0],"64s":[0,4,1],"63s":[0,1,0],"54s":[0,4,1],"53s":[0,1,0],"52s":[0,1,0],"43s":[0,1,0],"42s":[0,1,0],"32s":[0,1,0],"JTo":[1,1,0],"QTo":[1,1,0],"KTo":[1,1,0]},"tags":["6max","100BB","BB","vs LJ","GTO"]}')},247:function(e,t,n){},316:function(e,t){},374:function(e,t,n){},375:function(e,t,n){},443:function(e,t,n){},459:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(35),o=n.n(s),i=(n(247),n(23)),l=n(85),j=n(37),u=n(471),b=n(476),d=n(71),h=n(479),O=n(472),f=n(468),g=n(478),m=n(494),x=n(495),v=n(487),p=n(484),y=n(207),w=n(47),A=n(61),T=n(10),k=n(469),R=n(463),C=n(464),S=n(474),N=n(74),P=n(480),B=n(113),J=n(477),I=n(473),F=n(462),K=n(481),M=function(){return Object(c.jsx)(F.a,{indicator:Object(c.jsx)(K.a,{style:{fontSize:24},spin:!0})})},G=n(482),Q=n(483),q=n(485),L=n(486),H=n(141),D=n(172),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return e=Math.ceil(Math.max(1,e)),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},U=n(208),W=n.n(U),_=n(209),z=n.n(_),Y=n(173),$=new z.a({strict:!1});$.addSchema(Y);$.getSchema("actions"),$.getSchema("combos");var V=$.compile(Y),X={gtoplus:{label:"GTO+",getWeightedRangeString:function(e,t){return"[".concat(t.toFixed(1),"]").concat(e,"[/").concat(t.toFixed(1),"]")}}},Z=function(e,t){return function(n){var c;if(e[n]){c="linear-gradient(to left";var r=e[n].reduce((function(e,t){return e+t}),0),a=e[n].map((function(e){return e/r*100})),s=0;t.forEach((function(e,t){var n=a[t];s+=n,c+=", ".concat(e.color," ").concat(s-n,"%, ").concat(e.color," ").concat(s,"%")})),c+=")"}else c=t[0].color;return{background:c}}},ee=function(e,t){var n=Object.keys(e).reduce((function(t,n){return Object(T.a)(Object(T.a)({},t),{},Object(w.a)({},n,function(e){var t=e.reduce((function(e,t,n){return[].concat(Object(A.a)(e),[t+(e[n-1]||0)])}),[]),n=E(Math.min.apply(Math,Object(A.a)(e)),t[t.length-1]);return t.findIndex((function(e,c){return n<=e&&n>(t[c-1]?t[c-1]:0)}))}(e[n])))}),{});return function(e){return{backgroundColor:(t.find((function(t,c){return!!n[e]&&c===n[e]}))||t[0]).color}}},te=["EP","MP","UTG","UTG+1","UTG+2","LJ","HJ","CO","BTN","SB","BB","vs EP","vs MP","vs UTG","vs UTG+1","vs UTG+2","vs LJ","vs HJ","vs CO","vs BTN","vs SB","vs BB","micro","low stakes","medium stakes","high stakes","100BB","200BB","75BB","50BB","30BB","RFI","vs limp","vs open","vs 3bet","vs 4bet","vs 5bet","vs small bet","vs medium bet","vs big bet","6max","full ring","heads up","GTO","exploitative","vs nit","vs TAG","vs LAG","vs fish","vs whale"],ne=function(e){return Object.keys(e).reduce((function(t,n){return void 0===e[n]||Array.isArray(e[n])&&e[n].every((function(e){return 0===e}))?t:Object(T.a)(Object(T.a)({},t),{},Object(w.a)({},n,e[n]))}),{})},ce=[{value:"#d3d3d3",name:"Grey"},{value:"#7ec78e",name:"Green"},{value:"#d9e90e",name:"Yellow"},{value:"#e89679",name:"Peach"},{value:"#6d9ec2",name:"Blue"},{value:"#bb63fd",name:"Purple"},{value:"#fd6363",name:"Red"},{value:"#ea9900",name:"Orange"},{value:"#46cec0",name:"Turquoise"},{value:"#ffffff",name:"White"},{value:"#e09cc5",name:"Pink"},{value:"#8a0000",name:"Maroon"},{value:"#06ce0c",name:"Bright Green"},{value:"#1b9af7",name:"Bright Blue"}],re=n(88),ae=n.n(re),se=n(156),oe=new(n(210).a)("ranges"),ie=function(e){return oe.post(e).then((function(e){return oe.get(e.id)}))},le=function(){var e=Object(se.a)(ae.a.mark((function e(t){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oe.get(t).then(oe.remove));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=u.a.Title,ue=u.a.Text,be=k.a.Option;var de=function(){var e=Object(r.useState)(void 0),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!0),o=Object(i.a)(s,2),l=o[0],u=o[1],b=Object(r.useState)(void 0),O=Object(i.a)(b,2),f=O[0],g=O[1],m=Object(r.useState)(void 0),x=Object(i.a)(m,2),v=x[0],y=x[1],F=Object(r.useState)(!1),K=Object(i.a)(F,2),E=K[0],U=K[1],W=Object(r.useState)(void 0),_=Object(i.a)(W,2),z=_[0],Y=_[1],$=Object(r.useState)(void 0),ee=Object(i.a)($,2),re=ee[0],ae=ee[1],se=Object(r.useState)("gtoplus"),ie=Object(i.a)(se,2),le=ie[0],de=ie[1],he=Object(j.h)().rangeId;Object(r.useEffect)((function(){var e;u(!0),(e=he,oe.get(e)).then((function(e){return a(Object.fromEntries(Object.entries(e).filter((function(e){return!Object(i.a)(e,1)[0].startsWith("_")}))))})).catch((function(e){console.error(e),g("Unable to load range!")})).finally((function(){return u(!1)}))}),[u,g,he]),Object(r.useEffect)((function(){var e=V(Object(T.a)({_id:he},n));n&&!E&&e?function(e,t){return oe.get(e).then((function(e){return Object.assign(e,t)})).then(oe.put)}(he,n).catch(console.error):console.debug(e.errors)}),[n,E,he]),Object(r.useEffect)((function(){if(n){var e=n.combos,t=n.actions,c=Object.entries(e).filter((function(e){var n=Object(i.a)(e,2);n[0];return n[1].some((function(e,n){return t[n].inRange&&e>0}))})).map((function(e){var n=Object(i.a)(e,2),c=n[0],r=n[1],a=r.reduce((function(e,t){return e+t}),0);return[c,(r.reduce((function(e,n,c){return t[c].inRange?e+n:e}),0)/a*100).toFixed(2)]}));c.length?ae(function(e,t){var n=X[t].getWeightedRangeString,c=e.reduce((function(e,t){var n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(T.a)(Object(T.a)({},e),{},Object(w.a)({},r,(e[r]||[]).concat([c])))}),{});return Object.entries(c).map((function(e){var t=Object(i.a)(e,2),c=t[0],r=t[1];return 100===parseInt(c)?Object(D.reverse)(r):n(Object(D.reverse)(r),parseFloat(c))})).join(",").replaceAll(" ","")}(c,le)):ae(void 0)}}),[n,le]);var Oe=function(e,t){a((function(n){var c=Object(A.a)(n.actions);return c[e]=Object(T.a)(Object(T.a)({},n.actions[e]),t),Object(T.a)(Object(T.a)({},n),{},{actions:c})}))},fe=function(e){return function(t){return a((function(n){return Object(T.a)(Object(T.a)({},n),{},Object(w.a)({},e,t))}))}};return f?Object(c.jsx)(j.a,{to:"/notfound",state:{}}):l?Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(M,{})," Loading..."]}):Object(c.jsx)("div",{children:Object(c.jsxs)(h.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(je,{level:3,editable:{onChange:fe("title")},children:n.title}),Object(c.jsx)(ue,{editable:{onChange:fe("author")},children:n.author})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(je,{level:4,children:"Tags"}),Object(c.jsx)(ue,{children:"Use tags for hero position, villain position, bet size etc. to help when searching for a specific range. You can use the default tags or add your own new tags."}),Object(c.jsx)(k.a,{value:n.tags,placeholder:"Select tags...",mode:"tags",style:{width:"100%"},onChange:fe("tags"),tokenSeparators:[","],children:Object(A.a)(new Set(te.concat(n.tags))).map((function(e){return Object(c.jsx)(be,{value:e,children:e},e)}))})]}),Object(c.jsxs)(R.a,{gutter:[15,15],children:[Object(c.jsx)(C.a,{xs:{span:24,offset:0},sm:{span:16,offset:4},md:{span:12,offset:0},lg:12,xl:12,children:Object(c.jsxs)(h.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsx)(je,{level:4,children:"Combos"}),Object(c.jsx)(H.HandMatrix,{colorize:!1,onPointerDown:function(e){y(e),U(!0)},onPointerUp:function(){return U(!1)},onPointerEnter:function(e){v&&E&&a((function(t){return Object(T.a)(Object(T.a)({},t),{},{combos:ne(Object(T.a)(Object(T.a)({},t.combos),{},Object(w.a)({},e,t.combos[v])))})}))},comboStyle:function(e){return Object(T.a)(Object(T.a)({},Z(n.combos,n.actions)(e)),{},{boxShadow:e===v?"inset 0px 0px 0px 5px #fff":"none"})}}),Object(c.jsxs)(ue,{children:[Object(c.jsx)("strong",{children:"Pro Tip:"}),' You can "drag" a combo to copy it\'s action weights to another combo.']})]})}),Object(c.jsx)(C.a,{xs:{span:24,offset:0},sm:{span:16,offset:4},md:{span:12,offset:0},lg:12,xl:12,children:Object(c.jsxs)(h.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsx)(je,{level:4,children:"Actions"}),n.actions.map((function(e,t){return Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center",position:"relative"},children:[Object(c.jsx)(S.a,{disabled:0===t,size:"large",style:{flexGrow:1},value:e.name,onChange:function(e){return Oe(t,{name:e.target.value})}}),Object(c.jsx)(k.a,{size:"large",value:e.color,onSelect:function(e){return Oe(t,{color:e})},children:ce.map((function(e){return Object(c.jsx)(be,{value:e.value,children:Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(c.jsx)("span",{style:{border:"1px solid lightgrey",marginRight:10,minHeight:20,minWidth:20,backgroundColor:e.value}})," ",e.name]})},e.value)}))}),Object(c.jsx)(d.a,{type:"danger",size:"large",disabled:1===n.actions.length||0===t,onClick:function(){return function(e){a((function(t){return Object(T.a)(Object(T.a)({},t),{},{actions:[].concat(Object(A.a)(t.actions.slice(0,e)),Object(A.a)(t.actions.slice(e+1))),combos:Object.entries(t.combos).reduce((function(t,n){var c=Object(i.a)(n,2),r=c[0],a=c[1].filter((function(t,n){return n!==e}));return a.every((function(e){return 0===e}))?t:Object(T.a)(Object(T.a)({},t),{},Object(w.a)({},r,a))}),{})})})),Y(void 0)}(t)},children:Object(c.jsx)(G.a,{})}),Object(c.jsx)("div",{style:{marginLeft:5},children:Object(c.jsx)(N.a,{placement:"topRight",title:"Include in range string",children:Object(c.jsx)(P.a,{disabled:0===t,onChange:function(e){return Oe(t,{inRange:e})},checkedChildren:Object(c.jsx)(Q.a,{}),checked:e.inRange})})})]},t)})),Object(c.jsx)(d.a,{onClick:function(){var e=ce.filter((function(e){return-1===n.actions.map((function(e){return e.color})).indexOf(e.value)}));a((function(t){return Object(T.a)(Object(T.a)({},t),{},{actions:[].concat(Object(A.a)(t.actions),[{name:"New Action",color:e[0].value,inRange:!0}]),combos:Object.entries(t.combos).reduce((function(e,t){var n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(T.a)(Object(T.a)({},e),{},Object(w.a)({},c,r.concat([0])))}),{})})})),Y(void 0)},type:"dashed",disabled:n.actions.length===ce.length,children:"Add Action"}),v?Object(c.jsxs)(h.b,{style:{width:"100%"},direction:"vertical",children:[Object(c.jsxs)(je,{level:4,children:["Combo Action Weights: ",v]}),n.actions.map((function(e,t){return Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(c.jsx)("span",{style:{border:"1px solid lightgrey",marginRight:10,height:20,width:20,backgroundColor:e.color}}),Object(c.jsx)(J.a,{value:n.combos[v]?n.combos[v][t]:0,min:0,onChange:function(e){return function(e,t,c){var r=n.combos,s=n.actions,o=Object(A.a)(r[e]||s.map((function(e){return 0}))),i=Object(T.a)(Object(T.a)({},r),{},Object(w.a)({},e,o.map((function(e,n){return n===t?c:e}))));a((function(e){return Object(T.a)(Object(T.a)({},e),{},{combos:ne(i)})}))}(v,t,e)}})]},t)})),(n.combos[v]||z)&&Object(c.jsxs)(h.b,{children:[n.combos[v]&&Object(c.jsx)(d.a,{onClick:function(){return Y(n.combos[v])},icon:Object(c.jsx)(p.a,{}),children:"Copy"}),z&&Object(c.jsx)(d.a,{onClick:function(){a((function(e){return Object(T.a)(Object(T.a)({},e),{},{combos:ne(Object(T.a)(Object(T.a)({},e.combos),{},Object(w.a)({},v,z)))})}))},icon:Object(c.jsx)(q.a,{}),children:"Paste"})]})]}):Object(c.jsx)(B.a,{description:"Select a combo to configure"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(je,{level:4,children:"Range String"}),re?Object(c.jsxs)(h.b,{direction:"vertical",children:[Object(c.jsxs)(h.b,{children:[Object(c.jsx)(ue,{strong:!0,children:"Format"}),Object(c.jsx)(I.a.Group,{onChange:de,options:Object.keys(X).map((function(e){return{value:e,label:X[e].label}})),value:le})]}),Object(c.jsx)(ue,{copyable:!0,children:re})]}):Object(c.jsxs)(ue,{children:[Object(c.jsx)(L.a,{})," To generate a range string, ensure at least one combo has an action weight greater than 0 for at least one action which is marked as ",Object(c.jsx)("strong",{children:"included in range"})]})]})]})})]})]})})},he=n(475),Oe=function(e){var t,n,r=e.location;return Object(c.jsx)(he.a,{status:"404",title:(null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.title)||"Page Not Found",subTitle:(null===r||void 0===r||null===(n=r.state)||void 0===n?void 0:n.message)||"Sorry but the page you're looking for doesn't exist!",extra:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)(d.a,{children:"Return Home"})})]})},fe=n(239),ge=n(238),me=n(465),xe=n(466),ve=n(470),pe=n(467),ye=n(488),we=n(489),Ae=n(490),Te=n(491),ke=n(492),Re=n(493),Ce=n(232);n(374);var Se=function(e){var t=e.children,n=e.onDropFiles,a=Object(r.useCallback)((function(e){n&&n(e)}),[n]),s=Object(Ce.a)({onDrop:a}),o=s.getRootProps,i=s.isDragActive;return Object(c.jsx)("div",Object(T.a)(Object(T.a)({className:"drop-overlay ".concat(i?"dropping":"")},o()),{},{children:t}))},Ne={rfi:n(224),vsbet:n(225)},Pe=(n(375),u.a.Title),Be=u.a.Paragraph,Je=u.a.Text,Ie=k.a.Option,Fe=function(e){var t=e.range,n=e.frequencyMode,r=Object(j.g)(),a=t.title,s=t.author,o=t.actions,i=t.combos,l=t.tags,u=t._id,b=n?Z(i,o):ee(i,o);return Object(c.jsxs)("div",{children:[Object(c.jsxs)(Je,{strong:!0,children:[a," "]}),Object(c.jsx)(me.a,{placement:"bottom",title:"Actions",content:Object(c.jsx)(Ke,{actions:t.actions}),trigger:"click",children:Object(c.jsx)(we.a,{})}),Object(c.jsx)(H.HandMatrix,{showText:!0,comboStyle:function(e){return Object(T.a)(Object(T.a)({},b(e)),{},{fontSize:"0.6rem"})}}),Object(c.jsxs)(Je,{type:"secondary",children:["by ",s]}),Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)(N.a,{title:"Edit Range",placement:"bottomLeft",children:Object(c.jsx)(d.a,{onClick:function(){return r.push("range/".concat(u))},icon:Object(c.jsx)(Ae.a,{}),size:"small"})}),Object(c.jsx)(N.a,{title:"Duplicate Range",placement:"bottom",children:Object(c.jsx)(d.a,{onClick:function(){return ie({title:a,author:s,actions:o,combos:i,tags:l})},icon:Object(c.jsx)(p.a,{}),size:"small"})}),Object(c.jsx)(N.a,{title:"Download Range",placement:"bottom",children:Object(c.jsx)(d.a,{onClick:function(){return delete(e=t)._rev,void W()(JSON.stringify(e),"".concat(e.title.toLowerCase().replace(/\s+/g,"-"),".range"),"application/json");var e},icon:Object(c.jsx)(Te.a,{}),size:"small"})}),Object(c.jsx)("div",{className:"spacer"}),Object(c.jsx)(xe.a,{title:"Are you sure to delete this range?",onConfirm:function(){return le(u)},okText:"Yes",cancelText:"No",children:Object(c.jsx)(d.a,{type:"primary",icon:Object(c.jsx)(ke.a,{}),size:"small"})})]}),Object(c.jsx)("div",{className:"tag-container",children:l.map((function(e){return Object(c.jsx)("div",{className:"tag",children:e},e)}))})]})},Ke=function(e){var t=e.actions;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsxs)("div",{style:{marginBottom:5,display:"flex"},children:[Object(c.jsx)("span",{style:{border:"1px solid lightgrey",marginRight:10,height:20,width:20,display:"block",backgroundColor:e.color}})," ",Object(c.jsx)(Je,{children:e.name})]})}))})},Me=function(e){var t=e.visible,n=e.onSubmit,r=e.onImport,a=e.onCancel,s=ve.a.useForm(),o=Object(i.a)(s,1)[0];return Object(c.jsxs)(O.a,{title:"Add Range",visible:t,okText:"Create",onOk:function(){o.validateFields().then((function(e){var t=e.template,c=Object(fe.a)(e,["template"]);switch(t){case"rfi":Object.assign(c,Ne.rfi);break;case"vsbet":Object.assign(c,Ne.vsbet);break;default:console.debug("Creating range from scratch")}return n(c)})).then((function(){return o.resetFields()})).catch(console.debug)},onCancel:function(){o.resetFields(),a()},children:[Object(c.jsx)(Se,{onDropFiles:r,children:Object(c.jsxs)("div",{children:[Object(c.jsx)(Re.a,{style:{fontSize:52}}),Object(c.jsx)("h3",{children:"Drop your range file(s) here"})]})}),Object(c.jsx)(pe.a,{}),Object(c.jsxs)(ve.a,{initialValues:{template:"rfi"},layout:"vertical",form:o,children:[Object(c.jsx)(Pe,{level:5,style:{textAlign:"center"},children:"Or create a range manually"}),Object(c.jsx)(ve.a.Item,{label:"Range Name",required:!0,name:"title",rules:[{required:!0,message:"Please input a valid name for this range",min:1,max:80}],children:Object(c.jsx)(S.a,{placeholder:"6 Max Cash UTG RFI"})}),Object(c.jsx)(ve.a.Item,{label:"Range Author",required:!0,name:"author",rules:[{required:!0,message:"Please input an author for this range",min:1,max:48}],children:Object(c.jsx)(S.a,{placeholder:"Your Name"})}),Object(c.jsx)(ve.a.Item,{label:"Starting Template",required:!0,name:"template",children:Object(c.jsxs)(k.a,{placeholder:"Choose a template",children:[Object(c.jsx)(Ie,{value:"rfi",children:"RFI"}),Object(c.jsx)(Ie,{value:"vsbet",children:"vs bet"}),Object(c.jsx)(Ie,{value:"blank",children:"From scratch"})]})})]})]})},Ge=function(){var e=Object(j.g)(),t=Object(r.useState)([]),n=Object(i.a)(t,2),a=n[0],s=n[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),u=l[0],b=l[1],O=Object(r.useState)(10),f=Object(i.a)(O,2),g=f[0],m=f[1],x=Object(r.useState)(!1),p=Object(i.a)(x,2),y=p[0],T=p[1],S=Object(r.useState)(void 0),B=Object(i.a)(S,2),I=B[0],F=B[1],K=Object(r.useState)(!1),G=Object(i.a)(K,2),Q=G[0],q=G[1],L=Object(r.useState)([]),H=Object(i.a)(L,2),D=H[0],U=H[1],W=Object(r.useState)(0),_=Object(i.a)(W,2),z=_[0],Y=_[1];if(Object(r.useEffect)((function(){if(g>=3){$();var e=setInterval((function(){$()}),1e3*g);return function(){return clearInterval(e)}}}),[g,Y]),Object(r.useEffect)((function(){T(!0),oe.allDocs({include_docs:!0}).then((function(e){return e.rows.map((function(e){return e.doc}))})).then(s).catch((function(e){console.error(e),F("Unable to load ranges!")})).finally((function(){return T(!1)}))}),[T,F,s]),Object(r.useEffect)((function(){var e=function(e){var t=oe.changes({live:!0,since:"now",include_docs:!0});return t.on("change",e),t}((function(e){s((function(t){if(e.deleted)return t.filter((function(t){return t._id!==e.id}));var n=t.findIndex((function(t){return t._id===e.id}));return Object.assign([],t,Object(w.a)({},-1!==n?n:t.length,e.doc))}))}));return function(){return e.cancel()}}),[s]),I)return Object(c.jsx)(j.a,{to:"/notfound",state:{}});var $=function(){Y(E())},X=function(e){return function(e){return new Promise((function(t,n){var c=new FileReader;c.onload=function(e){t(e.target.result)},c.onerror=function(e){return n(e)},c.readAsText(e)}))}(e).then(JSON.parse).then((function(e){if(!V(e))throw new Error("Invalid range");return e}))},Z=function(e){var t=e.title,n=e.author,c=e.tags,r=void 0===c?[]:c,a=e.combos,s=void 0===a?{}:a,o=e.actions,i=void 0===o?[{name:"Fold",color:ce[0].value,inRange:!1},{name:"Call",color:ce[1].value,inRange:!0},{name:"Raise",color:ce[2].value,inRange:!0}]:o;return ie({title:t,author:n,tags:r,combos:s,actions:i}).catch((function(e){console.error(e),ge.b.error("Could not create range!")}))},ee=a.filter((function(e){return 0===D.length||D.every((function(t){return e.tags.includes(t)}))}));return Object(c.jsxs)("div",{children:[y&&Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(M,{})," Loading..."]}),!y&&Object(c.jsxs)(h.b,{direction:"vertical",style:{width:"100%"},children:[Object(c.jsx)("div",{className:"view-ranges-controls",children:Object(c.jsxs)(h.b,{children:[Object(c.jsx)(k.a,{value:D,placeholder:"Filter by tags...",mode:"multiple",allowClear:!0,onChange:U,children:Object(A.a)(new Set((a||[]).map((function(e){return e.tags})).flat())).sort().map((function(e){return Object(c.jsx)(Ie,{value:e,children:e},e)}))}),Object(c.jsx)(d.a,{icon:Object(c.jsx)(v.a,{}),onClick:function(){return q(!0)},children:"Add Range"})]})}),Object(c.jsxs)(h.b,{children:[Object(c.jsxs)("span",{children:["Frequency Mode: ",Object(c.jsx)(P.a,{checked:u,onChange:b})]}),Object(c.jsxs)("span",{children:["RNG: ",z," ",Object(c.jsx)(N.a,{title:"Refresh RNG Now",children:Object(c.jsx)(ye.a,{onClick:$})})]}),Object(c.jsxs)("span",{children:["RNG refresh rate: ",Object(c.jsx)(J.a,{min:3,precision:0,onChange:m,value:g})]})]}),0===ee.length?Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)(Pe,{level:3,children:"No Ranges Found"}),0===a.length&&Object(c.jsx)(Be,{children:"You don't have any ranges yet!"})]}):Object(c.jsx)(R.a,{gutter:[10,10],children:ee.map((function(e){return Object(c.jsx)(C.a,{xs:24,sm:12,md:8,lg:8,xl:6,xxl:4,children:Object(c.jsx)(Fe,{range:e,frequencyMode:u})},e._id)}))})]}),Object(c.jsx)(Me,{onImport:function(e){return Promise.all(e.map(X)).then((function(e){return e.forEach(Z)})).then((function(){return ge.b.success("Import successful!")})).catch((function(e){console.log(e),ge.b.error("One or more of your range files are invalid!")}))},visible:Q,onSubmit:function(t){return Z(t).then((function(t){q(!1),e.push("/range/".concat(t._id))}))},onCancel:function(){return q(!1)}})]})},Qe=n.p+"static/media/overview.89be7a72.jpg",qe=n.p+"static/media/import.fa8277ce.jpg",Le=n.p+"static/media/weights.5a45ad37.jpg",He=n.p+"static/media/frequency.2570a01f.jpg",De=n.p+"static/media/download.5d86d378.jpg",Ee=(n(443),u.a.Title),Ue=u.a.Paragraph,We=u.a.Text,_e=new y.UAParser,ze=b.a.Header,Ye=b.a.Footer,$e=b.a.Content,Ve=function(e){switch(e){case"Mac":return Object(c.jsx)(m.a,{});case"Windows":return Object(c.jsx)(x.a,{});default:return Object(c.jsx)(c.Fragment,{})}},Xe=function(e){switch(e){case"Mac":return"dmg";case"Windows":return"exe";default:throw new Error("Unsupported OS: ".concat(e))}},Ze=["Mac","Windows"].find((function(e){return-1!==(_e.getOS().name||"").indexOf(e)}));var et=function(e){var t=e.visible,n=e.onClose,a=Object(r.useRef)(),s=function(){return Object(c.jsx)(d.a,{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.next()},children:"Next"})},o=function(){return Object(c.jsx)(d.a,{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.prev()},children:"Prev"})},i=function(){return Object(c.jsx)(d.a,{type:"primary",onClick:n,children:"Let's Go"})},l=function(e){var t=e.showPrev,n=void 0===t||t,r=e.showNext,a=void 0===r||r,l=e.showDone,j=void 0!==l&&l;return Object(c.jsxs)(h.b,{style:{display:"flex",justifyContent:"center"},children:[n&&Object(c.jsx)(o,{}),a&&Object(c.jsx)(s,{}),j&&Object(c.jsx)(i,{})]})},j=function(e){var t=e.src,n=e.alt,r=e.width,a=void 0===r?"100%":r;return Object(c.jsx)("img",{src:t,width:a,style:{margin:"auto",marginBottom:15,display:"block"},alt:n})};return Object(c.jsx)(O.a,{onCancel:n,afterClose:n,visible:t,footer:null,children:Object(c.jsxs)(f.a,{dotPosition:"top",dots:{className:"carousel-dots"},ref:a,children:[Object(c.jsxs)("div",{className:"intro-slide",children:[Object(c.jsx)(Ee,{level:3,children:"Welcome to the Range Assistant"}),Object(c.jsx)(j,{src:Qe,alt:"homepage overview"}),Object(c.jsx)(Ue,{children:"Use this web app to construct and view balanced Texas Hold'em preflop ranges. You can download your ranges to share with others, transfer them to other devices or browsers, or for use with the Hold'em Poker Tools Range Assistant desktop app."}),Object(c.jsx)(l,{showPrev:!1,showNext:!0,showDone:!1})]}),Object(c.jsxs)("div",{className:"intro-slide",children:[Object(c.jsx)(Ee,{level:3,children:"Import or Create New Ranges"}),Object(c.jsx)(j,{src:qe,alt:"frequency mode"}),Object(c.jsxs)(Ue,{children:["Use the ",Object(c.jsx)(v.a,{})," Add Range button to get started adding new ranges to your database. You can then import a range by dragging and dropping a previously exported ",Object(c.jsx)(We,{code:!0,children:" .range"})," file or create a new range using from a template. You can also duplicate existing ranges using the ",Object(c.jsx)(p.a,{})," button."]}),Object(c.jsx)(l,{showPrev:!0,showNext:!0,showDone:!1})]}),Object(c.jsxs)("div",{className:"intro-slide",children:[Object(c.jsx)(Ee,{level:3,children:"Assign Combo Weights"}),Object(c.jsx)(j,{src:Le,alt:"frequency mode"}),Object(c.jsx)(Ue,{children:"Build balanced ranges by mixing your preflop actions for certain combos. For example, if you wish to mix between calling and 3 betting A5s, you simply click A5s in the combo matrix to select it and assign each action (call and 3 Bet) an even weight of 1 and the range viewer will display the action weights in the hand matrix."}),Object(c.jsx)(l,{showPrev:!0,showNext:!0,showDone:!1})]}),Object(c.jsxs)("div",{className:"intro-slide",children:[Object(c.jsx)(Ee,{level:3,children:"Frequency Mode"}),Object(c.jsx)(j,{src:He,alt:"frequency mode"}),Object(c.jsxs)(Ue,{children:["When viewing your ranges from the ",Object(c.jsx)(We,{strong:!0,children:"My Ranges"}),' page, a "sample" of your range will be displayed by default i.e. if a given combo is 50/50 weighted between fold and open, the app uses an RNG to determine which action to take. The RNG is automatically refreshed periodically. However if you wish to view the frequencies to make the decision yourself, you can simply toggle on frequency mode.']}),Object(c.jsx)(l,{showPrev:!0,showNext:!0,showDone:!1})]}),Object(c.jsxs)("div",{className:"intro-slide",children:[Object(c.jsx)(Ee,{level:3,children:"Download and Share Your Ranges"}),Object(c.jsx)(j,{src:De,alt:"frequency mode"}),Object(c.jsx)(Ue,{children:Object(c.jsx)(g.a,{className:"gutter",type:"warning",message:Object(c.jsxs)(We,{children:[Object(c.jsx)(We,{strong:!0,children:" IMPORTANT: "}),"Your ranges are stored locally in your browser and will",Object(c.jsx)(We,{strong:!0,children:" not "})," be accessible across devices/different browsers. You should download your ranges to back them up and import them on different devices."]})})}),Object(c.jsx)(l,{showPrev:!0,showNext:!1,showDone:!0})]})]})})},tt=function(e){var t=e.onOpenHelp;return Object(c.jsxs)(ze,{className:"site-layout-header",children:[Object(c.jsx)("img",{alt:"logo",height:"60",src:"./logo512.png"}),Object(c.jsxs)(l.b,{to:"/",className:"logo-text",children:[Object(c.jsx)("span",{style:{color:"#000"},children:"Hold'em Poker Tools"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{style:{color:"#bd2829"},children:"Range Assistant"})]}),Object(c.jsx)("div",{className:"spacer"}),Object(c.jsx)(l.b,{to:"/",className:"ant-btn-link",children:"My Ranges"}),Object(c.jsx)(d.a,{onClick:t,type:"link",children:"How to Use"})]})},nt=function(){return Object(c.jsxs)(Ye,{style:{textAlign:"center"},children:[Object(c.jsx)(We,{children:"Hold'em Poker Tools: Range Assistant \xa92020"}),Object(c.jsx)("br",{}),Object(c.jsx)(We,{children:"Hold'em Poker Tools projects are free for everyone to use. Show your support on Buy Me a Coffee!"}),Object(c.jsx)("br",{}),Object(c.jsxs)(h.b,{children:[Object(c.jsx)("a",{href:"https://www.buymeacoffee.com/holdemtools",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{src:"https://cdn.buymeacoffee.com/buttons/default-red.png",alt:"Buy Me A Coffee",style:{height:41,width:174,borderRadius:5}})}),Ze&&Object(c.jsxs)(d.a,{href:"https://github.com/HoldemPokerTools/RangeAssistant/releases/latest/download/Range-Assistant.".concat(Xe(Ze)),target:"_blank",children:["Download Range Assistant for ",Ve(Ze)," ",Ze]})]})]})},ct=function(){var e=Object(r.useState)(!localStorage.getItem("showIntro")),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)(b.a,{style:{minHeight:"100vh"},children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(tt,{onOpenHelp:function(){return a(!0)}}),Object(c.jsx)($e,{className:"content",children:Object(c.jsxs)("div",{className:"site-layout-content gutter",children:[Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{exact:!0,path:"/",children:Object(c.jsx)(Ge,{})}),Object(c.jsx)(j.b,{exact:!0,path:"/range/:rangeId",children:Object(c.jsx)(de,{})}),Object(c.jsx)(j.b,{path:"*",children:Object(c.jsx)(Oe,{})})]}),Object(c.jsx)(et,{visible:n,onClose:function(){a(!1),localStorage.setItem("showIntro",1)}})]})}),Object(c.jsx)(nt,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ct,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[459,1,2]]]);
//# sourceMappingURL=main.30a2cfce.chunk.js.map