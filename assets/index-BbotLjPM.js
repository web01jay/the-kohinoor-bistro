import{R as y,_ as s,e as D,f as N,g as A,h as M,i as j,k as S,l as O,m as Y,n as q,o as Se,p as ye,q as me,s as we,t as ke,v as be,r as x,C as Ce}from"./index-BHLIkHmc.js";import{d as Te}from"./index-CUWDS_la.js";import{i as Le}from"./ResizeObserver.es-B1PUzC5B.js";var xe={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},J={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(t){return y.createElement("ul",{style:{display:"block"}},t)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(t){return y.createElement("button",null,t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};function ee(o,t,r){return Math.max(t,Math.min(o,r))}var I=function(t){var r=["onTouchStart","onTouchMove","onWheel"];r.includes(t._reactName)||t.preventDefault()},G=function(t){for(var r=[],e=ue(t),l=ce(t),i=e;i<l;i++)t.lazyLoadedList.indexOf(i)<0&&r.push(i);return r},ue=function(t){return t.currentSlide-Ee(t)},ce=function(t){return t.currentSlide+Me(t)},Ee=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},Me=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},te=function(t){return t&&t.offsetWidth||0},re=function(t){return t&&t.offsetHeight||0},fe=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e,l,i,n;return e=t.startX-t.curX,l=t.startY-t.curY,i=Math.atan2(l,e),n=Math.round(i*180/Math.PI),n<0&&(n=360-Math.abs(n)),n<=45&&n>=0||n<=360&&n>=315?"left":n>=135&&n<=225?"right":r===!0?n>=35&&n<=135?"up":"down":"vertical"},U=function(t){var r=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(r=!1),r},_=function(t,r){var e={};return r.forEach(function(l){return e[l]=t[l]}),e},Oe=function(t){var r=y.Children.count(t.children),e=t.listRef,l=Math.ceil(te(e)),i=t.trackRef&&t.trackRef.node,n=Math.ceil(te(i)),a;if(t.vertical)a=l;else{var d=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(d*=l/100),a=Math.ceil((l-d)/t.slidesToShow)}var v=e&&re(e.querySelector('[data-index="0"]')),h=v*t.slidesToShow,c=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(c=r-1-t.initialSlide);var m=t.lazyLoadedList||[],w=G(s(s({},t),{},{currentSlide:c,lazyLoadedList:m}));m=m.concat(w);var g={slideCount:r,slideWidth:a,listWidth:l,trackWidth:n,currentSlide:c,slideHeight:v,listHeight:h,lazyLoadedList:m};return t.autoplaying===null&&t.autoplay&&(g.autoplaying="playing"),g},ze=function(t){var r=t.waitForAnimate,e=t.animating,l=t.fade,i=t.infinite,n=t.index,a=t.slideCount,d=t.lazyLoad,v=t.currentSlide,h=t.centerMode,c=t.slidesToScroll,m=t.slidesToShow,w=t.useCSS,g=t.lazyLoadedList;if(r&&e)return{};var f=n,p,k,u,b={},C={},T=i?n:ee(n,0,a-1);if(l){if(!i&&(n<0||n>=a))return{};n<0?f=n+a:n>=a&&(f=n-a),d&&g.indexOf(f)<0&&(g=g.concat(f)),b={animating:!0,currentSlide:f,lazyLoadedList:g,targetSlide:f},C={animating:!1,targetSlide:f}}else p=f,f<0?(p=f+a,i?a%c!==0&&(p=a-a%c):p=0):!U(t)&&f>v?f=p=v:h&&f>=a?(f=i?a:a-1,p=i?0:a-1):f>=a&&(p=f-a,i?a%c!==0&&(p=0):p=a-m),!i&&f+m>=a&&(p=a-m),k=$(s(s({},t),{},{slideIndex:f})),u=$(s(s({},t),{},{slideIndex:p})),i||(k===u&&(f=p),k=u),d&&(g=g.concat(G(s(s({},t),{},{currentSlide:f})))),w?(b={animating:!0,currentSlide:p,trackStyle:ve(s(s({},t),{},{left:k})),lazyLoadedList:g,targetSlide:T},C={animating:!1,currentSlide:p,trackStyle:X(s(s({},t),{},{left:u})),swipeLeft:null,targetSlide:T}):b={currentSlide:p,trackStyle:X(s(s({},t),{},{left:u})),lazyLoadedList:g,targetSlide:T};return{state:b,nextState:C}},He=function(t,r){var e,l,i,n,a,d=t.slidesToScroll,v=t.slidesToShow,h=t.slideCount,c=t.currentSlide,m=t.targetSlide,w=t.lazyLoad,g=t.infinite;if(n=h%d!==0,e=n?0:(h-c)%d,r.message==="previous")i=e===0?d:v-e,a=c-i,w&&!g&&(l=c-i,a=l===-1?h-1:l),g||(a=m-d);else if(r.message==="next")i=e===0?d:e,a=c+i,w&&!g&&(a=(c+d)%h+e),g||(a=m+d);else if(r.message==="dots")a=r.index*r.slidesToScroll;else if(r.message==="children"){if(a=r.index,g){var f=Ne(s(s({},t),{},{targetSlide:a}));a>r.currentSlide&&f==="left"?a=a-h:a<r.currentSlide&&f==="right"&&(a=a+h)}}else r.message==="index"&&(a=Number(r.index));return a},We=function(t,r,e){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!r?"":t.keyCode===37?e?"next":"previous":t.keyCode===39?e?"previous":"next":""},Pe=function(t,r,e){return t.target.tagName==="IMG"&&I(t),!r||!e&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}},Re=function(t,r){var e=r.scrolling,l=r.animating,i=r.vertical,n=r.swipeToSlide,a=r.verticalSwiping,d=r.rtl,v=r.currentSlide,h=r.edgeFriction,c=r.edgeDragged,m=r.onEdge,w=r.swiped,g=r.swiping,f=r.slideCount,p=r.slidesToScroll,k=r.infinite,u=r.touchObject,b=r.swipeEvent,C=r.listHeight,T=r.listWidth;if(!e){if(l)return I(t);i&&n&&a&&I(t);var L,z={},R=$(r);u.curX=t.touches?t.touches[0].pageX:t.clientX,u.curY=t.touches?t.touches[0].pageY:t.clientY,u.swipeLength=Math.round(Math.sqrt(Math.pow(u.curX-u.startX,2)));var F=Math.round(Math.sqrt(Math.pow(u.curY-u.startY,2)));if(!a&&!g&&F>10)return{scrolling:!0};a&&(u.swipeLength=F);var W=(d?-1:1)*(u.curX>u.startX?1:-1);a&&(W=u.curY>u.startY?1:-1);var K=Math.ceil(f/p),E=fe(r.touchObject,a),P=u.swipeLength;return k||(v===0&&(E==="right"||E==="down")||v+1>=K&&(E==="left"||E==="up")||!U(r)&&(E==="left"||E==="up"))&&(P=u.swipeLength*h,c===!1&&m&&(m(E),z.edgeDragged=!0)),!w&&b&&(b(E),z.swiped=!0),i?L=R+P*(C/T)*W:d?L=R-P*W:L=R+P*W,a&&(L=R+P*W),z=s(s({},z),{},{touchObject:u,swipeLeft:L,trackStyle:X(s(s({},r),{},{left:L}))}),Math.abs(u.curX-u.startX)<Math.abs(u.curY-u.startY)*.8||u.swipeLength>10&&(z.swiping=!0,I(t)),z}},Ie=function(t,r){var e=r.dragging,l=r.swipe,i=r.touchObject,n=r.listWidth,a=r.touchThreshold,d=r.verticalSwiping,v=r.listHeight,h=r.swipeToSlide,c=r.scrolling,m=r.onSwipe,w=r.targetSlide,g=r.currentSlide,f=r.infinite;if(!e)return l&&I(t),{};var p=d?v/a:n/a,k=fe(i,d),u={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(c||!i.swipeLength)return u;if(i.swipeLength>p){I(t),m&&m(k);var b,C,T=f?g:w;switch(k){case"left":case"up":C=T+ae(r),b=h?ne(r,C):C,u.currentDirection=0;break;case"right":case"down":C=T-ae(r),b=h?ne(r,C):C,u.currentDirection=1;break;default:b=T}u.triggerSlideHandler=b}else{var L=$(r);u.trackStyle=ve(s(s({},r),{},{left:L}))}return u},Ae=function(t){for(var r=t.infinite?t.slideCount*2:t.slideCount,e=t.infinite?t.slidesToShow*-1:0,l=t.infinite?t.slidesToShow*-1:0,i=[];e<r;)i.push(e),e=l+t.slidesToScroll,l+=Math.min(t.slidesToScroll,t.slidesToShow);return i},ne=function(t,r){var e=Ae(t),l=0;if(r>e[e.length-1])r=e[e.length-1];else for(var i in e){if(r<e[i]){r=l;break}l=e[i]}return r},ae=function(t){var r=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var e,l=t.listRef,i=l.querySelectorAll&&l.querySelectorAll(".slick-slide")||[];if(Array.from(i).every(function(d){if(t.vertical){if(d.offsetTop+re(d)/2>t.swipeLeft*-1)return e=d,!1}else if(d.offsetLeft-r+te(d)/2>t.swipeLeft*-1)return e=d,!1;return!0}),!e)return 0;var n=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(e.dataset.index-n)||1;return a}else return t.slidesToScroll},ie=function(t,r){return r.reduce(function(e,l){return e&&t.hasOwnProperty(l)},!0)?null:console.error("Keys Missing:",t)},X=function(t){ie(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r,e;if(!t.vertical)r=De(t)*t.slideWidth;else{var l=t.unslick?t.slideCount:t.slideCount+2*t.slidesToShow;e=l*t.slideHeight}var i={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var n=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",d=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";i=s(s({},i),{},{WebkitTransform:n,transform:a,msTransform:d})}else t.vertical?i.top=t.left:i.left=t.left;return t.fade&&(i={opacity:1}),r&&(i.width=r),e&&(i.height=e),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?i.marginTop=t.left+"px":i.marginLeft=t.left+"px"),i},ve=function(t){ie(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var r=X(t);return t.useTransform?(r.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,r.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?r.transition="top "+t.speed+"ms "+t.cssEase:r.transition="left "+t.speed+"ms "+t.cssEase,r},$=function(t){if(t.unslick)return 0;ie(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var r=t.slideIndex,e=t.trackRef,l=t.infinite,i=t.centerMode,n=t.slideCount,a=t.slidesToShow,d=t.slidesToScroll,v=t.slideWidth,h=t.listWidth,c=t.variableWidth,m=t.slideHeight,w=t.fade,g=t.vertical,f=0,p,k,u=0;if(w||t.slideCount===1)return 0;var b=0;if(l?(b=-H(t),n%d!==0&&r+d>n&&(b=-(r>n?a-(r-n):n%d)),i&&(b+=parseInt(a/2))):(n%d!==0&&r+d>n&&(b=a-n%d),i&&(b=parseInt(a/2))),f=b*v,u=b*m,g?p=r*m*-1+u:p=r*v*-1+f,c===!0){var C,T=e&&e.node;if(C=r+H(t),k=T&&T.childNodes[C],p=k?k.offsetLeft*-1:0,i===!0){C=l?r+H(t):r,k=T&&T.children[C],p=0;for(var L=0;L<C;L++)p-=T&&T.children[L]&&T.children[L].offsetWidth;p-=parseInt(t.centerPadding),p+=k&&(h-k.offsetWidth)/2}}return p},H=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},B=function(t){return t.unslick||!t.infinite?0:t.slideCount},De=function(t){return t.slideCount===1?1:H(t)+t.slideCount+B(t)},Ne=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+je(t)?"left":"right":t.targetSlide<t.currentSlide-Xe(t)?"right":"left"},je=function(t){var r=t.slidesToShow,e=t.centerMode,l=t.rtl,i=t.centerPadding;if(e){var n=(r-1)/2+1;return parseInt(i)>0&&(n+=1),l&&r%2===0&&(n+=1),n}return l?0:r-1},Xe=function(t){var r=t.slidesToShow,e=t.centerMode,l=t.rtl,i=t.centerPadding;if(e){var n=(r-1)/2+1;return parseInt(i)>0&&(n+=1),!l&&r%2===0&&(n+=1),n}return l?r-1:0},le=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},$e=Object.keys(J);function Ye(o){return $e.reduce(function(t,r){return o.hasOwnProperty(r)&&(t[r]=o[r]),t},{})}function qe(o,t,r){return t=O(t),Y(o,q()?Reflect.construct(t,r||[],O(o).constructor):t.apply(o,r))}var V=function(t){var r,e,l,i,n;t.rtl?n=t.slideCount-1-t.index:n=t.index,l=n<0||n>=t.slideCount,t.centerMode?(i=Math.floor(t.slidesToShow/2),e=(n-t.currentSlide)%t.slideCount===0,n>t.currentSlide-i-1&&n<=t.currentSlide+i&&(r=!0)):r=t.currentSlide<=n&&n<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var d=n===a;return{"slick-slide":!0,"slick-active":r,"slick-center":e,"slick-cloned":l,"slick-current":d}},Fe=function(t){var r={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(r.width=t.slideWidth),t.fade&&(r.position="relative",t.vertical&&t.slideHeight?r.top=-t.index*parseInt(t.slideHeight):r.left=-t.index*parseInt(t.slideWidth),r.opacity=t.currentSlide===t.index?1:0,r.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(r.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),r},Q=function(t,r){return t.key+"-"+r},Be=function(t){var r,e=[],l=[],i=[],n=y.Children.count(t.children),a=ue(t),d=ce(t);return y.Children.forEach(t.children,function(v,h){var c,m={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?c=v:c=y.createElement("div",null);var w=Fe(s(s({},t),{},{index:h})),g=c.props.className||"",f=V(s(s({},t),{},{index:h}));if(e.push(y.cloneElement(c,{key:"original"+Q(c,h),"data-index":h,className:M(f,g),tabIndex:"-1","aria-hidden":!f["slick-active"],style:s(s({outline:"none"},c.props.style||{}),w),onClick:function(u){c.props&&c.props.onClick&&c.props.onClick(u),t.focusOnSelect&&t.focusOnSelect(m)}})),t.infinite&&n>1&&t.fade===!1&&!t.unslick){var p=n-h;p<=H(t)&&(r=-p,r>=a&&(c=v),f=V(s(s({},t),{},{index:r})),l.push(y.cloneElement(c,{key:"precloned"+Q(c,r),"data-index":r,tabIndex:"-1",className:M(f,g),"aria-hidden":!f["slick-active"],style:s(s({},c.props.style||{}),w),onClick:function(u){c.props&&c.props.onClick&&c.props.onClick(u),t.focusOnSelect&&t.focusOnSelect(m)}}))),r=n+h,r<d&&(c=v),f=V(s(s({},t),{},{index:r})),i.push(y.cloneElement(c,{key:"postcloned"+Q(c,r),"data-index":r,tabIndex:"-1",className:M(f,g),"aria-hidden":!f["slick-active"],style:s(s({},c.props.style||{}),w),onClick:function(u){c.props&&c.props.onClick&&c.props.onClick(u),t.focusOnSelect&&t.focusOnSelect(m)}}))}}),t.rtl?l.concat(e,i).reverse():l.concat(e,i)},Ge=function(o){function t(){var r;j(this,t);for(var e=arguments.length,l=new Array(e),i=0;i<e;i++)l[i]=arguments[i];return r=qe(this,t,[].concat(l)),S(r,"node",null),S(r,"handleRef",function(n){r.node=n}),r}return D(t,o),N(t,[{key:"render",value:function(){var e=Be(this.props),l=this.props,i=l.onMouseEnter,n=l.onMouseOver,a=l.onMouseLeave,d={onMouseEnter:i,onMouseOver:n,onMouseLeave:a};return y.createElement("div",A({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},d),e)}}])}(y.PureComponent);function Ue(o,t,r){return t=O(t),Y(o,q()?Reflect.construct(t,r||[],O(o).constructor):t.apply(o,r))}var Ke=function(t){var r;return t.infinite?r=Math.ceil(t.slideCount/t.slidesToScroll):r=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,r},_e=function(o){function t(){return j(this,t),Ue(this,t,arguments)}return D(t,o),N(t,[{key:"clickHandler",value:function(e,l){l.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e=this.props,l=e.onMouseEnter,i=e.onMouseOver,n=e.onMouseLeave,a=e.infinite,d=e.slidesToScroll,v=e.slidesToShow,h=e.slideCount,c=e.currentSlide,m=Ke({slideCount:h,slidesToScroll:d,slidesToShow:v,infinite:a}),w={onMouseEnter:l,onMouseOver:i,onMouseLeave:n},g=[],f=0;f<m;f++){var p=(f+1)*d-1,k=a?p:ee(p,0,h-1),u=k-(d-1),b=a?u:ee(u,0,h-1),C=M({"slick-active":a?c>=b&&c<=k:c===b}),T={message:"dots",index:f,slidesToScroll:d,currentSlide:c},L=this.clickHandler.bind(this,T);g=g.concat(y.createElement("li",{key:f,className:C},y.cloneElement(this.props.customPaging(f),{onClick:L})))}return y.cloneElement(this.props.appendDots(g),s({className:this.props.dotsClass},w))}}])}(y.PureComponent);function he(o,t,r){return t=O(t),Y(o,q()?Reflect.construct(t,r||[],O(o).constructor):t.apply(o,r))}var Ve=function(o){function t(){return j(this,t),he(this,t,arguments)}return D(t,o),N(t,[{key:"clickHandler",value:function(e,l){l&&l.preventDefault(),this.props.clickHandler(e,l)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},l=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,l=null);var i={key:"0","data-role":"none",className:M(e),style:{display:"block"},onClick:l},n={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},a;return this.props.prevArrow?a=y.cloneElement(this.props.prevArrow,s(s({},i),n)):a=y.createElement("button",A({key:"0",type:"button"},i)," ","Previous"),a}}])}(y.PureComponent),Qe=function(o){function t(){return j(this,t),he(this,t,arguments)}return D(t,o),N(t,[{key:"clickHandler",value:function(e,l){l&&l.preventDefault(),this.props.clickHandler(e,l)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},l=this.clickHandler.bind(this,{message:"next"});U(this.props)||(e["slick-disabled"]=!0,l=null);var i={key:"1","data-role":"none",className:M(e),style:{display:"block"},onClick:l},n={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},a;return this.props.nextArrow?a=y.cloneElement(this.props.nextArrow,s(s({},i),n)):a=y.createElement("button",A({key:"1",type:"button"},i)," ","Next"),a}}])}(y.PureComponent),Ze=["animating"];function Je(o,t,r){return t=O(t),Y(o,q()?Reflect.construct(t,r||[],O(o).constructor):t.apply(o,r))}var et=function(o){function t(r){var e;j(this,t),e=Je(this,t,[r]),S(e,"listRefHandler",function(i){return e.list=i}),S(e,"trackRefHandler",function(i){return e.track=i}),S(e,"adaptHeight",function(){if(e.props.adaptiveHeight&&e.list){var i=e.list.querySelector('[data-index="'.concat(e.state.currentSlide,'"]'));e.list.style.height=re(i)+"px"}}),S(e,"componentDidMount",function(){if(e.props.onInit&&e.props.onInit(),e.props.lazyLoad){var i=G(s(s({},e.props),e.state));i.length>0&&(e.setState(function(a){return{lazyLoadedList:a.lazyLoadedList.concat(i)}}),e.props.onLazyLoad&&e.props.onLazyLoad(i))}var n=s({listRef:e.list,trackRef:e.track},e.props);e.updateState(n,!0,function(){e.adaptHeight(),e.props.autoplay&&e.autoPlay("playing")}),e.props.lazyLoad==="progressive"&&(e.lazyLoadTimer=setInterval(e.progressiveLazyLoad,1e3)),e.ro=new Le(function(){e.state.animating?(e.onWindowResized(!1),e.callbackTimers.push(setTimeout(function(){return e.onWindowResized()},e.props.speed))):e.onWindowResized()}),e.ro.observe(e.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(a){a.onfocus=e.props.pauseOnFocus?e.onSlideFocus:null,a.onblur=e.props.pauseOnFocus?e.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",e.onWindowResized):window.attachEvent("onresize",e.onWindowResized)}),S(e,"componentWillUnmount",function(){e.animationEndCallback&&clearTimeout(e.animationEndCallback),e.lazyLoadTimer&&clearInterval(e.lazyLoadTimer),e.callbackTimers.length&&(e.callbackTimers.forEach(function(i){return clearTimeout(i)}),e.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",e.onWindowResized):window.detachEvent("onresize",e.onWindowResized),e.autoplayTimer&&clearInterval(e.autoplayTimer),e.ro.disconnect()}),S(e,"componentDidUpdate",function(i){if(e.checkImagesLoad(),e.props.onReInit&&e.props.onReInit(),e.props.lazyLoad){var n=G(s(s({},e.props),e.state));n.length>0&&(e.setState(function(v){return{lazyLoadedList:v.lazyLoadedList.concat(n)}}),e.props.onLazyLoad&&e.props.onLazyLoad(n))}e.adaptHeight();var a=s(s({listRef:e.list,trackRef:e.track},e.props),e.state),d=e.didPropsChange(i);d&&e.updateState(a,d,function(){e.state.currentSlide>=y.Children.count(e.props.children)&&e.changeSlide({message:"index",index:y.Children.count(e.props.children)-e.props.slidesToShow,currentSlide:e.state.currentSlide}),(i.autoplay!==e.props.autoplay||i.autoplaySpeed!==e.props.autoplaySpeed)&&(!i.autoplay&&e.props.autoplay?e.autoPlay("playing"):e.props.autoplay?e.autoPlay("update"):e.pause("paused"))})}),S(e,"onWindowResized",function(i){e.debouncedResize&&e.debouncedResize.cancel(),e.debouncedResize=Te(50,function(){return e.resizeWindow(i)}),e.debouncedResize()}),S(e,"resizeWindow",function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=!!(e.track&&e.track.node);if(n){var a=s(s({listRef:e.list,trackRef:e.track},e.props),e.state);e.updateState(a,i,function(){e.props.autoplay?e.autoPlay("update"):e.pause("paused")}),e.setState({animating:!1}),clearTimeout(e.animationEndCallback),delete e.animationEndCallback}}),S(e,"updateState",function(i,n,a){var d=Oe(i);i=s(s(s({},i),d),{},{slideIndex:d.currentSlide});var v=$(i);i=s(s({},i),{},{left:v});var h=X(i);(n||y.Children.count(e.props.children)!==y.Children.count(i.children))&&(d.trackStyle=h),e.setState(d,a)}),S(e,"ssrInit",function(){if(e.props.variableWidth){var i=0,n=0,a=[],d=H(s(s(s({},e.props),e.state),{},{slideCount:e.props.children.length})),v=B(s(s(s({},e.props),e.state),{},{slideCount:e.props.children.length}));e.props.children.forEach(function(L){a.push(L.props.style.width),i+=L.props.style.width});for(var h=0;h<d;h++)n+=a[a.length-1-h],i+=a[a.length-1-h];for(var c=0;c<v;c++)i+=a[c];for(var m=0;m<e.state.currentSlide;m++)n+=a[m];var w={width:i+"px",left:-n+"px"};if(e.props.centerMode){var g="".concat(a[e.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(g,") / 2 ) ")}return{trackStyle:w}}var f=y.Children.count(e.props.children),p=s(s(s({},e.props),e.state),{},{slideCount:f}),k=H(p)+B(p)+f,u=100/e.props.slidesToShow*k,b=100/k,C=-b*(H(p)+e.state.currentSlide)*u/100;e.props.centerMode&&(C+=(100-b*u/100)/2);var T={width:u+"%",left:C+"%"};return{slideWidth:b+"%",trackStyle:T}}),S(e,"checkImagesLoad",function(){var i=e.list&&e.list.querySelectorAll&&e.list.querySelectorAll(".slick-slide img")||[],n=i.length,a=0;Array.prototype.forEach.call(i,function(d){var v=function(){return++a&&a>=n&&e.onWindowResized()};if(!d.onclick)d.onclick=function(){return d.parentNode.focus()};else{var h=d.onclick;d.onclick=function(c){h(c),d.parentNode.focus()}}d.onload||(e.props.lazyLoad?d.onload=function(){e.adaptHeight(),e.callbackTimers.push(setTimeout(e.onWindowResized,e.props.speed))}:(d.onload=v,d.onerror=function(){v(),e.props.onLazyLoadError&&e.props.onLazyLoadError()}))})}),S(e,"progressiveLazyLoad",function(){for(var i=[],n=s(s({},e.props),e.state),a=e.state.currentSlide;a<e.state.slideCount+B(n);a++)if(e.state.lazyLoadedList.indexOf(a)<0){i.push(a);break}for(var d=e.state.currentSlide-1;d>=-H(n);d--)if(e.state.lazyLoadedList.indexOf(d)<0){i.push(d);break}i.length>0?(e.setState(function(v){return{lazyLoadedList:v.lazyLoadedList.concat(i)}}),e.props.onLazyLoad&&e.props.onLazyLoad(i)):e.lazyLoadTimer&&(clearInterval(e.lazyLoadTimer),delete e.lazyLoadTimer)}),S(e,"slideHandler",function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.props,d=a.asNavFor,v=a.beforeChange,h=a.onLazyLoad,c=a.speed,m=a.afterChange,w=e.state.currentSlide,g=ze(s(s(s({index:i},e.props),e.state),{},{trackRef:e.track,useCSS:e.props.useCSS&&!n})),f=g.state,p=g.nextState;if(f){v&&v(w,f.currentSlide);var k=f.lazyLoadedList.filter(function(u){return e.state.lazyLoadedList.indexOf(u)<0});h&&k.length>0&&h(k),!e.props.waitForAnimate&&e.animationEndCallback&&(clearTimeout(e.animationEndCallback),m&&m(w),delete e.animationEndCallback),e.setState(f,function(){d&&e.asNavForIndex!==i&&(e.asNavForIndex=i,d.innerSlider.slideHandler(i)),p&&(e.animationEndCallback=setTimeout(function(){var u=p.animating,b=ye(p,Ze);e.setState(b,function(){e.callbackTimers.push(setTimeout(function(){return e.setState({animating:u})},10)),m&&m(f.currentSlide),delete e.animationEndCallback})},c))})}}),S(e,"changeSlide",function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=s(s({},e.props),e.state),d=He(a,i);if(!(d!==0&&!d)&&(n===!0?e.slideHandler(d,n):e.slideHandler(d),e.props.autoplay&&e.autoPlay("update"),e.props.focusOnSelect)){var v=e.list.querySelectorAll(".slick-current");v[0]&&v[0].focus()}}),S(e,"clickHandler",function(i){e.clickable===!1&&(i.stopPropagation(),i.preventDefault()),e.clickable=!0}),S(e,"keyHandler",function(i){var n=We(i,e.props.accessibility,e.props.rtl);n!==""&&e.changeSlide({message:n})}),S(e,"selectHandler",function(i){e.changeSlide(i)}),S(e,"disableBodyScroll",function(){var i=function(a){a=a||window.event,a.preventDefault&&a.preventDefault(),a.returnValue=!1};window.ontouchmove=i}),S(e,"enableBodyScroll",function(){window.ontouchmove=null}),S(e,"swipeStart",function(i){e.props.verticalSwiping&&e.disableBodyScroll();var n=Pe(i,e.props.swipe,e.props.draggable);n!==""&&e.setState(n)}),S(e,"swipeMove",function(i){var n=Re(i,s(s(s({},e.props),e.state),{},{trackRef:e.track,listRef:e.list,slideIndex:e.state.currentSlide}));n&&(n.swiping&&(e.clickable=!1),e.setState(n))}),S(e,"swipeEnd",function(i){var n=Ie(i,s(s(s({},e.props),e.state),{},{trackRef:e.track,listRef:e.list,slideIndex:e.state.currentSlide}));if(n){var a=n.triggerSlideHandler;delete n.triggerSlideHandler,e.setState(n),a!==void 0&&(e.slideHandler(a),e.props.verticalSwiping&&e.enableBodyScroll())}}),S(e,"touchEnd",function(i){e.swipeEnd(i),e.clickable=!0}),S(e,"slickPrev",function(){e.callbackTimers.push(setTimeout(function(){return e.changeSlide({message:"previous"})},0))}),S(e,"slickNext",function(){e.callbackTimers.push(setTimeout(function(){return e.changeSlide({message:"next"})},0))}),S(e,"slickGoTo",function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i=Number(i),isNaN(i))return"";e.callbackTimers.push(setTimeout(function(){return e.changeSlide({message:"index",index:i,currentSlide:e.state.currentSlide},n)},0))}),S(e,"play",function(){var i;if(e.props.rtl)i=e.state.currentSlide-e.props.slidesToScroll;else if(U(s(s({},e.props),e.state)))i=e.state.currentSlide+e.props.slidesToScroll;else return!1;e.slideHandler(i)}),S(e,"autoPlay",function(i){e.autoplayTimer&&clearInterval(e.autoplayTimer);var n=e.state.autoplaying;if(i==="update"){if(n==="hovered"||n==="focused"||n==="paused")return}else if(i==="leave"){if(n==="paused"||n==="focused")return}else if(i==="blur"&&(n==="paused"||n==="hovered"))return;e.autoplayTimer=setInterval(e.play,e.props.autoplaySpeed+50),e.setState({autoplaying:"playing"})}),S(e,"pause",function(i){e.autoplayTimer&&(clearInterval(e.autoplayTimer),e.autoplayTimer=null);var n=e.state.autoplaying;i==="paused"?e.setState({autoplaying:"paused"}):i==="focused"?(n==="hovered"||n==="playing")&&e.setState({autoplaying:"focused"}):n==="playing"&&e.setState({autoplaying:"hovered"})}),S(e,"onDotsOver",function(){return e.props.autoplay&&e.pause("hovered")}),S(e,"onDotsLeave",function(){return e.props.autoplay&&e.state.autoplaying==="hovered"&&e.autoPlay("leave")}),S(e,"onTrackOver",function(){return e.props.autoplay&&e.pause("hovered")}),S(e,"onTrackLeave",function(){return e.props.autoplay&&e.state.autoplaying==="hovered"&&e.autoPlay("leave")}),S(e,"onSlideFocus",function(){return e.props.autoplay&&e.pause("focused")}),S(e,"onSlideBlur",function(){return e.props.autoplay&&e.state.autoplaying==="focused"&&e.autoPlay("blur")}),S(e,"render",function(){var i=M("slick-slider",e.props.className,{"slick-vertical":e.props.vertical,"slick-initialized":!0}),n=s(s({},e.props),e.state),a=_(n,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),d=e.props.pauseOnHover;a=s(s({},a),{},{onMouseEnter:d?e.onTrackOver:null,onMouseLeave:d?e.onTrackLeave:null,onMouseOver:d?e.onTrackOver:null,focusOnSelect:e.props.focusOnSelect&&e.clickable?e.selectHandler:null});var v;if(e.props.dots===!0&&e.state.slideCount>=e.props.slidesToShow){var h=_(n,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),c=e.props.pauseOnDotsHover;h=s(s({},h),{},{clickHandler:e.changeSlide,onMouseEnter:c?e.onDotsLeave:null,onMouseOver:c?e.onDotsOver:null,onMouseLeave:c?e.onDotsLeave:null}),v=y.createElement(_e,h)}var m,w,g=_(n,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);g.clickHandler=e.changeSlide,e.props.arrows&&(m=y.createElement(Ve,g),w=y.createElement(Qe,g));var f=null;e.props.vertical&&(f={height:e.state.listHeight});var p=null;e.props.vertical===!1?e.props.centerMode===!0&&(p={padding:"0px "+e.props.centerPadding}):e.props.centerMode===!0&&(p={padding:e.props.centerPadding+" 0px"});var k=s(s({},f),p),u=e.props.touchMove,b={className:"slick-list",style:k,onClick:e.clickHandler,onMouseDown:u?e.swipeStart:null,onMouseMove:e.state.dragging&&u?e.swipeMove:null,onMouseUp:u?e.swipeEnd:null,onMouseLeave:e.state.dragging&&u?e.swipeEnd:null,onTouchStart:u?e.swipeStart:null,onTouchMove:e.state.dragging&&u?e.swipeMove:null,onTouchEnd:u?e.touchEnd:null,onTouchCancel:e.state.dragging&&u?e.swipeEnd:null,onKeyDown:e.props.accessibility?e.keyHandler:null},C={className:i,dir:"ltr",style:e.props.style};return e.props.unslick&&(b={className:"slick-list"},C={className:i,style:e.props.style}),y.createElement("div",C,e.props.unslick?"":m,y.createElement("div",A({ref:e.listRefHandler},b),y.createElement(Ge,A({ref:e.trackRefHandler},a),e.props.children)),e.props.unslick?"":w,e.props.unslick?"":v)}),e.list=null,e.track=null,e.state=s(s({},xe),{},{currentSlide:e.props.initialSlide,targetSlide:e.props.initialSlide?e.props.initialSlide:0,slideCount:y.Children.count(e.props.children)}),e.callbackTimers=[],e.clickable=!0,e.debouncedResize=null;var l=e.ssrInit();return e.state=s(s({},e.state),l),e}return D(t,o),N(t,[{key:"didPropsChange",value:function(e){for(var l=!1,i=0,n=Object.keys(this.props);i<n.length;i++){var a=n[i];if(!e.hasOwnProperty(a)){l=!0;break}if(!(Se(e[a])==="object"||typeof e[a]=="function"||isNaN(e[a]))&&e[a]!==this.props[a]){l=!0;break}}return l||y.Children.count(this.props.children)!==y.Children.count(e.children)}}])}(y.Component),tt=function(o){return o.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},rt=tt,it=rt,nt=function(o){var t=/[height|width]$/;return t.test(o)},oe=function(o){var t="",r=Object.keys(o);return r.forEach(function(e,l){var i=o[e];e=it(e),nt(e)&&typeof i=="number"&&(i=i+"px"),i===!0?t+=e:i===!1?t+="not "+e:t+="("+e+": "+i+")",l<r.length-1&&(t+=" and ")}),t},at=function(o){var t="";return typeof o=="string"?o:o instanceof Array?(o.forEach(function(r,e){t+=oe(r),e<o.length-1&&(t+=", ")}),t):oe(o)},lt=at;const Z=me(lt);function ot(o,t,r){return t=O(t),Y(o,q()?Reflect.construct(t,r||[],O(o).constructor):t.apply(o,r))}var st=function(o){function t(r){var e;return j(this,t),e=ot(this,t,[r]),S(e,"innerSliderRefHandler",function(l){return e.innerSlider=l}),S(e,"slickPrev",function(){return e.innerSlider.slickPrev()}),S(e,"slickNext",function(){return e.innerSlider.slickNext()}),S(e,"slickGoTo",function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return e.innerSlider.slickGoTo(l,i)}),S(e,"slickPause",function(){return e.innerSlider.pause("paused")}),S(e,"slickPlay",function(){return e.innerSlider.autoPlay("play")}),e.state={breakpoint:null},e._responsiveMediaHandlers=[],e}return D(t,o),N(t,[{key:"media",value:function(e,l){var i=window.matchMedia(e),n=function(d){var v=d.matches;v&&l()};i.addListener(n),n(i),this._responsiveMediaHandlers.push({mql:i,query:e,listener:n})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var l=this.props.responsive.map(function(n){return n.breakpoint});l.sort(function(n,a){return n-a}),l.forEach(function(n,a){var d;a===0?d=Z({minWidth:0,maxWidth:n}):d=Z({minWidth:l[a-1]+1,maxWidth:n}),le()&&e.media(d,function(){e.setState({breakpoint:n})})});var i=Z({minWidth:l.slice(-1)[0]});le()&&this.media(i,function(){e.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(e){e.mql.removeListener(e.listener)})}},{key:"render",value:function(){var e=this,l,i;this.state.breakpoint?(i=this.props.responsive.filter(function(f){return f.breakpoint===e.state.breakpoint}),l=i[0].settings==="unslick"?"unslick":s(s(s({},J),this.props),i[0].settings)):l=s(s({},J),this.props),l.centerMode&&(l.slidesToScroll>1,l.slidesToScroll=1),l.fade&&(l.slidesToShow>1,l.slidesToScroll>1,l.slidesToShow=1,l.slidesToScroll=1);var n=y.Children.toArray(this.props.children);n=n.filter(function(f){return typeof f=="string"?!!f.trim():!!f}),l.variableWidth&&(l.rows>1||l.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),l.variableWidth=!1);for(var a=[],d=null,v=0;v<n.length;v+=l.rows*l.slidesPerRow){for(var h=[],c=v;c<v+l.rows*l.slidesPerRow;c+=l.slidesPerRow){for(var m=[],w=c;w<c+l.slidesPerRow&&(l.variableWidth&&n[w].props.style&&(d=n[w].props.style.width),!(w>=n.length));w+=1)m.push(y.cloneElement(n[w],{key:100*v+10*c+w,tabIndex:-1,style:{width:"".concat(100/l.slidesPerRow,"%"),display:"inline-block"}}));h.push(y.createElement("div",{key:10*v+c},m))}l.variableWidth?a.push(y.createElement("div",{key:v,style:{width:d}},h)):a.push(y.createElement("div",{key:v},h))}if(l==="unslick"){var g="regular slider "+(this.props.className||"");return y.createElement("div",{className:g},n)}else a.length<=l.slidesToShow&&!l.infinite&&(l.unslick=!0);return y.createElement(et,A({style:this.props.style,ref:this.innerSliderRefHandler},Ye(l)),a)}}])}(y.Component);const dt=o=>{const{componentCls:t,antCls:r}=o;return{[t]:Object.assign(Object.assign({},ke(o)),{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":{pointerEvents:"none",[`input${r}-radio-input, input${r}-checkbox-input`]:{visibility:"hidden"},"&.slick-active":{pointerEvents:"auto",[`input${r}-radio-input, input${r}-checkbox-input`]:{visibility:"visible"}},"> div > div":{verticalAlign:"bottom"}}},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"}})}},ut=o=>{const{componentCls:t,motionDurationSlow:r,arrowSize:e,arrowOffset:l}=o,i=o.calc(e).div(Math.SQRT2).equal();return[{[t]:{".slick-prev, .slick-next":{position:"absolute",top:"50%",width:e,height:e,transform:"translateY(-50%)",color:"#fff",opacity:.4,background:"transparent",padding:0,lineHeight:0,border:0,outline:"none",cursor:"pointer",zIndex:1,transition:`opacity ${r}`,"&:hover, &:focus":{opacity:1},"&.slick-disabled":{pointerEvents:"none",opacity:0},"&::after":{boxSizing:"border-box",position:"absolute",top:o.calc(e).sub(i).div(2).equal(),insetInlineStart:o.calc(e).sub(i).div(2).equal(),display:"inline-block",width:i,height:i,border:"0 solid currentcolor",borderInlineWidth:"2px 0",borderBlockWidth:"2px 0",borderRadius:1,content:'""'}},".slick-prev":{insetInlineStart:l,"&::after":{transform:"rotate(-45deg)"}},".slick-next":{insetInlineEnd:l,"&::after":{transform:"rotate(135deg)"}}}}]},ct=o=>{const{componentCls:t,dotOffset:r,dotWidth:e,dotHeight:l,dotGap:i,colorBgContainer:n,motionDurationSlow:a}=o;return[{[t]:{".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:r},"&-top":{top:r,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:e,height:l,marginInline:i,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:`all ${a}`,button:{position:"relative",display:"block",width:"100%",height:l,padding:0,color:"transparent",fontSize:0,background:n,border:0,borderRadius:l,outline:"none",cursor:"pointer",opacity:.2,transition:`all ${a}`,"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:o.calc(i).mul(-1).equal(),content:'""'}},"&.slick-active":{width:o.dotActiveWidth,"& button":{background:n,opacity:1},"&: hover, &:focus":{opacity:1}}}}}}]},ft=o=>{const{componentCls:t,dotOffset:r,arrowOffset:e,marginXXS:l}=o,i={width:o.dotHeight,height:o.dotWidth};return{[`${t}-vertical`]:{".slick-prev, .slick-next":{insetInlineStart:"50%",marginBlockStart:"unset",transform:"translateX(-50%)"},".slick-prev":{insetBlockStart:e,insetInlineStart:"50%","&::after":{transform:"rotate(45deg)"}},".slick-next":{insetBlockStart:"auto",insetBlockEnd:e,"&::after":{transform:"rotate(-135deg)"}},".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:o.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:r},"&-right":{insetInlineEnd:r,insetInlineStart:"auto"},li:Object.assign(Object.assign({},i),{margin:`${be(l)} 0`,verticalAlign:"baseline",button:i,"&.slick-active":Object.assign(Object.assign({},i),{button:i})})}}}},vt=o=>{const{componentCls:t}=o;return[{[`${t}-rtl`]:{direction:"rtl",".slick-dots":{[`${t}-rtl&`]:{flexDirection:"row-reverse"}}}},{[`${t}-vertical`]:{".slick-dots":{[`${t}-rtl&`]:{flexDirection:"column"}}}}]},ht=o=>({arrowSize:16,arrowOffset:o.marginXS,dotWidth:16,dotHeight:3,dotGap:o.marginXXS,dotOffset:12,dotWidthActive:24,dotActiveWidth:24}),pt=we("Carousel",o=>[dt(o),ut(o),ct(o),ft(o),vt(o)],ht,{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]});var pe=function(o,t){var r={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(r[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(o);l<e.length;l++)t.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(o,e[l])&&(r[e[l]]=o[e[l]]);return r};const se="slick-dots",de=o=>{var t=pe(o,["currentSlide","slideCount"]);return x.createElement("button",Object.assign({type:"button"},t))},mt=x.forwardRef((o,t)=>{const{dots:r=!0,arrows:e=!1,prevArrow:l=x.createElement(de,{"aria-label":"prev"}),nextArrow:i=x.createElement(de,{"aria-label":"next"}),draggable:n=!1,waitForAnimate:a=!1,dotPosition:d="bottom",vertical:v=d==="left"||d==="right",rootClassName:h,className:c,style:m,id:w}=o,g=pe(o,["dots","arrows","prevArrow","nextArrow","draggable","waitForAnimate","dotPosition","vertical","rootClassName","className","style","id"]),{getPrefixCls:f,direction:p,carousel:k}=x.useContext(Ce),u=x.useRef(),b=function(P){let ge=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;u.current.slickGoTo(P,ge)};x.useImperativeHandle(t,()=>({goTo:b,autoPlay:u.current.innerSlider.autoPlay,innerSlider:u.current.innerSlider,prev:u.current.slickPrev,next:u.current.slickNext}),[u.current]);const C=x.useRef(x.Children.count(o.children));x.useEffect(()=>{C.current!==x.Children.count(o.children)&&(b(o.initialSlide||0,!1),C.current=x.Children.count(o.children))},[o.children]);const T=Object.assign({vertical:v,className:M(c,k==null?void 0:k.className),style:Object.assign(Object.assign({},k==null?void 0:k.style),m)},g);T.effect==="fade"&&(T.fade=!0);const L=f("carousel",T.prefixCls),z=!!r,R=M(se,`${se}-${d}`,typeof r=="boolean"?!1:r==null?void 0:r.className),[F,W,K]=pt(L),E=M(L,{[`${L}-rtl`]:p==="rtl",[`${L}-vertical`]:T.vertical},W,K,h);return F(x.createElement("div",{className:E,id:w},x.createElement(st,Object.assign({ref:u},T,{dots:z,dotsClass:R,arrows:e,prevArrow:l,nextArrow:i,draggable:n,verticalSwiping:v,waitForAnimate:a}))))});export{mt as C};
