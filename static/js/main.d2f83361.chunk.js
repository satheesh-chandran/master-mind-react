(this["webpackJsonpmaster-mind-react"]=this["webpackJsonpmaster-mind-react"]||[]).push([[0],[,,function(e,t){e.exports={CHANCES:10,NUM_OF_COLORS:5,DEFAULT:"white",EXACT:"red",PRESENCE:"grey"}},,,,,,,,,,,function(e,t,r){e.exports=r(21)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),c=r(10),a=r.n(c),l=(r(18),r(19),r(11)),s=r(3),i=r(4),u=r(1),m=r(6),h=r(5),C=function(e){var t=e.color,r=e.onClick;return n.a.createElement("div",{className:"hole",style:{backgroundColor:t},onClick:r?function(){return r(t)}:function(){}})},v=r(2),f=function(e){var t=e.codeColor,r=e.isGameOver,o=t.map((function(e,o){return n.a.createElement(C,{key:e,color:r?t[o]:v.DEFAULT})}));return n.a.createElement("div",{className:"codeRow"},o)},d=["red","brown","blue","orange","green","purple","yellow","pink"],k=function(e){var t=e.onClick,r=d.map((function(e){return n.a.createElement(C,{key:"source_".concat(e),color:e,onClick:t})}));return n.a.createElement("div",{className:"sourceRow"},r)},E=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(e){var o;return Object(s.a)(this,r),(o=t.call(this,e)).state={color:v.DEFAULT},o.handleClick=o.handleClick.bind(Object(u.a)(o)),o}return Object(i.a)(r,[{key:"handleClick",value:function(){var e=this.props,t=e.onClick,r=e.color,o=e.position;this.setState({color:r}),t(r,o)}},{key:"render",value:function(){return n.a.createElement("div",{className:"playHole",style:{backgroundColor:this.state.color},onClick:this.handleClick})}}]),r}(n.a.Component),O=function(e,t){return Array.from(new Array(t-e),(function(t,r){return e+r}))},p=r(2).NUM_OF_COLORS,b=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(e){var o;return Object(s.a)(this,r),(o=t.call(this,e)).state={colors:new Array(p)},o.storeColors=o.storeColors.bind(Object(u.a)(o)),o.submitColors=o.submitColors.bind(Object(u.a)(o)),o}return Object(i.a)(r,[{key:"submitColors",value:function(){if(this.state.colors.filter((function(e){return e})).length!==p)return alert("Fill The Colors");this.props.checkColors(this.state.colors,this.props.parentId)}},{key:"storeColors",value:function(e,t){this.setState((function(r){var o=r.colors.slice();return o[t]=e,{colors:o}}))}},{key:"render",value:function(){var e=this,t=this.props,r=t.parentId,o=t.color,c=t.turn,a=t.isGameOver,l=O(0,p).map((function(t){return n.a.createElement(E,{key:"".concat(r,"_").concat(t),color:o,position:t,onClick:e.storeColors})}));return n.a.createElement("div",{className:"playRow ".concat(r===c?"":"inActive")},l,n.a.createElement("button",{className:r!==c||a?"invisible":"",onClick:this.submitColors},"CHECK"))}}]),r}(n.a.Component),y=r(2).CHANCES,N=function(e){var t=e.color,r=e.turn,o=e.checkColors,c=e.isGameOver,a=O(0,y).map((function(e){return n.a.createElement(b,{key:e,parentId:e,color:t,turn:r,checkColors:o,isGameOver:c})}));return n.a.createElement("div",{className:"playBoard"},a)},j=r(12),S=r(2),w=S.NUM_OF_COLORS,A=S.EXACT,R=S.PRESENCE,g=S.DEFAULT,_=function(e,t){return new Array(e).fill(t)},G=function(e){var t=e.result||[0,0],r=Object(j.a)(t,2),o=r[0],c=r[1],a=_(c,A).concat(_(o,R)),l=O(0,w).map((function(e){return n.a.createElement(C,{key:"resultHole_".concat(e),color:a[e]||g})}));return n.a.createElement("div",{className:"resultRow"},l)},F=r(2).CHANCES,L=function(e){var t=e.checkResult,r=O(0,F).map((function(e){return n.a.createElement(G,{key:"result_".concat(e),parentId:e,result:t[e]})}));return n.a.createElement("div",{className:"resultBoard"},r)},U=r(2),T=U.CHANCES,M=U.NUM_OF_COLORS,H=function(e,t){var r=Math.random()*(t-e);return Math.floor(r+e)},W=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(e){var o;return Object(s.a)(this,r),(o=t.call(this,e)).state={turn:0,isWon:!1,color:void 0,checkResult:[],isGameOver:!1},o.codeColor=function(){for(var e=d.slice(),t=[];t.length<M;){var r=H(0,e.length);t.push(e[r]),e.splice(r,1)}return t}(),o.selectColor=o.selectColor.bind(Object(u.a)(o)),o.checkColors=o.checkColors.bind(Object(u.a)(o)),o}return Object(i.a)(r,[{key:"checkColors",value:function(e,t){var r=this;if(this.state.turn===t){this.state.turn>=T-1&&this.setState({isGameOver:!0});var o=[0,0];e.forEach((function(e){return r.codeColor.includes(e)&&o[0]++})),e.forEach((function(e,t){return e===r.codeColor[t]&&o[0]--&&o[1]++})),o[1]===M&&this.setState({isWon:!0,isGameOver:!0});var n=this.state,c=n.turn,a=n.checkResult;this.setState({checkResult:[].concat(Object(l.a)(a),[o]),turn:c+1})}}},{key:"selectColor",value:function(e){this.setState({color:e})}},{key:"render",value:function(){var e=this.state,t=e.isGameOver,r=e.turn,o=e.isWon,c=e.color;return n.a.createElement("div",{className:"controller"},n.a.createElement(f,{codeColor:this.codeColor,isGameOver:t}),n.a.createElement("div",{className:"board ".concat(t?"inActive":"")},n.a.createElement(N,{color:c,turn:r,checkColors:this.checkColors,isGameOver:t}),n.a.createElement(L,{checkResult:this.state.checkResult})),n.a.createElement(k,{codeColor:this.codeColor,isGameOver:t,onClick:this.selectColor}),n.a.createElement("h3",null,function(e,t,r){var o="".concat(T-e," MOVES LEFT");return t&&(o="YOU LOST"),r&&(o="YOU WON"),o}(r,t,o)))}}]),r}(n.a.Component),I=(r(20),function(e){return n.a.createElement(W,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d2f83361.chunk.js.map