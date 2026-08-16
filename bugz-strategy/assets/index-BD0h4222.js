(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))o(v);new MutationObserver(v=>{for(const A of v)if(A.type==="childList")for(const H of A.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&o(H)}).observe(document,{childList:!0,subtree:!0});function h(v){const A={};return v.integrity&&(A.integrity=v.integrity),v.referrerPolicy&&(A.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?A.credentials="include":v.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function o(v){if(v.ep)return;v.ep=!0;const A=h(v);fetch(v.href,A)}})();var jo={exports:{}},Yn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function jg(){if(Qd)return Yn;Qd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function h(o,v,A){var H=null;if(A!==void 0&&(H=""+A),v.key!==void 0&&(H=""+v.key),"key"in v){A={};for(var D in v)D!=="key"&&(A[D]=v[D])}else A=v;return v=A.ref,{$$typeof:s,type:o,key:H,ref:v!==void 0?v:null,props:A}}return Yn.Fragment=r,Yn.jsx=h,Yn.jsxs=h,Yn}var wd;function Bg(){return wd||(wd=1,jo.exports=jg()),jo.exports}var f=Bg(),Bo={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd;function Dg(){if(Yd)return J;Yd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),H=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),L=Symbol.iterator;function k(g){return g===null||typeof g!="object"?null:(g=L&&g[L]||g["@@iterator"],typeof g=="function"?g:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,Le={};function qe(g,C,R){this.props=g,this.context=C,this.refs=Le,this.updater=R||ae}qe.prototype.isReactComponent={},qe.prototype.setState=function(g,C){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,C,"setState")},qe.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function ze(){}ze.prototype=qe.prototype;function ge(g,C,R){this.props=g,this.context=C,this.refs=Le,this.updater=R||ae}var Oe=ge.prototype=new ze;Oe.constructor=ge,I(Oe,qe.prototype),Oe.isPureReactComponent=!0;var He=Array.isArray;function je(){}var Z={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function Xe(g,C,R){var U=R.ref;return{$$typeof:s,type:g,key:C,ref:U!==void 0?U:null,props:R}}function ut(g,C){return Xe(g.type,C,g.props)}function rt(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function de(g){var C={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(R){return C[R]})}var St=/\/+/g;function G(g,C){return typeof g=="object"&&g!==null&&g.key!=null?de(""+g.key):C.toString(36)}function Te(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(je,je):(g.status="pending",g.then(function(C){g.status==="pending"&&(g.status="fulfilled",g.value=C)},function(C){g.status==="pending"&&(g.status="rejected",g.reason=C)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function T(g,C,R,U,K){var F=typeof g;(F==="undefined"||F==="boolean")&&(g=null);var se=!1;if(g===null)se=!0;else switch(F){case"bigint":case"string":case"number":se=!0;break;case"object":switch(g.$$typeof){case s:case r:se=!0;break;case B:return se=g._init,T(se(g._payload),C,R,U,K)}}if(se)return K=K(g),se=U===""?"."+G(g,0):U,He(K)?(R="",se!=null&&(R=se.replace(St,"$&/")+"/"),T(K,C,R,"",function(At){return At})):K!=null&&(rt(K)&&(K=ut(K,R+(K.key==null||g&&g.key===K.key?"":(""+K.key).replace(St,"$&/")+"/")+se)),C.push(K)),1;se=0;var _e=U===""?".":U+":";if(He(g))for(var he=0;he<g.length;he++)U=g[he],F=_e+G(U,he),se+=T(U,C,R,F,K);else if(he=k(g),typeof he=="function")for(g=he.call(g),he=0;!(U=g.next()).done;)U=U.value,F=_e+G(U,he++),se+=T(U,C,R,F,K);else if(F==="object"){if(typeof g.then=="function")return T(Te(g),C,R,U,K);throw C=String(g),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return se}function q(g,C,R){if(g==null)return g;var U=[],K=0;return T(g,U,"","",function(F){return C.call(R,F,K++)}),U}function Y(g){if(g._status===-1){var C=g._result;C=C(),C.then(function(R){(g._status===0||g._status===-1)&&(g._status=1,g._result=R)},function(R){(g._status===0||g._status===-1)&&(g._status=2,g._result=R)}),g._status===-1&&(g._status=0,g._result=C)}if(g._status===1)return g._result.default;throw g._result}var le=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},ee={map:q,forEach:function(g,C,R){q(g,function(){C.apply(this,arguments)},R)},count:function(g){var C=0;return q(g,function(){C++}),C},toArray:function(g){return q(g,function(C){return C})||[]},only:function(g){if(!rt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return J.Activity=z,J.Children=ee,J.Component=qe,J.Fragment=h,J.Profiler=v,J.PureComponent=ge,J.StrictMode=o,J.Suspense=M,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,J.__COMPILER_RUNTIME={__proto__:null,c:function(g){return Z.H.useMemoCache(g)}},J.cache=function(g){return function(){return g.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(g,C,R){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var U=I({},g.props),K=g.key;if(C!=null)for(F in C.key!==void 0&&(K=""+C.key),C)!Re.call(C,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&C.ref===void 0||(U[F]=C[F]);var F=arguments.length-2;if(F===1)U.children=R;else if(1<F){for(var se=Array(F),_e=0;_e<F;_e++)se[_e]=arguments[_e+2];U.children=se}return Xe(g.type,K,U)},J.createContext=function(g){return g={$$typeof:H,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:A,_context:g},g},J.createElement=function(g,C,R){var U,K={},F=null;if(C!=null)for(U in C.key!==void 0&&(F=""+C.key),C)Re.call(C,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(K[U]=C[U]);var se=arguments.length-2;if(se===1)K.children=R;else if(1<se){for(var _e=Array(se),he=0;he<se;he++)_e[he]=arguments[he+2];K.children=_e}if(g&&g.defaultProps)for(U in se=g.defaultProps,se)K[U]===void 0&&(K[U]=se[U]);return Xe(g,F,K)},J.createRef=function(){return{current:null}},J.forwardRef=function(g){return{$$typeof:D,render:g}},J.isValidElement=rt,J.lazy=function(g){return{$$typeof:B,_payload:{_status:-1,_result:g},_init:Y}},J.memo=function(g,C){return{$$typeof:m,type:g,compare:C===void 0?null:C}},J.startTransition=function(g){var C=Z.T,R={};Z.T=R;try{var U=g(),K=Z.S;K!==null&&K(R,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(je,le)}catch(F){le(F)}finally{C!==null&&R.types!==null&&(C.types=R.types),Z.T=C}},J.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},J.use=function(g){return Z.H.use(g)},J.useActionState=function(g,C,R){return Z.H.useActionState(g,C,R)},J.useCallback=function(g,C){return Z.H.useCallback(g,C)},J.useContext=function(g){return Z.H.useContext(g)},J.useDebugValue=function(){},J.useDeferredValue=function(g,C){return Z.H.useDeferredValue(g,C)},J.useEffect=function(g,C){return Z.H.useEffect(g,C)},J.useEffectEvent=function(g){return Z.H.useEffectEvent(g)},J.useId=function(){return Z.H.useId()},J.useImperativeHandle=function(g,C,R){return Z.H.useImperativeHandle(g,C,R)},J.useInsertionEffect=function(g,C){return Z.H.useInsertionEffect(g,C)},J.useLayoutEffect=function(g,C){return Z.H.useLayoutEffect(g,C)},J.useMemo=function(g,C){return Z.H.useMemo(g,C)},J.useOptimistic=function(g,C){return Z.H.useOptimistic(g,C)},J.useReducer=function(g,C,R){return Z.H.useReducer(g,C,R)},J.useRef=function(g){return Z.H.useRef(g)},J.useState=function(g){return Z.H.useState(g)},J.useSyncExternalStore=function(g,C,R){return Z.H.useSyncExternalStore(g,C,R)},J.useTransition=function(){return Z.H.useTransition()},J.version="19.2.8",J}var Vd;function Go(){return Vd||(Vd=1,Bo.exports=Dg()),Bo.exports}var P=Go(),Do={exports:{}},Vn={},qo={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd;function qg(){return Zd||(Zd=1,(function(s){function r(T,q){var Y=T.length;T.push(q);e:for(;0<Y;){var le=Y-1>>>1,ee=T[le];if(0<v(ee,q))T[le]=q,T[Y]=ee,Y=le;else break e}}function h(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var q=T[0],Y=T.pop();if(Y!==q){T[0]=Y;e:for(var le=0,ee=T.length,g=ee>>>1;le<g;){var C=2*(le+1)-1,R=T[C],U=C+1,K=T[U];if(0>v(R,Y))U<ee&&0>v(K,R)?(T[le]=K,T[U]=Y,le=U):(T[le]=R,T[C]=Y,le=C);else if(U<ee&&0>v(K,Y))T[le]=K,T[U]=Y,le=U;else break e}}return q}function v(T,q){var Y=T.sortIndex-q.sortIndex;return Y!==0?Y:T.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;s.unstable_now=function(){return A.now()}}else{var H=Date,D=H.now();s.unstable_now=function(){return H.now()-D}}var M=[],m=[],B=1,z=null,L=3,k=!1,ae=!1,I=!1,Le=!1,qe=typeof setTimeout=="function"?setTimeout:null,ze=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function Oe(T){for(var q=h(m);q!==null;){if(q.callback===null)o(m);else if(q.startTime<=T)o(m),q.sortIndex=q.expirationTime,r(M,q);else break;q=h(m)}}function He(T){if(I=!1,Oe(T),!ae)if(h(M)!==null)ae=!0,je||(je=!0,de());else{var q=h(m);q!==null&&Te(He,q.startTime-T)}}var je=!1,Z=-1,Re=5,Xe=-1;function ut(){return Le?!0:!(s.unstable_now()-Xe<Re)}function rt(){if(Le=!1,je){var T=s.unstable_now();Xe=T;var q=!0;try{e:{ae=!1,I&&(I=!1,ze(Z),Z=-1),k=!0;var Y=L;try{t:{for(Oe(T),z=h(M);z!==null&&!(z.expirationTime>T&&ut());){var le=z.callback;if(typeof le=="function"){z.callback=null,L=z.priorityLevel;var ee=le(z.expirationTime<=T);if(T=s.unstable_now(),typeof ee=="function"){z.callback=ee,Oe(T),q=!0;break t}z===h(M)&&o(M),Oe(T)}else o(M);z=h(M)}if(z!==null)q=!0;else{var g=h(m);g!==null&&Te(He,g.startTime-T),q=!1}}break e}finally{z=null,L=Y,k=!1}q=void 0}}finally{q?de():je=!1}}}var de;if(typeof ge=="function")de=function(){ge(rt)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,G=St.port2;St.port1.onmessage=rt,de=function(){G.postMessage(null)}}else de=function(){qe(rt,0)};function Te(T,q){Z=qe(function(){T(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(T){T.callback=null},s.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<T?Math.floor(1e3/T):5},s.unstable_getCurrentPriorityLevel=function(){return L},s.unstable_next=function(T){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var Y=L;L=q;try{return T()}finally{L=Y}},s.unstable_requestPaint=function(){Le=!0},s.unstable_runWithPriority=function(T,q){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var Y=L;L=T;try{return q()}finally{L=Y}},s.unstable_scheduleCallback=function(T,q,Y){var le=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?le+Y:le):Y=le,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Y+ee,T={id:B++,callback:q,priorityLevel:T,startTime:Y,expirationTime:ee,sortIndex:-1},Y>le?(T.sortIndex=Y,r(m,T),h(M)===null&&T===h(m)&&(I?(ze(Z),Z=-1):I=!0,Te(He,Y-le))):(T.sortIndex=ee,r(M,T),ae||k||(ae=!0,je||(je=!0,de()))),T},s.unstable_shouldYield=ut,s.unstable_wrapCallback=function(T){var q=L;return function(){var Y=L;L=q;try{return T.apply(this,arguments)}finally{L=Y}}}})(Ro)),Ro}var Xd;function Rg(){return Xd||(Xd=1,qo.exports=qg()),qo.exports}var _o={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function _g(){if(Kd)return ct;Kd=1;var s=Go();function r(M){var m="https://react.dev/errors/"+M;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)m+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+M+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var o={d:{f:h,r:function(){throw Error(r(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},v=Symbol.for("react.portal");function A(M,m,B){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:z==null?null:""+z,children:M,containerInfo:m,implementation:B}}var H=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(M,m){if(M==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ct.createPortal=function(M,m){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return A(M,m,null,B)},ct.flushSync=function(M){var m=H.T,B=o.p;try{if(H.T=null,o.p=2,M)return M()}finally{H.T=m,o.p=B,o.d.f()}},ct.preconnect=function(M,m){typeof M=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(M,m))},ct.prefetchDNS=function(M){typeof M=="string"&&o.d.D(M)},ct.preinit=function(M,m){if(typeof M=="string"&&m&&typeof m.as=="string"){var B=m.as,z=D(B,m.crossOrigin),L=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;B==="style"?o.d.S(M,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:z,integrity:L,fetchPriority:k}):B==="script"&&o.d.X(M,{crossOrigin:z,integrity:L,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ct.preinitModule=function(M,m){if(typeof M=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var B=D(m.as,m.crossOrigin);o.d.M(M,{crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(M)},ct.preload=function(M,m){if(typeof M=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var B=m.as,z=D(B,m.crossOrigin);o.d.L(M,B,{crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ct.preloadModule=function(M,m){if(typeof M=="string")if(m){var B=D(m.as,m.crossOrigin);o.d.m(M,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(M)},ct.requestFormReset=function(M){o.d.r(M)},ct.unstable_batchedUpdates=function(M,m){return M(m)},ct.useFormState=function(M,m,B){return H.H.useFormState(M,m,B)},ct.useFormStatus=function(){return H.H.useHostTransitionStatus()},ct.version="19.2.8",ct}var Pd;function Lg(){if(Pd)return _o.exports;Pd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),_o.exports=_g(),_o.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function Ug(){if(Jd)return Vn;Jd=1;var s=Rg(),r=Go(),h=Lg();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function H(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(A(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(o(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return M(n),e;if(i===a)return M(n),t;i=i.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,L=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),Le=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),ze=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var St=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===St?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case qe:return"Profiler";case Le:return"StrictMode";case He:return"Suspense";case je:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ae:return"Portal";case ge:return e.displayName||"Context";case ze:return(e._context.displayName||"Context")+".Consumer";case Oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case Re:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}var Te=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},le=[],ee=-1;function g(e){return{current:e}}function C(e){0>ee||(e.current=le[ee],le[ee]=null,ee--)}function R(e,t){ee++,le[ee]=e.current,e.current=t}var U=g(null),K=g(null),F=g(null),se=g(null);function _e(e,t){switch(R(F,t),R(K,e),R(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rd(t),e=fd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(U),R(U,e)}function he(){C(U),C(K),C(F)}function At(e){e.memoizedState!==null&&R(se,e);var t=U.current,l=fd(t,e.type);t!==l&&(R(K,e),R(U,l))}function We(e){K.current===e&&(C(U),C(K)),se.current===e&&(C(se),Gn._currentValue=Y)}var yl,ra;function It(e){if(yl===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||"",ra=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yl+e+ra}var Ja=!1;function _(e,t){if(!e||Ja)return"";Ja=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(E){var S=E}Reflect.construct(e,[],j)}else{try{j.call()}catch(E){S=E}e.call(j.prototype)}}else{try{throw Error()}catch(E){S=E}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(E){if(E&&S&&typeof E.stack=="string")return[E.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var d=u.split(`
`),x=c.split(`
`);for(n=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;if(a===d.length||n===x.length)for(a=d.length-1,n=x.length-1;1<=a&&0<=n&&d[a]!==x[n];)n--;for(;1<=a&&0<=n;a--,n--)if(d[a]!==x[n]){if(a!==1||n!==1)do if(a--,n--,0>n||d[a]!==x[n]){var O=`
`+d[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=n);break}}}finally{Ja=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?It(l):""}function ne(e,t){switch(e.tag){case 26:case 27:case 5:return It(e.type);case 16:return It("Lazy");case 13:return e.child!==t&&t!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return _(e.type,!1);case 11:return _(e.type.render,!1);case 1:return _(e.type,!0);case 31:return It("Activity");default:return""}}function fe(e){try{var t="",l=null;do t+=ne(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Me=Object.prototype.hasOwnProperty,we=s.unstable_scheduleCallback,ft=s.unstable_cancelCallback,Ye=s.unstable_shouldYield,Bt=s.unstable_requestPaint,Be=s.unstable_now,ot=s.unstable_getCurrentPriorityLevel,dt=s.unstable_ImmediatePriority,Xn=s.unstable_UserBlockingPriority,Kn=s.unstable_NormalPriority,dm=s.unstable_LowPriority,Yo=s.unstable_IdlePriority,mm=s.log,pm=s.unstable_setDisableYieldValue,Ia=null,Tt=null;function vl(e){if(typeof mm=="function"&&pm(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Ia,e)}catch{}}var Mt=Math.clz32?Math.clz32:ym,gm=Math.log,hm=Math.LN2;function ym(e){return e>>>=0,e===0?32:31-(gm(e)/hm|0)|0}var Pn=256,Jn=262144,In=4194304;function Zl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Zl(a):(u&=c,u!==0?n=Zl(u):l||(l=c&~e,l!==0&&(n=Zl(l))))):(c=a&~i,c!==0?n=Zl(c):u!==0?n=Zl(u):l||(l=a&~e,l!==0&&(n=Zl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function Fa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function vm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vo(){var e=In;return In<<=1,(In&62914560)===0&&(In=4194304),e}function vu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Wa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bm(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,x=e.hiddenUpdates;for(l=u&~l;0<l;){var O=31-Mt(l),j=1<<O;c[O]=0,d[O]=-1;var S=x[O];if(S!==null)for(x[O]=null,O=0;O<S.length;O++){var E=S[O];E!==null&&(E.lane&=-536870913)}l&=~j}a!==0&&Zo(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Zo(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Mt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Xo(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Mt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ko(e,t){var l=t&-t;return l=(l&42)!==0?1:bu(l),(l&(e.suspendedLanes|t))!==0?0:l}function bu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Po(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:qd(e.type))}function Jo(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var bl=Math.random().toString(36).slice(2),tt="__reactFiber$"+bl,mt="__reactProps$"+bl,fa="__reactContainer$"+bl,Su="__reactEvents$"+bl,xm="__reactListeners$"+bl,Sm="__reactHandles$"+bl,Io="__reactResources$"+bl,$a="__reactMarker$"+bl;function Au(e){delete e[tt],delete e[mt],delete e[Su],delete e[xm],delete e[Sm]}function da(e){var t=e[tt];if(t)return t;for(var l=e.parentNode;l;){if(t=l[fa]||l[tt]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=vd(e);e!==null;){if(l=e[tt])return l;e=vd(e)}return t}e=l,l=e.parentNode}return null}function ma(e){if(e=e[tt]||e[fa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function en(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function pa(e){var t=e[Io];return t||(t=e[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[$a]=!0}var Fo=new Set,Wo={};function Xl(e,t){ga(e,t),ga(e+"Capture",t)}function ga(e,t){for(Wo[e]=t,e=0;e<t.length;e++)Fo.add(t[e])}var Am=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$o={},es={};function Tm(e){return Me.call(es,e)?!0:Me.call($o,e)?!1:Am.test(e)?es[e]=!0:($o[e]=!0,!1)}function Wn(e,t,l){if(Tm(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function $n(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Ft(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mm(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tu(e){if(!e._valueTracker){var t=ts(e)?"checked":"value";e._valueTracker=Mm(e,t,""+e[t])}}function ls(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=ts(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Em=/[\n"\\]/g;function qt(e){return e.replace(Em,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mu(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Eu(e,u,Dt(t)):l!=null?Eu(e,u,Dt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Dt(c):e.removeAttribute("name")}function as(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Tu(e);return}l=l!=null?""+Dt(l):"",t=t!=null?""+Dt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Tu(e)}function Eu(e,t,l){t==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ha(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Dt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function ns(e,t,l){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Dt(l):""}function is(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(o(92));if(Te(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Dt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Tu(e)}function ya(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var zm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function us(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||zm.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function cs(e,t,l){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&us(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&us(e,i,t[i])}function zu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Om=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return Hm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var Ou=null;function Hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var va=null,ba=null;function os(e){var t=ma(e);if(t&&(e=t.stateNode)){var l=e[mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Mu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[mt]||null;if(!n)throw Error(o(90));Mu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&ls(a)}break e;case"textarea":ns(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ha(e,!!l.multiple,t,!1)}}}var Cu=!1;function ss(e,t,l){if(Cu)return e(t,l);Cu=!0;try{var a=e(t);return a}finally{if(Cu=!1,(va!==null||ba!==null)&&(wi(),va&&(t=va,e=ba,ba=va=null,os(t),e)))for(t=0;t<e.length;t++)os(e[t])}}function tn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[mt]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(o(231,t,typeof l));return l}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if($t)try{var ln={};Object.defineProperty(ln,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",ln,ln),window.removeEventListener("test",ln,ln)}catch{Nu=!1}var xl=null,ju=null,li=null;function rs(){if(li)return li;var e,t=ju,l=t.length,a,n="value"in xl?xl.value:xl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return li=n.slice(e,1<a?1-a:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function fs(){return!1}function pt(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ni:fs,this.isPropagationStopped=fs,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var Kl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ii=pt(Kl),an=z({},Kl,{view:0,detail:0}),Cm=pt(an),Bu,Du,nn,ui=z({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nn&&(nn&&e.type==="mousemove"?(Bu=e.screenX-nn.screenX,Du=e.screenY-nn.screenY):Du=Bu=0,nn=e),Bu)},movementY:function(e){return"movementY"in e?e.movementY:Du}}),ds=pt(ui),Nm=z({},ui,{dataTransfer:0}),jm=pt(Nm),Bm=z({},an,{relatedTarget:0}),qu=pt(Bm),Dm=z({},Kl,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=pt(Dm),Rm=z({},Kl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_m=pt(Rm),Lm=z({},Kl,{data:0}),ms=pt(Lm),Um={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function Ru(){return Qm}var wm=z({},an,{key:function(e){if(e.key){var t=Um[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=pt(wm),Vm=z({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=pt(Vm),Zm=z({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Xm=pt(Zm),Km=z({},Kl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pm=pt(Km),Jm=z({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=pt(Jm),Fm=z({},Kl,{newState:0,oldState:0}),Wm=pt(Fm),$m=[9,13,27,32],_u=$t&&"CompositionEvent"in window,un=null;$t&&"documentMode"in document&&(un=document.documentMode);var ep=$t&&"TextEvent"in window&&!un,gs=$t&&(!_u||un&&8<un&&11>=un),hs=" ",ys=!1;function vs(e,t){switch(e){case"keyup":return $m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xa=!1;function tp(e,t){switch(e){case"compositionend":return bs(t);case"keypress":return t.which!==32?null:(ys=!0,hs);case"textInput":return e=t.data,e===hs&&ys?null:e;default:return null}}function lp(e,t){if(xa)return e==="compositionend"||!_u&&vs(e,t)?(e=rs(),li=ju=xl=null,xa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gs&&t.locale!=="ko"?null:t.data;default:return null}}var ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ap[e.type]:t==="textarea"}function Ss(e,t,l,a){va?ba?ba.push(a):ba=[a]:va=a,t=Ji(t,"onChange"),0<t.length&&(l=new ii("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var cn=null,on=null;function np(e){nd(e,0)}function ci(e){var t=en(e);if(ls(t))return e}function As(e,t){if(e==="change")return t}var Ts=!1;if($t){var Lu;if($t){var Uu="oninput"in document;if(!Uu){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Uu=typeof Ms.oninput=="function"}Lu=Uu}else Lu=!1;Ts=Lu&&(!document.documentMode||9<document.documentMode)}function Es(){cn&&(cn.detachEvent("onpropertychange",zs),on=cn=null)}function zs(e){if(e.propertyName==="value"&&ci(on)){var t=[];Ss(t,on,e,Hu(e)),ss(np,t)}}function ip(e,t,l){e==="focusin"?(Es(),cn=t,on=l,cn.attachEvent("onpropertychange",zs)):e==="focusout"&&Es()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(on)}function cp(e,t){if(e==="click")return ci(t)}function op(e,t){if(e==="input"||e==="change")return ci(t)}function sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:sp;function sn(e,t){if(Et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Me.call(t,n)||!Et(e[n],t[n]))return!1}return!0}function Os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,t){var l=Os(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Os(l)}}function Cs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ns(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ei(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ei(e.document)}return t}function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var rp=$t&&"documentMode"in document&&11>=document.documentMode,Sa=null,ku=null,rn=null,Qu=!1;function js(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qu||Sa==null||Sa!==ei(a)||(a=Sa,"selectionStart"in a&&Gu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),rn&&sn(rn,a)||(rn=a,a=Ji(ku,"onSelect"),0<a.length&&(t=new ii("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Sa)))}function Pl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Aa={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionrun:Pl("Transition","TransitionRun"),transitionstart:Pl("Transition","TransitionStart"),transitioncancel:Pl("Transition","TransitionCancel"),transitionend:Pl("Transition","TransitionEnd")},wu={},Bs={};$t&&(Bs=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Jl(e){if(wu[e])return wu[e];if(!Aa[e])return e;var t=Aa[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Bs)return wu[e]=t[l];return e}var Ds=Jl("animationend"),qs=Jl("animationiteration"),Rs=Jl("animationstart"),fp=Jl("transitionrun"),dp=Jl("transitionstart"),mp=Jl("transitioncancel"),_s=Jl("transitionend"),Ls=new Map,Yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yu.push("scrollEnd");function Yt(e,t){Ls.set(e,t),Xl(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],Ta=0,Vu=0;function si(){for(var e=Ta,t=Vu=Ta=0;t<e;){var l=Rt[t];Rt[t++]=null;var a=Rt[t];Rt[t++]=null;var n=Rt[t];Rt[t++]=null;var i=Rt[t];if(Rt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Us(l,n,i)}}function ri(e,t,l,a){Rt[Ta++]=e,Rt[Ta++]=t,Rt[Ta++]=l,Rt[Ta++]=a,Vu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Zu(e,t,l,a){return ri(e,t,l,a),fi(e)}function Il(e,t){return ri(e,null,null,t),fi(e)}function Us(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-Mt(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function fi(e){if(50<Bn)throw Bn=0,eo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ma={};function pp(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,l,a){return new pp(e,t,l,a)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function el(e,t){var l=e.alternate;return l===null?(l=zt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Gs(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function di(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Xu(e)&&(u=1);else if(typeof e=="string")u=bg(e,l,U.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=zt(31,l,t,n),e.elementType=Xe,e.lanes=i,e;case I:return Fl(l.children,n,i,t);case Le:u=8,n|=24;break;case qe:return e=zt(12,l,t,n|2),e.elementType=qe,e.lanes=i,e;case He:return e=zt(13,l,t,n),e.elementType=He,e.lanes=i,e;case je:return e=zt(19,l,t,n),e.elementType=je,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:u=10;break e;case ze:u=9;break e;case Oe:u=11;break e;case Z:u=14;break e;case Re:u=16,a=null;break e}u=29,l=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=zt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Fl(e,t,l,a){return e=zt(7,e,a,t),e.lanes=l,e}function Ku(e,t,l){return e=zt(6,e,null,t),e.lanes=l,e}function ks(e){var t=zt(18,null,null,0);return t.stateNode=e,t}function Pu(e,t,l){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qs=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var l=Qs.get(e);return l!==void 0?l:(t={value:e,source:t,stack:fe(t)},Qs.set(e,t),t)}return{value:e,source:t,stack:fe(t)}}var Ea=[],za=0,mi=null,fn=0,Lt=[],Ut=0,Sl=null,Xt=1,Kt="";function tl(e,t){Ea[za++]=fn,Ea[za++]=mi,mi=e,fn=t}function ws(e,t,l){Lt[Ut++]=Xt,Lt[Ut++]=Kt,Lt[Ut++]=Sl,Sl=e;var a=Xt;e=Kt;var n=32-Mt(a)-1;a&=~(1<<n),l+=1;var i=32-Mt(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Xt=1<<32-Mt(t)+n|l<<n|a,Kt=i+e}else Xt=1<<i|l<<n|a,Kt=e}function Ju(e){e.return!==null&&(tl(e,1),ws(e,1,0))}function Iu(e){for(;e===mi;)mi=Ea[--za],Ea[za]=null,fn=Ea[--za],Ea[za]=null;for(;e===Sl;)Sl=Lt[--Ut],Lt[Ut]=null,Kt=Lt[--Ut],Lt[Ut]=null,Xt=Lt[--Ut],Lt[Ut]=null}function Ys(e,t){Lt[Ut++]=Xt,Lt[Ut++]=Kt,Lt[Ut++]=Sl,Xt=t.id,Kt=t.overflow,Sl=e}var lt=null,Ce=null,re=!1,Al=null,Gt=!1,Fu=Error(o(519));function Tl(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dn(_t(t,e)),Fu}function Vs(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[tt]=e,t[mt]=a,l){case"dialog":ue("cancel",t),ue("close",t);break;case"iframe":case"object":case"embed":ue("load",t);break;case"video":case"audio":for(l=0;l<qn.length;l++)ue(qn[l],t);break;case"source":ue("error",t);break;case"img":case"image":case"link":ue("error",t),ue("load",t);break;case"details":ue("toggle",t);break;case"input":ue("invalid",t),as(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ue("invalid",t);break;case"textarea":ue("invalid",t),is(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||od(t.textContent,l)?(a.popover!=null&&(ue("beforetoggle",t),ue("toggle",t)),a.onScroll!=null&&ue("scroll",t),a.onScrollEnd!=null&&ue("scrollend",t),a.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||Tl(e,!0)}function Zs(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:lt=lt.return}}function Oa(e){if(e!==lt)return!1;if(!re)return Zs(e),re=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||ho(e.type,e.memoizedProps)),l=!l),l&&Ce&&Tl(e),Zs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ce=yd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ce=yd(e)}else t===27?(t=Ce,Ll(e.type)?(e=So,So=null,Ce=e):Ce=t):Ce=lt?Qt(e.stateNode.nextSibling):null;return!0}function Wl(){Ce=lt=null,re=!1}function Wu(){var e=Al;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),Al=null),e}function dn(e){Al===null?Al=[e]:Al.push(e)}var $u=g(null),$l=null,ll=null;function Ml(e,t,l){R($u,t._currentValue),t._currentValue=l}function al(e){e._currentValue=$u.current,C($u)}function ec(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function tc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),ec(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(o(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),ec(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Ha(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var c=n.type;Et(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===se.current){if(u=n.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Gn):e=[Gn])}n=n.return}e!==null&&tc(t,e,l,a),t.flags|=262144}function pi(e){for(e=e.firstContext;e!==null;){if(!Et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){$l=e,ll=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Xs($l,e)}function gi(e,t){return $l===null&&ea(e),Xs(e,t)}function Xs(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},ll===null){if(e===null)throw Error(o(308));ll=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ll=ll.next=t;return l}var gp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},hp=s.unstable_scheduleCallback,yp=s.unstable_NormalPriority,Ke={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lc(){return{controller:new gp,data:new Map,refCount:0}}function mn(e){e.refCount--,e.refCount===0&&hp(yp,function(){e.controller.abort()})}var pn=null,ac=0,Ca=0,Na=null;function vp(e,t){if(pn===null){var l=pn=[];ac=0,Ca=uo(),Na={status:"pending",value:void 0,then:function(a){l.push(a)}}}return ac++,t.then(Ks,Ks),t}function Ks(){if(--ac===0&&pn!==null){Na!==null&&(Na.status="fulfilled");var e=pn;pn=null,Ca=0,Na=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bp(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Ps=T.S;T.S=function(e,t){Bf=Be(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vp(e,t),Ps!==null&&Ps(e,t)};var ta=g(null);function nc(){var e=ta.current;return e!==null?e:Ee.pooledCache}function hi(e,t){t===null?R(ta,ta.current):R(ta,t.pool)}function Js(){var e=nc();return e===null?null:{parent:Ke._currentValue,pool:e}}var ja=Error(o(460)),ic=Error(o(474)),yi=Error(o(542)),vi={then:function(){}};function Is(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fs(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Wt,Wt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$s(e),e;default:if(typeof t.status=="string")t.then(Wt,Wt);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$s(e),e}throw aa=t,ja}}function la(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(aa=l,ja):l}}var aa=null;function Ws(){if(aa===null)throw Error(o(459));var e=aa;return aa=null,e}function $s(e){if(e===ja||e===yi)throw Error(o(483))}var Ba=null,gn=0;function bi(e){var t=gn;return gn+=1,Ba===null&&(Ba=[]),Fs(Ba,e,t)}function hn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===L?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function er(e){function t(y,p){if(e){var b=y.deletions;b===null?(y.deletions=[p],y.flags|=16):b.push(p)}}function l(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function a(y){for(var p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function n(y,p){return y=el(y,p),y.index=0,y.sibling=null,y}function i(y,p,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<p?(y.flags|=67108866,p):b):(y.flags|=67108866,p)):(y.flags|=1048576,p)}function u(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function c(y,p,b,N){return p===null||p.tag!==6?(p=Ku(b,y.mode,N),p.return=y,p):(p=n(p,b),p.return=y,p)}function d(y,p,b,N){var V=b.type;return V===I?O(y,p,b.props.children,N,b.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Re&&la(V)===p.type)?(p=n(p,b.props),hn(p,b),p.return=y,p):(p=di(b.type,b.key,b.props,null,y.mode,N),hn(p,b),p.return=y,p)}function x(y,p,b,N){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=Pu(b,y.mode,N),p.return=y,p):(p=n(p,b.children||[]),p.return=y,p)}function O(y,p,b,N,V){return p===null||p.tag!==7?(p=Fl(b,y.mode,N,V),p.return=y,p):(p=n(p,b),p.return=y,p)}function j(y,p,b){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Ku(""+p,y.mode,b),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case k:return b=di(p.type,p.key,p.props,null,y.mode,b),hn(b,p),b.return=y,b;case ae:return p=Pu(p,y.mode,b),p.return=y,p;case Re:return p=la(p),j(y,p,b)}if(Te(p)||de(p))return p=Fl(p,y.mode,b,null),p.return=y,p;if(typeof p.then=="function")return j(y,bi(p),b);if(p.$$typeof===ge)return j(y,gi(y,p),b);xi(y,p)}return null}function S(y,p,b,N){var V=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return V!==null?null:c(y,p,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case k:return b.key===V?d(y,p,b,N):null;case ae:return b.key===V?x(y,p,b,N):null;case Re:return b=la(b),S(y,p,b,N)}if(Te(b)||de(b))return V!==null?null:O(y,p,b,N,null);if(typeof b.then=="function")return S(y,p,bi(b),N);if(b.$$typeof===ge)return S(y,p,gi(y,b),N);xi(y,b)}return null}function E(y,p,b,N,V){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return y=y.get(b)||null,c(p,y,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return y=y.get(N.key===null?b:N.key)||null,d(p,y,N,V);case ae:return y=y.get(N.key===null?b:N.key)||null,x(p,y,N,V);case Re:return N=la(N),E(y,p,b,N,V)}if(Te(N)||de(N))return y=y.get(b)||null,O(p,y,N,V,null);if(typeof N.then=="function")return E(y,p,b,bi(N),V);if(N.$$typeof===ge)return E(y,p,b,gi(p,N),V);xi(p,N)}return null}function Q(y,p,b,N){for(var V=null,me=null,w=p,$=p=0,oe=null;w!==null&&$<b.length;$++){w.index>$?(oe=w,w=null):oe=w.sibling;var pe=S(y,w,b[$],N);if(pe===null){w===null&&(w=oe);break}e&&w&&pe.alternate===null&&t(y,w),p=i(pe,p,$),me===null?V=pe:me.sibling=pe,me=pe,w=oe}if($===b.length)return l(y,w),re&&tl(y,$),V;if(w===null){for(;$<b.length;$++)w=j(y,b[$],N),w!==null&&(p=i(w,p,$),me===null?V=w:me.sibling=w,me=w);return re&&tl(y,$),V}for(w=a(w);$<b.length;$++)oe=E(w,y,$,b[$],N),oe!==null&&(e&&oe.alternate!==null&&w.delete(oe.key===null?$:oe.key),p=i(oe,p,$),me===null?V=oe:me.sibling=oe,me=oe);return e&&w.forEach(function(wl){return t(y,wl)}),re&&tl(y,$),V}function X(y,p,b,N){if(b==null)throw Error(o(151));for(var V=null,me=null,w=p,$=p=0,oe=null,pe=b.next();w!==null&&!pe.done;$++,pe=b.next()){w.index>$?(oe=w,w=null):oe=w.sibling;var wl=S(y,w,pe.value,N);if(wl===null){w===null&&(w=oe);break}e&&w&&wl.alternate===null&&t(y,w),p=i(wl,p,$),me===null?V=wl:me.sibling=wl,me=wl,w=oe}if(pe.done)return l(y,w),re&&tl(y,$),V;if(w===null){for(;!pe.done;$++,pe=b.next())pe=j(y,pe.value,N),pe!==null&&(p=i(pe,p,$),me===null?V=pe:me.sibling=pe,me=pe);return re&&tl(y,$),V}for(w=a(w);!pe.done;$++,pe=b.next())pe=E(w,y,$,pe.value,N),pe!==null&&(e&&pe.alternate!==null&&w.delete(pe.key===null?$:pe.key),p=i(pe,p,$),me===null?V=pe:me.sibling=pe,me=pe);return e&&w.forEach(function(Ng){return t(y,Ng)}),re&&tl(y,$),V}function Ae(y,p,b,N){if(typeof b=="object"&&b!==null&&b.type===I&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case k:e:{for(var V=b.key;p!==null;){if(p.key===V){if(V=b.type,V===I){if(p.tag===7){l(y,p.sibling),N=n(p,b.props.children),N.return=y,y=N;break e}}else if(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Re&&la(V)===p.type){l(y,p.sibling),N=n(p,b.props),hn(N,b),N.return=y,y=N;break e}l(y,p);break}else t(y,p);p=p.sibling}b.type===I?(N=Fl(b.props.children,y.mode,N,b.key),N.return=y,y=N):(N=di(b.type,b.key,b.props,null,y.mode,N),hn(N,b),N.return=y,y=N)}return u(y);case ae:e:{for(V=b.key;p!==null;){if(p.key===V)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){l(y,p.sibling),N=n(p,b.children||[]),N.return=y,y=N;break e}else{l(y,p);break}else t(y,p);p=p.sibling}N=Pu(b,y.mode,N),N.return=y,y=N}return u(y);case Re:return b=la(b),Ae(y,p,b,N)}if(Te(b))return Q(y,p,b,N);if(de(b)){if(V=de(b),typeof V!="function")throw Error(o(150));return b=V.call(b),X(y,p,b,N)}if(typeof b.then=="function")return Ae(y,p,bi(b),N);if(b.$$typeof===ge)return Ae(y,p,gi(y,b),N);xi(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,p!==null&&p.tag===6?(l(y,p.sibling),N=n(p,b),N.return=y,y=N):(l(y,p),N=Ku(b,y.mode,N),N.return=y,y=N),u(y)):l(y,p)}return function(y,p,b,N){try{gn=0;var V=Ae(y,p,b,N);return Ba=null,V}catch(w){if(w===ja||w===yi)throw w;var me=zt(29,w,null,y.mode);return me.lanes=N,me.return=y,me}finally{}}}var na=er(!0),tr=er(!1),El=!1;function uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ol(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=fi(e),Us(e,null,l),t}return ri(e,a,t,l),fi(e)}function yn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Xo(e,l)}}function oc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var sc=!1;function vn(){if(sc){var e=Na;if(e!==null)throw e}}function bn(e,t,l,a){sc=!1;var n=e.updateQueue;El=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var d=c,x=d.next;d.next=null,u===null?i=x:u.next=x,u=d;var O=e.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==u&&(c===null?O.firstBaseUpdate=x:c.next=x,O.lastBaseUpdate=d))}if(i!==null){var j=n.baseState;u=0,O=x=d=null,c=i;do{var S=c.lane&-536870913,E=S!==c.lane;if(E?(ce&S)===S:(a&S)===S){S!==0&&S===Ca&&(sc=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Q=e,X=c;S=t;var Ae=l;switch(X.tag){case 1:if(Q=X.payload,typeof Q=="function"){j=Q.call(Ae,j,S);break e}j=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=X.payload,S=typeof Q=="function"?Q.call(Ae,j,S):Q,S==null)break e;j=z({},j,S);break e;case 2:El=!0}}S=c.callback,S!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[S]:E.push(S))}else E={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(x=O=E,d=j):O=O.next=E,u|=S;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;E=c,c=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);O===null&&(d=j),n.baseState=d,n.firstBaseUpdate=x,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),Bl|=u,e.lanes=u,e.memoizedState=j}}function lr(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ar(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)lr(l[e],t)}var Da=g(null),Si=g(0);function nr(e,t){e=dl,R(Si,e),R(Da,t),dl=e|t.baseLanes}function rc(){R(Si,dl),R(Da,Da.current)}function fc(){dl=Si.current,C(Da),C(Si)}var Ot=g(null),kt=null;function Hl(e){var t=e.alternate;R(Ve,Ve.current&1),R(Ot,e),kt===null&&(t===null||Da.current!==null||t.memoizedState!==null)&&(kt=e)}function dc(e){R(Ve,Ve.current),R(Ot,e),kt===null&&(kt=e)}function ir(e){e.tag===22?(R(Ve,Ve.current),R(Ot,e),kt===null&&(kt=e)):Cl()}function Cl(){R(Ve,Ve.current),R(Ot,Ot.current)}function Ht(e){C(Ot),kt===e&&(kt=null),C(Ve)}var Ve=g(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||bo(l)||xo(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=0,W=null,xe=null,Pe=null,Ti=!1,qa=!1,ia=!1,Mi=0,xn=0,Ra=null,xp=0;function Ue(){throw Error(o(321))}function mc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Et(e[l],t[l]))return!1;return!0}function pc(e,t,l,a,n,i){return nl=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?wr:Cc,ia=!1,i=l(a,n),ia=!1,qa&&(i=cr(t,l,a,n)),ur(e),i}function ur(e){T.H=Tn;var t=xe!==null&&xe.next!==null;if(nl=0,Pe=xe=W=null,Ti=!1,xn=0,Ra=null,t)throw Error(o(300));e===null||Je||(e=e.dependencies,e!==null&&pi(e)&&(Je=!0))}function cr(e,t,l,a){W=e;var n=0;do{if(qa&&(Ra=null),xn=0,qa=!1,25<=n)throw Error(o(301));if(n+=1,Pe=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Yr,i=t(l,a)}while(qa);return i}function Sp(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Sn(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(W.flags|=1024),t}function gc(){var e=Mi!==0;return Mi=0,e}function hc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function yc(e){if(Ti){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ti=!1}nl=0,Pe=xe=W=null,qa=!1,xn=Mi=0,Ra=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?W.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ze(){if(xe===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Pe===null?W.memoizedState:Pe.next;if(t!==null)Pe=t,xe=e;else{if(e===null)throw W.alternate===null?Error(o(467)):Error(o(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Pe===null?W.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sn(e){var t=xn;return xn+=1,Ra===null&&(Ra=[]),e=Fs(Ra,e,t),t=W,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?wr:Cc),e}function zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sn(e);if(e.$$typeof===ge)return at(e)}throw Error(o(438,String(e)))}function vc(e){var t=null,l=W.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=W.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Ei(),W.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=ut;return t.index++,l}function il(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=Ze();return bc(t,xe,e)}function bc(e,t,l){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,d=null,x=t,O=!1;do{var j=x.lane&-536870913;if(j!==x.lane?(ce&j)===j:(nl&j)===j){var S=x.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),j===Ca&&(O=!0);else if((nl&S)===S){x=x.next,S===Ca&&(O=!0);continue}else j={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=j,u=i):d=d.next=j,W.lanes|=S,Bl|=S;j=x.action,ia&&l(i,j),i=x.hasEagerState?x.eagerState:l(i,j)}else S={lane:j,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=S,u=i):d=d.next=S,W.lanes|=j,Bl|=j;x=x.next}while(x!==null&&x!==t);if(d===null?u=i:d.next=c,!Et(i,e.memoizedState)&&(Je=!0,O&&(l=Na,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=d,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function xc(e){var t=Ze(),l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Et(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function or(e,t,l){var a=W,n=Ze(),i=re;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=t();var u=!Et((xe||n).memoizedState,l);if(u&&(n.memoizedState=l,Je=!0),n=n.queue,Tc(fr.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Pe!==null&&Pe.memoizedState.tag&1){if(a.flags|=2048,_a(9,{destroy:void 0},rr.bind(null,a,n,l,t),null),Ee===null)throw Error(o(349));i||(nl&127)!==0||sr(a,t,l)}return l}function sr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=W.updateQueue,t===null?(t=Ei(),W.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function rr(e,t,l,a){t.value=l,t.getSnapshot=a,dr(t)&&mr(e)}function fr(e,t,l){return l(function(){dr(t)&&mr(e)})}function dr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Et(e,l)}catch{return!0}}function mr(e){var t=Il(e,2);t!==null&&bt(t,e,2)}function Sc(e){var t=st();if(typeof e=="function"){var l=e;if(e=l(),ia){vl(!0);try{l()}finally{vl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:e},t}function pr(e,t,l,a){return e.baseState=l,bc(e,xe,typeof a=="function"?a:il)}function Ap(e,t,l,a,n){if(Ni(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,gr(t,i)):(i.next=l.next,t.pending=l.next=i)}}function gr(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var c=l(n,a),d=T.S;d!==null&&d(u,c),hr(e,t,c)}catch(x){Ac(e,t,x)}finally{i!==null&&u.types!==null&&(i.types=u.types),T.T=i}}else try{i=l(n,a),hr(e,t,i)}catch(x){Ac(e,t,x)}}function hr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){yr(e,t,a)},function(a){return Ac(e,t,a)}):yr(e,t,l)}function yr(e,t,l){t.status="fulfilled",t.value=l,vr(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,gr(e,l)))}function Ac(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,vr(t),t=t.next;while(t!==a)}e.action=null}function vr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function br(e,t){return t}function xr(e,t){if(re){var l=Ee.formState;if(l!==null){e:{var a=W;if(re){if(Ce){t:{for(var n=Ce,i=Gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Qt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ce=Qt(n.nextSibling),a=n.data==="F!";break e}}Tl(a)}a=!1}a&&(t=l[0])}}return l=st(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:t},l.queue=a,l=Gr.bind(null,W,a),a.dispatch=l,a=Sc(!1),i=Hc.bind(null,W,!1,a.queue),a=st(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Ap.bind(null,W,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Sr(e){var t=Ze();return Ar(t,xe,e)}function Ar(e,t,l){if(t=bc(e,t,br)[0],e=Oi(il)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Sn(t)}catch(u){throw u===ja?yi:u}else a=t;t=Ze();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(W.flags|=2048,_a(9,{destroy:void 0},Tp.bind(null,n,l),null)),[a,i,e]}function Tp(e,t){e.action=t}function Tr(e){var t=Ze(),l=xe;if(l!==null)return Ar(t,l,e);Ze(),t=t.memoizedState,l=Ze();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function _a(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=W.updateQueue,t===null&&(t=Ei(),W.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Mr(){return Ze().memoizedState}function Hi(e,t,l,a){var n=st();W.flags|=e,n.memoizedState=_a(1|t,{destroy:void 0},l,a===void 0?null:a)}function Ci(e,t,l,a){var n=Ze();a=a===void 0?null:a;var i=n.memoizedState.inst;xe!==null&&a!==null&&mc(a,xe.memoizedState.deps)?n.memoizedState=_a(t,i,l,a):(W.flags|=e,n.memoizedState=_a(1|t,i,l,a))}function Er(e,t){Hi(8390656,8,e,t)}function Tc(e,t){Ci(2048,8,e,t)}function Mp(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=Ei(),W.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function zr(e){var t=Ze().memoizedState;return Mp({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Or(e,t){return Ci(4,2,e,t)}function Hr(e,t){return Ci(4,4,e,t)}function Cr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nr(e,t,l){l=l!=null?l.concat([e]):null,Ci(4,4,Cr.bind(null,t,e),l)}function Mc(){}function jr(e,t){var l=Ze();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&mc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Br(e,t){var l=Ze();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&mc(t,a[1]))return a[0];if(a=e(),ia){vl(!0);try{e()}finally{vl(!1)}}return l.memoizedState=[a,t],a}function Ec(e,t,l){return l===void 0||(nl&1073741824)!==0&&(ce&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=qf(),W.lanes|=e,Bl|=e,l)}function Dr(e,t,l,a){return Et(l,t)?l:Da.current!==null?(e=Ec(e,l,a),Et(e,t)||(Je=!0),e):(nl&42)===0||(nl&1073741824)!==0&&(ce&261930)===0?(Je=!0,e.memoizedState=l):(e=qf(),W.lanes|=e,Bl|=e,t)}function qr(e,t,l,a,n){var i=q.p;q.p=i!==0&&8>i?i:8;var u=T.T,c={};T.T=c,Hc(e,!1,t,l);try{var d=n(),x=T.S;if(x!==null&&x(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=bp(d,a);An(e,t,O,jt(e))}else An(e,t,a,jt(e))}catch(j){An(e,t,{then:function(){},status:"rejected",reason:j},jt())}finally{q.p=i,u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}function Ep(){}function zc(e,t,l,a){if(e.tag!==5)throw Error(o(476));var n=Rr(e).queue;qr(e,n,t,Y,l===null?Ep:function(){return _r(e),l(a)})}function Rr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:Y},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _r(e){var t=Rr(e);t.next===null&&(t=e.alternate.memoizedState),An(e,t.next.queue,{},jt())}function Oc(){return at(Gn)}function Lr(){return Ze().memoizedState}function Ur(){return Ze().memoizedState}function zp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=jt();e=zl(l);var a=Ol(t,e,l);a!==null&&(bt(a,t,l),yn(a,t,l)),t={cache:lc()},e.payload=t;return}t=t.return}}function Op(e,t,l){var a=jt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ni(e)?kr(t,l):(l=Zu(e,t,l,a),l!==null&&(bt(l,e,a),Qr(l,t,a)))}function Gr(e,t,l){var a=jt();An(e,t,l,a)}function An(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ni(e))kr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Et(c,u))return ri(e,t,n,0),Ee===null&&si(),!1}catch{}finally{}if(l=Zu(e,t,n,a),l!==null)return bt(l,e,a),Qr(l,t,a),!0}return!1}function Hc(e,t,l,a){if(a={lane:2,revertLane:uo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ni(e)){if(t)throw Error(o(479))}else t=Zu(e,l,a,2),t!==null&&bt(t,e,2)}function Ni(e){var t=e.alternate;return e===W||t!==null&&t===W}function kr(e,t){qa=Ti=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Qr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Xo(e,l)}}var Tn={readContext:at,use:zi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};Tn.useEffectEvent=Ue;var wr={readContext:at,use:zi,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Er,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Hi(4194308,4,Cr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){Hi(4,2,e,t)},useMemo:function(e,t){var l=st();t=t===void 0?null:t;var a=e();if(ia){vl(!0);try{e()}finally{vl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=st();if(l!==void 0){var n=l(t);if(ia){vl(!0);try{l(t)}finally{vl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Op.bind(null,W,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Sc(e);var t=e.queue,l=Gr.bind(null,W,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Mc,useDeferredValue:function(e,t){var l=st();return Ec(l,e,t)},useTransition:function(){var e=Sc(!1);return e=qr.bind(null,W,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=W,n=st();if(re){if(l===void 0)throw Error(o(407));l=l()}else{if(l=t(),Ee===null)throw Error(o(349));(ce&127)!==0||sr(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,Er(fr.bind(null,a,i,e),[e]),a.flags|=2048,_a(9,{destroy:void 0},rr.bind(null,a,i,l,t),null),l},useId:function(){var e=st(),t=Ee.identifierPrefix;if(re){var l=Kt,a=Xt;l=(a&~(1<<32-Mt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Mi++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=xp++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Oc,useFormState:xr,useActionState:xr,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Hc.bind(null,W,!0,l),l.dispatch=t,[e,t]},useMemoCache:vc,useCacheRefresh:function(){return st().memoizedState=zp.bind(null,W)},useEffectEvent:function(e){var t=st(),l={impl:e};return t.memoizedState=l,function(){if((ye&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},Cc={readContext:at,use:zi,useCallback:jr,useContext:at,useEffect:Tc,useImperativeHandle:Nr,useInsertionEffect:Or,useLayoutEffect:Hr,useMemo:Br,useReducer:Oi,useRef:Mr,useState:function(){return Oi(il)},useDebugValue:Mc,useDeferredValue:function(e,t){var l=Ze();return Dr(l,xe.memoizedState,e,t)},useTransition:function(){var e=Oi(il)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:or,useId:Lr,useHostTransitionStatus:Oc,useFormState:Sr,useActionState:Sr,useOptimistic:function(e,t){var l=Ze();return pr(l,xe,e,t)},useMemoCache:vc,useCacheRefresh:Ur};Cc.useEffectEvent=zr;var Yr={readContext:at,use:zi,useCallback:jr,useContext:at,useEffect:Tc,useImperativeHandle:Nr,useInsertionEffect:Or,useLayoutEffect:Hr,useMemo:Br,useReducer:xc,useRef:Mr,useState:function(){return xc(il)},useDebugValue:Mc,useDeferredValue:function(e,t){var l=Ze();return xe===null?Ec(l,e,t):Dr(l,xe.memoizedState,e,t)},useTransition:function(){var e=xc(il)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Sn(e),t]},useSyncExternalStore:or,useId:Lr,useHostTransitionStatus:Oc,useFormState:Tr,useActionState:Tr,useOptimistic:function(e,t){var l=Ze();return xe!==null?pr(l,xe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:vc,useCacheRefresh:Ur};Yr.useEffectEvent=zr;function Nc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:z({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var jc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=jt(),n=zl(a);n.payload=t,l!=null&&(n.callback=l),t=Ol(e,n,a),t!==null&&(bt(t,e,a),yn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=jt(),n=zl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=Ol(e,n,a),t!==null&&(bt(t,e,a),yn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=jt(),a=zl(l);a.tag=2,t!=null&&(a.callback=t),t=Ol(e,a,l),t!==null&&(bt(t,e,l),yn(t,e,l))}};function Vr(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!sn(l,a)||!sn(n,i):!0}function Zr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&jc.enqueueReplaceState(t,t.state,null)}function ua(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=z({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Xr(e){oi(e)}function Kr(e){console.error(e)}function Pr(e){oi(e)}function ji(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Jr(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Bc(e,t,l){return l=zl(l),l.tag=3,l.payload={element:null},l.callback=function(){ji(e,t)},l}function Ir(e){return e=zl(e),e.tag=3,e}function Fr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Jr(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Jr(t,l,a),typeof n!="function"&&(Dl===null?Dl=new Set([this]):Dl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Hp(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Ha(t,l,n,!0),l=Ot.current,l!==null){switch(l.tag){case 31:case 13:return kt===null?Yi():l.alternate===null&&Ge===0&&(Ge=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===vi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),ao(e,a,n)),!1;case 22:return l.flags|=65536,a===vi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),ao(e,a,n)),!1}throw Error(o(435,l.tag))}return ao(e,a,n),Yi(),!1}if(re)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Fu&&(e=Error(o(422),{cause:a}),dn(_t(e,l)))):(a!==Fu&&(t=Error(o(423),{cause:a}),dn(_t(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=_t(a,l),n=Bc(e.stateNode,a,n),oc(e,n),Ge!==4&&(Ge=2)),!1;var i=Error(o(520),{cause:a});if(i=_t(i,l),jn===null?jn=[i]:jn.push(i),Ge!==4&&(Ge=2),t===null)return!0;a=_t(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Bc(l.stateNode,a,e),oc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Dl===null||!Dl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Ir(n),Fr(n,e,l,a),oc(l,n),!1}l=l.return}while(l!==null);return!1}var Dc=Error(o(461)),Je=!1;function nt(e,t,l,a){t.child=e===null?tr(t,null,l,a):na(t,e.child,l,a)}function Wr(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return ea(t),a=pc(e,t,l,u,i,n),c=gc(),e!==null&&!Je?(hc(e,t,n),ul(e,t,n)):(re&&c&&Ju(t),t.flags|=1,nt(e,t,a,n),t.child)}function $r(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Xu(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,ef(e,t,i,a,n)):(e=di(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Qc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:sn,l(u,a)&&e.ref===t.ref)return ul(e,t,n)}return t.flags|=1,e=el(i,a),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(sn(i,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=i,Qc(e,n))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,ul(e,t,n)}return qc(e,t,l,a,n)}function tf(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return lf(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hi(t,i!==null?i.cachePool:null),i!==null?nr(t,i):rc(),ir(t);else return a=t.lanes=536870912,lf(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(hi(t,i.cachePool),nr(t,i),Cl(),t.memoizedState=null):(e!==null&&hi(t,null),rc(),Cl());return nt(e,t,n,l),t.child}function Mn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lf(e,t,l,a,n){var i=nc();return i=i===null?null:{parent:Ke._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&hi(t,null),rc(),ir(t),e!==null&&Ha(e,t,a,!0),t.childLanes=n,null}function Bi(e,t){return t=qi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function af(e,t,l){return na(t,e.child,null,l),e=Bi(t,t.pendingProps),e.flags|=2,Ht(t),t.memoizedState=null,e}function Cp(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(a.mode==="hidden")return e=Bi(t,a),t.lanes=536870912,Mn(null,e);if(dc(t),(e=Ce)?(e=hd(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sl!==null?{id:Xt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},l=ks(e),l.return=t,t.child=l,lt=t,Ce=null)):e=null,e===null)throw Tl(t);return t.lanes=536870912,null}return Bi(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(dc(t),n)if(t.flags&256)t.flags&=-257,t=af(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Je||Ha(e,t,l,!1),n=(l&e.childLanes)!==0,Je||n){if(a=Ee,a!==null&&(u=Ko(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Il(e,u),bt(a,e,u),Dc;Yi(),t=af(e,t,l)}else e=i.treeContext,Ce=Qt(u.nextSibling),lt=t,re=!0,Al=null,Gt=!1,e!==null&&Ys(t,e),t=Bi(t,a),t.flags|=4096;return t}return e=el(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Di(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function qc(e,t,l,a,n){return ea(t),l=pc(e,t,l,a,void 0,n),a=gc(),e!==null&&!Je?(hc(e,t,n),ul(e,t,n)):(re&&a&&Ju(t),t.flags|=1,nt(e,t,l,n),t.child)}function nf(e,t,l,a,n,i){return ea(t),t.updateQueue=null,l=cr(t,a,l,n),ur(e),a=gc(),e!==null&&!Je?(hc(e,t,i),ul(e,t,i)):(re&&a&&Ju(t),t.flags|=1,nt(e,t,l,i),t.child)}function uf(e,t,l,a,n){if(ea(t),t.stateNode===null){var i=Ma,u=l.contextType;typeof u=="object"&&u!==null&&(i=at(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},uc(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?at(u):Ma,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Nc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&jc.enqueueReplaceState(i,i.state,null),bn(t,a,i,n),vn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,d=ua(l,c);i.props=d;var x=i.context,O=l.contextType;u=Ma,typeof O=="object"&&O!==null&&(u=at(O));var j=l.getDerivedStateFromProps;O=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||x!==u)&&Zr(t,i,a,u),El=!1;var S=t.memoizedState;i.state=S,bn(t,a,i,n),vn(),x=t.memoizedState,c||S!==x||El?(typeof j=="function"&&(Nc(t,l,j,a),x=t.memoizedState),(d=El||Vr(t,l,d,a,S,x,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),i.props=a,i.state=x,i.context=u,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,cc(e,t),u=t.memoizedProps,O=ua(l,u),i.props=O,j=t.pendingProps,S=i.context,x=l.contextType,d=Ma,typeof x=="object"&&x!==null&&(d=at(x)),c=l.getDerivedStateFromProps,(x=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||S!==d)&&Zr(t,i,a,d),El=!1,S=t.memoizedState,i.state=S,bn(t,a,i,n),vn();var E=t.memoizedState;u!==j||S!==E||El||e!==null&&e.dependencies!==null&&pi(e.dependencies)?(typeof c=="function"&&(Nc(t,l,c,a),E=t.memoizedState),(O=El||Vr(t,l,O,a,S,E,d)||e!==null&&e.dependencies!==null&&pi(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,E,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,E,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=E),i.props=a,i.state=E,i.context=d,a=O):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Di(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=na(t,e.child,null,n),t.child=na(t,null,l,n)):nt(e,t,l,n),t.memoizedState=i.state,e=t.child):e=ul(e,t,n),e}function cf(e,t,l,a){return Wl(),t.flags|=256,nt(e,t,l,a),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _c(e){return{baseLanes:e,cachePool:Js()}}function Lc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Nt),e}function of(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(n?Hl(t):Cl(),(e=Ce)?(e=hd(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sl!==null?{id:Xt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},l=ks(e),l.return=t,t.child=l,lt=t,Ce=null)):e=null,e===null)throw Tl(t);return xo(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(Cl(),n=t.mode,c=qi({mode:"hidden",children:c},n),a=Fl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=_c(l),a.childLanes=Lc(e,u,l),t.memoizedState=Rc,Mn(null,a)):(Hl(t),Uc(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(Hl(t),t.flags&=-257,t=Gc(e,t,l)):t.memoizedState!==null?(Cl(),t.child=e.child,t.flags|=128,t=null):(Cl(),c=a.fallback,n=t.mode,a=qi({mode:"visible",children:a.children},n),c=Fl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,na(t,e.child,null,l),a=t.child,a.memoizedState=_c(l),a.childLanes=Lc(e,u,l),t.memoizedState=Rc,t=Mn(null,a));else if(Hl(t),xo(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var x=u.dgst;u=x,a=Error(o(419)),a.stack="",a.digest=u,dn({value:a,source:null,stack:null}),t=Gc(e,t,l)}else if(Je||Ha(e,t,l,!1),u=(l&e.childLanes)!==0,Je||u){if(u=Ee,u!==null&&(a=Ko(u,l),a!==0&&a!==d.retryLane))throw d.retryLane=a,Il(e,a),bt(u,e,a),Dc;bo(c)||Yi(),t=Gc(e,t,l)}else bo(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Ce=Qt(c.nextSibling),lt=t,re=!0,Al=null,Gt=!1,e!==null&&Ys(t,e),t=Uc(t,a.children),t.flags|=4096);return t}return n?(Cl(),c=a.fallback,n=t.mode,d=e.child,x=d.sibling,a=el(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,x!==null?c=el(x,c):(c=Fl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Mn(null,a),a=t.child,c=e.child.memoizedState,c===null?c=_c(l):(n=c.cachePool,n!==null?(d=Ke._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=Js(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=Lc(e,u,l),t.memoizedState=Rc,Mn(e.child,a)):(Hl(t),l=e.child,e=l.sibling,l=el(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Uc(e,t){return t=qi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function qi(e,t){return e=zt(22,e,null,t),e.lanes=0,e}function Gc(e,t,l){return na(t,e.child,null,l),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ec(e.return,t,l)}function kc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function rf(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Ve.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,R(Ve,u),nt(e,t,a,l),a=re?fn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,l,t);else if(e.tag===19)sf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Ai(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),kc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ai(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}kc(t,!0,l,null,i,a);break;case"together":kc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ul(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Bl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Ha(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,l=el(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=el(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Qc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pi(e)))}function Np(e,t,l){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),Ml(t,Ke,e.memoizedState.cache),Wl();break;case 27:case 5:At(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:Ml(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,dc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?of(e,t,l):(Hl(t),e=ul(e,t,l),e!==null?e.sibling:null);Hl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Ha(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return rf(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(Ve,Ve.current),a)break;return null;case 22:return t.lanes=0,tf(e,t,l,t.pendingProps);case 24:Ml(t,Ke,e.memoizedState.cache)}return ul(e,t,l)}function ff(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Qc(e,l)&&(t.flags&128)===0)return Je=!1,Np(e,t,l);Je=(e.flags&131072)!==0}else Je=!1,re&&(t.flags&1048576)!==0&&ws(t,fn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=la(t.elementType),t.type=e,typeof e=="function")Xu(e)?(a=ua(e,a),t.tag=1,t=uf(null,t,e,a,l)):(t.tag=0,t=qc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Oe){t.tag=11,t=Wr(null,t,e,a,l);break e}else if(n===Z){t.tag=14,t=$r(null,t,e,a,l);break e}}throw t=G(e)||e,Error(o(306,t,""))}}return t;case 0:return qc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ua(a,t.pendingProps),uf(e,t,a,n,l);case 3:e:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,cc(e,t),bn(t,a,null,l);var u=t.memoizedState;if(a=u.cache,Ml(t,Ke,a),a!==i.cache&&tc(t,[Ke],l,!0),vn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=cf(e,t,a,l);break e}else if(a!==n){n=_t(Error(o(424)),t),dn(n),t=cf(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ce=Qt(e.firstChild),lt=t,re=!0,Al=null,Gt=!0,l=tr(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Wl(),a===n){t=ul(e,t,l);break e}nt(e,t,a,l)}t=t.child}return t;case 26:return Di(e,t),e===null?(l=Ad(t.type,null,t.pendingProps,null))?t.memoizedState=l:re||(l=t.type,e=t.pendingProps,a=Ii(F.current).createElement(l),a[tt]=t,a[mt]=e,it(a,l,e),$e(a),t.stateNode=a):t.memoizedState=Ad(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return At(t),e===null&&re&&(a=t.stateNode=bd(t.type,t.pendingProps,F.current),lt=t,Gt=!0,n=Ce,Ll(t.type)?(So=n,Ce=Qt(a.firstChild)):Ce=n),nt(e,t,t.pendingProps.children,l),Di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((n=a=Ce)&&(a=ug(a,t.type,t.pendingProps,Gt),a!==null?(t.stateNode=a,lt=t,Ce=Qt(a.firstChild),Gt=!1,n=!0):n=!1),n||Tl(t)),At(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,ho(n,i)?a=null:u!==null&&ho(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=pc(e,t,Sp,null,null,l),Gn._currentValue=n),Di(e,t),nt(e,t,a,l),t.child;case 6:return e===null&&re&&((e=l=Ce)&&(l=cg(l,t.pendingProps,Gt),l!==null?(t.stateNode=l,lt=t,Ce=null,e=!0):e=!1),e||Tl(t)),null;case 13:return of(e,t,l);case 4:return _e(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=na(t,null,a,l):nt(e,t,a,l),t.child;case 11:return Wr(e,t,t.type,t.pendingProps,l);case 7:return nt(e,t,t.pendingProps,l),t.child;case 8:return nt(e,t,t.pendingProps.children,l),t.child;case 12:return nt(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Ml(t,t.type,a.value),nt(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,ea(t),n=at(n),a=a(n),t.flags|=1,nt(e,t,a,l),t.child;case 14:return $r(e,t,t.type,t.pendingProps,l);case 15:return ef(e,t,t.type,t.pendingProps,l);case 19:return rf(e,t,l);case 31:return Cp(e,t,l);case 22:return tf(e,t,l,t.pendingProps);case 24:return ea(t),a=at(Ke),e===null?(n=nc(),n===null&&(n=Ee,i=lc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},uc(t),Ml(t,Ke,n)):((e.lanes&l)!==0&&(cc(e,t),bn(t,null,null,l),vn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ml(t,Ke,a)):(a=i.cache,Ml(t,Ke,a),a!==n.cache&&tc(t,[Ke],l,!0))),nt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function cl(e){e.flags|=4}function wc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Uf())e.flags|=8192;else throw aa=vi,ic}else e.flags&=-16777217}function df(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Od(t))if(Uf())e.flags|=8192;else throw aa=vi,ic}function Ri(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vo():536870912,e.lanes|=t,ka|=t)}function En(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function jp(e,t,l){var a=t.pendingProps;switch(Iu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),al(Ke),he(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Oa(t)?cl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wu())),Ne(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(cl(t),i!==null?(Ne(t),df(t,i)):(Ne(t),wc(t,n,null,a,l))):i?i!==e.memoizedState?(cl(t),Ne(t),df(t,i)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&cl(t),Ne(t),wc(t,n,e,a,l)),null;case 27:if(We(t),l=F.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&cl(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ne(t),null}e=U.current,Oa(t)?Vs(t):(e=bd(n,a,l),t.stateNode=e,cl(t))}return Ne(t),null;case 5:if(We(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&cl(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Ne(t),null}if(i=U.current,Oa(t))Vs(t);else{var u=Ii(F.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[tt]=t,i[mt]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(it(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&cl(t)}}return Ne(t),wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&cl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=F.current,Oa(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=lt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[tt]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||od(e.nodeValue,l)),e||Tl(t,!0)}else e=Ii(e).createTextNode(a),e[tt]=t,t.stateNode=e}return Ne(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Oa(t),l!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[tt]=t}else Wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else l=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(Ht(t),t):(Ht(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ne(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Oa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[tt]=t}else Wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),n=!1}else n=Wu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Ht(t),t):(Ht(t),null)}return Ht(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Ri(t,t.updateQueue),Ne(t),null);case 4:return he(),e===null&&ro(t.stateNode.containerInfo),Ne(t),null;case 10:return al(t.type),Ne(t),null;case 19:if(C(Ve),a=t.memoizedState,a===null)return Ne(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)En(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ai(e),i!==null){for(t.flags|=128,En(a,!1),e=i.updateQueue,t.updateQueue=e,Ri(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Gs(l,e),l=l.sibling;return R(Ve,Ve.current&1|2),re&&tl(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Be()>ki&&(t.flags|=128,n=!0,En(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ai(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ri(t,e),En(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!re)return Ne(t),null}else 2*Be()-a.renderingStartTime>ki&&l!==536870912&&(t.flags|=128,n=!0,En(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Be(),e.sibling=null,l=Ve.current,R(Ve,n?l&1|2:l&1),re&&tl(t,a.treeForkCount),e):(Ne(t),null);case 22:case 23:return Ht(t),fc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),l=t.updateQueue,l!==null&&Ri(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&C(ta),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),al(Ke),Ne(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Bp(e,t){switch(Iu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return al(Ke),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return We(t),null;case 31:if(t.memoizedState!==null){if(Ht(t),t.alternate===null)throw Error(o(340));Wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Ve),null;case 4:return he(),null;case 10:return al(t.type),null;case 22:case 23:return Ht(t),fc(),e!==null&&C(ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return al(Ke),null;case 25:return null;default:return null}}function mf(e,t){switch(Iu(t),t.tag){case 3:al(Ke),he();break;case 26:case 27:case 5:We(t);break;case 4:he();break;case 31:t.memoizedState!==null&&Ht(t);break;case 13:Ht(t);break;case 19:C(Ve);break;case 10:al(t.type);break;case 22:case 23:Ht(t),fc(),e!==null&&C(ta);break;case 24:al(Ke)}}function zn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){be(t,t.return,c)}}function Nl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var d=l,x=c;try{x()}catch(O){be(n,d,O)}}}a=a.next}while(a!==i)}}catch(O){be(t,t.return,O)}}function pf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{ar(t,l)}catch(a){be(e,e.return,a)}}}function gf(e,t,l){l.props=ua(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){be(e,t,a)}}function On(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){be(e,t,n)}}function Pt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){be(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){be(e,t,n)}else l.current=null}function hf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){be(e,e.return,n)}}function Yc(e,t,l){try{var a=e.stateNode;eg(a,e.type,l,t),a[mt]=t}catch(n){be(e,e.return,n)}}function yf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ll(e.type)||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Wt));else if(a!==4&&(a===27&&Ll(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,l),e=e.sibling;e!==null;)Zc(e,t,l),e=e.sibling}function _i(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Ll(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(_i(e,t,l),e=e.sibling;e!==null;)_i(e,t,l),e=e.sibling}function vf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);it(t,a,l),t[tt]=e,t[mt]=l}catch(i){be(e,e.return,i)}}var ol=!1,Ie=!1,Xc=!1,bf=typeof WeakSet=="function"?WeakSet:Set,et=null;function Dp(e,t){if(e=e.containerInfo,po=au,e=Ns(e),Gu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,d=-1,x=0,O=0,j=e,S=null;t:for(;;){for(var E;j!==l||n!==0&&j.nodeType!==3||(c=u+n),j!==i||a!==0&&j.nodeType!==3||(d=u+a),j.nodeType===3&&(u+=j.nodeValue.length),(E=j.firstChild)!==null;)S=j,j=E;for(;;){if(j===e)break t;if(S===l&&++x===n&&(c=u),S===i&&++O===a&&(d=u),(E=j.nextSibling)!==null)break;j=S,S=j.parentNode}j=E}l=c===-1||d===-1?null:{start:c,end:d}}else l=null}l=l||{start:0,end:0}}else l=null;for(go={focusedElem:e,selectionRange:l},au=!1,et=t;et!==null;)if(t=et,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,et=e;else for(;et!==null;){switch(t=et,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var Q=ua(l.type,n);e=a.getSnapshotBeforeUpdate(Q,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(X){be(l,l.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)vo(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,et=e;break}et=t.return}}function xf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:rl(e,l),a&4&&zn(5,l);break;case 1:if(rl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){be(l,l.return,u)}else{var n=ua(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){be(l,l.return,u)}}a&64&&pf(l),a&512&&On(l,l.return);break;case 3:if(rl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{ar(e,t)}catch(u){be(l,l.return,u)}}break;case 27:t===null&&a&4&&vf(l);case 26:case 5:rl(e,l),t===null&&a&4&&hf(l),a&512&&On(l,l.return);break;case 12:rl(e,l);break;case 31:rl(e,l),a&4&&Tf(e,l);break;case 13:rl(e,l),a&4&&Mf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=wp.bind(null,l),og(e,l))));break;case 22:if(a=l.memoizedState!==null||ol,!a){t=t!==null&&t.memoizedState!==null||Ie,n=ol;var i=Ie;ol=a,(Ie=t)&&!i?fl(e,l,(l.subtreeFlags&8772)!==0):rl(e,l),ol=n,Ie=i}break;case 30:break;default:rl(e,l)}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Au(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,gt=!1;function sl(e,t,l){for(l=l.child;l!==null;)Af(e,t,l),l=l.sibling}function Af(e,t,l){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Ia,l)}catch{}switch(l.tag){case 26:Ie||Pt(l,t),sl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ie||Pt(l,t);var a=De,n=gt;Ll(l.type)&&(De=l.stateNode,gt=!1),sl(e,t,l),_n(l.stateNode),De=a,gt=n;break;case 5:Ie||Pt(l,t);case 6:if(a=De,n=gt,De=null,sl(e,t,l),De=a,gt=n,De!==null)if(gt)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(l.stateNode)}catch(i){be(l,t,i)}else try{De.removeChild(l.stateNode)}catch(i){be(l,t,i)}break;case 18:De!==null&&(gt?(e=De,pd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Pa(e)):pd(De,l.stateNode));break;case 4:a=De,n=gt,De=l.stateNode.containerInfo,gt=!0,sl(e,t,l),De=a,gt=n;break;case 0:case 11:case 14:case 15:Nl(2,l,t),Ie||Nl(4,l,t),sl(e,t,l);break;case 1:Ie||(Pt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&gf(l,t,a)),sl(e,t,l);break;case 21:sl(e,t,l);break;case 22:Ie=(a=Ie)||l.memoizedState!==null,sl(e,t,l),Ie=a;break;default:sl(e,t,l)}}function Tf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pa(e)}catch(l){be(t,t.return,l)}}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pa(e)}catch(l){be(t,t.return,l)}}function qp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bf),t;default:throw Error(o(435,e.tag))}}function Li(e,t){var l=qp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Yp.bind(null,e,a);a.then(n,n)}})}function ht(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(Ll(c.type)){De=c.stateNode,gt=!1;break e}break;case 5:De=c.stateNode,gt=!1;break e;case 3:case 4:De=c.stateNode.containerInfo,gt=!0;break e}c=c.return}if(De===null)throw Error(o(160));Af(i,u,n),De=null,gt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ef(t,e),t=t.sibling}var Vt=null;function Ef(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),yt(e),a&4&&(Nl(3,e,e.return),zn(3,e),Nl(5,e,e.return));break;case 1:ht(t,e),yt(e),a&512&&(Ie||l===null||Pt(l,l.return)),a&64&&ol&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Vt;if(ht(t,e),yt(e),a&512&&(Ie||l===null||Pt(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[$a]||i[tt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),it(i,a,l),i[tt]=e,$e(i),a=i;break e;case"link":var u=Ed("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),it(i,a,l),n.head.appendChild(i);break;case"meta":if(u=Ed("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),it(i,a,l),n.head.appendChild(i);break;default:throw Error(o(468,a))}i[tt]=e,$e(i),a=i}e.stateNode=a}else zd(n,e.type,e.stateNode);else e.stateNode=Md(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?zd(n,e.type,e.stateNode):Md(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,l.memoizedProps)}break;case 27:ht(t,e),yt(e),a&512&&(Ie||l===null||Pt(l,l.return)),l!==null&&a&4&&Yc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ht(t,e),yt(e),a&512&&(Ie||l===null||Pt(l,l.return)),e.flags&32){n=e.stateNode;try{ya(n,"")}catch(Q){be(e,e.return,Q)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Yc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Xc=!0);break;case 6:if(ht(t,e),yt(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Q){be(e,e.return,Q)}}break;case 3:if($i=null,n=Vt,Vt=Fi(t.containerInfo),ht(t,e),Vt=n,yt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Pa(t.containerInfo)}catch(Q){be(e,e.return,Q)}Xc&&(Xc=!1,zf(e));break;case 4:a=Vt,Vt=Fi(e.stateNode.containerInfo),ht(t,e),yt(e),Vt=a;break;case 12:ht(t,e),yt(e);break;case 31:ht(t,e),yt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 13:ht(t,e),yt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Gi=Be()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 22:n=e.memoizedState!==null;var d=l!==null&&l.memoizedState!==null,x=ol,O=Ie;if(ol=x||n,Ie=O||d,ht(t,e),Ie=O,ol=x,yt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||d||ol||Ie||ca(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){d=l=t;try{if(i=d.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=d.stateNode;var j=d.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(Q){be(d,d.return,Q)}}}else if(t.tag===6){if(l===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(Q){be(d,d.return,Q)}}}else if(t.tag===18){if(l===null){d=t;try{var E=d.stateNode;n?gd(E,!0):gd(d.stateNode,!1)}catch(Q){be(d,d.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Li(e,l))));break;case 19:ht(t,e),yt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Li(e,a)));break;case 30:break;case 21:break;default:ht(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(yf(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var n=l.stateNode,i=Vc(e);_i(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(ya(u,""),l.flags&=-33);var c=Vc(e);_i(e,c,u);break;case 3:case 4:var d=l.stateNode.containerInfo,x=Vc(e);Zc(e,x,d);break;default:throw Error(o(161))}}catch(O){be(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function rl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)xf(e,t.alternate,t),t=t.sibling}function ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nl(4,t,t.return),ca(t);break;case 1:Pt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&gf(t,t.return,l),ca(t);break;case 27:_n(t.stateNode);case 26:case 5:Pt(t,t.return),ca(t);break;case 22:t.memoizedState===null&&ca(t);break;case 30:ca(t);break;default:ca(t)}e=e.sibling}}function fl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:fl(n,i,l),zn(4,i);break;case 1:if(fl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(x){be(a,a.return,x)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)lr(d[n],c)}catch(x){be(a,a.return,x)}}l&&u&64&&pf(i),On(i,i.return);break;case 27:vf(i);case 26:case 5:fl(n,i,l),l&&a===null&&u&4&&hf(i),On(i,i.return);break;case 12:fl(n,i,l);break;case 31:fl(n,i,l),l&&u&4&&Tf(n,i);break;case 13:fl(n,i,l),l&&u&4&&Mf(n,i);break;case 22:i.memoizedState===null&&fl(n,i,l),On(i,i.return);break;case 30:break;default:fl(n,i,l)}t=t.sibling}}function Kc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&mn(l))}function Pc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e))}function Zt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Of(e,t,l,a),t=t.sibling}function Of(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,l,a),n&2048&&zn(9,t);break;case 1:Zt(e,t,l,a);break;case 3:Zt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&mn(e)));break;case 12:if(n&2048){Zt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){be(t,t.return,d)}}else Zt(e,t,l,a);break;case 31:Zt(e,t,l,a);break;case 13:Zt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Zt(e,t,l,a):Hn(e,t):i._visibility&2?Zt(e,t,l,a):(i._visibility|=2,La(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Kc(u,t);break;case 24:Zt(e,t,l,a),n&2048&&Pc(t.alternate,t);break;default:Zt(e,t,l,a)}}function La(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,d=a,x=u.flags;switch(u.tag){case 0:case 11:case 15:La(i,u,c,d,n),zn(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?La(i,u,c,d,n):Hn(i,u):(O._visibility|=2,La(i,u,c,d,n)),n&&x&2048&&Kc(u.alternate,u);break;case 24:La(i,u,c,d,n),n&&x&2048&&Pc(u.alternate,u);break;default:La(i,u,c,d,n)}t=t.sibling}}function Hn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Hn(l,a),n&2048&&Kc(a.alternate,a);break;case 24:Hn(l,a),n&2048&&Pc(a.alternate,a);break;default:Hn(l,a)}t=t.sibling}}var Cn=8192;function Ua(e,t,l){if(e.subtreeFlags&Cn)for(e=e.child;e!==null;)Hf(e,t,l),e=e.sibling}function Hf(e,t,l){switch(e.tag){case 26:Ua(e,t,l),e.flags&Cn&&e.memoizedState!==null&&xg(l,Vt,e.memoizedState,e.memoizedProps);break;case 5:Ua(e,t,l);break;case 3:case 4:var a=Vt;Vt=Fi(e.stateNode.containerInfo),Ua(e,t,l),Vt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Cn,Cn=16777216,Ua(e,t,l),Cn=a):Ua(e,t,l));break;default:Ua(e,t,l)}}function Cf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];et=a,jf(a,e)}Cf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nf(e),e=e.sibling}function Nf(e){switch(e.tag){case 0:case 11:case 15:Nn(e),e.flags&2048&&Nl(9,e,e.return);break;case 3:Nn(e);break;case 12:Nn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ui(e)):Nn(e);break;default:Nn(e)}}function Ui(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];et=a,jf(a,e)}Cf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nl(8,t,t.return),Ui(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Ui(t));break;default:Ui(t)}e=e.sibling}}function jf(e,t){for(;et!==null;){var l=et;switch(l.tag){case 0:case 11:case 15:Nl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:mn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,et=a;else e:for(l=e;et!==null;){a=et;var n=a.sibling,i=a.return;if(Sf(a),a===l){et=null;break e}if(n!==null){n.return=i,et=n;break e}et=i}}}var Rp={getCacheForType:function(e){var t=at(Ke),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return at(Ke).controller.signal}},_p=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ee=null,ie=null,ce=0,ve=0,Ct=null,jl=!1,Ga=!1,Jc=!1,dl=0,Ge=0,Bl=0,oa=0,Ic=0,Nt=0,ka=0,jn=null,vt=null,Fc=!1,Gi=0,Bf=0,ki=1/0,Qi=null,Dl=null,Fe=0,ql=null,Qa=null,ml=0,Wc=0,$c=null,Df=null,Bn=0,eo=null;function jt(){return(ye&2)!==0&&ce!==0?ce&-ce:T.T!==null?uo():Po()}function qf(){if(Nt===0)if((ce&536870912)===0||re){var e=Jn;Jn<<=1,(Jn&3932160)===0&&(Jn=262144),Nt=e}else Nt=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Nt}function bt(e,t,l){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(wa(e,0),Rl(e,ce,Nt,!1)),Wa(e,l),((ye&2)===0||e!==Ee)&&(e===Ee&&((ye&2)===0&&(oa|=l),Ge===4&&Rl(e,ce,Nt,!1)),Jt(e))}function Rf(e,t,l){if((ye&6)!==0)throw Error(o(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Fa(e,t),n=a?Gp(e,t):lo(e,t,!0),i=a;do{if(n===0){Ga&&!a&&Rl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Lp(l)){n=lo(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=jn;var d=c.current.memoizedState.isDehydrated;if(d&&(wa(c,u).flags|=256),u=lo(c,u,!1),u!==2){if(Jc&&!d){c.errorRecoveryDisabledLanes|=i,oa|=i,n=4;break e}i=vt,vt=n,i!==null&&(vt===null?vt=i:vt.push.apply(vt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){wa(e,0),Rl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Rl(a,t,Nt,!jl);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Gi+300-Be(),10<n)){if(Rl(a,t,Nt,!jl),Fn(a,0,!0)!==0)break e;ml=t,a.timeoutHandle=dd(_f.bind(null,a,l,vt,Qi,Fc,t,Nt,oa,ka,jl,i,"Throttled",-0,0),n);break e}_f(a,l,vt,Qi,Fc,t,Nt,oa,ka,jl,i,null,-0,0)}}break}while(!0);Jt(e)}function _f(e,t,l,a,n,i,u,c,d,x,O,j,S,E){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},Hf(t,i,j);var Q=(i&62914560)===i?Gi-Be():(i&4194048)===i?Bf-Be():0;if(Q=Sg(j,Q),Q!==null){ml=i,e.cancelPendingCommit=Q(Vf.bind(null,e,t,i,l,a,n,u,c,d,O,j,null,S,E)),Rl(e,i,u,!x);return}}Vf(e,t,i,l,a,n,u,c,d)}function Lp(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Et(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rl(e,t,l,a){t&=~Ic,t&=~oa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-Mt(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Zo(e,l,t)}function wi(){return(ye&6)===0?(Dn(0),!1):!0}function to(){if(ie!==null){if(ve===0)var e=ie.return;else e=ie,ll=$l=null,yc(e),Ba=null,gn=0,e=ie;for(;e!==null;)mf(e.alternate,e),e=e.return;ie=null}}function wa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,ag(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ml=0,to(),Ee=e,ie=l=el(e.current,null),ce=t,ve=0,Ct=null,jl=!1,Ga=Fa(e,t),Jc=!1,ka=Nt=Ic=oa=Bl=Ge=0,vt=jn=null,Fc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Mt(a),i=1<<n;t|=e[n],a&=~i}return dl=t,si(),l}function Lf(e,t){W=null,T.H=Tn,t===ja||t===yi?(t=Ws(),ve=3):t===ic?(t=Ws(),ve=4):ve=t===Dc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ct=t,ie===null&&(Ge=1,ji(e,_t(t,e.current)))}function Uf(){var e=Ot.current;return e===null?!0:(ce&4194048)===ce?kt===null:(ce&62914560)===ce||(ce&536870912)!==0?e===kt:!1}function Gf(){var e=T.H;return T.H=Tn,e===null?Tn:e}function kf(){var e=T.A;return T.A=Rp,e}function Yi(){Ge=4,jl||(ce&4194048)!==ce&&Ot.current!==null||(Ga=!0),(Bl&134217727)===0&&(oa&134217727)===0||Ee===null||Rl(Ee,ce,Nt,!1)}function lo(e,t,l){var a=ye;ye|=2;var n=Gf(),i=kf();(Ee!==e||ce!==t)&&(Qi=null,wa(e,t)),t=!1;var u=Ge;e:do try{if(ve!==0&&ie!==null){var c=ie,d=Ct;switch(ve){case 8:to(),u=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var x=ve;if(ve=0,Ct=null,Ya(e,c,d,x),l&&Ga){u=0;break e}break;default:x=ve,ve=0,Ct=null,Ya(e,c,d,x)}}Up(),u=Ge;break}catch(O){Lf(e,O)}while(!0);return t&&e.shellSuspendCounter++,ll=$l=null,ye=a,T.H=n,T.A=i,ie===null&&(Ee=null,ce=0,si()),u}function Up(){for(;ie!==null;)Qf(ie)}function Gp(e,t){var l=ye;ye|=2;var a=Gf(),n=kf();Ee!==e||ce!==t?(Qi=null,ki=Be()+500,wa(e,t)):Ga=Fa(e,t);e:do try{if(ve!==0&&ie!==null){t=ie;var i=Ct;t:switch(ve){case 1:ve=0,Ct=null,Ya(e,t,i,1);break;case 2:case 9:if(Is(i)){ve=0,Ct=null,wf(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),Jt(e)},i.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:Is(i)?(ve=0,Ct=null,wf(t)):(ve=0,Ct=null,Ya(e,t,i,7));break;case 5:var u=null;switch(ie.tag){case 26:u=ie.memoizedState;case 5:case 27:var c=ie;if(u?Od(u):c.stateNode.complete){ve=0,Ct=null;var d=c.sibling;if(d!==null)ie=d;else{var x=c.return;x!==null?(ie=x,Vi(x)):ie=null}break t}}ve=0,Ct=null,Ya(e,t,i,5);break;case 6:ve=0,Ct=null,Ya(e,t,i,6);break;case 8:to(),Ge=6;break e;default:throw Error(o(462))}}kp();break}catch(O){Lf(e,O)}while(!0);return ll=$l=null,T.H=a,T.A=n,ye=l,ie!==null?0:(Ee=null,ce=0,si(),Ge)}function kp(){for(;ie!==null&&!Ye();)Qf(ie)}function Qf(e){var t=ff(e.alternate,e,dl);e.memoizedProps=e.pendingProps,t===null?Vi(e):ie=t}function wf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=nf(l,t,t.pendingProps,t.type,void 0,ce);break;case 11:t=nf(l,t,t.pendingProps,t.type.render,t.ref,ce);break;case 5:yc(t);default:mf(l,t),t=ie=Gs(t,dl),t=ff(l,t,dl)}e.memoizedProps=e.pendingProps,t===null?Vi(e):ie=t}function Ya(e,t,l,a){ll=$l=null,yc(t),Ba=null,gn=0;var n=t.return;try{if(Hp(e,n,t,l,ce)){Ge=1,ji(e,_t(l,e.current)),ie=null;return}}catch(i){if(n!==null)throw ie=n,i;Ge=1,ji(e,_t(l,e.current)),ie=null;return}t.flags&32768?(re||a===1?e=!0:Ga||(ce&536870912)!==0?e=!1:(jl=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ot.current,a!==null&&a.tag===13&&(a.flags|=16384))),Yf(t,e)):Vi(t)}function Vi(e){var t=e;do{if((t.flags&32768)!==0){Yf(t,jl);return}e=t.return;var l=jp(t.alternate,t,dl);if(l!==null){ie=l;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);Ge===0&&(Ge=5)}function Yf(e,t){do{var l=Bp(e.alternate,e);if(l!==null){l.flags&=32767,ie=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ie=e;return}ie=e=l}while(e!==null);Ge=6,ie=null}function Vf(e,t,l,a,n,i,u,c,d){e.cancelPendingCommit=null;do Zi();while(Fe!==0);if((ye&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Vu,bm(e,l,i,u,c,d),e===Ee&&(ie=Ee=null,ce=0),Qa=t,ql=e,ml=l,Wc=i,$c=n,Df=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vp(Kn,function(){return Jf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,n=q.p,q.p=2,u=ye,ye|=4;try{Dp(e,t,l)}finally{ye=u,q.p=n,T.T=a}}Fe=1,Zf(),Xf(),Kf()}}function Zf(){if(Fe===1){Fe=0;var e=ql,t=Qa,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var a=q.p;q.p=2;var n=ye;ye|=4;try{Ef(t,e);var i=go,u=Ns(e.containerInfo),c=i.focusedElem,d=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&Cs(c.ownerDocument.documentElement,c)){if(d!==null&&Gu(c)){var x=d.start,O=d.end;if(O===void 0&&(O=x),"selectionStart"in c)c.selectionStart=x,c.selectionEnd=Math.min(O,c.value.length);else{var j=c.ownerDocument||document,S=j&&j.defaultView||window;if(S.getSelection){var E=S.getSelection(),Q=c.textContent.length,X=Math.min(d.start,Q),Ae=d.end===void 0?X:Math.min(d.end,Q);!E.extend&&X>Ae&&(u=Ae,Ae=X,X=u);var y=Hs(c,X),p=Hs(c,Ae);if(y&&p&&(E.rangeCount!==1||E.anchorNode!==y.node||E.anchorOffset!==y.offset||E.focusNode!==p.node||E.focusOffset!==p.offset)){var b=j.createRange();b.setStart(y.node,y.offset),E.removeAllRanges(),X>Ae?(E.addRange(b),E.extend(p.node,p.offset)):(b.setEnd(p.node,p.offset),E.addRange(b))}}}}for(j=[],E=c;E=E.parentNode;)E.nodeType===1&&j.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<j.length;c++){var N=j[c];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}au=!!po,go=po=null}finally{ye=n,q.p=a,T.T=l}}e.current=t,Fe=2}}function Xf(){if(Fe===2){Fe=0;var e=ql,t=Qa,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var a=q.p;q.p=2;var n=ye;ye|=4;try{xf(e,t.alternate,t)}finally{ye=n,q.p=a,T.T=l}}Fe=3}}function Kf(){if(Fe===4||Fe===3){Fe=0,Bt();var e=ql,t=Qa,l=ml,a=Df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Qa=ql=null,Pf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Dl=null),xu(l),t=t.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Ia,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,n=q.p,q.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{T.T=t,q.p=n}}(ml&3)!==0&&Zi(),Jt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===eo?Bn++:(Bn=0,eo=e):Bn=0,Dn(0)}}function Pf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,mn(t)))}function Zi(){return Zf(),Xf(),Kf(),Jf()}function Jf(){if(Fe!==5)return!1;var e=ql,t=Wc;Wc=0;var l=xu(ml),a=T.T,n=q.p;try{q.p=32>l?32:l,T.T=null,l=$c,$c=null;var i=ql,u=ml;if(Fe=0,Qa=ql=null,ml=0,(ye&6)!==0)throw Error(o(331));var c=ye;if(ye|=4,Nf(i.current),Of(i,i.current,u,l),ye=c,Dn(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Ia,i)}catch{}return!0}finally{q.p=n,T.T=a,Pf(e,t)}}function If(e,t,l){t=_t(l,t),t=Bc(e.stateNode,t,2),e=Ol(e,t,2),e!==null&&(Wa(e,2),Jt(e))}function be(e,t,l){if(e.tag===3)If(e,e,l);else for(;t!==null;){if(t.tag===3){If(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dl===null||!Dl.has(a))){e=_t(l,e),l=Ir(2),a=Ol(t,l,2),a!==null&&(Fr(l,a,t,e),Wa(a,2),Jt(a));break}}t=t.return}}function ao(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new _p;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Jc=!0,n.add(l),e=Qp.bind(null,e,t,l),t.then(e,e))}function Qp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Ee===e&&(ce&l)===l&&(Ge===4||Ge===3&&(ce&62914560)===ce&&300>Be()-Gi?(ye&2)===0&&wa(e,0):Ic|=l,ka===ce&&(ka=0)),Jt(e)}function Ff(e,t){t===0&&(t=Vo()),e=Il(e,t),e!==null&&(Wa(e,t),Jt(e))}function wp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Ff(e,l)}function Yp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),Ff(e,l)}function Vp(e,t){return we(e,t)}var Xi=null,Va=null,no=!1,Ki=!1,io=!1,_l=0;function Jt(e){e!==Va&&e.next===null&&(Va===null?Xi=Va=e:Va=Va.next=e),Ki=!0,no||(no=!0,Xp())}function Dn(e,t){if(!io&&Ki){io=!0;do for(var l=!1,a=Xi;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-Mt(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,td(a,i))}else i=ce,i=Fn(a,a===Ee?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Fa(a,i)||(l=!0,td(a,i));a=a.next}while(l);io=!1}}function Zp(){Wf()}function Wf(){Ki=no=!1;var e=0;_l!==0&&lg()&&(e=_l);for(var t=Be(),l=null,a=Xi;a!==null;){var n=a.next,i=$f(a,t);i===0?(a.next=null,l===null?Xi=n:l.next=n,n===null&&(Va=l)):(l=a,(e!==0||(i&3)!==0)&&(Ki=!0)),a=n}Fe!==0&&Fe!==5||Dn(e),_l!==0&&(_l=0)}function $f(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-Mt(i),c=1<<u,d=n[u];d===-1?((c&l)===0||(c&a)!==0)&&(n[u]=vm(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}if(t=Ee,l=ce,l=Fn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ft(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Fa(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&ft(a),xu(l)){case 2:case 8:l=Xn;break;case 32:l=Kn;break;case 268435456:l=Yo;break;default:l=Kn}return a=ed.bind(null,e),l=we(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&ft(a),e.callbackPriority=2,e.callbackNode=null,2}function ed(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Zi()&&e.callbackNode!==l)return null;var a=ce;return a=Fn(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Rf(e,a,t),$f(e,Be()),e.callbackNode!=null&&e.callbackNode===l?ed.bind(null,e):null)}function td(e,t){if(Zi())return null;Rf(e,t,!0)}function Xp(){ng(function(){(ye&6)!==0?we(dt,Zp):Wf()})}function uo(){if(_l===0){var e=Ca;e===0&&(e=Pn,Pn<<=1,(Pn&261888)===0&&(Pn=256)),_l=e}return _l}function ld(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function ad(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Kp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=ld((n[mt]||null).action),u=a.submitter;u&&(t=(t=u[mt]||null)?ld(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new ii("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(_l!==0){var d=u?ad(n,u):new FormData(n);zc(l,{pending:!0,data:d,method:n.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=u?ad(n,u):new FormData(n),zc(l,{pending:!0,data:d,method:n.method,action:i},i,d))},currentTarget:n}]})}}for(var co=0;co<Yu.length;co++){var oo=Yu[co],Pp=oo.toLowerCase(),Jp=oo[0].toUpperCase()+oo.slice(1);Yt(Pp,"on"+Jp)}Yt(Ds,"onAnimationEnd"),Yt(qs,"onAnimationIteration"),Yt(Rs,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(fp,"onTransitionRun"),Yt(dp,"onTransitionStart"),Yt(mp,"onTransitionCancel"),Yt(_s,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),Xl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qn));function nd(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],d=c.instance,x=c.currentTarget;if(c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=x;try{i(n)}catch(O){oi(O)}n.currentTarget=null,i=d}else for(u=0;u<a.length;u++){if(c=a[u],d=c.instance,x=c.currentTarget,c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=x;try{i(n)}catch(O){oi(O)}n.currentTarget=null,i=d}}}}function ue(e,t){var l=t[Su];l===void 0&&(l=t[Su]=new Set);var a=e+"__bubble";l.has(a)||(id(t,e,2,!1),l.add(a))}function so(e,t,l){var a=0;t&&(a|=4),id(l,e,a,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[Pi]){e[Pi]=!0,Fo.forEach(function(l){l!=="selectionchange"&&(Ip.has(l)||so(l,!1,e),so(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,so("selectionchange",!1,t))}}function id(e,t,l,a){switch(qd(t)){case 2:var n=Mg;break;case 8:n=Eg;break;default:n=zo}l=n.bind(null,t,l,e),n=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function fo(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=da(c),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){a=i=u;continue e}c=c.parentNode}}a=a.return}ss(function(){var x=i,O=Hu(l),j=[];e:{var S=Ls.get(e);if(S!==void 0){var E=ii,Q=e;switch(e){case"keypress":if(ai(l)===0)break e;case"keydown":case"keyup":E=Ym;break;case"focusin":Q="focus",E=qu;break;case"focusout":Q="blur",E=qu;break;case"beforeblur":case"afterblur":E=qu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Xm;break;case Ds:case qs:case Rs:E=qm;break;case _s:E=Pm;break;case"scroll":case"scrollend":E=Cm;break;case"wheel":E=Im;break;case"copy":case"cut":case"paste":E=_m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=ps;break;case"toggle":case"beforetoggle":E=Wm}var X=(t&4)!==0,Ae=!X&&(e==="scroll"||e==="scrollend"),y=X?S!==null?S+"Capture":null:S;X=[];for(var p=x,b;p!==null;){var N=p;if(b=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||b===null||y===null||(N=tn(p,y),N!=null&&X.push(Rn(p,N,b))),Ae)break;p=p.return}0<X.length&&(S=new E(S,Q,null,l,O),j.push({event:S,listeners:X}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",S&&l!==Ou&&(Q=l.relatedTarget||l.fromElement)&&(da(Q)||Q[fa]))break e;if((E||S)&&(S=O.window===O?O:(S=O.ownerDocument)?S.defaultView||S.parentWindow:window,E?(Q=l.relatedTarget||l.toElement,E=x,Q=Q?da(Q):null,Q!==null&&(Ae=A(Q),X=Q.tag,Q!==Ae||X!==5&&X!==27&&X!==6)&&(Q=null)):(E=null,Q=x),E!==Q)){if(X=ds,N="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(X=ps,N="onPointerLeave",y="onPointerEnter",p="pointer"),Ae=E==null?S:en(E),b=Q==null?S:en(Q),S=new X(N,p+"leave",E,l,O),S.target=Ae,S.relatedTarget=b,N=null,da(O)===x&&(X=new X(y,p+"enter",Q,l,O),X.target=b,X.relatedTarget=Ae,N=X),Ae=N,E&&Q)t:{for(X=Fp,y=E,p=Q,b=0,N=y;N;N=X(N))b++;N=0;for(var V=p;V;V=X(V))N++;for(;0<b-N;)y=X(y),b--;for(;0<N-b;)p=X(p),N--;for(;b--;){if(y===p||p!==null&&y===p.alternate){X=y;break t}y=X(y),p=X(p)}X=null}else X=null;E!==null&&ud(j,S,E,X,!1),Q!==null&&Ae!==null&&ud(j,Ae,Q,X,!0)}}e:{if(S=x?en(x):window,E=S.nodeName&&S.nodeName.toLowerCase(),E==="select"||E==="input"&&S.type==="file")var me=As;else if(xs(S))if(Ts)me=op;else{me=up;var w=ip}else E=S.nodeName,!E||E.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?x&&zu(x.elementType)&&(me=As):me=cp;if(me&&(me=me(e,x))){Ss(j,me,l,O);break e}w&&w(e,S,x),e==="focusout"&&x&&S.type==="number"&&x.memoizedProps.value!=null&&Eu(S,"number",S.value)}switch(w=x?en(x):window,e){case"focusin":(xs(w)||w.contentEditable==="true")&&(Sa=w,ku=x,rn=null);break;case"focusout":rn=ku=Sa=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,js(j,l,O);break;case"selectionchange":if(rp)break;case"keydown":case"keyup":js(j,l,O)}var $;if(_u)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else xa?vs(e,l)&&(oe="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(oe="onCompositionStart");oe&&(gs&&l.locale!=="ko"&&(xa||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&xa&&($=rs()):(xl=O,ju="value"in xl?xl.value:xl.textContent,xa=!0)),w=Ji(x,oe),0<w.length&&(oe=new ms(oe,e,null,l,O),j.push({event:oe,listeners:w}),$?oe.data=$:($=bs(l),$!==null&&(oe.data=$)))),($=ep?tp(e,l):lp(e,l))&&(oe=Ji(x,"onBeforeInput"),0<oe.length&&(w=new ms("onBeforeInput","beforeinput",null,l,O),j.push({event:w,listeners:oe}),w.data=$)),Kp(j,e,x,l,O)}nd(j,t)})}function Rn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ji(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=tn(e,l),n!=null&&a.unshift(Rn(e,n,i)),n=tn(e,t),n!=null&&a.push(Rn(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Fp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ud(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,d=c.alternate,x=c.stateNode;if(c=c.tag,d!==null&&d===a)break;c!==5&&c!==26&&c!==27||x===null||(d=x,n?(x=tn(l,i),x!=null&&u.unshift(Rn(l,x,d))):n||(x=tn(l,i),x!=null&&u.push(Rn(l,x,d)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var Wp=/\r\n?/g,$p=/\u0000|\uFFFD/g;function cd(e){return(typeof e=="string"?e:""+e).replace(Wp,`
`).replace($p,"")}function od(e,t){return t=cd(t),cd(e)===t}function Se(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ya(e,""+a);break;case"className":$n(e,"class",a);break;case"tabIndex":$n(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":$n(e,l,a);break;case"style":cs(e,a,i);break;case"data":if(t!=="object"){$n(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Se(e,t,"name",n.name,n,null),Se(e,t,"formEncType",n.formEncType,n,null),Se(e,t,"formMethod",n.formMethod,n,null),Se(e,t,"formTarget",n.formTarget,n,null)):(Se(e,t,"encType",n.encType,n,null),Se(e,t,"method",n.method,n,null),Se(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=ti(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=ti(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Wn(e,"popover",a);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Wn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Om.get(l)||l,Wn(e,l,a))}}function mo(e,t,l,a,n,i){switch(l){case"style":cs(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ya(e,a):(typeof a=="number"||typeof a=="bigint")&&ya(e,""+a);break;case"onScroll":a!=null&&ue("scroll",e);break;case"onScrollEnd":a!=null&&ue("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[mt]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Wn(e,l,a)}}}function it(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,i,u,l,null)}}n&&Se(e,t,"srcSet",l.srcSet,l,null),a&&Se(e,t,"src",l.src,l,null);return;case"input":ue("invalid",e);var c=i=u=n=null,d=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var O=l[a];if(O!=null)switch(a){case"name":n=O;break;case"type":u=O;break;case"checked":d=O;break;case"defaultChecked":x=O;break;case"value":i=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Se(e,t,a,O,l,null)}}as(e,i,c,d,x,u,n,!1);return;case"select":ue("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:Se(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?ha(e,!!a,t,!1):l!=null&&ha(e,!!a,l,!0);return;case"textarea":ue("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:Se(e,t,u,c,l,null)}is(e,a,n,i);return;case"option":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,d,a,l,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(a=0;a<qn.length;a++)ue(qn[a],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Se(e,t,x,a,l,null)}return;default:if(zu(t)){for(O in l)l.hasOwnProperty(O)&&(a=l[O],a!==void 0&&mo(e,t,O,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&Se(e,t,c,a,l,null))}function eg(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,d=null,x=null,O=null;for(E in l){var j=l[E];if(l.hasOwnProperty(E)&&j!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":d=j;default:a.hasOwnProperty(E)||Se(e,t,E,null,a,j)}}for(var S in a){var E=a[S];if(j=l[S],a.hasOwnProperty(S)&&(E!=null||j!=null))switch(S){case"type":i=E;break;case"name":n=E;break;case"checked":x=E;break;case"defaultChecked":O=E;break;case"value":u=E;break;case"defaultValue":c=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:E!==j&&Se(e,t,S,E,a,j)}}Mu(e,u,c,d,x,O,i,n);return;case"select":E=u=c=S=null;for(i in l)if(d=l[i],l.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":E=d;default:a.hasOwnProperty(i)||Se(e,t,i,null,a,d)}for(n in a)if(i=a[n],d=l[n],a.hasOwnProperty(n)&&(i!=null||d!=null))switch(n){case"value":S=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==d&&Se(e,t,n,i,a,d)}t=c,l=u,a=E,S!=null?ha(e,!!l,S,!1):!!a!=!!l&&(t!=null?ha(e,!!l,t,!0):ha(e,!!l,l?[]:"",!1));return;case"textarea":E=S=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Se(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":S=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&Se(e,t,u,n,a,i)}ns(e,S,E);return;case"option":for(var Q in l)if(S=l[Q],l.hasOwnProperty(Q)&&S!=null&&!a.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Se(e,t,Q,null,a,S)}for(d in a)if(S=a[d],E=l[d],a.hasOwnProperty(d)&&S!==E&&(S!=null||E!=null))switch(d){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:Se(e,t,d,S,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in l)S=l[X],l.hasOwnProperty(X)&&S!=null&&!a.hasOwnProperty(X)&&Se(e,t,X,null,a,S);for(x in a)if(S=a[x],E=l[x],a.hasOwnProperty(x)&&S!==E&&(S!=null||E!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(137,t));break;default:Se(e,t,x,S,a,E)}return;default:if(zu(t)){for(var Ae in l)S=l[Ae],l.hasOwnProperty(Ae)&&S!==void 0&&!a.hasOwnProperty(Ae)&&mo(e,t,Ae,void 0,a,S);for(O in a)S=a[O],E=l[O],!a.hasOwnProperty(O)||S===E||S===void 0&&E===void 0||mo(e,t,O,S,a,E);return}}for(var y in l)S=l[y],l.hasOwnProperty(y)&&S!=null&&!a.hasOwnProperty(y)&&Se(e,t,y,null,a,S);for(j in a)S=a[j],E=l[j],!a.hasOwnProperty(j)||S===E||S==null&&E==null||Se(e,t,j,S,a,E)}function sd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&sd(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var d=l[a],x=d.startTime;if(x>c)break;var O=d.transferSize,j=d.initiatorType;O&&sd(j)&&(d=d.responseEnd,u+=O*(d<c?1:(c-x)/(d-x)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var po=null,go=null;function Ii(e){return e.nodeType===9?e:e.ownerDocument}function rd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=null;function lg(){var e=window.event;return e&&e.type==="popstate"?e===yo?!1:(yo=e,!0):(yo=null,!1)}var dd=typeof setTimeout=="function"?setTimeout:void 0,ag=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,ng=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(e){return md.resolve(null).then(e).catch(ig)}:dd;function ig(e){setTimeout(function(){throw e})}function Ll(e){return e==="head"}function pd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Pa(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")_n(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,_n(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[$a]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&_n(e.ownerDocument.body);l=n}while(l);Pa(t)}function gd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function vo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vo(l),Au(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function ug(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[$a])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function cg(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Qt(e.nextSibling),e===null))return null;return e}function hd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function bo(e){return e.data==="$?"||e.data==="$~"}function xo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function og(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var So=null;function yd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Qt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function bd(e,t,l){switch(t=Ii(l),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function _n(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Au(e)}var wt=new Map,xd=new Set;function Fi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pl=q.d;q.d={f:sg,r:rg,D:fg,C:dg,L:mg,m:pg,X:hg,S:gg,M:yg};function sg(){var e=pl.f(),t=wi();return e||t}function rg(e){var t=ma(e);t!==null&&t.tag===5&&t.type==="form"?_r(t):pl.r(e)}var Za=typeof document>"u"?null:document;function Sd(e,t,l){var a=Za;if(a&&typeof t=="string"&&t){var n=qt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),xd.has(n)||(xd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),it(t,"link",e),$e(t),a.head.appendChild(t)))}}function fg(e){pl.D(e),Sd("dns-prefetch",e,null)}function dg(e,t){pl.C(e,t),Sd("preconnect",e,t)}function mg(e,t,l){pl.L(e,t,l);var a=Za;if(a&&e&&t){var n='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+qt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+qt(l.imageSizes)+'"]')):n+='[href="'+qt(e)+'"]';var i=n;switch(t){case"style":i=Xa(e);break;case"script":i=Ka(e)}wt.has(i)||(e=z({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),wt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Ln(i))||t==="script"&&a.querySelector(Un(i))||(t=a.createElement("link"),it(t,"link",e),$e(t),a.head.appendChild(t)))}}function pg(e,t){pl.m(e,t);var l=Za;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+qt(a)+'"][href="'+qt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ka(e)}if(!wt.has(i)&&(e=z({rel:"modulepreload",href:e},t),wt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Un(i)))return}a=l.createElement("link"),it(a,"link",e),$e(a),l.head.appendChild(a)}}}function gg(e,t,l){pl.S(e,t,l);var a=Za;if(a&&e){var n=pa(a).hoistableStyles,i=Xa(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Ln(i)))c.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},l),(l=wt.get(i))&&Ao(e,l);var d=u=a.createElement("link");$e(d),it(d,"link",e),d._p=new Promise(function(x,O){d.onload=x,d.onerror=O}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Wi(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function hg(e,t){pl.X(e,t);var l=Za;if(l&&e){var a=pa(l).hoistableScripts,n=Ka(e),i=a.get(n);i||(i=l.querySelector(Un(n)),i||(e=z({src:e,async:!0},t),(t=wt.get(n))&&To(e,t),i=l.createElement("script"),$e(i),it(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function yg(e,t){pl.M(e,t);var l=Za;if(l&&e){var a=pa(l).hoistableScripts,n=Ka(e),i=a.get(n);i||(i=l.querySelector(Un(n)),i||(e=z({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&To(e,t),i=l.createElement("script"),$e(i),it(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Ad(e,t,l,a){var n=(n=F.current)?Fi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Xa(l.href),l=pa(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Xa(l.href);var i=pa(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Ln(e)))&&!i._p&&(u.instance=i,u.state.loading=5),wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},wt.set(e,l),i||vg(n,e,l,u.state))),t&&a===null)throw Error(o(528,""));return u}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ka(l),l=pa(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Xa(e){return'href="'+qt(e)+'"'}function Ln(e){return'link[rel="stylesheet"]['+e+"]"}function Td(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function vg(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),it(t,"link",l),$e(t),e.head.appendChild(t))}function Ka(e){return'[src="'+qt(e)+'"]'}function Un(e){return"script[async]"+e}function Md(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+qt(l.href)+'"]');if(a)return t.instance=a,$e(a),a;var n=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),$e(a),it(a,"style",n),Wi(a,l.precedence,e),t.instance=a;case"stylesheet":n=Xa(l.href);var i=e.querySelector(Ln(n));if(i)return t.state.loading|=4,t.instance=i,$e(i),i;a=Td(l),(n=wt.get(n))&&Ao(a,n),i=(e.ownerDocument||e).createElement("link"),$e(i);var u=i;return u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),it(i,"link",a),t.state.loading|=4,Wi(i,l.precedence,e),t.instance=i;case"script":return i=Ka(l.src),(n=e.querySelector(Un(i)))?(t.instance=n,$e(n),n):(a=l,(n=wt.get(i))&&(a=z({},l),To(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),$e(n),it(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Wi(a,l.precedence,e));return t.instance}function Wi(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Ao(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function To(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var $i=null;function Ed(e,t,l){if($i===null){var a=new Map,n=$i=new Map;n.set(l,a)}else n=$i,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[$a]||i[tt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function zd(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function bg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Od(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xg(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Xa(a.href),i=t.querySelector(Ln(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,$e(i);return}i=t.ownerDocument||t,a=Td(a),(n=wt.get(n))&&Ao(a,n),i=i.createElement("link"),$e(i);var u=i;u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),it(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=eu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Mo=0;function Sg(e,t){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Mo===0&&(Mo=62500*tg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Mo?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function lu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,t.forEach(Ag,e),tu=null,eu.call(e))}function Ag(e,t){if(!(t.state.loading&4)){var l=tu.get(e);if(l)var a=l.get(null);else{l=new Map,tu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=eu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Gn={$$typeof:ge,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Tg(e,t,l,a,n,i,u,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vu(0),this.hiddenUpdates=vu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Hd(e,t,l,a,n,i,u,c,d,x,O,j){return e=new Tg(e,t,l,u,d,x,O,j,c),t=1,i===!0&&(t|=24),i=zt(3,null,null,t),e.current=i,i.stateNode=e,t=lc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},uc(i),e}function Cd(e){return e?(e=Ma,e):Ma}function Nd(e,t,l,a,n,i){n=Cd(n),a.context===null?a.context=n:a.pendingContext=n,a=zl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ol(e,a,t),l!==null&&(bt(l,e,t),yn(l,e,t))}function jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Eo(e,t){jd(e,t),(e=e.alternate)&&jd(e,t)}function Bd(e){if(e.tag===13||e.tag===31){var t=Il(e,67108864);t!==null&&bt(t,e,67108864),Eo(e,67108864)}}function Dd(e){if(e.tag===13||e.tag===31){var t=jt();t=bu(t);var l=Il(e,t);l!==null&&bt(l,e,t),Eo(e,t)}}var au=!0;function Mg(e,t,l,a){var n=T.T;T.T=null;var i=q.p;try{q.p=2,zo(e,t,l,a)}finally{q.p=i,T.T=n}}function Eg(e,t,l,a){var n=T.T;T.T=null;var i=q.p;try{q.p=8,zo(e,t,l,a)}finally{q.p=i,T.T=n}}function zo(e,t,l,a){if(au){var n=Oo(a);if(n===null)fo(e,t,a,nu,l),Rd(e,a);else if(Og(n,e,t,l,a))a.stopPropagation();else if(Rd(e,a),t&4&&-1<zg.indexOf(e)){for(;n!==null;){var i=ma(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Zl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var d=1<<31-Mt(u);c.entanglements[1]|=d,u&=~d}Jt(i),(ye&6)===0&&(ki=Be()+500,Dn(0))}}break;case 31:case 13:c=Il(i,2),c!==null&&bt(c,i,2),wi(),Eo(i,2)}if(i=Oo(a),i===null&&fo(e,t,a,nu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else fo(e,t,a,null,l)}}function Oo(e){return e=Hu(e),Ho(e)}var nu=null;function Ho(e){if(nu=null,e=da(e),e!==null){var t=A(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=H(t),e!==null)return e;e=null}else if(l===31){if(e=D(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nu=e,null}function qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ot()){case dt:return 2;case Xn:return 8;case Kn:case dm:return 32;case Yo:return 268435456;default:return 32}default:return 32}}var Co=!1,Ul=null,Gl=null,kl=null,kn=new Map,Qn=new Map,Ql=[],zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rd(e,t){switch(e){case"focusin":case"focusout":Ul=null;break;case"dragenter":case"dragleave":Gl=null;break;case"mouseover":case"mouseout":kl=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function wn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ma(t),t!==null&&Bd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Og(e,t,l,a,n){switch(t){case"focusin":return Ul=wn(Ul,e,t,l,a,n),!0;case"dragenter":return Gl=wn(Gl,e,t,l,a,n),!0;case"mouseover":return kl=wn(kl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return kn.set(i,wn(kn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Qn.set(i,wn(Qn.get(i)||null,e,t,l,a,n)),!0}return!1}function _d(e){var t=da(e.target);if(t!==null){var l=A(t);if(l!==null){if(t=l.tag,t===13){if(t=H(l),t!==null){e.blockedOn=t,Jo(e.priority,function(){Dd(l)});return}}else if(t===31){if(t=D(l),t!==null){e.blockedOn=t,Jo(e.priority,function(){Dd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Oo(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Ou=a,l.target.dispatchEvent(a),Ou=null}else return t=ma(l),t!==null&&Bd(t),e.blockedOn=l,!1;t.shift()}return!0}function Ld(e,t,l){iu(e)&&l.delete(t)}function Hg(){Co=!1,Ul!==null&&iu(Ul)&&(Ul=null),Gl!==null&&iu(Gl)&&(Gl=null),kl!==null&&iu(kl)&&(kl=null),kn.forEach(Ld),Qn.forEach(Ld)}function uu(e,t){e.blockedOn===t&&(e.blockedOn=null,Co||(Co=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Hg)))}var cu=null;function Ud(e){cu!==e&&(cu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Ho(a||l)===null)continue;break}var i=ma(l);i!==null&&(e.splice(t,3),t-=3,zc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Pa(e){function t(d){return uu(d,e)}Ul!==null&&uu(Ul,e),Gl!==null&&uu(Gl,e),kl!==null&&uu(kl,e),kn.forEach(t),Qn.forEach(t);for(var l=0;l<Ql.length;l++){var a=Ql[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ql.length&&(l=Ql[0],l.blockedOn===null);)_d(l),l.blockedOn===null&&Ql.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[mt]||null;if(typeof i=="function")u||Ud(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[mt]||null)c=u.formAction;else if(Ho(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Ud(l)}}}function Gd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function No(e){this._internalRoot=e}ou.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var l=t.current,a=jt();Nd(l,a,e,t,null,null)},ou.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nd(e.current,2,null,e,null,null),wi(),t[fa]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=Po();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ql.length&&t!==0&&t<Ql[l].priority;l++);Ql.splice(l,0,e),l===0&&_d(e)}};var kd=r.version;if(kd!=="19.2.8")throw Error(o(527,kd,"19.2.8"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var Cg={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Ia=su.inject(Cg),Tt=su}catch{}}return Vn.createRoot=function(e,t){if(!v(e))throw Error(o(299));var l=!1,a="",n=Xr,i=Kr,u=Pr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Hd(e,1,!1,null,null,l,a,null,n,i,u,Gd),e[fa]=t.current,ro(e),new No(t)},Vn.hydrateRoot=function(e,t,l){if(!v(e))throw Error(o(299));var a=!1,n="",i=Xr,u=Kr,c=Pr,d=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(d=l.formState)),t=Hd(e,1,!0,t,l??null,a,n,d,i,u,c,Gd),t.context=Cd(null),l=t.current,a=jt(),a=bu(a),n=zl(a),n.callback=null,Ol(l,n,a),l=a,t.current.lanes=l,Wa(t,l),Jt(t),e[fa]=t.current,ro(e),new ou(t)},Vn.version="19.2.8",Vn}var Id;function Gg(){if(Id)return Do.exports;Id=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Do.exports=Ug(),Do.exports}var kg=Gg();const sa={QUEEN:{type:"QUEEN",name:"Queen Bee",emoji:"🐝",description:"Moves 1 space per turn. Must be placed by turn 4. Game ends when a Queen is surrounded.",count:1},SPIDER:{type:"SPIDER",name:"Spider",emoji:"🕷️",description:"Moves exactly 3 spaces around the swarm perimeter without backtracking.",count:2},BEETLE:{type:"BEETLE",name:"Beetle",emoji:"🐜",description:"Moves 1 space on ground or climbs on top of adjacent pieces to pin them.",count:2},GRASSHOPPER:{type:"GRASSHOPPER",name:"Grasshopper",emoji:"🦗",description:"Jumps in a straight line over connected pieces to the first empty space.",count:3},SOLDIER_ANT:{type:"SOLDIER_ANT",name:"Soldier Ant",emoji:"🐜",description:"Moves any distance around the perimeter of the swarm.",count:3},MOSQUITO:{type:"MOSQUITO",name:"Mosquito",emoji:"🦟",description:"Copies movement ability of any adjacent piece touching it (acts like Beetle on top of swarm).",count:1,isExpansion:!0},LADYBUG:{type:"LADYBUG",name:"Ladybug",emoji:"🐞",description:"Moves exactly 3 spaces: 2 spaces on top of the swarm and 1 space down.",count:1,isExpansion:!0},PILLBUG:{type:"PILLBUG",name:"Pillbug",emoji:"💊",description:"Moves 1 space OR picks up an adjacent unstacked piece and moves it to another adjacent empty space.",count:1,isExpansion:!0}};function te(s,r){return`${s},${r}`}const $d=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function Fd(s,r){const h=$d[(r%6+6)%6];return{q:s.q+h.q,r:s.r+h.r}}function ke(s){return $d.map(r=>({q:s.q+r.q,r:s.r+r.r}))}function gl(s,r){return s.q===r.q&&s.r===r.r}function Qg(s,r){const h=ke(s),o=ke(r);return h.filter(v=>o.some(A=>gl(v,A)))}function wg(s,r,h=42){const o=h*Math.sqrt(3)*(s+r/2),v=h*(3/2)*r;return{x:o,y:v}}function Yg(s,r,h=42){const o=[];for(let v=0;v<6;v++){const A=60*v-30,H=Math.PI/180*A,D=s+h*Math.cos(H),M=r+h*Math.sin(H);o.push(`${D.toFixed(2)},${M.toFixed(2)}`)}return o.join(" ")}function pu(s){const r=new Map;return s.forEach((h,o)=>{r.set(o,[...h])}),r}function gu(s,r){const h=s.get(te(r.q,r.r));return!h||h.length===0?null:h[h.length-1]}function Yl(s,r){const h=s.get(te(r.q,r.r));return h?h.length:0}function xt(s,r){return Yl(s,r)>0}function hu(s){const r=[];return s.forEach((h,o)=>{if(h.length>0){const[v,A]=o.split(",").map(Number);r.push({q:v,r:A})}}),r}function Vl(s,r){for(const h of s.values())for(const o of h)if(o.player===r&&o.type==="QUEEN")return!0;return!1}function fu(s,r){for(const[h,o]of s.entries())for(const v of o)if(v.player===r&&v.type==="QUEEN"){const[A,H]=h.split(",").map(Number);return{q:A,r:H}}return null}function Vg(s){const r=hu(s);if(r.length<=1)return!0;const h=new Set,o=[r[0]];for(h.add(te(r[0].q,r[0].r));o.length>0;){const v=o.shift(),A=ke(v);for(const H of A){const D=te(H.q,H.r);xt(s,H)&&!h.has(D)&&(h.add(D),o.push(H))}}return h.size===r.length}function em(s,r){const h=s.get(te(r.q,r.r));if(!h||h.length===0)return!1;if(h.length>1)return!0;const o=pu(s);return o.delete(te(r.q,r.r)),Vg(o)}function Zn(s,r,h,o=0){const v=Qg(r,h);if(v.length!==2)return!1;const A=Yl(s,v[0]),H=Yl(s,v[1]),D=Math.max(o,Yl(s,r)-1,Yl(s,h));return!(A>D&&H>D)}function yu(s,r,h,o=!0){if(xt(s,h)||!Zn(s,r,h,0))return!1;const v=pu(s),A=v.get(te(r.q,r.r));return A&&(A.length===1?v.delete(te(r.q,r.r)):A.pop()),ke(h).some(M=>xt(v,M))}function tm(s,r,h){const o=hu(s);if(o.length===0)return[{q:0,r:0}];if(o.length===1)return ke(o[0]);const v=new Set,A=[];for(const H of o)for(const D of ke(H))xt(s,D)||v.add(te(D.q,D.r));for(const H of v){const[D,M]=H.split(",").map(Number),m={q:D,r:M},B=ke(m);let z=!1,L=!1;for(const k of B){const ae=gu(s,k);ae&&(ae.player===r?z=!0:L=!0)}z&&!L&&A.push(m)}return A}function lm(s,r,h,o,v=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){if(!Vl(s,h))return[];const H=s.get(te(r.q,r.r));if(!H||H.length===0)return[];const D=H[H.length-1];if(D.player!==h)return[];if(!em(s,r))return[];const M=ko(s,r,D),m=new Set;for(const B of M)Zg(s,r,B).forEach(L=>m.add(te(L.q,L.r)));return Array.from(m).map(B=>{const[z,L]=B.split(",").map(Number);return{q:z,r:L}})}function ko(s,r,h,o){if(h.type!=="MOSQUITO")return[h.type];if(Yl(s,r)>1)return["BEETLE"];const A=new Set,H=ke(r);for(const D of H){const M=gu(s,D);M&&(M.type==="MOSQUITO"||A.add(M.type))}return A.size===0?[]:Array.from(A)}function Zg(s,r,h,o){switch(h){case"QUEEN":return am(s,r);case"SPIDER":return Xg(s,r);case"BEETLE":return Kg(s,r);case"GRASSHOPPER":return Pg(s,r);case"SOLDIER_ANT":return Jg(s,r);case"LADYBUG":return Ig(s,r);case"PILLBUG":return Fg(s,r);default:return[]}}function am(s,r){return ke(r).filter(o=>yu(s,r,o))}function Xg(s,r){const h=[];function o(D,M,m){if(M===3){h.push(D);return}const B=ke(D);for(const z of B){const L=te(z.q,z.r);if(!m.has(L)&&yu(s,D,z)){const k=new Set(m);k.add(L),o(z,M+1,k)}}}const v=new Set([te(r.q,r.r)]);o(r,0,v);const A=new Set,H=[];for(const D of h){const M=te(D.q,D.r);A.has(M)||(A.add(M),H.push(D))}return H}function Kg(s,r){const h=ke(r),o=[],v=Yl(s,r);for(const A of h){const H=Yl(s,A);if(H>=1||v>1){const D=Math.max(v-1,H);Zn(s,r,A,D)&&o.push(A)}else yu(s,r,A)&&o.push(A)}return o}function Pg(s,r){const h=[];for(let o=0;o<6;o++){let v=Fd(r,o),A=0;for(;xt(s,v);)A++,v=Fd(v,o);A>0&&h.push(v)}return h}function Jg(s,r){const h=new Set([te(r.q,r.r)]),o=[r];for(;o.length>0;){const v=o.shift(),A=ke(v);for(const H of A){const D=te(H.q,H.r);h.has(D)||yu(s,v,H)&&(h.add(D),o.push(H))}}return h.delete(te(r.q,r.r)),Array.from(h).map(v=>{const[A,H]=v.split(",").map(Number);return{q:A,r:H}})}function Ig(s,r){const h=new Set,o=ke(r).filter(v=>xt(s,v)&&Zn(s,r,v,0));for(const v of o){const A=ke(v).filter(H=>!gl(H,r)&&xt(s,H)&&Zn(s,v,H,1));for(const H of A){const D=ke(H).filter(M=>!gl(M,v)&&!xt(s,M)&&Zn(s,H,M,0));for(const M of D)h.add(te(M.q,M.r))}}return Array.from(h).map(v=>{const[A,H]=v.split(",").map(Number);return{q:A,r:H}})}function Fg(s,r){return am(s,r)}function nm(s,r,h,o=null){if(!Vl(s,h))return[];const v=s.get(te(r.q,r.r));if(!v||v.length===0)return[];const A=ke(r),H=A.filter(M=>!xt(s,M));if(H.length===0)return[];const D=[];for(const M of A)if(xt(s,M)){const m=s.get(te(M.q,M.r));if(m.length===1){const B=m[0];if(B.id===o||!em(s,M))continue;D.push({targetHex:M,piece:B,destinationHexes:H})}}return D}function Qo(s,r,h,o,v=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){const H=[],D=Vl(s,r),M=tm(s,r);if(o===4&&!D){const m=h.find(B=>B.type==="QUEEN");if(m)for(const B of M)H.push({type:"PLACE",pieceId:m.id,bugType:"QUEEN",player:r,toHex:B});return H}if(M.length>0&&h.length>0){const m=new Set,B=new Map;for(const z of h)m.has(z.type)||(m.add(z.type),B.set(z.type,z));for(const[z,L]of B.entries())for(const k of M)H.push({type:"PLACE",pieceId:L.id,bugType:z,player:r,toHex:k})}if(D){const m=hu(s);for(const B of m){const z=gu(s,B);if(z&&z.player===r){const L=lm(s,B,r,o,v,A);for(const ae of L)H.push({type:"MOVE",pieceId:z.id,bugType:z.type,player:r,fromHex:B,toHex:ae});if(ko(s,B,z).includes("PILLBUG")){const ae=nm(s,B,r,v);for(const I of ae)for(const Le of I.destinationHexes)H.push({type:"PILLBUG_SPECIAL",pieceId:z.id,bugType:z.type,player:r,fromHex:B,pillbugTargetHex:I.targetHex,toHex:Le})}}}}return H}function wo(s){const r=fu(s,1),h=fu(s,2);let o=0,v=0;r&&(o=ke(r).filter(M=>xt(s,M)).length),h&&(v=ke(h).filter(M=>xt(s,M)).length);const A=o===6,H=v===6;return A&&H?{isGameOver:!0,winner:"DRAW",p1QueenSurroundedCount:o,p2QueenSurroundedCount:v}:A?{isGameOver:!0,winner:2,p1QueenSurroundedCount:o,p2QueenSurroundedCount:v}:H?{isGameOver:!0,winner:1,p1QueenSurroundedCount:o,p2QueenSurroundedCount:v}:{isGameOver:!1,winner:null,p1QueenSurroundedCount:o,p2QueenSurroundedCount:v}}function Wg(s,r,h,o,v,A,H,D=null,M={mosquito:!0,ladybug:!0,pillbug:!0}){const m=Qo(s,r,h,v,D,M);return m.length===0?null:H==="EASY"?$g(s,r,m,v):H==="MEDIUM"?eh(s,r,h,o,v,A,m):th(s,r,h,o,v,A,m,D,M)}function $g(s,r,h,o){if(!Vl(s,r)){const v=h.filter(A=>A.bugType==="QUEEN");if(v.length>0&&(o>=3||Math.random()<.6))return v[Math.floor(Math.random()*v.length)]}return h[Math.floor(Math.random()*h.length)]}function eh(s,r,h,o,v,A,H,D,M){let m=-1/0,B=[];for(const z of H){const{nextBoard:L}=du(s,z,r,h,o),k=im(L,r);k>m?(m=k,B=[z]):k===m&&B.push(z)}return B[Math.floor(Math.random()*B.length)]}function th(s,r,h,o,v,A,H,D,M){let z=-1/0,L=1/0,k=-1/0,ae=H[0];for(const I of H){const{nextBoard:Le,nextAIReserve:qe,nextHumanReserve:ze}=du(s,I,r,h,o),ge=wo(Le);if(ge.isGameOver&&ge.winner===r)return I;const Oe=ru(Le,1,z,L,!1,r,1,qe,ze,v+1,A,I.pieceId,M);Oe>k&&(k=Oe,ae=I),z=Math.max(z,k)}return ae}function ru(s,r,h,o,v,A,H,D,M,m,B,z,L){const k=wo(s);if(k.isGameOver)return k.winner===A?1e4:k.winner===H?-1e4:0;if(r===0)return im(s,A);const qe=Qo(s,v?A:H,v?D:M,v?m:B,z,L);if(qe.length===0)return ru(s,r-1,h,o,!v,A,H,D,M,v?m+1:m,v?B:B+1,z,L);if(v){let ze=-1/0;for(const ge of qe){const{nextBoard:Oe,nextAIReserve:He,nextHumanReserve:je}=du(s,ge,A,D,M),Z=ru(Oe,r-1,h,o,!1,A,H,He,je,m+1,B,ge.pieceId,L);if(ze=Math.max(ze,Z),h=Math.max(h,Z),o<=h)break}return ze}else{let ze=1/0;for(const ge of qe){const{nextBoard:Oe,nextAIReserve:He,nextHumanReserve:je}=du(s,ge,H,D,M),Z=ru(Oe,r-1,h,o,!0,A,H,He,je,m,B+1,ge.pieceId,L);if(ze=Math.min(ze,Z),o=Math.min(o,Z),o<=h)break}return ze}}function im(s,r,h,o,v){const H=fu(s,r),D=fu(s,1);let M=0;if(D){const B=ke(D).filter(z=>xt(s,z)).length;M+=B*150,B===5&&(M+=300)}else M+=50;if(H){const B=ke(H).filter(z=>xt(s,z)).length;M-=B*180,B===5&&(M-=400)}else M-=80;const m=hu(s);for(const B of m){const z=s.get(te(B.q,B.r));if(z.length>1){const L=z[z.length-1],k=z[z.length-2];L.player===r&&k.player===1?(M+=80,k.type==="QUEEN"&&(M+=200)):L.player===1&&k.player===r&&(M-=90,k.type==="QUEEN"&&(M-=250))}}return Vl(s,r)||(M-=100),M}function du(s,r,h,o,v){const A=pu(s);let H=[...o],D=[...v];if(r.type==="PLACE"){H=H.filter(z=>z.id!==r.pieceId),D=D.filter(z=>z.id!==r.pieceId);const M={id:r.pieceId,type:r.bugType,player:h},m=te(r.toHex.q,r.toHex.r),B=A.get(m)||[];A.set(m,[...B,M])}else if(r.type==="MOVE"){if(r.fromHex){const M=te(r.fromHex.q,r.fromHex.r),m=A.get(M)||[],B=m.pop();if(m.length===0&&A.delete(M),B){const z=te(r.toHex.q,r.toHex.r),L=A.get(z)||[];A.set(z,[...L,B])}}}else if(r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex){const M=te(r.pillbugTargetHex.q,r.pillbugTargetHex.r),m=A.get(M)||[],B=m.pop();if(m.length===0&&A.delete(M),B){const z=te(r.toHex.q,r.toHex.r),L=A.get(z)||[];A.set(z,[...L,B])}}return{nextBoard:A,nextAIReserve:H,nextHumanReserve:D}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ah=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,h,o)=>o?o.toUpperCase():h.toLowerCase()),Wd=s=>{const r=ah(s);return r.charAt(0).toUpperCase()+r.slice(1)},um=(...s)=>s.filter((r,h,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===h).join(" ").trim(),nh=s=>{for(const r in s)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ih={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=P.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:h=2,absoluteStrokeWidth:o,className:v="",children:A,iconNode:H,...D},M)=>P.createElement("svg",{ref:M,...ih,width:r,height:r,stroke:s,strokeWidth:o?Number(h)*24/Number(r):h,className:um("lucide",v),...!A&&!nh(D)&&{"aria-hidden":"true"},...D},[...H.map(([m,B])=>P.createElement(m,B)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(s,r)=>{const h=P.forwardRef(({className:o,...v},A)=>P.createElement(uh,{ref:A,iconNode:r,className:um(`lucide-${lh(Wd(s))}`,`lucide-${s}`,o),...v}));return h.displayName=Wd(s),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],oh=Qe("book-open",ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],rh=Qe("bot",sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],dh=Qe("check",fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ph=Qe("chevron-down",mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hh=Qe("chevron-up",gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],cm=Qe("circle-alert",yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],om=Qe("code-xml",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],xh=Qe("copy",bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ah=Qe("download",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Mh=Qe("history",Th);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],zh=Qe("maximize-2",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Hh=Qe("move",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Nh=Qe("play",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Bh=Qe("refresh-cw",jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qh=Qe("rotate-ccw",Dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_h=Qe("settings",Rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Uh=Qe("sparkles",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],kh=Qe("trophy",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],wh=Qe("users",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sm=Qe("x",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Zh=Qe("zoom-in",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Kh=Qe("zoom-out",Xh),Ph={appTitle:{en:"BUGZ",es:"BUGZ",pt:"BUGZ",fr:"BUGZ",de:"BUGZ",ja:"BUGZ",zh:"BUGZ"},appSubtitle:{en:"Strategy",es:"Estrategia",pt:"Estratégia",fr:"Stratégie",de:"Strategie",ja:"ストラテジー",zh:"战略"},vsAi:{en:"VS AI ({diff})",es:"VS IA ({diff})",pt:"VS IA ({diff})",fr:"VS IA ({diff})",de:"Gegen KI ({diff})",ja:"AIと対戦 ({diff})",zh:"对战AI（{diff}）"},passAndPlay:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},aiThinking:{en:"AI Thinking...",es:"IA pensando…",pt:"IA pensando…",fr:"L’IA réfléchit…",de:"KI denkt…",ja:"AI思考中…",zh:"AI思考中…"},playersTurn:{en:"Player {n}'s Turn ({color})",es:"Turno del Jugador {n} ({color})",pt:"Vez do Jogador {n} ({color})",fr:"Tour du Joueur {n} ({color})",de:"Spieler {n} am Zug ({color})",ja:"プレイヤー{n}の番（{color}）",zh:"玩家{n}的回合（{color}）"},white:{en:"White",es:"Blanco",pt:"Branco",fr:"Blanc",de:"Weiß",ja:"白",zh:"白"},black:{en:"Black",es:"Negro",pt:"Preto",fr:"Noir",de:"Schwarz",ja:"黒",zh:"黑"},undoTitle:{en:"Undo Move (Unlimited Step Rewind)",es:"Deshacer movimiento (rebobinado ilimitado)",pt:"Desfazer movimento (rebobinar ilimitado)",fr:"Annuler le coup (retour illimité)",de:"Zug rückgängig (unbegrenztes Zurückspulen)",ja:"手を戻す（無制限リプレイ）",zh:"撤销一步（无限回退）"},newGameTitle:{en:"New Game / Match Settings",es:"Nueva partida / Configuración",pt:"Nova partida / Configurações",fr:"Nouvelle partie / Paramètres",de:"Neues Spiel / Einstellungen",ja:"新規ゲーム / 設定",zh:"新游戏 / 设置"},kotlinTitle:{en:"View & Export Android Kotlin Compose Code",es:"Ver y exportar el código Kotlin Compose",pt:"Ver e exportar o código Kotlin Compose",fr:"Voir et exporter le code Kotlin Compose",de:"Kotlin-Compose-Code ansehen & exportieren",ja:"Kotlin Composeコードの表示と出力",zh:"查看并导出Kotlin Compose代码"},kotlinSource:{en:"Kotlin Source",es:"Código Kotlin",pt:"Código Kotlin",fr:"Code Kotlin",de:"Kotlin-Quellcode",ja:"Kotlinソース",zh:"Kotlin源码"},toastForcedPass:{en:"Player {n} has no legal moves available. Turn passed!",es:"El Jugador {n} no tiene movimientos legales. ¡Turno pasado!",pt:"O Jogador {n} não tem movimentos legais. Turno passado!",fr:"Le Joueur {n} n’a aucun coup légal. Tour passé !",de:"Spieler {n} hat keine legalen Züge. Zug übersprungen!",ja:"プレイヤー{n}は合法手がありません。パスしました！",zh:"玩家{n}没有合法走法。跳过回合！"},toastAiPass:{en:"AI (Player 2) has no valid moves. Turn passed!",es:"La IA (Jugador 2) no tiene movimientos válidos. ¡Turno pasado!",pt:"A IA (Jogador 2) não tem movimentos válidos. Turno passado!",fr:"L’IA (Joueur 2) n’a aucun coup valide. Tour passé !",de:"Die KI (Spieler 2) hat keine gültigen Züge. Zug übersprungen!",ja:"AI（プレイヤー2）は有効な手がありません。パスしました！",zh:"AI（玩家2）没有有效走法。跳过回合！"},passLogDesc:{en:"Player {n} was forced to pass turn.",es:"El Jugador {n} se vio obligado a pasar.",pt:"O Jogador {n} foi obrigado a passar.",fr:"Le Joueur {n} a été forcé de passer.",de:"Spieler {n} musste den Zug aussetzen.",ja:"プレイヤー{n}はパスを余儀なくされました。",zh:"玩家{n}被迫跳过回合。"},placedDesc:{en:"Placed {bug} at ({q}, {r})",es:"Colocó {bug} en ({q}, {r})",pt:"Colocou {bug} em ({q}, {r})",fr:"A placé {bug} en ({q}, {r})",de:"{bug} bei ({q}, {r}) platziert",ja:"{bug} を ({q}, {r}) に配置",zh:"将{bug}放置在({q}, {r})"},movedDesc:{en:"Moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"Movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"Moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"A déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"{bug} von ({q1}, {r1}) nach ({q2}, {r2}) bewegt",ja:"{bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"将{bug}从({q1}, {r1})移动到({q2}, {r2})"},pillbugMovedDesc:{en:"Pillbug moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"La cochinilla movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"A bicho-bola moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"Le cloporte a déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"Assel bewegt {bug} von ({q1}, {r1}) nach ({q2}, {r2})",ja:"ダンゴムシが {bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"潮虫将{bug}从({q1}, {r1})移动到({q2}, {r2})"},zoomIn:{en:"Zoom In",es:"Acercar",pt:"Aproximar",fr:"Zoom avant",de:"Vergrößern",ja:"拡大",zh:"放大"},zoomOut:{en:"Zoom Out",es:"Alejar",pt:"Afastar",fr:"Zoom arrière",de:"Verkleinern",ja:"縮小",zh:"缩小"},recenter:{en:"Recenter Board",es:"Centrar tablero",pt:"Centralizar tabuleiro",fr:"Recentrer le plateau",de:"Brett zentrieren",ja:"盤面を中央に",zh:"居中棋盘"},panHint:{en:"Drag canvas to pan • Scroll to zoom",es:"Arrastra para mover • Rueda para zoom",pt:"Arraste para mover • Role para zoom",fr:"Faites glisser pour déplacer • Molette pour zoomer",de:"Ziehen zum Verschieben • Scrollen zum Zoomen",ja:"ドラッグで移動 • スクロールでズーム",zh:"拖动画布平移 • 滚动缩放"},setupSubtitle:{en:"Configure your match mode, AI strength, and expansion pieces.",es:"Configura el modo de partida, la fuerza de la IA y las piezas de expansión.",pt:"Configure o modo de partida, a força da IA e as peças de expansão.",fr:"Configurez le mode de partie, la force de l’IA et les pièces d’extension.",de:"Konfiguriere Spielmodus, KI-Stärke und Erweiterungspieces.",ja:"対戦モード、AIの強さ、拡張ピースを設定します。",zh:"设置对战模式、AI强度和扩展棋子。"},gameModeLabel:{en:"Game Mode",es:"Modo de juego",pt:"Modo de jogo",fr:"Mode de jeu",de:"Spielmodus",ja:"ゲームモード",zh:"游戏模式"},passPlayBtn:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},vsAiBtn:{en:"VS AI Engine",es:"VS Motor IA",pt:"VS Motor IA",fr:"VS Moteur IA",de:"Gegen KI-Engine",ja:"AIエンジンと対戦",zh:"对战AI引擎"},aiDifficultyLabel:{en:"AI Difficulty",es:"Dificultad de la IA",pt:"Dificuldade da IA",fr:"Difficulté de l’IA",de:"KI-Schwierigkeit",ja:"AIの難易度",zh:"AI难度"},easyBtn:{en:"Easy",es:"Fácil",pt:"Fácil",fr:"Facile",de:"Leicht",ja:"かんたん",zh:"简单"},mediumBtn:{en:"Medium",es:"Medio",pt:"Médio",fr:"Moyen",de:"Mittel",ja:"ふつう",zh:"中等"},hardBtn:{en:"Hard (Minimax)",es:"Difícil (Minimax)",pt:"Difícil (Minimax)",fr:"Difficile (Minimax)",de:"Schwer (Minimax)",ja:"むずかしい（Minimax）",zh:"困难（Minimax）"},expansionsLabel:{en:"Expansions",es:"Expansiones",pt:"Expansões",fr:"Extensions",de:"Erweiterungen",ja:"拡張",zh:"扩展"},mosquitoLabel:{en:"🦟 The Mosquito",es:"🦟 El mosquito",pt:"🦟 O pernilongo",fr:"🦟 Le moustique",de:"🦟 Die Mücke",ja:"🦟 蚊",zh:"🦟 蚊子"},ladybugLabel:{en:"🐞 The Ladybug",es:"🐞 La mariquita",pt:"🐞 A joaninha",fr:"🐞 La coccinelle",de:"🐞 Der Marienkäfer",ja:"🐞 テントウムシ",zh:"🐞 瓢虫"},pillbugLabel:{en:"💊 The Pillbug",es:"💊 La cochinilla",pt:"💊 O bicho-bola",fr:"💊 Le cloporte",de:"💊 Die Assel",ja:"💊 ダンゴムシ",zh:"💊 潮虫"},cancel:{en:"Cancel",es:"Cancelar",pt:"Cancelar",fr:"Annuler",de:"Abbrechen",ja:"キャンセル",zh:"取消"},startGame:{en:"Start Game",es:"Comenzar",pt:"Começar",fr:"Commencer",de:"Start",ja:"開始",zh:"开始游戏"},learnToPlay:{en:"Learn to Play",es:"Aprende a jugar",pt:"Aprenda a jogar",fr:"Apprendre à jouer",de:"Lernen zu spielen",ja:"遊び方を学ぶ",zh:"学习玩法"},playerLabel:{en:"Player {n} ({color})",es:"Jugador {n} ({color})",pt:"Jogador {n} ({color})",fr:"Joueur {n} ({color})",de:"Spieler {n} ({color})",ja:"プレイヤー{n}（{color}）",zh:"玩家{n}（{color}）"},reserveCount:{en:"Reserve ({n})",es:"Reserva ({n})",pt:"Reserva ({n})",fr:"Réserve ({n})",de:"Reserve ({n})",ja:"リザーブ（{n}）",zh:"后备（{n}）"},turn4Warning:{en:"Turn 4 Mandatory: You MUST place your Queen Bee!",es:"Turno 4 obligatorio: ¡Debes colocar tu abeja reina!",pt:"Turno 4 obrigatório: Você DEVE colocar sua abelha rainha!",fr:"Tour 4 obligatoire : vous DEVEZ placer votre reine !",de:"Pflichtzug 4: Du MUSST deine Bienenkönigin platzieren!",ja:"4手目必須: 女王バチを配置しなければなりません！",zh:"第4回合强制：你必须放置蜂后！"},moveHistory:{en:"Move History ({n})",es:"Historial de movimientos ({n})",pt:"Histórico de movimentos ({n})",fr:"Historique des coups ({n})",de:"Zugverlauf ({n})",ja:"手番履歴（{n}）",zh:"走法历史（{n}）"},noMoves:{en:"No moves recorded yet.",es:"Aún no hay movimientos.",pt:"Nenhum movimento registrado ainda.",fr:"Aucun coup enregistré pour l’instant.",de:"Noch keine Züge aufgezeichnet.",ja:"まだ手は記録されていません。",zh:"暂无走法记录。"},drawTitle:{en:"🤝 Mutual Draw!",es:"🤝 ¡Empate mutuo!",pt:"🤝 Empate mútuo!",fr:"🤝 Égalité mutuelle !",de:"🤝 Unentschieden!",ja:"🤝 引き分け！",zh:"🤝 平局！"},p1WinTitle:{en:"🎉 Player 1 (White) Wins!",es:"🎉 ¡Gana el Jugador 1 (Blanco)!",pt:"🎉 O Jogador 1 (Branco) venceu!",fr:"🎉 Le Joueur 1 (Blanc) gagne !",de:"🎉 Spieler 1 (Weiß) gewinnt!",ja:"🎉 プレイヤー1（白）の勝利！",zh:"🎉 玩家1（白）获胜！"},p2WinTitle:{en:"🎉 Player 2 (Black) Wins!",es:"🎉 ¡Gana el Jugador 2 (Negro)!",pt:"🎉 O Jogador 2 (Preto) venceu!",fr:"🎉 Le Joueur 2 (Noir) gagne !",de:"🎉 Spieler 2 (Schwarz) gewinnt!",ja:"🎉 プレイヤー2（黒）の勝利！",zh:"🎉 玩家2（黑）获胜！"},drawDesc:{en:"Both Queen Bees were completely surrounded simultaneously!",es:"¡Ambas abejas reinas quedaron completamente rodeadas a la vez!",pt:"As duas abelhas rainhas foram completamente cercadas ao mesmo tempo!",fr:"Les deux reines ont été entièrement encerclées en même temps !",de:"Beide Bienenköniginnen wurden gleichzeitig vollständig eingekreist!",ja:"両方の女王バチが同時に完全に囲まれました！",zh:"两只蜂后同时被完全围住！"},winDesc:{en:"The opposing Queen Bee has been completely surrounded on all 6 sides!",es:"¡La abeja reina rival quedó completamente rodeada por los 6 lados!",pt:"A abelha rainha adversária foi completamente cercada nos 6 lados!",fr:"La reine adverse a été entièrement encerclée sur ses 6 côtés !",de:"Die gegnerische Bienenkönigin wurde auf allen 6 Seiten vollständig eingekreist!",ja:"相手の女王バチが6方向すべてを囲まれました！",zh:"对手的蜂后已被六面全部围住！"},playAgain:{en:"Play Again",es:"Jugar de nuevo",pt:"Jogar de novo",fr:"Rejouer",de:"Nochmal spielen",ja:"もう一度プレイ",zh:"再来一局"},matchOptions:{en:"Match Options / Difficulty",es:"Opciones / Dificultad",pt:"Opções / Dificuldade",fr:"Options / Difficulté",de:"Optionen / Schwierigkeit",ja:"対戦設定 / 難易度",zh:"对局选项 / 难度"},rulesTitle:{en:"How to Play Bugz",es:"Cómo jugar a Bugz",pt:"Como jogar Bugz",fr:"Comment jouer à Bugz",de:"So spielst du Bugz",ja:"Bugzの遊び方",zh:"如何玩Bugz"},close:{en:"Close",es:"Cerrar",pt:"Fechar",fr:"Fermer",de:"Schließen",ja:"閉じる",zh:"关闭"},goalTitle:{en:"🎯 Goal:",es:"🎯 Objetivo:",pt:"🎯 Objetivo:",fr:"🎯 Objectif :",de:"🎯 Ziel:",ja:"🎯 目的:",zh:"🎯 目标："},goalDesc:{en:"Surround the opponent's Queen Bee with pieces on all six sides. First to do so wins; both surrounded at once is a draw.",es:"Rodea la abeja reina del rival con piezas por los seis lados. El primero en lograrlo gana; si ambas quedan rodeadas a la vez, es empate.",pt:"Cerque a abelha rainha do oponente com peças em todos os seis lados. Quem conseguir primeiro vence; se ambas forem cercadas ao mesmo tempo, empata.",fr:"Encerclez la reine adverse avec des pièces sur les six côtés. Le premier à y parvenir gagne ; si les deux sont encerclées à la fois, c’est une égalité.",de:"Umschließe die Bienenkönigin des Gegners auf allen sechs Seiten. Wer das zuerst schafft, gewinnt; sind beide gleichzeitig eingekreist, ist es ein Unentschieden.",ja:"相手の女王バチの6方向すべてを自分の駒で囲みましょう。先に囲んだ方が勝ち。同時なら引き分けです。",zh:"用棋子将对手的蜂后六面围住。先完成者获胜；同时围住则为平局。"},coreRulesTitle:{en:"📜 Core Rules",es:"📜 Reglas básicas",pt:"📜 Regras básicas",fr:"📜 Règles de base",de:"📜 Grundregeln",ja:"📜 基本ルール",zh:"📜 基本规则"},coreRule1:{en:"Play one piece per turn (placement) or move one of your pieces.",es:"Coloca una pieza por turno o mueve una de tus piezas.",pt:"Jogue uma peça por turno (colocação) ou mova uma de suas peças.",fr:"Jouez une pièce par tour (placement) ou déplacez une de vos pièces.",de:"Setze pro Zug eine Kachel (Platzierung) oder bewege eine deiner Kacheln.",ja:"毎ターン1枚配置するか、自分の駒を1つ動かします。",zh:"每回合放置一枚棋子，或移动自己的一枚棋子。"},coreRule2:{en:"Your Queen Bee must be introduced by your 4th turn.",es:"Debes introducir tu abeja reina en tu 4º turno.",pt:"Sua abelha rainha deve ser introduzida até o seu 4º turno.",fr:"Votre reine doit être introduite avant votre 4e tour.",de:"Deine Bienenkönigin muss bis zu deinem 4. Zug eingeführt werden.",ja:"女王バチは4手目までに配置しなければなりません。",zh:"蜂后必须在你的第4回合之前上场。"},coreRule3:{en:"Your first piece is placed anywhere; later pieces must be placed adjacent to one of your pieces. Except for your second placement, pieces may not be placed touching an opponent's piece.",es:"Tu primera pieza se coloca en cualquier lugar; las siguientes deben ir adyacentes a una de tus piezas. Salvo la segunda colocación, no puedes colocar piezas tocando piezas del rival.",pt:"Sua primeira peça pode ser colocada em qualquer lugar; as seguintes devem ficar adjacentes a uma de suas peças. Exceto a segunda colocação, as peças não podem tocar peças do oponente.",fr:"Votre première pièce est placée n’importe où ; les suivantes doivent être adjacentes à une de vos pièces. Sauf pour la deuxième pose, vous ne pouvez pas poser une pièce touchant une pièce adverse.",de:"Deine erste Kachel platzierst du überall; spätere müssen an eine deiner Kacheln angrenzen. Außer bei deiner zweiten Platzierung dürfen Kacheln nicht gegnerische Kacheln berühren.",ja:"最初の1枚はどこにでも置けます。以降は自分の駒に隣接して置きます。2枚目の配置以外は、相手の駒に接する配置はできません。",zh:"第一枚棋子可放在任意位置；之后的棋子必须与自己的棋子相邻。除第二次放置外，棋子不能与对手棋子接触。"},coreRule4:{en:"The swarm must always stay connected. You may never move a piece that would split the Swarm, and you may not move a piece into a gap unless it still fits the freedom-to-move rule (no squeezing between stacked pieces).",es:"El enjambre debe permanecer siempre conectado. Nunca muevas una pieza que dividiría el enjambre, ni la metas en un hueco si no respeta la regla de libertad de movimiento (sin apretujones entre piezas apiladas).",pt:"O enxame deve permanecer sempre conectado. Nunca mova uma peça que dividiria o enxame, nem mova para um vão sem respeitar a regra de liberdade de movimento (sem apertar entre peças empilhadas).",fr:"L’essaim doit toujours rester connecté. Vous ne pouvez jamais déplacer une pièce qui diviserait l’essaim, ni la glisser dans un espace étroit (pas de glissement entre pièces empilées).",de:"Der Schwarm muss immer verbunden bleiben. Du darfst nie eine Kachel ziehen, die den Schwarm spaltet, und nicht in eine Lücke ziehen, es sei denn, es gilt die Bewegungsfreiheitsregel (kein Durchquetschen zwischen gestapelten Kacheln).",ja:"ハイブは常に繋がっていなければなりません。盤面を分断する動きはできず、積み上げた駒の隙間に入り込む動きも禁止です。",zh:"蜂群必须始终保持连通。不得移动会分裂蜂群的棋子，也不得将棋子挤入过窄的缝隙（不得在堆叠棋子之间挤入）。"},insectTitle:{en:"🦗 Insect Movements",es:"🦗 Movimientos de los insectos",pt:"🦗 Movimentos dos insetos",fr:"🦗 Déplacements des insectes",de:"🦗 Bewegungen der Insekten",ja:"🦗 昆虫の動き",zh:"🦗 昆虫的走法"},insectQueen:{en:"moves exactly 1 hex per turn.",es:"se mueve exactamente 1 hexágono por turno.",pt:"move exatamente 1 hexágono por turno.",fr:"se déplace d’exactement 1 hexagone par tour.",de:"zieht genau 1 Feld pro Zug.",ja:"毎ターンちょうど1マス移動します。",zh:"每回合恰好移动1格。"},insectSpider:{en:"crawls exactly 3 hexes along the outside edge, never retracing.",es:"se arrastra exactamente 3 hexágonos por el borde exterior, sin retroceder.",pt:"rasteja exatamente 3 hexágonos pela borda externa, sem retroceder.",fr:"se déplace d’exactement 3 hexagones le long du bord, sans jamais revenir en arrière.",de:"kriecht genau 3 Felder entlang der Außenkante, nie rückwärts.",ja:"外周に沿ってちょうど3マス移動し、後戻りはできません。",zh:"沿外围恰好爬行3格，不得折返。"},insectBeetle:{en:"moves 1 hex and can climb on top of other pieces (including a Queen) to block them; a beetle on top moves like a beetle over the stack.",es:"se mueve 1 hexágono y puede subir sobre otras piezas (incluida la reina) para bloquearlas; uno arriba se mueve como un escarabajo sobre la pila.",pt:"move 1 hexágono e pode subir sobre outras peças (inclusive a rainha) para bloqueá-las; um besouro no topo move-se como besouro sobre a pilha.",fr:"se déplace d’1 hexagone et peut grimper sur d’autres pièces (y compris la reine) pour les bloquer ; un scarabée en haut se déplace par-dessus la pile.",de:"zieht 1 Feld und kann auf andere Kacheln (auch die Königin) klettern, um sie zu blockieren; ein Käfer oben zieht über den Stapel.",ja:"1マス移動し、他の駒（女王バチを含む）の上に登って封鎖できます。上に乗ったカブトムシはスタックの上を移動します。",zh:"移动1格，可爬上其他棋子（包括蜂后）将其封锁；上方的甲虫可沿堆叠移动。"},insectGrasshopper:{en:"jumps in a straight line over at least one piece, landing on the first empty hex in that line.",es:"salta en línea recta sobre al menos una pieza y aterriza en el primer hexágono vacío de esa línea.",pt:"salta em linha reta sobre pelo menos uma peça, pousando no primeiro hexágono vazio da linha.",fr:"saute en ligne droite par-dessus au moins une pièce et atterrit sur le premier hexagone vide de la ligne.",de:"springt in einer geraden Linie über mindestens eine Kachel und landet auf dem ersten leeren Feld dieser Linie.",ja:"一直線に少なくとも1つの駒を飛び越え、その線上で最初の空きマスに着地します。",zh:"沿直线跳过至少一枚棋子，落在该线路上第一个空格。"},insectAnt:{en:"may slide any number of hexes along the outside of the Swarm.",es:"puede deslizarse cualquier cantidad de hexágonos por el exterior del enjambre.",pt:"pode deslizar qualquer número de hexágonos pela parte externa do enxame.",fr:"peut glisser d’un nombre quelconque d’hexagones le long de l’extérieur de l’essaim.",de:"kann beliebig viele Felder entlang der Außenseite des Schwarms gleiten.",ja:"ハイブの外周に沿って好きなだけ滑るように移動できます。",zh:"可沿蜂群外部滑动任意数量的格子。"},insectMosquito:{en:"copies the movement (or pillbug ability) of any piece it touches.",es:"copia el movimiento (o la habilidad de la cochinilla) de cualquier pieza que toque.",pt:"copia o movimento (ou a habilidade do bicho-bola) de qualquer peça que toque.",fr:"copie le déplacement (ou l’aptitude du cloporte) de toute pièce qu’il touche.",de:"kopiert die Bewegung (oder Assel-Fähigkeit) jeder Kachel, die es berührt.",ja:"接触している駒の移動（またはダンゴムシの能力）をコピーします。",zh:"复制与之接触的任何棋子的走法（或潮虫能力）。"},insectLadybug:{en:"moves exactly 2 hexes on top of the Swarm, then 1 hex back down to the board (may land on empty board hexes).",es:"se mueve exactamente 2 hexágonos sobre el enjambre y luego 1 hexágono hacia abajo al tablero (puede aterrizar en hexágonos vacíos).",pt:"move exatamente 2 hexágonos sobre o enxame e depois 1 hexágono de volta ao tabuleiro (pode pousar em hexágonos vazios).",fr:"se déplace d’exactement 2 hexagones par-dessus l’essaim, puis redescend d’1 hexagone sur le plateau (peut atterrir sur des cases vides).",de:"zieht genau 2 Felder über dem Schwarm und dann 1 Feld zurück auf das Brett (darf auf leere Felder landen).",ja:"ハイブの上をちょうど2マス移動し、その後1マス盤面に降ります（空きマスに着地可）。",zh:"在蜂群上方恰好移动2格，然后向下1格落回棋盘（可落在空棋盘格上）。"},insectPillbug:{en:"may not move itself, but it can move an adjacent enemy or friendly piece 2 hexes: up onto itself, then down into an adjacent empty space. The moved piece is stunned and cannot move on the opponent’s next turn.",es:"no puede moverse, pero puede mover una pieza adyacente (aliada o enemiga) 2 hexágonos: primero sobre sí misma y luego a un espacio vacío adyacente. La pieza movida queda aturdida y no puede moverse en el siguiente turno del rival.",pt:"não pode se mover, mas pode mover uma peça adjacente (aliada ou inimiga) 2 hexágonos: primeiro sobre si mesma e depois para um espaço vazio adjacente. A peça movida fica atordoada e não pode se mover no próximo turno do oponente.",fr:"ne peut pas se déplacer, mais peut déplacer une pièce adjacente (alliée ou ennemie) de 2 hexagones : d’abord sur elle-même, puis dans un espace vide adjacent. La pièce déplacée est étourdie et ne peut pas bouger au tour suivant de l’adversaire.",de:"kann sich selbst nicht bewegen, aber eine benachbarte Kachel (feindlich oder freundlich) 2 Felder bewegen: erst auf sich, dann in einen benachbarten leeren Raum. Die bewegte Kachel ist benommen und kann im nächsten Zug des Gegners nicht ziehen.",ja:"自分は動けませんが、隣接する駒（敵味方どちらでも）を2マス動かせます: まず自分の上へ、そして隣接する空きマスへ。動かされた駒はスタンし、相手の次のターンは動けません。",zh:"潮虫自身不能移动，但可将相邻的棋子（敌我均可）移动2格：先移到自身上方，再移到相邻空格。被移动的棋子陷入眩晕，对手下一回合不能移动。"},codeTitle:{en:"Single-File Android Source Code",es:"Código fuente Android de un solo archivo",pt:"Código-fonte Android em arquivo único",fr:"Code source Android en un seul fichier",de:"Android-Quellcode in einer Datei",ja:"単一ファイルのAndroidソースコード",zh:"单文件Android源代码"},codeBadge:{en:"BugzApp.kt (Jetpack Compose)",es:"BugzApp.kt (Jetpack Compose)",pt:"BugzApp.kt (Jetpack Compose)",fr:"BugzApp.kt (Jetpack Compose)",de:"BugzApp.kt (Jetpack Compose)",ja:"BugzApp.kt (Jetpack Compose)",zh:"BugzApp.kt (Jetpack Compose)"},codeDesc:{en:"Complete Kotlin application logic, Compose canvas, AI minimax, and game loop.",es:"Lógica completa de la app en Kotlin, lienzo Compose, minimax de IA y bucle de juego.",pt:"Lógica completa do app em Kotlin, canvas Compose, minimax da IA e loop do jogo.",fr:"Logique complète de l’app en Kotlin, canevas Compose, minimax IA et boucle de jeu.",de:"Vollständige Kotlin-App-Logik, Compose-Canvas, KI-Minimax und Spielschleife.",ja:"完全なKotlinアプリロジック、Composeキャンバス、AIミニマックス、ゲームループ。",zh:"完整的Kotlin应用逻辑、Compose画布、AI极小化极大和游戏循环。"},copied:{en:"Copied!",es:"¡Copiado!",pt:"Copiado!",fr:"Copié !",de:"Kopiert!",ja:"コピーしました！",zh:"已复制！"},copyCode:{en:"Copy Code",es:"Copiar código",pt:"Copiar código",fr:"Copier le code",de:"Code kopieren",ja:"コードをコピー",zh:"复制代码"},downloadKt:{en:"Download .kt",es:"Descargar .kt",pt:"Baixar .kt",fr:"Télécharger .kt",de:".kt herunterladen",ja:".ktをダウンロード",zh:"下载.kt"}},mu=["en","es","pt","fr","de","ja","zh"],Jh={en:"English",es:"Español",pt:"Português",fr:"Français",de:"Deutsch",ja:"日本語",zh:"中文"},rm="bugz-lang-v1";function Ih(){try{const s=localStorage.getItem(rm);if(s&&mu.includes(s))return s}catch{}return Fh()}function Fh(){try{const s=typeof navigator<"u"?navigator.languages??[navigator.language]:[];for(const r of s){const h=r.toLowerCase().replace(/_/g,"-");if(mu.includes(h))return h;const o=h.split("-")[0];if(mu.includes(o))return o}}catch{}return"en"}const fm=P.createContext({lang:"en",setLang:()=>{},t:s=>String(s)}),Wh=({children:s})=>{const[r,h]=P.useState(()=>Ih());P.useEffect(()=>{try{localStorage.setItem(rm,r)}catch{}},[r]);const o=(v,A)=>{const H=Ph[v],D=H?H[r]??H.en:String(v);return A?D.replace(/\{(\w+)\}/g,(M,m)=>A[m]!==void 0?String(A[m]):`{${m}}`):D};return f.jsx(fm.Provider,{value:{lang:r,setLang:h,t:o},children:s})};function hl(){return P.useContext(fm)}const $h=({className:s=""})=>{const{lang:r,setLang:h}=hl();return f.jsx("select",{value:r,onChange:o=>h(o.target.value),"aria-label":"Language",className:`rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-slate-200 transition-colors hover:bg-slate-700 cursor-pointer ${s}`,children:mu.map(o=>f.jsx("option",{value:o,children:Jh[o]},o))})},ey=({board:s,selectedHex:r,validDestinations:h,pillbugTargetHex:o,pillbugDestinations:v,onSelectHex:A,onSelectDestination:H,onSelectPillbugTarget:D,currentPlayer:M,isAITurn:m,lastMovedHex:B})=>{const{t:z}=hl(),L=P.useRef(null),[k,ae]=P.useState(1),[I,Le]=P.useState({x:0,y:0}),[qe,ze]=P.useState(!1),[ge,Oe]=P.useState({x:0,y:0}),He=42,je=()=>{Le({x:0,y:0}),ae(1)},Z=G=>{G.preventDefault();const Te=G.deltaY<0?1.1:.9;ae(T=>Math.min(Math.max(T*Te,.4),2.5))},Re=G=>{G.button===0&&(ze(!0),Oe({x:G.clientX-I.x,y:G.clientY-I.y}))},Xe=G=>{qe&&Le({x:G.clientX-ge.x,y:G.clientY-ge.y})},ut=()=>{ze(!1)},rt=Array.from(s.keys()).map(G=>{const[Te,T]=G.split(",").map(Number);return{q:Te,r:T}}),de=new Map;for(const G of rt){const Te=te(G.q,G.r);de.set(Te,G);for(const T of ke(G)){const q=te(T.q,T.r);de.has(q)||de.set(q,T)}}if(de.size===0){const G={q:0,r:0};de.set(te(0,0),G);for(const Te of ke(G))de.set(te(Te.q,Te.r),Te)}for(const G of h)de.set(te(G.q,G.r),G);for(const G of v)de.set(te(G.q,G.r),G);const St=Array.from(de.values());return f.jsxs("div",{ref:L,className:"relative w-full h-full bg-slate-900 overflow-hidden select-none cursor-grab active:cursor-grabbing border border-slate-800 rounded-2xl shadow-inner",onWheel:Z,onMouseDown:Re,onMouseMove:Xe,onMouseUp:ut,onMouseLeave:ut,children:[f.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-2 rounded-xl shadow-lg",children:[f.jsx("button",{onClick:()=>ae(G=>Math.min(G*1.2,2.5)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:z("zoomIn"),children:f.jsx(Zh,{className:"w-5 h-5"})}),f.jsx("button",{onClick:()=>ae(G=>Math.max(G/1.2,.4)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:z("zoomOut"),children:f.jsx(Kh,{className:"w-5 h-5"})}),f.jsx("button",{onClick:je,className:"p-2 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-lg transition-colors",title:z("recenter"),children:f.jsx(zh,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"absolute top-4 left-4 z-10 pointer-events-none bg-slate-950/60 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 flex items-center gap-2",children:[f.jsx(Hh,{className:"w-3.5 h-3.5 text-amber-400 animate-pulse"}),f.jsx("span",{children:z("panHint")})]}),f.jsx("svg",{className:"w-full h-full pointer-events-auto",style:{touchAction:"none"},children:f.jsxs("g",{transform:`translate(${L.current?L.current.clientWidth/2+I.x:I.x}, ${L.current?L.current.clientHeight/2+I.y:I.y}) scale(${k})`,children:[f.jsxs("defs",{children:[f.jsxs("radialGradient",{id:"p1Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),f.jsx("stop",{offset:"100%",stopColor:"#f1f5f9"})]}),f.jsxs("radialGradient",{id:"p2Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#334155"}),f.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),f.jsxs("radialGradient",{id:"validGrad",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.8"})]}),f.jsxs("filter",{id:"glowGold",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[f.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),f.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),St.map(G=>{const Te=te(G.q,G.r),{x:T,y:q}=wg(G.q,G.r,He),Y=s.get(Te)||[],le=Y.length>0,ee=le?Y[Y.length-1]:null,g=Y.length,C=r&&gl(r,G),R=h.some(We=>gl(We,G)),U=o&&gl(o,G),K=v.some(We=>gl(We,G)),F=(B==null?void 0:B.to)&&gl(B.to,G),se=Yg(T,q,He-2);let _e="none",he="#334155",At=1.5;return le&&ee?ee.player===1?(_e="url(#p1Gradient)",he="#e2e8f0"):(_e="url(#p2Gradient)",he="#475569"):(R||K)&&(_e="rgba(16, 185, 129, 0.15)",he="#10b981",At=2.5),C?(he="#f59e0b",At=4):U?(he="#ec4899",At=3.5):F&&(he="#3b82f6",At=3),f.jsxs("g",{className:"transition-all duration-200 cursor-pointer group",onClick:We=>{We.stopPropagation(),!m&&(K&&H||R&&H?H(G):le&&(o&&D&&gl(o,G),A(G)))},children:[f.jsx("polygon",{points:se,fill:_e,stroke:he,strokeWidth:At,className:`${R||K?"animate-pulse hover:fill-emerald-500/30":""} ${C?"filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]":""}`}),(R||K)&&f.jsx("circle",{cx:T,cy:q,r:14,fill:"#10b981",className:"animate-ping opacity-75"}),le&&ee&&f.jsxs(f.Fragment,{children:[f.jsx("text",{x:T,y:q+8,textAnchor:"middle",fontSize:26,className:"pointer-events-none select-none drop-shadow",children:sa[ee.type].emoji}),g>1&&f.jsxs("g",{transform:`translate(${T+14}, ${q-18})`,children:[f.jsx("circle",{r:10,fill:"#f59e0b",stroke:"#1e293b",strokeWidth:1.5}),f.jsx("text",{x:0,y:3.5,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:"#0f172a",children:g})]}),f.jsx("circle",{cx:T-16,cy:q-16,r:6,fill:ee.player===1?"#ffffff":"#0f172a",stroke:ee.player===1?"#cbd5e1":"#64748b",strokeWidth:1.5})]}),!le&&(R||K)&&f.jsx("circle",{cx:T,cy:q,r:7,fill:"#10b981"}),f.jsxs("text",{x:T,y:q+(le?28:4),textAnchor:"middle",fontSize:8,fill:"#64748b",className:"opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:[G.q,",",G.r]})]},Te)})]})})]})},Lo=({player:s,reserve:r,isActive:h,selectedBugType:o,onSelectBugType:v,turnCount:A,queenPlaced:H})=>{const{t:D}=hl(),M=new Map;for(const B of r){const z=M.get(B.type)||[];z.push(B),M.set(B.type,z)}const m=A===4&&!H;return f.jsxs("div",{className:`p-4 rounded-2xl border transition-all duration-300 ${h?s===1?"bg-slate-800/90 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]":"bg-slate-900/90 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]":"bg-slate-900/50 border-slate-800/80 opacity-70"}`,children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full border ${s===1?"bg-white border-slate-300":"bg-slate-950 border-slate-600"}`}),f.jsx("h3",{className:"font-bold text-sm text-slate-100",children:D("playerLabel",{n:s,color:D(s===1?"white":"black")})})]}),f.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:D("reserveCount",{n:r.length})})]}),m&&h&&f.jsxs("div",{className:"mb-3 p-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-300 text-xs flex items-center gap-1.5 animate-bounce",children:[f.jsx(cm,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:D("turn4Warning")})]}),f.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-4 gap-2",children:Array.from(M.entries()).map(([B,z])=>{const L=sa[B],k=z.length,ae=o===B,I=!h||k===0||m&&B!=="QUEEN";return f.jsxs("button",{onClick:()=>!I&&v(B),disabled:I,title:`${L.name}: ${L.description}`,className:`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${ae?"bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-md":I?"bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-40 cursor-not-allowed":"bg-slate-800/60 border-slate-700/80 hover:bg-slate-700/80 text-slate-200 hover:border-slate-500 cursor-pointer"}`,children:[f.jsx("span",{className:"text-2xl mb-1 select-none",children:L.emoji}),f.jsx("span",{className:"text-[10px] font-semibold truncate max-w-full",children:L.name.split(" ")[0]}),f.jsxs("span",{className:`absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold border ${ae?"bg-amber-500 text-slate-950 border-amber-300":"bg-slate-900 text-slate-300 border-slate-700"}`,children:["x",k]})]},B)})})]})},ty=({logs:s})=>{const{t:r}=hl(),[h,o]=P.useState(!1);return f.jsxs("div",{className:"bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all",children:[f.jsxs("button",{onClick:()=>o(!h),className:"w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Mh,{className:"w-4 h-4 text-amber-400"}),f.jsx("span",{children:r("moveHistory",{n:s.length})})]}),h?f.jsx(ph,{className:"w-4 h-4"}):f.jsx(hh,{className:"w-4 h-4"})]}),h&&f.jsx("div",{className:"max-h-48 overflow-y-auto p-3 divide-y divide-slate-800/60 text-xs text-slate-400",children:s.length===0?f.jsx("p",{className:"text-center italic py-2 text-slate-500",children:r("noMoves")}):[...s].reverse().map((v,A)=>f.jsxs("div",{className:"py-1.5 flex items-start justify-between gap-2",children:[f.jsxs("span",{className:"font-mono text-[10px] text-slate-500",children:["T",v.turnNumber," P",v.player]}),f.jsx("span",{className:"text-slate-200 font-medium flex-1 text-right",children:v.description})]},A))})]})},ly=({isOpen:s,onClose:r})=>{const{t:h}=hl();return s?f.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsx("h2",{className:"text-xl font-black text-slate-100",children:h("rulesTitle")}),f.jsx("button",{onClick:r,className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",title:h("close"),children:f.jsx(sm,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"px-6 py-5 overflow-y-auto space-y-4",children:[f.jsx("div",{children:f.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[f.jsx("span",{className:"font-bold text-amber-400",children:h("goalTitle")})," ",h("goalDesc")]})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("coreRulesTitle")}),f.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:["• ",h("coreRule1")]}),f.jsxs("li",{children:["• ",h("coreRule2")]}),f.jsxs("li",{children:["• ",h("coreRule3")]}),f.jsxs("li",{children:["• ",h("coreRule4")]})]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("insectTitle")}),f.jsxs("ul",{className:"space-y-2 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐝"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Queen Bee"})," — ",h("insectQueen")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🕷️"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Spider"})," — ",h("insectSpider")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪲"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Beetle"})," — ",h("insectBeetle")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦗"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Grasshopper"})," — ",h("insectGrasshopper")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐜"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Soldier Ant"})," — ",h("insectAnt")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦟"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Mosquito"})," — ",h("insectMosquito")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐞"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Ladybug"})," — ",h("insectLadybug")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪳"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Pillbug"})," — ",h("insectPillbug")]})]})]})]})]})}):null},ay=({isOpen:s,onStartGame:r,onClose:h,canCancel:o=!1})=>{const{t:v}=hl(),[A,H]=P.useState("AI"),[D,M]=P.useState("MEDIUM"),[m,B]=P.useState({mosquito:!0,ladybug:!0,pillbug:!0}),[z,L]=P.useState(!1);return s?f.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:[f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-1 flex items-center gap-2",children:f.jsxs("span",{children:["🐝 ",v("appTitle")," ",v("appSubtitle")]})}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:v("setupSubtitle")}),f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("gameModeLabel")}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("button",{onClick:()=>H("PASS_AND_PLAY"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="PASS_AND_PLAY"?"bg-amber-500/15 border-amber-400 text-amber-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(wh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("passPlayBtn")})]}),f.jsxs("button",{onClick:()=>H("AI"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="AI"?"bg-blue-500/15 border-blue-400 text-blue-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(rh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("vsAiBtn")})]})]})]}),A==="AI"&&f.jsxs("div",{className:"mb-6 animate-fade-in",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("aiDifficultyLabel")}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EASY","MEDIUM","HARD"].map(k=>f.jsx("button",{onClick:()=>M(k),className:`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${D===k?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:v(k==="EASY"?"easyBtn":k==="MEDIUM"?"mediumBtn":"hardBtn")},k))})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5",children:[f.jsx(Uh,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:v("expansionsLabel")})]}),f.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800",children:[f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🦟"})," ",v("mosquitoLabel")]}),f.jsx("input",{type:"checkbox",checked:m.mosquito,onChange:k=>B({...m,mosquito:k.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🐞"})," ",v("ladybugLabel")]}),f.jsx("input",{type:"checkbox",checked:m.ladybug,onChange:k=>B({...m,ladybug:k.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"💊"})," ",v("pillbugLabel")]}),f.jsx("input",{type:"checkbox",checked:m.pillbug,onChange:k=>B({...m,pillbug:k.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[o&&h&&f.jsx("button",{onClick:h,className:"flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("cancel")}),f.jsxs("button",{onClick:()=>r({mode:A,aiDifficulty:D,expansions:m}),className:"flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Nh,{className:"w-4 h-4 fill-slate-950"}),f.jsx("span",{children:v("startGame")})]})]}),f.jsx("div",{className:"mt-4 flex justify-center",children:f.jsxs("button",{onClick:()=>L(!0),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800/60",children:[f.jsx(oh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:v("learnToPlay")})]})})]}),f.jsx(ly,{isOpen:z,onClose:()=>L(!1)})]}):null},ny=({isOpen:s,winner:r,onRestart:h,onNewGameSetup:o})=>{const{t:v}=hl();return s?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4 text-amber-400",children:f.jsx(kh,{className:"w-8 h-8"})}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-2",children:v(r==="DRAW"?"drawTitle":r===1?"p1WinTitle":"p2WinTitle")}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:v(r==="DRAW"?"drawDesc":"winDesc")}),f.jsxs("div",{className:"flex flex-col gap-2",children:[f.jsxs("button",{onClick:h,className:"w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Bh,{className:"w-4 h-4"}),f.jsx("span",{children:v("playAgain")})]}),f.jsx("button",{onClick:o,className:"w-full py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("matchOptions")})]})]})}):null},Uo=`package com.bugz.game

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlin.math.*

// ============================================================================
// 0. COLOR SCHEMES
// ============================================================================

private val DarkColors = darkColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFF0F172A),
    onBackground = Color(0xFFE2E8F0),
    surface = Color(0xFF1E293B),
    onSurface = Color(0xFFE2E8F0),
    surfaceVariant = Color(0xFF334155),
    onSurfaceVariant = Color(0xFF94A3B8),
    outline = Color(0xFF64748B)
)

private val LightColors = lightColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFFF8FAFC),
    onBackground = Color(0xFF0F172A),
    surface = Color(0xFFFFFFFF),
    onSurface = Color(0xFF0F172A),
    surfaceVariant = Color(0xFFE2E8F0),
    onSurfaceVariant = Color(0xFF475569),
    outline = Color(0xFF94A3B8)
)

// ============================================================================
// 1. DATA MODELS & DEFINITIONS
// ============================================================================

enum class Player { ONE, TWO }

enum class BugType(
    val title: String,
    val emoji: String,
    val defaultCount: Int,
    val isExpansion: Boolean = false
) {
    QUEEN("Queen Bee", "🐝", 1),
    SPIDER("Spider", "🕷️", 2),
    BEETLE("Beetle", "🪲", 2),
    GRASSHOPPER("Grasshopper", "🦗", 3),
    SOLDIER_ANT("Soldier Ant", "🐜", 3),
    MOSQUITO("Mosquito", "🦟", 1, true),
    LADYBUG("Ladybug", "🐞", 1, true),
    PILLBUG("Pillbug", "🪳", 1, true)
}

data class Piece(val id: String, val type: BugType, val player: Player)

data class AxialHex(val q: Int, val r: Int) {
    fun key() = "$q,$r"
    fun getNeighbors(): List<AxialHex> = listOf(
        AxialHex(q + 1, r), AxialHex(q + 1, r - 1), AxialHex(q, r - 1),
        AxialHex(q - 1, r), AxialHex(q - 1, r + 1), AxialHex(q, r + 1)
    )
}

enum class GameMode { PASS_AND_PLAY, AI }
enum class AIDifficulty { EASY, MEDIUM, HARD }

data class ExpansionsConfig(
    val mosquito: Boolean = true,
    val ladybug: Boolean = true,
    val pillbug: Boolean = true
)

data class GameSettings(
    val mode: GameMode = GameMode.AI,
    val aiDifficulty: AIDifficulty = AIDifficulty.MEDIUM,
    val expansions: ExpansionsConfig = ExpansionsConfig(),
    val humanColor: Player = Player.ONE
)

data class MoveLogEntry(val turn: Int, val player: Player, val text: String)

data class MoveAction(
    val type: ActionType,
    val pieceId: String,
    val bugType: BugType,
    val player: Player,
    val fromHex: AxialHex? = null,
    val toHex: AxialHex,
    val pillbugTargetHex: AxialHex? = null
) {
    enum class ActionType { PLACE, MOVE, PILLBUG_SPECIAL }
}

data class PillbugTargetOption(
    val targetHex: AxialHex,
    val piece: Piece,
    val destinationHexes: List<AxialHex>
)

data class GameStatus(
    val isGameOver: Boolean,
    val winner: Player?,
    val isDraw: Boolean,
    val p1QueenSurroundedCount: Int,
    val p2QueenSurroundedCount: Int
)

// ============================================================================
// 2. CORE GAME ENGINE & BUGZ RULES
// ============================================================================

fun parseKey(key: String): AxialHex {
    val parts = key.split(",").map { it.toInt() }
    return AxialHex(parts[0], parts[1])
}

fun cloneBoard(board: Map<String, List<Piece>>): MutableMap<String, MutableList<Piece>> {
    return board.mapValues { it.value.toMutableList() }.toMutableMap()
}

fun getTopPiece(board: Map<String, List<Piece>>, hex: AxialHex): Piece? {
    val stack = board[hex.key()]
    return if (stack.isNullOrEmpty()) null else stack.last()
}

fun getStackHeight(board: Map<String, List<Piece>>, hex: AxialHex): Int {
    return board[hex.key()]?.size ?: 0
}

fun isOccupied(board: Map<String, List<Piece>>, hex: AxialHex): Boolean {
    return getStackHeight(board, hex) > 0
}

fun getAllOccupiedHexes(board: Map<String, List<Piece>>): List<AxialHex> {
    return board.entries.filter { it.value.isNotEmpty() }.map { parseKey(it.key) }
}

fun isQueenPlaced(board: Map<String, List<Piece>>, player: Player): Boolean {
    return board.values.flatten().any { it.player == player && it.type == BugType.QUEEN }
}

fun getQueenHex(board: Map<String, List<Piece>>, player: Player): AxialHex? {
    for ((key, stack) in board) {
        for (p in stack) {
            if (p.player == player && p.type == BugType.QUEEN) {
                return parseKey(key)
            }
        }
    }
    return null
}

fun isSwarmConnected(board: Map<String, List<Piece>>): Boolean {
    val occupied = getAllOccupiedHexes(board)
    if (occupied.size <= 1) return true

    val visited = mutableSetOf<String>()
    val queue = mutableListOf(occupied.first())
    visited.add(occupied.first().key())

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (neighbor in current.getNeighbors()) {
            val nKey = neighbor.key()
            if (isOccupied(board, neighbor) && !visited.contains(nKey)) {
                visited.add(nKey)
                queue.add(neighbor)
            }
        }
    }
    return visited.size == occupied.size
}

fun canRemovePieceWithoutBreakingSwarm(board: Map<String, List<Piece>>, fromHex: AxialHex): Boolean {
    val stack = board[fromHex.key()] ?: return false
    if (stack.size > 1) return true

    val copyBoard = cloneBoard(board)
    copyBoard.remove(fromHex.key())
    return isSwarmConnected(copyBoard)
}

fun getCommonNeighbors(a: AxialHex, b: AxialHex): List<AxialHex> {
    val aSet = a.getNeighbors().toSet()
    val bSet = b.getNeighbors().toSet()
    return aSet.intersect(bSet).toList()
}

fun canSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex,
    atHeight: Int = 0
): Boolean {
    val common = getCommonNeighbors(fromHex, toHex)
    if (common.size != 2) return false

    val h1 = getStackHeight(board, common[0])
    val h2 = getStackHeight(board, common[1])

    val maxAllowedHeight = maxOf(atHeight, getStackHeight(board, fromHex) - 1, getStackHeight(board, toHex))

    if (h1 > maxAllowedHeight && h2 > maxAllowedHeight) {
        return false
    }
    return true
}

fun isValidGroundSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex
): Boolean {
    if (isOccupied(board, toHex)) return false
    if (!canSlide(board, fromHex, toHex, 0)) return false

    val testBoard = cloneBoard(board)
    val stack = testBoard[fromHex.key()]
    if (stack != null) {
        if (stack.size == 1) testBoard.remove(fromHex.key())
        else stack.removeAt(stack.size - 1)
    }

    val touchesSwarm = toHex.getNeighbors().any { isOccupied(testBoard, it) }
    return touchesSwarm
}

fun getValidPlacements(
    board: Map<String, List<Piece>>,
    player: Player,
    turnCountP: Int
): List<AxialHex> {
    val occupied = getAllOccupiedHexes(board)

    if (occupied.isEmpty()) {
        return listOf(AxialHex(0, 0))
    }

    if (occupied.size == 1) {
        return occupied[0].getNeighbors()
    }

    val candidateKeys = mutableSetOf<String>()
    val validPlacements = mutableListOf<AxialHex>()

    for (hex in occupied) {
        for (n in hex.getNeighbors()) {
            if (!isOccupied(board, n)) {
                candidateKeys.add(n.key())
            }
        }
    }

    for (key in candidateKeys) {
        val candidate = parseKey(key)
        val neighbors = candidate.getNeighbors()

        var touchesFriendly = false
        var touchesEnemy = false

        for (n in neighbors) {
            val topPiece = getTopPiece(board, n)
            if (topPiece != null) {
                if (topPiece.player == player) touchesFriendly = true
                else touchesEnemy = true
            }
        }

        if (touchesFriendly && !touchesEnemy) {
            validPlacements.add(candidate)
        }
    }

    return validPlacements
}

fun getEffectiveBugTypes(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    piece: Piece
): List<BugType> {
    if (piece.type != BugType.MOSQUITO) {
        return listOf(piece.type)
    }

    val stackHeight = getStackHeight(board, fromHex)
    if (stackHeight > 1) {
        return listOf(BugType.BEETLE)
    }

    val copiedTypes = mutableSetOf<BugType>()
    for (n in fromHex.getNeighbors()) {
        val adjTop = getTopPiece(board, n)
        if (adjTop != null && adjTop.type != BugType.MOSQUITO) {
            copiedTypes.add(adjTop.type)
        }
    }

    return copiedTypes.toList()
}

fun getQueenMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return fromHex.getNeighbors().filter { isValidGroundSlide(board, fromHex, it) }
}

fun getSpiderMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableListOf<AxialHex>()

    fun spiderDFS(current: AxialHex, stepCount: Int, visitedKeys: Set<String>) {
        if (stepCount == 3) {
            results.add(current)
            return
        }
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visitedKeys.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    val nextVisited = visitedKeys.toMutableSet()
                    nextVisited.add(nextKey)
                    spiderDFS(next, stepCount + 1, nextVisited)
                }
            }
        }
    }

    val startVisited = setOf(fromHex.key())
    spiderDFS(fromHex, 0, startVisited)

    val uniqueKeys = mutableSetOf<String>()
    val uniqueResults = mutableListOf<AxialHex>()
    for (hex in results) {
        if (uniqueKeys.add(hex.key())) {
            uniqueResults.add(hex)
        }
    }
    return uniqueResults
}

fun getBeetleMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()
    val currentHeight = getStackHeight(board, fromHex)

    for (to in fromHex.getNeighbors()) {
        val targetHeight = getStackHeight(board, to)

        if (targetHeight >= 1 || currentHeight > 1) {
            val clearanceHeight = maxOf(currentHeight - 1, targetHeight)
            if (canSlide(board, fromHex, to, clearanceHeight)) {
                moves.add(to)
            }
        } else {
            if (isValidGroundSlide(board, fromHex, to)) {
                moves.add(to)
            }
        }
    }
    return moves
}

fun getGrasshopperMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()

    for (dirIndex in 0 until 6) {
        var current = fromHex.getNeighbors()[dirIndex]
        var countOver = 0

        while (isOccupied(board, current)) {
            countOver++
            current = current.getNeighbors()[dirIndex]
        }

        if (countOver > 0) {
            moves.add(current)
        }
    }
    return moves
}

fun getSoldierAntMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val visited = mutableSetOf(fromHex.key())
    val queue = mutableListOf(fromHex)

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visited.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    visited.add(nextKey)
                    queue.add(next)
                }
            }
        }
    }

    visited.remove(fromHex.key())

    return visited.map { parseKey(it) }
}

fun getLadybugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableSetOf<String>()

    val step1Candidates = fromHex.getNeighbors().filter { n ->
        isOccupied(board, n) && canSlide(board, fromHex, n, 0)
    }

    for (s1 in step1Candidates) {
        val step2Candidates = s1.getNeighbors().filter { s2 ->
            s2.key() != fromHex.key() && isOccupied(board, s2) && canSlide(board, s1, s2, 1)
        }

        for (s2 in step2Candidates) {
            val step3Candidates = s2.getNeighbors().filter { s3 ->
                s3.key() != s1.key() && !isOccupied(board, s3) && canSlide(board, s2, s3, 0)
            }

            for (s3 in step3Candidates) {
                results.add(s3.key())
            }
        }
    }

    return results.map { parseKey(it) }
}

fun getPillbugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return getQueenMoves(board, fromHex)
}

fun getMovesForBugType(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    bugType: BugType
): List<AxialHex> {
    return when (bugType) {
        BugType.QUEEN -> getQueenMoves(board, fromHex)
        BugType.SPIDER -> getSpiderMoves(board, fromHex)
        BugType.BEETLE -> getBeetleMoves(board, fromHex)
        BugType.GRASSHOPPER -> getGrasshopperMoves(board, fromHex)
        BugType.SOLDIER_ANT -> getSoldierAntMoves(board, fromHex)
        BugType.LADYBUG -> getLadybugMoves(board, fromHex)
        BugType.PILLBUG -> getPillbugMoves(board, fromHex)
        BugType.MOSQUITO -> emptyList()
    }
}

fun getValidMovesForPiece(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    player: Player,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): List<AxialHex> {
    if (!isQueenPlaced(board, player)) {
        return emptyList()
    }

    val stack = board[fromHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()
    val topPiece = stack.last()
    if (topPiece.player != player) return emptyList()

    if (!canRemovePieceWithoutBreakingSwarm(board, fromHex)) {
        return emptyList()
    }

    val effectiveBugTypes = getEffectiveBugTypes(board, fromHex, topPiece)
    val validDestinations = mutableSetOf<String>()

    for (bugType in effectiveBugTypes) {
        val dests = getMovesForBugType(board, fromHex, bugType)
        dests.forEach { validDestinations.add(it.key()) }
    }

    return validDestinations.map { parseKey(it) }
}

fun getPillbugSpecialTargets(
    board: Map<String, List<Piece>>,
    pillbugHex: AxialHex,
    player: Player,
    lastMovedPieceId: String?
): List<PillbugTargetOption> {
    if (!isQueenPlaced(board, player)) return emptyList()

    val stack = board[pillbugHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()

    val emptyAdjacentHexes = pillbugHex.getNeighbors().filter { !isOccupied(board, it) }
    if (emptyAdjacentHexes.isEmpty()) return emptyList()

    val options = mutableListOf<PillbugTargetOption>()

    for (adjHex in pillbugHex.getNeighbors()) {
        if (isOccupied(board, adjHex)) {
            val targetStack = board[adjHex.key()]!!
            if (targetStack.size == 1) {
                val targetPiece = targetStack[0]

                if (targetPiece.id == lastMovedPieceId) continue
                if (!canRemovePieceWithoutBreakingSwarm(board, adjHex)) continue

                options.add(
                    PillbugTargetOption(
                        targetHex = adjHex,
                        piece = targetPiece,
                        destinationHexes = emptyAdjacentHexes
                    )
                )
            }
        }
    }

    return options
}

fun getPlayerAllLegalActions(
    board: Map<String, List<Piece>>,
    player: Player,
    reserve: List<Piece>,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): List<MoveAction> {
    val actions = mutableListOf<MoveAction>()
    val queenPlaced = isQueenPlaced(board, player)

    val validPlacements = getValidPlacements(board, player, turnCountP)

    if (turnCountP == 4 && !queenPlaced) {
        val queenPiece = reserve.firstOrNull { it.type == BugType.QUEEN }
        if (queenPiece != null) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = queenPiece.id,
                        bugType = BugType.QUEEN,
                        player = player,
                        toHex = hex
                    )
                )
            }
        }
        return actions
    }

    if (validPlacements.isNotEmpty() && reserve.isNotEmpty()) {
        val availableBugTypes = mutableSetOf<BugType>()
        val typeToPiece = mutableMapOf<BugType, Piece>()

        for (p in reserve) {
            if (availableBugTypes.add(p.type)) {
                typeToPiece[p.type] = p
            }
        }

        for ((bugType, piece) in typeToPiece) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = piece.id,
                        bugType = bugType,
                        player = player,
                        toHex = hex
                    )
                )
            }
        }
    }

    if (queenPlaced) {
        val occupied = getAllOccupiedHexes(board)

        for (hex in occupied) {
            val topPiece = getTopPiece(board, hex)
            if (topPiece != null && topPiece.player == player) {
                val moves = getValidMovesForPiece(
                    board, hex, player, turnCountP, lastMovedPieceId, expansions
                )

                for (dest in moves) {
                    actions.add(
                        MoveAction(
                            type = MoveAction.ActionType.MOVE,
                            pieceId = topPiece.id,
                            bugType = topPiece.type,
                            player = player,
                            fromHex = hex,
                            toHex = dest
                        )
                    )
                }

                val effectiveTypes = getEffectiveBugTypes(board, hex, topPiece)
                if (effectiveTypes.contains(BugType.PILLBUG)) {
                    val pbTargets = getPillbugSpecialTargets(board, hex, player, lastMovedPieceId)
                    for (opt in pbTargets) {
                        for (destHex in opt.destinationHexes) {
                            actions.add(
                                MoveAction(
                                    type = MoveAction.ActionType.PILLBUG_SPECIAL,
                                    pieceId = topPiece.id,
                                    bugType = topPiece.type,
                                    player = player,
                                    fromHex = hex,
                                    pillbugTargetHex = opt.targetHex,
                                    toHex = destHex
                                )
                            )
                        }
                    }
                }
            }
        }
    }

    return actions
}

fun checkGameStatus(board: Map<String, List<Piece>>): GameStatus {
    val p1QueenHex = getQueenHex(board, Player.ONE)
    val p2QueenHex = getQueenHex(board, Player.TWO)

    var p1Surrounded = 0
    var p2Surrounded = 0

    if (p1QueenHex != null) {
        p1Surrounded = p1QueenHex.getNeighbors().count { isOccupied(board, it) }
    }
    if (p2QueenHex != null) {
        p2Surrounded = p2QueenHex.getNeighbors().count { isOccupied(board, it) }
    }

    val p1IsSurrounded = p1Surrounded == 6
    val p2IsSurrounded = p2Surrounded == 6

    return when {
        p1IsSurrounded && p2IsSurrounded -> GameStatus(true, null, true, p1Surrounded, p2Surrounded)
        p1IsSurrounded -> GameStatus(true, Player.TWO, false, p1Surrounded, p2Surrounded)
        p2IsSurrounded -> GameStatus(true, Player.ONE, false, p1Surrounded, p2Surrounded)
        else -> GameStatus(false, null, false, p1Surrounded, p2Surrounded)
    }
}

class BugzEngine {
    val board = mutableMapOf<String, MutableList<Piece>>()
    val p1Reserve = mutableListOf<Piece>()
    val p2Reserve = mutableListOf<Piece>()
    var currentPlayer = Player.ONE
    var turnCountP1 = 1
    var turnCountP2 = 1
    var lastMovedPieceId: String? = null
    val history = mutableListOf<MoveLogEntry>()
    var expansions = ExpansionsConfig()

    data class EngineSnapshot(
        val board: Map<String, List<Piece>>,
        val p1Reserve: List<Piece>,
        val p2Reserve: List<Piece>,
        val currentPlayer: Player,
        val turnCountP1: Int,
        val turnCountP2: Int,
        val lastMovedPieceId: String?,
        val history: List<MoveLogEntry>
    )

    fun snapshot(): EngineSnapshot {
        return EngineSnapshot(
            board = board.mapValues { it.value.toList() }.toMap(),
            p1Reserve = p1Reserve.toList(),
            p2Reserve = p2Reserve.toList(),
            currentPlayer = currentPlayer,
            turnCountP1 = turnCountP1,
            turnCountP2 = turnCountP2,
            lastMovedPieceId = lastMovedPieceId,
            history = history.toList()
        )
    }

    fun restore(snap: EngineSnapshot) {
        board.clear()
        board.putAll(snap.board.mapValues { it.value.toMutableList() })
        p1Reserve.clear()
        p1Reserve.addAll(snap.p1Reserve)
        p2Reserve.clear()
        p2Reserve.addAll(snap.p2Reserve)
        currentPlayer = snap.currentPlayer
        turnCountP1 = snap.turnCountP1
        turnCountP2 = snap.turnCountP2
        lastMovedPieceId = snap.lastMovedPieceId
        history.clear()
        history.addAll(snap.history)
    }

    fun reserveFor(p: Player): List<Piece> = if (p == Player.ONE) p1Reserve else p2Reserve

    fun turnCountFor(p: Player): Int = if (p == Player.ONE) turnCountP1 else turnCountP2

    fun initNewGame(expansions: ExpansionsConfig) {
        board.clear()
        p1Reserve.clear()
        p2Reserve.clear()
        history.clear()
        currentPlayer = Player.ONE
        turnCountP1 = 1
        turnCountP2 = 1
        lastMovedPieceId = null
        this.expansions = expansions

        fun createReserve(player: Player): List<Piece> {
            val list = mutableListOf<Piece>()
            BugType.values().forEach { bug ->
                if (!bug.isExpansion ||
                    (bug == BugType.MOSQUITO && expansions.mosquito) ||
                    (bug == BugType.LADYBUG && expansions.ladybug) ||
                    (bug == BugType.PILLBUG && expansions.pillbug)
                ) {
                    repeat(bug.defaultCount) { idx ->
                        list.add(Piece("p\${if (player == Player.ONE) 1 else 2}_\${bug.name}_$idx", bug, player))
                    }
                }
            }
            return list
        }

        p1Reserve.addAll(createReserve(Player.ONE))
        p2Reserve.addAll(createReserve(Player.TWO))
    }

    fun isQueenPlaced(player: Player): Boolean {
        return isQueenPlaced(board, player)
    }

    fun placementsForCurrent(): List<AxialHex> {
        return getValidPlacements(board, currentPlayer, turnCountFor(currentPlayer))
    }

    fun movesFor(hex: AxialHex): List<AxialHex> {
        return getValidMovesForPiece(
            board, hex, currentPlayer, turnCountFor(currentPlayer), lastMovedPieceId, expansions
        )
    }

    fun pillbugTargets(hex: AxialHex): List<PillbugTargetOption> {
        return getPillbugSpecialTargets(board, hex, currentPlayer, lastMovedPieceId)
    }

    fun effectiveTypes(hex: AxialHex, piece: Piece): List<BugType> {
        return getEffectiveBugTypes(board, hex, piece)
    }

    fun legalActions(): List<MoveAction> {
        return getPlayerAllLegalActions(
            board, currentPlayer, reserveFor(currentPlayer), turnCountFor(currentPlayer), lastMovedPieceId, expansions
        )
    }

    fun checkGameStatus(): GameStatus {
        return checkGameStatus(board)
    }

    fun executeMove(action: MoveAction) {
        var logDesc = ""
        var actuallyMovedId: String? = null

        if (action.type == MoveAction.ActionType.PLACE) {
            if (action.player == Player.ONE) {
                p1Reserve.removeAll { it.id == action.pieceId }
            } else {
                p2Reserve.removeAll { it.id == action.pieceId }
            }

            val newPiece = Piece(action.pieceId, action.bugType, action.player)
            val key = action.toHex.key()
            val stack = board.getOrPut(key) { mutableListOf() }
            stack.add(newPiece)
            actuallyMovedId = newPiece.id

            logDesc = "Placed \${action.bugType.title} at (\${action.toHex.q}, \${action.toHex.r})"
        } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
            val fromStack = board[action.fromHex.key()] ?: return
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) board.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = "Moved \${action.bugType.title} from (\${action.fromHex.q}, \${action.fromHex.r}) to (\${action.toHex.q}, \${action.toHex.r})"
        } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
            val targetStack = board[action.pillbugTargetHex.key()] ?: return
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) board.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = "Pillbug moved \${movedPiece?.type?.title ?: "piece"} to (\${action.toHex.q}, \${action.toHex.r})"
        }

        // The piece that actually moved/placed is "stunned" on the opponent's next turn.
        lastMovedPieceId = actuallyMovedId ?: action.pieceId

        history.add(
            MoveLogEntry(
                turn = if (action.player == Player.ONE) turnCountP1 else turnCountP2,
                player = action.player,
                text = logDesc
            )
        )

        if (action.player == Player.ONE) {
            turnCountP1++
            currentPlayer = Player.TWO
        } else {
            turnCountP2++
            currentPlayer = Player.ONE
        }
    }

    fun switchTurn() {
        currentPlayer = if (currentPlayer == Player.ONE) Player.TWO else Player.ONE
    }
}

// ============================================================================
// 3. AI ENGINE (Easy / Medium / Hard)
// ============================================================================

fun computeAIMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    difficulty: AIDifficulty,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction? {
    val legalActions = getPlayerAllLegalActions(
        board, aiPlayer, aiReserve, turnCountAI, lastMovedPieceId, expansions
    )

    if (legalActions.isEmpty()) return null

    return when (difficulty) {
        AIDifficulty.EASY -> computeEasyMove(board, aiPlayer, legalActions, turnCountAI)
        AIDifficulty.MEDIUM -> computeMediumMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions
        )
        AIDifficulty.HARD -> computeHardMinimaxMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions
        )
    }
}

fun computeEasyMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    legalActions: List<MoveAction>,
    turnCountAI: Int
): MoveAction {
    // Play the queen when it is due (by the 4th turn) if the AI forgot to place it earlier.
    if (!isQueenPlaced(board, aiPlayer) && turnCountAI >= 3) {
        val queenActions = legalActions.filter { it.bugType == BugType.QUEEN }
        if (queenActions.isNotEmpty()) {
            return queenActions[Math.floor(Math.random() * queenActions.size).toInt()]
        }
    }

    return legalActions[Math.floor(Math.random() * legalActions.size).toInt()]
}

fun computeMediumMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction {
    var bestScore = -1e9
    var bestActions = mutableListOf<MoveAction>()

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board, action, aiPlayer, aiReserve, humanReserve
        )

        val score = evaluateBoard(
            nextBoard, aiPlayer, nextAIReserve, nextHumanReserve, turnCountAI, turnCountHuman, expansions
        )

        if (score > bestScore + 1e-9) {
            bestScore = score
            bestActions = mutableListOf(action)
        } else if (kotlin.math.abs(score - bestScore) <= 1e-9) {
            bestActions.add(action)
        }
    }

    return bestActions[Math.floor(Math.random() * bestActions.size).toInt()]
}

fun computeHardMinimaxMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): MoveAction {
    val depth = 2
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    var alpha = -1e9
    var beta = 1e9
    var bestScore = -1e9
    var bestAction = legalActions[0]

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board, action, aiPlayer, aiReserve, humanReserve
        )

        val status = checkGameStatus(nextBoard)
        if (status.isGameOver && status.winner == aiPlayer) {
            return action
        }

        val value = minimax(
            nextBoard,
            depth - 1,
            alpha,
            beta,
            false,
            aiPlayer,
            humanPlayer,
            nextAIReserve,
            nextHumanReserve,
            turnCountAI + 1,
            turnCountHuman,
            actuallyMovedPieceId(board, action),
            expansions
        )

        if (value > bestScore) {
            bestScore = value
            bestAction = action
        }
        alpha = maxOf(alpha, bestScore)
    }

    return bestAction
}

fun minimax(
    board: Map<String, List<Piece>>,
    depth: Int,
    alpha: Double,
    beta: Double,
    isMaximizing: Boolean,
    aiPlayer: Player,
    humanPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig
): Double {
    var alpha = alpha
    var beta = beta

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    if (depth == 0) {
        return evaluateBoard(board, aiPlayer, aiReserve, humanReserve, turnAI, turnHuman, expansions)
    }

    val currentPlayer = if (isMaximizing) aiPlayer else humanPlayer
    val currentReserve = if (isMaximizing) aiReserve else humanReserve
    val oppReserve = if (isMaximizing) humanReserve else aiReserve
    val turnCount = if (isMaximizing) turnAI else turnHuman

    val legalActions = getPlayerAllLegalActions(
        board, currentPlayer, currentReserve, turnCount, lastMovedPieceId, expansions
    )

    if (legalActions.isEmpty()) {
        return minimax(
            board, depth - 1, alpha, beta, !isMaximizing,
            aiPlayer, humanPlayer, aiReserve, humanReserve,
            if (isMaximizing) turnAI + 1 else turnAI,
            if (isMaximizing) turnHuman else turnHuman + 1,
            lastMovedPieceId, expansions
        )
    }

    if (isMaximizing) {
        var maxEval = -1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board, action, aiPlayer, aiReserve, humanReserve
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, false,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI + 1, turnHuman, actuallyMovedPieceId(board, action), expansions
            )

            maxEval = maxOf(maxEval, evalValue)
            alpha = maxOf(alpha, evalValue)
            if (beta <= alpha) break
        }
        return maxEval
    } else {
        var minEval = 1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board, action, humanPlayer, aiReserve, humanReserve
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, true,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI, turnHuman + 1, actuallyMovedPieceId(board, action), expansions
            )

            minEval = minOf(minEval, evalValue)
            beta = minOf(beta, evalValue)
            if (beta <= alpha) break
        }
        return minEval
    }
}

fun evaluateBoard(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    expansions: ExpansionsConfig
): Double {
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    val aiQueenHex = getQueenHex(board, aiPlayer)
    val humanQueenHex = getQueenHex(board, humanPlayer)

    var score = 0.0

    // Attack: surround the human queen.
    if (humanQueenHex != null) {
        val neighbors = humanQueenHex.getNeighbors()
        val aiAdjacent = neighbors.count { getTopPiece(board, it)?.player == aiPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        score += aiAdjacent * 150
        score += (anyOccupied - aiAdjacent) * 40
        if (anyOccupied == 5) score += 300
    } else {
        // Slight pressure to get the human to place their queen, then it becomes targetable.
        score += if (turnHuman >= 3) 30 else 10
    }

    // Defense: protect the AI queen. Only ENEMY pieces adjacent are a threat;
    // the AI's own surrounding pieces are a defensive ring (mild bonus).
    if (aiQueenHex != null) {
        val neighbors = aiQueenHex.getNeighbors()
        val enemyAdjacent = neighbors.count { getTopPiece(board, it)?.player == humanPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        val ownAdjacent = anyOccupied - enemyAdjacent
        score -= enemyAdjacent * 210
        if (anyOccupied == 5) score -= 400
        score += ownAdjacent * 15
    } else {
        // Mild timing pressure so the AI places its queen around its 3rd turn.
        score -= if (turnAI >= 3) 60 else 15
    }

    val occupiedHexes = getAllOccupiedHexes(board)
    for (hex in occupiedHexes) {
        val stack = board[hex.key()]
        if (stack != null && stack.size > 1) {
            val topPiece = stack[stack.size - 1]
            val pinnedPiece = stack[stack.size - 2]

            if (topPiece.player == aiPlayer && pinnedPiece.player == humanPlayer) {
                score += 80
                if (pinnedPiece.type == BugType.QUEEN) score += 200
            } else if (topPiece.player == humanPlayer && pinnedPiece.player == aiPlayer) {
                score -= 90
                if (pinnedPiece.type == BugType.QUEEN) score -= 250
            }
        }
    }

    return score
}

fun actuallyMovedPieceId(board: Map<String, List<Piece>>, action: MoveAction): String {
    return when (action.type) {
        MoveAction.ActionType.PILLBUG_SPECIAL ->
            action.pillbugTargetHex?.let { getTopPiece(board, it)?.id } ?: action.pieceId
        else -> action.pieceId
    }
}

fun simulateAction(
    board: Map<String, List<Piece>>,
    action: MoveAction,
    actingPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>
): Triple<MutableMap<String, MutableList<Piece>>, List<Piece>, List<Piece>> {
    val nextBoard = cloneBoard(board)
    var nextAIReserve = aiReserve.filter { it.id != action.pieceId }
    var nextHumanReserve = humanReserve.filter { it.id != action.pieceId }

    if (action.type == MoveAction.ActionType.PLACE) {
        val newPiece = Piece(action.pieceId, action.bugType, actingPlayer)
        val key = action.toHex.key()
        val existingStack = nextBoard.getOrPut(key) { mutableListOf() }
        existingStack.add(newPiece)
    } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
        val fromStack = nextBoard[action.fromHex.key()]
        if (fromStack != null) {
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) nextBoard.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
        val targetStack = nextBoard[action.pillbugTargetHex.key()]
        if (targetStack != null) {
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) nextBoard.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    }

    return Triple(nextBoard, nextAIReserve, nextHumanReserve)
}

// ============================================================================
// 4. MAIN JETPACK COMPOSE UI APP
// ============================================================================

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BugzApp() {
    val engine = remember { BugzEngine() }

    var gameState by remember { mutableStateOf(0) }
    fun bump() { gameState++ }

    var settings by remember {
        mutableStateOf(GameSettings(GameMode.AI, AIDifficulty.MEDIUM, ExpansionsConfig(), Player.ONE))
    }
    var isSetupOpen by remember { mutableStateOf(true) }
    var gameOver by remember { mutableStateOf<Player?>(null) }
    var isDraw by remember { mutableStateOf(false) }

    var selectedHex by remember { mutableStateOf<AxialHex?>(null) }
    var selectedReserveBug by remember { mutableStateOf<BugType?>(null) }
    var validDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var pillbugTargetHex by remember { mutableStateOf<AxialHex?>(null) }
    var pillbugDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var lastMovedHex by remember { mutableStateOf<AxialHex?>(null) }
    var isAITurn by remember { mutableStateOf(false) }
    var toast by remember { mutableStateOf<String?>(null) }
    var undoStack by remember { mutableStateOf<List<BugzEngine.EngineSnapshot>>(emptyList()) }

    val aiPlayer: Player = if (settings.humanColor == Player.ONE) Player.TWO else Player.ONE

    fun clearSelection() {
        selectedHex = null
        selectedReserveBug = null
        validDestinations = emptyList()
        pillbugTargetHex = null
        pillbugDestinations = emptyList()
    }

    fun applyForcedPasses() {
        var guard = 0
        while (guard < 100) {
            if (gameOver != null) break
            val cur = engine.currentPlayer
            val actions = engine.legalActions()
            if (actions.isNotEmpty()) break
            if (engine.board.isEmpty() && engine.p1Reserve.isEmpty() && engine.p2Reserve.isEmpty()) break

            val turn = engine.turnCountFor(cur)
            engine.history.add(MoveLogEntry(turn, cur, "Player $cur forced to pass (no legal moves)."))
            engine.switchTurn()
            bump()
            guard++
        }
    }

    // AI move trigger: launched in a persistent scope so it is never cancelled by recomposition
    val scope = rememberCoroutineScope()
    var executeMoveImpl: ((MoveAction) -> Unit)? = null

    fun requestAIMove() {
        if (settings.mode != GameMode.AI) return
        if (gameOver != null || isSetupOpen) return
        if (engine.currentPlayer != aiPlayer) return
        if (isAITurn) return

        isAITurn = true
        scope.launch {
            delay(600)

            val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE
            val action = computeAIMove(
                engine.board,
                aiPlayer,
                engine.reserveFor(aiPlayer),
                engine.reserveFor(humanPlayer),
                engine.turnCountFor(aiPlayer),
                engine.turnCountFor(humanPlayer),
                settings.aiDifficulty,
                engine.lastMovedPieceId,
                settings.expansions
            )

            // Guard: game may have been restarted while the AI was thinking
            if (gameOver != null || engine.currentPlayer != aiPlayer || !isAITurn) {
                isAITurn = false
                bump()
                return@launch
            }

            if (action != null) {
                executeMoveImpl?.invoke(action)
            } else {
                undoStack = undoStack + engine.snapshot()
                val turn = engine.turnCountFor(engine.currentPlayer)
                engine.history.add(MoveLogEntry(turn, engine.currentPlayer, "AI (Player \${if (engine.currentPlayer == Player.ONE) 1 else 2}) forced to pass."))
                engine.switchTurn()
                toast = "AI has no valid moves. Turn passed."
                bump()
                applyForcedPasses()
                bump()
            }

            isAITurn = false
            bump()
            // If forced passes bounced the turn back to AI, keep playing
            requestAIMove()
        }
    }

    fun executeMove(action: MoveAction) {
        undoStack = undoStack + engine.snapshot()
        engine.executeMove(action)
        lastMovedHex = action.toHex
        clearSelection()

        val status = engine.checkGameStatus()
        if (status.isGameOver) {
            gameOver = status.winner
            isDraw = status.isDraw
            isAITurn = false
            bump()
            return
        }

        bump()
        applyForcedPasses()
        bump()
        requestAIMove()
    }

    executeMoveImpl = ::executeMove

    fun startNewGame(newSettings: GameSettings) {
        engine.initNewGame(newSettings.expansions)
        settings = newSettings
        gameOver = null
        isDraw = false
        clearSelection()
        lastMovedHex = null
        toast = null
        isAITurn = false
        undoStack = emptyList()
        isSetupOpen = false
        bump()
        requestAIMove()
    }

    fun handleUndo() {
        if (isAITurn || undoStack.isEmpty()) return

        // In AI mode, keep popping until it is the human player's turn again
        var restored = false
        while (undoStack.isNotEmpty()) {
            val snap = undoStack.last()
            undoStack = undoStack.dropLast(1)
            engine.restore(snap)
            restored = true
            if (settings.mode != GameMode.AI || engine.currentPlayer != aiPlayer) break
        }

        if (!restored) return

        clearSelection()
        lastMovedHex = null
        gameOver = null
        isDraw = false
        isAITurn = false
        toast = "Move undone."
        bump()
    }

    // Toast auto-dismiss
    LaunchedEffect(toast) {
        if (toast != null) {
            delay(2500)
            toast = null
        }
    }

    fun queenDue(): Boolean {
        return engine.turnCountFor(engine.currentPlayer) == 4 && !engine.isQueenPlaced(engine.currentPlayer)
    }

    fun handleReserveSelect(bug: BugType) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        if (queenDue() && bug != BugType.QUEEN) {
            toast = "Queen Bee must be placed this turn (4th move rule)."
            return
        }

        selectedHex = null
        pillbugTargetHex = null
        pillbugDestinations = emptyList()

        if (selectedReserveBug == bug) {
            selectedReserveBug = null
            validDestinations = emptyList()
        } else {
            selectedReserveBug = bug
            validDestinations = engine.placementsForCurrent()
        }
    }

    fun handleHexClick(hex: AxialHex) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        val isDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
        val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }

        // Placement
        if (selectedReserveBug != null && isDest) {
            if (queenDue() && selectedReserveBug != BugType.QUEEN) {
                toast = "Queen Bee must be placed this turn (4th move rule)."
                return
            }
            val reserve = engine.reserveFor(engine.currentPlayer)
            val piece = reserve.firstOrNull { it.type == selectedReserveBug } ?: return
            executeMove(
                MoveAction(
                    type = MoveAction.ActionType.PLACE,
                    pieceId = piece.id,
                    bugType = piece.type,
                    player = engine.currentPlayer,
                    toHex = hex
                )
            )
            return
        }

        // Move / Pillbug special
        if (selectedHex != null && (isDest || isPillbugDest)) {
            val topPiece = getTopPiece(engine.board, selectedHex!!) ?: return
            if (pillbugTargetHex != null && isPillbugDest) {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.PILLBUG_SPECIAL,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        pillbugTargetHex = pillbugTargetHex,
                        toHex = hex
                    )
                )
            } else {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.MOVE,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        toHex = hex
                    )
                )
            }
            return
        }

        // Select piece
        val stack = engine.board[hex.key()]
        val topPiece = stack?.lastOrNull()

        selectedReserveBug = null

        if (selectedHex != null && selectedHex!!.q == hex.q && selectedHex!!.r == hex.r) {
            clearSelection()
            return
        }

        if (topPiece != null && topPiece.player == engine.currentPlayer) {
            selectedHex = hex
            validDestinations = engine.movesFor(hex)

            val effectiveTypes = engine.effectiveTypes(hex, topPiece)
            if (effectiveTypes.contains(BugType.PILLBUG)) {
                val targets = engine.pillbugTargets(hex)
                if (targets.isNotEmpty()) {
                    pillbugTargetHex = targets[0].targetHex
                    pillbugDestinations = targets[0].destinationHexes
                } else {
                    pillbugTargetHex = null
                    pillbugDestinations = emptyList()
                }
            } else {
                pillbugTargetHex = null
                pillbugDestinations = emptyList()
            }
        } else {
            clearSelection()
        }
    }

    MaterialTheme(
        colorScheme = if (isSystemInDarkTheme()) DarkColors else LightColors
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    modifier = Modifier.height(74.dp),
                    title = {
                        Column(modifier = Modifier.padding(top = 14.dp)) {
                            Text("🐝 Bugz Strategy", fontWeight = FontWeight.Black)
                            Text(
                                text = when {
                                    gameOver != null -> "Game Over"
                                    isAITurn -> "AI Thinking..."
                                    settings.mode == GameMode.AI -> "VS AI (\${settings.aiDifficulty})"
                                    else -> "Pass & Play"
                                },
                                fontSize = 15.sp,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    },
                    actions = {
                        Text(
                            text = if (gameOver != null)
                                "Winner: \${if (gameOver == Player.ONE) "White" else if (gameOver == Player.TWO) "Black" else "Draw"}"
                            else
                                "Turn: P\${if (engine.currentPlayer == Player.ONE) 1 else 2} · T\${gameState}",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (engine.currentPlayer == Player.ONE)
                                MaterialTheme.colorScheme.primary
                            else
                                if (isSystemInDarkTheme()) Color(0xFF93C5FD) else Color(0xFF1D4ED8),
                            modifier = Modifier.align(Alignment.CenterVertically)
                        )
                        Spacer(Modifier.width(8.dp))
                        IconButton(
                            onClick = { handleUndo() },
                            enabled = undoStack.isNotEmpty() && !isAITurn
                        ) {
                            Text(
                                text = "\\u21B6",
                                fontSize = 24.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (undoStack.isNotEmpty() && !isAITurn)
                                    MaterialTheme.colorScheme.primary
                                else
                                    MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        IconButton(onClick = { isSetupOpen = true }) {
                            Icon(Icons.Default.Settings, contentDescription = "Settings")
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(
                        containerColor = MaterialTheme.colorScheme.background
                    )
                )
            }
        ) { paddingValues ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
                    .background(MaterialTheme.colorScheme.background)
            ) {
                Column(
                    modifier = Modifier.fillMaxSize()
                ) {
                    // Main Interactive Hexagon Canvas (fills space above reserve bar)
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .weight(1f)
                    ) {
                        HexCanvasBoard(
                            board = engine.board,
                            selectedHex = selectedHex,
                            validDestinations = validDestinations,
                            pillbugTargetHex = pillbugTargetHex,
                            pillbugDestinations = pillbugDestinations,
                            lastMovedHex = lastMovedHex,
                            onHexClick = { hex -> handleHexClick(hex) }
                        )

                        // Toast notification
                        toast?.let { msg ->
                            Surface(
                                color = Color(0xFFF59E0B),
                                shape = RoundedCornerShape(16.dp),
                                modifier = Modifier
                                    .align(Alignment.BottomCenter)
                                    .padding(12.dp)
                            ) {
                                Text(
                                    text = msg,
                                    color = Color.Black,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 13.sp,
                                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
                                )
                            }
                        }

                        // Move Log Overlay
                        MoveLogOverlay(
                            history = engine.history,
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(12.dp)
                        )
                    }

                    // Reserve Bar at Bottom
                    ReserveBar(
                        reserve = engine.reserveFor(engine.currentPlayer),
                        selectedBug = selectedReserveBug,
                        isEnabled = !isAITurn && gameOver == null &&
                            !(settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer),
                        queenDue = queenDue(),
                        onSelectBug = { bug -> handleReserveSelect(bug) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(12.dp)
                    )
                }

                // New Game / Setup Modal
                if (isSetupOpen) {
                    SetupModal(
                        currentSettings = settings,
                        onStart = { newSettings ->
                            startNewGame(newSettings)
                        },
                        onDismiss = {
                            if (gameOver != null || engine.board.isNotEmpty()) isSetupOpen = false
                        }
                    )
                }

                // Game Over Dialog
                if (gameOver != null) {
                    GameOverDialog(
                        winner = gameOver,
                        isDraw = isDraw,
                        onRematch = { startNewGame(settings) },
                        onNewSetup = {
                            gameOver = null
                            isDraw = false
                            isSetupOpen = true
                        }
                    )
                }
            }
        }
    }
}

private fun hexToPixel(hex: AxialHex, radius: Float): Offset {
    val x = radius * sqrt(3f) * (hex.q + hex.r / 2f)
    val y = radius * 1.5f * hex.r
    return Offset(x, y)
}

private fun pixelToHex(pos: Offset, center: Offset, radius: Float): AxialHex {
    val relX = pos.x - center.x
    val relY = pos.y - center.y

    val r = (2.0 / 3.0) * (relY / radius)
    var q = (relX / (radius * sqrt(3.0))) - r / 2.0

    val s = -q - r
    var rq = round(q).toInt()
    var rr = round(r).toInt()
    var rs = round(s).toInt()

    val dq = abs(rq - q)
    val dr = abs(rr - r)
    val ds = abs(rs - s)

    if (dq > dr && dq > ds) rq = -rr - rs
    else if (dr > ds) rr = -rq - rs

    return AxialHex(rq, rr)
}

@Composable
fun HexCanvasBoard(
    board: Map<String, List<Piece>>,
    selectedHex: AxialHex?,
    validDestinations: List<AxialHex>,
    pillbugTargetHex: AxialHex?,
    pillbugDestinations: List<AxialHex>,
    lastMovedHex: AxialHex?,
    onHexClick: (AxialHex) -> Unit
) {
    var scale by remember { mutableStateOf(1f) }
    var pan by remember { mutableStateOf(Offset.Zero) }
    var canvasSize by remember { mutableStateOf(Size.Zero) }
    val baseRadius = 42.dp
    val surfaceVariant = MaterialTheme.colorScheme.surfaceVariant
    val outline = MaterialTheme.colorScheme.outline

    // Collect all hexes to render
    val renderMap = mutableMapOf<String, AxialHex>()

    board.forEach { (key, stack) ->
        if (stack.isNotEmpty()) {
            val hex = parseKey(key)
            renderMap[key] = hex
            for (n in hex.getNeighbors()) {
                if (!renderMap.containsKey(n.key())) renderMap[n.key()] = n
            }
        }
    }

    // Empty board: render center + neighbors
    if (renderMap.isEmpty()) {
        val center = AxialHex(0, 0)
        renderMap[center.key()] = center
        for (n in center.getNeighbors()) renderMap[n.key()] = n
    }

    validDestinations.forEach { renderMap[it.key()] = it }
    pillbugDestinations.forEach { renderMap[it.key()] = it }
    selectedHex?.let { renderMap[it.key()] = it }
    pillbugTargetHex?.let { renderMap[it.key()] = it }

    val textMeasurer = rememberTextMeasurer()

    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .onSizeChanged { canvasSize = Size(it.width.toFloat(), it.height.toFloat()) }
            .pointerInput(Unit) {
                detectTransformGestures { _, gesturePan, gestureZoom, _ ->
                    scale = (scale * gestureZoom).coerceIn(0.4f, 2.5f)
                    pan += gesturePan
                }
            }
            .pointerInput(Unit) {
                detectTapGestures { tap ->
                    val center = Offset(canvasSize.width / 2f + pan.x, canvasSize.height / 2f + pan.y)
                    val hexRadius = baseRadius.toPx() * scale
                    val hex = pixelToHex(Offset(tap.x, tap.y), center, hexRadius)
                    onHexClick(hex)
                }
            }
    ) {
        val center = Offset(size.width / 2f + pan.x, size.height / 2f + pan.y)
        val hexRadius = baseRadius.toPx() * scale

        renderMap.values.forEach { hex ->
            val rel = hexToPixel(hex, hexRadius)
            val x = center.x + rel.x
            val y = center.y + rel.y

            val stack = board[hex.key()]
            val isOccupiedTile = stack != null && stack.isNotEmpty()
            val topPiece = stack?.lastOrNull()
            val stackHeight = stack?.size ?: 0

            val isSelected = selectedHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isValidDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
            val isPillbugTarget = pillbugTargetHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }
            val isLastMoved = lastMovedHex?.let { it.q == hex.q && it.r == hex.r } == true

            val path = Path().apply {
                for (i in 0..5) {
                    val angle = (60 * i - 30) * Math.PI / 180.0
                    val px = x + hexRadius * cos(angle).toFloat()
                    val py = y + hexRadius * sin(angle).toFloat()
                    if (i == 0) moveTo(px, py) else lineTo(px, py)
                }
                close()
            }

            val fillColor = when {
                isOccupiedTile && topPiece?.player == Player.ONE -> Color(0xFFF8FAFC)
                isOccupiedTile -> Color(0xFF1E293B)
                isValidDest || isPillbugDest -> Color(0x2E10B981)
                isPillbugTarget -> Color(0x2EEC4899)
                else -> surfaceVariant
            }
            val strokeColor = when {
                isSelected -> Color(0xFFF59E0B)
                isPillbugTarget -> Color(0xFFEC4899)
                isLastMoved -> Color(0xFF3B82F6)
                isValidDest || isPillbugDest -> Color(0xFF10B981)
                isOccupiedTile -> outline
                else -> outline
            }
            val strokeWidth = when {
                isSelected -> 4f
                isPillbugTarget -> 3.5f
                isLastMoved -> 3f
                isValidDest || isPillbugDest -> 2.5f
                else -> 1.5f
            }

            drawPath(path, color = fillColor)
            drawPath(path, color = strokeColor, style = Stroke(width = strokeWidth))

            if (isOccupiedTile && topPiece != null) {
                val emojiSizeSp = with(density) { (hexRadius * 1.05f).toSp() }
                val layout = textMeasurer.measure(
                    AnnotatedString(topPiece.type.emoji),
                    style = TextStyle(fontSize = emojiSizeSp)
                )
                drawText(
                    layout,
                    topLeft = Offset(x - layout.size.width / 2f, y - layout.size.height / 2f)
                )

                if (stackHeight > 1) {
                    val badge = textMeasurer.measure(
                        AnnotatedString(stackHeight.toString()),
                        style = TextStyle(fontSize = 12.sp, color = Color.Black, fontWeight = FontWeight.Bold)
                    )
                    val badgeCenter = Offset(x + hexRadius * 0.72f, y - hexRadius * 0.72f)
                    drawCircle(color = Color(0xFFF59E0B), radius = 12f, center = badgeCenter)
                    drawText(
                        badge,
                        topLeft = Offset(
                            badgeCenter.x - badge.size.width / 2f,
                            badgeCenter.y - badge.size.height / 2f
                        )
                    )
                }

                // Player indicator dot
                val dotColor = if (topPiece.player == Player.ONE) Color.White else Color.Black
                drawCircle(
                    color = dotColor,
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f)
                )
                drawCircle(
                    color = if (topPiece.player == Player.ONE) Color(0xFFCBD5E1) else Color(0xFF64748B),
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f),
                    style = Stroke(width = 1.5f)
                )
            } else if (isValidDest || isPillbugDest) {
                drawCircle(
                    color = Color(0xFF10B981),
                    radius = 9f,
                    center = Offset(x, y)
                )
            }
        }
    }
}

@Composable
fun ReserveBar(
    reserve: List<Piece>,
    selectedBug: BugType?,
    isEnabled: Boolean,
    queenDue: Boolean,
    onSelectBug: (BugType) -> Unit,
    modifier: Modifier = Modifier
) {
    val grouped = reserve.groupBy { it.type }
    val colors = MaterialTheme.colorScheme

    Surface(
        shape = RoundedCornerShape(24.dp),
        color = colors.surface,
        tonalElevation = 8.dp,
        modifier = modifier.fillMaxWidth()
    ) {
        LazyRow(
            contentPadding = PaddingValues(14.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            items(grouped.entries.toList()) { entry ->
                val bug = entry.key
                val count = entry.value.size
                val isSelected = selectedBug == bug
                val cardEnabled = isEnabled && !(queenDue && bug != BugType.QUEEN)

                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(18.dp))
                        .background(
                            when {
                                isSelected -> colors.primary
                                !cardEnabled -> colors.background
                                else -> colors.surfaceVariant
                            }
                        )
                        .border(
                            width = if (isSelected) 2.dp else 1.dp,
                            color = if (isSelected) colors.primary else colors.outline,
                            shape = RoundedCornerShape(18.dp)
                        )
                        .clickable(enabled = cardEnabled) { onSelectBug(bug) }
                        .sizeIn(minHeight = 96.dp, minWidth = 112.dp)
                        .padding(horizontal = 12.dp, vertical = 10.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(
                            text = bug.emoji,
                            fontSize = 46.sp,
                            color = if (isSelected) colors.onPrimary else colors.onSurface
                        )
                        Spacer(Modifier.height(4.dp))
                        Text(
                            text = bug.title,
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (isSelected) colors.onPrimary else colors.onSurfaceVariant,
                            maxLines = 1
                        )
                    }

                    // Count badge
                    Box(
                        modifier = Modifier
                            .align(Alignment.TopEnd)
                            .padding(6.dp)
                            .size(28.dp)
                            .clip(CircleShape)
                            .background(if (isSelected) colors.onPrimary else colors.primary),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "$count",
                            fontSize = 14.sp,
                            fontWeight = FontWeight.Black,
                            color = if (isSelected) colors.primary else colors.onPrimary
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun MoveLogOverlay(history: List<MoveLogEntry>, modifier: Modifier = Modifier) {
    var expanded by remember { mutableStateOf(false) }

    val colors = MaterialTheme.colorScheme

    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Toggle tab pinned to the side
        Surface(
            shape = RoundedCornerShape(10.dp),
            color = colors.surface.copy(alpha = 0.9f),
            border = BorderStroke(1.dp, colors.outline),
            onClick = { expanded = !expanded }
        ) {
            Text(
                text = if (expanded) "❯" else "❮",
                fontSize = 18.sp,
                fontWeight = FontWeight.Black,
                color = colors.primary,
                modifier = Modifier
                    .padding(horizontal = 8.dp, vertical = 14.dp)
            )
        }

        if (expanded) {
            Spacer(Modifier.width(4.dp))
            Surface(
                shape = RoundedCornerShape(12.dp),
                color = colors.background.copy(alpha = 0.9f),
                border = BorderStroke(1.dp, colors.outline)
            ) {
                LazyColumn(contentPadding = PaddingValues(8.dp)) {
                    item {
                        Text(
                            "Move Log",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = colors.onSurfaceVariant
                        )
                    }
                    items(history.takeLast(8).reversed()) { entry ->
                        Text(
                            text = "\${entry.turn}. P\${if (entry.player == Player.ONE) 1 else 2}: \${entry.text}",
                            fontSize = 11.sp,
                            color = colors.onSurface,
                            modifier = Modifier.padding(vertical = 1.dp)
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun SetupModal(
    currentSettings: GameSettings,
    onStart: (GameSettings) -> Unit,
    onDismiss: () -> Unit
) {
    var mode by remember { mutableStateOf(currentSettings.mode) }
    var diff by remember { mutableStateOf(currentSettings.aiDifficulty) }
    var humanColor by remember { mutableStateOf(currentSettings.humanColor) }
    var mosquito by remember { mutableStateOf(currentSettings.expansions.mosquito) }
    var ladybug by remember { mutableStateOf(currentSettings.expansions.ladybug) }
    var pillbug by remember { mutableStateOf(currentSettings.expansions.pillbug) }
    var showRules by remember { mutableStateOf(false) }

    if (showRules) {
        RulesDialog(onClose = { showRules = false })
        return
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("🐝 New Bugz Game", fontWeight = FontWeight.Bold) },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text("Select Game Mode:", fontWeight = FontWeight.SemiBold)
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mode == GameMode.PASS_AND_PLAY,
                        onClick = { mode = GameMode.PASS_AND_PLAY },
                        label = { Text("Pass & Play") }
                    )
                    FilterChip(
                        selected = mode == GameMode.AI,
                        onClick = { mode = GameMode.AI },
                        label = { Text("VS AI Engine") }
                    )
                }

                if (mode == GameMode.AI) {
                    Text("AI Difficulty:", fontWeight = FontWeight.SemiBold)
                    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        AIDifficulty.values().forEach { d ->
                            FilterChip(
                                selected = diff == d,
                                onClick = { diff = d },
                                label = { Text(d.name) }
                            )
                        }
                    }

                    Text("You play as:", fontWeight = FontWeight.SemiBold)
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        FilterChip(
                            selected = humanColor == Player.ONE,
                            onClick = { humanColor = Player.ONE },
                            label = { Text("White (P1)") },
                            modifier = Modifier.weight(1f)
                        )
                        FilterChip(
                            selected = humanColor == Player.TWO,
                            onClick = { humanColor = Player.TWO },
                            label = { Text("Black (P2)") },
                            modifier = Modifier.weight(1f)
                        )
                    }
                }

                Text("Expansions:", fontWeight = FontWeight.SemiBold)
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mosquito,
                        onClick = { mosquito = !mosquito },
                        label = { Text("🦟 Mosquito") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    FilterChip(
                        selected = ladybug,
                        onClick = { ladybug = !ladybug },
                        label = { Text("🐞 Ladybug") },
                        modifier = Modifier.fillMaxWidth()
                    )
                    FilterChip(
                        selected = pillbug,
                        onClick = { pillbug = !pillbug },
                        label = { Text("💊 Pillbug") },
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    onStart(
                        GameSettings(
                            mode = mode,
                            aiDifficulty = diff,
                            expansions = ExpansionsConfig(mosquito, ladybug, pillbug),
                            humanColor = humanColor
                        )
                    )
                }
            ) {
                Text("Start Match")
            }
        },
        dismissButton = {
            TextButton(onClick = { showRules = true }) { Text("📖 Learn to Play") }
        }
    )
}

@Composable
fun RulesDialog(onClose: () -> Unit) {
    AlertDialog(
        onDismissRequest = onClose,
        title = { Text("How to Play Bugz", fontWeight = FontWeight.Bold) },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(rememberScrollState())
                    .padding(vertical = 4.dp),
                verticalArrangement = Arrangement.spacedBy(6.dp)
            ) {
                Text(
                    "🎯 Goal: Surround the opponent's Queen Bee with pieces on all six sides. " +
                        "First to do so wins; both surrounded at once is a draw.",
                    fontSize = 13.sp
                )
                Text("📜 Core Rules", fontWeight = FontWeight.Bold)
                Text(
                    "• Play one piece per turn (placement) or move one of your pieces.\\n" +
                        "• Your Queen Bee must be introduced by your 4th turn.\\n" +
                        "• Your first piece is placed anywhere; later pieces must be placed adjacent " +
                        "to one of your pieces. Except for your second placement, pieces may not be " +
                        "placed touching an opponent's piece.\\n" +
                        "• The swarm must always stay connected. You may never move a piece that would " +
                        "split the swarm, and you may not move a piece into a gap unless it still fits " +
                        "the freedom-to-move rule (no squeezing between stacked pieces).",
                    fontSize = 13.sp
                )
                Text("🦗 Insect Movements", fontWeight = FontWeight.Bold)

                Text(
                    "🐝 Queen Bee — moves exactly 1 hex per turn.",
                    fontSize = 13.sp
                )
                Text(
                    "🕷️ Spider — crawls exactly 3 hexes along the outside edge, never retracing.",
                    fontSize = 13.sp
                )
                Text(
                    "🪲 Beetle — moves 1 hex and can climb on top of other pieces (including a " +
                        "Queen) to block them; a beetle on top moves like a beetle over the stack.",
                    fontSize = 13.sp
                )
                Text(
                    "🦗 Grasshopper — jumps in a straight line over at least one piece, landing on " +
                        "the first empty hex in that line.",
                    fontSize = 13.sp
                )
                Text(
                    "🐜 Soldier Ant — may slide any number of hexes along the outside of the swarm.",
                    fontSize = 13.sp
                )
                Text(
                    "🦟 Mosquito — copies the movement (or pillbug ability) of any piece it touches.",
                    fontSize = 13.sp
                )
                Text(
                    "🐞 Ladybug — moves exactly 2 hexes on top of the swarm, then 1 hex back down " +
                        "to the board (may land on empty board hexes).",
                    fontSize = 13.sp
                )
                Text(
                    "🪳 Pillbug — may not move itself, but it can move an adjacent enemy or friendly " +
                        "piece 2 hexes: up onto itself, then down into an adjacent empty space. The " +
                        "moved piece is stunned and cannot move on the opponent's next turn.",
                    fontSize = 13.sp
                )
            }
        },
        confirmButton = {
            TextButton(onClick = onClose) { Text("Got it") }
        }
    )
}

@Composable
fun GameOverDialog(
    winner: Player?,
    isDraw: Boolean,
    onRematch: () -> Unit,
    onNewSetup: () -> Unit
) {
    val title = if (isDraw) "Draw!" else "Player \${if (winner == Player.ONE) 1 else 2} Wins!"

    AlertDialog(
        onDismissRequest = {},
        title = { Text("🏆 $title", fontWeight = FontWeight.Bold) },
        text = {
            Text(
                if (isDraw) "Both Queens are surrounded. It's a draw!"
                else "The Queen of Player \${if (winner == Player.ONE) 2 else 1} is surrounded. Well played!"
            )
        },
        confirmButton = {
            Button(onClick = onRematch) { Text("Rematch") }
        },
        dismissButton = {
            TextButton(onClick = onNewSetup) { Text("New Game Setup") }
        }
    )
}

// ============================================================================
// 5. ACTIVITY ENTRY POINT
// ============================================================================

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BugzApp()
        }
    }
}
`,iy=({isOpen:s,onClose:r})=>{const{t:h}=hl(),[o,v]=P.useState(!1);if(!s)return null;const A=()=>{navigator.clipboard.writeText(Uo),v(!0),setTimeout(()=>v(!1),2e3)},H=()=>{const D=new Blob([Uo],{type:"text/plain;charset=utf-8"}),M=URL.createObjectURL(D),m=document.createElement("a");m.href=M,m.download="BugzApp.kt",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(M)};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl",children:f.jsx(om,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-slate-100 text-sm flex items-center gap-2",children:[f.jsx("span",{children:h("codeTitle")}),f.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",children:h("codeBadge")})]}),f.jsx("p",{className:"text-xs text-slate-400",children:h("codeDesc")})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:A,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors",children:[o?f.jsx(dh,{className:"w-4 h-4 text-emerald-400"}):f.jsx(xh,{className:"w-4 h-4"}),f.jsx("span",{children:h(o?"copied":"copyCode")})]}),f.jsxs("button",{onClick:H,className:"px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors",children:[f.jsx(Ah,{className:"w-4 h-4"}),f.jsx("span",{children:h("downloadKt")})]}),f.jsx("button",{onClick:r,className:"p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors",children:f.jsx(sm,{className:"w-5 h-5"})})]})]}),f.jsx("div",{className:"flex-1 overflow-auto p-6 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300",children:f.jsx("pre",{className:"select-text whitespace-pre-wrap",children:Uo})})]})})};function uy(){return f.jsx(Wh,{children:f.jsx(cy,{})})}function cy(){const{t:s}=hl(),[r,h]=P.useState({mode:"AI",aiDifficulty:"MEDIUM",expansions:{mosquito:!0,ladybug:!0,pillbug:!0}}),[o,v]=P.useState(new Map),[A,H]=P.useState([]),[D,M]=P.useState([]),[m,B]=P.useState(1),[z,L]=P.useState(1),[k,ae]=P.useState(1),[I,Le]=P.useState(null),[qe,ze]=P.useState(null),[ge,Oe]=P.useState([]),[He,je]=P.useState([]),[Z,Re]=P.useState(null),[Xe,ut]=P.useState(null),[rt,de]=P.useState([]),[St,G]=P.useState(null),[Te,T]=P.useState([]),[q,Y]=P.useState(!1),[le,ee]=P.useState(null),[g,C]=P.useState(!0),[R,U]=P.useState(!1),[K,F]=P.useState(!1),se=(_,ne)=>{const fe=[];return Object.keys(sa).forEach(Me=>{const we=sa[Me];if(!we.isExpansion||Me==="MOSQUITO"&&ne.mosquito||Me==="LADYBUG"&&ne.ladybug||Me==="PILLBUG"&&ne.pillbug)for(let ft=0;ft<we.count;ft++)fe.push({id:`p${_}_${Me}_${ft}`,type:Me,player:_})}),fe},_e=P.useCallback(_=>{h(_),v(new Map),H(se(1,_.expansions)),M(se(2,_.expansions)),B(1),L(1),ae(1),Le(null),ze(null),Oe([]),je([]),Re(null),ut(null),de([]),G(null),T([]),Y(!1),C(!1),U(!1),ee(null)},[]),he=P.useCallback((_,ne,fe,Me,we,ft,Ye,Bt)=>{const ot={board:Array.from(_.entries()).map(([dt,Xn])=>[dt,[...Xn]]),p1Reserve:[...ne],p2Reserve:[...fe],currentPlayer:Me,turnCountP1:we,turnCountP2:ft,lastMovedPieceId:Ye,moveHistory:[...Bt]};je(dt=>[...dt,ot])},[]),At=P.useCallback(()=>{if(He.length===0||q)return;let _=1;r.mode==="AI"&&He.length>=2&&(_=2);const ne=Math.max(0,He.length-_),fe=He[ne],Me=new Map;fe.board.forEach(([we,ft])=>Me.set(we,[...ft])),v(Me),H([...fe.p1Reserve]),M([...fe.p2Reserve]),B(fe.currentPlayer),L(fe.turnCountP1),ae(fe.turnCountP2),Le(fe.lastMovedPieceId),Oe([...fe.moveHistory]),je(we=>we.slice(0,ne)),Re(null),ut(null),de([]),G(null),T([])},[He,q,r.mode]),We=wo(o);P.useEffect(()=>{We.isGameOver&&!R&&U(!0)},[We,R]),P.useEffect(()=>{if(We.isGameOver)return;const _=m===1?A:D,ne=m===1?z:k;if(Qo(o,m,_,ne,I,r.expansions).length===0&&(o.size>0||A.length>0)){ee(s("toastForcedPass",{n:m})),setTimeout(()=>ee(null),3e3);const Me={turnNumber:ne,player:m,actionType:"PASS",bugType:"QUEEN",description:s("passLogDesc",{n:m})};Oe(we=>[...we,Me]),B(m===1?2:1)}},[m,o,A,D,z,k,I,r.expansions,We.isGameOver]),P.useEffect(()=>{if(r.mode==="AI"&&m===2&&!We.isGameOver&&!q){Y(!0);const _=setTimeout(()=>{const ne=Wg(o,2,D,A,k,z,r.aiDifficulty,I,r.expansions);ne?yl(ne):(ee(s("toastAiPass")),setTimeout(()=>ee(null),3e3),B(1)),Y(!1)},600);return()=>clearTimeout(_)}},[m,r,o,A,D,z,k,I,We.isGameOver,q]);const yl=_=>{he(o,A,D,m,z,k,I,ge);const ne=pu(o);let fe=[...A],Me=[...D],we="";if(_.type==="PLACE"){if(_.player===1){const ot=fe.findIndex(dt=>dt.id===_.pieceId);ot!==-1&&fe.splice(ot,1)}else{const ot=Me.findIndex(dt=>dt.id===_.pieceId);ot!==-1&&Me.splice(ot,1)}const Ye={id:_.pieceId,type:_.bugType,player:_.player},Bt=te(_.toHex.q,_.toHex.r),Be=ne.get(Bt)||[];ne.set(Bt,[...Be,Ye]),we=s("placedDesc",{bug:sa[_.bugType].name,q:_.toHex.q,r:_.toHex.r}),ze({to:_.toHex})}else if(_.type==="MOVE"&&_.fromHex){const Ye=te(_.fromHex.q,_.fromHex.r),Bt=ne.get(Ye)||[],Be=Bt.pop();if(Bt.length===0&&ne.delete(Ye),Be){const ot=te(_.toHex.q,_.toHex.r),dt=ne.get(ot)||[];ne.set(ot,[...dt,Be])}we=s("movedDesc",{bug:sa[_.bugType].name,q1:_.fromHex.q,r1:_.fromHex.r,q2:_.toHex.q,r2:_.toHex.r}),ze({from:_.fromHex,to:_.toHex})}else if(_.type==="PILLBUG_SPECIAL"&&_.pillbugTargetHex){const Ye=te(_.pillbugTargetHex.q,_.pillbugTargetHex.r),Bt=ne.get(Ye)||[],Be=Bt.pop();if(Bt.length===0&&ne.delete(Ye),Be){const ot=te(_.toHex.q,_.toHex.r),dt=ne.get(ot)||[];ne.set(ot,[...dt,Be])}we=s("pillbugMovedDesc",{bug:Be?sa[Be.type].name:"piece",q1:_.pillbugTargetHex.q,r1:_.pillbugTargetHex.r,q2:_.toHex.q,r2:_.toHex.r}),ze({from:_.pillbugTargetHex,to:_.toHex})}v(ne),H(fe),M(Me),Le(_.pieceId);const ft={turnNumber:m===1?z:k,player:m,actionType:_.type,bugType:_.bugType,from:_.fromHex,to:_.toHex,description:we};Oe(Ye=>[...Ye,ft]),Re(null),ut(null),de([]),G(null),T([]),m===1?(L(Ye=>Ye+1),B(2)):(ae(Ye=>Ye+1),B(1))},ra=_=>{if(!q)if(Re(null),G(null),T([]),Xe===_)ut(null),de([]);else{ut(_);const ne=tm(o,m);de(ne)}},It=_=>{if(q)return;const ne=o.get(te(_.q,_.r)),fe=ne&&ne.length>0?ne[ne.length-1]:null;if(ut(null),Z&&Z.q===_.q&&Z.r===_.r){Re(null),de([]),G(null),T([]);return}if(fe&&fe.player===m){Re(_);const we=lm(o,_,m,m===1?z:k,I,r.expansions);if(de(we),ko(o,_,fe,r.expansions).includes("PILLBUG")){const Ye=nm(o,_,m,I);Ye.length>0&&(G(Ye[0].targetHex),T(Ye[0].destinationHexes))}else G(null),T([])}},Ja=_=>{if(q)return;const ne=m===1?A:D;if(Xe){const fe=ne.find(Me=>Me.type===Xe);fe&&yl({type:"PLACE",pieceId:fe.id,bugType:Xe,player:m,toHex:_})}else if(Z){const fe=gu(o,Z);fe&&(St&&Te.some(Me=>Me.q===_.q&&Me.r===_.r)?yl({type:"PILLBUG_SPECIAL",pieceId:fe.id,bugType:fe.type,player:m,fromHex:Z,pillbugTargetHex:St,toHex:_}):yl({type:"MOVE",pieceId:fe.id,bugType:fe.type,player:m,fromHex:Z,toHex:_}))}};return f.jsxs("div",{className:"flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden",children:[f.jsxs("header",{className:"bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-2xl",children:"🐝"}),f.jsxs("h1",{className:"text-lg font-black tracking-tight text-amber-400",children:[s("appTitle")," ",f.jsx("span",{className:"text-slate-400 text-xs font-normal",children:s("appSubtitle")})]})]}),f.jsx("span",{className:"hidden sm:inline-block text-sm font-semibold px-3 pt-1.5 pb-2.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 translate-y-2.5",children:r.mode==="AI"?s("vsAi",{diff:s(r.aiDifficulty==="EASY"?"easyBtn":r.aiDifficulty==="MEDIUM"?"mediumBtn":"hardBtn")}):s("passAndPlay")})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${m===1?"bg-slate-800 border-amber-400 text-amber-300":"bg-slate-900 border-blue-400 text-blue-300"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${m===1?"bg-white":"bg-slate-950 border border-slate-500"} ${q?"animate-ping":""}`}),f.jsx("span",{children:q?s("aiThinking"):s("playersTurn",{n:m,color:s(m===1?"white":"black")})})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx($h,{className:"!px-1.5 !py-1"}),f.jsx("button",{onClick:At,disabled:He.length===0||q,className:`p-2 rounded-xl border transition-colors ${He.length>0&&!q?"bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white":"bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed"}`,title:s("undoTitle"),children:f.jsx(qh,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>C(!0),className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors",title:s("newGameTitle"),children:f.jsx(_h,{className:"w-4 h-4"})}),f.jsxs("button",{onClick:()=>F(!0),className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold",title:s("kotlinTitle"),children:[f.jsx(om,{className:"w-4 h-4"}),f.jsx("span",{className:"hidden md:inline",children:s("kotlinSource")})]})]})]})]}),le&&f.jsxs("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce",children:[f.jsx(cm,{className:"w-4 h-4"}),f.jsx("span",{children:le})]}),f.jsxs("div",{className:"flex-1 flex flex-col md:flex-row relative overflow-hidden",children:[f.jsxs("div",{className:"hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4",children:[f.jsx(Lo,{player:1,reserve:A,isActive:m===1&&!q,selectedBugType:m===1?Xe:null,onSelectBugType:ra,turnCount:z,queenPlaced:Vl(o,1)}),f.jsx(Lo,{player:2,reserve:D,isActive:m===2&&!q,selectedBugType:m===2?Xe:null,onSelectBugType:ra,turnCount:k,queenPlaced:Vl(o,2)})]}),f.jsxs("div",{className:"flex-1 relative h-full",children:[f.jsx(ey,{board:o,selectedHex:Z,validDestinations:rt,pillbugTargetHex:St,pillbugDestinations:Te,onSelectHex:It,onSelectDestination:Ja,currentPlayer:m,isAITurn:q,lastMovedHex:qe}),f.jsx("div",{className:"absolute bottom-4 right-4 z-20 max-w-xs w-full",children:f.jsx(ty,{logs:ge})})]}),f.jsx("div",{className:"block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20",children:f.jsx(Lo,{player:m,reserve:m===1?A:D,isActive:!q,selectedBugType:Xe,onSelectBugType:ra,turnCount:m===1?z:k,queenPlaced:Vl(o,m)})})]}),f.jsx(ay,{isOpen:g,onStartGame:_e,onClose:()=>C(!1),canCancel:o.size>0}),f.jsx(ny,{isOpen:R,winner:We.winner,onRestart:()=>_e(r),onNewGameSetup:()=>{U(!1),C(!0)}}),f.jsx(iy,{isOpen:K,onClose:()=>F(!1)})]})}kg.createRoot(document.getElementById("root")).render(f.jsx(P.StrictMode,{children:f.jsx(uy,{})}));
