(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"0zqC":function(e,a,t){"use strict";t.r(a);var n=t("tJVT"),l=t("q1tI"),r=t.n(l),c=t("k3GJ"),o=t("MZF8"),m=t("dEAq"),d=t("ZpkN");t("TIsu");function i(e,a){var t,n=null===(t=e.match(/\.(\w+)$/))||void 0===t?void 0:t[1];return n||(n=a.tsx?"tsx":"jsx"),n}var u=e=>{var a,t,u,s=Object(l["useRef"])(),f=Object(l["useContext"])(m["context"]),E=f.locale,p=Object(m["useLocaleProps"])(E,e),b=Object(m["useDemoUrl"])(p.identifier),w=p.demoUrl||b,v=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(p.identifier),h=1===Object.keys(p.sources).length,k=Object(m["useCodeSandbox"])(null!==(a=p.hideActions)&&void 0!==a&&a.includes("CSB")?null:p),_=Object(m["useRiddle"])(null!==(t=p.hideActions)&&void 0!==t&&t.includes("RIDDLE")?null:p),N=Object(m["useMotions"])(p.motions||[],s.current),O=Object(n["default"])(N,2),j=O[0],x=O[1],g=Object(m["useCopy"])(),y=Object(n["default"])(g,2),C=y[0],I=y[1],A=Object(l["useState"])("_"),L=Object(n["default"])(A,2),P=L[0],S=L[1],T=Object(l["useState"])(i(P,p.sources[P])),q=Object(n["default"])(T,2),R=q[0],J=q[1],M=Object(l["useState"])(Boolean(p.defaultShowCode)),B=Object(n["default"])(M,2),D=B[0],z=B[1],F=Object(l["useState"])(Math.random()),U=Object(n["default"])(F,2),$=U[0],G=U[1],X=p.sources[P][R]||p.sources[P].content,Z=Object(m["useTSPlaygroundUrl"])(E,X),H=Object(l["useRef"])(),K=Object(m["usePrefersColor"])(),V=Object(n["default"])(K,1),Q=V[0];function W(e){S(e),J(i(e,p.sources[e]))}return Object(l["useEffect"])((()=>{G(Math.random())}),[Q]),r.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",v?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:$,src:w,ref:H}):p.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&r.a.createElement(m["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},k&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),_&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:_}),p.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:x,onClick:()=>j()}),p.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>G(Math.random())}),!(null!==(u=p.hideActions)&&void 0!==u&&u.includes("EXTERNAL"))&&r.a.createElement(m["Link"],{target:"_blank",to:w},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":I,onClick:()=>C(X)}),"tsx"===R&&D&&r.a.createElement(m["Link"],{target:"_blank",to:Z},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(D?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>z(!D)})),D&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.a.createElement(c["default"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:P,onChange:W},Object.keys(p.sources).map((e=>r.a.createElement(c["TabPane"],{tab:"_"===e?"index.".concat(i(e,p.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(d["a"],{code:X,lang:R,showCopy:!1}))))};a["default"]=u},BknO:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("dEAq"),c=t("0zqC"),o=t("JjdP"),m=l.a.memo(o["default"]["new-feature-demo"].component),d=l.a.memo(o["default"]["new-feature-demo-1"].component),i=l.a.memo(o["default"]["new-feature-demo-2"].component),u=l.a.memo(o["default"]["new-feature-demo-3"].component),s=l.a.memo(o["default"]["new-feature-demo-4"].component),f=l.a.memo(o["default"]["new-feature-demo-5"].component),E=l.a.memo(o["default"]["new-feature-demo-6"].component),p=l.a.memo(o["default"]["new-feature-demo-7"].component),b=l.a.memo(o["default"]["new-feature-demo-8"].component),w=l.a.memo(o["default"]["new-feature-demo-9"].component);a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u65b0\u529f\u80fd"},l.a.createElement(r["AnchorLink"],{to:"#\u65b0\u529f\u80fd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u65b0\u529f\u80fd"),l.a.createElement("h2",{id:"0100"},l.a.createElement(r["AnchorLink"],{to:"#0100","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"0.10.0"),l.a.createElement("p",null,"\u65b0\u589e\u4e86 validator \u5b57\u6bb5\uff0c\u7528\u4e8e\u52a8\u6001\u6821\u9a8c")),l.a.createElement(c["default"],o["default"]["new-feature-demo"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"091"},l.a.createElement(r["AnchorLink"],{to:"#091","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"0.9.1"),l.a.createElement("p",null,"\u65b0\u589e\u4e86 ",l.a.createElement("code",null,"{",' format: "email"/"url"/"image" ',"}"))),l.a.createElement(c["default"],o["default"]["new-feature-demo-1"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"0811"},l.a.createElement(r["AnchorLink"],{to:"#0811","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"0.8.11"),l.a.createElement("p",null,"\u5c5e\u6027",l.a.createElement("code",null,"ui:column"),"\u3001",l.a.createElement("code",null,"ui:displayType"),"\u3001",l.a.createElement("code",null,"ui:showDescIcon")," \u652f\u6301\u5c5e\u6027\u5c40\u90e8\u63a7\u5236\u3002\u539f\u672c\u53ea\u80fd\u901a\u8fc7 props \u5168\u5c40\u63a7\u5236")),l.a.createElement(c["default"],o["default"]["new-feature-demo-2"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"089"},l.a.createElement(r["AnchorLink"],{to:"#089","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"0.8.9"),l.a.createElement("p",null,"\u957f\u5217\u8868\u4f1a\u81ea\u52a8\u5206\u9875, \u53ef\u901a\u8fc7 ",l.a.createElement("code",null,"ui:options/pageSize")," \u6765\u63a7\u5236\u6bcf\u9875\u5c55\u793a\u6570\u91cf")),l.a.createElement(c["default"],o["default"]["new-feature-demo-3"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"081"},l.a.createElement(r["AnchorLink"],{to:"#081","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"0.8.1"),l.a.createElement("p",null,"\u73b0\u5728\u6240\u6709\u7ec4\u4ef6\u5e93\u7684\u5c5e\u6027\u90fd\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"ui:options")," \u652f\u6301")),l.a.createElement(c["default"],o["default"]["new-feature-demo-4"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"\u8bbe default \u4e3a null\uff0c\u5373\u53ef\u8ba9\u5355\u9009\u7ec4\u4ef6\u4e0d\u9ed8\u8ba4\u9009\u62e9\u7b2c\u4e00\u9879")),l.a.createElement(c["default"],o["default"]["new-feature-demo-5"].previewerProps,l.a.createElement(f,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("p",null,"uniqueItems \u73b0\u5728\u652f\u6301\u590d\u6742\u7684\u5224\u65ad")),l.a.createElement(c["default"],o["default"]["new-feature-demo-6"].previewerProps,l.a.createElement(E,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"072"},l.a.createElement(r["AnchorLink"],{to:"#072","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"0.7.2"),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement("code",null,"maxLength")," \u5c55\u793a\u5b57\u6570\u63d0\u793a"),l.a.createElement("li",null,l.a.createElement("code",null,'"ui:options"/ buttons')," \u652f\u6301\u6240\u6709 antd/fusion \u7684 button \u7684 props"))),l.a.createElement(c["default"],o["default"]["new-feature-demo-7"].previewerProps,l.a.createElement(p,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u5f39\u5c42\u5c55\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u5f39\u5c42\u5c55\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5f39\u5c42\u5c55\u793a"),l.a.createElement("p",null,"\u4e00\u822c\u7528\u4e8e\u590d\u6742\u7ed3\u6784, \u652f\u6301 ",l.a.createElement("code",null,"modal")," \u548c ",l.a.createElement("code",null,"drawer"))),l.a.createElement(c["default"],o["default"]["new-feature-demo-8"].previewerProps,l.a.createElement(b,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"html"},l.a.createElement(r["AnchorLink"],{to:"#html","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"html"),l.a.createElement("p",null,"\u7eaf text \u5c55\u793a\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u7ec4\u4ef6")),l.a.createElement(c["default"],o["default"]["new-feature-demo-9"].previewerProps,l.a.createElement(w,null))))}},TIsu:function(e,a,t){}}]);