(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7217)}])},8045:function(e,t,n){"use strict";var i=n(9361).Z,r=n(4941).Z,a=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,f=void 0!==o&&o,h=e.priority,m=void 0!==h&&h,x=e.loading,A=e.lazyRoot,O=void 0===A?null:A,E=e.lazyBoundary,I=e.className,N=e.quality,R=e.width,P=e.height,M=e.style,C=e.objectFit,L=e.objectPosition,q=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,D=e.blurDataURL,U=p(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=l.useContext(d.ImageConfigContext),H=l.useMemo((function(){var e=b||F||c.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[F]),T=U,V=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(V=T.layout),delete T.layout);var Z=_;if("loader"in T){if(T.loader){var G=T.loader;Z=function(e){e.config;var t=p(e,["config"]);return G(t)}}delete T.loader}var J="";if(function(e){return"object"===typeof e&&(j(e)||function(e){return void 0!==e.src}(e))}(t)){var X=j(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(D=D||X.blurDataURL,J=X.src,(!V||"fill"!==V)&&(P=P||X.height,R=R||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:J;var Q=S(R),K=S(P),Y=S(N),$=!m&&("lazy"===x||"undefined"===typeof x);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);y.has(t)&&($=!1);v&&(f=!0);var ee,te=r(l.useState(!1),2),ne=te[0],ie=te[1],re=r(u.useIntersection({rootRef:O,rootMargin:E||"200px",disabled:!$}),3),ae=re[0],oe=re[1],le=re[2],se=!$||oe,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:L};0;var ge=Object.assign({},M,fe),he="blur"!==B||ne?{}:{backgroundSize:C||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===V)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof K){var pe=K/Q,me=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===V?(ce.display="block",ce.position="relative",de=!0,ue.paddingTop=me):"intrinsic"===V?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===V&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=K)}else 0;var ve={src:w,srcSet:void 0,sizes:void 0};se&&(ve=z({config:H,src:t,unoptimized:f,layout:V,width:Q,quality:Y,sizes:n,loader:Z}));var be=t;0;var ye;0;var we=(i(ye={},"imagesrcset",ve.srcSet),i(ye,"imagesizes",ve.sizes),ye),xe=l.default.useLayoutEffect,je=l.useRef(q),ze=l.useRef(t);l.useEffect((function(){je.current=q}),[q]),xe((function(){ze.current!==t&&(le(),ze.current=t)}),[le,t]);var Se=g({isLazy:$,imgAttributes:ve,heightInt:K,widthInt:Q,qualityInt:Y,layout:V,className:I,imgStyle:ge,blurStyle:he,loading:x,config:H,unoptimized:f,placeholder:B,loader:Z,srcString:be,onLoadingCompleteRef:je,setBlurComplete:ie,setIntersection:ae,isVisible:se,noscriptSizes:n},T);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ce},de?l.default.createElement("span",{style:ue},ee?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,l.default.createElement(k,Object.assign({},Se))),m?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},we))):null)};var o,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(5443))&&o.__esModule?o:{default:o},c=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g.apply(this,arguments)}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function p(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/nextjs-pages/",loader:"akamai"}||{},v=m.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/nextjs-pages/",loader:"akamai"},y=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=new URL("".concat(t.path).concat(O(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(O(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(O(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function j(e){return void 0!==e.default}function z(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,o=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,a(c));return{widths:o.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,s),d=u.widths,f=u.kind,g=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[g]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(n))}function A(e,t,n,i,r,a){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===i&&a(!0),null==r?void 0:r.current)){var n=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:o})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,a=e.className,o=e.imgStyle,s=e.blurStyle,c=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,h=e.config,m=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,x=e.onLoad,j=e.onError,S=(e.isVisible,e.noscriptSizes),_=p(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=c?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":r,className:a,style:g({},o,s),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&A(e,f,0,u,b,y)}),[w,f,r,u,b,y]),onLoad:function(e){A(e.currentTarget,f,0,u,b,y),x&&x(e)},onError:function(e){"blur"===u&&y(!0),j&&j(e)}})),(c||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},_,z({config:h,src:f,unoptimized:m,layout:r,width:n,quality:i,sizes:S,loader:v}),{decoding:"async","data-nimg":r,style:o,className:a,loading:d}))))};function O(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!o,u=r.useRef(),d=i(r.useState(!1),2),f=d[0],g=d[1],h=i(r.useState(null),2),p=h[0],m=h[1];r.useEffect((function(){if(o){if(u.current&&(u.current(),u.current=void 0),c||f)return;return p&&p.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=l.get(i)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},s.push(n),l.set(n,t),t}(n),r=i.id,a=i.observer,o=i.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);var t=s.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&s.splice(t,1)}}}(p,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p,c,n,t,f]);var v=r.useCallback((function(){g(!1)}),[]);return[m,f,v]};var r=n(7294),a=n(9311),o="function"===typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7217:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(5893),r=n(5675),a=n.n(r),o={src:"/nextjs-pages/_next/static/media/charging-station.93c0290c.svg",height:107,width:91},l={src:"/nextjs-pages/_next/static/media/logo.c2df6200.svg",height:456,width:534},s={src:"/nextjs-pages/_next/static/media/mail.617a3efc.svg",height:25,width:25},c=function(){return(0,i.jsx)(a(),{src:o,width:"50",height:"50"})},u=function(){return(0,i.jsxs)("div",{className:"business-card",children:[(0,i.jsx)("div",{className:"absolute -left-5 top-10 lg:top-1/4 lg:left-1/4 blur-sm",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"absolute -right-5 top-5 lg:top-1/3 lg:right-1/4 blur-sm",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"absolute -left-5 bottom-5 lg:bottom-1/4 lg:left-1/4",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"absolute -right-5 bottom-12 lg:bottom-1/3 lg:right-1/4",children:(0,i.jsx)(c,{})}),(0,i.jsx)("div",{className:"flex w-full h-full",children:(0,i.jsx)("div",{className:"px-6 mx-auto self-center z-10",children:(0,i.jsxs)("div",{className:"w-full sm:w-3/4 md:w-auto mx-auto flex gap-14 flex-col justify-center text-center max-w-3xl",children:[(0,i.jsx)(a(),{src:l}),(0,i.jsx)("div",{className:"font-bold text-3xl sm:text-4xl md:text-6xl",children:"... you only need one charge app in the world"}),(0,i.jsxs)("div",{className:"flex gap-2 justify-center",children:[(0,i.jsx)("div",{className:"flex self-center",children:(0,i.jsx)(a(),{src:s,height:"24",width:"24"})}),(0,i.jsx)("span",{className:"text-2xl leading-5",children:"biz@chargr.one"})]})]})})})]})},d=function(){return(0,i.jsx)(u,{})}},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);