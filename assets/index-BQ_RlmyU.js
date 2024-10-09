import{F as L,_ as Y,ax as J,ay as $,az as C,o as Q,aA as X,aB as Z,r as s,aC as E,G as ee,P as A,h as D,C as I,at as te,R as T,aD as ne}from"./index-DjjOTPdH.js";import{c as oe}from"./reactNode-0E1vl4g6.js";const Se=e=>{const[,,,,t]=L();return t?`${e}-css-var`:""};var h=Y({},J),re=h.version,se=h.render,ae=h.unmountComponentAtNode,_;try{var ie=Number((re||"").split(".")[0]);ie>=18&&(_=h.createRoot)}catch{}function O(e){var t=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&Q(t)==="object"&&(t.usingClientEntryPoint=e)}var g="__rc_react_root__";function ue(e,t){O(!0);var n=t[g]||_(t);O(!1),n.render(e),t[g]=n}function ce(e,t){se(e,t)}function le(e,t){if(_){ue(e,t);return}ce(e,t)}function de(e){return w.apply(this,arguments)}function w(){return w=$(C().mark(function e(t){return C().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Promise.resolve().then(function(){var r;(r=t[g])===null||r===void 0||r.unmount(),delete t[g]}));case 1:case"end":return o.stop()}},e)})),w.apply(this,arguments)}function fe(e){ae(e)}function pe(e){return N.apply(this,arguments)}function N(){return N=$(C().mark(function e(t){return C().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(_===void 0){o.next=2;break}return o.abrupt("return",de(t));case 2:fe(t);case 3:case"end":return o.stop()}},e)})),N.apply(this,arguments)}const ve=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),n=t.width,o=t.height;if(n||o)return!0}if(e.getBoundingClientRect){var r=e.getBoundingClientRect(),u=r.width,l=r.height;if(u||l)return!0}}return!1},me=e=>{const{componentCls:t,colorPrimary:n}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${n})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},be=X("Wave",e=>[me(e)]),k=`${Z}-wave-target`;function he(e){const t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function y(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&he(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function Re(e){const{borderTopColor:t,borderColor:n,backgroundColor:o}=getComputedStyle(e);return y(t)?t:y(n)?n:y(o)?o:null}function S(e){return Number.isNaN(e)?0:e}const Ce=e=>{const{className:t,target:n,component:o}=e,r=s.useRef(null),[u,l]=s.useState(null),[p,R]=s.useState([]),[d,a]=s.useState(0),[v,m]=s.useState(0),[B,P]=s.useState(0),[U,j]=s.useState(0),[F,z]=s.useState(!1),W={left:d,top:v,width:B,height:U,borderRadius:p.map(c=>`${c}px`).join(" ")};u&&(W["--wave-color"]=u);function x(){const c=getComputedStyle(n);l(Re(n));const i=c.position==="static",{borderLeftWidth:f,borderTopWidth:b}=c;a(i?n.offsetLeft:S(-parseFloat(f))),m(i?n.offsetTop:S(-parseFloat(b))),P(n.offsetWidth),j(n.offsetHeight);const{borderTopLeftRadius:q,borderTopRightRadius:G,borderBottomLeftRadius:M,borderBottomRightRadius:H}=c;R([q,G,H,M].map(K=>S(parseFloat(K))))}if(s.useEffect(()=>{if(n){const c=E(()=>{x(),z(!0)});let i;return typeof ResizeObserver<"u"&&(i=new ResizeObserver(x),i.observe(n)),()=>{E.cancel(c),i==null||i.disconnect()}}},[]),!F)return null;const V=(o==="Checkbox"||o==="Radio")&&(n==null?void 0:n.classList.contains(k));return s.createElement(ee,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(c,i)=>{var f;if(i.deadline||i.propertyName==="opacity"){const b=(f=r.current)===null||f===void 0?void 0:f.parentElement;pe(b).then(()=>{b==null||b.remove()})}return!1}},(c,i)=>{let{className:f}=c;return s.createElement("div",{ref:A(r,i),className:D(t,f,{"wave-quick":V}),style:W})})},Ee=(e,t)=>{var n;const{component:o}=t;if(o==="Checkbox"&&!(!((n=e.querySelector("input"))===null||n===void 0)&&n.checked))return;const r=document.createElement("div");r.style.position="absolute",r.style.left="0px",r.style.top="0px",e==null||e.insertBefore(r,e==null?void 0:e.firstChild),le(s.createElement(Ce,Object.assign({},t,{target:e})),r)},ge=(e,t,n)=>{const{wave:o}=s.useContext(I),[,r,u]=L(),l=te(d=>{const a=e.current;if(o!=null&&o.disabled||!a)return;const v=a.querySelector(`.${k}`)||a,{showEffect:m}=o||{};(m||Ee)(v,{className:t,token:r,component:n,event:d,hashId:u})}),p=s.useRef();return d=>{E.cancel(p.current),p.current=E(()=>{l(d)})}},we=e=>{const{children:t,disabled:n,component:o}=e,{getPrefixCls:r}=s.useContext(I),u=s.useRef(null),l=r("wave"),[,p]=be(l),R=ge(u,D(l,p),o);if(T.useEffect(()=>{const a=u.current;if(!a||a.nodeType!==1||n)return;const v=m=>{!ve(m.target)||!a.getAttribute||a.getAttribute("disabled")||a.disabled||a.className.includes("disabled")||a.className.includes("-leave")||R(m)};return a.addEventListener("click",v,!0),()=>{a.removeEventListener("click",v,!0)}},[n]),!T.isValidElement(t))return t??null;const d=ne(t)?A(t.ref,u):u;return oe(t,{ref:d})};export{k as T,we as W,pe as a,le as r,Se as u};
