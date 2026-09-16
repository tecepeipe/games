(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))s(v);new MutationObserver(v=>{for(const A of v)if(A.type==="childList")for(const j of A.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&s(j)}).observe(document,{childList:!0,subtree:!0});function h(v){const A={};return v.integrity&&(A.integrity=v.integrity),v.referrerPolicy&&(A.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?A.credentials="include":v.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function s(v){if(v.ep)return;v.ep=!0;const A=h(v);fetch(v.href,A)}})();var ks={exports:{}},Fn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function Lg(){if(Wd)return Fn;Wd=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function h(s,v,A){var j=null;if(A!==void 0&&(j=""+A),v.key!==void 0&&(j=""+v.key),"key"in v){A={};for(var L in v)L!=="key"&&(A[L]=v[L])}else A=v;return v=A.ref,{$$typeof:c,type:s,key:j,ref:v!==void 0?v:null,props:A}}return Fn.Fragment=r,Fn.jsx=h,Fn.jsxs=h,Fn}var $d;function qg(){return $d||($d=1,ks.exports=Lg()),ks.exports}var f=qg(),Ps={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function _g(){if(ep)return te;ep=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),j=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),R=Symbol.iterator;function k(m){return m===null||typeof m!="object"?null:(m=R&&m[R]||m["@@iterator"],typeof m=="function"?m:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,F={};function X(m,C,_){this.props=m,this.context=C,this.refs=F,this.updater=_||P}X.prototype.isReactComponent={},X.prototype.setState=function(m,C){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,C,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ve(){}ve.prototype=X.prototype;function Se(m,C,_){this.props=m,this.context=C,this.refs=F,this.updater=_||P}var Ne=Se.prototype=new ve;Ne.constructor=Se,U(Ne,X.prototype),Ne.isPureReactComponent=!0;var Be=Array.isArray;function Re(){}var J={H:null,A:null,T:null,S:null},ke=Object.prototype.hasOwnProperty;function Ke(m,C,_){var G=_.ref;return{$$typeof:c,type:m,key:C,ref:G!==void 0?G:null,props:_}}function dt(m,C){return Ke(m.type,C,m.props)}function ht(m){return typeof m=="object"&&m!==null&&m.$$typeof===c}function ye(m){var C={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(_){return C[_]})}var Tt=/\/+/g;function Q(m,C){return typeof m=="object"&&m!==null&&m.key!=null?ye(""+m.key):C.toString(36)}function Ce(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Re,Re):(m.status="pending",m.then(function(C){m.status==="pending"&&(m.status="fulfilled",m.value=C)},function(C){m.status==="pending"&&(m.status="rejected",m.reason=C)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function T(m,C,_,G,I){var ee=typeof m;(ee==="undefined"||ee==="boolean")&&(m=null);var oe=!1;if(m===null)oe=!0;else switch(ee){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(m.$$typeof){case c:case r:oe=!0;break;case H:return oe=m._init,T(oe(m._payload),C,_,G,I)}}if(oe)return I=I(m),oe=G===""?"."+Q(m,0):G,Be(I)?(_="",oe!=null&&(_=oe.replace(Tt,"$&/")+"/"),T(I,C,_,"",function(Mt){return Mt})):I!=null&&(ht(I)&&(I=dt(I,_+(I.key==null||m&&m.key===I.key?"":(""+I.key).replace(Tt,"$&/")+"/")+oe)),C.push(I)),1;oe=0;var De=G===""?".":G+":";if(Be(m))for(var ge=0;ge<m.length;ge++)G=m[ge],ee=De+Q(G,ge),oe+=T(G,C,_,ee,I);else if(ge=k(m),typeof ge=="function")for(m=ge.call(m),ge=0;!(G=m.next()).done;)G=G.value,ee=De+Q(G,ge++),oe+=T(G,C,_,ee,I);else if(ee==="object"){if(typeof m.then=="function")return T(Ce(m),C,_,G,I);throw C=String(m),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return oe}function q(m,C,_){if(m==null)return m;var G=[],I=0;return T(m,G,"","",function(ee){return C.call(_,ee,I++)}),G}function V(m){if(m._status===-1){var C=m._result;C=C(),C.then(function(_){(m._status===0||m._status===-1)&&(m._status=1,m._result=_)},function(_){(m._status===0||m._status===-1)&&(m._status=2,m._result=_)}),m._status===-1&&(m._status=0,m._result=C)}if(m._status===1)return m._result.default;throw m._result}var ce=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},le={map:q,forEach:function(m,C,_){q(m,function(){C.apply(this,arguments)},_)},count:function(m){var C=0;return q(m,function(){C++}),C},toArray:function(m){return q(m,function(C){return C})||[]},only:function(m){if(!ht(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return te.Activity=b,te.Children=le,te.Component=X,te.Fragment=h,te.Profiler=v,te.PureComponent=Se,te.StrictMode=s,te.Suspense=M,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,te.__COMPILER_RUNTIME={__proto__:null,c:function(m){return J.H.useMemoCache(m)}},te.cache=function(m){return function(){return m.apply(null,arguments)}},te.cacheSignal=function(){return null},te.cloneElement=function(m,C,_){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var G=U({},m.props),I=m.key;if(C!=null)for(ee in C.key!==void 0&&(I=""+C.key),C)!ke.call(C,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&C.ref===void 0||(G[ee]=C[ee]);var ee=arguments.length-2;if(ee===1)G.children=_;else if(1<ee){for(var oe=Array(ee),De=0;De<ee;De++)oe[De]=arguments[De+2];G.children=oe}return Ke(m.type,I,G)},te.createContext=function(m){return m={$$typeof:j,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:A,_context:m},m},te.createElement=function(m,C,_){var G,I={},ee=null;if(C!=null)for(G in C.key!==void 0&&(ee=""+C.key),C)ke.call(C,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(I[G]=C[G]);var oe=arguments.length-2;if(oe===1)I.children=_;else if(1<oe){for(var De=Array(oe),ge=0;ge<oe;ge++)De[ge]=arguments[ge+2];I.children=De}if(m&&m.defaultProps)for(G in oe=m.defaultProps,oe)I[G]===void 0&&(I[G]=oe[G]);return Ke(m,ee,I)},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:L,render:m}},te.isValidElement=ht,te.lazy=function(m){return{$$typeof:H,_payload:{_status:-1,_result:m},_init:V}},te.memo=function(m,C){return{$$typeof:d,type:m,compare:C===void 0?null:C}},te.startTransition=function(m){var C=J.T,_={};J.T=_;try{var G=m(),I=J.S;I!==null&&I(_,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Re,ce)}catch(ee){ce(ee)}finally{C!==null&&_.types!==null&&(C.types=_.types),J.T=C}},te.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},te.use=function(m){return J.H.use(m)},te.useActionState=function(m,C,_){return J.H.useActionState(m,C,_)},te.useCallback=function(m,C){return J.H.useCallback(m,C)},te.useContext=function(m){return J.H.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m,C){return J.H.useDeferredValue(m,C)},te.useEffect=function(m,C){return J.H.useEffect(m,C)},te.useEffectEvent=function(m){return J.H.useEffectEvent(m)},te.useId=function(){return J.H.useId()},te.useImperativeHandle=function(m,C,_){return J.H.useImperativeHandle(m,C,_)},te.useInsertionEffect=function(m,C){return J.H.useInsertionEffect(m,C)},te.useLayoutEffect=function(m,C){return J.H.useLayoutEffect(m,C)},te.useMemo=function(m,C){return J.H.useMemo(m,C)},te.useOptimistic=function(m,C){return J.H.useOptimistic(m,C)},te.useReducer=function(m,C,_){return J.H.useReducer(m,C,_)},te.useRef=function(m){return J.H.useRef(m)},te.useState=function(m){return J.H.useState(m)},te.useSyncExternalStore=function(m,C,_){return J.H.useSyncExternalStore(m,C,_)},te.useTransition=function(){return J.H.useTransition()},te.version="19.2.8",te}var tp;function $s(){return tp||(tp=1,Ps.exports=_g()),Ps.exports}var K=$s(),Qs={exports:{}},Wn={},ws={exports:{}},Ys={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Rg(){return ap||(ap=1,(function(c){function r(T,q){var V=T.length;T.push(q);e:for(;0<V;){var ce=V-1>>>1,le=T[ce];if(0<v(le,q))T[ce]=q,T[V]=le,V=ce;else break e}}function h(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var q=T[0],V=T.pop();if(V!==q){T[0]=V;e:for(var ce=0,le=T.length,m=le>>>1;ce<m;){var C=2*(ce+1)-1,_=T[C],G=C+1,I=T[G];if(0>v(_,V))G<le&&0>v(I,_)?(T[ce]=I,T[G]=V,ce=G):(T[ce]=_,T[C]=V,ce=C);else if(G<le&&0>v(I,V))T[ce]=I,T[G]=V,ce=G;else break e}}return q}function v(T,q){var V=T.sortIndex-q.sortIndex;return V!==0?V:T.id-q.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;c.unstable_now=function(){return A.now()}}else{var j=Date,L=j.now();c.unstable_now=function(){return j.now()-L}}var M=[],d=[],H=1,b=null,R=3,k=!1,P=!1,U=!1,F=!1,X=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,Se=typeof setImmediate<"u"?setImmediate:null;function Ne(T){for(var q=h(d);q!==null;){if(q.callback===null)s(d);else if(q.startTime<=T)s(d),q.sortIndex=q.expirationTime,r(M,q);else break;q=h(d)}}function Be(T){if(U=!1,Ne(T),!P)if(h(M)!==null)P=!0,Re||(Re=!0,ye());else{var q=h(d);q!==null&&Ce(Be,q.startTime-T)}}var Re=!1,J=-1,ke=5,Ke=-1;function dt(){return F?!0:!(c.unstable_now()-Ke<ke)}function ht(){if(F=!1,Re){var T=c.unstable_now();Ke=T;var q=!0;try{e:{P=!1,U&&(U=!1,ve(J),J=-1),k=!0;var V=R;try{t:{for(Ne(T),b=h(M);b!==null&&!(b.expirationTime>T&&dt());){var ce=b.callback;if(typeof ce=="function"){b.callback=null,R=b.priorityLevel;var le=ce(b.expirationTime<=T);if(T=c.unstable_now(),typeof le=="function"){b.callback=le,Ne(T),q=!0;break t}b===h(M)&&s(M),Ne(T)}else s(M);b=h(M)}if(b!==null)q=!0;else{var m=h(d);m!==null&&Ce(Be,m.startTime-T),q=!1}}break e}finally{b=null,R=V,k=!1}q=void 0}}finally{q?ye():Re=!1}}}var ye;if(typeof Se=="function")ye=function(){Se(ht)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Q=Tt.port2;Tt.port1.onmessage=ht,ye=function(){Q.postMessage(null)}}else ye=function(){X(ht,0)};function Ce(T,q){J=X(function(){T(c.unstable_now())},q)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(T){T.callback=null},c.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<T?Math.floor(1e3/T):5},c.unstable_getCurrentPriorityLevel=function(){return R},c.unstable_next=function(T){switch(R){case 1:case 2:case 3:var q=3;break;default:q=R}var V=R;R=q;try{return T()}finally{R=V}},c.unstable_requestPaint=function(){F=!0},c.unstable_runWithPriority=function(T,q){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var V=R;R=T;try{return q()}finally{R=V}},c.unstable_scheduleCallback=function(T,q,V){var ce=c.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ce+V:ce):V=ce,T){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=V+le,T={id:H++,callback:q,priorityLevel:T,startTime:V,expirationTime:le,sortIndex:-1},V>ce?(T.sortIndex=V,r(d,T),h(M)===null&&T===h(d)&&(U?(ve(J),J=-1):U=!0,Ce(Be,V-ce))):(T.sortIndex=le,r(M,T),P||k||(P=!0,Re||(Re=!0,ye()))),T},c.unstable_shouldYield=dt,c.unstable_wrapCallback=function(T){var q=R;return function(){var V=R;R=q;try{return T.apply(this,arguments)}finally{R=V}}}})(Ys)),Ys}var lp;function Ug(){return lp||(lp=1,ws.exports=Rg()),ws.exports}var Vs={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Gg(){if(np)return mt;np=1;var c=$s();function r(M){var d="https://react.dev/errors/"+M;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var H=2;H<arguments.length;H++)d+="&args[]="+encodeURIComponent(arguments[H])}return"Minified React error #"+M+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var s={d:{f:h,r:function(){throw Error(r(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},v=Symbol.for("react.portal");function A(M,d,H){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:b==null?null:""+b,children:M,containerInfo:d,implementation:H}}var j=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function L(M,d){if(M==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mt.createPortal=function(M,d){var H=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(r(299));return A(M,d,null,H)},mt.flushSync=function(M){var d=j.T,H=s.p;try{if(j.T=null,s.p=2,M)return M()}finally{j.T=d,s.p=H,s.d.f()}},mt.preconnect=function(M,d){typeof M=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(M,d))},mt.prefetchDNS=function(M){typeof M=="string"&&s.d.D(M)},mt.preinit=function(M,d){if(typeof M=="string"&&d&&typeof d.as=="string"){var H=d.as,b=L(H,d.crossOrigin),R=typeof d.integrity=="string"?d.integrity:void 0,k=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;H==="style"?s.d.S(M,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:b,integrity:R,fetchPriority:k}):H==="script"&&s.d.X(M,{crossOrigin:b,integrity:R,fetchPriority:k,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},mt.preinitModule=function(M,d){if(typeof M=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var H=L(d.as,d.crossOrigin);s.d.M(M,{crossOrigin:H,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(M)},mt.preload=function(M,d){if(typeof M=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var H=d.as,b=L(H,d.crossOrigin);s.d.L(M,H,{crossOrigin:b,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},mt.preloadModule=function(M,d){if(typeof M=="string")if(d){var H=L(d.as,d.crossOrigin);s.d.m(M,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:H,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(M)},mt.requestFormReset=function(M){s.d.r(M)},mt.unstable_batchedUpdates=function(M,d){return M(d)},mt.useFormState=function(M,d,H){return j.H.useFormState(M,d,H)},mt.useFormStatus=function(){return j.H.useHostTransitionStatus()},mt.version="19.2.8",mt}var ip;function kg(){if(ip)return Vs.exports;ip=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),Vs.exports=Gg(),Vs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function Pg(){if(up)return Wn;up=1;var c=Ug(),r=$s(),h=kg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function j(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(A(e)!==e)throw Error(s(188))}function d(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return M(n),e;if(i===l)return M(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,o=n.child;o;){if(o===a){u=!0,a=n,l=i;break}if(o===l){u=!0,l=n,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,l=n;break}if(o===l){u=!0,l=i,a=n;break}o=o.sibling}if(!u)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function H(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=H(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,R=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ve=Symbol.for("react.consumer"),Se=Symbol.for("react.context"),Ne=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),Ke=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function ye(e){return e===null||typeof e!="object"?null:(e=ht&&e[ht]||e["@@iterator"],typeof e=="function"?e:null)}var Tt=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case X:return"Profiler";case F:return"StrictMode";case Be:return"Suspense";case Re:return"SuspenseList";case Ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case Se:return e.displayName||"Context";case ve:return(e._context.displayName||"Context")+".Consumer";case Ne:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:Q(e.type)||"Memo";case ke:t=e._payload,e=e._init;try{return Q(e(t))}catch{}}return null}var Ce=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function m(e){return{current:e}}function C(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function _(e,t){le++,ce[le]=e.current,e.current=t}var G=m(null),I=m(null),ee=m(null),oe=m(null);function De(e,t){switch(_(ee,t),_(I,e),_(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Sd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Sd(t),e=Ad(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(G),_(G,e)}function ge(){C(G),C(I),C(ee)}function Mt(e){e.memoizedState!==null&&_(oe,e);var t=G.current,a=Ad(t,e.type);t!==a&&(_(I,e),_(G,a))}function zt(e){I.current===e&&(C(G),C(I)),oe.current===e&&(C(oe),Kn._currentValue=V)}var Qe,Ka;function Vt(e){if(Qe===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Ka=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+e+Ka}var gl=!1;function hl(e,t){if(!e||gl)return"";gl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(z){var E=z}Reflect.construct(e,[],B)}else{try{B.call()}catch(z){E=z}e.call(B.prototype)}}else{try{throw Error()}catch(z){E=z}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(z){if(z&&E&&typeof z.stack=="string")return[z.stack,E.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var p=u.split(`
`),S=o.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<S.length&&!S[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===S.length)for(l=p.length-1,n=S.length-1;1<=l&&0<=n&&p[l]!==S[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==S[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==S[n]){var O=`
`+p[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=n);break}}}finally{gl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Vt(a):""}function Tu(e,t){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return e.child!==t&&t!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return hl(e.type,!1);case 11:return hl(e.type.render,!1);case 1:return hl(e.type,!0);case 31:return Vt("Activity");default:return""}}function ai(e){try{var t="",a=null;do t+=Tu(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ot=Object.prototype.hasOwnProperty,ta=c.unstable_scheduleCallback,ln=c.unstable_cancelCallback,Mu=c.unstable_shouldYield,zu=c.unstable_requestPaint,lt=c.unstable_now,nn=c.unstable_getCurrentPriorityLevel,li=c.unstable_ImmediatePriority,ni=c.unstable_UserBlockingPriority,vl=c.unstable_NormalPriority,D=c.unstable_LowPriority,ie=c.unstable_IdlePriority,se=c.log,he=c.unstable_setDisableYieldValue,Pe=null,je=null;function nt(e){if(typeof se=="function"&&he(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Pe,e)}catch{}}var ue=Math.clz32?Math.clz32:$e,pt=Math.log,it=Math.LN2;function $e(e){return e>>>=0,e===0?32:31-(pt(e)/it|0)|0}var et=256,Xa=262144,ii=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=Ja(l):(u&=o,u!==0?n=Ja(u):a||(a=o&~e,a!==0&&(n=Ja(a))))):(o=l&~i,o!==0?n=Ja(o):u!==0?n=Ja(u):a||(a=l&~e,a!==0&&(n=Ja(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function un(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(){var e=ii;return ii<<=1,(ii&62914560)===0&&(ii=4194304),e}function Ou(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function on(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ap(e,t,a,l,n,i){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,p=e.expirationTimes,S=e.hiddenUpdates;for(a=u&~a;0<a;){var O=31-ue(a),B=1<<O;o[O]=0,p[O]=-1;var E=S[O];if(E!==null)for(S[O]=null,O=0;O<E.length;O++){var z=E[O];z!==null&&(z.lane&=-536870913)}a&=~B}l!==0&&ac(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function ac(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ue(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function lc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ue(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function nc(e,t){var a=t&-t;return a=(a&42)!==0?1:Cu(a),(a&(e.suspendedLanes|t))!==0?0:a}function Cu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ic(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Vd(e.type))}function uc(e,t){var a=q.p;try{return q.p=e,t()}finally{q.p=a}}var Aa=Math.random().toString(36).slice(2),ut="__reactFiber$"+Aa,vt="__reactProps$"+Aa,yl="__reactContainer$"+Aa,Nu="__reactEvents$"+Aa,Ep="__reactListeners$"+Aa,Tp="__reactHandles$"+Aa,oc="__reactResources$"+Aa,sn="__reactMarker$"+Aa;function ju(e){delete e[ut],delete e[vt],delete e[Nu],delete e[Ep],delete e[Tp]}function bl(e){var t=e[ut];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yl]||a[ut]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Hd(e);e!==null;){if(a=e[ut])return a;e=Hd(e)}return t}e=a,a=e.parentNode}return null}function xl(e){if(e=e[ut]||e[yl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Sl(e){var t=e[oc];return t||(t=e[oc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[sn]=!0}var sc=new Set,cc={};function Ia(e,t){Al(e,t),Al(e+"Capture",t)}function Al(e,t){for(cc[e]=t,e=0;e<t.length;e++)sc.add(t[e])}var Mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rc={},fc={};function zp(e){return Ot.call(fc,e)?!0:Ot.call(rc,e)?!1:Mp.test(e)?fc[e]=!0:(rc[e]=!0,!1)}function oi(e,t,a){if(zp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function si(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function aa(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function qt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Op(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bu(e){if(!e._valueTracker){var t=dc(e)?"checked":"value";e._valueTracker=Op(e,t,""+e[t])}}function pc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=dc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cp=/[\n"\\]/g;function _t(e){return e.replace(Cp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Du(e,t,a,l,n,i,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qt(t)):e.value!==""+qt(t)&&(e.value=""+qt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?Lu(e,u,qt(t)):a!=null?Lu(e,u,qt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qt(o):e.removeAttribute("name")}function mc(e,t,a,l,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Bu(e);return}a=a!=null?""+qt(a):"",t=t!=null?""+qt(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Bu(e)}function Lu(e,t,a){t==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function El(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+qt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function gc(e,t,a){if(t!=null&&(t=""+qt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+qt(a):""}function hc(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ce(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=qt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Bu(e)}function Tl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Hp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Hp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yc(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&vc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&vc(e,i,t[i])}function qu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ri(e){return jp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var _u=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,zl=null;function bc(e){var t=xl(e);if(t&&(e=t.stateNode)){var a=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Du(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[vt]||null;if(!n)throw Error(s(90));Du(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&pc(l)}break e;case"textarea":gc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&El(e,!!a.multiple,t,!1)}}}var Uu=!1;function xc(e,t,a){if(Uu)return e(t,a);Uu=!0;try{var l=e(t);return l}finally{if(Uu=!1,(Ml!==null||zl!==null)&&(Fi(),Ml&&(t=Ml,e=zl,zl=Ml=null,bc(t),e)))for(t=0;t<e.length;t++)bc(e[t])}}function rn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(na)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{Gu=!1}var Ea=null,ku=null,fi=null;function Sc(){if(fi)return fi;var e,t=ku,a=t.length,l,n="value"in Ea?Ea.value:Ea.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var u=a-e;for(l=1;l<=u&&t[a-l]===n[i-l];l++);return fi=n.slice(e,1<l?1-l:void 0)}function di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Ac(){return!1}function yt(e){function t(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pi:Ac,this.isPropagationStopped=Ac,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=yt(Fa),dn=b({},Fa,{view:0,detail:0}),Bp=yt(dn),Pu,Qu,pn,gi=b({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(Pu=e.screenX-pn.screenX,Qu=e.screenY-pn.screenY):Qu=Pu=0,pn=e),Pu)},movementY:function(e){return"movementY"in e?e.movementY:Qu}}),Ec=yt(gi),Dp=b({},gi,{dataTransfer:0}),Lp=yt(Dp),qp=b({},dn,{relatedTarget:0}),wu=yt(qp),_p=b({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=yt(_p),Up=b({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gp=yt(Up),kp=b({},Fa,{data:0}),Tc=yt(kp),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wp[e])?!!t[e]:!1}function Yu(){return Yp}var Vp=b({},dn,{key:function(e){if(e.key){var t=Pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=yt(Vp),Kp=b({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=yt(Kp),Xp=b({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),Jp=yt(Xp),Ip=b({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fp=yt(Ip),Wp=b({},gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$p=yt(Wp),em=b({},Fa,{newState:0,oldState:0}),tm=yt(em),am=[9,13,27,32],Vu=na&&"CompositionEvent"in window,mn=null;na&&"documentMode"in document&&(mn=document.documentMode);var lm=na&&"TextEvent"in window&&!mn,zc=na&&(!Vu||mn&&8<mn&&11>=mn),Oc=" ",Cc=!1;function Hc(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ol=!1;function nm(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Cc=!0,Oc);case"textInput":return e=t.data,e===Oc&&Cc?null:e;default:return null}}function im(e,t){if(Ol)return e==="compositionend"||!Vu&&Hc(e,t)?(e=Sc(),fi=ku=Ea=null,Ol=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var um={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!um[e.type]:t==="textarea"}function Bc(e,t,a,l){Ml?zl?zl.push(l):zl=[l]:Ml=l,t=nu(t,"onChange"),0<t.length&&(a=new mi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var gn=null,hn=null;function om(e){gd(e,0)}function hi(e){var t=cn(e);if(pc(t))return e}function Dc(e,t){if(e==="change")return t}var Lc=!1;if(na){var Zu;if(na){var Ku="oninput"in document;if(!Ku){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),Ku=typeof qc.oninput=="function"}Zu=Ku}else Zu=!1;Lc=Zu&&(!document.documentMode||9<document.documentMode)}function _c(){gn&&(gn.detachEvent("onpropertychange",Rc),hn=gn=null)}function Rc(e){if(e.propertyName==="value"&&hi(hn)){var t=[];Bc(t,hn,e,Ru(e)),xc(om,t)}}function sm(e,t,a){e==="focusin"?(_c(),gn=t,hn=a,gn.attachEvent("onpropertychange",Rc)):e==="focusout"&&_c()}function cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi(hn)}function rm(e,t){if(e==="click")return hi(t)}function fm(e,t){if(e==="input"||e==="change")return hi(t)}function dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:dm;function vn(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ot.call(t,n)||!Ct(e[n],t[n]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gc(e,t){var a=Uc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uc(a)}}function kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ci(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ci(e.document)}return t}function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pm=na&&"documentMode"in document&&11>=document.documentMode,Cl=null,Ju=null,yn=null,Iu=!1;function Qc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||Cl==null||Cl!==ci(l)||(l=Cl,"selectionStart"in l&&Xu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yn&&vn(yn,l)||(yn=l,l=nu(Ju,"onSelect"),0<l.length&&(t=new mi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Cl)))}function Wa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Hl={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionrun:Wa("Transition","TransitionRun"),transitionstart:Wa("Transition","TransitionStart"),transitioncancel:Wa("Transition","TransitionCancel"),transitionend:Wa("Transition","TransitionEnd")},Fu={},wc={};na&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete Hl.animationend.animation,delete Hl.animationiteration.animation,delete Hl.animationstart.animation),"TransitionEvent"in window||delete Hl.transitionend.transition);function $a(e){if(Fu[e])return Fu[e];if(!Hl[e])return e;var t=Hl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in wc)return Fu[e]=t[a];return e}var Yc=$a("animationend"),Vc=$a("animationiteration"),Zc=$a("animationstart"),mm=$a("transitionrun"),gm=$a("transitionstart"),hm=$a("transitioncancel"),Kc=$a("transitionend"),Xc=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function Zt(e,t){Xc.set(e,t),Ia(t,[e])}var vi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],Nl=0,$u=0;function yi(){for(var e=Nl,t=$u=Nl=0;t<e;){var a=Rt[t];Rt[t++]=null;var l=Rt[t];Rt[t++]=null;var n=Rt[t];Rt[t++]=null;var i=Rt[t];if(Rt[t++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&Jc(a,n,i)}}function bi(e,t,a,l){Rt[Nl++]=e,Rt[Nl++]=t,Rt[Nl++]=a,Rt[Nl++]=l,$u|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function eo(e,t,a,l){return bi(e,t,a,l),xi(e)}function el(e,t){return bi(e,null,null,t),xi(e)}function Jc(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-ue(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function xi(e){if(50<kn)throw kn=0,rs=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jl={};function vm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,a,l){return new vm(e,t,a,l)}function to(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,t){var a=e.alternate;return a===null?(a=Ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ic(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,a,l,n,i){var u=0;if(l=e,typeof e=="function")to(e)&&(u=1);else if(typeof e=="string")u=Ag(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ke:return e=Ht(31,a,t,n),e.elementType=Ke,e.lanes=i,e;case U:return tl(a.children,n,i,t);case F:u=8,n|=24;break;case X:return e=Ht(12,a,t,n|2),e.elementType=X,e.lanes=i,e;case Be:return e=Ht(13,a,t,n),e.elementType=Be,e.lanes=i,e;case Re:return e=Ht(19,a,t,n),e.elementType=Re,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:u=10;break e;case ve:u=9;break e;case Ne:u=11;break e;case J:u=14;break e;case ke:u=16,l=null;break e}u=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=Ht(u,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function tl(e,t,a,l){return e=Ht(7,e,l,t),e.lanes=a,e}function ao(e,t,a){return e=Ht(6,e,null,t),e.lanes=a,e}function Fc(e){var t=Ht(18,null,null,0);return t.stateNode=e,t}function lo(e,t,a){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wc=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Wc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ai(t)},Wc.set(e,t),t)}return{value:e,source:t,stack:ai(t)}}var Bl=[],Dl=0,Ai=null,bn=0,Gt=[],kt=0,Ta=null,Jt=1,It="";function ua(e,t){Bl[Dl++]=bn,Bl[Dl++]=Ai,Ai=e,bn=t}function $c(e,t,a){Gt[kt++]=Jt,Gt[kt++]=It,Gt[kt++]=Ta,Ta=e;var l=Jt;e=It;var n=32-ue(l)-1;l&=~(1<<n),a+=1;var i=32-ue(t)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,Jt=1<<32-ue(t)+n|a<<n|l,It=i+e}else Jt=1<<i|a<<n|l,It=e}function no(e){e.return!==null&&(ua(e,1),$c(e,1,0))}function io(e){for(;e===Ai;)Ai=Bl[--Dl],Bl[Dl]=null,bn=Bl[--Dl],Bl[Dl]=null;for(;e===Ta;)Ta=Gt[--kt],Gt[kt]=null,It=Gt[--kt],Gt[kt]=null,Jt=Gt[--kt],Gt[kt]=null}function er(e,t){Gt[kt++]=Jt,Gt[kt++]=It,Gt[kt++]=Ta,Jt=t.id,It=t.overflow,Ta=e}var ot=null,Le=null,me=!1,Ma=null,Pt=!1,uo=Error(s(519));function za(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xn(Ut(t,e)),uo}function tr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ut]=e,t[vt]=l,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<Qn.length;a++)fe(Qn[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),mc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),hc(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||bd(t.textContent,a)?(l.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),l.onScroll!=null&&fe("scroll",t),l.onScrollEnd!=null&&fe("scrollend",t),l.onClick!=null&&(t.onclick=la),t=!0):t=!1,t||za(e,!0)}function ar(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Pt=!1;return;case 27:case 3:Pt=!0;return;default:ot=ot.return}}function Ll(e){if(e!==ot)return!1;if(!me)return ar(e),me=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ms(e.type,e.memoizedProps)),a=!a),a&&Le&&za(e),ar(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Le=Cd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Le=Cd(e)}else t===27?(t=Le,ka(e.type)?(e=Ns,Ns=null,Le=e):Le=t):Le=ot?wt(e.stateNode.nextSibling):null;return!0}function al(){Le=ot=null,me=!1}function oo(){var e=Ma;return e!==null&&(At===null?At=e:At.push.apply(At,e),Ma=null),e}function xn(e){Ma===null?Ma=[e]:Ma.push(e)}var so=m(null),ll=null,oa=null;function Oa(e,t,a){_(so,t._currentValue),t._currentValue=a}function sa(e){e._currentValue=so.current,C(so)}function co(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function ro(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=n;for(var p=0;p<t.length;p++)if(o.context===t[p]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),co(i.return,a,e),l||(u=null);break e}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),co(u,a,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function ql(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var o=n.type;Ct(n.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(n===oe.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Kn):e=[Kn])}n=n.return}e!==null&&ro(t,e,a,l),t.flags|=262144}function Ei(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nl(e){ll=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return lr(ll,e)}function Ti(e,t){return ll===null&&nl(e),lr(e,t)}function lr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(s(308));oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else oa=oa.next=t;return a}var ym=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bm=c.unstable_scheduleCallback,xm=c.unstable_NormalPriority,Xe={$$typeof:Se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fo(){return{controller:new ym,data:new Map,refCount:0}}function Sn(e){e.refCount--,e.refCount===0&&bm(xm,function(){e.controller.abort()})}var An=null,po=0,_l=0,Rl=null;function Sm(e,t){if(An===null){var a=An=[];po=0,_l=hs(),Rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return po++,t.then(nr,nr),t}function nr(){if(--po===0&&An!==null){Rl!==null&&(Rl.status="fulfilled");var e=An;An=null,_l=0,Rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Am(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var ir=T.S;T.S=function(e,t){wf=lt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sm(e,t),ir!==null&&ir(e,t)};var il=m(null);function mo(){var e=il.current;return e!==null?e:He.pooledCache}function Mi(e,t){t===null?_(il,il.current):_(il,t.pool)}function ur(){var e=mo();return e===null?null:{parent:Xe._currentValue,pool:e}}var Ul=Error(s(460)),go=Error(s(474)),zi=Error(s(542)),Oi={then:function(){}};function or(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(la,la),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rr(e),e;default:if(typeof t.status=="string")t.then(la,la);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,rr(e),e}throw ol=t,Ul}}function ul(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ol=a,Ul):a}}var ol=null;function cr(){if(ol===null)throw Error(s(459));var e=ol;return ol=null,e}function rr(e){if(e===Ul||e===zi)throw Error(s(483))}var Gl=null,En=0;function Ci(e){var t=En;return En+=1,Gl===null&&(Gl=[]),sr(Gl,e,t)}function Tn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Hi(e,t){throw t.$$typeof===R?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fr(e){function t(y,g){if(e){var x=y.deletions;x===null?(y.deletions=[g],y.flags|=16):x.push(g)}}function a(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function l(y){for(var g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function n(y,g){return y=ia(y,g),y.index=0,y.sibling=null,y}function i(y,g,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<g?(y.flags|=67108866,g):x):(y.flags|=67108866,g)):(y.flags|=1048576,g)}function u(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function o(y,g,x,N){return g===null||g.tag!==6?(g=ao(x,y.mode,N),g.return=y,g):(g=n(g,x),g.return=y,g)}function p(y,g,x,N){var Z=x.type;return Z===U?O(y,g,x.props.children,N,x.key):g!==null&&(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===ke&&ul(Z)===g.type)?(g=n(g,x.props),Tn(g,x),g.return=y,g):(g=Si(x.type,x.key,x.props,null,y.mode,N),Tn(g,x),g.return=y,g)}function S(y,g,x,N){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=lo(x,y.mode,N),g.return=y,g):(g=n(g,x.children||[]),g.return=y,g)}function O(y,g,x,N,Z){return g===null||g.tag!==7?(g=tl(x,y.mode,N,Z),g.return=y,g):(g=n(g,x),g.return=y,g)}function B(y,g,x){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=ao(""+g,y.mode,x),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case k:return x=Si(g.type,g.key,g.props,null,y.mode,x),Tn(x,g),x.return=y,x;case P:return g=lo(g,y.mode,x),g.return=y,g;case ke:return g=ul(g),B(y,g,x)}if(Ce(g)||ye(g))return g=tl(g,y.mode,x,null),g.return=y,g;if(typeof g.then=="function")return B(y,Ci(g),x);if(g.$$typeof===Se)return B(y,Ti(y,g),x);Hi(y,g)}return null}function E(y,g,x,N){var Z=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return Z!==null?null:o(y,g,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case k:return x.key===Z?p(y,g,x,N):null;case P:return x.key===Z?S(y,g,x,N):null;case ke:return x=ul(x),E(y,g,x,N)}if(Ce(x)||ye(x))return Z!==null?null:O(y,g,x,N,null);if(typeof x.then=="function")return E(y,g,Ci(x),N);if(x.$$typeof===Se)return E(y,g,Ti(y,x),N);Hi(y,x)}return null}function z(y,g,x,N,Z){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return y=y.get(x)||null,o(g,y,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case k:return y=y.get(N.key===null?x:N.key)||null,p(g,y,N,Z);case P:return y=y.get(N.key===null?x:N.key)||null,S(g,y,N,Z);case ke:return N=ul(N),z(y,g,x,N,Z)}if(Ce(N)||ye(N))return y=y.get(x)||null,O(g,y,N,Z,null);if(typeof N.then=="function")return z(y,g,x,Ci(N),Z);if(N.$$typeof===Se)return z(y,g,x,Ti(g,N),Z);Hi(g,N)}return null}function w(y,g,x,N){for(var Z=null,be=null,Y=g,ne=g=0,pe=null;Y!==null&&ne<x.length;ne++){Y.index>ne?(pe=Y,Y=null):pe=Y.sibling;var xe=E(y,Y,x[ne],N);if(xe===null){Y===null&&(Y=pe);break}e&&Y&&xe.alternate===null&&t(y,Y),g=i(xe,g,ne),be===null?Z=xe:be.sibling=xe,be=xe,Y=pe}if(ne===x.length)return a(y,Y),me&&ua(y,ne),Z;if(Y===null){for(;ne<x.length;ne++)Y=B(y,x[ne],N),Y!==null&&(g=i(Y,g,ne),be===null?Z=Y:be.sibling=Y,be=Y);return me&&ua(y,ne),Z}for(Y=l(Y);ne<x.length;ne++)pe=z(Y,y,ne,x[ne],N),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?ne:pe.key),g=i(pe,g,ne),be===null?Z=pe:be.sibling=pe,be=pe);return e&&Y.forEach(function(Va){return t(y,Va)}),me&&ua(y,ne),Z}function W(y,g,x,N){if(x==null)throw Error(s(151));for(var Z=null,be=null,Y=g,ne=g=0,pe=null,xe=x.next();Y!==null&&!xe.done;ne++,xe=x.next()){Y.index>ne?(pe=Y,Y=null):pe=Y.sibling;var Va=E(y,Y,xe.value,N);if(Va===null){Y===null&&(Y=pe);break}e&&Y&&Va.alternate===null&&t(y,Y),g=i(Va,g,ne),be===null?Z=Va:be.sibling=Va,be=Va,Y=pe}if(xe.done)return a(y,Y),me&&ua(y,ne),Z;if(Y===null){for(;!xe.done;ne++,xe=x.next())xe=B(y,xe.value,N),xe!==null&&(g=i(xe,g,ne),be===null?Z=xe:be.sibling=xe,be=xe);return me&&ua(y,ne),Z}for(Y=l(Y);!xe.done;ne++,xe=x.next())xe=z(Y,y,ne,xe.value,N),xe!==null&&(e&&xe.alternate!==null&&Y.delete(xe.key===null?ne:xe.key),g=i(xe,g,ne),be===null?Z=xe:be.sibling=xe,be=xe);return e&&Y.forEach(function(Dg){return t(y,Dg)}),me&&ua(y,ne),Z}function Oe(y,g,x,N){if(typeof x=="object"&&x!==null&&x.type===U&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case k:e:{for(var Z=x.key;g!==null;){if(g.key===Z){if(Z=x.type,Z===U){if(g.tag===7){a(y,g.sibling),N=n(g,x.props.children),N.return=y,y=N;break e}}else if(g.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===ke&&ul(Z)===g.type){a(y,g.sibling),N=n(g,x.props),Tn(N,x),N.return=y,y=N;break e}a(y,g);break}else t(y,g);g=g.sibling}x.type===U?(N=tl(x.props.children,y.mode,N,x.key),N.return=y,y=N):(N=Si(x.type,x.key,x.props,null,y.mode,N),Tn(N,x),N.return=y,y=N)}return u(y);case P:e:{for(Z=x.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){a(y,g.sibling),N=n(g,x.children||[]),N.return=y,y=N;break e}else{a(y,g);break}else t(y,g);g=g.sibling}N=lo(x,y.mode,N),N.return=y,y=N}return u(y);case ke:return x=ul(x),Oe(y,g,x,N)}if(Ce(x))return w(y,g,x,N);if(ye(x)){if(Z=ye(x),typeof Z!="function")throw Error(s(150));return x=Z.call(x),W(y,g,x,N)}if(typeof x.then=="function")return Oe(y,g,Ci(x),N);if(x.$$typeof===Se)return Oe(y,g,Ti(y,x),N);Hi(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,g!==null&&g.tag===6?(a(y,g.sibling),N=n(g,x),N.return=y,y=N):(a(y,g),N=ao(x,y.mode,N),N.return=y,y=N),u(y)):a(y,g)}return function(y,g,x,N){try{En=0;var Z=Oe(y,g,x,N);return Gl=null,Z}catch(Y){if(Y===Ul||Y===zi)throw Y;var be=Ht(29,Y,null,y.mode);return be.lanes=N,be.return=y,be}finally{}}}var sl=fr(!0),dr=fr(!1),Ca=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ae&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=xi(e),Jc(e,null,a),t}return bi(e,l,t,a),xi(e)}function Mn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,lc(e,a)}}function yo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bo=!1;function zn(){if(bo){var e=Rl;if(e!==null)throw e}}function On(e,t,a,l){bo=!1;var n=e.updateQueue;Ca=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var p=o,S=p.next;p.next=null,u===null?i=S:u.next=S,u=p;var O=e.alternate;O!==null&&(O=O.updateQueue,o=O.lastBaseUpdate,o!==u&&(o===null?O.firstBaseUpdate=S:o.next=S,O.lastBaseUpdate=p))}if(i!==null){var B=n.baseState;u=0,O=S=p=null,o=i;do{var E=o.lane&-536870913,z=E!==o.lane;if(z?(de&E)===E:(l&E)===E){E!==0&&E===_l&&(bo=!0),O!==null&&(O=O.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var w=e,W=o;E=t;var Oe=a;switch(W.tag){case 1:if(w=W.payload,typeof w=="function"){B=w.call(Oe,B,E);break e}B=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=W.payload,E=typeof w=="function"?w.call(Oe,B,E):w,E==null)break e;B=b({},B,E);break e;case 2:Ca=!0}}E=o.callback,E!==null&&(e.flags|=64,z&&(e.flags|=8192),z=n.callbacks,z===null?n.callbacks=[E]:z.push(E))}else z={lane:E,tag:o.tag,payload:o.payload,callback:o.callback,next:null},O===null?(S=O=z,p=B):O=O.next=z,u|=E;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;z=o,o=z.next,z.next=null,n.lastBaseUpdate=z,n.shared.pending=null}}while(!0);O===null&&(p=B),n.baseState=p,n.firstBaseUpdate=S,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),qa|=u,e.lanes=u,e.memoizedState=B}}function pr(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function mr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pr(a[e],t)}var kl=m(null),Ni=m(0);function gr(e,t){e=va,_(Ni,e),_(kl,t),va=e|t.baseLanes}function xo(){_(Ni,va),_(kl,kl.current)}function So(){va=Ni.current,C(kl),C(Ni)}var Nt=m(null),Qt=null;function ja(e){var t=e.alternate;_(Ve,Ve.current&1),_(Nt,e),Qt===null&&(t===null||kl.current!==null||t.memoizedState!==null)&&(Qt=e)}function Ao(e){_(Ve,Ve.current),_(Nt,e),Qt===null&&(Qt=e)}function hr(e){e.tag===22?(_(Ve,Ve.current),_(Nt,e),Qt===null&&(Qt=e)):Ba()}function Ba(){_(Ve,Ve.current),_(Nt,Nt.current)}function jt(e){C(Nt),Qt===e&&(Qt=null),C(Ve)}var Ve=m(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cs(a)||Hs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=0,ae=null,Me=null,Je=null,Bi=!1,Pl=!1,cl=!1,Di=0,Cn=0,Ql=null,Em=0;function we(){throw Error(s(321))}function Eo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ct(e[a],t[a]))return!1;return!0}function To(e,t,a,l,n,i){return ca=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?$r:Go,cl=!1,i=a(l,n),cl=!1,Pl&&(i=yr(t,a,l,n)),vr(e),i}function vr(e){T.H=jn;var t=Me!==null&&Me.next!==null;if(ca=0,Je=Me=ae=null,Bi=!1,Cn=0,Ql=null,t)throw Error(s(300));e===null||Ie||(e=e.dependencies,e!==null&&Ei(e)&&(Ie=!0))}function yr(e,t,a,l){ae=e;var n=0;do{if(Pl&&(Ql=null),Cn=0,Pl=!1,25<=n)throw Error(s(301));if(n+=1,Je=Me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=ef,i=t(a,l)}while(Pl);return i}function Tm(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Hn(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(ae.flags|=1024),t}function Mo(){var e=Di!==0;return Di=0,e}function zo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Oo(e){if(Bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bi=!1}ca=0,Je=Me=ae=null,Pl=!1,Cn=Di=0,Ql=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ae.memoizedState=Je=e:Je=Je.next=e,Je}function Ze(){if(Me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Je===null?ae.memoizedState:Je.next;if(t!==null)Je=t,Me=e;else{if(e===null)throw ae.alternate===null?Error(s(467)):Error(s(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Je===null?ae.memoizedState=Je=e:Je=Je.next=e}return Je}function Li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hn(e){var t=Cn;return Cn+=1,Ql===null&&(Ql=[]),e=sr(Ql,e,t),t=ae,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?$r:Go),e}function qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hn(e);if(e.$$typeof===Se)return st(e)}throw Error(s(438,String(e)))}function Co(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Li(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=dt;return t.index++,a}function ra(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=Ze();return Ho(t,Me,e)}function Ho(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var o=u=null,p=null,S=t,O=!1;do{var B=S.lane&-536870913;if(B!==S.lane?(de&B)===B:(ca&B)===B){var E=S.revertLane;if(E===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),B===_l&&(O=!0);else if((ca&E)===E){S=S.next,E===_l&&(O=!0);continue}else B={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(o=p=B,u=i):p=p.next=B,ae.lanes|=E,qa|=E;B=S.action,cl&&a(i,B),i=S.hasEagerState?S.eagerState:a(i,B)}else E={lane:B,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},p===null?(o=p=E,u=i):p=p.next=E,ae.lanes|=B,qa|=B;S=S.next}while(S!==null&&S!==t);if(p===null?u=i:p.next=o,!Ct(i,e.memoizedState)&&(Ie=!0,O&&(a=Rl,a!==null)))throw a;e.memoizedState=i,e.baseState=u,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function No(e){var t=Ze(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Ct(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function br(e,t,a){var l=ae,n=Ze(),i=me;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var u=!Ct((Me||n).memoizedState,a);if(u&&(n.memoizedState=a,Ie=!0),n=n.queue,Do(Ar.bind(null,l,n,e),[e]),n.getSnapshot!==t||u||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,wl(9,{destroy:void 0},Sr.bind(null,l,n,a,t),null),He===null)throw Error(s(349));i||(ca&127)!==0||xr(l,t,a)}return a}function xr(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=Li(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Sr(e,t,a,l){t.value=a,t.getSnapshot=l,Er(t)&&Tr(e)}function Ar(e,t,a){return a(function(){Er(t)&&Tr(e)})}function Er(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ct(e,a)}catch{return!0}}function Tr(e){var t=el(e,2);t!==null&&Et(t,e,2)}function jo(e){var t=gt();if(typeof e=="function"){var a=e;if(e=a(),cl){nt(!0);try{a()}finally{nt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},t}function Mr(e,t,a,l){return e.baseState=a,Ho(e,Me,typeof l=="function"?l:ra)}function Mm(e,t,a,l,n){if(Gi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,zr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function zr(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var o=a(n,l),p=T.S;p!==null&&p(u,o),Or(e,t,o)}catch(S){Bo(e,t,S)}finally{i!==null&&u.types!==null&&(i.types=u.types),T.T=i}}else try{i=a(n,l),Or(e,t,i)}catch(S){Bo(e,t,S)}}function Or(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Cr(e,t,l)},function(l){return Bo(e,t,l)}):Cr(e,t,a)}function Cr(e,t,a){t.status="fulfilled",t.value=a,Hr(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,zr(e,a)))}function Bo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Hr(t),t=t.next;while(t!==l)}e.action=null}function Hr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Nr(e,t){return t}function jr(e,t){if(me){var a=He.formState;if(a!==null){e:{var l=ae;if(me){if(Le){t:{for(var n=Le,i=Pt;n.nodeType!==8;){if(!i){n=null;break t}if(n=wt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Le=wt(n.nextSibling),l=n.data==="F!";break e}}za(l)}l=!1}l&&(t=a[0])}}return a=gt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:t},a.queue=l,a=Ir.bind(null,ae,l),l.dispatch=a,l=jo(!1),i=Uo.bind(null,ae,!1,l.queue),l=gt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Mm.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function Br(e){var t=Ze();return Dr(t,Me,e)}function Dr(e,t,a){if(t=Ho(e,t,Nr)[0],e=_i(ra)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Hn(t)}catch(u){throw u===Ul?zi:u}else l=t;t=Ze();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,wl(9,{destroy:void 0},zm.bind(null,n,a),null)),[l,i,e]}function zm(e,t){e.action=t}function Lr(e){var t=Ze(),a=Me;if(a!==null)return Dr(t,a,e);Ze(),t=t.memoizedState,a=Ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function wl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Li(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function qr(){return Ze().memoizedState}function Ri(e,t,a,l){var n=gt();ae.flags|=e,n.memoizedState=wl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ui(e,t,a,l){var n=Ze();l=l===void 0?null:l;var i=n.memoizedState.inst;Me!==null&&l!==null&&Eo(l,Me.memoizedState.deps)?n.memoizedState=wl(t,i,a,l):(ae.flags|=e,n.memoizedState=wl(1|t,i,a,l))}function _r(e,t){Ri(8390656,8,e,t)}function Do(e,t){Ui(2048,8,e,t)}function Om(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Li(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Rr(e){var t=Ze().memoizedState;return Om({ref:t,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Ur(e,t){return Ui(4,2,e,t)}function Gr(e,t){return Ui(4,4,e,t)}function kr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pr(e,t,a){a=a!=null?a.concat([e]):null,Ui(4,4,kr.bind(null,t,e),a)}function Lo(){}function Qr(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Eo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function wr(e,t){var a=Ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Eo(t,l[1]))return l[0];if(l=e(),cl){nt(!0);try{e()}finally{nt(!1)}}return a.memoizedState=[l,t],l}function qo(e,t,a){return a===void 0||(ca&1073741824)!==0&&(de&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Vf(),ae.lanes|=e,qa|=e,a)}function Yr(e,t,a,l){return Ct(a,t)?a:kl.current!==null?(e=qo(e,a,l),Ct(e,t)||(Ie=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(de&261930)===0?(Ie=!0,e.memoizedState=a):(e=Vf(),ae.lanes|=e,qa|=e,t)}function Vr(e,t,a,l,n){var i=q.p;q.p=i!==0&&8>i?i:8;var u=T.T,o={};T.T=o,Uo(e,!1,t,a);try{var p=n(),S=T.S;if(S!==null&&S(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var O=Am(p,l);Nn(e,t,O,Lt(e))}else Nn(e,t,l,Lt(e))}catch(B){Nn(e,t,{then:function(){},status:"rejected",reason:B},Lt())}finally{q.p=i,u!==null&&o.types!==null&&(u.types=o.types),T.T=u}}function Cm(){}function _o(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=Zr(e).queue;Vr(e,n,t,V,a===null?Cm:function(){return Kr(e),a(l)})}function Zr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Kr(e){var t=Zr(e);t.next===null&&(t=e.alternate.memoizedState),Nn(e,t.next.queue,{},Lt())}function Ro(){return st(Kn)}function Xr(){return Ze().memoizedState}function Jr(){return Ze().memoizedState}function Hm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Lt();e=Ha(a);var l=Na(t,e,a);l!==null&&(Et(l,t,a),Mn(l,t,a)),t={cache:fo()},e.payload=t;return}t=t.return}}function Nm(e,t,a){var l=Lt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gi(e)?Fr(t,a):(a=eo(e,t,a,l),a!==null&&(Et(a,e,l),Wr(a,t,l)))}function Ir(e,t,a){var l=Lt();Nn(e,t,a,l)}function Nn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))Fr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,a);if(n.hasEagerState=!0,n.eagerState=o,Ct(o,u))return bi(e,t,n,0),He===null&&yi(),!1}catch{}finally{}if(a=eo(e,t,n,l),a!==null)return Et(a,e,l),Wr(a,t,l),!0}return!1}function Uo(e,t,a,l){if(l={lane:2,revertLane:hs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(t)throw Error(s(479))}else t=eo(e,a,l,2),t!==null&&Et(t,e,2)}function Gi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Fr(e,t){Pl=Bi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Wr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,lc(e,a)}}var jn={readContext:st,use:qi,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};jn.useEffectEvent=we;var $r={readContext:st,use:qi,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:_r,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ri(4194308,4,kr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){Ri(4,2,e,t)},useMemo:function(e,t){var a=gt();t=t===void 0?null:t;var l=e();if(cl){nt(!0);try{e()}finally{nt(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=gt();if(a!==void 0){var n=a(t);if(cl){nt(!0);try{a(t)}finally{nt(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Nm.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:function(e){e=jo(e);var t=e.queue,a=Ir.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Lo,useDeferredValue:function(e,t){var a=gt();return qo(a,e,t)},useTransition:function(){var e=jo(!1);return e=Vr.bind(null,ae,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=gt();if(me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),He===null)throw Error(s(349));(de&127)!==0||xr(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,_r(Ar.bind(null,l,i,e),[e]),l.flags|=2048,wl(9,{destroy:void 0},Sr.bind(null,l,i,a,t),null),a},useId:function(){var e=gt(),t=He.identifierPrefix;if(me){var a=It,l=Jt;a=(l&~(1<<32-ue(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Di++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Em++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ro,useFormState:jr,useActionState:jr,useOptimistic:function(e){var t=gt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Uo.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Co,useCacheRefresh:function(){return gt().memoizedState=Hm.bind(null,ae)},useEffectEvent:function(e){var t=gt(),a={impl:e};return t.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Go={readContext:st,use:qi,useCallback:Qr,useContext:st,useEffect:Do,useImperativeHandle:Pr,useInsertionEffect:Ur,useLayoutEffect:Gr,useMemo:wr,useReducer:_i,useRef:qr,useState:function(){return _i(ra)},useDebugValue:Lo,useDeferredValue:function(e,t){var a=Ze();return Yr(a,Me.memoizedState,e,t)},useTransition:function(){var e=_i(ra)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Hn(e),t]},useSyncExternalStore:br,useId:Xr,useHostTransitionStatus:Ro,useFormState:Br,useActionState:Br,useOptimistic:function(e,t){var a=Ze();return Mr(a,Me,e,t)},useMemoCache:Co,useCacheRefresh:Jr};Go.useEffectEvent=Rr;var ef={readContext:st,use:qi,useCallback:Qr,useContext:st,useEffect:Do,useImperativeHandle:Pr,useInsertionEffect:Ur,useLayoutEffect:Gr,useMemo:wr,useReducer:No,useRef:qr,useState:function(){return No(ra)},useDebugValue:Lo,useDeferredValue:function(e,t){var a=Ze();return Me===null?qo(a,e,t):Yr(a,Me.memoizedState,e,t)},useTransition:function(){var e=No(ra)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Hn(e),t]},useSyncExternalStore:br,useId:Xr,useHostTransitionStatus:Ro,useFormState:Lr,useActionState:Lr,useOptimistic:function(e,t){var a=Ze();return Me!==null?Mr(a,Me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Co,useCacheRefresh:Jr};ef.useEffectEvent=Rr;function ko(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Po={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=Lt(),n=Ha(l);n.payload=t,a!=null&&(n.callback=a),t=Na(e,n,l),t!==null&&(Et(t,e,l),Mn(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=Lt(),n=Ha(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=Na(e,n,l),t!==null&&(Et(t,e,l),Mn(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Lt(),l=Ha(a);l.tag=2,t!=null&&(l.callback=t),t=Na(e,l,a),t!==null&&(Et(t,e,a),Mn(t,e,a))}};function tf(e,t,a,l,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,u):t.prototype&&t.prototype.isPureReactComponent?!vn(a,l)||!vn(n,i):!0}function af(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function rl(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function lf(e){vi(e)}function nf(e){console.error(e)}function uf(e){vi(e)}function ki(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function of(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Qo(e,t,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){ki(e,t)},a}function sf(e){return e=Ha(e),e.tag=3,e}function cf(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){of(t,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){of(t,a,l),typeof n!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function jm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&ql(t,a,n,!0),a=Nt.current,a!==null){switch(a.tag){case 31:case 13:return Qt===null?Wi():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Oi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ps(e,l,n)),!1;case 22:return a.flags|=65536,l===Oi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ps(e,l,n)),!1}throw Error(s(435,a.tag))}return ps(e,l,n),Wi(),!1}if(me)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==uo&&(e=Error(s(422),{cause:l}),xn(Ut(e,a)))):(l!==uo&&(t=Error(s(423),{cause:l}),xn(Ut(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ut(l,a),n=Qo(e.stateNode,l,n),yo(e,n),Ye!==4&&(Ye=2)),!1;var i=Error(s(520),{cause:l});if(i=Ut(i,a),Gn===null?Gn=[i]:Gn.push(i),Ye!==4&&(Ye=2),t===null)return!0;l=Ut(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Qo(a.stateNode,l,e),yo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(_a===null||!_a.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=sf(n),cf(n,e,a,l),yo(a,n),!1}a=a.return}while(a!==null);return!1}var wo=Error(s(461)),Ie=!1;function ct(e,t,a,l){t.child=e===null?dr(t,null,a,l):sl(t,e.child,a,l)}function rf(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return nl(t),l=To(e,t,a,u,i,n),o=Mo(),e!==null&&!Ie?(zo(e,t,n),fa(e,t,n)):(me&&o&&no(t),t.flags|=1,ct(e,t,l,n),t.child)}function ff(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!to(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,df(e,t,i,l,n)):(e=Si(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Fo(e,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:vn,a(u,l)&&e.ref===t.ref)return fa(e,t,n)}return t.flags|=1,e=ia(i,l),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(vn(i,l)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=l=i,Fo(e,n))(e.flags&131072)!==0&&(Ie=!0);else return t.lanes=e.lanes,fa(e,t,n)}return Yo(e,t,a,l,n)}function pf(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return mf(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mi(t,i!==null?i.cachePool:null),i!==null?gr(t,i):xo(),hr(t);else return l=t.lanes=536870912,mf(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(Mi(t,i.cachePool),gr(t,i),Ba(),t.memoizedState=null):(e!==null&&Mi(t,null),xo(),Ba());return ct(e,t,n,a),t.child}function Bn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mf(e,t,a,l,n){var i=mo();return i=i===null?null:{parent:Xe._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Mi(t,null),xo(),hr(t),e!==null&&ql(e,t,l,!0),t.childLanes=n,null}function Pi(e,t){return t=wi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gf(e,t,a){return sl(t,e.child,null,a),e=Pi(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function Bm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(l.mode==="hidden")return e=Pi(t,l),t.lanes=536870912,Bn(null,e);if(Ao(t),(e=Le)?(e=Od(e,Pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Jt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Fc(e),a.return=t,t.child=a,ot=t,Le=null)):e=null,e===null)throw za(t);return t.lanes=536870912,null}return Pi(t,l)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(Ao(t),n)if(t.flags&256)t.flags&=-257,t=gf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ie||ql(e,t,a,!1),n=(a&e.childLanes)!==0,Ie||n){if(l=He,l!==null&&(u=nc(l,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,el(e,u),Et(l,e,u),wo;Wi(),t=gf(e,t,a)}else e=i.treeContext,Le=wt(u.nextSibling),ot=t,me=!0,Ma=null,Pt=!1,e!==null&&er(t,e),t=Pi(t,l),t.flags|=4096;return t}return e=ia(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Yo(e,t,a,l,n){return nl(t),a=To(e,t,a,l,void 0,n),l=Mo(),e!==null&&!Ie?(zo(e,t,n),fa(e,t,n)):(me&&l&&no(t),t.flags|=1,ct(e,t,a,n),t.child)}function hf(e,t,a,l,n,i){return nl(t),t.updateQueue=null,a=yr(t,l,a,n),vr(e),l=Mo(),e!==null&&!Ie?(zo(e,t,i),fa(e,t,i)):(me&&l&&no(t),t.flags|=1,ct(e,t,a,i),t.child)}function vf(e,t,a,l,n){if(nl(t),t.stateNode===null){var i=jl,u=a.contextType;typeof u=="object"&&u!==null&&(i=st(u)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Po,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},ho(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?st(u):jl,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(ko(t,a,u,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Po.enqueueReplaceState(i,i.state,null),On(t,l,i,n),zn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,p=rl(a,o);i.props=p;var S=i.context,O=a.contextType;u=jl,typeof O=="object"&&O!==null&&(u=st(O));var B=a.getDerivedStateFromProps;O=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||S!==u)&&af(t,i,l,u),Ca=!1;var E=t.memoizedState;i.state=E,On(t,l,i,n),zn(),S=t.memoizedState,o||E!==S||Ca?(typeof B=="function"&&(ko(t,a,B,l),S=t.memoizedState),(p=Ca||tf(t,a,p,l,E,S,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),i.props=l,i.state=S,i.context=u,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,vo(e,t),u=t.memoizedProps,O=rl(a,u),i.props=O,B=t.pendingProps,E=i.context,S=a.contextType,p=jl,typeof S=="object"&&S!==null&&(p=st(S)),o=a.getDerivedStateFromProps,(S=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==B||E!==p)&&af(t,i,l,p),Ca=!1,E=t.memoizedState,i.state=E,On(t,l,i,n),zn();var z=t.memoizedState;u!==B||E!==z||Ca||e!==null&&e.dependencies!==null&&Ei(e.dependencies)?(typeof o=="function"&&(ko(t,a,o,l),z=t.memoizedState),(O=Ca||tf(t,a,O,l,E,z,p)||e!==null&&e.dependencies!==null&&Ei(e.dependencies))?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,z,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,z,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=p,l=O):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Qi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=sl(t,e.child,null,n),t.child=sl(t,null,a,n)):ct(e,t,a,n),t.memoizedState=i.state,e=t.child):e=fa(e,t,n),e}function yf(e,t,a,l){return al(),t.flags|=256,ct(e,t,a,l),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zo(e){return{baseLanes:e,cachePool:ur()}}function Ko(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Dt),e}function bf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?ja(t):Ba(),(e=Le)?(e=Od(e,Pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Jt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Fc(e),a.return=t,t.child=a,ot=t,Le=null)):e=null,e===null)throw za(t);return Hs(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,n?(Ba(),n=t.mode,o=wi({mode:"hidden",children:o},n),l=tl(l,n,a,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=Zo(a),l.childLanes=Ko(e,u,a),t.memoizedState=Vo,Bn(null,l)):(ja(t),Xo(t,o))}var p=e.memoizedState;if(p!==null&&(o=p.dehydrated,o!==null)){if(i)t.flags&256?(ja(t),t.flags&=-257,t=Jo(e,t,a)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,t=null):(Ba(),o=l.fallback,n=t.mode,l=wi({mode:"visible",children:l.children},n),o=tl(o,n,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,sl(t,e.child,null,a),l=t.child,l.memoizedState=Zo(a),l.childLanes=Ko(e,u,a),t.memoizedState=Vo,t=Bn(null,l));else if(ja(t),Hs(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var S=u.dgst;u=S,l=Error(s(419)),l.stack="",l.digest=u,xn({value:l,source:null,stack:null}),t=Jo(e,t,a)}else if(Ie||ql(e,t,a,!1),u=(a&e.childLanes)!==0,Ie||u){if(u=He,u!==null&&(l=nc(u,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,el(e,l),Et(u,e,l),wo;Cs(o)||Wi(),t=Jo(e,t,a)}else Cs(o)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Le=wt(o.nextSibling),ot=t,me=!0,Ma=null,Pt=!1,e!==null&&er(t,e),t=Xo(t,l.children),t.flags|=4096);return t}return n?(Ba(),o=l.fallback,n=t.mode,p=e.child,S=p.sibling,l=ia(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,S!==null?o=ia(S,o):(o=tl(o,n,a,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Bn(null,l),l=t.child,o=e.child.memoizedState,o===null?o=Zo(a):(n=o.cachePool,n!==null?(p=Xe._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=ur(),o={baseLanes:o.baseLanes|a,cachePool:n}),l.memoizedState=o,l.childLanes=Ko(e,u,a),t.memoizedState=Vo,Bn(e.child,l)):(ja(t),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function Xo(e,t){return t=wi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function wi(e,t){return e=Ht(22,e,null,t),e.lanes=0,e}function Jo(e,t,a){return sl(t,e.child,null,a),e=Xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),co(e.return,t,a)}function Io(e,t,a,l,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Sf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var u=Ve.current,o=(u&2)!==0;if(o?(u=u&1|2,t.flags|=128):u&=1,_(Ve,u),ct(e,t,l,a),l=me?bn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,a,t);else if(e.tag===19)xf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ji(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Io(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ji(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Io(t,!0,a,null,i,l);break;case"together":Io(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ql(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=ia(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Fo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ei(e)))}function Dm(e,t,a){switch(t.tag){case 3:De(t,t.stateNode.containerInfo),Oa(t,Xe,e.memoizedState.cache),al();break;case 27:case 5:Mt(t);break;case 4:De(t,t.stateNode.containerInfo);break;case 10:Oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ao(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ja(t),t.flags|=128,null):(a&t.child.childLanes)!==0?bf(e,t,a):(ja(t),e=fa(e,t,a),e!==null?e.sibling:null);ja(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(ql(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Sf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),_(Ve,Ve.current),l)break;return null;case 22:return t.lanes=0,pf(e,t,a,t.pendingProps);case 24:Oa(t,Xe,e.memoizedState.cache)}return fa(e,t,a)}function Af(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ie=!0;else{if(!Fo(e,a)&&(t.flags&128)===0)return Ie=!1,Dm(e,t,a);Ie=(e.flags&131072)!==0}else Ie=!1,me&&(t.flags&1048576)!==0&&$c(t,bn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ul(t.elementType),t.type=e,typeof e=="function")to(e)?(l=rl(e,l),t.tag=1,t=vf(null,t,e,l,a)):(t.tag=0,t=Yo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Ne){t.tag=11,t=rf(null,t,e,l,a);break e}else if(n===J){t.tag=14,t=ff(null,t,e,l,a);break e}}throw t=Q(e)||e,Error(s(306,t,""))}}return t;case 0:return Yo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=rl(l,t.pendingProps),vf(e,t,l,n,a);case 3:e:{if(De(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,vo(e,t),On(t,l,null,a);var u=t.memoizedState;if(l=u.cache,Oa(t,Xe,l),l!==i.cache&&ro(t,[Xe],a,!0),zn(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=yf(e,t,l,a);break e}else if(l!==n){n=Ut(Error(s(424)),t),xn(n),t=yf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=wt(e.firstChild),ot=t,me=!0,Ma=null,Pt=!0,a=dr(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(al(),l===n){t=fa(e,t,a);break e}ct(e,t,l,a)}t=t.child}return t;case 26:return Qi(e,t),e===null?(a=Dd(t.type,null,t.pendingProps,null))?t.memoizedState=a:me||(a=t.type,e=t.pendingProps,l=iu(ee.current).createElement(a),l[ut]=t,l[vt]=e,rt(l,a,e),tt(l),t.stateNode=l):t.memoizedState=Dd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mt(t),e===null&&me&&(l=t.stateNode=Nd(t.type,t.pendingProps,ee.current),ot=t,Pt=!0,n=Le,ka(t.type)?(Ns=n,Le=wt(l.firstChild)):Le=n),ct(e,t,t.pendingProps.children,a),Qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=l=Le)&&(l=cg(l,t.type,t.pendingProps,Pt),l!==null?(t.stateNode=l,ot=t,Le=wt(l.firstChild),Pt=!1,n=!0):n=!1),n||za(t)),Mt(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,l=i.children,Ms(n,i)?l=null:u!==null&&Ms(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=To(e,t,Tm,null,null,a),Kn._currentValue=n),Qi(e,t),ct(e,t,l,a),t.child;case 6:return e===null&&me&&((e=a=Le)&&(a=rg(a,t.pendingProps,Pt),a!==null?(t.stateNode=a,ot=t,Le=null,e=!0):e=!1),e||za(t)),null;case 13:return bf(e,t,a);case 4:return De(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=sl(t,null,l,a):ct(e,t,l,a),t.child;case 11:return rf(e,t,t.type,t.pendingProps,a);case 7:return ct(e,t,t.pendingProps,a),t.child;case 8:return ct(e,t,t.pendingProps.children,a),t.child;case 12:return ct(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Oa(t,t.type,l.value),ct(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,nl(t),n=st(n),l=l(n),t.flags|=1,ct(e,t,l,a),t.child;case 14:return ff(e,t,t.type,t.pendingProps,a);case 15:return df(e,t,t.type,t.pendingProps,a);case 19:return Sf(e,t,a);case 31:return Bm(e,t,a);case 22:return pf(e,t,a,t.pendingProps);case 24:return nl(t),l=st(Xe),e===null?(n=mo(),n===null&&(n=He,i=fo(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},ho(t),Oa(t,Xe,n)):((e.lanes&a)!==0&&(vo(e,t),On(t,null,null,a),zn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Oa(t,Xe,l)):(l=i.cache,Oa(t,Xe,l),l!==n.cache&&ro(t,[Xe],a,!0))),ct(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function da(e){e.flags|=4}function Wo(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Jf())e.flags|=8192;else throw ol=Oi,go}else e.flags&=-16777217}function Ef(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t))if(Jf())e.flags|=8192;else throw ol=Oi,go}function Yi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tc():536870912,e.lanes|=t,Kl|=t)}function Dn(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Lm(e,t,a){var l=t.pendingProps;switch(io(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),sa(Xe),ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ll(t)?da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,oo())),qe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(da(t),i!==null?(qe(t),Ef(t,i)):(qe(t),Wo(t,n,null,l,a))):i?i!==e.memoizedState?(da(t),qe(t),Ef(t,i)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&da(t),qe(t),Wo(t,n,e,l,a)),null;case 27:if(zt(t),a=ee.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&da(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return qe(t),null}e=G.current,Ll(t)?tr(t):(e=Nd(n,l,a),t.stateNode=e,da(t))}return qe(t),null;case 5:if(zt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&da(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return qe(t),null}if(i=G.current,Ll(t))tr(t);else{var u=iu(ee.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(n,{is:l.is}):u.createElement(n)}}i[ut]=t,i[vt]=l;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(rt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&da(t)}}return qe(t),Wo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&da(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=ee.current,Ll(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=ot,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ut]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||bd(e.nodeValue,a)),e||za(t,!0)}else e=iu(e).createTextNode(l),e[ut]=t,t.stateNode=e}return qe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ll(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ut]=t}else al(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else a=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return qe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ll(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[ut]=t}else al(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),n=!1}else n=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Yi(t,t.updateQueue),qe(t),null);case 4:return ge(),e===null&&xs(t.stateNode.containerInfo),qe(t),null;case 10:return sa(t.type),qe(t),null;case 19:if(C(Ve),l=t.memoizedState,l===null)return qe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Dn(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ji(e),i!==null){for(t.flags|=128,Dn(l,!1),e=i.updateQueue,t.updateQueue=e,Yi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ic(a,e),a=a.sibling;return _(Ve,Ve.current&1|2),me&&ua(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&lt()>Ji&&(t.flags|=128,n=!0,Dn(l,!1),t.lanes=4194304)}else{if(!n)if(e=ji(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Yi(t,e),Dn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!me)return qe(t),null}else 2*lt()-l.renderingStartTime>Ji&&a!==536870912&&(t.flags|=128,n=!0,Dn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=lt(),e.sibling=null,a=Ve.current,_(Ve,n?a&1|2:a&1),me&&ua(t,l.treeForkCount),e):(qe(t),null);case 22:case 23:return jt(t),So(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),a=t.updateQueue,a!==null&&Yi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&C(il),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sa(Xe),qe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function qm(e,t){switch(io(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(Xe),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zt(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(s(340));al()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));al()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(Ve),null;case 4:return ge(),null;case 10:return sa(t.type),null;case 22:case 23:return jt(t),So(),e!==null&&C(il),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(Xe),null;case 25:return null;default:return null}}function Tf(e,t){switch(io(t),t.tag){case 3:sa(Xe),ge();break;case 26:case 27:case 5:zt(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:C(Ve);break;case 10:sa(t.type);break;case 22:case 23:jt(t),So(),e!==null&&C(il);break;case 24:sa(Xe)}}function Ln(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(o){Te(t,t.return,o)}}function Da(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=t;var p=a,S=o;try{S()}catch(O){Te(n,p,O)}}}l=l.next}while(l!==i)}}catch(O){Te(t,t.return,O)}}function Mf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{mr(t,a)}catch(l){Te(e,e.return,l)}}}function zf(e,t,a){a.props=rl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Te(e,t,l)}}function qn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Te(e,t,n)}}function Ft(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Te(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Te(e,t,n)}else a.current=null}function Of(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Te(e,e.return,n)}}function $o(e,t,a){try{var l=e.stateNode;lg(l,e.type,a,t),l[vt]=t}catch(n){Te(e,e.return,n)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=la));else if(l!==4&&(l===27&&ka(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ts(e,t,a),e=e.sibling;e!==null;)ts(e,t,a),e=e.sibling}function Vi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vi(e,t,a),e=e.sibling;e!==null;)Vi(e,t,a),e=e.sibling}function Hf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);rt(t,l,a),t[ut]=e,t[vt]=a}catch(i){Te(e,e.return,i)}}var pa=!1,Fe=!1,as=!1,Nf=typeof WeakSet=="function"?WeakSet:Set,at=null;function _m(e,t){if(e=e.containerInfo,Es=du,e=Pc(e),Xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var u=0,o=-1,p=-1,S=0,O=0,B=e,E=null;t:for(;;){for(var z;B!==a||n!==0&&B.nodeType!==3||(o=u+n),B!==i||l!==0&&B.nodeType!==3||(p=u+l),B.nodeType===3&&(u+=B.nodeValue.length),(z=B.firstChild)!==null;)E=B,B=z;for(;;){if(B===e)break t;if(E===a&&++S===n&&(o=u),E===i&&++O===l&&(p=u),(z=B.nextSibling)!==null)break;B=E,E=B.parentNode}B=z}a=o===-1||p===-1?null:{start:o,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ts={focusedElem:e,selectionRange:a},du=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){switch(t=at,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var w=rl(a.type,n);e=l.getSnapshotBeforeUpdate(w,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){Te(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Os(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Os(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}}function jf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),l&4&&Ln(5,a);break;case 1:if(ga(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){Te(a,a.return,u)}else{var n=rl(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Te(a,a.return,u)}}l&64&&Mf(a),l&512&&qn(a,a.return);break;case 3:if(ga(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{mr(e,t)}catch(u){Te(a,a.return,u)}}break;case 27:t===null&&l&4&&Hf(a);case 26:case 5:ga(e,a),t===null&&l&4&&Of(a),l&512&&qn(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),l&4&&Lf(e,a);break;case 13:ga(e,a),l&4&&qf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vm.bind(null,a),fg(e,a))));break;case 22:if(l=a.memoizedState!==null||pa,!l){t=t!==null&&t.memoizedState!==null||Fe,n=pa;var i=Fe;pa=l,(Fe=t)&&!i?ha(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),pa=n,Fe=i}break;case 30:break;default:ga(e,a)}}function Bf(e){var t=e.alternate;t!==null&&(e.alternate=null,Bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ju(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,bt=!1;function ma(e,t,a){for(a=a.child;a!==null;)Df(e,t,a),a=a.sibling}function Df(e,t,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Pe,a)}catch{}switch(a.tag){case 26:Fe||Ft(a,t),ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||Ft(a,t);var l=Ue,n=bt;ka(a.type)&&(Ue=a.stateNode,bt=!1),ma(e,t,a),Yn(a.stateNode),Ue=l,bt=n;break;case 5:Fe||Ft(a,t);case 6:if(l=Ue,n=bt,Ue=null,ma(e,t,a),Ue=l,bt=n,Ue!==null)if(bt)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(i){Te(a,t,i)}else try{Ue.removeChild(a.stateNode)}catch(i){Te(a,t,i)}break;case 18:Ue!==null&&(bt?(e=Ue,Md(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),tn(e)):Md(Ue,a.stateNode));break;case 4:l=Ue,n=bt,Ue=a.stateNode.containerInfo,bt=!0,ma(e,t,a),Ue=l,bt=n;break;case 0:case 11:case 14:case 15:Da(2,a,t),Fe||Da(4,a,t),ma(e,t,a);break;case 1:Fe||(Ft(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&zf(a,t,l)),ma(e,t,a);break;case 21:ma(e,t,a);break;case 22:Fe=(l=Fe)||a.memoizedState!==null,ma(e,t,a),Fe=l;break;default:ma(e,t,a)}}function Lf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{tn(e)}catch(a){Te(t,t.return,a)}}}function qf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tn(e)}catch(a){Te(t,t.return,a)}}function Rm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nf),t;default:throw Error(s(435,e.tag))}}function Zi(e,t){var a=Rm(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Zm.bind(null,e,l);l.then(n,n)}})}function xt(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(ka(o.type)){Ue=o.stateNode,bt=!1;break e}break;case 5:Ue=o.stateNode,bt=!1;break e;case 3:case 4:Ue=o.stateNode.containerInfo,bt=!0;break e}o=o.return}if(Ue===null)throw Error(s(160));Df(i,u,n),Ue=null,bt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}var Kt=null;function _f(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),St(e),l&4&&(Da(3,e,e.return),Ln(3,e),Da(5,e,e.return));break;case 1:xt(t,e),St(e),l&512&&(Fe||a===null||Ft(a,a.return)),l&64&&pa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Kt;if(xt(t,e),St(e),l&512&&(Fe||a===null||Ft(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[sn]||i[ut]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),rt(i,l,a),i[ut]=e,tt(i),l=i;break e;case"link":var u=_d("link","href",n).get(l+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break t}}i=n.createElement(l),rt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=_d("meta","content",n).get(l+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break t}}i=n.createElement(l),rt(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[ut]=e,tt(i),l=i}e.stateNode=l}else Rd(n,e.type,e.stateNode);else e.stateNode=qd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Rd(n,e.type,e.stateNode):qd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&$o(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(t,e),St(e),l&512&&(Fe||a===null||Ft(a,a.return)),a!==null&&l&4&&$o(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(t,e),St(e),l&512&&(Fe||a===null||Ft(a,a.return)),e.flags&32){n=e.stateNode;try{Tl(n,"")}catch(w){Te(e,e.return,w)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,$o(e,n,a!==null?a.memoizedProps:n)),l&1024&&(as=!0);break;case 6:if(xt(t,e),St(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(w){Te(e,e.return,w)}}break;case 3:if(su=null,n=Kt,Kt=uu(t.containerInfo),xt(t,e),Kt=n,St(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(w){Te(e,e.return,w)}as&&(as=!1,Rf(e));break;case 4:l=Kt,Kt=uu(e.stateNode.containerInfo),xt(t,e),St(e),Kt=l;break;case 12:xt(t,e),St(e);break;case 31:xt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 13:xt(t,e),St(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xi=lt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,S=pa,O=Fe;if(pa=S||n,Fe=O||p,xt(t,e),Fe=O,pa=S,St(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||pa||Fe||fl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=p.stateNode;var B=p.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null;o.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(w){Te(p,p.return,w)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(w){Te(p,p.return,w)}}}else if(t.tag===18){if(a===null){p=t;try{var z=p.stateNode;n?zd(z,!0):zd(p.stateNode,!1)}catch(w){Te(p,p.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zi(e,a))));break;case 19:xt(t,e),St(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zi(e,l)));break;case 30:break;case 21:break;default:xt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Cf(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=es(e);Vi(e,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Tl(u,""),a.flags&=-33);var o=es(e);Vi(e,o,u);break;case 3:case 4:var p=a.stateNode.containerInfo,S=es(e);ts(e,S,p);break;default:throw Error(s(161))}}catch(O){Te(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ga(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jf(e,t.alternate,t),t=t.sibling}function fl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Da(4,t,t.return),fl(t);break;case 1:Ft(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&zf(t,t.return,a),fl(t);break;case 27:Yn(t.stateNode);case 26:case 5:Ft(t,t.return),fl(t);break;case 22:t.memoizedState===null&&fl(t);break;case 30:fl(t);break;default:fl(t)}e=e.sibling}}function ha(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:ha(n,i,a),Ln(4,i);break;case 1:if(ha(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(S){Te(l,l.return,S)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)pr(p[n],o)}catch(S){Te(l,l.return,S)}}a&&u&64&&Mf(i),qn(i,i.return);break;case 27:Hf(i);case 26:case 5:ha(n,i,a),a&&l===null&&u&4&&Of(i),qn(i,i.return);break;case 12:ha(n,i,a);break;case 31:ha(n,i,a),a&&u&4&&Lf(n,i);break;case 13:ha(n,i,a),a&&u&4&&qf(n,i);break;case 22:i.memoizedState===null&&ha(n,i,a),qn(i,i.return);break;case 30:break;default:ha(n,i,a)}t=t.sibling}}function ls(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Sn(a))}function ns(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sn(e))}function Xt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uf(e,t,a,l),t=t.sibling}function Uf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Xt(e,t,a,l),n&2048&&Ln(9,t);break;case 1:Xt(e,t,a,l);break;case 3:Xt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sn(e)));break;case 12:if(n&2048){Xt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Te(t,t.return,p)}}else Xt(e,t,a,l);break;case 31:Xt(e,t,a,l);break;case 13:Xt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Xt(e,t,a,l):_n(e,t):i._visibility&2?Xt(e,t,a,l):(i._visibility|=2,Yl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ls(u,t);break;case 24:Xt(e,t,a,l),n&2048&&ns(t.alternate,t);break;default:Xt(e,t,a,l)}}function Yl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,o=a,p=l,S=u.flags;switch(u.tag){case 0:case 11:case 15:Yl(i,u,o,p,n),Ln(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?Yl(i,u,o,p,n):_n(i,u):(O._visibility|=2,Yl(i,u,o,p,n)),n&&S&2048&&ls(u.alternate,u);break;case 24:Yl(i,u,o,p,n),n&&S&2048&&ns(u.alternate,u);break;default:Yl(i,u,o,p,n)}t=t.sibling}}function _n(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:_n(a,l),n&2048&&ls(l.alternate,l);break;case 24:_n(a,l),n&2048&&ns(l.alternate,l);break;default:_n(a,l)}t=t.sibling}}var Rn=8192;function Vl(e,t,a){if(e.subtreeFlags&Rn)for(e=e.child;e!==null;)Gf(e,t,a),e=e.sibling}function Gf(e,t,a){switch(e.tag){case 26:Vl(e,t,a),e.flags&Rn&&e.memoizedState!==null&&Eg(a,Kt,e.memoizedState,e.memoizedProps);break;case 5:Vl(e,t,a);break;case 3:case 4:var l=Kt;Kt=uu(e.stateNode.containerInfo),Vl(e,t,a),Kt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Rn,Rn=16777216,Vl(e,t,a),Rn=l):Vl(e,t,a));break;default:Vl(e,t,a)}}function kf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Un(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];at=l,Qf(l,e)}kf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pf(e),e=e.sibling}function Pf(e){switch(e.tag){case 0:case 11:case 15:Un(e),e.flags&2048&&Da(9,e,e.return);break;case 3:Un(e);break;case 12:Un(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ki(e)):Un(e);break;default:Un(e)}}function Ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];at=l,Qf(l,e)}kf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Da(8,t,t.return),Ki(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ki(t));break;default:Ki(t)}e=e.sibling}}function Qf(e,t){for(;at!==null;){var a=at;switch(a.tag){case 0:case 11:case 15:Da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Sn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,at=l;else e:for(a=e;at!==null;){l=at;var n=l.sibling,i=l.return;if(Bf(l),l===a){at=null;break e}if(n!==null){n.return=i,at=n;break e}at=i}}}var Um={getCacheForType:function(e){var t=st(Xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return st(Xe).controller.signal}},Gm=typeof WeakMap=="function"?WeakMap:Map,Ae=0,He=null,re=null,de=0,Ee=0,Bt=null,La=!1,Zl=!1,is=!1,va=0,Ye=0,qa=0,dl=0,us=0,Dt=0,Kl=0,Gn=null,At=null,os=!1,Xi=0,wf=0,Ji=1/0,Ii=null,_a=null,We=0,Ra=null,Xl=null,ya=0,ss=0,cs=null,Yf=null,kn=0,rs=null;function Lt(){return(Ae&2)!==0&&de!==0?de&-de:T.T!==null?hs():ic()}function Vf(){if(Dt===0)if((de&536870912)===0||me){var e=Xa;Xa<<=1,(Xa&3932160)===0&&(Xa=262144),Dt=e}else Dt=536870912;return e=Nt.current,e!==null&&(e.flags|=32),Dt}function Et(e,t,a){(e===He&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Jl(e,0),Ua(e,de,Dt,!1)),on(e,a),((Ae&2)===0||e!==He)&&(e===He&&((Ae&2)===0&&(dl|=a),Ye===4&&Ua(e,de,Dt,!1)),Wt(e))}function Zf(e,t,a){if((Ae&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||un(e,t),n=l?Qm(e,t):ds(e,t,!0),i=l;do{if(n===0){Zl&&!l&&Ua(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!km(a)){n=ds(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var o=e;n=Gn;var p=o.current.memoizedState.isDehydrated;if(p&&(Jl(o,u).flags|=256),u=ds(o,u,!1),u!==2){if(is&&!p){o.errorRecoveryDisabledLanes|=i,dl|=i,n=4;break e}i=At,At=n,i!==null&&(At===null?At=i:At.push.apply(At,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Jl(e,0),Ua(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Ua(l,t,Dt,!La);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=Xi+300-lt(),10<n)){if(Ua(l,t,Dt,!La),ui(l,0,!0)!==0)break e;ya=t,l.timeoutHandle=Ed(Kf.bind(null,l,a,At,Ii,os,t,Dt,dl,Kl,La,i,"Throttled",-0,0),n);break e}Kf(l,a,At,Ii,os,t,Dt,dl,Kl,La,i,null,-0,0)}}break}while(!0);Wt(e)}function Kf(e,t,a,l,n,i,u,o,p,S,O,B,E,z){if(e.timeoutHandle=-1,B=t.subtreeFlags,B&8192||(B&16785408)===16785408){B={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},Gf(t,i,B);var w=(i&62914560)===i?Xi-lt():(i&4194048)===i?wf-lt():0;if(w=Tg(B,w),w!==null){ya=i,e.cancelPendingCommit=w(td.bind(null,e,t,i,a,l,n,u,o,p,O,B,null,E,z)),Ua(e,i,u,!S);return}}td(e,t,i,a,l,n,u,o,p)}function km(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Ct(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ua(e,t,a,l){t&=~us,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-ue(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&ac(e,a,t)}function Fi(){return(Ae&6)===0?(Pn(0),!1):!0}function fs(){if(re!==null){if(Ee===0)var e=re.return;else e=re,oa=ll=null,Oo(e),Gl=null,En=0,e=re;for(;e!==null;)Tf(e.alternate,e),e=e.return;re=null}}function Jl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ug(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ya=0,fs(),He=e,re=a=ia(e.current,null),de=t,Ee=0,Bt=null,La=!1,Zl=un(e,t),is=!1,Kl=Dt=us=dl=qa=Ye=0,At=Gn=null,os=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-ue(l),i=1<<n;t|=e[n],l&=~i}return va=t,yi(),a}function Xf(e,t){ae=null,T.H=jn,t===Ul||t===zi?(t=cr(),Ee=3):t===go?(t=cr(),Ee=4):Ee=t===wo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,re===null&&(Ye=1,ki(e,Ut(t,e.current)))}function Jf(){var e=Nt.current;return e===null?!0:(de&4194048)===de?Qt===null:(de&62914560)===de||(de&536870912)!==0?e===Qt:!1}function If(){var e=T.H;return T.H=jn,e===null?jn:e}function Ff(){var e=T.A;return T.A=Um,e}function Wi(){Ye=4,La||(de&4194048)!==de&&Nt.current!==null||(Zl=!0),(qa&134217727)===0&&(dl&134217727)===0||He===null||Ua(He,de,Dt,!1)}function ds(e,t,a){var l=Ae;Ae|=2;var n=If(),i=Ff();(He!==e||de!==t)&&(Ii=null,Jl(e,t)),t=!1;var u=Ye;e:do try{if(Ee!==0&&re!==null){var o=re,p=Bt;switch(Ee){case 8:fs(),u=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var S=Ee;if(Ee=0,Bt=null,Il(e,o,p,S),a&&Zl){u=0;break e}break;default:S=Ee,Ee=0,Bt=null,Il(e,o,p,S)}}Pm(),u=Ye;break}catch(O){Xf(e,O)}while(!0);return t&&e.shellSuspendCounter++,oa=ll=null,Ae=l,T.H=n,T.A=i,re===null&&(He=null,de=0,yi()),u}function Pm(){for(;re!==null;)Wf(re)}function Qm(e,t){var a=Ae;Ae|=2;var l=If(),n=Ff();He!==e||de!==t?(Ii=null,Ji=lt()+500,Jl(e,t)):Zl=un(e,t);e:do try{if(Ee!==0&&re!==null){t=re;var i=Bt;t:switch(Ee){case 1:Ee=0,Bt=null,Il(e,t,i,1);break;case 2:case 9:if(or(i)){Ee=0,Bt=null,$f(t);break}t=function(){Ee!==2&&Ee!==9||He!==e||(Ee=7),Wt(e)},i.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:or(i)?(Ee=0,Bt=null,$f(t)):(Ee=0,Bt=null,Il(e,t,i,7));break;case 5:var u=null;switch(re.tag){case 26:u=re.memoizedState;case 5:case 27:var o=re;if(u?Ud(u):o.stateNode.complete){Ee=0,Bt=null;var p=o.sibling;if(p!==null)re=p;else{var S=o.return;S!==null?(re=S,$i(S)):re=null}break t}}Ee=0,Bt=null,Il(e,t,i,5);break;case 6:Ee=0,Bt=null,Il(e,t,i,6);break;case 8:fs(),Ye=6;break e;default:throw Error(s(462))}}wm();break}catch(O){Xf(e,O)}while(!0);return oa=ll=null,T.H=l,T.A=n,Ae=a,re!==null?0:(He=null,de=0,yi(),Ye)}function wm(){for(;re!==null&&!Mu();)Wf(re)}function Wf(e){var t=Af(e.alternate,e,va);e.memoizedProps=e.pendingProps,t===null?$i(e):re=t}function $f(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hf(a,t,t.pendingProps,t.type,void 0,de);break;case 11:t=hf(a,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:Oo(t);default:Tf(a,t),t=re=Ic(t,va),t=Af(a,t,va)}e.memoizedProps=e.pendingProps,t===null?$i(e):re=t}function Il(e,t,a,l){oa=ll=null,Oo(t),Gl=null,En=0;var n=t.return;try{if(jm(e,n,t,a,de)){Ye=1,ki(e,Ut(a,e.current)),re=null;return}}catch(i){if(n!==null)throw re=n,i;Ye=1,ki(e,Ut(a,e.current)),re=null;return}t.flags&32768?(me||l===1?e=!0:Zl||(de&536870912)!==0?e=!1:(La=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ed(t,e)):$i(t)}function $i(e){var t=e;do{if((t.flags&32768)!==0){ed(t,La);return}e=t.return;var a=Lm(t.alternate,t,va);if(a!==null){re=a;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ye===0&&(Ye=5)}function ed(e,t){do{var a=qm(e.alternate,e);if(a!==null){a.flags&=32767,re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=a}while(e!==null);Ye=6,re=null}function td(e,t,a,l,n,i,u,o,p){e.cancelPendingCommit=null;do eu();while(We!==0);if((Ae&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=$u,Ap(e,a,i,u,o,p),e===He&&(re=He=null,de=0),Xl=t,Ra=e,ya=a,ss=i,cs=n,Yf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Km(vl,function(){return ud(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,n=q.p,q.p=2,u=Ae,Ae|=4;try{_m(e,t,a)}finally{Ae=u,q.p=n,T.T=l}}We=1,ad(),ld(),nd()}}function ad(){if(We===1){We=0;var e=Ra,t=Xl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var l=q.p;q.p=2;var n=Ae;Ae|=4;try{_f(t,e);var i=Ts,u=Pc(e.containerInfo),o=i.focusedElem,p=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&kc(o.ownerDocument.documentElement,o)){if(p!==null&&Xu(o)){var S=p.start,O=p.end;if(O===void 0&&(O=S),"selectionStart"in o)o.selectionStart=S,o.selectionEnd=Math.min(O,o.value.length);else{var B=o.ownerDocument||document,E=B&&B.defaultView||window;if(E.getSelection){var z=E.getSelection(),w=o.textContent.length,W=Math.min(p.start,w),Oe=p.end===void 0?W:Math.min(p.end,w);!z.extend&&W>Oe&&(u=Oe,Oe=W,W=u);var y=Gc(o,W),g=Gc(o,Oe);if(y&&g&&(z.rangeCount!==1||z.anchorNode!==y.node||z.anchorOffset!==y.offset||z.focusNode!==g.node||z.focusOffset!==g.offset)){var x=B.createRange();x.setStart(y.node,y.offset),z.removeAllRanges(),W>Oe?(z.addRange(x),z.extend(g.node,g.offset)):(x.setEnd(g.node,g.offset),z.addRange(x))}}}}for(B=[],z=o;z=z.parentNode;)z.nodeType===1&&B.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<B.length;o++){var N=B[o];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}du=!!Es,Ts=Es=null}finally{Ae=n,q.p=l,T.T=a}}e.current=t,We=2}}function ld(){if(We===2){We=0;var e=Ra,t=Xl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var l=q.p;q.p=2;var n=Ae;Ae|=4;try{jf(e,t.alternate,t)}finally{Ae=n,q.p=l,T.T=a}}We=3}}function nd(){if(We===4||We===3){We=0,zu();var e=Ra,t=Xl,a=ya,l=Yf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Xl=Ra=null,id(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(_a=null),Hu(a),t=t.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Pe,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=T.T,n=q.p,q.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{T.T=t,q.p=n}}(ya&3)!==0&&eu(),Wt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===rs?kn++:(kn=0,rs=e):kn=0,Pn(0)}}function id(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sn(t)))}function eu(){return ad(),ld(),nd(),ud()}function ud(){if(We!==5)return!1;var e=Ra,t=ss;ss=0;var a=Hu(ya),l=T.T,n=q.p;try{q.p=32>a?32:a,T.T=null,a=cs,cs=null;var i=Ra,u=ya;if(We=0,Xl=Ra=null,ya=0,(Ae&6)!==0)throw Error(s(331));var o=Ae;if(Ae|=4,Pf(i.current),Uf(i,i.current,u,a),Ae=o,Pn(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Pe,i)}catch{}return!0}finally{q.p=n,T.T=l,id(e,t)}}function od(e,t,a){t=Ut(a,t),t=Qo(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(on(e,2),Wt(e))}function Te(e,t,a){if(e.tag===3)od(e,e,a);else for(;t!==null;){if(t.tag===3){od(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_a===null||!_a.has(l))){e=Ut(a,e),a=sf(2),l=Na(t,a,2),l!==null&&(cf(a,l,t,e),on(l,2),Wt(l));break}}t=t.return}}function ps(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Gm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(is=!0,n.add(a),e=Ym.bind(null,e,t,a),t.then(e,e))}function Ym(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(de&a)===a&&(Ye===4||Ye===3&&(de&62914560)===de&&300>lt()-Xi?(Ae&2)===0&&Jl(e,0):us|=a,Kl===de&&(Kl=0)),Wt(e)}function sd(e,t){t===0&&(t=tc()),e=el(e,t),e!==null&&(on(e,t),Wt(e))}function Vm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),sd(e,a)}function Zm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),sd(e,a)}function Km(e,t){return ta(e,t)}var tu=null,Fl=null,ms=!1,au=!1,gs=!1,Ga=0;function Wt(e){e!==Fl&&e.next===null&&(Fl===null?tu=Fl=e:Fl=Fl.next=e),au=!0,ms||(ms=!0,Jm())}function Pn(e,t){if(!gs&&au){gs=!0;do for(var a=!1,l=tu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-ue(42|e)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,dd(l,i))}else i=de,i=ui(l,l===He?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||un(l,i)||(a=!0,dd(l,i));l=l.next}while(a);gs=!1}}function Xm(){cd()}function cd(){au=ms=!1;var e=0;Ga!==0&&ig()&&(e=Ga);for(var t=lt(),a=null,l=tu;l!==null;){var n=l.next,i=rd(l,t);i===0?(l.next=null,a===null?tu=n:a.next=n,n===null&&(Fl=a)):(a=l,(e!==0||(i&3)!==0)&&(au=!0)),l=n}We!==0&&We!==5||Pn(e),Ga!==0&&(Ga=0)}function rd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-ue(i),o=1<<u,p=n[u];p===-1?((o&a)===0||(o&l)!==0)&&(n[u]=Sp(o,t)):p<=t&&(e.expiredLanes|=o),i&=~o}if(t=He,a=de,a=ui(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ln(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||un(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&ln(l),Hu(a)){case 2:case 8:a=ni;break;case 32:a=vl;break;case 268435456:a=ie;break;default:a=vl}return l=fd.bind(null,e),a=ta(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&ln(l),e.callbackPriority=2,e.callbackNode=null,2}function fd(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(eu()&&e.callbackNode!==a)return null;var l=de;return l=ui(e,e===He?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zf(e,l,t),rd(e,lt()),e.callbackNode!=null&&e.callbackNode===a?fd.bind(null,e):null)}function dd(e,t){if(eu())return null;Zf(e,t,!0)}function Jm(){og(function(){(Ae&6)!==0?ta(li,Xm):cd()})}function hs(){if(Ga===0){var e=_l;e===0&&(e=et,et<<=1,(et&261888)===0&&(et=256)),Ga=e}return Ga}function pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ri(""+e)}function md(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Im(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=pd((n[vt]||null).action),u=l.submitter;u&&(t=(t=u[vt]||null)?pd(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var o=new mi("action","action",null,l,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ga!==0){var p=u?md(n,u):new FormData(n);_o(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(o.preventDefault(),p=u?md(n,u):new FormData(n),_o(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var vs=0;vs<Wu.length;vs++){var ys=Wu[vs],Fm=ys.toLowerCase(),Wm=ys[0].toUpperCase()+ys.slice(1);Zt(Fm,"on"+Wm)}Zt(Yc,"onAnimationEnd"),Zt(Vc,"onAnimationIteration"),Zt(Zc,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(mm,"onTransitionRun"),Zt(gm,"onTransitionStart"),Zt(hm,"onTransitionCancel"),Zt(Kc,"onTransitionEnd"),Al("onMouseEnter",["mouseout","mouseover"]),Al("onMouseLeave",["mouseout","mouseover"]),Al("onPointerEnter",["pointerout","pointerover"]),Al("onPointerLeave",["pointerout","pointerover"]),Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$m=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qn));function gd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var u=l.length-1;0<=u;u--){var o=l[u],p=o.instance,S=o.currentTarget;if(o=o.listener,p!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=S;try{i(n)}catch(O){vi(O)}n.currentTarget=null,i=p}else for(u=0;u<l.length;u++){if(o=l[u],p=o.instance,S=o.currentTarget,o=o.listener,p!==i&&n.isPropagationStopped())break e;i=o,n.currentTarget=S;try{i(n)}catch(O){vi(O)}n.currentTarget=null,i=p}}}}function fe(e,t){var a=t[Nu];a===void 0&&(a=t[Nu]=new Set);var l=e+"__bubble";a.has(l)||(hd(t,e,2,!1),a.add(l))}function bs(e,t,a){var l=0;t&&(l|=4),hd(a,e,l,t)}var lu="_reactListening"+Math.random().toString(36).slice(2);function xs(e){if(!e[lu]){e[lu]=!0,sc.forEach(function(a){a!=="selectionchange"&&($m.has(a)||bs(a,!1,e),bs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lu]||(t[lu]=!0,bs("selectionchange",!1,t))}}function hd(e,t,a,l){switch(Vd(t)){case 2:var n=Og;break;case 8:n=Cg;break;default:n=qs}a=n.bind(null,t,a,e),n=void 0,!Gu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Ss(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=l.return;u!==null;){var p=u.tag;if((p===3||p===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=bl(o),u===null)return;if(p=u.tag,p===5||p===6||p===26||p===27){l=i=u;continue e}o=o.parentNode}}l=l.return}xc(function(){var S=i,O=Ru(a),B=[];e:{var E=Xc.get(e);if(E!==void 0){var z=mi,w=e;switch(e){case"keypress":if(di(a)===0)break e;case"keydown":case"keyup":z=Zp;break;case"focusin":w="focus",z=wu;break;case"focusout":w="blur",z=wu;break;case"beforeblur":case"afterblur":z=wu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Ec;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Jp;break;case Yc:case Vc:case Zc:z=Rp;break;case Kc:z=Fp;break;case"scroll":case"scrollend":z=Bp;break;case"wheel":z=$p;break;case"copy":case"cut":case"paste":z=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Mc;break;case"toggle":case"beforetoggle":z=tm}var W=(t&4)!==0,Oe=!W&&(e==="scroll"||e==="scrollend"),y=W?E!==null?E+"Capture":null:E;W=[];for(var g=S,x;g!==null;){var N=g;if(x=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||x===null||y===null||(N=rn(g,y),N!=null&&W.push(wn(g,N,x))),Oe)break;g=g.return}0<W.length&&(E=new z(E,w,null,a,O),B.push({event:E,listeners:W}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",E&&a!==_u&&(w=a.relatedTarget||a.fromElement)&&(bl(w)||w[yl]))break e;if((z||E)&&(E=O.window===O?O:(E=O.ownerDocument)?E.defaultView||E.parentWindow:window,z?(w=a.relatedTarget||a.toElement,z=S,w=w?bl(w):null,w!==null&&(Oe=A(w),W=w.tag,w!==Oe||W!==5&&W!==27&&W!==6)&&(w=null)):(z=null,w=S),z!==w)){if(W=Ec,N="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(W=Mc,N="onPointerLeave",y="onPointerEnter",g="pointer"),Oe=z==null?E:cn(z),x=w==null?E:cn(w),E=new W(N,g+"leave",z,a,O),E.target=Oe,E.relatedTarget=x,N=null,bl(O)===S&&(W=new W(y,g+"enter",w,a,O),W.target=x,W.relatedTarget=Oe,N=W),Oe=N,z&&w)t:{for(W=eg,y=z,g=w,x=0,N=y;N;N=W(N))x++;N=0;for(var Z=g;Z;Z=W(Z))N++;for(;0<x-N;)y=W(y),x--;for(;0<N-x;)g=W(g),N--;for(;x--;){if(y===g||g!==null&&y===g.alternate){W=y;break t}y=W(y),g=W(g)}W=null}else W=null;z!==null&&vd(B,E,z,W,!1),w!==null&&Oe!==null&&vd(B,Oe,w,W,!0)}}e:{if(E=S?cn(S):window,z=E.nodeName&&E.nodeName.toLowerCase(),z==="select"||z==="input"&&E.type==="file")var be=Dc;else if(jc(E))if(Lc)be=fm;else{be=cm;var Y=sm}else z=E.nodeName,!z||z.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?S&&qu(S.elementType)&&(be=Dc):be=rm;if(be&&(be=be(e,S))){Bc(B,be,a,O);break e}Y&&Y(e,E,S),e==="focusout"&&S&&E.type==="number"&&S.memoizedProps.value!=null&&Lu(E,"number",E.value)}switch(Y=S?cn(S):window,e){case"focusin":(jc(Y)||Y.contentEditable==="true")&&(Cl=Y,Ju=S,yn=null);break;case"focusout":yn=Ju=Cl=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,Qc(B,a,O);break;case"selectionchange":if(pm)break;case"keydown":case"keyup":Qc(B,a,O)}var ne;if(Vu)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Ol?Hc(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(zc&&a.locale!=="ko"&&(Ol||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Ol&&(ne=Sc()):(Ea=O,ku="value"in Ea?Ea.value:Ea.textContent,Ol=!0)),Y=nu(S,pe),0<Y.length&&(pe=new Tc(pe,e,null,a,O),B.push({event:pe,listeners:Y}),ne?pe.data=ne:(ne=Nc(a),ne!==null&&(pe.data=ne)))),(ne=lm?nm(e,a):im(e,a))&&(pe=nu(S,"onBeforeInput"),0<pe.length&&(Y=new Tc("onBeforeInput","beforeinput",null,a,O),B.push({event:Y,listeners:pe}),Y.data=ne)),Im(B,e,S,a,O)}gd(B,t)})}function wn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function nu(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=rn(e,a),n!=null&&l.unshift(wn(e,n,i)),n=rn(e,t),n!=null&&l.push(wn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function eg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vd(e,t,a,l,n){for(var i=t._reactName,u=[];a!==null&&a!==l;){var o=a,p=o.alternate,S=o.stateNode;if(o=o.tag,p!==null&&p===l)break;o!==5&&o!==26&&o!==27||S===null||(p=S,n?(S=rn(a,i),S!=null&&u.unshift(wn(a,S,p))):n||(S=rn(a,i),S!=null&&u.push(wn(a,S,p)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var tg=/\r\n?/g,ag=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(tg,`
`).replace(ag,"")}function bd(e,t){return t=yd(t),yd(e)===t}function ze(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Tl(e,""+l);break;case"className":si(e,"class",l);break;case"tabIndex":si(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,a,l);break;case"style":yc(e,l,i);break;case"data":if(t!=="object"){si(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ri(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ze(e,t,"name",n.name,n,null),ze(e,t,"formEncType",n.formEncType,n,null),ze(e,t,"formMethod",n.formMethod,n,null),ze(e,t,"formTarget",n.formTarget,n,null)):(ze(e,t,"encType",n.encType,n,null),ze(e,t,"method",n.method,n,null),ze(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ri(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=la);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ri(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":fe("beforetoggle",e),fe("toggle",e),oi(e,"popover",l);break;case"xlinkActuate":aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":aa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":aa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":aa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":aa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":oi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Np.get(a)||a,oi(e,a,l))}}function As(e,t,a,l,n,i){switch(a){case"style":yc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Tl(e,l):(typeof l=="number"||typeof l=="bigint")&&Tl(e,""+l);break;case"onScroll":l!=null&&fe("scroll",e);break;case"onScrollEnd":l!=null&&fe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[vt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):oi(e,a,l)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,i,u,a,null)}}n&&ze(e,t,"srcSet",a.srcSet,a,null),l&&ze(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var o=i=u=n=null,p=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var O=a[l];if(O!=null)switch(l){case"name":n=O;break;case"type":u=O;break;case"checked":p=O;break;case"defaultChecked":S=O;break;case"value":i=O;break;case"defaultValue":o=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:ze(e,t,l,O,a,null)}}mc(e,i,o,p,S,u,n,!1);return;case"select":fe("invalid",e),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:ze(e,t,n,o,a,null)}t=i,a=u,e.multiple=!!l,t!=null?El(e,!!l,t,!1):a!=null&&El(e,!!l,a,!0);return;case"textarea":fe("invalid",e),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:ze(e,t,u,o,a,null)}hc(e,l,n,i);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ze(e,t,p,l,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(l=0;l<Qn.length;l++)fe(Qn[l],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ze(e,t,S,l,a,null)}return;default:if(qu(t)){for(O in a)a.hasOwnProperty(O)&&(l=a[O],l!==void 0&&As(e,t,O,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&ze(e,t,o,l,a,null))}function lg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,p=null,S=null,O=null;for(z in a){var B=a[z];if(a.hasOwnProperty(z)&&B!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":p=B;default:l.hasOwnProperty(z)||ze(e,t,z,null,l,B)}}for(var E in l){var z=l[E];if(B=a[E],l.hasOwnProperty(E)&&(z!=null||B!=null))switch(E){case"type":i=z;break;case"name":n=z;break;case"checked":S=z;break;case"defaultChecked":O=z;break;case"value":u=z;break;case"defaultValue":o=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,t));break;default:z!==B&&ze(e,t,E,z,l,B)}}Du(e,u,o,p,S,O,i,n);return;case"select":z=u=o=E=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":z=p;default:l.hasOwnProperty(i)||ze(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":E=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==p&&ze(e,t,n,i,l,p)}t=o,a=u,l=z,E!=null?El(e,!!a,E,!1):!!l!=!!a&&(t!=null?El(e,!!a,t,!0):El(e,!!a,a?[]:"",!1));return;case"textarea":z=E=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ze(e,t,o,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":E=n;break;case"defaultValue":z=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&ze(e,t,u,n,l,i)}gc(e,E,z);return;case"option":for(var w in a)if(E=a[w],a.hasOwnProperty(w)&&E!=null&&!l.hasOwnProperty(w))switch(w){case"selected":e.selected=!1;break;default:ze(e,t,w,null,l,E)}for(p in l)if(E=l[p],z=a[p],l.hasOwnProperty(p)&&E!==z&&(E!=null||z!=null))switch(p){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:ze(e,t,p,E,l,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)E=a[W],a.hasOwnProperty(W)&&E!=null&&!l.hasOwnProperty(W)&&ze(e,t,W,null,l,E);for(S in l)if(E=l[S],z=a[S],l.hasOwnProperty(S)&&E!==z&&(E!=null||z!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(137,t));break;default:ze(e,t,S,E,l,z)}return;default:if(qu(t)){for(var Oe in a)E=a[Oe],a.hasOwnProperty(Oe)&&E!==void 0&&!l.hasOwnProperty(Oe)&&As(e,t,Oe,void 0,l,E);for(O in l)E=l[O],z=a[O],!l.hasOwnProperty(O)||E===z||E===void 0&&z===void 0||As(e,t,O,E,l,z);return}}for(var y in a)E=a[y],a.hasOwnProperty(y)&&E!=null&&!l.hasOwnProperty(y)&&ze(e,t,y,null,l,E);for(B in l)E=l[B],z=a[B],!l.hasOwnProperty(B)||E===z||E==null&&z==null||ze(e,t,B,E,l,z)}function xd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ng(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,u=n.initiatorType,o=n.duration;if(i&&o&&xd(u)){for(u=0,o=n.responseEnd,l+=1;l<a.length;l++){var p=a[l],S=p.startTime;if(S>o)break;var O=p.transferSize,B=p.initiatorType;O&&xd(B)&&(p=p.responseEnd,u+=O*(p<o?1:(o-S)/(p-S)))}if(--l,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Es=null,Ts=null;function iu(e){return e.nodeType===9?e:e.ownerDocument}function Sd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ad(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=null;function ig(){var e=window.event;return e&&e.type==="popstate"?e===zs?!1:(zs=e,!0):(zs=null,!1)}var Ed=typeof setTimeout=="function"?setTimeout:void 0,ug=typeof clearTimeout=="function"?clearTimeout:void 0,Td=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof Td<"u"?function(e){return Td.resolve(null).then(e).catch(sg)}:Ed;function sg(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Md(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),tn(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Yn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Yn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,o=i.nodeName;i[sn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&Yn(e.ownerDocument.body);a=n}while(a);tn(t)}function zd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Os(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Os(a),ju(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function cg(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[sn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=wt(e.nextSibling),e===null)break}return null}function rg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=wt(e.nextSibling),e===null))return null;return e}function Od(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wt(e.nextSibling),e===null))return null;return e}function Cs(e){return e.data==="$?"||e.data==="$~"}function Hs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fg(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ns=null;function Cd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return wt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Hd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Nd(e,t,a){switch(t=iu(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ju(e)}var Yt=new Map,jd=new Set;function uu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=q.d;q.d={f:dg,r:pg,D:mg,C:gg,L:hg,m:vg,X:bg,S:yg,M:xg};function dg(){var e=ba.f(),t=Fi();return e||t}function pg(e){var t=xl(e);t!==null&&t.tag===5&&t.type==="form"?Kr(t):ba.r(e)}var Wl=typeof document>"u"?null:document;function Bd(e,t,a){var l=Wl;if(l&&typeof t=="string"&&t){var n=_t(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),jd.has(n)||(jd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),rt(t,"link",e),tt(t),l.head.appendChild(t)))}}function mg(e){ba.D(e),Bd("dns-prefetch",e,null)}function gg(e,t){ba.C(e,t),Bd("preconnect",e,t)}function hg(e,t,a){ba.L(e,t,a);var l=Wl;if(l&&e&&t){var n='link[rel="preload"][as="'+_t(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+_t(a.imageSizes)+'"]')):n+='[href="'+_t(e)+'"]';var i=n;switch(t){case"style":i=$l(e);break;case"script":i=en(e)}Yt.has(i)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Vn(i))||t==="script"&&l.querySelector(Zn(i))||(t=l.createElement("link"),rt(t,"link",e),tt(t),l.head.appendChild(t)))}}function vg(e,t){ba.m(e,t);var a=Wl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=en(e)}if(!Yt.has(i)&&(e=b({rel:"modulepreload",href:e},t),Yt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zn(i)))return}l=a.createElement("link"),rt(l,"link",e),tt(l),a.head.appendChild(l)}}}function yg(e,t,a){ba.S(e,t,a);var l=Wl;if(l&&e){var n=Sl(l).hoistableStyles,i=$l(e);t=t||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(Vn(i)))o.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Yt.get(i))&&js(e,a);var p=u=l.createElement("link");tt(p),rt(p,"link",e),p._p=new Promise(function(S,O){p.onload=S,p.onerror=O}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ou(u,t,l)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function bg(e,t){ba.X(e,t);var a=Wl;if(a&&e){var l=Sl(a).hoistableScripts,n=en(e),i=l.get(n);i||(i=a.querySelector(Zn(n)),i||(e=b({src:e,async:!0},t),(t=Yt.get(n))&&Bs(e,t),i=a.createElement("script"),tt(i),rt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function xg(e,t){ba.M(e,t);var a=Wl;if(a&&e){var l=Sl(a).hoistableScripts,n=en(e),i=l.get(n);i||(i=a.querySelector(Zn(n)),i||(e=b({src:e,async:!0,type:"module"},t),(t=Yt.get(n))&&Bs(e,t),i=a.createElement("script"),tt(i),rt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Dd(e,t,a,l){var n=(n=ee.current)?uu(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=$l(a.href),a=Sl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$l(a.href);var i=Sl(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(Vn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),Yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Yt.set(e,a),i||Sg(n,e,a,u.state))),t&&l===null)throw Error(s(528,""));return u}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=en(a),a=Sl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $l(e){return'href="'+_t(e)+'"'}function Vn(e){return'link[rel="stylesheet"]['+e+"]"}function Ld(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Sg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),rt(t,"link",a),tt(t),e.head.appendChild(t))}function en(e){return'[src="'+_t(e)+'"]'}function Zn(e){return"script[async]"+e}function qd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return t.instance=l,tt(l),l;var n=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),tt(l),rt(l,"style",n),ou(l,a.precedence,e),t.instance=l;case"stylesheet":n=$l(a.href);var i=e.querySelector(Vn(n));if(i)return t.state.loading|=4,t.instance=i,tt(i),i;l=Ld(a),(n=Yt.get(n))&&js(l,n),i=(e.ownerDocument||e).createElement("link"),tt(i);var u=i;return u._p=new Promise(function(o,p){u.onload=o,u.onerror=p}),rt(i,"link",l),t.state.loading|=4,ou(i,a.precedence,e),t.instance=i;case"script":return i=en(a.src),(n=e.querySelector(Zn(i)))?(t.instance=n,tt(n),n):(l=a,(n=Yt.get(i))&&(l=b({},a),Bs(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),tt(n),rt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ou(l,a.precedence,e));return t.instance}function ou(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===t)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var su=null;function _d(e,t,a){if(su===null){var l=new Map,n=su=new Map;n.set(a,l)}else n=su,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[sn]||i[ut]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function Rd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Ag(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ud(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=$l(l.href),i=t.querySelector(Vn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=cu.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,tt(i);return}i=t.ownerDocument||t,l=Ld(l),(n=Yt.get(n))&&js(l,n),i=i.createElement("link"),tt(i);var u=i;u._p=new Promise(function(o,p){u.onload=o,u.onerror=p}),rt(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=cu.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ds=0;function Tg(e,t){return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ds===0&&(Ds=62500*ng());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ds?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ru=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ru=new Map,t.forEach(Mg,e),ru=null,cu.call(e))}function Mg(e,t){if(!(t.state.loading&4)){var a=ru.get(e);if(a)var l=a.get(null);else{a=new Map,ru.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=cu.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Kn={$$typeof:Se,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function zg(e,t,a,l,n,i,u,o,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ou(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.hiddenUpdates=Ou(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Gd(e,t,a,l,n,i,u,o,p,S,O,B){return e=new zg(e,t,a,u,p,S,O,B,o),t=1,i===!0&&(t|=24),i=Ht(3,null,null,t),e.current=i,i.stateNode=e,t=fo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},ho(i),e}function kd(e){return e?(e=jl,e):jl}function Pd(e,t,a,l,n,i){n=kd(n),l.context===null?l.context=n:l.pendingContext=n,l=Ha(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Na(e,l,t),a!==null&&(Et(a,e,t),Mn(a,e,t))}function Qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ls(e,t){Qd(e,t),(e=e.alternate)&&Qd(e,t)}function wd(e){if(e.tag===13||e.tag===31){var t=el(e,67108864);t!==null&&Et(t,e,67108864),Ls(e,67108864)}}function Yd(e){if(e.tag===13||e.tag===31){var t=Lt();t=Cu(t);var a=el(e,t);a!==null&&Et(a,e,t),Ls(e,t)}}var du=!0;function Og(e,t,a,l){var n=T.T;T.T=null;var i=q.p;try{q.p=2,qs(e,t,a,l)}finally{q.p=i,T.T=n}}function Cg(e,t,a,l){var n=T.T;T.T=null;var i=q.p;try{q.p=8,qs(e,t,a,l)}finally{q.p=i,T.T=n}}function qs(e,t,a,l){if(du){var n=_s(l);if(n===null)Ss(e,t,l,pu,a),Zd(e,l);else if(Ng(n,e,t,a,l))l.stopPropagation();else if(Zd(e,l),t&4&&-1<Hg.indexOf(e)){for(;n!==null;){var i=xl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ja(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var p=1<<31-ue(u);o.entanglements[1]|=p,u&=~p}Wt(i),(Ae&6)===0&&(Ji=lt()+500,Pn(0))}}break;case 31:case 13:o=el(i,2),o!==null&&Et(o,i,2),Fi(),Ls(i,2)}if(i=_s(l),i===null&&Ss(e,t,l,pu,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Ss(e,t,l,null,a)}}function _s(e){return e=Ru(e),Rs(e)}var pu=null;function Rs(e){if(pu=null,e=bl(e),e!==null){var t=A(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=j(t),e!==null)return e;e=null}else if(a===31){if(e=L(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pu=e,null}function Vd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nn()){case li:return 2;case ni:return 8;case vl:case D:return 32;case ie:return 268435456;default:return 32}default:return 32}}var Us=!1,Pa=null,Qa=null,wa=null,Xn=new Map,Jn=new Map,Ya=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zd(e,t){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function In(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=xl(t),t!==null&&wd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Ng(e,t,a,l,n){switch(t){case"focusin":return Pa=In(Pa,e,t,a,l,n),!0;case"dragenter":return Qa=In(Qa,e,t,a,l,n),!0;case"mouseover":return wa=In(wa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Xn.set(i,In(Xn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Jn.set(i,In(Jn.get(i)||null,e,t,a,l,n)),!0}return!1}function Kd(e){var t=bl(e.target);if(t!==null){var a=A(t);if(a!==null){if(t=a.tag,t===13){if(t=j(a),t!==null){e.blockedOn=t,uc(e.priority,function(){Yd(a)});return}}else if(t===31){if(t=L(a),t!==null){e.blockedOn=t,uc(e.priority,function(){Yd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=_s(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);_u=l,a.target.dispatchEvent(l),_u=null}else return t=xl(a),t!==null&&wd(t),e.blockedOn=a,!1;t.shift()}return!0}function Xd(e,t,a){mu(e)&&a.delete(t)}function jg(){Us=!1,Pa!==null&&mu(Pa)&&(Pa=null),Qa!==null&&mu(Qa)&&(Qa=null),wa!==null&&mu(wa)&&(wa=null),Xn.forEach(Xd),Jn.forEach(Xd)}function gu(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,jg)))}var hu=null;function Jd(e){hu!==e&&(hu=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){hu===e&&(hu=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Rs(l||a)===null)continue;break}var i=xl(a);i!==null&&(e.splice(t,3),t-=3,_o(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function tn(e){function t(p){return gu(p,e)}Pa!==null&&gu(Pa,e),Qa!==null&&gu(Qa,e),wa!==null&&gu(wa,e),Xn.forEach(t),Jn.forEach(t);for(var a=0;a<Ya.length;a++){var l=Ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Kd(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[vt]||null;if(typeof i=="function")u||Jd(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[vt]||null)o=u.formAction;else if(Rs(n)!==null)continue}else o=u.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),Jd(a)}}}function Id(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Gs(e){this._internalRoot=e}vu.prototype.render=Gs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=Lt();Pd(a,l,e,t,null,null)},vu.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pd(e.current,2,null,e,null,null),Fi(),t[yl]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ic();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ya.length&&t!==0&&t<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Kd(e)}};var Fd=r.version;if(Fd!=="19.2.8")throw Error(s(527,Fd,"19.2.8"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(t),e=e!==null?H(e):null,e=e===null?null:e.stateNode,e};var Bg={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Pe=yu.inject(Bg),je=yu}catch{}}return Wn.createRoot=function(e,t){if(!v(e))throw Error(s(299));var a=!1,l="",n=lf,i=nf,u=uf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Gd(e,1,!1,null,null,a,l,null,n,i,u,Id),e[yl]=t.current,xs(e),new Gs(t)},Wn.hydrateRoot=function(e,t,a){if(!v(e))throw Error(s(299));var l=!1,n="",i=lf,u=nf,o=uf,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Gd(e,1,!0,t,a??null,l,n,p,i,u,o,Id),t.context=kd(null),a=t.current,l=Lt(),l=Cu(l),n=Ha(l),n.callback=null,Na(a,n,l),a=l,t.current.lanes=a,on(t,a),Wt(t),e[yl]=t.current,xs(e),new vu(t)},Wn.version="19.2.8",Wn}var op;function Qg(){if(op)return Qs.exports;op=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),Qs.exports=Pg(),Qs.exports}var wg=Qg();const pl={QUEEN:{type:"QUEEN",name:"Queen Bee",emoji:"🐝",description:"Moves 1 space per turn. Must be placed by turn 4. Game ends when a Queen is surrounded.",count:1},SPIDER:{type:"SPIDER",name:"Spider",emoji:"🕷️",description:"Moves exactly 3 spaces around the swarm perimeter without backtracking.",count:2},BEETLE:{type:"BEETLE",name:"Beetle",emoji:"🪲",description:"Moves 1 space on ground or climbs on top of adjacent pieces to pin them.",count:2},GRASSHOPPER:{type:"GRASSHOPPER",name:"Grasshopper",emoji:"🦗",description:"Jumps in a straight line over connected pieces to the first empty space.",count:3},SOLDIER_ANT:{type:"SOLDIER_ANT",name:"Ant",emoji:"🐜",description:"Moves any distance around the perimeter of the swarm.",count:3},MOSQUITO:{type:"MOSQUITO",name:"Mosquito",emoji:"🦟",description:"Copies movement ability of any adjacent piece touching it (acts like Beetle on top of swarm).",count:1,isExpansion:!0},LADYBUG:{type:"LADYBUG",name:"Ladybug",emoji:"🐞",description:"Moves exactly 3 spaces: 2 spaces on top of the swarm and 1 space down.",count:1,isExpansion:!0},PILLBUG:{type:"PILLBUG",name:"Pillbug",emoji:"🪳",description:"Moves 1 space OR picks up an adjacent unstacked piece and moves it to another adjacent empty space.",count:1,isExpansion:!0}};function $(c,r){return`${c},${r}`}const sp={WELCOME:"tutorialWelcome",PLACE_QUEEN:"tutorialPlaceQueen",OPP_QUEEN:"tutorialOppQueen",PLACE_SPIDER:"tutorialPlaceSpider",OPP_SPIDER:"tutorialOppSpider",PLACE_BEETLE:"tutorialPlaceBeetle",OPP_BEETLE:"tutorialOppBeetle",PLACE_GRASSHOPPER:"tutorialPlaceGrasshopper",OPP_GRASSHOPPER:"tutorialOppGrasshopper",MOVE_EXAMPLE:"tutorialMoveExample",COMPLETE:"tutorialComplete"},fp=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function cp(c,r){const h=fp[(r%6+6)%6];return{q:c.q+h.q,r:c.r+h.r}}function _e(c){return fp.map(r=>({q:c.q+r.q,r:c.r+r.r}))}function $t(c,r){return c.q===r.q&&c.r===r.r}function dp(c,r){const h=_e(c),s=_e(r);return h.filter(v=>s.some(A=>$t(v,A)))}function Yg(c,r,h=42){const s=h*Math.sqrt(3)*(c+r/2),v=h*(3/2)*r;return{x:s,y:v}}function Vg(c,r,h=42){const s=[];for(let v=0;v<6;v++){const A=60*v-30,j=Math.PI/180*A,L=c+h*Math.cos(j),M=r+h*Math.sin(j);s.push(`${L.toFixed(2)},${M.toFixed(2)}`)}return s.join(" ")}function ml(c){const r=new Map;return c.forEach((h,s)=>{r.set(s,[...h])}),r}function ea(c,r){const h=c.get($(r.q,r.r));return!h||h.length===0?null:h[h.length-1]}function xa(c,r){const h=c.get($(r.q,r.r));return h?h.length:0}function ft(c,r){return xa(c,r)>0}function ei(c){const r=[];return c.forEach((h,s)=>{if(h.length>0){const[v,A]=s.split(",").map(Number);r.push({q:v,r:A})}}),r}function Za(c,r){for(const h of c.values())for(const s of h)if(s.player===r&&s.type==="QUEEN")return!0;return!1}function an(c,r){for(const[h,s]of c.entries())for(const v of s)if(v.player===r&&v.type==="QUEEN"){const[A,j]=h.split(",").map(Number);return{q:A,r:j}}return null}function Zg(c){const r=ei(c);if(r.length<=1)return!0;const h=new Set,s=[r[0]];for(h.add($(r[0].q,r[0].r));s.length>0;){const v=s.shift(),A=_e(v);for(const j of A){const L=$(j.q,j.r);ft(c,j)&&!h.has(L)&&(h.add(L),s.push(j))}}return h.size===r.length}function pp(c,r){const h=c.get($(r.q,r.r));if(!h||h.length===0)return!1;if(h.length>1)return!0;const s=ml(c);return s.delete($(r.q,r.r)),Zg(s)}function $n(c,r,h,s=0){const v=dp(r,h);if(v.length!==2)return!1;const A=xa(c,v[0]),j=xa(c,v[1]),L=Math.max(s,xa(c,r)-1,xa(c,h)),M=A>0&&A>=L,d=j>0&&j>=L;return!(M&&d)}function Eu(c,r,h,s=!0){if(ft(c,h)||!$n(c,r,h,0))return!1;const v=ml(c),A=v.get($(r.q,r.r));return A&&(A.length===1?v.delete($(r.q,r.r)):A.pop()),_e(h).some(M=>ft(v,M))}function Xs(c,r,h){const s=ei(c);if(s.length===0)return[{q:0,r:0}];if(s.length===1)return _e(s[0]);const v=new Set,A=[];for(const j of s)for(const L of _e(j))ft(c,L)||v.add($(L.q,L.r));for(const j of v){const[L,M]=j.split(",").map(Number),d={q:L,r:M},H=_e(d);let b=!1,R=!1;for(const k of H){const P=ea(c,k);P&&(P.player===r?b=!0:R=!0)}b&&!R&&A.push(d)}return A}function Js(c,r,h,s,v=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){if(!Za(c,h))return[];const j=c.get($(r.q,r.r));if(!j||j.length===0)return[];const L=j[j.length-1];if(L.player!==h)return[];if(L.id===v)return[];if(!pp(c,r))return[];const M=ec(c,r,L),d=new Set,H=ml(c),b=H.get($(r.q,r.r));b&&(b.length>1?b.pop():H.delete($(r.q,r.r)));for(const R of M){const k=Kg(c,r,R);for(const P of k)_e(P).some(U=>ft(H,U))&&d.add($(P.q,P.r))}return Array.from(d).map(R=>{const[k,P]=R.split(",").map(Number);return{q:k,r:P}})}function ec(c,r,h,s){if(h.type!=="MOSQUITO")return[h.type];if(xa(c,r)>1)return["BEETLE"];const A=new Set,j=_e(r);for(const L of j){const M=ea(c,L);M&&(M.type==="MOSQUITO"||A.add(M.type))}return A.size===0?[]:Array.from(A)}function Kg(c,r,h,s){switch(h){case"QUEEN":return mp(c,r);case"SPIDER":return Xg(c,r);case"BEETLE":return Jg(c,r);case"GRASSHOPPER":return Ig(c,r);case"SOLDIER_ANT":return Fg(c,r);case"LADYBUG":return Wg(c,r);case"PILLBUG":return $g(c,r);default:return[]}}function mp(c,r){return _e(r).filter(s=>Eu(c,r,s))}function Xg(c,r){const h=ml(c),s=h.get($(r.q,r.r));s&&(s.length===1?h.delete($(r.q,r.r)):s.pop());const v=new Set;function A(L,M,d){if(M===3){v.add($(L.q,L.r));return}const H=_e(L);for(const b of H){const R=$(b.q,b.r);if(!d.has(R)&&Eu(h,L,b)){const k=new Set(d);k.add(R),A(b,M+1,k)}}}const j=new Set([$(r.q,r.r)]);return A(r,0,j),Array.from(v).map(L=>{const[M,d]=L.split(",").map(Number);return{q:M,r:d}})}function Jg(c,r){const h=_e(r),s=[],v=xa(c,r);for(const A of h)xa(c,A)>=1||v>1?$n(c,r,A)&&s.push(A):Eu(c,r,A)&&s.push(A);return s}function Ig(c,r){const h=[];for(let s=0;s<6;s++){let v=cp(r,s),A=0;for(;ft(c,v);)A++,v=cp(v,s);A>0&&h.push(v)}return h}function Fg(c,r){const h=ml(c),s=h.get($(r.q,r.r));s&&(s.length===1?h.delete($(r.q,r.r)):s.pop());const v=new Set([$(r.q,r.r)]),A=[r],j=new Set;for(;A.length>0;){const L=A.shift(),M=_e(L);for(const d of M){const H=$(d.q,d.r);v.has(H)||Eu(h,L,d)&&(v.add(H),j.add(H),A.push(d))}}return Array.from(j).map(L=>{const[M,d]=L.split(",").map(Number);return{q:M,r:d}})}function Wg(c,r){const h=new Set,s=_e(r).filter(v=>ft(c,v)&&$n(c,r,v));for(const v of s){const A=_e(v).filter(j=>!$t(j,r)&&ft(c,j)&&$n(c,v,j));for(const j of A){const L=_e(j).filter(M=>!$t(M,v)&&!ft(c,M)&&$n(c,j,M));for(const M of L)h.add($(M.q,M.r))}}return Array.from(h).map(v=>{const[A,j]=v.split(",").map(Number);return{q:A,r:j}})}function $g(c,r){return mp(c,r)}function Is(c,r,h,s=null){if(!Za(c,h))return[];const v=c.get($(r.q,r.r));if(!v||v.length===0)return[];if(v[v.length-1].id===s)return[];const j=_e(r),L=j.filter(d=>!ft(c,d));if(L.length===0)return[];const M=[];for(const d of j)if(ft(c,d)){const H=c.get($(d.q,d.r));if(H.length===1){const b=H[0];if(b.id===s||!pp(c,d))continue;const R=L.filter(k=>{const P=dp(d,k).filter(F=>!$t(F,r));return!(P.length>0&&P.every(F=>xa(c,F)>=2))});R.length>0&&M.push({targetHex:d,piece:b,destinationHexes:R})}}return M}function xu(c,r,h,s,v=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){const j=[],L=Za(c,r),M=Xs(c,r);if(s>=4&&!L){const d=h.find(H=>H.type==="QUEEN");if(d)for(const H of M)j.push({type:"PLACE",pieceId:d.id,bugType:"QUEEN",player:r,toHex:H});return j}if(M.length>0&&h.length>0){const d=new Set,H=new Map;for(const b of h)d.has(b.type)||(d.add(b.type),H.set(b.type,b));for(const[b,R]of H.entries())for(const k of M)j.push({type:"PLACE",pieceId:R.id,bugType:b,player:r,toHex:k})}if(L){const d=ei(c);for(const H of d){const b=ea(c,H);if(b&&b.player===r){const R=Js(c,H,r,s,v,A);for(const P of R)j.push({type:"MOVE",pieceId:b.id,bugType:b.type,player:r,fromHex:H,toHex:P});if(ec(c,H,b).includes("PILLBUG")){const P=Is(c,H,r,v);for(const U of P)for(const F of U.destinationHexes)j.push({type:"PILLBUG_SPECIAL",pieceId:b.id,bugType:b.type,player:r,fromHex:H,pillbugTargetHex:U.targetHex,toHex:F})}}}}return j}function ti(c){const r=an(c,1),h=an(c,2);let s=0,v=0;r&&(s=_e(r).filter(M=>ft(c,M)).length),h&&(v=_e(h).filter(M=>ft(c,M)).length);const A=s===6,j=v===6;return A&&j?{isGameOver:!0,winner:"DRAW",p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}:A?{isGameOver:!0,winner:2,p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}:j?{isGameOver:!0,winner:1,p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}:{isGameOver:!1,winner:null,p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}}function eh(c,r,h,s,v,A,j,L=null,M={mosquito:!0,ladybug:!0,pillbug:!0}){const d=xu(c,r,h,v,L,M);if(d.length===0)return null;if(!Za(c,r)&&v>=3){const H=d.filter(b=>b.bugType==="QUEEN");if(H.length>0)return H[Math.floor(Math.random()*H.length)]}return j==="EASY"?th(c,r,d,v):j==="MEDIUM"?ah(c,r,h,s,v,A,d):lh(c,r,h,s,v,A,d,L,M)}function th(c,r,h,s){if(!Za(c,r)&&s>=3){const A=h.filter(j=>j.bugType==="QUEEN");if(A.length>0)return A[Math.floor(Math.random()*A.length)]}const v=h.filter(A=>A.type==="PLACE");return v.length>0&&Math.random()<.7?v[Math.floor(Math.random()*v.length)]:h[Math.floor(Math.random()*h.length)]}function ah(c,r,h,s,v,A,j,L,M){let d=-1/0,H=[];for(const b of j){const{nextBoard:R,nextAIReserve:k,nextHumanReserve:P}=Su(c,b,r,h,s);let U=ih(R,r,k,P,v,A);b.type==="PLACE"&&h.length>2?U+=150:b.type==="PLACE"&&h.length>0&&(U+=60),U>d+1e-9?(d=U,H=[b]):Math.abs(U-d)<=1e-9&&H.push(b)}return H[Math.floor(Math.random()*H.length)]}function lh(c,r,h,s,v,A,j,L,M){let b=-1/0,R=1/0,k=-1/0,P=j[0];for(const U of j){const{nextBoard:F,nextAIReserve:X,nextHumanReserve:ve}=Su(c,U,r,h,s),Se=ti(F);if(Se.isGameOver){if(Se.winner===r)return U;continue}const Ne=bu(F,1,b,R,!1,r,1,X,ve,v+1,A,Fs(c,U),M);Ne>k&&(k=Ne,P=U),b=Math.max(b,k)}return P}function bu(c,r,h,s,v,A,j,L,M,d,H,b,R){const k=ti(c);if(k.isGameOver)return k.winner===A?1e4:k.winner===j?-1e4:0;if(r===0)return nh(c,A,L,M,d,H);const X=xu(c,v?A:j,v?L:M,v?d:H,b,R);if(X.length===0)return bu(c,r-1,h,s,!v,A,j,L,M,v?d+1:d,v?H:H+1,b,R);if(v){let ve=-1/0;for(const Se of X){const{nextBoard:Ne,nextAIReserve:Be,nextHumanReserve:Re}=Su(c,Se,A,L,M),J=bu(Ne,r-1,h,s,!1,A,j,Be,Re,d+1,H,Fs(c,Se),R);if(ve=Math.max(ve,J),h=Math.max(h,J),s<=h)break}return ve}else{let ve=1/0;for(const Se of X){const{nextBoard:Ne,nextAIReserve:Be,nextHumanReserve:Re}=Su(c,Se,j,L,M),J=bu(Ne,r-1,h,s,!0,A,j,Be,Re,d,H+1,Fs(c,Se),R);if(ve=Math.min(ve,J),s=Math.min(s,J),s<=h)break}return ve}}function nh(c,r,h,s,v,A,j){const M=ti(c);if(M.isGameOver)return M.winner===r?1e4:M.winner===1?-1e4:0;const d=an(c,r),H=an(c,1);let b=0;if(H){const k=_e(H),P=k.filter(F=>{var X;return((X=ea(c,F))==null?void 0:X.player)===r}).length,U=k.filter(F=>ft(c,F)).length;b+=P*220,b+=(U-P)*50,U>=3&&(b+=100),U>=4&&(b+=200),U===5&&(b+=500)}else b+=A>=3?30:10;if(d){const k=_e(d),P=k.filter(X=>{var ve;return((ve=ea(c,X))==null?void 0:ve.player)===1}).length,U=k.filter(X=>ft(c,X)).length,F=U-P;b-=P*180,U>=4&&(b-=250),U===5&&(b-=400),b+=F*15}else b-=v>=3?60:15;b+=h.length*20,b-=s.length*20;const R=ei(c);for(const k of R){const P=c.get($(k.q,k.r));if(P.length>1){const U=P[P.length-1],F=P[P.length-2];U.player===r&&F.player===1?(b+=80,F.type==="QUEEN"&&(b+=200)):U.player===1&&F.player===r&&(b-=90,F.type==="QUEEN"&&(b-=250))}}return b}function ih(c,r,h,s,v,A,j){const M=ti(c);if(M.isGameOver)return M.winner===r?1e4:M.winner===1?-1e4:0;const d=an(c,r),H=an(c,1);let b=0;if(H){const k=_e(H),P=k.filter(F=>{var X;return((X=ea(c,F))==null?void 0:X.player)===r}).length,U=k.filter(F=>ft(c,F)).length;b+=P*180,b+=(U-P)*35,U===5&&(b+=350)}else b+=A>=3?25:8;if(d){const k=_e(d),P=k.filter(X=>{var ve;return((ve=ea(c,X))==null?void 0:ve.player)===1}).length,U=k.filter(X=>ft(c,X)).length,F=U-P;b-=P*150,U===5&&(b-=350),b+=F*12}else b-=v>=3?50:12;b+=h.length*18,b-=s.length*18;const R=ei(c);for(const k of R){const P=c.get($(k.q,k.r));if(P.length>1){const U=P[P.length-1],F=P[P.length-2];U.player===r&&F.player===1?(b+=60,F.type==="QUEEN"&&(b+=150)):U.player===1&&F.player===r&&(b-=70,F.type==="QUEEN"&&(b-=200))}}return b}function Fs(c,r){var h;return r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex?((h=ea(c,r.pillbugTargetHex))==null?void 0:h.id)??r.pieceId:r.pieceId}function Su(c,r,h,s,v){const A=ml(c);let j=s,L=v;if(r.type==="PLACE"){s.some(b=>b.id===r.pieceId)?j=s.filter(b=>b.id!==r.pieceId):L=v.filter(b=>b.id!==r.pieceId);const M={id:r.pieceId,type:r.bugType,player:h},d=$(r.toHex.q,r.toHex.r),H=A.get(d)||[];A.set(d,[...H,M])}else if(r.type==="MOVE"){if(r.fromHex){const M=$(r.fromHex.q,r.fromHex.r),d=A.get(M)||[],H=d.pop();if(d.length===0&&A.delete(M),H){const b=$(r.toHex.q,r.toHex.r),R=A.get(b)||[];A.set(b,[...R,H])}}}else if(r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex){const M=$(r.pillbugTargetHex.q,r.pillbugTargetHex.r),d=A.get(M)||[],H=d.pop();if(d.length===0&&A.delete(M),H){const b=$(r.toHex.q,r.toHex.r),R=A.get(b)||[];A.set(b,[...R,H])}}return{nextBoard:A,nextAIReserve:j,nextHumanReserve:L}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oh=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,h,s)=>s?s.toUpperCase():h.toLowerCase()),rp=c=>{const r=oh(c);return r.charAt(0).toUpperCase()+r.slice(1)},gp=(...c)=>c.filter((r,h,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===h).join(" ").trim(),sh=c=>{for(const r in c)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ch={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=K.forwardRef(({color:c="currentColor",size:r=24,strokeWidth:h=2,absoluteStrokeWidth:s,className:v="",children:A,iconNode:j,...L},M)=>K.createElement("svg",{ref:M,...ch,width:r,height:r,stroke:c,strokeWidth:s?Number(h)*24/Number(r):h,className:gp("lucide",v),...!A&&!sh(L)&&{"aria-hidden":"true"},...L},[...j.map(([d,H])=>K.createElement(d,H)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(c,r)=>{const h=K.forwardRef(({className:s,...v},A)=>K.createElement(rh,{ref:A,iconNode:r,className:gp(`lucide-${uh(rp(c))}`,`lucide-${c}`,s),...v}));return h.displayName=rp(c),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],dh=Ge("book-open",fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],mh=Ge("bot",ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hh=Ge("check",gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],yh=Ge("chevron-down",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],xh=Ge("chevron-up",bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],hp=Ge("circle-alert",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],vp=Ge("code-xml",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Th=Ge("copy",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],zh=Ge("download",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Ws=Ge("graduation-cap",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Hh=Ge("history",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],jh=Ge("maximize-2",Nh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Dh=Ge("move",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],qh=Ge("play",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Rh=Ge("refresh-cw",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Gh=Ge("rotate-ccw",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ph=Ge("settings",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],wh=Ge("skip-forward",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Vh=Ge("sparkles",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Kh=Ge("trophy",Zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Jh=Ge("users",Xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],yp=Ge("x",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Wh=Ge("zoom-in",Fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],ev=Ge("zoom-out",$h),tv={appTitle:{en:"BUGZ",es:"BUGZ",pt:"BUGZ",fr:"BUGZ",de:"BUGZ",ja:"BUGZ",zh:"BUGZ"},appSubtitle:{en:"Strategy",es:"Estrategia",pt:"Estratégia",fr:"Stratégie",de:"Strategie",ja:"ストラテジー",zh:"战略"},vsAi:{en:"VS AI ({diff})",es:"VS IA ({diff})",pt:"VS IA ({diff})",fr:"VS IA ({diff})",de:"Gegen KI ({diff})",ja:"AIと対戦 ({diff})",zh:"对战AI（{diff}）"},passAndPlay:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},aiThinking:{en:"AI Thinking...",es:"IA pensando…",pt:"IA pensando…",fr:"L’IA réfléchit…",de:"KI denkt…",ja:"AI思考中…",zh:"AI思考中…"},playersTurn:{en:"Player {n}'s Turn ({color})",es:"Turno del Jugador {n} ({color})",pt:"Vez do Jogador {n} ({color})",fr:"Tour du Joueur {n} ({color})",de:"Spieler {n} am Zug ({color})",ja:"プレイヤー{n}の番（{color}）",zh:"玩家{n}的回合（{color}）"},white:{en:"White",es:"Blanco",pt:"Branco",fr:"Blanc",de:"Weiß",ja:"白",zh:"白"},black:{en:"Black",es:"Negro",pt:"Preto",fr:"Noir",de:"Schwarz",ja:"黒",zh:"黑"},undoTitle:{en:"Undo Move (Unlimited Step Rewind)",es:"Deshacer movimiento (rebobinado ilimitado)",pt:"Desfazer movimento (rebobinar ilimitado)",fr:"Annuler le coup (retour illimité)",de:"Zug rückgängig (unbegrenztes Zurückspulen)",ja:"手を戻す（無制限リプレイ）",zh:"撤销一步（无限回退）"},newGameTitle:{en:"New Game / Match Settings",es:"Nueva partida / Configuración",pt:"Nova partida / Configurações",fr:"Nouvelle partie / Paramètres",de:"Neues Spiel / Einstellungen",ja:"新規ゲーム / 設定",zh:"新游戏 / 设置"},kotlinTitle:{en:"View & Export Android Kotlin Compose Code",es:"Ver y exportar el código Kotlin Compose",pt:"Ver e exportar o código Kotlin Compose",fr:"Voir et exporter le code Kotlin Compose",de:"Kotlin-Compose-Code ansehen & exportieren",ja:"Kotlin Composeコードの表示と出力",zh:"查看并导出Kotlin Compose代码"},kotlinSource:{en:"Kotlin Source",es:"Código Kotlin",pt:"Código Kotlin",fr:"Code Kotlin",de:"Kotlin-Quellcode",ja:"Kotlinソース",zh:"Kotlin源码"},toastForcedPass:{en:"Player {n} has no legal moves available. Turn passed!",es:"El Jugador {n} no tiene movimientos legales. ¡Turno pasado!",pt:"O Jogador {n} não tem movimentos legais. Turno passado!",fr:"Le Joueur {n} n’a aucun coup légal. Tour passé !",de:"Spieler {n} hat keine legalen Züge. Zug übersprungen!",ja:"プレイヤー{n}は合法手がありません。パスしました！",zh:"玩家{n}没有合法走法。跳过回合！"},toastAiPass:{en:"AI (Player 2) has no valid moves. Turn passed!",es:"La IA (Jugador 2) no tiene movimientos válidos. ¡Turno pasado!",pt:"A IA (Jogador 2) não tem movimentos válidos. Turno passado!",fr:"L’IA (Joueur 2) n’a aucun coup valide. Tour passé !",de:"Die KI (Spieler 2) hat keine gültigen Züge. Zug übersprungen!",ja:"AI（プレイヤー2）は有効な手がありません。パスしました！",zh:"AI（玩家2）没有有效走法。跳过回合！"},passLogDesc:{en:"Player {n} was forced to pass turn.",es:"El Jugador {n} se vio obligado a pasar.",pt:"O Jogador {n} foi obrigado a passar.",fr:"Le Joueur {n} a été forcé de passer.",de:"Spieler {n} musste den Zug aussetzen.",ja:"プレイヤー{n}はパスを余儀なくされました。",zh:"玩家{n}被迫跳过回合。"},placedDesc:{en:"Placed {bug} at ({q}, {r})",es:"Colocó {bug} en ({q}, {r})",pt:"Colocou {bug} em ({q}, {r})",fr:"A placé {bug} en ({q}, {r})",de:"{bug} bei ({q}, {r}) platziert",ja:"{bug} を ({q}, {r}) に配置",zh:"将{bug}放置在({q}, {r})"},movedDesc:{en:"Moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"Movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"Moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"A déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"{bug} von ({q1}, {r1}) nach ({q2}, {r2}) bewegt",ja:"{bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"将{bug}从({q1}, {r1})移动到({q2}, {r2})"},pillbugMovedDesc:{en:"Pillbug moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"La cochinilla movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"A bicho-bola moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"Le cloporte a déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"Assel bewegt {bug} von ({q1}, {r1}) nach ({q2}, {r2})",ja:"ダンゴムシが {bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"潮虫将{bug}从({q1}, {r1})移动到({q2}, {r2})"},zoomIn:{en:"Zoom In",es:"Acercar",pt:"Aproximar",fr:"Zoom avant",de:"Vergrößern",ja:"拡大",zh:"放大"},zoomOut:{en:"Zoom Out",es:"Alejar",pt:"Afastar",fr:"Zoom arrière",de:"Verkleinern",ja:"縮小",zh:"缩小"},recenter:{en:"Recenter Board",es:"Centrar tablero",pt:"Centralizar tabuleiro",fr:"Recentrer le plateau",de:"Brett zentrieren",ja:"盤面を中央に",zh:"居中棋盘"},panHint:{en:"Drag canvas to pan • Scroll to zoom",es:"Arrastra para mover • Rueda para zoom",pt:"Arraste para mover • Role para zoom",fr:"Faites glisser pour déplacer • Molette pour zoomer",de:"Ziehen zum Verschieben • Scrollen zum Zoomen",ja:"ドラッグで移動 • スクロールでズーム",zh:"拖动画布平移 • 滚动缩放"},setupSubtitle:{en:"Configure your match mode, AI strength, and expansion pieces.",es:"Configura el modo de partida, la fuerza de la IA y las piezas de expansión.",pt:"Configure o modo de partida, a força da IA e as peças de expansão.",fr:"Configurez le mode de partie, la force de l’IA et les pièces d’extension.",de:"Konfiguriere Spielmodus, KI-Stärke und Erweiterungspieces.",ja:"対戦モード、AIの強さ、拡張ピースを設定します。",zh:"设置对战模式、AI强度和扩展棋子。"},gameModeLabel:{en:"Game Mode",es:"Modo de juego",pt:"Modo de jogo",fr:"Mode de jeu",de:"Spielmodus",ja:"ゲームモード",zh:"游戏模式"},passPlayBtn:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},vsAiBtn:{en:"VS AI Engine",es:"VS Motor IA",pt:"VS Motor IA",fr:"VS Moteur IA",de:"Gegen KI-Engine",ja:"AIエンジンと対戦",zh:"对战AI引擎"},aiDifficultyLabel:{en:"AI Difficulty",es:"Dificultad de la IA",pt:"Dificuldade da IA",fr:"Difficulté de l’IA",de:"KI-Schwierigkeit",ja:"AIの難易度",zh:"AI难度"},easyBtn:{en:"Easy",es:"Fácil",pt:"Fácil",fr:"Facile",de:"Leicht",ja:"かんたん",zh:"简单"},mediumBtn:{en:"Medium",es:"Medio",pt:"Médio",fr:"Moyen",de:"Mittel",ja:"ふつう",zh:"中等"},hardBtn:{en:"Hard (Minimax)",es:"Difícil (Minimax)",pt:"Difícil (Minimax)",fr:"Difficile (Minimax)",de:"Schwer (Minimax)",ja:"むずかしい（Minimax）",zh:"困难（Minimax）"},expansionsLabel:{en:"Expansions",es:"Expansiones",pt:"Expansões",fr:"Extensions",de:"Erweiterungen",ja:"拡張",zh:"扩展"},mosquitoLabel:{en:"🦟 The Mosquito",es:"🦟 El mosquito",pt:"🦟 O pernilongo",fr:"🦟 Le moustique",de:"🦟 Die Mücke",ja:"🦟 蚊",zh:"🦟 蚊子"},ladybugLabel:{en:"🐞 The Ladybug",es:"🐞 La mariquita",pt:"🐞 A joaninha",fr:"🐞 La coccinelle",de:"🐞 Der Marienkäfer",ja:"🐞 テントウムシ",zh:"🐞 瓢虫"},pillbugLabel:{en:"💊 The Pillbug",es:"💊 La cochinilla",pt:"💊 O bicho-bola",fr:"💊 Le cloporte",de:"💊 Die Assel",ja:"💊 ダンゴムシ",zh:"💊 潮虫"},cancel:{en:"Cancel",es:"Cancelar",pt:"Cancelar",fr:"Annuler",de:"Abbrechen",ja:"キャンセル",zh:"取消"},startGame:{en:"Start Game",es:"Comenzar",pt:"Começar",fr:"Commencer",de:"Start",ja:"開始",zh:"开始游戏"},learnToPlay:{en:"Learn to Play",es:"Aprende a jugar",pt:"Aprenda a jogar",fr:"Apprendre à jouer",de:"Lernen zu spielen",ja:"遊び方を学ぶ",zh:"学习玩法"},playerLabel:{en:"Player {n} ({color})",es:"Jugador {n} ({color})",pt:"Jogador {n} ({color})",fr:"Joueur {n} ({color})",de:"Spieler {n} ({color})",ja:"プレイヤー{n}（{color}）",zh:"玩家{n}（{color}）"},reserveCount:{en:"Reserve ({n})",es:"Reserva ({n})",pt:"Reserva ({n})",fr:"Réserve ({n})",de:"Reserve ({n})",ja:"リザーブ（{n}）",zh:"后备（{n}）"},turn4Warning:{en:"Turn 4 Mandatory: You MUST place your Queen Bee!",es:"Turno 4 obligatorio: ¡Debes colocar tu abeja reina!",pt:"Turno 4 obrigatório: Você DEVE colocar sua abelha rainha!",fr:"Tour 4 obligatoire : vous DEVEZ placer votre reine !",de:"Pflichtzug 4: Du MUSST deine Bienenkönigin platzieren!",ja:"4手目必須: 女王バチを配置しなければなりません！",zh:"第4回合强制：你必须放置蜂后！"},moveHistory:{en:"Move History ({n})",es:"Historial de movimientos ({n})",pt:"Histórico de movimentos ({n})",fr:"Historique des coups ({n})",de:"Zugverlauf ({n})",ja:"手番履歴（{n}）",zh:"走法历史（{n}）"},noMoves:{en:"No moves recorded yet.",es:"Aún no hay movimientos.",pt:"Nenhum movimento registrado ainda.",fr:"Aucun coup enregistré pour l’instant.",de:"Noch keine Züge aufgezeichnet.",ja:"まだ手は記録されていません。",zh:"暂无走法记录。"},drawTitle:{en:"🤝 Mutual Draw!",es:"🤝 ¡Empate mutuo!",pt:"🤝 Empate mútuo!",fr:"🤝 Égalité mutuelle !",de:"🤝 Unentschieden!",ja:"🤝 引き分け！",zh:"🤝 平局！"},p1WinTitle:{en:"🎉 Player 1 Wins!",es:"🎉 ¡Gana el Jugador 1!",pt:"🎉 O Jogador 1 venceu!",fr:"🎉 Le Joueur 1 gagne !",de:"🎉 Spieler 1 gewinnt!",ja:"🎉 プレイヤー1の勝利！",zh:"🎉 玩家1获胜！"},p2WinTitle:{en:"🎉 Player 2 Wins!",es:"🎉 ¡Gana el Jugador 2!",pt:"🎉 O Jogador 2 venceu!",fr:"🎉 Le Joueur 2 gagne !",de:"🎉 Spieler 2 gewinnt!",ja:"🎉 プレイヤー2の勝利！",zh:"🎉 玩家2获胜！"},drawDesc:{en:"Both Queen Bees were completely surrounded simultaneously!",es:"¡Ambas abejas reinas quedaron completamente rodeadas a la vez!",pt:"As duas abelhas rainhas foram completamente cercadas ao mesmo tempo!",fr:"Les deux reines ont été entièrement encerclées en même temps !",de:"Beide Bienenköniginnen wurden gleichzeitig vollständig eingekreist!",ja:"両方の女王バチが同時に完全に囲まれました！",zh:"两只蜂后同时被完全围住！"},winDesc:{en:"The opposing Queen Bee has been completely surrounded on all 6 sides!",es:"¡La abeja reina rival quedó completamente rodeada por los 6 lados!",pt:"A abelha rainha adversária foi completamente cercada nos 6 lados!",fr:"La reine adverse a été entièrement encerclée sur ses 6 côtés !",de:"Die gegnerische Bienenkönigin wurde auf allen 6 Seiten vollständig eingekreist!",ja:"相手の女王バチが6方向すべてを囲まれました！",zh:"对手的蜂后已被六面全部围住！"},playAgain:{en:"Play Again",es:"Jugar de nuevo",pt:"Jogar de novo",fr:"Rejouer",de:"Nochmal spielen",ja:"もう一度プレイ",zh:"再来一局"},matchOptions:{en:"Match Options / Difficulty",es:"Opciones / Dificultad",pt:"Opções / Dificuldade",fr:"Options / Difficulté",de:"Optionen / Schwierigkeit",ja:"対戦設定 / 難易度",zh:"对局选项 / 难度"},rulesTitle:{en:"How to Play Bugz",es:"Cómo jugar a Bugz",pt:"Como jogar Bugz",fr:"Comment jouer à Bugz",de:"So spielst du Bugz",ja:"Bugzの遊び方",zh:"如何玩Bugz"},close:{en:"Close",es:"Cerrar",pt:"Fechar",fr:"Fermer",de:"Schließen",ja:"閉じる",zh:"关闭"},goalTitle:{en:"🎯 Goal:",es:"🎯 Objetivo:",pt:"🎯 Objetivo:",fr:"🎯 Objectif :",de:"🎯 Ziel:",ja:"🎯 目的:",zh:"🎯 目标："},goalDesc:{en:"Surround the opponent's Queen Bee with pieces on all six sides. First to do so wins; both surrounded at once is a draw.",es:"Rodea la abeja reina del rival con piezas por los seis lados. El primero en lograrlo gana; si ambas quedan rodeadas a la vez, es empate.",pt:"Cerque a abelha rainha do oponente com peças em todos os seis lados. Quem conseguir primeiro vence; se ambas forem cercadas ao mesmo tempo, empata.",fr:"Encerclez la reine adverse avec des pièces sur les six côtés. Le premier à y parvenir gagne ; si les deux sont encerclées à la fois, c’est une égalité.",de:"Umschließe die Bienenkönigin des Gegners auf allen sechs Seiten. Wer das zuerst schafft, gewinnt; sind beide gleichzeitig eingekreist, ist es ein Unentschieden.",ja:"相手の女王バチの6方向すべてを自分の駒で囲みましょう。先に囲んだ方が勝ち。同時なら引き分けです。",zh:"用棋子将对手的蜂后六面围住。先完成者获胜；同时围住则为平局。"},coreRulesTitle:{en:"📜 Core Rules",es:"📜 Reglas básicas",pt:"📜 Regras básicas",fr:"📜 Règles de base",de:"📜 Grundregeln",ja:"📜 基本ルール",zh:"📜 基本规则"},coreRule1:{en:"Play one piece per turn (placement) or move one of your pieces.",es:"Coloca una pieza por turno o mueve una de tus piezas.",pt:"Jogue uma peça por turno (colocação) ou mova uma de suas peças.",fr:"Jouez une pièce par tour (placement) ou déplacez une de vos pièces.",de:"Setze pro Zug eine Kachel (Platzierung) oder bewege eine deiner Kacheln.",ja:"毎ターン1枚配置するか、自分の駒を1つ動かします。",zh:"每回合放置一枚棋子，或移动自己的一枚棋子。"},coreRule2:{en:"Your Queen Bee must be introduced by your 4th turn.",es:"Debes introducir tu abeja reina en tu 4º turno.",pt:"Sua abelha rainha deve ser introduzida até o seu 4º turno.",fr:"Votre reine doit être introduite avant votre 4e tour.",de:"Deine Bienenkönigin muss bis zu deinem 4. Zug eingeführt werden.",ja:"女王バチは4手目までに配置しなければなりません。",zh:"蜂后必须在你的第4回合之前上场。"},coreRule3:{en:"Your first piece is placed anywhere; later pieces must be placed adjacent to one of your pieces. Except for your second placement, pieces may not be placed touching an opponent's piece.",es:"Tu primera pieza se coloca en cualquier lugar; las siguientes deben ir adyacentes a una de tus piezas. Salvo la segunda colocación, no puedes colocar piezas tocando piezas del rival.",pt:"Sua primeira peça pode ser colocada em qualquer lugar; as seguintes devem ficar adjacentes a uma de suas peças. Exceto a segunda colocação, as peças não podem tocar peças do oponente.",fr:"Votre première pièce est placée n’importe où ; les suivantes doivent être adjacentes à une de vos pièces. Sauf pour la deuxième pose, vous ne pouvez pas poser une pièce touchant une pièce adverse.",de:"Deine erste Kachel platzierst du überall; spätere müssen an eine deiner Kacheln angrenzen. Außer bei deiner zweiten Platzierung dürfen Kacheln nicht gegnerische Kacheln berühren.",ja:"最初の1枚はどこにでも置けます。以降は自分の駒に隣接して置きます。2枚目の配置以外は、相手の駒に接する配置はできません。",zh:"第一枚棋子可放在任意位置；之后的棋子必须与自己的棋子相邻。除第二次放置外，棋子不能与对手棋子接触。"},coreRule4:{en:"The swarm must always stay connected. You may never move a piece that would split the Swarm, and you may not move a piece into a gap unless it still fits the freedom-to-move rule (no squeezing between stacked pieces).",es:"El enjambre debe permanecer siempre conectado. Nunca muevas una pieza que dividiría el enjambre, ni la metas en un hueco si no respeta la regla de libertad de movimiento (sin apretujones entre piezas apiladas).",pt:"O enxame deve permanecer sempre conectado. Nunca mova uma peça que dividiria o enxame, nem mova para um vão sem respeitar a regra de liberdade de movimento (sem apertar entre peças empilhadas).",fr:"L’essaim doit toujours rester connecté. Vous ne pouvez jamais déplacer une pièce qui diviserait l’essaim, ni la glisser dans un espace étroit (pas de glissement entre pièces empilées).",de:"Der Schwarm muss immer verbunden bleiben. Du darfst nie eine Kachel ziehen, die den Schwarm spaltet, und nicht in eine Lücke ziehen, es sei denn, es gilt die Bewegungsfreiheitsregel (kein Durchquetschen zwischen gestapelten Kacheln).",ja:"ハイブは常に繋がっていなければなりません。盤面を分断する動きはできず、積み上げた駒の隙間に入り込む動きも禁止です。",zh:"蜂群必须始终保持连通。不得移动会分裂蜂群的棋子，也不得将棋子挤入过窄的缝隙（不得在堆叠棋子之间挤入）。"},insectTitle:{en:"🦗 Insect Movements",es:"🦗 Movimientos de los insectos",pt:"🦗 Movimentos dos insetos",fr:"🦗 Déplacements des insectes",de:"🦗 Bewegungen der Insekten",ja:"🦗 昆虫の動き",zh:"🦗 昆虫的走法"},insectQueen:{en:"moves exactly 1 hex per turn.",es:"se mueve exactamente 1 hexágono por turno.",pt:"move exatamente 1 hexágono por turno.",fr:"se déplace d’exactement 1 hexagone par tour.",de:"zieht genau 1 Feld pro Zug.",ja:"毎ターンちょうど1マス移動します。",zh:"每回合恰好移动1格。"},insectSpider:{en:"crawls exactly 3 hexes along the outside edge, never retracing.",es:"se arrastra exactamente 3 hexágonos por el borde exterior, sin retroceder.",pt:"rasteja exatamente 3 hexágonos pela borda externa, sem retroceder.",fr:"se déplace d’exactement 3 hexagones le long du bord, sans jamais revenir en arrière.",de:"kriecht genau 3 Felder entlang der Außenkante, nie rückwärts.",ja:"外周に沿ってちょうど3マス移動し、後戻りはできません。",zh:"沿外围恰好爬行3格，不得折返。"},insectBeetle:{en:"moves 1 hex and can climb on top of other pieces (including a Queen) to block them; a beetle on top moves like a beetle over the stack.",es:"se mueve 1 hexágono y puede subir sobre otras piezas (incluida la reina) para bloquearlas; uno arriba se mueve como un escarabajo sobre la pila.",pt:"move 1 hexágono e pode subir sobre outras peças (inclusive a rainha) para bloqueá-las; um besouro no topo move-se como besouro sobre a pilha.",fr:"se déplace d’1 hexagone et peut grimper sur d’autres pièces (y compris la reine) pour les bloquer ; un scarabée en haut se déplace par-dessus la pile.",de:"zieht 1 Feld und kann auf andere Kacheln (auch die Königin) klettern, um sie zu blockieren; ein Käfer oben zieht über den Stapel.",ja:"1マス移動し、他の駒（女王バチを含む）の上に登って封鎖できます。上に乗ったカブトムシはスタックの上を移動します。",zh:"移动1格，可爬上其他棋子（包括蜂后）将其封锁；上方的甲虫可沿堆叠移动。"},insectGrasshopper:{en:"jumps in a straight line over at least one piece, landing on the first empty hex in that line.",es:"salta en línea recta sobre al menos una pieza y aterriza en el primer hexágono vacío de esa línea.",pt:"salta em linha reta sobre pelo menos uma peça, pousando no primeiro hexágono vazio da linha.",fr:"saute en ligne droite par-dessus au moins une pièce et atterrit sur le premier hexagone vide de la ligne.",de:"springt in einer geraden Linie über mindestens eine Kachel und landet auf dem ersten leeren Feld dieser Linie.",ja:"一直線に少なくとも1つの駒を飛び越え、その線上で最初の空きマスに着地します。",zh:"沿直线跳过至少一枚棋子，落在该线路上第一个空格。"},insectAnt:{en:"may slide any number of hexes along the outside of the Swarm.",es:"puede deslizarse cualquier cantidad de hexágonos por el exterior del enjambre.",pt:"pode deslizar qualquer número de hexágonos pela parte externa do enxame.",fr:"peut glisser d’un nombre quelconque d’hexagones le long de l’extérieur de l’essaim.",de:"kann beliebig viele Felder entlang der Außenseite des Schwarms gleiten.",ja:"ハイブの外周に沿って好きなだけ滑るように移動できます。",zh:"可沿蜂群外部滑动任意数量的格子。"},insectMosquito:{en:"copies the movement (or pillbug ability) of any piece it touches.",es:"copia el movimiento (o la habilidad de la cochinilla) de cualquier pieza que toque.",pt:"copia o movimento (ou a habilidade do bicho-bola) de qualquer peça que toque.",fr:"copie le déplacement (ou l’aptitude du cloporte) de toute pièce qu’il touche.",de:"kopiert die Bewegung (oder Assel-Fähigkeit) jeder Kachel, die es berührt.",ja:"接触している駒の移動（またはダンゴムシの能力）をコピーします。",zh:"复制与之接触的任何棋子的走法（或潮虫能力）。"},insectLadybug:{en:"moves exactly 2 hexes on top of the Swarm, then 1 hex back down to the board (may land on empty board hexes).",es:"se mueve exactamente 2 hexágonos sobre el enjambre y luego 1 hexágono hacia abajo al tablero (puede aterrizar en hexágonos vacíos).",pt:"move exatamente 2 hexágonos sobre o enxame e depois 1 hexágono de volta ao tabuleiro (pode pousar em hexágonos vazios).",fr:"se déplace d’exactement 2 hexagones par-dessus l’essaim, puis redescend d’1 hexagone sur le plateau (peut atterrir sur des cases vides).",de:"zieht genau 2 Felder über dem Schwarm und dann 1 Feld zurück auf das Brett (darf auf leere Felder landen).",ja:"ハイブの上をちょうど2マス移動し、その後1マス盤面に降ります（空きマスに着地可）。",zh:"在蜂群上方恰好移动2格，然后向下1格落回棋盘（可落在空棋盘格上）。"},insectPillbug:{en:"moves 1 space like the Queen Bee, or may pick up an adjacent unstacked piece (friend or foe) and place it in any empty space adjacent to it. The moved piece is stunned and cannot move on the opponent’s next turn.",es:"se mueve 1 espacio como la Abeja Reina, o puede levantar una pieza adyacente apilada (aliada o enemiga) y colocarla en cualquier espacio vacío adyacente. La pieza movida queda aturdida y no puede moverse en el siguiente turno del rival.",pt:"move-se 1 espaço como a Abelha Rainha, ou pode levantar uma peça adjacente não empilhada (aliada ou inimiga) e colocá-la em qualquer espaço vazio adjacente. A peça movida fica atordoada e não pode se mover no próximo turno do oponente.",fr:"se déplace de 1 case comme la Reine, ou peut soulever une pièce adjacente non empilée (alliée ou ennemie) et la placer dans n’importe quelle case vide adjacente. La pièce déplacée est étourdie et ne peut pas bouger au tour suivant de l’adversaire.",de:"zieht 1 Feld wie die Bienenkönigin oder darf eine benachbarte, nicht gestapelte Kachel (Feind oder Freund) aufheben und auf ein beliebiges benachbartes leeres Feld setzen. Die bewegte Kachel ist benommen und kann im nächsten Zug des Gegners nicht ziehen.",ja:"女王蜂のように1マス動くか、隣接する未スタックの駒（敵味方どちらでも）を持ち上げて、隣接する任意の空きマスに置けます。動かされた駒はスタンし、相手の次のターンは動けません。",zh:"像蜂后一样移动1格，或可拿起相邻未堆叠的棋子（敌我均可）放到其相邻的任意空位。被移动的棋子陷入眩晕，对手下一回合不能移动。"},codeTitle:{en:"Single-File Android Source Code",es:"Código fuente Android de un solo archivo",pt:"Código-fonte Android em arquivo único",fr:"Code source Android en un seul fichier",de:"Android-Quellcode in einer Datei",ja:"単一ファイルのAndroidソースコード",zh:"单文件Android源代码"},codeBadge:{en:"BugzApp.kt (Jetpack Compose)",es:"BugzApp.kt (Jetpack Compose)",pt:"BugzApp.kt (Jetpack Compose)",fr:"BugzApp.kt (Jetpack Compose)",de:"BugzApp.kt (Jetpack Compose)",ja:"BugzApp.kt (Jetpack Compose)",zh:"BugzApp.kt (Jetpack Compose)"},codeDesc:{en:"Complete Kotlin application logic, Compose canvas, AI minimax, and game loop.",es:"Lógica completa de la app en Kotlin, lienzo Compose, minimax de IA y bucle de juego.",pt:"Lógica completa do app em Kotlin, canvas Compose, minimax da IA e loop do jogo.",fr:"Logique complète de l’app en Kotlin, canevas Compose, minimax IA et boucle de jeu.",de:"Vollständige Kotlin-App-Logik, Compose-Canvas, KI-Minimax und Spielschleife.",ja:"完全なKotlinアプリロジック、Composeキャンバス、AIミニマックス、ゲームループ。",zh:"完整的Kotlin应用逻辑、Compose画布、AI极小化极大和游戏循环。"},copied:{en:"Copied!",es:"¡Copiado!",pt:"Copiado!",fr:"Copié !",de:"Kopiert!",ja:"コピーしました！",zh:"已复制！"},copyCode:{en:"Copy Code",es:"Copiar código",pt:"Copiar código",fr:"Copier le code",de:"Code kopieren",ja:"コードをコピー",zh:"复制代码"},downloadKt:{en:"Download .kt",es:"Descargar .kt",pt:"Baixar .kt",fr:"Télécharger .kt",de:".kt herunterladen",ja:".ktをダウンロード",zh:"下载.kt"},tutorialMode:{en:"🎓 Tutorial",es:"🎓 Tutorial",pt:"🎓 Tutorial",fr:"🎓 Tutoriel",de:"🎓 Tutorial",ja:"🎓 チュートリアル",zh:"🎓 教程"},tutorialWelcome:{en:"Welcome! This tutorial will teach you how to play Bugz. You'll learn placement, movement, and winning. Tap Next to begin!",es:"¡Bienvenido! Este tutorial te enseñará a jugar Bugz. Aprenderás colocación, movimiento y victoria. ¡Toca Siguiente para empezar!",pt:"Bem-vindo! Este tutorial vai te ensinar a jogar Bugz. Você vai aprender colocação, movimento e vitória. Toque em Próximo para começar!",fr:"Bienvenue ! Ce tutoriel vous apprendra à jouer à Bugz. Vous apprendrez le placement, le déplacement et la victoire. Appuyez sur Suivant !",de:"Willkommen! Dieses Tutorial bringt dir Bugz bei. Du lernst Platzierung, Bewegung und Sieg. Tippe auf Weiter!",ja:"ようこそ！このチュートリアルでBugzの遊び方を学びましょう。配置、移動、勝利条件を学びます。「次へ」をタップ！",zh:"欢迎！本教程将教你如何玩Bugz。你将学习放置、移动和获胜条件。点击「下一步」开始！"},tutorialNext:{en:"Next",es:"Siguiente",pt:"Próximo",fr:"Suivant",de:"Weiter",ja:"次へ",zh:"下一步"},tutorialSkip:{en:"Skip Tutorial",es:"Saltar tutorial",pt:"Pular tutorial",fr:"Passer le tutoriel",de:"Tutorial überspringen",ja:"チュートリアルをスキップ",zh:"跳过教程"},tutorialStepLabel:{en:"Step {n}:",es:"Paso {n}:",pt:"Passo {n}:",fr:"Étape {n} :",de:"Schritt {n}:",ja:"ステップ{n}:",zh:"第{n}步："},tutorialPlaceQueen:{en:"Tap the 🐝 Queen Bee in your reserve below, then tap any hex on the board to place her.",es:"Toca la 🐝 abeja reina en tu reserva abajo, luego toca cualquier hexágono para colocarla.",pt:"Toque na 🐝 abelha rainha na sua reserva abaixo, depois toque em qualquer hexágono para colocá-la.",fr:"Appuyez sur la 🐝 reine dans votre réserve ci-dessous, puis sur un hexagone pour la placer.",de:"Tippe auf die 🐝 Bienenkönigin in deiner Reserve unten, dann auf ein beliebiges Feld zum Platzieren.",ja:"下のリザーブから🐝女王バチをタップし、盤面のマスをタップして配置しましょう。",zh:"点击下方后备中的🐝蜂后，然后点击棋盘上的任意格子放置她。"},tutorialOppQueen:{en:"⏳ Opponent is placing their Queen Bee…",es:"⏳ El oponente está colocando su abeja reina…",pt:"⏳ O oponente está colocando a abelha rainha…",fr:"⏳ L'adversaire place sa reine…",de:"⏳ Gegner platziert seine Bienenkönigin…",ja:"⏳ 相手が女王バチを配置中…",zh:"⏳ 对手正在放置蜂后…"},tutorialPlaceSpider:{en:"Tap the 🕷️ Spider in your reserve, then tap a highlighted hex to place it. Spiders move exactly 3 spaces around the edge.",es:"Toca la 🕷️ araña en tu reserva, luego toca un hexágono resaltado para colocarla. Las arañas se mueven exactamente 3 espacios por el borde.",pt:"Toque na 🕷️ aranha na sua reserva, depois toque em um hexágono destacado para colocá-la. Aranhas se movem exatamente 3 espaços pela borda.",fr:"Appuyez sur l'🕷️ araignée dans votre réserve, puis sur un hexagone en surbrillance. Les araignées se déplacent d'exactement 3 cases sur le bord.",de:"Tippe auf die 🕷️ Spinne in deiner Reserve, dann auf ein hervorgehobenes Feld. Spinnen bewegen sich genau 3 Felder am Rand.",ja:"リザーブから🕷️クモをタップし、ハイライトされたマスに配置しましょう。クモは外周に沿って3マス移動します。",zh:"点击后备中的🕷️蜘蛛，然后点击高亮格子放置。蜘蛛沿外周恰好移动3格。"},tutorialOppSpider:{en:"⏳ Opponent is placing a Spider…",es:"⏳ El oponente está colocando una araña…",pt:"⏳ O oponente está colocando uma aranha…",fr:"⏳ L'adversaire place une araignée…",de:"⏳ Gegner platziert eine Spinne…",ja:"⏳ 相手がクモを配置中…",zh:"⏳ 对手正在放置蜘蛛…"},tutorialPlaceBeetle:{en:"Tap the 🪲 Beetle in your reserve, then tap a highlighted hex to place it. Beetles move 1 space and can climb on top of other pieces!",es:"Toca el 🪲 escarabajo en tu reserva, luego toca un hexágono resaltado para colocarlo. ¡Los escarabajos se mueven 1 espacio y pueden subir encima de otras piezas!",pt:"Toque no 🪲 besouro na sua reserva, depois toque em um hexágono destacado para colocá-lo. Os besouros se movem 1 espaço e podem subir em cima de outras peças!",fr:"Appuyez sur le 🪲 scarabée dans votre réserve, puis sur un hexagone en surbrillance. Les scarabées se déplacent d'1 case et peuvent grimper sur d'autres pièces !",de:"Tippe auf den 🪲 Käfer in deiner Reserve, dann auf ein hervorgehobenes Feld. Käfer bewegen sich 1 Feld und können auf andere Kacheln klettern!",ja:"リザーブから🪲カブトムシをタップし、ハイライトされたマスに配置しましょう。カブトムシは1マス移動し、他の駒の上に登れます！",zh:"点击后备中的🪲甲虫，然后点击高亮格子放置。甲虫移动1格，还能爬到其他棋子上面！"},tutorialOppBeetle:{en:"⏳ Opponent is placing a Beetle…",es:"⏳ El oponente está colocando un escarabajo…",pt:"⏳ O oponente está colocando um besouro…",fr:"⏳ L'adversaire place un scarabée…",de:"⏳ Gegner platziert einen Käfer…",ja:"⏳ 相手がカブトムシを配置中…",zh:"⏳ 对手正在放置甲虫…"},tutorialPlaceGrasshopper:{en:"Tap the 🦗 Grasshopper in your reserve, then tap a highlighted hex to place it. Grasshoppers jump in a straight line over pieces!",es:"Toca el 🦗 saltamontes en tu reserva, luego toca un hexágono resaltado para colocarlo. ¡Los saltamontes saltan en línea recta sobre las piezas!",pt:"Toque no 🦗 gafanhoto na sua reserva, depois toque em um hexágono destacado para colocá-lo. Gafanhotos pulam em linha reta sobre as peças!",fr:"Appuyez sur la 🦗 sauterelle dans votre réserve, puis sur un hexagone en surbrillance. Les sauterelles sautent en ligne droite par-dessus les pièces !",de:"Tippe auf den 🦗 Grashüpfer in deiner Reserve, dann auf ein hervorgehobenes Feld. Grashüpfer springen in gerader Linie über Kacheln!",ja:"リザーブから🦗バッタをタップし、ハイライトされたマスに配置しましょう。バッタは一直線に駒を飛び越えます！",zh:"点击后备中的🦗蚱蜢，然后点击高亮格子放置。蚱蜢沿直线跳过棋子！"},tutorialOppGrasshopper:{en:"⏳ Opponent is placing a Grasshopper…",es:"⏳ El oponente está colocando un saltamontes…",pt:"⏳ O oponente está colocando um gafanhoto…",fr:"⏳ L'adversaire place une sauterelle…",de:"⏳ Gegner platziert einen Grashüpfer…",ja:"⏳ 相手がバッタを配置中…",zh:"⏳ 对手正在放置蚱蜢…"},tutorialMoveExample:{en:"Now try moving! Tap one of your pieces on the board, then tap a highlighted hex to move it.",es:"¡Ahora intenta mover! Toca una de tus piezas en el tablero, luego toca un hexágono resaltado para moverla.",pt:"Agora tente mover! Toque em uma de suas peças no tabuleiro, depois toque em um hexágono destacado para movê-la.",fr:"Essayez de déplacer ! Appuyez sur une de vos pièces sur le plateau, puis sur un hexagone en surbrillance pour la déplacer.",de:"Versuche jetzt zu ziehen! Tippe auf eine deiner Kacheln auf dem Brett, dann auf ein hervorgehobenes Feld zum Bewegen.",ja:"移動してみましょう！盤面の自分の駒をタップし、ハイライトされたマスをタップして移動します。",zh:"现在试试移动！点击棋盘上你的棋子，然后点击高亮格子来移动它。"},tutorialComplete:{en:"🎉 Tutorial complete! You've learned the basics — placement, movement, and the goal. Keep playing to discover more strategies. Have fun!",es:"🎉 ¡Tutorial completo! Has aprendido lo básico — colocación, movimiento y el objetivo. Sigue jugando para descubrir más estrategias. ¡Diviértete!",pt:"🎉 Tutorial completo! Você aprendeu o básico — colocação, movimento e o objetivo. Continue jogando para descobrir mais estratégias. Divirta-se!",fr:"🎉 Tutoriel terminé ! Vous avez appris les bases — placement, déplacement et objectif. Continuez à jouer pour découvrir plus de stratégies. Amusez-vous !",de:"🎉 Tutorial abgeschlossen! Du hast die Grundlagen gelernt — Platzierung, Bewegung und Ziel. Spiele weiter, um mehr Strategien zu entdecken. Viel Spaß!",ja:"🎉 チュートリアル完了！基本を学びました — 配置、移動、目的。もっと戦略を見つけるために遊び続けましょう。楽しんで！",zh:"🎉 教程完成！你已经学会了基本操作——放置、移动和目标。继续游玩以探索更多策略。祝你玩得开心！"},tutorialGotIt:{en:"Got It — New Game",es:"Entendido — Nueva partida",pt:"Entendi — Nova partida",fr:"Compris — Nouvelle partie",de:"Verstanden — Neues Spiel",ja:"わかりました — 新規ゲーム",zh:"知道了 — 新游戏"}},Au=["en","es","pt","fr","de","ja","zh"],av={en:"English",es:"Español",pt:"Português",fr:"Français",de:"Deutsch",ja:"日本語",zh:"中文"},bp="bugz-lang-v1";function lv(){try{const c=localStorage.getItem(bp);if(c&&Au.includes(c))return c}catch{}return nv()}function nv(){try{const c=typeof navigator<"u"?navigator.languages??[navigator.language]:[];for(const r of c){const h=r.toLowerCase().replace(/_/g,"-");if(Au.includes(h))return h;const s=h.split("-")[0];if(Au.includes(s))return s}}catch{}return"en"}const xp=K.createContext({lang:"en",setLang:()=>{},t:c=>String(c)}),iv=({children:c})=>{const[r,h]=K.useState(()=>lv());K.useEffect(()=>{try{localStorage.setItem(bp,r)}catch{}},[r]);const s=(v,A)=>{const j=tv[v],L=j?j[r]??j.en:String(v);return A?L.replace(/\{(\w+)\}/g,(M,d)=>A[d]!==void 0?String(A[d]):`{${d}}`):L};return f.jsx(xp.Provider,{value:{lang:r,setLang:h,t:s},children:c})};function Sa(){return K.useContext(xp)}const uv=({className:c=""})=>{const{lang:r,setLang:h}=Sa();return f.jsx("select",{value:r,onChange:s=>h(s.target.value),"aria-label":"Language",className:`rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-slate-200 transition-colors hover:bg-slate-700 cursor-pointer ${c}`,children:Au.map(s=>f.jsx("option",{value:s,children:av[s]},s))})},ov=({board:c,selectedHex:r,validDestinations:h,pillbugTargetHex:s,pillbugDestinations:v,onSelectHex:A,onSelectDestination:j,onSelectPillbugTarget:L,currentPlayer:M,isAITurn:d,lastMovedHex:H})=>{const{t:b}=Sa(),R=K.useRef(null),[k,P]=K.useState(1),[U,F]=K.useState({x:0,y:0}),[X,ve]=K.useState(!1),[Se,Ne]=K.useState({x:0,y:0}),Be=42,Re=()=>{F({x:0,y:0}),P(1)},J=Q=>{Q.preventDefault();const Ce=Q.deltaY<0?1.1:.9;P(T=>Math.min(Math.max(T*Ce,.4),2.5))},ke=Q=>{Q.button===0&&(ve(!0),Ne({x:Q.clientX-U.x,y:Q.clientY-U.y}))},Ke=Q=>{X&&F({x:Q.clientX-Se.x,y:Q.clientY-Se.y})},dt=()=>{ve(!1)},ht=Array.from(c.keys()).map(Q=>{const[Ce,T]=Q.split(",").map(Number);return{q:Ce,r:T}}),ye=new Map;for(const Q of ht){const Ce=$(Q.q,Q.r);ye.set(Ce,Q);for(const T of _e(Q)){const q=$(T.q,T.r);ye.has(q)||ye.set(q,T)}}if(ye.size===0){const Q={q:0,r:0};ye.set($(0,0),Q);for(const Ce of _e(Q))ye.set($(Ce.q,Ce.r),Ce)}for(const Q of h)ye.set($(Q.q,Q.r),Q);for(const Q of v)ye.set($(Q.q,Q.r),Q);const Tt=Array.from(ye.values());return f.jsxs("div",{ref:R,className:"relative w-full h-full bg-slate-900 overflow-hidden select-none cursor-grab active:cursor-grabbing border border-slate-800 rounded-2xl shadow-inner",onWheel:J,onMouseDown:ke,onMouseMove:Ke,onMouseUp:dt,onMouseLeave:dt,children:[f.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-2 rounded-xl shadow-lg",children:[f.jsx("button",{onClick:()=>P(Q=>Math.min(Q*1.2,2.5)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:b("zoomIn"),children:f.jsx(Wh,{className:"w-5 h-5"})}),f.jsx("button",{onClick:()=>P(Q=>Math.max(Q/1.2,.4)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:b("zoomOut"),children:f.jsx(ev,{className:"w-5 h-5"})}),f.jsx("button",{onClick:Re,className:"p-2 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-lg transition-colors",title:b("recenter"),children:f.jsx(jh,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"absolute top-4 left-4 z-10 pointer-events-none bg-slate-950/60 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 flex items-center gap-2",children:[f.jsx(Dh,{className:"w-3.5 h-3.5 text-amber-400 animate-pulse"}),f.jsx("span",{children:b("panHint")})]}),f.jsx("svg",{className:"w-full h-full pointer-events-auto",style:{touchAction:"none"},children:f.jsxs("g",{transform:`translate(${R.current?R.current.clientWidth/2+U.x:U.x}, ${R.current?R.current.clientHeight/2+U.y:U.y}) scale(${k})`,children:[f.jsxs("defs",{children:[f.jsxs("radialGradient",{id:"p1Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),f.jsx("stop",{offset:"100%",stopColor:"#f1f5f9"})]}),f.jsxs("radialGradient",{id:"p2Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#334155"}),f.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),f.jsxs("radialGradient",{id:"validGrad",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.8"})]}),f.jsxs("filter",{id:"glowGold",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[f.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),f.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),Tt.map(Q=>{const Ce=$(Q.q,Q.r),{x:T,y:q}=Yg(Q.q,Q.r,Be),V=c.get(Ce)||[],ce=V.length>0,le=ce?V[V.length-1]:null,m=V.length,C=r&&$t(r,Q),_=h.some(zt=>$t(zt,Q)),G=s&&$t(s,Q),I=v.some(zt=>$t(zt,Q)),ee=(H==null?void 0:H.to)&&$t(H.to,Q),oe=Vg(T,q,Be-2);let De="none",ge="#334155",Mt=1.5;return ce&&le?le.player===1?(De="url(#p1Gradient)",ge="#e2e8f0"):(De="url(#p2Gradient)",ge="#475569"):(_||I)&&(De="rgba(16, 185, 129, 0.15)",ge="#10b981",Mt=2.5),C?(ge="#f59e0b",Mt=4):G?(ge="#ec4899",Mt=3.5):ee&&(ge="#3b82f6",Mt=3),f.jsxs("g",{className:"transition-all duration-200 cursor-pointer group",onClick:zt=>{zt.stopPropagation(),!d&&(I&&j||_&&j?j(Q):ce&&(s&&L&&$t(s,Q)?L(Q):A(Q)))},children:[f.jsx("polygon",{points:oe,fill:De,stroke:ge,strokeWidth:Mt,className:`${_||I?"animate-pulse hover:fill-emerald-500/30":""} ${C?"filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]":""}`}),(_||I)&&f.jsx("circle",{cx:T,cy:q,r:14,fill:"#10b981",className:"animate-ping opacity-75"}),ce&&le&&f.jsxs(f.Fragment,{children:[f.jsx("text",{x:T,y:q+8,textAnchor:"middle",fontSize:26,className:"pointer-events-none select-none drop-shadow",children:pl[le.type].emoji}),m>1&&f.jsxs("g",{transform:`translate(${T+14}, ${q-18})`,children:[f.jsx("circle",{r:10,fill:"#f59e0b",stroke:"#1e293b",strokeWidth:1.5}),f.jsx("text",{x:0,y:3.5,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:"#0f172a",children:m})]}),f.jsx("circle",{cx:T-16,cy:q-16,r:6,fill:le.player===1?"#ffffff":"#0f172a",stroke:le.player===1?"#cbd5e1":"#64748b",strokeWidth:1.5})]}),!ce&&(_||I)&&f.jsx("circle",{cx:T,cy:q,r:7,fill:"#10b981"}),f.jsxs("text",{x:T,y:q+(ce?28:4),textAnchor:"middle",fontSize:8,fill:"#64748b",className:"opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:[Q.q,",",Q.r]})]},Ce)})]})})]})},Zs=({player:c,reserve:r,isActive:h,selectedBugType:s,onSelectBugType:v,turnCount:A,queenPlaced:j})=>{const{t:L}=Sa(),M=new Map;for(const H of r){const b=M.get(H.type)||[];b.push(H),M.set(H.type,b)}const d=A===4&&!j;return f.jsxs("div",{className:`p-4 rounded-2xl border transition-all duration-300 ${h?c===1?"bg-slate-800/90 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]":"bg-slate-900/90 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]":"bg-slate-900/50 border-slate-800/80 opacity-70"}`,children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full border ${c===1?"bg-white border-slate-300":"bg-slate-950 border-slate-600"}`}),f.jsx("h3",{className:"font-bold text-sm text-slate-100",children:L("playerLabel",{n:c,color:L(c===1?"white":"black")})})]}),f.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:L("reserveCount",{n:r.length})})]}),d&&h&&f.jsxs("div",{className:"mb-3 p-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-300 text-xs flex items-center gap-1.5 animate-bounce",children:[f.jsx(hp,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:L("turn4Warning")})]}),f.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-4 gap-2",children:Array.from(M.entries()).map(([H,b])=>{const R=pl[H],k=b.length,P=s===H,U=!h||k===0||d&&H!=="QUEEN";return f.jsxs("button",{onClick:()=>!U&&v(H),disabled:U,title:`${R.name}: ${R.description}`,className:`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${P?"bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-md":U?"bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-40 cursor-not-allowed":"bg-slate-800/60 border-slate-700/80 hover:bg-slate-700/80 text-slate-200 hover:border-slate-500 cursor-pointer"}`,children:[f.jsx("span",{className:"text-2xl mb-1 select-none",children:R.emoji}),f.jsx("span",{className:"text-[10px] font-semibold truncate max-w-full",children:R.name.split(" ")[0]}),f.jsxs("span",{className:`absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold border ${P?"bg-amber-500 text-slate-950 border-amber-300":"bg-slate-900 text-slate-300 border-slate-700"}`,children:["x",k]})]},H)})})]})},sv=({logs:c})=>{const{t:r}=Sa(),[h,s]=K.useState(!1);return f.jsxs("div",{className:"bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all",children:[f.jsxs("button",{onClick:()=>s(!h),className:"w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Hh,{className:"w-4 h-4 text-amber-400"}),f.jsx("span",{children:r("moveHistory",{n:c.length})})]}),h?f.jsx(yh,{className:"w-4 h-4"}):f.jsx(xh,{className:"w-4 h-4"})]}),h&&f.jsx("div",{className:"max-h-48 overflow-y-auto p-3 divide-y divide-slate-800/60 text-xs text-slate-400",children:c.length===0?f.jsx("p",{className:"text-center italic py-2 text-slate-500",children:r("noMoves")}):[...c].reverse().map((v,A)=>f.jsxs("div",{className:"py-1.5 flex items-start justify-between gap-2",children:[f.jsxs("span",{className:"font-mono text-[10px] text-slate-500",children:["T",v.turnNumber," P",v.player]}),f.jsx("span",{className:"text-slate-200 font-medium flex-1 text-right",children:v.description})]},A))})]})},cv=({isOpen:c,onClose:r})=>{const{t:h}=Sa();return c?f.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsx("h2",{className:"text-xl font-black text-slate-100",children:h("rulesTitle")}),f.jsx("button",{onClick:r,className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",title:h("close"),children:f.jsx(yp,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"px-6 py-5 overflow-y-auto space-y-4",children:[f.jsx("div",{children:f.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[f.jsx("span",{className:"font-bold text-amber-400",children:h("goalTitle")})," ",h("goalDesc")]})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("coreRulesTitle")}),f.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:["• ",h("coreRule1")]}),f.jsxs("li",{children:["• ",h("coreRule2")]}),f.jsxs("li",{children:["• ",h("coreRule3")]}),f.jsxs("li",{children:["• ",h("coreRule4")]})]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("insectTitle")}),f.jsxs("ul",{className:"space-y-2 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐝"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Queen Bee"})," — ",h("insectQueen")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🕷️"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Spider"})," — ",h("insectSpider")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪲"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Beetle"})," — ",h("insectBeetle")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦗"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Grasshopper"})," — ",h("insectGrasshopper")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐜"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Ant"})," — ",h("insectAnt")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦟"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Mosquito"})," — ",h("insectMosquito")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐞"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Ladybug"})," — ",h("insectLadybug")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪳"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Pillbug"})," — ",h("insectPillbug")]})]})]})]})]})}):null},rv=({isOpen:c,onStartGame:r,onClose:h,canCancel:s=!1})=>{const{t:v}=Sa(),[A,j]=K.useState("AI"),[L,M]=K.useState("MEDIUM"),[d,H]=K.useState(!1),[b,R]=K.useState({mosquito:!0,ladybug:!0,pillbug:!0}),[k,P]=K.useState(!1),U=()=>{d?H(!1):(H(!0),j("AI"),M("EASY"),R({mosquito:!1,ladybug:!1,pillbug:!1}))},F=X=>{j(X),X==="PASS_AND_PLAY"&&H(!1)};return c?f.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:[f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-1 flex items-center gap-2 px-6 pt-6",children:f.jsxs("span",{children:["🐝 ",v("appTitle")," ",v("appSubtitle")]})}),f.jsx("p",{className:"text-xs text-slate-400 mb-4 px-6",children:v("setupSubtitle")}),f.jsxs("div",{className:"overflow-y-auto px-6 pb-6 flex-1",children:[f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("gameModeLabel")}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("button",{onClick:()=>F("PASS_AND_PLAY"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="PASS_AND_PLAY"&&!d?"bg-amber-500/15 border-amber-400 text-amber-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(Jh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("passPlayBtn")})]}),f.jsxs("button",{onClick:()=>F("AI"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="AI"&&!d?"bg-blue-500/15 border-blue-400 text-blue-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(mh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("vsAiBtn")})]})]}),f.jsxs("button",{onClick:U,className:`w-full mt-3 p-2.5 rounded-2xl border flex items-center justify-center gap-2 transition-all ${d?"bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(Ws,{className:"w-5 h-5"}),f.jsx("span",{className:"text-xs font-bold",children:v("tutorialMode")})]})]}),A==="AI"&&!d&&f.jsxs("div",{className:"mb-6 animate-fade-in",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("aiDifficultyLabel")}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EASY","MEDIUM","HARD"].map(X=>f.jsx("button",{onClick:()=>M(X),className:`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${L===X?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:v(X==="EASY"?"easyBtn":X==="MEDIUM"?"mediumBtn":"hardBtn")},X))})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5",children:[f.jsx(Vh,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:v("expansionsLabel")})]}),f.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800",children:[f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsx("span",{children:v("mosquitoLabel")}),f.jsx("input",{type:"checkbox",checked:b.mosquito,disabled:d,onChange:X=>R({...b,mosquito:X.target.checked}),className:"w-4 h-4 accent-amber-500 rounded disabled:opacity-40"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsx("span",{children:v("ladybugLabel")}),f.jsx("input",{type:"checkbox",checked:b.ladybug,disabled:d,onChange:X=>R({...b,ladybug:X.target.checked}),className:"w-4 h-4 accent-amber-500 rounded disabled:opacity-40"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsx("span",{children:v("pillbugLabel")}),f.jsx("input",{type:"checkbox",checked:b.pillbug,disabled:d,onChange:X=>R({...b,pillbug:X.target.checked}),className:"w-4 h-4 accent-amber-500 rounded disabled:opacity-40"})]})]})]})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[s&&h&&f.jsx("button",{onClick:h,className:"flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("cancel")}),f.jsxs("button",{onClick:()=>r({mode:A,aiDifficulty:L,expansions:b,tutorialMode:d}),className:"flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(qh,{className:"w-4 h-4 fill-slate-950"}),f.jsx("span",{children:v("startGame")})]})]}),f.jsx("div",{className:"mt-4 flex justify-center",children:f.jsxs("button",{onClick:()=>P(!0),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800/60",children:[f.jsx(dh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:v("learnToPlay")})]})})]}),f.jsx(cv,{isOpen:k,onClose:()=>P(!1)})]}):null},fv=({isOpen:c,winner:r,onRestart:h,onNewGameSetup:s})=>{const{t:v}=Sa();return c?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4 text-amber-400",children:f.jsx(Kh,{className:"w-8 h-8"})}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-2",children:v(r==="DRAW"?"drawTitle":r===1?"p1WinTitle":"p2WinTitle")}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:v(r==="DRAW"?"drawDesc":"winDesc")}),f.jsxs("div",{className:"flex flex-col gap-2",children:[f.jsxs("button",{onClick:h,className:"w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Rh,{className:"w-4 h-4"}),f.jsx("span",{children:v("playAgain")})]}),f.jsx("button",{onClick:s,className:"w-full py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("matchOptions")})]})]})}):null},Ks=`package com.bugz.game

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
    SOLDIER_ANT("Ant", "🐜", 3),
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

    if (h1 >= maxAllowedHeight && h2 >= maxAllowedHeight) {
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

    // A piece moved by a Pillbug special action is stunned and may not move
    // on the opponent's immediately following turn.
    if (topPiece.id == lastMovedPieceId) return emptyList()

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

    // Official rule: the Pillbug cannot move a piece if the Pillbug itself was
    // moved in the most recent turn.
    val pillbugTop = stack.last()
    if (pillbugTop.id == lastMovedPieceId) return emptyList()

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

                // Official "Beetle gate" rule: the piece is lifted over the
                // Pillbug to reach its destination; a gate hex (a common
                // neighbor of the origin and destination other than the
                // Pillbug's own hex) with a stack height of 2+ blocks passage.
                val reachableDestinations = emptyAdjacentHexes.filter { destHex ->
                    val gateHexes = getCommonNeighbors(adjHex, destHex).filter { it != pillbugHex }
                    !gateHexes.any { getStackHeight(board, it) >= 2 }
                }

                if (reachableDestinations.isNotEmpty()) {
                    options.add(
                        PillbugTargetOption(
                            targetHex = adjHex,
                            piece = targetPiece,
                            destinationHexes = reachableDestinations
                        )
                    )
                }
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

    if (turnCountP >= 4 && !queenPlaced) {
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
                            label = { Text("White") },
                            modifier = Modifier.weight(1f)
                        )
                        FilterChip(
                            selected = humanColor == Player.TWO,
                            onClick = { humanColor = Player.TWO },
                            label = { Text("Black") },
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
                    "🐜 Ant — may slide any number of hexes along the outside of the swarm.",
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
                    "🪳 Pillbug — moves 1 space like the Queen Bee, or may pick up an adjacent " +
                        "unstacked piece (friend or foe) and place it in any empty space adjacent to it. " +
                        "The moved piece is stunned and cannot move on the opponent's next turn.",
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
`,dv=({isOpen:c,onClose:r})=>{const{t:h}=Sa(),[s,v]=K.useState(!1);if(!c)return null;const A=()=>{navigator.clipboard.writeText(Ks),v(!0),setTimeout(()=>v(!1),2e3)},j=()=>{const L=new Blob([Ks],{type:"text/plain;charset=utf-8"}),M=URL.createObjectURL(L),d=document.createElement("a");d.href=M,d.download="BugzApp.kt",document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(M)};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl",children:f.jsx(vp,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-slate-100 text-sm flex items-center gap-2",children:[f.jsx("span",{children:h("codeTitle")}),f.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",children:h("codeBadge")})]}),f.jsx("p",{className:"text-xs text-slate-400",children:h("codeDesc")})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:A,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors",children:[s?f.jsx(hh,{className:"w-4 h-4 text-emerald-400"}):f.jsx(Th,{className:"w-4 h-4"}),f.jsx("span",{children:h(s?"copied":"copyCode")})]}),f.jsxs("button",{onClick:j,className:"px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors",children:[f.jsx(zh,{className:"w-4 h-4"}),f.jsx("span",{children:h("downloadKt")})]}),f.jsx("button",{onClick:r,className:"p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors",children:f.jsx(yp,{className:"w-5 h-5"})})]})]}),f.jsx("div",{className:"flex-1 overflow-auto p-6 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300",children:f.jsx("pre",{className:"select-text whitespace-pre-wrap",children:Ks})})]})})};function pv(){return f.jsx(iv,{children:f.jsx(mv,{})})}function mv(){const{t:c}=Sa(),[r,h]=K.useState({mode:"AI",aiDifficulty:"MEDIUM",expansions:{mosquito:!0,ladybug:!0,pillbug:!0}}),[s,v]=K.useState(new Map),[A,j]=K.useState([]),[L,M]=K.useState([]),[d,H]=K.useState(1),[b,R]=K.useState(1),[k,P]=K.useState(1),[U,F]=K.useState(null),[X,ve]=K.useState(null),[Se,Ne]=K.useState([]),[Be,Re]=K.useState([]),[J,ke]=K.useState(null),[Ke,dt]=K.useState(null),[ht,ye]=K.useState([]),[Tt,Q]=K.useState(null),[Ce,T]=K.useState([]),[q,V]=K.useState([]),[ce,le]=K.useState(0),[m,C]=K.useState(!1),[_,G]=K.useState(null),I=K.useRef(0),[ee,oe]=K.useState(!0),[De,ge]=K.useState(!1),[Mt,zt]=K.useState(!1),[Qe,Ka]=K.useState("COMPLETE"),Vt=!!(r.tutorialMode&&Qe!=="COMPLETE"),gl=(D,ie)=>{const se=[];return Object.keys(pl).forEach(he=>{const Pe=pl[he];if(!Pe.isExpansion||he==="MOSQUITO"&&ie.mosquito||he==="LADYBUG"&&ie.ladybug||he==="PILLBUG"&&ie.pillbug)for(let je=0;je<Pe.count;je++)se.push({id:`p${D}_${he}_${je}`,type:he,player:D})}),se},hl=K.useCallback(D=>{h(D),v(new Map),j(gl(1,D.expansions)),M(gl(2,D.expansions)),H(1),R(1),P(1),F(null),ve(null),Ne([]),Re([]),ke(null),dt(null),ye([]),Q(null),T([]),V([]),le(0),C(!1),oe(!1),ge(!1),G(null),Ka(D.tutorialMode?"WELCOME":"COMPLETE"),I.current+=1},[]),Tu=K.useCallback((D,ie,se,he,Pe,je,nt,ue)=>{const it={board:Array.from(D.entries()).map(([$e,et])=>[$e,[...et]]),p1Reserve:[...ie],p2Reserve:[...se],currentPlayer:he,turnCountP1:Pe,turnCountP2:je,lastMovedPieceId:nt,moveHistory:[...ue]};Re($e=>[...$e,it])},[]),ai=K.useCallback(()=>{if(Be.length===0||m)return;let D=1;r.mode==="AI"&&Be.length>=2&&(D=2);const ie=Math.max(0,Be.length-D),se=Be[ie],he=new Map;se.board.forEach(([Pe,je])=>he.set(Pe,[...je])),v(he),j([...se.p1Reserve]),M([...se.p2Reserve]),H(se.currentPlayer),R(se.turnCountP1),P(se.turnCountP2),F(se.lastMovedPieceId),Ne([...se.moveHistory]),Re(Pe=>Pe.slice(0,ie)),ke(null),dt(null),ye([]),Q(null),T([]),V([]),le(0)},[Be,m,r.mode]),Ot=ti(s);K.useEffect(()=>{Ot.isGameOver&&!De&&ge(!0)},[Ot,De]),K.useEffect(()=>{if(Ot.isGameOver)return;const D=d===1?A:L,ie=d===1?b:k;if(xu(s,d,D,ie,U,r.expansions).length===0&&(s.size>0||A.length>0)){G(c("toastForcedPass",{n:d})),setTimeout(()=>G(null),3e3);const he={turnNumber:ie,player:d,actionType:"PASS",bugType:"QUEEN",description:c("passLogDesc",{n:d})};Ne(Pe=>[...Pe,he]),H(d===1?2:1)}},[d,s,A,L,b,k,U,r.expansions,Ot.isGameOver]),K.useEffect(()=>{if(!(r.tutorialMode&&Qe!=="COMPLETE")&&r.mode==="AI"&&d===2&&!Ot.isGameOver&&!m){if(xu(s,2,L,k,U,r.expansions).length===0)return;C(!0);const ie=I.current,se=setTimeout(()=>{if(I.current!==ie){C(!1);return}try{const he=eh(s,2,L,A,k,b,r.aiDifficulty,U,r.expansions);he?ta(he):(G(c("toastAiPass")),setTimeout(()=>G(null),3e3),H(1))}finally{C(!1)}},600);return()=>clearTimeout(se)}},[d,r,s,A,L,b,k,U,Ot.isGameOver,Qe]);const ta=D=>{if(D.type==="MOVE"&&D.fromHex){const ue=ea(s,D.fromHex);if(!ue||ue.player!==D.player){G("Invalid move: Not your piece!"),setTimeout(()=>G(null),3e3);return}if(!Js(s,D.fromHex,D.player,d===1?b:k,U,r.expansions).some(it=>it.q===D.toHex.q&&it.r===D.toHex.r)){G("Invalid move: Destination not reachable!"),setTimeout(()=>G(null),3e3);return}}if(D.type==="PILLBUG_SPECIAL"&&D.fromHex&&D.pillbugTargetHex){const ue=s.get($(D.fromHex.q,D.fromHex.r))||[],pt=ue[ue.length-1];if(!pt||pt.player!==D.player||pt.type!=="PILLBUG"){G("Invalid move: Not your Pillbug!"),setTimeout(()=>G(null),3e3);return}if(!Is(s,D.fromHex,D.player,U).some(et=>et.targetHex.q===D.pillbugTargetHex.q&&et.targetHex.r===D.pillbugTargetHex.r&&et.destinationHexes.some(Xa=>Xa.q===D.toHex.q&&Xa.r===D.toHex.r))){G("Invalid move: Pillbug destination not reachable!"),setTimeout(()=>G(null),3e3);return}}Tu(s,A,L,d,b,k,U,Se);const ie=ml(s);let se=[...A],he=[...L],Pe="";if(D.type==="PLACE"){if(D.player===1){const $e=se.findIndex(et=>et.id===D.pieceId);$e!==-1&&se.splice($e,1)}else{const $e=he.findIndex(et=>et.id===D.pieceId);$e!==-1&&he.splice($e,1)}const ue={id:D.pieceId,type:D.bugType,player:D.player},pt=$(D.toHex.q,D.toHex.r),it=ie.get(pt)||[];ie.set(pt,[...it,ue]),Pe=c("placedDesc",{bug:pl[D.bugType].name,q:D.toHex.q,r:D.toHex.r}),ve({to:D.toHex})}else if(D.type==="MOVE"&&D.fromHex){const ue=$(D.fromHex.q,D.fromHex.r),pt=ie.get(ue)||[],it=pt.pop();if(pt.length===0&&ie.delete(ue),it){const $e=$(D.toHex.q,D.toHex.r),et=ie.get($e)||[];ie.set($e,[...et,it])}Pe=c("movedDesc",{bug:pl[D.bugType].name,q1:D.fromHex.q,r1:D.fromHex.r,q2:D.toHex.q,r2:D.toHex.r}),ve({from:D.fromHex,to:D.toHex})}else if(D.type==="PILLBUG_SPECIAL"&&D.pillbugTargetHex){const ue=$(D.pillbugTargetHex.q,D.pillbugTargetHex.r),pt=ie.get(ue)||[],it=pt.pop();if(pt.length===0&&ie.delete(ue),it){const $e=$(D.toHex.q,D.toHex.r),et=ie.get($e)||[];ie.set($e,[...et,it])}Pe=c("pillbugMovedDesc",{bug:it?pl[it.type].name:"piece",q1:D.pillbugTargetHex.q,r1:D.pillbugTargetHex.r,q2:D.toHex.q,r2:D.toHex.r}),ve({from:D.pillbugTargetHex,to:D.toHex})}v(ie),j(se),M(he);let je=null;if(D.type==="PILLBUG_SPECIAL"&&D.pillbugTargetHex){const ue=ie.get($(D.toHex.q,D.toHex.r));je=ue&&ue.length>0?ue[ue.length-1].id:D.pieceId}else je=D.pieceId;F(je);const nt={turnNumber:d===1?b:k,player:d,actionType:D.type,bugType:D.bugType,from:D.fromHex,to:D.toHex,description:Pe};Ne(ue=>[...ue,nt]),ke(null),dt(null),ye([]),Q(null),T([]),V([]),le(0),d===1?(R(ue=>ue+1),H(2)):(P(ue=>ue+1),H(1)),r.tutorialMode&&Qe!=="COMPLETE"&&zu()},ln={WELCOME:0,PLACE_QUEEN:1,OPP_QUEEN:0,PLACE_SPIDER:2,OPP_SPIDER:0,PLACE_BEETLE:3,OPP_BEETLE:0,PLACE_GRASSHOPPER:4,OPP_GRASSHOPPER:0,MOVE_EXAMPLE:5,COMPLETE:0},Mu={WELCOME:"PLACE_QUEEN",PLACE_QUEEN:"OPP_QUEEN",OPP_QUEEN:"PLACE_SPIDER",PLACE_SPIDER:"OPP_SPIDER",OPP_SPIDER:"PLACE_BEETLE",PLACE_BEETLE:"OPP_BEETLE",OPP_BEETLE:"PLACE_GRASSHOPPER",PLACE_GRASSHOPPER:"OPP_GRASSHOPPER",OPP_GRASSHOPPER:"MOVE_EXAMPLE",MOVE_EXAMPLE:"COMPLETE",COMPLETE:"COMPLETE"},zu=()=>{Ka(Mu[Qe])};K.useEffect(()=>{if(!Vt||!Qe.startsWith("OPP_")||Ot.isGameOver)return;const D=Qe==="OPP_QUEEN"?"QUEEN":Qe==="OPP_SPIDER"?"SPIDER":Qe==="OPP_BEETLE"?"BEETLE":"GRASSHOPPER";C(!0);const ie=setTimeout(()=>{const se=L.find(he=>he.type===D);if(se){const he=Xs(s,2);he.length>0&&ta({type:"PLACE",pieceId:se.id,bugType:D,player:2,toHex:he[0]})}C(!1)},800);return()=>{clearTimeout(ie),C(!1)}},[Qe,Vt,s,L,k,Ot.isGameOver]);const lt=()=>{Ka("COMPLETE"),h(D=>({...D,tutorialMode:!1})),oe(!0)},nn=D=>{if(!m)if(ke(null),Q(null),T([]),Ke===D)dt(null),ye([]);else{dt(D);const ie=Xs(s,d);ye(ie)}},li=D=>{if(m)return;const ie=s.get($(D.q,D.r)),se=ie&&ie.length>0?ie[ie.length-1]:null;if(dt(null),J&&J.q===D.q&&J.r===D.r){ke(null),ye([]),Q(null),T([]);return}if(se&&se.player===d){ke(D);const Pe=Js(s,D,d,d===1?b:k,U,r.expansions);if(ye(Pe),ec(s,D,se,r.expansions).includes("PILLBUG")){const nt=Is(s,D,d,U);V(nt),le(0),nt.length>0&&(Q(nt[0].targetHex),T(nt[0].destinationHexes))}else V([]),le(0),Q(null),T([])}},ni=()=>{if(q.length===0)return;const D=(ce+1)%q.length;le(D),Q(q[D].targetHex),T(q[D].destinationHexes)},vl=D=>{if(m)return;const ie=d===1?A:L;if(Ke){const se=ie.find(he=>he.type===Ke);se&&ta({type:"PLACE",pieceId:se.id,bugType:Ke,player:d,toHex:D})}else if(J){const se=ea(s,J);se&&(Tt&&Ce.some(he=>he.q===D.q&&he.r===D.r)?ta({type:"PILLBUG_SPECIAL",pieceId:se.id,bugType:se.type,player:d,fromHex:J,pillbugTargetHex:Tt,toHex:D}):ta({type:"MOVE",pieceId:se.id,bugType:se.type,player:d,fromHex:J,toHex:D}))}};return f.jsxs("div",{className:"flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden",children:[f.jsxs("header",{className:"bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-2xl",children:"🐝"}),f.jsxs("h1",{className:"text-lg font-black tracking-tight text-amber-400",children:[c("appTitle")," ",f.jsx("span",{className:"text-slate-400 text-xs font-normal",children:c("appSubtitle")})]})]}),f.jsx("span",{className:"hidden sm:inline-block text-sm font-semibold px-3 pt-1.5 pb-2.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 translate-y-2.5",children:r.mode==="AI"?c("vsAi",{diff:c(r.aiDifficulty==="EASY"?"easyBtn":r.aiDifficulty==="MEDIUM"?"mediumBtn":"hardBtn")}):c("passAndPlay")})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${d===1?"bg-slate-800 border-amber-400 text-amber-300":"bg-slate-900 border-blue-400 text-blue-300"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${d===1?"bg-white":"bg-slate-950 border border-slate-500"} ${m?"animate-ping":""}`}),f.jsx("span",{children:m?c("aiThinking"):c("playersTurn",{n:d,color:c(d===1?"white":"black")})})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(uv,{className:"!px-1.5 !py-1"}),f.jsx("button",{onClick:ai,disabled:Be.length===0||m,className:`p-2 rounded-xl border transition-colors ${Be.length>0&&!m?"bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white":"bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed"}`,title:c("undoTitle"),children:f.jsx(Gh,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>oe(!0),className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors",title:c("newGameTitle"),children:f.jsx(Ph,{className:"w-4 h-4"})}),f.jsxs("button",{onClick:()=>zt(!0),className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold",title:c("kotlinTitle"),children:[f.jsx(vp,{className:"w-4 h-4"}),f.jsx("span",{className:"hidden md:inline",children:c("kotlinSource")})]})]})]})]}),_&&f.jsxs("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce",children:[f.jsx(hp,{className:"w-4 h-4"}),f.jsx("span",{children:_})]}),Qe==="WELCOME"&&!ee&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-slate-900 border border-amber-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[f.jsx(Ws,{className:"w-6 h-6 text-amber-400"}),f.jsx("h3",{className:"text-lg font-black text-amber-300",children:c("tutorialMode")})]}),f.jsx("p",{className:"text-sm text-slate-300 mb-5 leading-relaxed",children:c("tutorialWelcome")}),f.jsxs("div",{className:"flex gap-3",children:[f.jsx("button",{onClick:lt,className:"flex-1 py-2.5 px-4 rounded-xl border border-slate-700 text-slate-400 text-xs font-bold hover:bg-slate-800 transition-colors",children:c("tutorialSkip")}),f.jsx("button",{onClick:()=>Ka("PLACE_QUEEN"),className:"flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-transform active:scale-95",children:c("tutorialNext")})]})]})}),r.tutorialMode&&Qe==="COMPLETE"&&s.size>0&&!ee&&!De&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl",children:[f.jsx("p",{className:"text-sm text-slate-300 mb-5 leading-relaxed",children:c("tutorialComplete")}),f.jsx("button",{onClick:lt,className:"w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-transform active:scale-95",children:c("tutorialGotIt")})]})}),Vt&&!ee&&Qe!=="WELCOME"&&f.jsxs("div",{className:"bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 flex items-center justify-between z-20",children:[f.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[f.jsx(Ws,{className:"w-4 h-4 text-amber-400 shrink-0"}),f.jsx("span",{className:"text-amber-200 font-medium",children:Qe.startsWith("OPP_")?c(sp[Qe]):c("tutorialStepLabel",{n:ln[Qe]})+" "+c(sp[Qe])})]}),f.jsxs("button",{onClick:lt,className:"shrink-0 ml-3 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors",children:[f.jsx(wh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:c("tutorialSkip")})]})]}),f.jsxs("div",{className:"flex-1 flex flex-col md:flex-row relative overflow-hidden",children:[f.jsxs("div",{className:"hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4",children:[f.jsx(Zs,{player:1,reserve:A,isActive:d===1&&!m,selectedBugType:d===1?Ke:null,onSelectBugType:nn,turnCount:b,queenPlaced:Za(s,1)}),f.jsx(Zs,{player:2,reserve:L,isActive:d===2&&!m,selectedBugType:d===2?Ke:null,onSelectBugType:nn,turnCount:k,queenPlaced:Za(s,2)})]}),f.jsxs("div",{className:"flex-1 relative h-full",children:[f.jsx(ov,{board:s,selectedHex:J,validDestinations:ht,pillbugTargetHex:Tt,pillbugDestinations:Ce,onSelectHex:li,onSelectDestination:vl,onSelectPillbugTarget:ni,currentPlayer:d,isAITurn:m,lastMovedHex:X}),f.jsx("div",{className:"absolute bottom-4 right-4 z-20 max-w-xs w-full",children:f.jsx(sv,{logs:Se})})]}),f.jsx("div",{className:"block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20",children:f.jsx(Zs,{player:d,reserve:d===1?A:L,isActive:!m,selectedBugType:Ke,onSelectBugType:nn,turnCount:d===1?b:k,queenPlaced:Za(s,d)})})]}),f.jsx(rv,{isOpen:ee,onStartGame:hl,onClose:()=>oe(!1),canCancel:s.size>0}),f.jsx(fv,{isOpen:De,winner:Ot.winner,onRestart:()=>hl(r),onNewGameSetup:()=>{ge(!1),oe(!0)}}),f.jsx(dv,{isOpen:Mt,onClose:()=>zt(!1)})]})}wg.createRoot(document.getElementById("root")).render(f.jsx(K.StrictMode,{children:f.jsx(pv,{})}));
