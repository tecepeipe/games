(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))s(v);new MutationObserver(v=>{for(const A of v)if(A.type==="childList")for(const H of A.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&s(H)}).observe(document,{childList:!0,subtree:!0});function h(v){const A={};return v.integrity&&(A.integrity=v.integrity),v.referrerPolicy&&(A.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?A.credentials="include":v.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function s(v){if(v.ep)return;v.ep=!0;const A=h(v);fetch(v.href,A)}})();var js={exports:{}},Xn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Bg(){if(wd)return Xn;wd=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function h(s,v,A){var H=null;if(A!==void 0&&(H=""+A),v.key!==void 0&&(H=""+v.key),"key"in v){A={};for(var D in v)D!=="key"&&(A[D]=v[D])}else A=v;return v=A.ref,{$$typeof:o,type:s,key:H,ref:v!==void 0?v:null,props:A}}return Xn.Fragment=r,Xn.jsx=h,Xn.jsxs=h,Xn}var Yd;function Dg(){return Yd||(Yd=1,js.exports=Bg()),js.exports}var f=Dg(),Bs={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function qg(){if(Vd)return F;Vd=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),H=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),L=Symbol.iterator;function G(g){return g===null||typeof g!="object"?null:(g=L&&g[L]||g["@@iterator"],typeof g=="function"?g:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,de={};function be(g,N,R){this.props=g,this.context=N,this.refs=de,this.updater=R||P}be.prototype.isReactComponent={},be.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},be.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function xe(){}xe.prototype=be.prototype;function ye(g,N,R){this.props=g,this.context=N,this.refs=de,this.updater=R||P}var Ce=ye.prototype=new xe;Ce.constructor=ye,V(Ce,be.prototype),Ce.isPureReactComponent=!0;var Ne=Array.isArray;function De(){}var X={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function Xe(g,N,R){var U=R.ref;return{$$typeof:o,type:g,key:N,ref:U!==void 0?U:null,props:R}}function it(g,N){return Xe(g.type,N,g.props)}function ot(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function me(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(R){return N[R]})}var bt=/\/+/g;function k(g,N){return typeof g=="object"&&g!==null&&g.key!=null?me(""+g.key):N.toString(36)}function ze(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(De,De):(g.status="pending",g.then(function(N){g.status==="pending"&&(g.status="fulfilled",g.value=N)},function(N){g.status==="pending"&&(g.status="rejected",g.reason=N)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function T(g,N,R,U,K){var $=typeof g;($==="undefined"||$==="boolean")&&(g=null);var re=!1;if(g===null)re=!0;else switch($){case"bigint":case"string":case"number":re=!0;break;case"object":switch(g.$$typeof){case o:case r:re=!0;break;case B:return re=g._init,T(re(g._payload),N,R,U,K)}}if(re)return K=K(g),re=U===""?"."+k(g,0):U,Ne(K)?(R="",re!=null&&(R=re.replace(bt,"$&/")+"/"),T(K,N,R,"",function(xt){return xt})):K!=null&&(ot(K)&&(K=it(K,R+(K.key==null||g&&g.key===K.key?"":(""+K.key).replace(bt,"$&/")+"/")+re)),N.push(K)),1;re=0;var Le=U===""?".":U+":";if(Ne(g))for(var pe=0;pe<g.length;pe++)U=g[pe],$=Le+k(U,pe),re+=T(U,N,R,$,K);else if(pe=G(g),typeof pe=="function")for(g=pe.call(g),pe=0;!(U=g.next()).done;)U=U.value,$=Le+k(U,pe++),re+=T(U,N,R,$,K);else if($==="object"){if(typeof g.then=="function")return T(ze(g),N,R,U,K);throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return re}function q(g,N,R){if(g==null)return g;var U=[],K=0;return T(g,U,"","",function($){return N.call(R,$,K++)}),U}function Y(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(R){(g._status===0||g._status===-1)&&(g._status=1,g._result=R)},function(R){(g._status===0||g._status===-1)&&(g._status=2,g._result=R)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var ae=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},te={map:q,forEach:function(g,N,R){q(g,function(){N.apply(this,arguments)},R)},count:function(g){var N=0;return q(g,function(){N++}),N},toArray:function(g){return q(g,function(N){return N})||[]},only:function(g){if(!ot(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return F.Activity=z,F.Children=te,F.Component=be,F.Fragment=h,F.Profiler=v,F.PureComponent=ye,F.StrictMode=s,F.Suspense=E,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,F.__COMPILER_RUNTIME={__proto__:null,c:function(g){return X.H.useMemoCache(g)}},F.cache=function(g){return function(){return g.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(g,N,R){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var U=V({},g.props),K=g.key;if(N!=null)for($ in N.key!==void 0&&(K=""+N.key),N)!_e.call(N,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&N.ref===void 0||(U[$]=N[$]);var $=arguments.length-2;if($===1)U.children=R;else if(1<$){for(var re=Array($),Le=0;Le<$;Le++)re[Le]=arguments[Le+2];U.children=re}return Xe(g.type,K,U)},F.createContext=function(g){return g={$$typeof:H,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:A,_context:g},g},F.createElement=function(g,N,R){var U,K={},$=null;if(N!=null)for(U in N.key!==void 0&&($=""+N.key),N)_e.call(N,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(K[U]=N[U]);var re=arguments.length-2;if(re===1)K.children=R;else if(1<re){for(var Le=Array(re),pe=0;pe<re;pe++)Le[pe]=arguments[pe+2];K.children=Le}if(g&&g.defaultProps)for(U in re=g.defaultProps,re)K[U]===void 0&&(K[U]=re[U]);return Xe(g,$,K)},F.createRef=function(){return{current:null}},F.forwardRef=function(g){return{$$typeof:D,render:g}},F.isValidElement=ot,F.lazy=function(g){return{$$typeof:B,_payload:{_status:-1,_result:g},_init:Y}},F.memo=function(g,N){return{$$typeof:m,type:g,compare:N===void 0?null:N}},F.startTransition=function(g){var N=X.T,R={};X.T=R;try{var U=g(),K=X.S;K!==null&&K(R,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(De,ae)}catch($){ae($)}finally{N!==null&&R.types!==null&&(N.types=R.types),X.T=N}},F.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},F.use=function(g){return X.H.use(g)},F.useActionState=function(g,N,R){return X.H.useActionState(g,N,R)},F.useCallback=function(g,N){return X.H.useCallback(g,N)},F.useContext=function(g){return X.H.useContext(g)},F.useDebugValue=function(){},F.useDeferredValue=function(g,N){return X.H.useDeferredValue(g,N)},F.useEffect=function(g,N){return X.H.useEffect(g,N)},F.useEffectEvent=function(g){return X.H.useEffectEvent(g)},F.useId=function(){return X.H.useId()},F.useImperativeHandle=function(g,N,R){return X.H.useImperativeHandle(g,N,R)},F.useInsertionEffect=function(g,N){return X.H.useInsertionEffect(g,N)},F.useLayoutEffect=function(g,N){return X.H.useLayoutEffect(g,N)},F.useMemo=function(g,N){return X.H.useMemo(g,N)},F.useOptimistic=function(g,N){return X.H.useOptimistic(g,N)},F.useReducer=function(g,N,R){return X.H.useReducer(g,N,R)},F.useRef=function(g){return X.H.useRef(g)},F.useState=function(g){return X.H.useState(g)},F.useSyncExternalStore=function(g,N,R){return X.H.useSyncExternalStore(g,N,R)},F.useTransition=function(){return X.H.useTransition()},F.version="19.2.8",F}var Zd;function ks(){return Zd||(Zd=1,Bs.exports=qg()),Bs.exports}var I=ks(),Ds={exports:{}},Kn={},qs={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Rg(){return Xd||(Xd=1,(function(o){function r(T,q){var Y=T.length;T.push(q);e:for(;0<Y;){var ae=Y-1>>>1,te=T[ae];if(0<v(te,q))T[ae]=q,T[Y]=te,Y=ae;else break e}}function h(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var q=T[0],Y=T.pop();if(Y!==q){T[0]=Y;e:for(var ae=0,te=T.length,g=te>>>1;ae<g;){var N=2*(ae+1)-1,R=T[N],U=N+1,K=T[U];if(0>v(R,Y))U<te&&0>v(K,R)?(T[ae]=K,T[U]=Y,ae=U):(T[ae]=R,T[N]=Y,ae=N);else if(U<te&&0>v(K,Y))T[ae]=K,T[U]=Y,ae=U;else break e}}return q}function v(T,q){var Y=T.sortIndex-q.sortIndex;return Y!==0?Y:T.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;o.unstable_now=function(){return A.now()}}else{var H=Date,D=H.now();o.unstable_now=function(){return H.now()-D}}var E=[],m=[],B=1,z=null,L=3,G=!1,P=!1,V=!1,de=!1,be=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,ye=typeof setImmediate<"u"?setImmediate:null;function Ce(T){for(var q=h(m);q!==null;){if(q.callback===null)s(m);else if(q.startTime<=T)s(m),q.sortIndex=q.expirationTime,r(E,q);else break;q=h(m)}}function Ne(T){if(V=!1,Ce(T),!P)if(h(E)!==null)P=!0,De||(De=!0,me());else{var q=h(m);q!==null&&ze(Ne,q.startTime-T)}}var De=!1,X=-1,_e=5,Xe=-1;function it(){return de?!0:!(o.unstable_now()-Xe<_e)}function ot(){if(de=!1,De){var T=o.unstable_now();Xe=T;var q=!0;try{e:{P=!1,V&&(V=!1,xe(X),X=-1),G=!0;var Y=L;try{t:{for(Ce(T),z=h(E);z!==null&&!(z.expirationTime>T&&it());){var ae=z.callback;if(typeof ae=="function"){z.callback=null,L=z.priorityLevel;var te=ae(z.expirationTime<=T);if(T=o.unstable_now(),typeof te=="function"){z.callback=te,Ce(T),q=!0;break t}z===h(E)&&s(E),Ce(T)}else s(E);z=h(E)}if(z!==null)q=!0;else{var g=h(m);g!==null&&ze(Ne,g.startTime-T),q=!1}}break e}finally{z=null,L=Y,G=!1}q=void 0}}finally{q?me():De=!1}}}var me;if(typeof ye=="function")me=function(){ye(ot)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,k=bt.port2;bt.port1.onmessage=ot,me=function(){k.postMessage(null)}}else me=function(){be(ot,0)};function ze(T,q){X=be(function(){T(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_next=function(T){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var Y=L;L=q;try{return T()}finally{L=Y}},o.unstable_requestPaint=function(){de=!0},o.unstable_runWithPriority=function(T,q){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var Y=L;L=T;try{return q()}finally{L=Y}},o.unstable_scheduleCallback=function(T,q,Y){var ae=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Y+te,T={id:B++,callback:q,priorityLevel:T,startTime:Y,expirationTime:te,sortIndex:-1},Y>ae?(T.sortIndex=Y,r(m,T),h(E)===null&&T===h(m)&&(V?(xe(X),X=-1):V=!0,ze(Ne,Y-ae))):(T.sortIndex=te,r(E,T),P||G||(P=!0,De||(De=!0,me()))),T},o.unstable_shouldYield=it,o.unstable_wrapCallback=function(T){var q=L;return function(){var Y=L;L=q;try{return T.apply(this,arguments)}finally{L=Y}}}})(Rs)),Rs}var Kd;function _g(){return Kd||(Kd=1,qs.exports=Rg()),qs.exports}var _s={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function Lg(){if(Pd)return ct;Pd=1;var o=ks();function r(E){var m="https://react.dev/errors/"+E;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)m+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+E+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(){}var s={d:{f:h,r:function(){throw Error(r(522))},D:h,C:h,L:h,m:h,X:h,S:h,M:h},p:0,findDOMNode:null},v=Symbol.for("react.portal");function A(E,m,B){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:z==null?null:""+z,children:E,containerInfo:m,implementation:B}}var H=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(E,m){if(E==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ct.createPortal=function(E,m){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return A(E,m,null,B)},ct.flushSync=function(E){var m=H.T,B=s.p;try{if(H.T=null,s.p=2,E)return E()}finally{H.T=m,s.p=B,s.d.f()}},ct.preconnect=function(E,m){typeof E=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(E,m))},ct.prefetchDNS=function(E){typeof E=="string"&&s.d.D(E)},ct.preinit=function(E,m){if(typeof E=="string"&&m&&typeof m.as=="string"){var B=m.as,z=D(B,m.crossOrigin),L=typeof m.integrity=="string"?m.integrity:void 0,G=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;B==="style"?s.d.S(E,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:z,integrity:L,fetchPriority:G}):B==="script"&&s.d.X(E,{crossOrigin:z,integrity:L,fetchPriority:G,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ct.preinitModule=function(E,m){if(typeof E=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var B=D(m.as,m.crossOrigin);s.d.M(E,{crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(E)},ct.preload=function(E,m){if(typeof E=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var B=m.as,z=D(B,m.crossOrigin);s.d.L(E,B,{crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ct.preloadModule=function(E,m){if(typeof E=="string")if(m){var B=D(m.as,m.crossOrigin);s.d.m(E,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:B,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(E)},ct.requestFormReset=function(E){s.d.r(E)},ct.unstable_batchedUpdates=function(E,m){return E(m)},ct.useFormState=function(E,m,B){return H.H.useFormState(E,m,B)},ct.useFormStatus=function(){return H.H.useHostTransitionStatus()},ct.version="19.2.8",ct}var Jd;function Ug(){if(Jd)return _s.exports;Jd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),_s.exports=Lg(),_s.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Gg(){if(Id)return Kn;Id=1;var o=_g(),r=ks(),h=Ug();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function H(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(A(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(s(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return E(n),e;if(i===a)return E(n),t;i=i.sibling}throw Error(s(188))}if(l.return!==a.return)l=n,a=i;else{for(var u=!1,c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u)throw Error(s(189))}}if(l.alternate!==a)throw Error(s(190))}if(l.tag!==3)throw Error(s(188));return l.stateNode.current===l?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,L=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),xe=Symbol.for("react.consumer"),ye=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Xe=Symbol.for("react.activity"),it=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var bt=Symbol.for("react.client.reference");function k(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case be:return"Profiler";case de:return"StrictMode";case Ne:return"Suspense";case De:return"SuspenseList";case Xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case ye:return e.displayName||"Context";case xe:return(e._context.displayName||"Context")+".Consumer";case Ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:k(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return k(e(t))}catch{}}return null}var ze=Array.isArray,T=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ae=[],te=-1;function g(e){return{current:e}}function N(e){0>te||(e.current=ae[te],ae[te]=null,te--)}function R(e,t){te++,ae[te]=e.current,e.current=t}var U=g(null),K=g(null),$=g(null),re=g(null);function Le(e,t){switch(R($,t),R(K,e),R(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fd(t),e=dd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(U),R(U,e)}function pe(){N(U),N(K),N($)}function xt(e){e.memoizedState!==null&&R(re,e);var t=U.current,l=dd(t,e.type);t!==l&&(R(K,e),R(U,l))}function Nt(e){K.current===e&&(N(U),N(K)),re.current===e&&(N(re),wn._currentValue=Y)}var Yt,Vl;function Vt(e){if(Yt===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Yt=t&&t[1]||"",Vl=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+e+Vl}var Fa=!1;function Wa(e,t){if(!e||Fa)return"";Fa=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(M){var S=M}Reflect.construct(e,[],j)}else{try{j.call()}catch(M){S=M}e.call(j.prototype)}}else{try{throw Error()}catch(M){S=M}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(M){if(M&&S&&typeof M.stack=="string")return[M.stack,S.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var d=u.split(`
`),x=c.split(`
`);for(n=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;if(a===d.length||n===x.length)for(a=d.length-1,n=x.length-1;1<=a&&0<=n&&d[a]!==x[n];)n--;for(;1<=a&&0<=n;a--,n--)if(d[a]!==x[n]){if(a!==1||n!==1)do if(a--,n--,0>n||d[a]!==x[n]){var O=`
`+d[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=n);break}}}finally{Fa=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Vt(l):""}function _(e,t){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return e.child!==t&&t!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Wa(e.type,!1);case 11:return Wa(e.type.render,!1);case 1:return Wa(e.type,!0);case 31:return Vt("Activity");default:return""}}function ie(e){try{var t="",l=null;do t+=_(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ne=Object.prototype.hasOwnProperty,Oe=o.unstable_scheduleCallback,we=o.unstable_cancelCallback,jt=o.unstable_shouldYield,Ye=o.unstable_requestPaint,qe=o.unstable_now,Bt=o.unstable_getCurrentPriorityLevel,ut=o.unstable_ImmediatePriority,rt=o.unstable_UserBlockingPriority,da=o.unstable_NormalPriority,mm=o.unstable_LowPriority,Ys=o.unstable_IdlePriority,pm=o.log,gm=o.unstable_setDisableYieldValue,$a=null,St=null;function vl(e){if(typeof pm=="function"&&gm(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode($a,e)}catch{}}var At=Math.clz32?Math.clz32:vm,hm=Math.log,ym=Math.LN2;function vm(e){return e>>>=0,e===0?32:31-(hm(e)/ym|0)|0}var Jn=256,In=262144,Fn=4194304;function Zl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,i=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=Zl(a):(u&=c,u!==0?n=Zl(u):l||(l=c&~e,l!==0&&(n=Zl(l))))):(c=a&~i,c!==0?n=Zl(c):u!==0?n=Zl(u):l||(l=a&~e,l!==0&&(n=Zl(l)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===32&&(l&4194048)!==0)?t:n}function en(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vs(){var e=Fn;return Fn<<=1,(Fn&62914560)===0&&(Fn=4194304),e}function bu(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function tn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xm(e,t,l,a,n,i){var u=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,x=e.hiddenUpdates;for(l=u&~l;0<l;){var O=31-At(l),j=1<<O;c[O]=0,d[O]=-1;var S=x[O];if(S!==null)for(x[O]=null,O=0;O<S.length;O++){var M=S[O];M!==null&&(M.lane&=-536870913)}l&=~j}a!==0&&Zs(e,a,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(u&~t))}function Zs(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-At(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Xs(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-At(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ks(e,t){var l=t&-t;return l=(l&42)!==0?1:xu(l),(l&(e.suspendedLanes|t))!==0?0:l}function xu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ps(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Rd(e.type))}function Js(e,t){var l=q.p;try{return q.p=e,t()}finally{q.p=l}}var bl=Math.random().toString(36).slice(2),et="__reactFiber$"+bl,ft="__reactProps$"+bl,ma="__reactContainer$"+bl,Au="__reactEvents$"+bl,Sm="__reactListeners$"+bl,Am="__reactHandles$"+bl,Is="__reactResources$"+bl,ln="__reactMarker$"+bl;function Tu(e){delete e[et],delete e[ft],delete e[Au],delete e[Sm],delete e[Am]}function pa(e){var t=e[et];if(t)return t;for(var l=e.parentNode;l;){if(t=l[ma]||l[et]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=bd(e);e!==null;){if(l=e[et])return l;e=bd(e)}return t}e=l,l=e.parentNode}return null}function ga(e){if(e=e[et]||e[ma]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function an(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ha(e){var t=e[Is];return t||(t=e[Is]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[ln]=!0}var Fs=new Set,Ws={};function Xl(e,t){ya(e,t),ya(e+"Capture",t)}function ya(e,t){for(Ws[e]=t,e=0;e<t.length;e++)Fs.add(t[e])}var Tm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$s={},eo={};function Mm(e){return ne.call(eo,e)?!0:ne.call($s,e)?!1:Tm.test(e)?eo[e]=!0:($s[e]=!0,!1)}function $n(e,t,l){if(Mm(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function ei(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Wt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function to(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mu(e){if(!e._valueTracker){var t=to(e)?"checked":"value";e._valueTracker=Em(e,t,""+e[t])}}function lo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=to(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zm=/[\n"\\]/g;function qt(e){return e.replace(zm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Eu(e,t,l,a,n,i,u,c){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?zu(e,u,Dt(t)):l!=null?zu(e,u,Dt(l)):a!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Dt(c):e.removeAttribute("name")}function ao(e,t,l,a,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Mu(e);return}l=l!=null?""+Dt(l):"",t=t!=null?""+Dt(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Mu(e)}function zu(e,t,l){t==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function va(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Dt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function no(e,t,l){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Dt(l):""}function io(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(s(92));if(ze(a)){if(1<a.length)throw Error(s(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Dt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Mu(e)}function ba(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uo(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Om.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function co(e,t,l){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&uo(e,n,a)}else for(var i in t)t.hasOwnProperty(i)&&uo(e,i,t[i])}function Ou(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function li(e){return Cm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var Hu=null;function Cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,Sa=null;function so(e){var t=ga(e);if(t&&(e=t.stateNode)){var l=e[ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(Eu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[ft]||null;if(!n)throw Error(s(90));Eu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&lo(a)}break e;case"textarea":no(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&va(e,!!l.multiple,t,!1)}}}var Nu=!1;function oo(e,t,l){if(Nu)return e(t,l);Nu=!0;try{var a=e(t);return a}finally{if(Nu=!1,(xa!==null||Sa!==null)&&(Yi(),xa&&(t=xa,e=Sa,Sa=xa=null,so(t),e)))for(t=0;t<e.length;t++)so(e[t])}}function nn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[ft]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(s(231,t,typeof l));return l}var el=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(el)try{var un={};Object.defineProperty(un,"passive",{get:function(){ju=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{ju=!1}var xl=null,Bu=null,ai=null;function ro(){if(ai)return ai;var e,t=Bu,l=t.length,a,n="value"in xl?xl.value:xl.textContent,i=n.length;for(e=0;e<l&&t[e]===n[e];e++);var u=l-e;for(a=1;a<=u&&t[l-a]===n[i-a];a++);return ai=n.slice(e,1<a?1-a:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ii(){return!0}function fo(){return!1}function dt(e){function t(l,a,n,i,u){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:fo,this.isPropagationStopped=fo,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),t}var Kl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ui=dt(Kl),cn=z({},Kl,{view:0,detail:0}),Nm=dt(cn),Du,qu,sn,ci=z({},cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&e.type==="mousemove"?(Du=e.screenX-sn.screenX,qu=e.screenY-sn.screenY):qu=Du=0,sn=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),mo=dt(ci),jm=z({},ci,{dataTransfer:0}),Bm=dt(jm),Dm=z({},cn,{relatedTarget:0}),Ru=dt(Dm),qm=z({},Kl,{animationName:0,elapsedTime:0,pseudoElement:0}),Rm=dt(qm),_m=z({},Kl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lm=dt(_m),Um=z({},Kl,{data:0}),po=dt(Um),Gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function _u(){return wm}var Ym=z({},cn,{key:function(e){if(e.key){var t=Gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=dt(Ym),Zm=z({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),go=dt(Zm),Xm=z({},cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Km=dt(Xm),Pm=z({},Kl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jm=dt(Pm),Im=z({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fm=dt(Im),Wm=z({},Kl,{newState:0,oldState:0}),$m=dt(Wm),ep=[9,13,27,32],Lu=el&&"CompositionEvent"in window,on=null;el&&"documentMode"in document&&(on=document.documentMode);var tp=el&&"TextEvent"in window&&!on,ho=el&&(!Lu||on&&8<on&&11>=on),yo=" ",vo=!1;function bo(e,t){switch(e){case"keyup":return ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Aa=!1;function lp(e,t){switch(e){case"compositionend":return xo(t);case"keypress":return t.which!==32?null:(vo=!0,yo);case"textInput":return e=t.data,e===yo&&vo?null:e;default:return null}}function ap(e,t){if(Aa)return e==="compositionend"||!Lu&&bo(e,t)?(e=ro(),ai=Bu=xl=null,Aa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ho&&t.locale!=="ko"?null:t.data;default:return null}}var np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!np[e.type]:t==="textarea"}function Ao(e,t,l,a){xa?Sa?Sa.push(a):Sa=[a]:xa=a,t=Ii(t,"onChange"),0<t.length&&(l=new ui("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var rn=null,fn=null;function ip(e){id(e,0)}function si(e){var t=an(e);if(lo(t))return e}function To(e,t){if(e==="change")return t}var Mo=!1;if(el){var Uu;if(el){var Gu="oninput"in document;if(!Gu){var Eo=document.createElement("div");Eo.setAttribute("oninput","return;"),Gu=typeof Eo.oninput=="function"}Uu=Gu}else Uu=!1;Mo=Uu&&(!document.documentMode||9<document.documentMode)}function zo(){rn&&(rn.detachEvent("onpropertychange",Oo),fn=rn=null)}function Oo(e){if(e.propertyName==="value"&&si(fn)){var t=[];Ao(t,fn,e,Cu(e)),oo(ip,t)}}function up(e,t,l){e==="focusin"?(zo(),rn=t,fn=l,rn.attachEvent("onpropertychange",Oo)):e==="focusout"&&zo()}function cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(fn)}function sp(e,t){if(e==="click")return si(t)}function op(e,t){if(e==="input"||e==="change")return si(t)}function rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:rp;function dn(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ne.call(t,n)||!Tt(e[n],t[n]))return!1}return!0}function Ho(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Co(e,t){var l=Ho(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ho(l)}}function No(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?No(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jo(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=ti(e.document)}return t}function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fp=el&&"documentMode"in document&&11>=document.documentMode,Ta=null,Qu=null,mn=null,wu=!1;function Bo(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;wu||Ta==null||Ta!==ti(a)||(a=Ta,"selectionStart"in a&&ku(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),mn&&dn(mn,a)||(mn=a,a=Ii(Qu,"onSelect"),0<a.length&&(t=new ui("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Ta)))}function Pl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var Ma={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionrun:Pl("Transition","TransitionRun"),transitionstart:Pl("Transition","TransitionStart"),transitioncancel:Pl("Transition","TransitionCancel"),transitionend:Pl("Transition","TransitionEnd")},Yu={},Do={};el&&(Do=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function Jl(e){if(Yu[e])return Yu[e];if(!Ma[e])return e;var t=Ma[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Do)return Yu[e]=t[l];return e}var qo=Jl("animationend"),Ro=Jl("animationiteration"),_o=Jl("animationstart"),dp=Jl("transitionrun"),mp=Jl("transitionstart"),pp=Jl("transitioncancel"),Lo=Jl("transitionend"),Uo=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function Zt(e,t){Uo.set(e,t),Xl(t,[e])}var oi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Rt=[],Ea=0,Zu=0;function ri(){for(var e=Ea,t=Zu=Ea=0;t<e;){var l=Rt[t];Rt[t++]=null;var a=Rt[t];Rt[t++]=null;var n=Rt[t];Rt[t++]=null;var i=Rt[t];if(Rt[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&Go(l,n,i)}}function fi(e,t,l,a){Rt[Ea++]=e,Rt[Ea++]=t,Rt[Ea++]=l,Rt[Ea++]=a,Zu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Xu(e,t,l,a){return fi(e,t,l,a),di(e)}function Il(e,t){return fi(e,null,null,t),di(e)}function Go(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=e.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-At(l),e=i.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),i):null}function di(e){if(50<Rn)throw Rn=0,ts=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var za={};function gp(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,l,a){return new gp(e,t,l,a)}function Ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tl(e,t){var l=e.alternate;return l===null?(l=Mt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ko(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,l,a,n,i){var u=0;if(a=e,typeof e=="function")Ku(e)&&(u=1);else if(typeof e=="string")u=xg(e,l,U.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Xe:return e=Mt(31,l,t,n),e.elementType=Xe,e.lanes=i,e;case V:return Fl(l.children,n,i,t);case de:u=8,n|=24;break;case be:return e=Mt(12,l,t,n|2),e.elementType=be,e.lanes=i,e;case Ne:return e=Mt(13,l,t,n),e.elementType=Ne,e.lanes=i,e;case De:return e=Mt(19,l,t,n),e.elementType=De,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:u=10;break e;case xe:u=9;break e;case Ce:u=11;break e;case X:u=14;break e;case _e:u=16,a=null;break e}u=29,l=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=Mt(u,l,t,n),t.elementType=e,t.type=a,t.lanes=i,t}function Fl(e,t,l,a){return e=Mt(7,e,a,t),e.lanes=l,e}function Pu(e,t,l){return e=Mt(6,e,null,t),e.lanes=l,e}function Qo(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Ju(e,t,l){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wo=new WeakMap;function _t(e,t){if(typeof e=="object"&&e!==null){var l=wo.get(e);return l!==void 0?l:(t={value:e,source:t,stack:ie(t)},wo.set(e,t),t)}return{value:e,source:t,stack:ie(t)}}var Oa=[],Ha=0,pi=null,pn=0,Lt=[],Ut=0,Sl=null,Pt=1,Jt="";function ll(e,t){Oa[Ha++]=pn,Oa[Ha++]=pi,pi=e,pn=t}function Yo(e,t,l){Lt[Ut++]=Pt,Lt[Ut++]=Jt,Lt[Ut++]=Sl,Sl=e;var a=Pt;e=Jt;var n=32-At(a)-1;a&=~(1<<n),l+=1;var i=32-At(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Pt=1<<32-At(t)+n|l<<n|a,Jt=i+e}else Pt=1<<i|l<<n|a,Jt=e}function Iu(e){e.return!==null&&(ll(e,1),Yo(e,1,0))}function Fu(e){for(;e===pi;)pi=Oa[--Ha],Oa[Ha]=null,pn=Oa[--Ha],Oa[Ha]=null;for(;e===Sl;)Sl=Lt[--Ut],Lt[Ut]=null,Jt=Lt[--Ut],Lt[Ut]=null,Pt=Lt[--Ut],Lt[Ut]=null}function Vo(e,t){Lt[Ut++]=Pt,Lt[Ut++]=Jt,Lt[Ut++]=Sl,Pt=t.id,Jt=t.overflow,Sl=e}var tt=null,je=null,fe=!1,Al=null,Gt=!1,Wu=Error(s(519));function Tl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw gn(_t(t,e)),Wu}function Zo(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[et]=e,t[ft]=a,l){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(l=0;l<Ln.length;l++)ce(Ln[l],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),ao(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),io(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||od(t.textContent,l)?(a.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),a.onScroll!=null&&ce("scroll",t),a.onScrollEnd!=null&&ce("scrollend",t),a.onClick!=null&&(t.onclick=$t),t=!0):t=!1,t||Tl(e,!0)}function Xo(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:tt=tt.return}}function Ca(e){if(e!==tt)return!1;if(!fe)return Xo(e),fe=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||hs(e.type,e.memoizedProps)),l=!l),l&&je&&Tl(e),Xo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=vd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=vd(e)}else t===27?(t=je,Ll(e.type)?(e=Ss,Ss=null,je=e):je=t):je=tt?Qt(e.stateNode.nextSibling):null;return!0}function Wl(){je=tt=null,fe=!1}function $u(){var e=Al;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),Al=null),e}function gn(e){Al===null?Al=[e]:Al.push(e)}var ec=g(null),$l=null,al=null;function Ml(e,t,l){R(ec,t._currentValue),t._currentValue=l}function nl(e){e._currentValue=ec.current,N(ec)}function tc(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function lc(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),tc(i.return,l,e),a||(u=null);break e}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(s(341));u.lanes|=l,i=u.alternate,i!==null&&(i.lanes|=l),tc(u,l,e),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===e){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Na(e,t,l,a){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var c=n.type;Tt(n.pendingProps.value,u.value)||(e!==null?e.push(c):e=[c])}}else if(n===re.current){if(u=n.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(wn):e=[wn])}n=n.return}e!==null&&lc(t,e,l,a),t.flags|=262144}function gi(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){$l=e,al=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function lt(e){return Ko($l,e)}function hi(e,t){return $l===null&&ea(e),Ko(e,t)}function Ko(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},al===null){if(e===null)throw Error(s(308));al=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else al=al.next=t;return l}var hp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},yp=o.unstable_scheduleCallback,vp=o.unstable_NormalPriority,Ke={$$typeof:ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new hp,data:new Map,refCount:0}}function hn(e){e.refCount--,e.refCount===0&&yp(vp,function(){e.controller.abort()})}var yn=null,nc=0,ja=0,Ba=null;function bp(e,t){if(yn===null){var l=yn=[];nc=0,ja=cs(),Ba={status:"pending",value:void 0,then:function(a){l.push(a)}}}return nc++,t.then(Po,Po),t}function Po(){if(--nc===0&&yn!==null){Ba!==null&&(Ba.status="fulfilled");var e=yn;yn=null,ja=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xp(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Jo=T.S;T.S=function(e,t){Df=qe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&bp(e,t),Jo!==null&&Jo(e,t)};var ta=g(null);function ic(){var e=ta.current;return e!==null?e:He.pooledCache}function yi(e,t){t===null?R(ta,ta.current):R(ta,t.pool)}function Io(){var e=ic();return e===null?null:{parent:Ke._currentValue,pool:e}}var Da=Error(s(460)),uc=Error(s(474)),vi=Error(s(542)),bi={then:function(){}};function Fo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wo(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then($t,$t),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,er(e),e;default:if(typeof t.status=="string")t.then($t,$t);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,er(e),e}throw aa=t,Da}}function la(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(aa=l,Da):l}}var aa=null;function $o(){if(aa===null)throw Error(s(459));var e=aa;return aa=null,e}function er(e){if(e===Da||e===vi)throw Error(s(483))}var qa=null,vn=0;function xi(e){var t=vn;return vn+=1,qa===null&&(qa=[]),Wo(qa,e,t)}function bn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Si(e,t){throw t.$$typeof===L?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tr(e){function t(y,p){if(e){var b=y.deletions;b===null?(y.deletions=[p],y.flags|=16):b.push(p)}}function l(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function a(y){for(var p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function n(y,p){return y=tl(y,p),y.index=0,y.sibling=null,y}function i(y,p,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<p?(y.flags|=67108866,p):b):(y.flags|=67108866,p)):(y.flags|=1048576,p)}function u(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function c(y,p,b,C){return p===null||p.tag!==6?(p=Pu(b,y.mode,C),p.return=y,p):(p=n(p,b),p.return=y,p)}function d(y,p,b,C){var Z=b.type;return Z===V?O(y,p,b.props.children,C,b.key):p!==null&&(p.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===_e&&la(Z)===p.type)?(p=n(p,b.props),bn(p,b),p.return=y,p):(p=mi(b.type,b.key,b.props,null,y.mode,C),bn(p,b),p.return=y,p)}function x(y,p,b,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=Ju(b,y.mode,C),p.return=y,p):(p=n(p,b.children||[]),p.return=y,p)}function O(y,p,b,C,Z){return p===null||p.tag!==7?(p=Fl(b,y.mode,C,Z),p.return=y,p):(p=n(p,b),p.return=y,p)}function j(y,p,b){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Pu(""+p,y.mode,b),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case G:return b=mi(p.type,p.key,p.props,null,y.mode,b),bn(b,p),b.return=y,b;case P:return p=Ju(p,y.mode,b),p.return=y,p;case _e:return p=la(p),j(y,p,b)}if(ze(p)||me(p))return p=Fl(p,y.mode,b,null),p.return=y,p;if(typeof p.then=="function")return j(y,xi(p),b);if(p.$$typeof===ye)return j(y,hi(y,p),b);Si(y,p)}return null}function S(y,p,b,C){var Z=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return Z!==null?null:c(y,p,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case G:return b.key===Z?d(y,p,b,C):null;case P:return b.key===Z?x(y,p,b,C):null;case _e:return b=la(b),S(y,p,b,C)}if(ze(b)||me(b))return Z!==null?null:O(y,p,b,C,null);if(typeof b.then=="function")return S(y,p,xi(b),C);if(b.$$typeof===ye)return S(y,p,hi(y,b),C);Si(y,b)}return null}function M(y,p,b,C,Z){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return y=y.get(b)||null,c(p,y,""+C,Z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case G:return y=y.get(C.key===null?b:C.key)||null,d(p,y,C,Z);case P:return y=y.get(C.key===null?b:C.key)||null,x(p,y,C,Z);case _e:return C=la(C),M(y,p,b,C,Z)}if(ze(C)||me(C))return y=y.get(b)||null,O(p,y,C,Z,null);if(typeof C.then=="function")return M(y,p,b,xi(C),Z);if(C.$$typeof===ye)return M(y,p,b,hi(p,C),Z);Si(p,C)}return null}function Q(y,p,b,C){for(var Z=null,ge=null,w=p,ee=p=0,oe=null;w!==null&&ee<b.length;ee++){w.index>ee?(oe=w,w=null):oe=w.sibling;var he=S(y,w,b[ee],C);if(he===null){w===null&&(w=oe);break}e&&w&&he.alternate===null&&t(y,w),p=i(he,p,ee),ge===null?Z=he:ge.sibling=he,ge=he,w=oe}if(ee===b.length)return l(y,w),fe&&ll(y,ee),Z;if(w===null){for(;ee<b.length;ee++)w=j(y,b[ee],C),w!==null&&(p=i(w,p,ee),ge===null?Z=w:ge.sibling=w,ge=w);return fe&&ll(y,ee),Z}for(w=a(w);ee<b.length;ee++)oe=M(w,y,ee,b[ee],C),oe!==null&&(e&&oe.alternate!==null&&w.delete(oe.key===null?ee:oe.key),p=i(oe,p,ee),ge===null?Z=oe:ge.sibling=oe,ge=oe);return e&&w.forEach(function(wl){return t(y,wl)}),fe&&ll(y,ee),Z}function J(y,p,b,C){if(b==null)throw Error(s(151));for(var Z=null,ge=null,w=p,ee=p=0,oe=null,he=b.next();w!==null&&!he.done;ee++,he=b.next()){w.index>ee?(oe=w,w=null):oe=w.sibling;var wl=S(y,w,he.value,C);if(wl===null){w===null&&(w=oe);break}e&&w&&wl.alternate===null&&t(y,w),p=i(wl,p,ee),ge===null?Z=wl:ge.sibling=wl,ge=wl,w=oe}if(he.done)return l(y,w),fe&&ll(y,ee),Z;if(w===null){for(;!he.done;ee++,he=b.next())he=j(y,he.value,C),he!==null&&(p=i(he,p,ee),ge===null?Z=he:ge.sibling=he,ge=he);return fe&&ll(y,ee),Z}for(w=a(w);!he.done;ee++,he=b.next())he=M(w,y,ee,he.value,C),he!==null&&(e&&he.alternate!==null&&w.delete(he.key===null?ee:he.key),p=i(he,p,ee),ge===null?Z=he:ge.sibling=he,ge=he);return e&&w.forEach(function(jg){return t(y,jg)}),fe&&ll(y,ee),Z}function Ee(y,p,b,C){if(typeof b=="object"&&b!==null&&b.type===V&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case G:e:{for(var Z=b.key;p!==null;){if(p.key===Z){if(Z=b.type,Z===V){if(p.tag===7){l(y,p.sibling),C=n(p,b.props.children),C.return=y,y=C;break e}}else if(p.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===_e&&la(Z)===p.type){l(y,p.sibling),C=n(p,b.props),bn(C,b),C.return=y,y=C;break e}l(y,p);break}else t(y,p);p=p.sibling}b.type===V?(C=Fl(b.props.children,y.mode,C,b.key),C.return=y,y=C):(C=mi(b.type,b.key,b.props,null,y.mode,C),bn(C,b),C.return=y,y=C)}return u(y);case P:e:{for(Z=b.key;p!==null;){if(p.key===Z)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){l(y,p.sibling),C=n(p,b.children||[]),C.return=y,y=C;break e}else{l(y,p);break}else t(y,p);p=p.sibling}C=Ju(b,y.mode,C),C.return=y,y=C}return u(y);case _e:return b=la(b),Ee(y,p,b,C)}if(ze(b))return Q(y,p,b,C);if(me(b)){if(Z=me(b),typeof Z!="function")throw Error(s(150));return b=Z.call(b),J(y,p,b,C)}if(typeof b.then=="function")return Ee(y,p,xi(b),C);if(b.$$typeof===ye)return Ee(y,p,hi(y,b),C);Si(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,p!==null&&p.tag===6?(l(y,p.sibling),C=n(p,b),C.return=y,y=C):(l(y,p),C=Pu(b,y.mode,C),C.return=y,y=C),u(y)):l(y,p)}return function(y,p,b,C){try{vn=0;var Z=Ee(y,p,b,C);return qa=null,Z}catch(w){if(w===Da||w===vi)throw w;var ge=Mt(29,w,null,y.mode);return ge.lanes=C,ge.return=y,ge}finally{}}}var na=tr(!0),lr=tr(!1),El=!1;function cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ol(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=di(e),Go(e,null,l),t}return fi(e,a,t,l),di(e)}function xn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Xs(e,l)}}function oc(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,l=l.next}while(l!==null);i===null?n=i=t:i=i.next=t}else n=i=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var rc=!1;function Sn(){if(rc){var e=Ba;if(e!==null)throw e}}function An(e,t,l,a){rc=!1;var n=e.updateQueue;El=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var d=c,x=d.next;d.next=null,u===null?i=x:u.next=x,u=d;var O=e.alternate;O!==null&&(O=O.updateQueue,c=O.lastBaseUpdate,c!==u&&(c===null?O.firstBaseUpdate=x:c.next=x,O.lastBaseUpdate=d))}if(i!==null){var j=n.baseState;u=0,O=x=d=null,c=i;do{var S=c.lane&-536870913,M=S!==c.lane;if(M?(se&S)===S:(a&S)===S){S!==0&&S===ja&&(rc=!0),O!==null&&(O=O.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Q=e,J=c;S=t;var Ee=l;switch(J.tag){case 1:if(Q=J.payload,typeof Q=="function"){j=Q.call(Ee,j,S);break e}j=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=J.payload,S=typeof Q=="function"?Q.call(Ee,j,S):Q,S==null)break e;j=z({},j,S);break e;case 2:El=!0}}S=c.callback,S!==null&&(e.flags|=64,M&&(e.flags|=8192),M=n.callbacks,M===null?n.callbacks=[S]:M.push(S))}else M={lane:S,tag:c.tag,payload:c.payload,callback:c.callback,next:null},O===null?(x=O=M,d=j):O=O.next=M,u|=S;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;M=c,c=M.next,M.next=null,n.lastBaseUpdate=M,n.shared.pending=null}}while(!0);O===null&&(d=j),n.baseState=d,n.firstBaseUpdate=x,n.lastBaseUpdate=O,i===null&&(n.shared.lanes=0),Bl|=u,e.lanes=u,e.memoizedState=j}}function ar(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function nr(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)ar(l[e],t)}var Ra=g(null),Ai=g(0);function ir(e,t){e=ml,R(Ai,e),R(Ra,t),ml=e|t.baseLanes}function fc(){R(Ai,ml),R(Ra,Ra.current)}function dc(){ml=Ai.current,N(Ra),N(Ai)}var Et=g(null),kt=null;function Hl(e){var t=e.alternate;R(Ve,Ve.current&1),R(Et,e),kt===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(kt=e)}function mc(e){R(Ve,Ve.current),R(Et,e),kt===null&&(kt=e)}function ur(e){e.tag===22?(R(Ve,Ve.current),R(Et,e),kt===null&&(kt=e)):Cl()}function Cl(){R(Ve,Ve.current),R(Et,Et.current)}function zt(e){N(Et),kt===e&&(kt=null),N(Ve)}var Ve=g(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||bs(l)||xs(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=0,W=null,Te=null,Pe=null,Mi=!1,_a=!1,ia=!1,Ei=0,Tn=0,La=null,Sp=0;function Ue(){throw Error(s(321))}function pc(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Tt(e[l],t[l]))return!1;return!0}function gc(e,t,l,a,n,i){return il=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Yr:Nc,ia=!1,i=l(a,n),ia=!1,_a&&(i=sr(t,l,a,n)),cr(e),i}function cr(e){T.H=zn;var t=Te!==null&&Te.next!==null;if(il=0,Pe=Te=W=null,Mi=!1,Tn=0,La=null,t)throw Error(s(300));e===null||Je||(e=e.dependencies,e!==null&&gi(e)&&(Je=!0))}function sr(e,t,l,a){W=e;var n=0;do{if(_a&&(La=null),Tn=0,_a=!1,25<=n)throw Error(s(301));if(n+=1,Pe=Te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Vr,i=t(l,a)}while(_a);return i}function Ap(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Mn(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(W.flags|=1024),t}function hc(){var e=Ei!==0;return Ei=0,e}function yc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function vc(e){if(Mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mi=!1}il=0,Pe=Te=W=null,_a=!1,Tn=Ei=0,La=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?W.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Ze(){if(Te===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Pe===null?W.memoizedState:Pe.next;if(t!==null)Pe=t,Te=e;else{if(e===null)throw W.alternate===null?Error(s(467)):Error(s(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Pe===null?W.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mn(e){var t=Tn;return Tn+=1,La===null&&(La=[]),e=Wo(La,e,t),t=W,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Yr:Nc),e}function Oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mn(e);if(e.$$typeof===ye)return lt(e)}throw Error(s(438,String(e)))}function bc(e){var t=null,l=W.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=W.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=zi(),W.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=it;return t.index++,l}function ul(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=Ze();return xc(t,Te,e)}function xc(e,t,l){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var n=e.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=u=null,d=null,x=t,O=!1;do{var j=x.lane&-536870913;if(j!==x.lane?(se&j)===j:(il&j)===j){var S=x.revertLane;if(S===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),j===ja&&(O=!0);else if((il&S)===S){x=x.next,S===ja&&(O=!0);continue}else j={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=j,u=i):d=d.next=j,W.lanes|=S,Bl|=S;j=x.action,ia&&l(i,j),i=x.hasEagerState?x.eagerState:l(i,j)}else S={lane:j,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},d===null?(c=d=S,u=i):d=d.next=S,W.lanes|=j,Bl|=j;x=x.next}while(x!==null&&x!==t);if(d===null?u=i:d.next=c,!Tt(i,e.memoizedState)&&(Je=!0,O&&(l=Ba,l!==null)))throw l;e.memoizedState=i,e.baseState=u,e.baseQueue=d,a.lastRenderedState=i}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Sc(e){var t=Ze(),l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,i=t.memoizedState;if(n!==null){l.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);Tt(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),l.lastRenderedState=i}return[i,a]}function or(e,t,l){var a=W,n=Ze(),i=fe;if(i){if(l===void 0)throw Error(s(407));l=l()}else l=t();var u=!Tt((Te||n).memoizedState,l);if(u&&(n.memoizedState=l,Je=!0),n=n.queue,Mc(dr.bind(null,a,n,e),[e]),n.getSnapshot!==t||u||Pe!==null&&Pe.memoizedState.tag&1){if(a.flags|=2048,Ua(9,{destroy:void 0},fr.bind(null,a,n,l,t),null),He===null)throw Error(s(349));i||(il&127)!==0||rr(a,t,l)}return l}function rr(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=W.updateQueue,t===null?(t=zi(),W.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function fr(e,t,l,a){t.value=l,t.getSnapshot=a,mr(t)&&pr(e)}function dr(e,t,l){return l(function(){mr(t)&&pr(e)})}function mr(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Tt(e,l)}catch{return!0}}function pr(e){var t=Il(e,2);t!==null&&yt(t,e,2)}function Ac(e){var t=st();if(typeof e=="function"){var l=e;if(e=l(),ia){vl(!0);try{l()}finally{vl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:e},t}function gr(e,t,l,a){return e.baseState=l,xc(e,Te,typeof a=="function"?a:ul)}function Tp(e,t,l,a,n){if(ji(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};T.T!==null?l(!0):i.isTransition=!1,a(i),l=t.pending,l===null?(i.next=t.pending=i,hr(t,i)):(i.next=l.next,t.pending=l.next=i)}}function hr(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var i=T.T,u={};T.T=u;try{var c=l(n,a),d=T.S;d!==null&&d(u,c),yr(e,t,c)}catch(x){Tc(e,t,x)}finally{i!==null&&u.types!==null&&(i.types=u.types),T.T=i}}else try{i=l(n,a),yr(e,t,i)}catch(x){Tc(e,t,x)}}function yr(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){vr(e,t,a)},function(a){return Tc(e,t,a)}):vr(e,t,l)}function vr(e,t,l){t.status="fulfilled",t.value=l,br(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,hr(e,l)))}function Tc(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,br(t),t=t.next;while(t!==a)}e.action=null}function br(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xr(e,t){return t}function Sr(e,t){if(fe){var l=He.formState;if(l!==null){e:{var a=W;if(fe){if(je){t:{for(var n=je,i=Gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Qt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){je=Qt(n.nextSibling),a=n.data==="F!";break e}}Tl(a)}a=!1}a&&(t=l[0])}}return l=st(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:t},l.queue=a,l=kr.bind(null,W,a),a.dispatch=l,a=Ac(!1),i=Cc.bind(null,W,!1,a.queue),a=st(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Tp.bind(null,W,n,i,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function Ar(e){var t=Ze();return Tr(t,Te,e)}function Tr(e,t,l){if(t=xc(e,t,xr)[0],e=Hi(ul)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Mn(t)}catch(u){throw u===Da?vi:u}else a=t;t=Ze();var n=t.queue,i=n.dispatch;return l!==t.memoizedState&&(W.flags|=2048,Ua(9,{destroy:void 0},Mp.bind(null,n,l),null)),[a,i,e]}function Mp(e,t){e.action=t}function Mr(e){var t=Ze(),l=Te;if(l!==null)return Tr(t,l,e);Ze(),t=t.memoizedState,l=Ze();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ua(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=W.updateQueue,t===null&&(t=zi(),W.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function Er(){return Ze().memoizedState}function Ci(e,t,l,a){var n=st();W.flags|=e,n.memoizedState=Ua(1|t,{destroy:void 0},l,a===void 0?null:a)}function Ni(e,t,l,a){var n=Ze();a=a===void 0?null:a;var i=n.memoizedState.inst;Te!==null&&a!==null&&pc(a,Te.memoizedState.deps)?n.memoizedState=Ua(t,i,l,a):(W.flags|=e,n.memoizedState=Ua(1|t,i,l,a))}function zr(e,t){Ci(8390656,8,e,t)}function Mc(e,t){Ni(2048,8,e,t)}function Ep(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=zi(),W.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function Or(e){var t=Ze().memoizedState;return Ep({ref:t,nextImpl:e}),function(){if((ve&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Hr(e,t){return Ni(4,2,e,t)}function Cr(e,t){return Ni(4,4,e,t)}function Nr(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jr(e,t,l){l=l!=null?l.concat([e]):null,Ni(4,4,Nr.bind(null,t,e),l)}function Ec(){}function Br(e,t){var l=Ze();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&pc(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Dr(e,t){var l=Ze();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&pc(t,a[1]))return a[0];if(a=e(),ia){vl(!0);try{e()}finally{vl(!1)}}return l.memoizedState=[a,t],a}function zc(e,t,l){return l===void 0||(il&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Rf(),W.lanes|=e,Bl|=e,l)}function qr(e,t,l,a){return Tt(l,t)?l:Ra.current!==null?(e=zc(e,l,a),Tt(e,t)||(Je=!0),e):(il&42)===0||(il&1073741824)!==0&&(se&261930)===0?(Je=!0,e.memoizedState=l):(e=Rf(),W.lanes|=e,Bl|=e,t)}function Rr(e,t,l,a,n){var i=q.p;q.p=i!==0&&8>i?i:8;var u=T.T,c={};T.T=c,Cc(e,!1,t,l);try{var d=n(),x=T.S;if(x!==null&&x(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var O=xp(d,a);En(e,t,O,Ct(e))}else En(e,t,a,Ct(e))}catch(j){En(e,t,{then:function(){},status:"rejected",reason:j},Ct())}finally{q.p=i,u!==null&&c.types!==null&&(u.types=c.types),T.T=u}}function zp(){}function Oc(e,t,l,a){if(e.tag!==5)throw Error(s(476));var n=_r(e).queue;Rr(e,n,t,Y,l===null?zp:function(){return Lr(e),l(a)})}function _r(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:Y},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ul,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Lr(e){var t=_r(e);t.next===null&&(t=e.alternate.memoizedState),En(e,t.next.queue,{},Ct())}function Hc(){return lt(wn)}function Ur(){return Ze().memoizedState}function Gr(){return Ze().memoizedState}function Op(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Ct();e=zl(l);var a=Ol(t,e,l);a!==null&&(yt(a,t,l),xn(a,t,l)),t={cache:ac()},e.payload=t;return}t=t.return}}function Hp(e,t,l){var a=Ct();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ji(e)?Qr(t,l):(l=Xu(e,t,l,a),l!==null&&(yt(l,e,a),wr(l,t,a)))}function kr(e,t,l){var a=Ct();En(e,t,l,a)}function En(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ji(e))Qr(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,c=i(u,l);if(n.hasEagerState=!0,n.eagerState=c,Tt(c,u))return fi(e,t,n,0),He===null&&ri(),!1}catch{}finally{}if(l=Xu(e,t,n,a),l!==null)return yt(l,e,a),wr(l,t,a),!0}return!1}function Cc(e,t,l,a){if(a={lane:2,revertLane:cs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ji(e)){if(t)throw Error(s(479))}else t=Xu(e,l,a,2),t!==null&&yt(t,e,2)}function ji(e){var t=e.alternate;return e===W||t!==null&&t===W}function Qr(e,t){_a=Mi=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function wr(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Xs(e,l)}}var zn={readContext:lt,use:Oi,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};zn.useEffectEvent=Ue;var Yr={readContext:lt,use:Oi,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:zr,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ci(4194308,4,Nr.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ci(4194308,4,e,t)},useInsertionEffect:function(e,t){Ci(4,2,e,t)},useMemo:function(e,t){var l=st();t=t===void 0?null:t;var a=e();if(ia){vl(!0);try{e()}finally{vl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=st();if(l!==void 0){var n=l(t);if(ia){vl(!0);try{l(t)}finally{vl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Hp.bind(null,W,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Ac(e);var t=e.queue,l=kr.bind(null,W,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Ec,useDeferredValue:function(e,t){var l=st();return zc(l,e,t)},useTransition:function(){var e=Ac(!1);return e=Rr.bind(null,W,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=W,n=st();if(fe){if(l===void 0)throw Error(s(407));l=l()}else{if(l=t(),He===null)throw Error(s(349));(se&127)!==0||rr(a,t,l)}n.memoizedState=l;var i={value:l,getSnapshot:t};return n.queue=i,zr(dr.bind(null,a,i,e),[e]),a.flags|=2048,Ua(9,{destroy:void 0},fr.bind(null,a,i,l,t),null),l},useId:function(){var e=st(),t=He.identifierPrefix;if(fe){var l=Jt,a=Pt;l=(a&~(1<<32-At(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Ei++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Sp++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hc,useFormState:Sr,useActionState:Sr,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Cc.bind(null,W,!0,l),l.dispatch=t,[e,t]},useMemoCache:bc,useCacheRefresh:function(){return st().memoizedState=Op.bind(null,W)},useEffectEvent:function(e){var t=st(),l={impl:e};return t.memoizedState=l,function(){if((ve&2)!==0)throw Error(s(440));return l.impl.apply(void 0,arguments)}}},Nc={readContext:lt,use:Oi,useCallback:Br,useContext:lt,useEffect:Mc,useImperativeHandle:jr,useInsertionEffect:Hr,useLayoutEffect:Cr,useMemo:Dr,useReducer:Hi,useRef:Er,useState:function(){return Hi(ul)},useDebugValue:Ec,useDeferredValue:function(e,t){var l=Ze();return qr(l,Te.memoizedState,e,t)},useTransition:function(){var e=Hi(ul)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Mn(e),t]},useSyncExternalStore:or,useId:Ur,useHostTransitionStatus:Hc,useFormState:Ar,useActionState:Ar,useOptimistic:function(e,t){var l=Ze();return gr(l,Te,e,t)},useMemoCache:bc,useCacheRefresh:Gr};Nc.useEffectEvent=Or;var Vr={readContext:lt,use:Oi,useCallback:Br,useContext:lt,useEffect:Mc,useImperativeHandle:jr,useInsertionEffect:Hr,useLayoutEffect:Cr,useMemo:Dr,useReducer:Sc,useRef:Er,useState:function(){return Sc(ul)},useDebugValue:Ec,useDeferredValue:function(e,t){var l=Ze();return Te===null?zc(l,e,t):qr(l,Te.memoizedState,e,t)},useTransition:function(){var e=Sc(ul)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Mn(e),t]},useSyncExternalStore:or,useId:Ur,useHostTransitionStatus:Hc,useFormState:Mr,useActionState:Mr,useOptimistic:function(e,t){var l=Ze();return Te!==null?gr(l,Te,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:bc,useCacheRefresh:Gr};Vr.useEffectEvent=Or;function jc(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:z({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Bc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Ct(),n=zl(a);n.payload=t,l!=null&&(n.callback=l),t=Ol(e,n,a),t!==null&&(yt(t,e,a),xn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Ct(),n=zl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=Ol(e,n,a),t!==null&&(yt(t,e,a),xn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Ct(),a=zl(l);a.tag=2,t!=null&&(a.callback=t),t=Ol(e,a,l),t!==null&&(yt(t,e,l),xn(t,e,l))}};function Zr(e,t,l,a,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!dn(l,a)||!dn(n,i):!0}function Xr(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&Bc.enqueueReplaceState(t,t.state,null)}function ua(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=z({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Kr(e){oi(e)}function Pr(e){console.error(e)}function Jr(e){oi(e)}function Bi(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ir(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Dc(e,t,l){return l=zl(l),l.tag=3,l.payload={element:null},l.callback=function(){Bi(e,t)},l}function Fr(e){return e=zl(e),e.tag=3,e}function Wr(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;e.payload=function(){return n(i)},e.callback=function(){Ir(t,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ir(t,l,a),typeof n!="function"&&(Dl===null?Dl=new Set([this]):Dl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Cp(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Na(t,l,n,!0),l=Et.current,l!==null){switch(l.tag){case 31:case 13:return kt===null?Vi():l.alternate===null&&Ge===0&&(Ge=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===bi?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),ns(e,a,n)),!1;case 22:return l.flags|=65536,a===bi?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),ns(e,a,n)),!1}throw Error(s(435,l.tag))}return ns(e,a,n),Vi(),!1}if(fe)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Wu&&(e=Error(s(422),{cause:a}),gn(_t(e,l)))):(a!==Wu&&(t=Error(s(423),{cause:a}),gn(_t(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=_t(a,l),n=Dc(e.stateNode,a,n),oc(e,n),Ge!==4&&(Ge=2)),!1;var i=Error(s(520),{cause:a});if(i=_t(i,l),qn===null?qn=[i]:qn.push(i),Ge!==4&&(Ge=2),t===null)return!0;a=_t(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=Dc(l.stateNode,a,e),oc(l,e),!1;case 1:if(t=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Dl===null||!Dl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Fr(n),Wr(n,e,l,a),oc(l,n),!1}l=l.return}while(l!==null);return!1}var qc=Error(s(461)),Je=!1;function at(e,t,l,a){t.child=e===null?lr(t,null,l,a):na(t,e.child,l,a)}function $r(e,t,l,a,n){l=l.render;var i=t.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return ea(t),a=gc(e,t,l,u,i,n),c=hc(),e!==null&&!Je?(yc(e,t,n),cl(e,t,n)):(fe&&c&&Iu(t),t.flags|=1,at(e,t,a,n),t.child)}function ef(e,t,l,a,n){if(e===null){var i=l.type;return typeof i=="function"&&!Ku(i)&&i.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=i,tf(e,t,i,a,n)):(e=mi(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!wc(e,n)){var u=i.memoizedProps;if(l=l.compare,l=l!==null?l:dn,l(u,a)&&e.ref===t.ref)return cl(e,t,n)}return t.flags|=1,e=tl(i,a),e.ref=t.ref,e.return=t,t.child=e}function tf(e,t,l,a,n){if(e!==null){var i=e.memoizedProps;if(dn(i,a)&&e.ref===t.ref)if(Je=!1,t.pendingProps=a=i,wc(e,n))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,cl(e,t,n)}return Rc(e,t,l,a,n)}function lf(e,t,l,a){var n=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return af(e,t,i,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&yi(t,i!==null?i.cachePool:null),i!==null?ir(t,i):fc(),ur(t);else return a=t.lanes=536870912,af(e,t,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(yi(t,i.cachePool),ir(t,i),Cl(),t.memoizedState=null):(e!==null&&yi(t,null),fc(),Cl());return at(e,t,n,l),t.child}function On(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function af(e,t,l,a,n){var i=ic();return i=i===null?null:{parent:Ke._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&yi(t,null),fc(),ur(t),e!==null&&Na(e,t,a,!0),t.childLanes=n,null}function Di(e,t){return t=Ri({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nf(e,t,l){return na(t,e.child,null,l),e=Di(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function Np(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(a.mode==="hidden")return e=Di(t,a),t.lanes=536870912,On(null,e);if(mc(t),(e=je)?(e=yd(e,Gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sl!==null?{id:Pt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},l=Qo(e),l.return=t,t.child=l,tt=t,je=null)):e=null,e===null)throw Tl(t);return t.lanes=536870912,null}return Di(t,a)}var i=e.memoizedState;if(i!==null){var u=i.dehydrated;if(mc(t),n)if(t.flags&256)t.flags&=-257,t=nf(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Je||Na(e,t,l,!1),n=(l&e.childLanes)!==0,Je||n){if(a=He,a!==null&&(u=Ks(a,l),u!==0&&u!==i.retryLane))throw i.retryLane=u,Il(e,u),yt(a,e,u),qc;Vi(),t=nf(e,t,l)}else e=i.treeContext,je=Qt(u.nextSibling),tt=t,fe=!0,Al=null,Gt=!1,e!==null&&Vo(t,e),t=Di(t,a),t.flags|=4096;return t}return e=tl(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function qi(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(s(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Rc(e,t,l,a,n){return ea(t),l=gc(e,t,l,a,void 0,n),a=hc(),e!==null&&!Je?(yc(e,t,n),cl(e,t,n)):(fe&&a&&Iu(t),t.flags|=1,at(e,t,l,n),t.child)}function uf(e,t,l,a,n,i){return ea(t),t.updateQueue=null,l=sr(t,a,l,n),cr(e),a=hc(),e!==null&&!Je?(yc(e,t,i),cl(e,t,i)):(fe&&a&&Iu(t),t.flags|=1,at(e,t,l,i),t.child)}function cf(e,t,l,a,n){if(ea(t),t.stateNode===null){var i=za,u=l.contextType;typeof u=="object"&&u!==null&&(i=lt(u)),i=new l(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},cc(t),u=l.contextType,i.context=typeof u=="object"&&u!==null?lt(u):za,i.state=t.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(jc(t,l,u,a),i.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Bc.enqueueReplaceState(i,i.state,null),An(t,a,i,n),Sn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,d=ua(l,c);i.props=d;var x=i.context,O=l.contextType;u=za,typeof O=="object"&&O!==null&&(u=lt(O));var j=l.getDerivedStateFromProps;O=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||x!==u)&&Xr(t,i,a,u),El=!1;var S=t.memoizedState;i.state=S,An(t,a,i,n),Sn(),x=t.memoizedState,c||S!==x||El?(typeof j=="function"&&(jc(t,l,j,a),x=t.memoizedState),(d=El||Zr(t,l,d,a,S,x,u))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=x),i.props=a,i.state=x,i.context=u,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,sc(e,t),u=t.memoizedProps,O=ua(l,u),i.props=O,j=t.pendingProps,S=i.context,x=l.contextType,d=za,typeof x=="object"&&x!==null&&(d=lt(x)),c=l.getDerivedStateFromProps,(x=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==j||S!==d)&&Xr(t,i,a,d),El=!1,S=t.memoizedState,i.state=S,An(t,a,i,n),Sn();var M=t.memoizedState;u!==j||S!==M||El||e!==null&&e.dependencies!==null&&gi(e.dependencies)?(typeof c=="function"&&(jc(t,l,c,a),M=t.memoizedState),(O=El||Zr(t,l,O,a,S,M,d)||e!==null&&e.dependencies!==null&&gi(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,M,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,M,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=M),i.props=a,i.state=M,i.context=d,a=O):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,qi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=na(t,e.child,null,n),t.child=na(t,null,l,n)):at(e,t,l,n),t.memoizedState=i.state,e=t.child):e=cl(e,t,n),e}function sf(e,t,l,a){return Wl(),t.flags|=256,at(e,t,l,a),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lc(e){return{baseLanes:e,cachePool:Io()}}function Uc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Ht),e}function of(e,t,l){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(n?Hl(t):Cl(),(e=je)?(e=yd(e,Gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sl!==null?{id:Pt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},l=Qo(e),l.return=t,t.child=l,tt=t,je=null)):e=null,e===null)throw Tl(t);return xs(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(Cl(),n=t.mode,c=Ri({mode:"hidden",children:c},n),a=Fl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=Lc(l),a.childLanes=Uc(e,u,l),t.memoizedState=_c,On(null,a)):(Hl(t),Gc(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(Hl(t),t.flags&=-257,t=kc(e,t,l)):t.memoizedState!==null?(Cl(),t.child=e.child,t.flags|=128,t=null):(Cl(),c=a.fallback,n=t.mode,a=Ri({mode:"visible",children:a.children},n),c=Fl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,na(t,e.child,null,l),a=t.child,a.memoizedState=Lc(l),a.childLanes=Uc(e,u,l),t.memoizedState=_c,t=On(null,a));else if(Hl(t),xs(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var x=u.dgst;u=x,a=Error(s(419)),a.stack="",a.digest=u,gn({value:a,source:null,stack:null}),t=kc(e,t,l)}else if(Je||Na(e,t,l,!1),u=(l&e.childLanes)!==0,Je||u){if(u=He,u!==null&&(a=Ks(u,l),a!==0&&a!==d.retryLane))throw d.retryLane=a,Il(e,a),yt(u,e,a),qc;bs(c)||Vi(),t=kc(e,t,l)}else bs(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,je=Qt(c.nextSibling),tt=t,fe=!0,Al=null,Gt=!1,e!==null&&Vo(t,e),t=Gc(t,a.children),t.flags|=4096);return t}return n?(Cl(),c=a.fallback,n=t.mode,d=e.child,x=d.sibling,a=tl(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,x!==null?c=tl(x,c):(c=Fl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,On(null,a),a=t.child,c=e.child.memoizedState,c===null?c=Lc(l):(n=c.cachePool,n!==null?(d=Ke._currentValue,n=n.parent!==d?{parent:d,pool:d}:n):n=Io(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=Uc(e,u,l),t.memoizedState=_c,On(e.child,a)):(Hl(t),l=e.child,e=l.sibling,l=tl(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=l,t.memoizedState=null,l)}function Gc(e,t){return t=Ri({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ri(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function kc(e,t,l){return na(t,e.child,null,l),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rf(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),tc(e.return,t,l)}function Qc(e,t,l,a,n,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n,u.treeForkCount=i)}function ff(e,t,l){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Ve.current,c=(u&2)!==0;if(c?(u=u&1|2,t.flags|=128):u&=1,R(Ve,u),at(e,t,a,l),a=fe?pn:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,l,t);else if(e.tag===19)rf(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Ti(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),Qc(t,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ti(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}Qc(t,!0,l,null,i,a);break;case"together":Qc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function cl(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Bl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Na(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,l=tl(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=tl(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function wc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&gi(e)))}function jp(e,t,l){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Ml(t,Ke,e.memoizedState.cache),Wl();break;case 27:case 5:xt(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Ml(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?of(e,t,l):(Hl(t),e=cl(e,t,l),e!==null?e.sibling:null);Hl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Na(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return ff(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(Ve,Ve.current),a)break;return null;case 22:return t.lanes=0,lf(e,t,l,t.pendingProps);case 24:Ml(t,Ke,e.memoizedState.cache)}return cl(e,t,l)}function df(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!wc(e,l)&&(t.flags&128)===0)return Je=!1,jp(e,t,l);Je=(e.flags&131072)!==0}else Je=!1,fe&&(t.flags&1048576)!==0&&Yo(t,pn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=la(t.elementType),t.type=e,typeof e=="function")Ku(e)?(a=ua(e,a),t.tag=1,t=cf(null,t,e,a,l)):(t.tag=0,t=Rc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===Ce){t.tag=11,t=$r(null,t,e,a,l);break e}else if(n===X){t.tag=14,t=ef(null,t,e,a,l);break e}}throw t=k(e)||e,Error(s(306,t,""))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=ua(a,t.pendingProps),cf(e,t,a,n,l);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,sc(e,t),An(t,a,null,l);var u=t.memoizedState;if(a=u.cache,Ml(t,Ke,a),a!==i.cache&&lc(t,[Ke],l,!0),Sn(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=sf(e,t,a,l);break e}else if(a!==n){n=_t(Error(s(424)),t),gn(n),t=sf(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Qt(e.firstChild),tt=t,fe=!0,Al=null,Gt=!0,l=lr(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Wl(),a===n){t=cl(e,t,l);break e}at(e,t,a,l)}t=t.child}return t;case 26:return qi(e,t),e===null?(l=Td(t.type,null,t.pendingProps,null))?t.memoizedState=l:fe||(l=t.type,e=t.pendingProps,a=Fi($.current).createElement(l),a[et]=t,a[ft]=e,nt(a,l,e),We(a),t.stateNode=a):t.memoizedState=Td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xt(t),e===null&&fe&&(a=t.stateNode=xd(t.type,t.pendingProps,$.current),tt=t,Gt=!0,n=je,Ll(t.type)?(Ss=n,je=Qt(a.firstChild)):je=n),at(e,t,t.pendingProps.children,l),qi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((n=a=je)&&(a=cg(a,t.type,t.pendingProps,Gt),a!==null?(t.stateNode=a,tt=t,je=Qt(a.firstChild),Gt=!1,n=!0):n=!1),n||Tl(t)),xt(t),n=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,hs(n,i)?a=null:u!==null&&hs(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=gc(e,t,Ap,null,null,l),wn._currentValue=n),qi(e,t),at(e,t,a,l),t.child;case 6:return e===null&&fe&&((e=l=je)&&(l=sg(l,t.pendingProps,Gt),l!==null?(t.stateNode=l,tt=t,je=null,e=!0):e=!1),e||Tl(t)),null;case 13:return of(e,t,l);case 4:return Le(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=na(t,null,a,l):at(e,t,a,l),t.child;case 11:return $r(e,t,t.type,t.pendingProps,l);case 7:return at(e,t,t.pendingProps,l),t.child;case 8:return at(e,t,t.pendingProps.children,l),t.child;case 12:return at(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,Ml(t,t.type,a.value),at(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,ea(t),n=lt(n),a=a(n),t.flags|=1,at(e,t,a,l),t.child;case 14:return ef(e,t,t.type,t.pendingProps,l);case 15:return tf(e,t,t.type,t.pendingProps,l);case 19:return ff(e,t,l);case 31:return Np(e,t,l);case 22:return lf(e,t,l,t.pendingProps);case 24:return ea(t),a=lt(Ke),e===null?(n=ic(),n===null&&(n=He,i=ac(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),t.memoizedState={parent:a,cache:n},cc(t),Ml(t,Ke,n)):((e.lanes&l)!==0&&(sc(e,t),An(t,null,null,l),Sn()),n=e.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ml(t,Ke,a)):(a=i.cache,Ml(t,Ke,a),a!==n.cache&&lc(t,[Ke],l,!0))),at(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function sl(e){e.flags|=4}function Yc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Gf())e.flags|=8192;else throw aa=bi,uc}else e.flags&=-16777217}function mf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hd(t))if(Gf())e.flags|=8192;else throw aa=bi,uc}function _i(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vs():536870912,e.lanes|=t,wa|=t)}function Hn(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Bp(e,t,l){var a=t.pendingProps;switch(Fu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),nl(Ke),pe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?sl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),Be(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(sl(t),i!==null?(Be(t),mf(t,i)):(Be(t),Yc(t,n,null,a,l))):i?i!==e.memoizedState?(sl(t),Be(t),mf(t,i)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&sl(t),Be(t),Yc(t,n,e,a,l)),null;case 27:if(Nt(t),l=$.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sl(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Be(t),null}e=U.current,Ca(t)?Zo(t):(e=xd(n,a,l),t.stateNode=e,sl(t))}return Be(t),null;case 5:if(Nt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&sl(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Be(t),null}if(i=U.current,Ca(t))Zo(t);else{var u=Fi($.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[et]=t,i[ft]=a;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;e:switch(nt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&sl(t)}}return Be(t),Yc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&sl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=$.current,Ca(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=tt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[et]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||od(e.nodeValue,l)),e||Tl(t,!0)}else e=Fi(e).createTextNode(a),e[et]=t,t.stateNode=e}return Be(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=Ca(t),l!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[et]=t}else Wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else l=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Be(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ca(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[et]=t}else Wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),n=!1}else n=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),_i(t,t.updateQueue),Be(t),null);case 4:return pe(),e===null&&fs(t.stateNode.containerInfo),Be(t),null;case 10:return nl(t.type),Be(t),null;case 19:if(N(Ve),a=t.memoizedState,a===null)return Be(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Hn(a,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Ti(e),i!==null){for(t.flags|=128,Hn(a,!1),e=i.updateQueue,t.updateQueue=e,_i(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)ko(l,e),l=l.sibling;return R(Ve,Ve.current&1|2),fe&&ll(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&qe()>Qi&&(t.flags|=128,n=!0,Hn(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ti(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,_i(t,e),Hn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!fe)return Be(t),null}else 2*qe()-a.renderingStartTime>Qi&&l!==536870912&&(t.flags|=128,n=!0,Hn(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=qe(),e.sibling=null,l=Ve.current,R(Ve,n?l&1|2:l&1),fe&&ll(t,a.treeForkCount),e):(Be(t),null);case 22:case 23:return zt(t),dc(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),l=t.updateQueue,l!==null&&_i(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&N(ta),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),nl(Ke),Be(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Dp(e,t){switch(Fu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nl(Ke),pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Nt(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(s(340));Wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(Ve),null;case 4:return pe(),null;case 10:return nl(t.type),null;case 22:case 23:return zt(t),dc(),e!==null&&N(ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return nl(Ke),null;case 25:return null;default:return null}}function pf(e,t){switch(Fu(t),t.tag){case 3:nl(Ke),pe();break;case 26:case 27:case 5:Nt(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:N(Ve);break;case 10:nl(t.type);break;case 22:case 23:zt(t),dc(),e!==null&&N(ta);break;case 24:nl(Ke)}}function Cn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var i=l.create,u=l.inst;a=i(),u.destroy=a}l=l.next}while(l!==n)}}catch(c){Ae(t,t.return,c)}}function Nl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=t;var d=l,x=c;try{x()}catch(O){Ae(n,d,O)}}}a=a.next}while(a!==i)}}catch(O){Ae(t,t.return,O)}}function gf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{nr(t,l)}catch(a){Ae(e,e.return,a)}}}function hf(e,t,l){l.props=ua(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Ae(e,t,a)}}function Nn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Ae(e,t,n)}}function It(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Ae(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Ae(e,t,n)}else l.current=null}function yf(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Ae(e,e.return,n)}}function Vc(e,t,l){try{var a=e.stateNode;tg(a,e.type,l,t),a[ft]=t}catch(n){Ae(e,e.return,n)}}function vf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ll(e.type)||e.tag===4}function Zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=$t));else if(a!==4&&(a===27&&Ll(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,l),e=e.sibling;e!==null;)Xc(e,t,l),e=e.sibling}function Li(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Ll(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Li(e,t,l),e=e.sibling;e!==null;)Li(e,t,l),e=e.sibling}function bf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);nt(t,a,l),t[et]=e,t[ft]=l}catch(i){Ae(e,e.return,i)}}var ol=!1,Ie=!1,Kc=!1,xf=typeof WeakSet=="function"?WeakSet:Set,$e=null;function qp(e,t){if(e=e.containerInfo,ps=nu,e=jo(e),ku(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break e}var u=0,c=-1,d=-1,x=0,O=0,j=e,S=null;t:for(;;){for(var M;j!==l||n!==0&&j.nodeType!==3||(c=u+n),j!==i||a!==0&&j.nodeType!==3||(d=u+a),j.nodeType===3&&(u+=j.nodeValue.length),(M=j.firstChild)!==null;)S=j,j=M;for(;;){if(j===e)break t;if(S===l&&++x===n&&(c=u),S===i&&++O===a&&(d=u),(M=j.nextSibling)!==null)break;j=S,S=j.parentNode}j=M}l=c===-1||d===-1?null:{start:c,end:d}}else l=null}l=l||{start:0,end:0}}else l=null;for(gs={focusedElem:e,selectionRange:l},nu=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,l=t,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var Q=ua(l.type,n);e=a.getSnapshotBeforeUpdate(Q,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(J){Ae(l,l.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)vs(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function Sf(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:fl(e,l),a&4&&Cn(5,l);break;case 1:if(fl(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(u){Ae(l,l.return,u)}else{var n=ua(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Ae(l,l.return,u)}}a&64&&gf(l),a&512&&Nn(l,l.return);break;case 3:if(fl(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{nr(e,t)}catch(u){Ae(l,l.return,u)}}break;case 27:t===null&&a&4&&bf(l);case 26:case 5:fl(e,l),t===null&&a&4&&yf(l),a&512&&Nn(l,l.return);break;case 12:fl(e,l);break;case 31:fl(e,l),a&4&&Mf(e,l);break;case 13:fl(e,l),a&4&&Ef(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Yp.bind(null,l),og(e,l))));break;case 22:if(a=l.memoizedState!==null||ol,!a){t=t!==null&&t.memoizedState!==null||Ie,n=ol;var i=Ie;ol=a,(Ie=t)&&!i?dl(e,l,(l.subtreeFlags&8772)!==0):fl(e,l),ol=n,Ie=i}break;case 30:break;default:fl(e,l)}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,mt=!1;function rl(e,t,l){for(l=l.child;l!==null;)Tf(e,t,l),l=l.sibling}function Tf(e,t,l){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount($a,l)}catch{}switch(l.tag){case 26:Ie||It(l,t),rl(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ie||It(l,t);var a=Re,n=mt;Ll(l.type)&&(Re=l.stateNode,mt=!1),rl(e,t,l),Gn(l.stateNode),Re=a,mt=n;break;case 5:Ie||It(l,t);case 6:if(a=Re,n=mt,Re=null,rl(e,t,l),Re=a,mt=n,Re!==null)if(mt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(l.stateNode)}catch(i){Ae(l,t,i)}else try{Re.removeChild(l.stateNode)}catch(i){Ae(l,t,i)}break;case 18:Re!==null&&(mt?(e=Re,gd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ia(e)):gd(Re,l.stateNode));break;case 4:a=Re,n=mt,Re=l.stateNode.containerInfo,mt=!0,rl(e,t,l),Re=a,mt=n;break;case 0:case 11:case 14:case 15:Nl(2,l,t),Ie||Nl(4,l,t),rl(e,t,l);break;case 1:Ie||(It(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&hf(l,t,a)),rl(e,t,l);break;case 21:rl(e,t,l);break;case 22:Ie=(a=Ie)||l.memoizedState!==null,rl(e,t,l),Ie=a;break;default:rl(e,t,l)}}function Mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ia(e)}catch(l){Ae(t,t.return,l)}}}function Ef(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ia(e)}catch(l){Ae(t,t.return,l)}}function Rp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(s(435,e.tag))}}function Ui(e,t){var l=Rp(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=Vp.bind(null,e,a);a.then(n,n)}})}function pt(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=e,u=t,c=u;e:for(;c!==null;){switch(c.tag){case 27:if(Ll(c.type)){Re=c.stateNode,mt=!1;break e}break;case 5:Re=c.stateNode,mt=!1;break e;case 3:case 4:Re=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(Re===null)throw Error(s(160));Tf(i,u,n),Re=null,mt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zf(t,e),t=t.sibling}var Xt=null;function zf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(t,e),gt(e),a&4&&(Nl(3,e,e.return),Cn(3,e),Nl(5,e,e.return));break;case 1:pt(t,e),gt(e),a&512&&(Ie||l===null||It(l,l.return)),a&64&&ol&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Xt;if(pt(t,e),gt(e),a&512&&(Ie||l===null||It(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ln]||i[et]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),nt(i,a,l),i[et]=e,We(i),a=i;break e;case"link":var u=zd("link","href",n).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break t}}i=n.createElement(a),nt(i,a,l),n.head.appendChild(i);break;case"meta":if(u=zd("meta","content",n).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break t}}i=n.createElement(a),nt(i,a,l),n.head.appendChild(i);break;default:throw Error(s(468,a))}i[et]=e,We(i),a=i}e.stateNode=a}else Od(n,e.type,e.stateNode);else e.stateNode=Ed(n,a,e.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Od(n,e.type,e.stateNode):Ed(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Vc(e,e.memoizedProps,l.memoizedProps)}break;case 27:pt(t,e),gt(e),a&512&&(Ie||l===null||It(l,l.return)),l!==null&&a&4&&Vc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(pt(t,e),gt(e),a&512&&(Ie||l===null||It(l,l.return)),e.flags&32){n=e.stateNode;try{ba(n,"")}catch(Q){Ae(e,e.return,Q)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Vc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Kc=!0);break;case 6:if(pt(t,e),gt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(Q){Ae(e,e.return,Q)}}break;case 3:if(eu=null,n=Xt,Xt=Wi(t.containerInfo),pt(t,e),Xt=n,gt(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ia(t.containerInfo)}catch(Q){Ae(e,e.return,Q)}Kc&&(Kc=!1,Of(e));break;case 4:a=Xt,Xt=Wi(e.stateNode.containerInfo),pt(t,e),gt(e),Xt=a;break;case 12:pt(t,e),gt(e);break;case 31:pt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 13:pt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ki=qe()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 22:n=e.memoizedState!==null;var d=l!==null&&l.memoizedState!==null,x=ol,O=Ie;if(ol=x||n,Ie=O||d,pt(t,e),Ie=O,ol=x,gt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||d||ol||Ie||ca(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){d=l=t;try{if(i=d.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=d.stateNode;var j=d.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(Q){Ae(d,d.return,Q)}}}else if(t.tag===6){if(l===null){d=t;try{d.stateNode.nodeValue=n?"":d.memoizedProps}catch(Q){Ae(d,d.return,Q)}}}else if(t.tag===18){if(l===null){d=t;try{var M=d.stateNode;n?hd(M,!0):hd(d.stateNode,!1)}catch(Q){Ae(d,d.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Ui(e,l))));break;case 19:pt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 30:break;case 21:break;default:pt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(vf(a)){l=a;break}a=a.return}if(l==null)throw Error(s(160));switch(l.tag){case 27:var n=l.stateNode,i=Zc(e);Li(e,i,n);break;case 5:var u=l.stateNode;l.flags&32&&(ba(u,""),l.flags&=-33);var c=Zc(e);Li(e,c,u);break;case 3:case 4:var d=l.stateNode.containerInfo,x=Zc(e);Xc(e,x,d);break;default:throw Error(s(161))}}catch(O){Ae(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Of(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Of(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sf(e,t.alternate,t),t=t.sibling}function ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nl(4,t,t.return),ca(t);break;case 1:It(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&hf(t,t.return,l),ca(t);break;case 27:Gn(t.stateNode);case 26:case 5:It(t,t.return),ca(t);break;case 22:t.memoizedState===null&&ca(t);break;case 30:ca(t);break;default:ca(t)}e=e.sibling}}function dl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:dl(n,i,l),Cn(4,i);break;case 1:if(dl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(x){Ae(a,a.return,x)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var d=n.shared.hiddenCallbacks;if(d!==null)for(n.shared.hiddenCallbacks=null,n=0;n<d.length;n++)ar(d[n],c)}catch(x){Ae(a,a.return,x)}}l&&u&64&&gf(i),Nn(i,i.return);break;case 27:bf(i);case 26:case 5:dl(n,i,l),l&&a===null&&u&4&&yf(i),Nn(i,i.return);break;case 12:dl(n,i,l);break;case 31:dl(n,i,l),l&&u&4&&Mf(n,i);break;case 13:dl(n,i,l),l&&u&4&&Ef(n,i);break;case 22:i.memoizedState===null&&dl(n,i,l),Nn(i,i.return);break;case 30:break;default:dl(n,i,l)}t=t.sibling}}function Pc(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&hn(l))}function Jc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hn(e))}function Kt(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hf(e,t,l,a),t=t.sibling}function Hf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,l,a),n&2048&&Cn(9,t);break;case 1:Kt(e,t,l,a);break;case 3:Kt(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hn(e)));break;case 12:if(n&2048){Kt(e,t,l,a),e=t.stateNode;try{var i=t.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){Ae(t,t.return,d)}}else Kt(e,t,l,a);break;case 31:Kt(e,t,l,a);break;case 13:Kt(e,t,l,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Kt(e,t,l,a):jn(e,t):i._visibility&2?Kt(e,t,l,a):(i._visibility|=2,Ga(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Pc(u,t);break;case 24:Kt(e,t,l,a),n&2048&&Jc(t.alternate,t);break;default:Kt(e,t,l,a)}}function Ga(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,u=t,c=l,d=a,x=u.flags;switch(u.tag){case 0:case 11:case 15:Ga(i,u,c,d,n),Cn(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?Ga(i,u,c,d,n):jn(i,u):(O._visibility|=2,Ga(i,u,c,d,n)),n&&x&2048&&Pc(u.alternate,u);break;case 24:Ga(i,u,c,d,n),n&&x&2048&&Jc(u.alternate,u);break;default:Ga(i,u,c,d,n)}t=t.sibling}}function jn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:jn(l,a),n&2048&&Pc(a.alternate,a);break;case 24:jn(l,a),n&2048&&Jc(a.alternate,a);break;default:jn(l,a)}t=t.sibling}}var Bn=8192;function ka(e,t,l){if(e.subtreeFlags&Bn)for(e=e.child;e!==null;)Cf(e,t,l),e=e.sibling}function Cf(e,t,l){switch(e.tag){case 26:ka(e,t,l),e.flags&Bn&&e.memoizedState!==null&&Sg(l,Xt,e.memoizedState,e.memoizedProps);break;case 5:ka(e,t,l);break;case 3:case 4:var a=Xt;Xt=Wi(e.stateNode.containerInfo),ka(e,t,l),Xt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Bn,Bn=16777216,ka(e,t,l),Bn=a):ka(e,t,l));break;default:ka(e,t,l)}}function Nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];$e=a,Bf(a,e)}Nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jf(e),e=e.sibling}function jf(e){switch(e.tag){case 0:case 11:case 15:Dn(e),e.flags&2048&&Nl(9,e,e.return);break;case 3:Dn(e);break;case 12:Dn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gi(e)):Dn(e);break;default:Dn(e)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];$e=a,Bf(a,e)}Nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nl(8,t,t.return),Gi(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,Gi(t));break;default:Gi(t)}e=e.sibling}}function Bf(e,t){for(;$e!==null;){var l=$e;switch(l.tag){case 0:case 11:case 15:Nl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:hn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,$e=a;else e:for(l=e;$e!==null;){a=$e;var n=a.sibling,i=a.return;if(Af(a),a===l){$e=null;break e}if(n!==null){n.return=i,$e=n;break e}$e=i}}}var _p={getCacheForType:function(e){var t=lt(Ke),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return lt(Ke).controller.signal}},Lp=typeof WeakMap=="function"?WeakMap:Map,ve=0,He=null,ue=null,se=0,Se=0,Ot=null,jl=!1,Qa=!1,Ic=!1,ml=0,Ge=0,Bl=0,sa=0,Fc=0,Ht=0,wa=0,qn=null,ht=null,Wc=!1,ki=0,Df=0,Qi=1/0,wi=null,Dl=null,Fe=0,ql=null,Ya=null,pl=0,$c=0,es=null,qf=null,Rn=0,ts=null;function Ct(){return(ve&2)!==0&&se!==0?se&-se:T.T!==null?cs():Ps()}function Rf(){if(Ht===0)if((se&536870912)===0||fe){var e=In;In<<=1,(In&3932160)===0&&(In=262144),Ht=e}else Ht=536870912;return e=Et.current,e!==null&&(e.flags|=32),Ht}function yt(e,t,l){(e===He&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(Va(e,0),Rl(e,se,Ht,!1)),tn(e,l),((ve&2)===0||e!==He)&&(e===He&&((ve&2)===0&&(sa|=l),Ge===4&&Rl(e,se,Ht,!1)),Ft(e))}function _f(e,t,l){if((ve&6)!==0)throw Error(s(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||en(e,t),n=a?kp(e,t):as(e,t,!0),i=a;do{if(n===0){Qa&&!a&&Rl(e,t,0,!1);break}else{if(l=e.current.alternate,i&&!Up(l)){n=as(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var c=e;n=qn;var d=c.current.memoizedState.isDehydrated;if(d&&(Va(c,u).flags|=256),u=as(c,u,!1),u!==2){if(Ic&&!d){c.errorRecoveryDisabledLanes|=i,sa|=i,n=4;break e}i=ht,ht=n,i!==null&&(ht===null?ht=i:ht.push.apply(ht,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){Va(e,0),Rl(e,t,0,!0);break}e:{switch(a=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Rl(a,t,Ht,!jl);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=ki+300-qe(),10<n)){if(Rl(a,t,Ht,!jl),Wn(a,0,!0)!==0)break e;pl=t,a.timeoutHandle=md(Lf.bind(null,a,l,ht,wi,Wc,t,Ht,sa,wa,jl,i,"Throttled",-0,0),n);break e}Lf(a,l,ht,wi,Wc,t,Ht,sa,wa,jl,i,null,-0,0)}}break}while(!0);Ft(e)}function Lf(e,t,l,a,n,i,u,c,d,x,O,j,S,M){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Cf(t,i,j);var Q=(i&62914560)===i?ki-qe():(i&4194048)===i?Df-qe():0;if(Q=Ag(j,Q),Q!==null){pl=i,e.cancelPendingCommit=Q(Zf.bind(null,e,t,i,l,a,n,u,c,d,O,j,null,S,M)),Rl(e,i,u,!x);return}}Zf(e,t,i,l,a,n,u,c,d)}function Up(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!Tt(i(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rl(e,t,l,a){t&=~Fc,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var i=31-At(n),u=1<<i;a[i]=-1,n&=~u}l!==0&&Zs(e,l,t)}function Yi(){return(ve&6)===0?(_n(0),!1):!0}function ls(){if(ue!==null){if(Se===0)var e=ue.return;else e=ue,al=$l=null,vc(e),qa=null,vn=0,e=ue;for(;e!==null;)pf(e.alternate,e),e=e.return;ue=null}}function Va(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,ng(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),pl=0,ls(),He=e,ue=l=tl(e.current,null),se=t,Se=0,Ot=null,jl=!1,Qa=en(e,t),Ic=!1,wa=Ht=Fc=sa=Bl=Ge=0,ht=qn=null,Wc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-At(a),i=1<<n;t|=e[n],a&=~i}return ml=t,ri(),l}function Uf(e,t){W=null,T.H=zn,t===Da||t===vi?(t=$o(),Se=3):t===uc?(t=$o(),Se=4):Se=t===qc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,ue===null&&(Ge=1,Bi(e,_t(t,e.current)))}function Gf(){var e=Et.current;return e===null?!0:(se&4194048)===se?kt===null:(se&62914560)===se||(se&536870912)!==0?e===kt:!1}function kf(){var e=T.H;return T.H=zn,e===null?zn:e}function Qf(){var e=T.A;return T.A=_p,e}function Vi(){Ge=4,jl||(se&4194048)!==se&&Et.current!==null||(Qa=!0),(Bl&134217727)===0&&(sa&134217727)===0||He===null||Rl(He,se,Ht,!1)}function as(e,t,l){var a=ve;ve|=2;var n=kf(),i=Qf();(He!==e||se!==t)&&(wi=null,Va(e,t)),t=!1;var u=Ge;e:do try{if(Se!==0&&ue!==null){var c=ue,d=Ot;switch(Se){case 8:ls(),u=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var x=Se;if(Se=0,Ot=null,Za(e,c,d,x),l&&Qa){u=0;break e}break;default:x=Se,Se=0,Ot=null,Za(e,c,d,x)}}Gp(),u=Ge;break}catch(O){Uf(e,O)}while(!0);return t&&e.shellSuspendCounter++,al=$l=null,ve=a,T.H=n,T.A=i,ue===null&&(He=null,se=0,ri()),u}function Gp(){for(;ue!==null;)wf(ue)}function kp(e,t){var l=ve;ve|=2;var a=kf(),n=Qf();He!==e||se!==t?(wi=null,Qi=qe()+500,Va(e,t)):Qa=en(e,t);e:do try{if(Se!==0&&ue!==null){t=ue;var i=Ot;t:switch(Se){case 1:Se=0,Ot=null,Za(e,t,i,1);break;case 2:case 9:if(Fo(i)){Se=0,Ot=null,Yf(t);break}t=function(){Se!==2&&Se!==9||He!==e||(Se=7),Ft(e)},i.then(t,t);break e;case 3:Se=7;break e;case 4:Se=5;break e;case 7:Fo(i)?(Se=0,Ot=null,Yf(t)):(Se=0,Ot=null,Za(e,t,i,7));break;case 5:var u=null;switch(ue.tag){case 26:u=ue.memoizedState;case 5:case 27:var c=ue;if(u?Hd(u):c.stateNode.complete){Se=0,Ot=null;var d=c.sibling;if(d!==null)ue=d;else{var x=c.return;x!==null?(ue=x,Zi(x)):ue=null}break t}}Se=0,Ot=null,Za(e,t,i,5);break;case 6:Se=0,Ot=null,Za(e,t,i,6);break;case 8:ls(),Ge=6;break e;default:throw Error(s(462))}}Qp();break}catch(O){Uf(e,O)}while(!0);return al=$l=null,T.H=a,T.A=n,ve=l,ue!==null?0:(He=null,se=0,ri(),Ge)}function Qp(){for(;ue!==null&&!jt();)wf(ue)}function wf(e){var t=df(e.alternate,e,ml);e.memoizedProps=e.pendingProps,t===null?Zi(e):ue=t}function Yf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=uf(l,t,t.pendingProps,t.type,void 0,se);break;case 11:t=uf(l,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:vc(t);default:pf(l,t),t=ue=ko(t,ml),t=df(l,t,ml)}e.memoizedProps=e.pendingProps,t===null?Zi(e):ue=t}function Za(e,t,l,a){al=$l=null,vc(t),qa=null,vn=0;var n=t.return;try{if(Cp(e,n,t,l,se)){Ge=1,Bi(e,_t(l,e.current)),ue=null;return}}catch(i){if(n!==null)throw ue=n,i;Ge=1,Bi(e,_t(l,e.current)),ue=null;return}t.flags&32768?(fe||a===1?e=!0:Qa||(se&536870912)!==0?e=!1:(jl=e=!0,(a===2||a===9||a===3||a===6)&&(a=Et.current,a!==null&&a.tag===13&&(a.flags|=16384))),Vf(t,e)):Zi(t)}function Zi(e){var t=e;do{if((t.flags&32768)!==0){Vf(t,jl);return}e=t.return;var l=Bp(t.alternate,t,ml);if(l!==null){ue=l;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Ge===0&&(Ge=5)}function Vf(e,t){do{var l=Dp(e.alternate,e);if(l!==null){l.flags&=32767,ue=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=l}while(e!==null);Ge=6,ue=null}function Zf(e,t,l,a,n,i,u,c,d){e.cancelPendingCommit=null;do Xi();while(Fe!==0);if((ve&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Zu,xm(e,l,i,u,c,d),e===He&&(ue=He=null,se=0),Ya=t,ql=e,pl=l,$c=i,es=n,qf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Zp(da,function(){return If(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,n=q.p,q.p=2,u=ve,ve|=4;try{qp(e,t,l)}finally{ve=u,q.p=n,T.T=a}}Fe=1,Xf(),Kf(),Pf()}}function Xf(){if(Fe===1){Fe=0;var e=ql,t=Ya,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var a=q.p;q.p=2;var n=ve;ve|=4;try{zf(t,e);var i=gs,u=jo(e.containerInfo),c=i.focusedElem,d=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&No(c.ownerDocument.documentElement,c)){if(d!==null&&ku(c)){var x=d.start,O=d.end;if(O===void 0&&(O=x),"selectionStart"in c)c.selectionStart=x,c.selectionEnd=Math.min(O,c.value.length);else{var j=c.ownerDocument||document,S=j&&j.defaultView||window;if(S.getSelection){var M=S.getSelection(),Q=c.textContent.length,J=Math.min(d.start,Q),Ee=d.end===void 0?J:Math.min(d.end,Q);!M.extend&&J>Ee&&(u=Ee,Ee=J,J=u);var y=Co(c,J),p=Co(c,Ee);if(y&&p&&(M.rangeCount!==1||M.anchorNode!==y.node||M.anchorOffset!==y.offset||M.focusNode!==p.node||M.focusOffset!==p.offset)){var b=j.createRange();b.setStart(y.node,y.offset),M.removeAllRanges(),J>Ee?(M.addRange(b),M.extend(p.node,p.offset)):(b.setEnd(p.node,p.offset),M.addRange(b))}}}}for(j=[],M=c;M=M.parentNode;)M.nodeType===1&&j.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<j.length;c++){var C=j[c];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}nu=!!ps,gs=ps=null}finally{ve=n,q.p=a,T.T=l}}e.current=t,Fe=2}}function Kf(){if(Fe===2){Fe=0;var e=ql,t=Ya,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var a=q.p;q.p=2;var n=ve;ve|=4;try{Sf(e,t.alternate,t)}finally{ve=n,q.p=a,T.T=l}}Fe=3}}function Pf(){if(Fe===4||Fe===3){Fe=0,Ye();var e=ql,t=Ya,l=pl,a=qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Ya=ql=null,Jf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Dl=null),Su(l),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot($a,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,n=q.p,q.p=2,T.T=null;try{for(var i=e.onRecoverableError,u=0;u<a.length;u++){var c=a[u];i(c.value,{componentStack:c.stack})}}finally{T.T=t,q.p=n}}(pl&3)!==0&&Xi(),Ft(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===ts?Rn++:(Rn=0,ts=e):Rn=0,_n(0)}}function Jf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hn(t)))}function Xi(){return Xf(),Kf(),Pf(),If()}function If(){if(Fe!==5)return!1;var e=ql,t=$c;$c=0;var l=Su(pl),a=T.T,n=q.p;try{q.p=32>l?32:l,T.T=null,l=es,es=null;var i=ql,u=pl;if(Fe=0,Ya=ql=null,pl=0,(ve&6)!==0)throw Error(s(331));var c=ve;if(ve|=4,jf(i.current),Hf(i,i.current,u,l),ve=c,_n(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot($a,i)}catch{}return!0}finally{q.p=n,T.T=a,Jf(e,t)}}function Ff(e,t,l){t=_t(l,t),t=Dc(e.stateNode,t,2),e=Ol(e,t,2),e!==null&&(tn(e,2),Ft(e))}function Ae(e,t,l){if(e.tag===3)Ff(e,e,l);else for(;t!==null;){if(t.tag===3){Ff(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dl===null||!Dl.has(a))){e=_t(l,e),l=Fr(2),a=Ol(t,l,2),a!==null&&(Wr(l,a,t,e),tn(a,2),Ft(a));break}}t=t.return}}function ns(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new Lp;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Ic=!0,n.add(l),e=wp.bind(null,e,t,l),t.then(e,e))}function wp(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,He===e&&(se&l)===l&&(Ge===4||Ge===3&&(se&62914560)===se&&300>qe()-ki?(ve&2)===0&&Va(e,0):Fc|=l,wa===se&&(wa=0)),Ft(e)}function Wf(e,t){t===0&&(t=Vs()),e=Il(e,t),e!==null&&(tn(e,t),Ft(e))}function Yp(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Wf(e,l)}function Vp(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Wf(e,l)}function Zp(e,t){return Oe(e,t)}var Ki=null,Xa=null,is=!1,Pi=!1,us=!1,_l=0;function Ft(e){e!==Xa&&e.next===null&&(Xa===null?Ki=Xa=e:Xa=Xa.next=e),Pi=!0,is||(is=!0,Kp())}function _n(e,t){if(!us&&Pi){us=!0;do for(var l=!1,a=Ki;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-At(42|e)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,ld(a,i))}else i=se,i=Wn(a,a===He?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||en(a,i)||(l=!0,ld(a,i));a=a.next}while(l);us=!1}}function Xp(){$f()}function $f(){Pi=is=!1;var e=0;_l!==0&&ag()&&(e=_l);for(var t=qe(),l=null,a=Ki;a!==null;){var n=a.next,i=ed(a,t);i===0?(a.next=null,l===null?Ki=n:l.next=n,n===null&&(Xa=l)):(l=a,(e!==0||(i&3)!==0)&&(Pi=!0)),a=n}Fe!==0&&Fe!==5||_n(e),_l!==0&&(_l=0)}function ed(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var u=31-At(i),c=1<<u,d=n[u];d===-1?((c&l)===0||(c&a)!==0)&&(n[u]=bm(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}if(t=He,l=se,l=Wn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&we(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||en(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&we(a),Su(l)){case 2:case 8:l=rt;break;case 32:l=da;break;case 268435456:l=Ys;break;default:l=da}return a=td.bind(null,e),l=Oe(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&we(a),e.callbackPriority=2,e.callbackNode=null,2}function td(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Xi()&&e.callbackNode!==l)return null;var a=se;return a=Wn(e,e===He?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(_f(e,a,t),ed(e,qe()),e.callbackNode!=null&&e.callbackNode===l?td.bind(null,e):null)}function ld(e,t){if(Xi())return null;_f(e,t,!0)}function Kp(){ig(function(){(ve&6)!==0?Oe(ut,Xp):$f()})}function cs(){if(_l===0){var e=ja;e===0&&(e=Jn,Jn<<=1,(Jn&261888)===0&&(Jn=256)),_l=e}return _l}function ad(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:li(""+e)}function nd(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Pp(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var i=ad((n[ft]||null).action),u=a.submitter;u&&(t=(t=u[ft]||null)?ad(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var c=new ui("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(_l!==0){var d=u?nd(n,u):new FormData(n);Oc(l,{pending:!0,data:d,method:n.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=u?nd(n,u):new FormData(n),Oc(l,{pending:!0,data:d,method:n.method,action:i},i,d))},currentTarget:n}]})}}for(var ss=0;ss<Vu.length;ss++){var os=Vu[ss],Jp=os.toLowerCase(),Ip=os[0].toUpperCase()+os.slice(1);Zt(Jp,"on"+Ip)}Zt(qo,"onAnimationEnd"),Zt(Ro,"onAnimationIteration"),Zt(_o,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(dp,"onTransitionRun"),Zt(mp,"onTransitionStart"),Zt(pp,"onTransitionCancel"),Zt(Lo,"onTransitionEnd"),ya("onMouseEnter",["mouseout","mouseover"]),ya("onMouseLeave",["mouseout","mouseover"]),ya("onPointerEnter",["pointerout","pointerover"]),ya("onPointerLeave",["pointerout","pointerover"]),Xl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));function id(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var c=a[u],d=c.instance,x=c.currentTarget;if(c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=x;try{i(n)}catch(O){oi(O)}n.currentTarget=null,i=d}else for(u=0;u<a.length;u++){if(c=a[u],d=c.instance,x=c.currentTarget,c=c.listener,d!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=x;try{i(n)}catch(O){oi(O)}n.currentTarget=null,i=d}}}}function ce(e,t){var l=t[Au];l===void 0&&(l=t[Au]=new Set);var a=e+"__bubble";l.has(a)||(ud(t,e,2,!1),l.add(a))}function rs(e,t,l){var a=0;t&&(a|=4),ud(l,e,a,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[Ji]){e[Ji]=!0,Fs.forEach(function(l){l!=="selectionchange"&&(Fp.has(l)||rs(l,!1,e),rs(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,rs("selectionchange",!1,t))}}function ud(e,t,l,a){switch(Rd(t)){case 2:var n=Eg;break;case 8:n=zg;break;default:n=zs}l=n.bind(null,t,l,e),n=void 0,!ju||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function ds(e,t,l,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=a.return;u!==null;){var d=u.tag;if((d===3||d===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=pa(c),u===null)return;if(d=u.tag,d===5||d===6||d===26||d===27){a=i=u;continue e}c=c.parentNode}}a=a.return}oo(function(){var x=i,O=Cu(l),j=[];e:{var S=Uo.get(e);if(S!==void 0){var M=ui,Q=e;switch(e){case"keypress":if(ni(l)===0)break e;case"keydown":case"keyup":M=Vm;break;case"focusin":Q="focus",M=Ru;break;case"focusout":Q="blur",M=Ru;break;case"beforeblur":case"afterblur":M=Ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Km;break;case qo:case Ro:case _o:M=Rm;break;case Lo:M=Jm;break;case"scroll":case"scrollend":M=Nm;break;case"wheel":M=Fm;break;case"copy":case"cut":case"paste":M=Lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=go;break;case"toggle":case"beforetoggle":M=$m}var J=(t&4)!==0,Ee=!J&&(e==="scroll"||e==="scrollend"),y=J?S!==null?S+"Capture":null:S;J=[];for(var p=x,b;p!==null;){var C=p;if(b=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||b===null||y===null||(C=nn(p,y),C!=null&&J.push(Un(p,C,b))),Ee)break;p=p.return}0<J.length&&(S=new M(S,Q,null,l,O),j.push({event:S,listeners:J}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",S&&l!==Hu&&(Q=l.relatedTarget||l.fromElement)&&(pa(Q)||Q[ma]))break e;if((M||S)&&(S=O.window===O?O:(S=O.ownerDocument)?S.defaultView||S.parentWindow:window,M?(Q=l.relatedTarget||l.toElement,M=x,Q=Q?pa(Q):null,Q!==null&&(Ee=A(Q),J=Q.tag,Q!==Ee||J!==5&&J!==27&&J!==6)&&(Q=null)):(M=null,Q=x),M!==Q)){if(J=mo,C="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(J=go,C="onPointerLeave",y="onPointerEnter",p="pointer"),Ee=M==null?S:an(M),b=Q==null?S:an(Q),S=new J(C,p+"leave",M,l,O),S.target=Ee,S.relatedTarget=b,C=null,pa(O)===x&&(J=new J(y,p+"enter",Q,l,O),J.target=b,J.relatedTarget=Ee,C=J),Ee=C,M&&Q)t:{for(J=Wp,y=M,p=Q,b=0,C=y;C;C=J(C))b++;C=0;for(var Z=p;Z;Z=J(Z))C++;for(;0<b-C;)y=J(y),b--;for(;0<C-b;)p=J(p),C--;for(;b--;){if(y===p||p!==null&&y===p.alternate){J=y;break t}y=J(y),p=J(p)}J=null}else J=null;M!==null&&cd(j,S,M,J,!1),Q!==null&&Ee!==null&&cd(j,Ee,Q,J,!0)}}e:{if(S=x?an(x):window,M=S.nodeName&&S.nodeName.toLowerCase(),M==="select"||M==="input"&&S.type==="file")var ge=To;else if(So(S))if(Mo)ge=op;else{ge=cp;var w=up}else M=S.nodeName,!M||M.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?x&&Ou(x.elementType)&&(ge=To):ge=sp;if(ge&&(ge=ge(e,x))){Ao(j,ge,l,O);break e}w&&w(e,S,x),e==="focusout"&&x&&S.type==="number"&&x.memoizedProps.value!=null&&zu(S,"number",S.value)}switch(w=x?an(x):window,e){case"focusin":(So(w)||w.contentEditable==="true")&&(Ta=w,Qu=x,mn=null);break;case"focusout":mn=Qu=Ta=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Bo(j,l,O);break;case"selectionchange":if(fp)break;case"keydown":case"keyup":Bo(j,l,O)}var ee;if(Lu)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Aa?bo(e,l)&&(oe="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(oe="onCompositionStart");oe&&(ho&&l.locale!=="ko"&&(Aa||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Aa&&(ee=ro()):(xl=O,Bu="value"in xl?xl.value:xl.textContent,Aa=!0)),w=Ii(x,oe),0<w.length&&(oe=new po(oe,e,null,l,O),j.push({event:oe,listeners:w}),ee?oe.data=ee:(ee=xo(l),ee!==null&&(oe.data=ee)))),(ee=tp?lp(e,l):ap(e,l))&&(oe=Ii(x,"onBeforeInput"),0<oe.length&&(w=new po("onBeforeInput","beforeinput",null,l,O),j.push({event:w,listeners:oe}),w.data=ee)),Pp(j,e,x,l,O)}id(j,t)})}function Un(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Ii(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=nn(e,l),n!=null&&a.unshift(Un(e,n,i)),n=nn(e,t),n!=null&&a.push(Un(e,n,i))),e.tag===3)return a;e=e.return}return[]}function Wp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cd(e,t,l,a,n){for(var i=t._reactName,u=[];l!==null&&l!==a;){var c=l,d=c.alternate,x=c.stateNode;if(c=c.tag,d!==null&&d===a)break;c!==5&&c!==26&&c!==27||x===null||(d=x,n?(x=nn(l,i),x!=null&&u.unshift(Un(l,x,d))):n||(x=nn(l,i),x!=null&&u.push(Un(l,x,d)))),l=l.return}u.length!==0&&e.push({event:t,listeners:u})}var $p=/\r\n?/g,eg=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace($p,`
`).replace(eg,"")}function od(e,t){return t=sd(t),sd(e)===t}function Me(e,t,l,a,n,i){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ba(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ba(e,""+a);break;case"className":ei(e,"class",a);break;case"tabIndex":ei(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,l,a);break;case"style":co(e,a,i);break;case"data":if(t!=="object"){ei(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=li(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(t!=="input"&&Me(e,t,"name",n.name,n,null),Me(e,t,"formEncType",n.formEncType,n,null),Me(e,t,"formMethod",n.formMethod,n,null),Me(e,t,"formTarget",n.formTarget,n,null)):(Me(e,t,"encType",n.encType,n,null),Me(e,t,"method",n.method,n,null),Me(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=li(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=$t);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=li(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":ce("beforetoggle",e),ce("toggle",e),$n(e,"popover",a);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":$n(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Hm.get(l)||l,$n(e,l,a))}}function ms(e,t,l,a,n,i){switch(l){case"style":co(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=l}}break;case"children":typeof a=="string"?ba(e,a):(typeof a=="number"||typeof a=="bigint")&&ba(e,""+a);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ws.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),i=e[ft]||null,i=i!=null?i[l]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):$n(e,l,a)}}}function nt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Me(e,t,i,u,l,null)}}n&&Me(e,t,"srcSet",l.srcSet,l,null),a&&Me(e,t,"src",l.src,l,null);return;case"input":ce("invalid",e);var c=i=u=n=null,d=null,x=null;for(a in l)if(l.hasOwnProperty(a)){var O=l[a];if(O!=null)switch(a){case"name":n=O;break;case"type":u=O;break;case"checked":d=O;break;case"defaultChecked":x=O;break;case"value":i=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:Me(e,t,a,O,l,null)}}ao(e,i,c,d,x,u,n,!1);return;case"select":ce("invalid",e),a=u=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:Me(e,t,n,c,l,null)}t=i,l=u,e.multiple=!!a,t!=null?va(e,!!a,t,!1):l!=null&&va(e,!!a,l,!0);return;case"textarea":ce("invalid",e),i=n=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:Me(e,t,u,c,l,null)}io(e,a,n,i);return;case"option":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Me(e,t,d,a,l,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(a=0;a<Ln.length;a++)ce(Ln[a],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in l)if(l.hasOwnProperty(x)&&(a=l[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Me(e,t,x,a,l,null)}return;default:if(Ou(t)){for(O in l)l.hasOwnProperty(O)&&(a=l[O],a!==void 0&&ms(e,t,O,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&Me(e,t,c,a,l,null))}function tg(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,d=null,x=null,O=null;for(M in l){var j=l[M];if(l.hasOwnProperty(M)&&j!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":d=j;default:a.hasOwnProperty(M)||Me(e,t,M,null,a,j)}}for(var S in a){var M=a[S];if(j=l[S],a.hasOwnProperty(S)&&(M!=null||j!=null))switch(S){case"type":i=M;break;case"name":n=M;break;case"checked":x=M;break;case"defaultChecked":O=M;break;case"value":u=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:M!==j&&Me(e,t,S,M,a,j)}}Eu(e,u,c,d,x,O,i,n);return;case"select":M=u=c=S=null;for(i in l)if(d=l[i],l.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":M=d;default:a.hasOwnProperty(i)||Me(e,t,i,null,a,d)}for(n in a)if(i=a[n],d=l[n],a.hasOwnProperty(n)&&(i!=null||d!=null))switch(n){case"value":S=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==d&&Me(e,t,n,i,a,d)}t=c,l=u,a=M,S!=null?va(e,!!l,S,!1):!!a!=!!l&&(t!=null?va(e,!!l,t,!0):va(e,!!l,l?[]:"",!1));return;case"textarea":M=S=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Me(e,t,c,null,a,n)}for(u in a)if(n=a[u],i=l[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":S=n;break;case"defaultValue":M=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&Me(e,t,u,n,a,i)}no(e,S,M);return;case"option":for(var Q in l)if(S=l[Q],l.hasOwnProperty(Q)&&S!=null&&!a.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:Me(e,t,Q,null,a,S)}for(d in a)if(S=a[d],M=l[d],a.hasOwnProperty(d)&&S!==M&&(S!=null||M!=null))switch(d){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:Me(e,t,d,S,a,M)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in l)S=l[J],l.hasOwnProperty(J)&&S!=null&&!a.hasOwnProperty(J)&&Me(e,t,J,null,a,S);for(x in a)if(S=a[x],M=l[x],a.hasOwnProperty(x)&&S!==M&&(S!=null||M!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(137,t));break;default:Me(e,t,x,S,a,M)}return;default:if(Ou(t)){for(var Ee in l)S=l[Ee],l.hasOwnProperty(Ee)&&S!==void 0&&!a.hasOwnProperty(Ee)&&ms(e,t,Ee,void 0,a,S);for(O in a)S=a[O],M=l[O],!a.hasOwnProperty(O)||S===M||S===void 0&&M===void 0||ms(e,t,O,S,a,M);return}}for(var y in l)S=l[y],l.hasOwnProperty(y)&&S!=null&&!a.hasOwnProperty(y)&&Me(e,t,y,null,a,S);for(j in a)S=a[j],M=l[j],!a.hasOwnProperty(j)||S===M||S==null&&M==null||Me(e,t,j,S,a,M)}function rd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&rd(u)){for(u=0,c=n.responseEnd,a+=1;a<l.length;a++){var d=l[a],x=d.startTime;if(x>c)break;var O=d.transferSize,j=d.initiatorType;O&&rd(j)&&(d=d.responseEnd,u+=O*(d<c?1:(c-x)/(d-x)))}if(--a,t+=8*(i+u)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ps=null,gs=null;function Fi(e){return e.nodeType===9?e:e.ownerDocument}function fd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=null;function ag(){var e=window.event;return e&&e.type==="popstate"?e===ys?!1:(ys=e,!0):(ys=null,!1)}var md=typeof setTimeout=="function"?setTimeout:void 0,ng=typeof clearTimeout=="function"?clearTimeout:void 0,pd=typeof Promise=="function"?Promise:void 0,ig=typeof queueMicrotask=="function"?queueMicrotask:typeof pd<"u"?function(e){return pd.resolve(null).then(e).catch(ug)}:md;function ug(e){setTimeout(function(){throw e})}function Ll(e){return e==="head"}function gd(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Ia(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Gn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Gn(l);for(var i=l.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[ln]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=u}}else l==="body"&&Gn(e.ownerDocument.body);l=n}while(l);Ia(t)}function hd(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function vs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":vs(l),Tu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function cg(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ln])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Qt(e.nextSibling),e===null)break}return null}function sg(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Qt(e.nextSibling),e===null))return null;return e}function yd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Qt(e.nextSibling),e===null))return null;return e}function bs(e){return e.data==="$?"||e.data==="$~"}function xs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function og(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ss=null;function vd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return Qt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function bd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function xd(e,t,l){switch(t=Fi(l),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Gn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tu(e)}var wt=new Map,Sd=new Set;function Wi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var gl=q.d;q.d={f:rg,r:fg,D:dg,C:mg,L:pg,m:gg,X:yg,S:hg,M:vg};function rg(){var e=gl.f(),t=Yi();return e||t}function fg(e){var t=ga(e);t!==null&&t.tag===5&&t.type==="form"?Lr(t):gl.r(e)}var Ka=typeof document>"u"?null:document;function Ad(e,t,l){var a=Ka;if(a&&typeof t=="string"&&t){var n=qt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Sd.has(n)||(Sd.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),nt(t,"link",e),We(t),a.head.appendChild(t)))}}function dg(e){gl.D(e),Ad("dns-prefetch",e,null)}function mg(e,t){gl.C(e,t),Ad("preconnect",e,t)}function pg(e,t,l){gl.L(e,t,l);var a=Ka;if(a&&e&&t){var n='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+qt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+qt(l.imageSizes)+'"]')):n+='[href="'+qt(e)+'"]';var i=n;switch(t){case"style":i=Pa(e);break;case"script":i=Ja(e)}wt.has(i)||(e=z({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),wt.set(i,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(kn(i))||t==="script"&&a.querySelector(Qn(i))||(t=a.createElement("link"),nt(t,"link",e),We(t),a.head.appendChild(t)))}}function gg(e,t){gl.m(e,t);var l=Ka;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+qt(a)+'"][href="'+qt(e)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ja(e)}if(!wt.has(i)&&(e=z({rel:"modulepreload",href:e},t),wt.set(i,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Qn(i)))return}a=l.createElement("link"),nt(a,"link",e),We(a),l.head.appendChild(a)}}}function hg(e,t,l){gl.S(e,t,l);var a=Ka;if(a&&e){var n=ha(a).hoistableStyles,i=Pa(e);t=t||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(kn(i)))c.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},l),(l=wt.get(i))&&As(e,l);var d=u=a.createElement("link");We(d),nt(d,"link",e),d._p=new Promise(function(x,O){d.onload=x,d.onerror=O}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,$i(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function yg(e,t){gl.X(e,t);var l=Ka;if(l&&e){var a=ha(l).hoistableScripts,n=Ja(e),i=a.get(n);i||(i=l.querySelector(Qn(n)),i||(e=z({src:e,async:!0},t),(t=wt.get(n))&&Ts(e,t),i=l.createElement("script"),We(i),nt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function vg(e,t){gl.M(e,t);var l=Ka;if(l&&e){var a=ha(l).hoistableScripts,n=Ja(e),i=a.get(n);i||(i=l.querySelector(Qn(n)),i||(e=z({src:e,async:!0,type:"module"},t),(t=wt.get(n))&&Ts(e,t),i=l.createElement("script"),We(i),nt(i,"link",e),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Td(e,t,l,a){var n=(n=$.current)?Wi(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Pa(l.href),l=ha(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Pa(l.href);var i=ha(n).hoistableStyles,u=i.get(e);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,u),(i=n.querySelector(kn(e)))&&!i._p&&(u.instance=i,u.state.loading=5),wt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},wt.set(e,l),i||bg(n,e,l,u.state))),t&&a===null)throw Error(s(528,""));return u}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ja(l),l=ha(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Pa(e){return'href="'+qt(e)+'"'}function kn(e){return'link[rel="stylesheet"]['+e+"]"}function Md(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function bg(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),nt(t,"link",l),We(t),e.head.appendChild(t))}function Ja(e){return'[src="'+qt(e)+'"]'}function Qn(e){return"script[async]"+e}function Ed(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+qt(l.href)+'"]');if(a)return t.instance=a,We(a),a;var n=z({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),We(a),nt(a,"style",n),$i(a,l.precedence,e),t.instance=a;case"stylesheet":n=Pa(l.href);var i=e.querySelector(kn(n));if(i)return t.state.loading|=4,t.instance=i,We(i),i;a=Md(l),(n=wt.get(n))&&As(a,n),i=(e.ownerDocument||e).createElement("link"),We(i);var u=i;return u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),nt(i,"link",a),t.state.loading|=4,$i(i,l.precedence,e),t.instance=i;case"script":return i=Ja(l.src),(n=e.querySelector(Qn(i)))?(t.instance=n,We(n),n):(a=l,(n=wt.get(i))&&(a=z({},l),Ts(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),We(n),nt(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,$i(a,l.precedence,e));return t.instance}function $i(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function As(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var eu=null;function zd(e,t,l){if(eu===null){var a=new Map,n=eu=new Map;n.set(l,a)}else n=eu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var i=l[n];if(!(i[ln]||i[et]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=e+u;var c=a.get(u);c?c.push(i):a.set(u,[i])}}return a}function Od(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function xg(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sg(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Pa(a.href),i=t.querySelector(kn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tu.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=i,We(i);return}i=t.ownerDocument||t,a=Md(a),(n=wt.get(n))&&As(a,n),i=i.createElement("link"),We(i);var u=i;u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),nt(i,"link",a),l.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=tu.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Ms=0;function Ag(e,t){return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ms===0&&(Ms=62500*lg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&au(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ms?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function tu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lu=null;function au(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lu=new Map,t.forEach(Tg,e),lu=null,tu.call(e))}function Tg(e,t){if(!(t.state.loading&4)){var l=lu.get(e);if(l)var a=l.get(null);else{l=new Map,lu.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=l.get(u)||a,i===a&&l.set(null,n),l.set(u,n),this.count++,a=tu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var wn={$$typeof:ye,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Mg(e,t,l,a,n,i,u,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Cd(e,t,l,a,n,i,u,c,d,x,O,j){return e=new Mg(e,t,l,u,d,x,O,j,c),t=1,i===!0&&(t|=24),i=Mt(3,null,null,t),e.current=i,i.stateNode=e,t=ac(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:t},cc(i),e}function Nd(e){return e?(e=za,e):za}function jd(e,t,l,a,n,i){n=Nd(n),a.context===null?a.context=n:a.pendingContext=n,a=zl(t),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ol(e,a,t),l!==null&&(yt(l,e,t),xn(l,e,t))}function Bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Es(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Dd(e){if(e.tag===13||e.tag===31){var t=Il(e,67108864);t!==null&&yt(t,e,67108864),Es(e,67108864)}}function qd(e){if(e.tag===13||e.tag===31){var t=Ct();t=xu(t);var l=Il(e,t);l!==null&&yt(l,e,t),Es(e,t)}}var nu=!0;function Eg(e,t,l,a){var n=T.T;T.T=null;var i=q.p;try{q.p=2,zs(e,t,l,a)}finally{q.p=i,T.T=n}}function zg(e,t,l,a){var n=T.T;T.T=null;var i=q.p;try{q.p=8,zs(e,t,l,a)}finally{q.p=i,T.T=n}}function zs(e,t,l,a){if(nu){var n=Os(a);if(n===null)ds(e,t,a,iu,l),_d(e,a);else if(Hg(n,e,t,l,a))a.stopPropagation();else if(_d(e,a),t&4&&-1<Og.indexOf(e)){for(;n!==null;){var i=ga(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Zl(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var d=1<<31-At(u);c.entanglements[1]|=d,u&=~d}Ft(i),(ve&6)===0&&(Qi=qe()+500,_n(0))}}break;case 31:case 13:c=Il(i,2),c!==null&&yt(c,i,2),Yi(),Es(i,2)}if(i=Os(a),i===null&&ds(e,t,a,iu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else ds(e,t,a,null,l)}}function Os(e){return e=Cu(e),Hs(e)}var iu=null;function Hs(e){if(iu=null,e=pa(e),e!==null){var t=A(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=H(t),e!==null)return e;e=null}else if(l===31){if(e=D(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return iu=e,null}function Rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case ut:return 2;case rt:return 8;case da:case mm:return 32;case Ys:return 268435456;default:return 32}default:return 32}}var Cs=!1,Ul=null,Gl=null,kl=null,Yn=new Map,Vn=new Map,Ql=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _d(e,t){switch(e){case"focusin":case"focusout":Ul=null;break;case"dragenter":case"dragleave":Gl=null;break;case"mouseover":case"mouseout":kl=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function Zn(e,t,l,a,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=ga(t),t!==null&&Dd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Hg(e,t,l,a,n){switch(t){case"focusin":return Ul=Zn(Ul,e,t,l,a,n),!0;case"dragenter":return Gl=Zn(Gl,e,t,l,a,n),!0;case"mouseover":return kl=Zn(kl,e,t,l,a,n),!0;case"pointerover":var i=n.pointerId;return Yn.set(i,Zn(Yn.get(i)||null,e,t,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Vn.set(i,Zn(Vn.get(i)||null,e,t,l,a,n)),!0}return!1}function Ld(e){var t=pa(e.target);if(t!==null){var l=A(t);if(l!==null){if(t=l.tag,t===13){if(t=H(l),t!==null){e.blockedOn=t,Js(e.priority,function(){qd(l)});return}}else if(t===31){if(t=D(l),t!==null){e.blockedOn=t,Js(e.priority,function(){qd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Os(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);Hu=a,l.target.dispatchEvent(a),Hu=null}else return t=ga(l),t!==null&&Dd(t),e.blockedOn=l,!1;t.shift()}return!0}function Ud(e,t,l){uu(e)&&l.delete(t)}function Cg(){Cs=!1,Ul!==null&&uu(Ul)&&(Ul=null),Gl!==null&&uu(Gl)&&(Gl=null),kl!==null&&uu(kl)&&(kl=null),Yn.forEach(Ud),Vn.forEach(Ud)}function cu(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cg)))}var su=null;function Gd(e){su!==e&&(su=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){su===e&&(su=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Hs(a||l)===null)continue;break}var i=ga(l);i!==null&&(e.splice(t,3),t-=3,Oc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ia(e){function t(d){return cu(d,e)}Ul!==null&&cu(Ul,e),Gl!==null&&cu(Gl,e),kl!==null&&cu(kl,e),Yn.forEach(t),Vn.forEach(t);for(var l=0;l<Ql.length;l++){var a=Ql[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ql.length&&(l=Ql[0],l.blockedOn===null);)Ld(l),l.blockedOn===null&&Ql.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],u=n[ft]||null;if(typeof i=="function")u||Gd(l);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[ft]||null)c=u.formAction;else if(Hs(n)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Gd(l)}}}function kd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Ns(e){this._internalRoot=e}ou.prototype.render=Ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var l=t.current,a=Ct();jd(l,a,e,t,null,null)},ou.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jd(e.current,2,null,e,null,null),Yi(),t[ma]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ps();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Ql.length&&t!==0&&t<Ql[l].priority;l++);Ql.splice(l,0,e),l===0&&Ld(e)}};var Qd=r.version;if(Qd!=="19.2.8")throw Error(s(527,Qd,"19.2.8"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var Ng={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{$a=ru.inject(Ng),St=ru}catch{}}return Kn.createRoot=function(e,t){if(!v(e))throw Error(s(299));var l=!1,a="",n=Kr,i=Pr,u=Jr;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Cd(e,1,!1,null,null,l,a,null,n,i,u,kd),e[ma]=t.current,fs(e),new Ns(t)},Kn.hydrateRoot=function(e,t,l){if(!v(e))throw Error(s(299));var a=!1,n="",i=Kr,u=Pr,c=Jr,d=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(d=l.formState)),t=Cd(e,1,!0,t,l??null,a,n,d,i,u,c,kd),t.context=Nd(null),l=t.current,a=Ct(),a=xu(a),n=zl(a),n.callback=null,Ol(l,n,a),l=a,t.current.lanes=l,tn(t,l),Ft(t),e[ma]=t.current,fs(e),new ou(t)},Kn.version="19.2.8",Kn}var Fd;function kg(){if(Fd)return Ds.exports;Fd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Ds.exports=Gg(),Ds.exports}var Qg=kg();const oa={QUEEN:{type:"QUEEN",name:"Queen Bee",emoji:"🐝",description:"Moves 1 space per turn. Must be placed by turn 4. Game ends when a Queen is surrounded.",count:1},SPIDER:{type:"SPIDER",name:"Spider",emoji:"🕷️",description:"Moves exactly 3 spaces around the swarm perimeter without backtracking.",count:2},BEETLE:{type:"BEETLE",name:"Beetle",emoji:"🪲",description:"Moves 1 space on ground or climbs on top of adjacent pieces to pin them.",count:2},GRASSHOPPER:{type:"GRASSHOPPER",name:"Grasshopper",emoji:"🦗",description:"Jumps in a straight line over connected pieces to the first empty space.",count:3},SOLDIER_ANT:{type:"SOLDIER_ANT",name:"Soldier Ant",emoji:"🐜",description:"Moves any distance around the perimeter of the swarm.",count:3},MOSQUITO:{type:"MOSQUITO",name:"Mosquito",emoji:"🦟",description:"Copies movement ability of any adjacent piece touching it (acts like Beetle on top of swarm).",count:1,isExpansion:!0},LADYBUG:{type:"LADYBUG",name:"Ladybug",emoji:"🐞",description:"Moves exactly 3 spaces: 2 spaces on top of the swarm and 1 space down.",count:1,isExpansion:!0},PILLBUG:{type:"PILLBUG",name:"Pillbug",emoji:"🪳",description:"Moves 1 space OR picks up an adjacent unstacked piece and moves it to another adjacent empty space.",count:1,isExpansion:!0}};function le(o,r){return`${o},${r}`}const em=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function Wd(o,r){const h=em[(r%6+6)%6];return{q:o.q+h.q,r:o.r+h.r}}function ke(o){return em.map(r=>({q:o.q+r.q,r:o.r+r.r}))}function hl(o,r){return o.q===r.q&&o.r===r.r}function wg(o,r){const h=ke(o),s=ke(r);return h.filter(v=>s.some(A=>hl(v,A)))}function Yg(o,r,h=42){const s=h*Math.sqrt(3)*(o+r/2),v=h*(3/2)*r;return{x:s,y:v}}function Vg(o,r,h=42){const s=[];for(let v=0;v<6;v++){const A=60*v-30,H=Math.PI/180*A,D=o+h*Math.cos(H),E=r+h*Math.sin(H);s.push(`${D.toFixed(2)},${E.toFixed(2)}`)}return s.join(" ")}function gu(o){const r=new Map;return o.forEach((h,s)=>{r.set(s,[...h])}),r}function fa(o,r){const h=o.get(le(r.q,r.r));return!h||h.length===0?null:h[h.length-1]}function Yl(o,r){const h=o.get(le(r.q,r.r));return h?h.length:0}function vt(o,r){return Yl(o,r)>0}function hu(o){const r=[];return o.forEach((h,s)=>{if(h.length>0){const[v,A]=s.split(",").map(Number);r.push({q:v,r:A})}}),r}function ra(o,r){for(const h of o.values())for(const s of h)if(s.player===r&&s.type==="QUEEN")return!0;return!1}function du(o,r){for(const[h,s]of o.entries())for(const v of s)if(v.player===r&&v.type==="QUEEN"){const[A,H]=h.split(",").map(Number);return{q:A,r:H}}return null}function Zg(o){const r=hu(o);if(r.length<=1)return!0;const h=new Set,s=[r[0]];for(h.add(le(r[0].q,r[0].r));s.length>0;){const v=s.shift(),A=ke(v);for(const H of A){const D=le(H.q,H.r);vt(o,H)&&!h.has(D)&&(h.add(D),s.push(H))}}return h.size===r.length}function tm(o,r){const h=o.get(le(r.q,r.r));if(!h||h.length===0)return!1;if(h.length>1)return!0;const s=gu(o);return s.delete(le(r.q,r.r)),Zg(s)}function Pn(o,r,h,s=0){const v=wg(r,h);if(v.length!==2)return!1;const A=Yl(o,v[0]),H=Yl(o,v[1]),D=Math.max(s,Yl(o,r)-1,Yl(o,h));return!(A>D&&H>D)}function yu(o,r,h,s=!0){if(vt(o,h)||!Pn(o,r,h,0))return!1;const v=gu(o),A=v.get(le(r.q,r.r));return A&&(A.length===1?v.delete(le(r.q,r.r)):A.pop()),ke(h).some(E=>vt(v,E))}function lm(o,r,h){const s=hu(o);if(s.length===0)return[{q:0,r:0}];if(s.length===1)return ke(s[0]);const v=new Set,A=[];for(const H of s)for(const D of ke(H))vt(o,D)||v.add(le(D.q,D.r));for(const H of v){const[D,E]=H.split(",").map(Number),m={q:D,r:E},B=ke(m);let z=!1,L=!1;for(const G of B){const P=fa(o,G);P&&(P.player===r?z=!0:L=!0)}z&&!L&&A.push(m)}return A}function am(o,r,h,s,v=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){if(!ra(o,h))return[];const H=o.get(le(r.q,r.r));if(!H||H.length===0)return[];const D=H[H.length-1];if(D.player!==h)return[];if(!tm(o,r))return[];const E=Qs(o,r,D),m=new Set;for(const B of E)Xg(o,r,B).forEach(L=>m.add(le(L.q,L.r)));return Array.from(m).map(B=>{const[z,L]=B.split(",").map(Number);return{q:z,r:L}})}function Qs(o,r,h,s){if(h.type!=="MOSQUITO")return[h.type];if(Yl(o,r)>1)return["BEETLE"];const A=new Set,H=ke(r);for(const D of H){const E=fa(o,D);E&&(E.type==="MOSQUITO"||A.add(E.type))}return A.size===0?[]:Array.from(A)}function Xg(o,r,h,s){switch(h){case"QUEEN":return nm(o,r);case"SPIDER":return Kg(o,r);case"BEETLE":return Pg(o,r);case"GRASSHOPPER":return Jg(o,r);case"SOLDIER_ANT":return Ig(o,r);case"LADYBUG":return Fg(o,r);case"PILLBUG":return Wg(o,r);default:return[]}}function nm(o,r){return ke(r).filter(s=>yu(o,r,s))}function Kg(o,r){const h=[];function s(D,E,m){if(E===3){h.push(D);return}const B=ke(D);for(const z of B){const L=le(z.q,z.r);if(!m.has(L)&&yu(o,D,z)){const G=new Set(m);G.add(L),s(z,E+1,G)}}}const v=new Set([le(r.q,r.r)]);s(r,0,v);const A=new Set,H=[];for(const D of h){const E=le(D.q,D.r);A.has(E)||(A.add(E),H.push(D))}return H}function Pg(o,r){const h=ke(r),s=[],v=Yl(o,r);for(const A of h){const H=Yl(o,A);if(H>=1||v>1){const D=Math.max(v-1,H);Pn(o,r,A,D)&&s.push(A)}else yu(o,r,A)&&s.push(A)}return s}function Jg(o,r){const h=[];for(let s=0;s<6;s++){let v=Wd(r,s),A=0;for(;vt(o,v);)A++,v=Wd(v,s);A>0&&h.push(v)}return h}function Ig(o,r){const h=new Set([le(r.q,r.r)]),s=[r];for(;s.length>0;){const v=s.shift(),A=ke(v);for(const H of A){const D=le(H.q,H.r);h.has(D)||yu(o,v,H)&&(h.add(D),s.push(H))}}return h.delete(le(r.q,r.r)),Array.from(h).map(v=>{const[A,H]=v.split(",").map(Number);return{q:A,r:H}})}function Fg(o,r){const h=new Set,s=ke(r).filter(v=>vt(o,v)&&Pn(o,r,v,0));for(const v of s){const A=ke(v).filter(H=>!hl(H,r)&&vt(o,H)&&Pn(o,v,H,1));for(const H of A){const D=ke(H).filter(E=>!hl(E,v)&&!vt(o,E)&&Pn(o,H,E,0));for(const E of D)h.add(le(E.q,E.r))}}return Array.from(h).map(v=>{const[A,H]=v.split(",").map(Number);return{q:A,r:H}})}function Wg(o,r){return nm(o,r)}function im(o,r,h,s=null){if(!ra(o,h))return[];const v=o.get(le(r.q,r.r));if(!v||v.length===0)return[];const A=ke(r),H=A.filter(E=>!vt(o,E));if(H.length===0)return[];const D=[];for(const E of A)if(vt(o,E)){const m=o.get(le(E.q,E.r));if(m.length===1){const B=m[0];if(B.id===s||!tm(o,E))continue;D.push({targetHex:E,piece:B,destinationHexes:H})}}return D}function ws(o,r,h,s,v=null,A={mosquito:!0,ladybug:!0,pillbug:!0}){const H=[],D=ra(o,r),E=lm(o,r);if(s===4&&!D){const m=h.find(B=>B.type==="QUEEN");if(m)for(const B of E)H.push({type:"PLACE",pieceId:m.id,bugType:"QUEEN",player:r,toHex:B});return H}if(E.length>0&&h.length>0){const m=new Set,B=new Map;for(const z of h)m.has(z.type)||(m.add(z.type),B.set(z.type,z));for(const[z,L]of B.entries())for(const G of E)H.push({type:"PLACE",pieceId:L.id,bugType:z,player:r,toHex:G})}if(D){const m=hu(o);for(const B of m){const z=fa(o,B);if(z&&z.player===r){const L=am(o,B,r,s,v,A);for(const P of L)H.push({type:"MOVE",pieceId:z.id,bugType:z.type,player:r,fromHex:B,toHex:P});if(Qs(o,B,z).includes("PILLBUG")){const P=im(o,B,r,v);for(const V of P)for(const de of V.destinationHexes)H.push({type:"PILLBUG_SPECIAL",pieceId:z.id,bugType:z.type,player:r,fromHex:B,pillbugTargetHex:V.targetHex,toHex:de})}}}}return H}function vu(o){const r=du(o,1),h=du(o,2);let s=0,v=0;r&&(s=ke(r).filter(E=>vt(o,E)).length),h&&(v=ke(h).filter(E=>vt(o,E)).length);const A=s===6,H=v===6;return A&&H?{isGameOver:!0,winner:"DRAW",p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}:A?{isGameOver:!0,winner:2,p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}:H?{isGameOver:!0,winner:1,p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}:{isGameOver:!1,winner:null,p1QueenSurroundedCount:s,p2QueenSurroundedCount:v}}function $g(o,r,h,s,v,A,H,D=null,E={mosquito:!0,ladybug:!0,pillbug:!0}){const m=ws(o,r,h,v,D,E);return m.length===0?null:H==="EASY"?eh(o,r,m,v):H==="MEDIUM"?th(o,r,h,s,v,A,m):lh(o,r,h,s,v,A,m,D,E)}function eh(o,r,h,s){if(!ra(o,r)&&s>=3){const v=h.filter(A=>A.bugType==="QUEEN");if(v.length>0)return v[Math.floor(Math.random()*v.length)]}return h[Math.floor(Math.random()*h.length)]}function th(o,r,h,s,v,A,H,D,E){let m=-1/0,B=[];for(const z of H){const{nextBoard:L,nextAIReserve:G,nextHumanReserve:P}=mu(o,z,r,h,s),V=um(L,r,G,P,v,A);V>m+1e-9?(m=V,B=[z]):Math.abs(V-m)<=1e-9&&B.push(z)}return B[Math.floor(Math.random()*B.length)]}function lh(o,r,h,s,v,A,H,D,E){let z=-1/0,L=1/0,G=-1/0,P=H[0];for(const V of H){const{nextBoard:de,nextAIReserve:be,nextHumanReserve:xe}=mu(o,V,r,h,s),ye=vu(de);if(ye.isGameOver&&ye.winner===r)return V;const Ce=fu(de,1,z,L,!1,r,1,be,xe,v+1,A,Gs(o,V),E);Ce>G&&(G=Ce,P=V),z=Math.max(z,G)}return P}function fu(o,r,h,s,v,A,H,D,E,m,B,z,L){const G=vu(o);if(G.isGameOver)return G.winner===A?1e4:G.winner===H?-1e4:0;if(r===0)return um(o,A,D,E,m,B);const be=ws(o,v?A:H,v?D:E,v?m:B,z,L);if(be.length===0)return fu(o,r-1,h,s,!v,A,H,D,E,v?m+1:m,v?B:B+1,z,L);if(v){let xe=-1/0;for(const ye of be){const{nextBoard:Ce,nextAIReserve:Ne,nextHumanReserve:De}=mu(o,ye,A,D,E),X=fu(Ce,r-1,h,s,!1,A,H,Ne,De,m+1,B,Gs(o,ye),L);if(xe=Math.max(xe,X),h=Math.max(h,X),s<=h)break}return xe}else{let xe=1/0;for(const ye of be){const{nextBoard:Ce,nextAIReserve:Ne,nextHumanReserve:De}=mu(o,ye,H,D,E),X=fu(Ce,r-1,h,s,!0,A,H,Ne,De,m,B+1,Gs(o,ye),L);if(xe=Math.min(xe,X),s=Math.min(s,X),s<=h)break}return xe}}function um(o,r,h,s,v,A,H){const E=vu(o);if(E.isGameOver)return E.winner===r?1e4:E.winner===1?-1e4:0;const m=du(o,r),B=du(o,1);let z=0;if(B){const G=ke(B),P=G.filter(de=>{var be;return((be=fa(o,de))==null?void 0:be.player)===r}).length,V=G.filter(de=>vt(o,de)).length;z+=P*150,z+=(V-P)*40,V===5&&(z+=300)}else z+=A>=3?30:10;if(m){const G=ke(m),P=G.filter(be=>{var xe;return((xe=fa(o,be))==null?void 0:xe.player)===1}).length,V=G.filter(be=>vt(o,be)).length,de=V-P;z-=P*210,V===5&&(z-=400),z+=de*15}else z-=v>=3?60:15;const L=hu(o);for(const G of L){const P=o.get(le(G.q,G.r));if(P.length>1){const V=P[P.length-1],de=P[P.length-2];V.player===r&&de.player===1?(z+=80,de.type==="QUEEN"&&(z+=200)):V.player===1&&de.player===r&&(z-=90,de.type==="QUEEN"&&(z-=250))}}return z}function Gs(o,r){var h;return r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex?((h=fa(o,r.pillbugTargetHex))==null?void 0:h.id)??r.pieceId:r.pieceId}function mu(o,r,h,s,v){const A=gu(o);let H=[...s],D=[...v];if(r.type==="PLACE"){H=H.filter(z=>z.id!==r.pieceId),D=D.filter(z=>z.id!==r.pieceId);const E={id:r.pieceId,type:r.bugType,player:h},m=le(r.toHex.q,r.toHex.r),B=A.get(m)||[];A.set(m,[...B,E])}else if(r.type==="MOVE"){if(r.fromHex){const E=le(r.fromHex.q,r.fromHex.r),m=A.get(E)||[],B=m.pop();if(m.length===0&&A.delete(E),B){const z=le(r.toHex.q,r.toHex.r),L=A.get(z)||[];A.set(z,[...L,B])}}}else if(r.type==="PILLBUG_SPECIAL"&&r.pillbugTargetHex){const E=le(r.pillbugTargetHex.q,r.pillbugTargetHex.r),m=A.get(E)||[],B=m.pop();if(m.length===0&&A.delete(E),B){const z=le(r.toHex.q,r.toHex.r),L=A.get(z)||[];A.set(z,[...L,B])}}return{nextBoard:A,nextAIReserve:H,nextHumanReserve:D}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nh=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,h,s)=>s?s.toUpperCase():h.toLowerCase()),$d=o=>{const r=nh(o);return r.charAt(0).toUpperCase()+r.slice(1)},cm=(...o)=>o.filter((r,h,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===h).join(" ").trim(),ih=o=>{for(const r in o)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=I.forwardRef(({color:o="currentColor",size:r=24,strokeWidth:h=2,absoluteStrokeWidth:s,className:v="",children:A,iconNode:H,...D},E)=>I.createElement("svg",{ref:E,...uh,width:r,height:r,stroke:o,strokeWidth:s?Number(h)*24/Number(r):h,className:cm("lucide",v),...!A&&!ih(D)&&{"aria-hidden":"true"},...D},[...H.map(([m,B])=>I.createElement(m,B)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=(o,r)=>{const h=I.forwardRef(({className:s,...v},A)=>I.createElement(ch,{ref:A,iconNode:r,className:cm(`lucide-${ah($d(o))}`,`lucide-${o}`,s),...v}));return h.displayName=$d(o),h};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],oh=Qe("book-open",sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],fh=Qe("bot",rh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],mh=Qe("check",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gh=Qe("chevron-down",ph);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],yh=Qe("chevron-up",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],sm=Qe("circle-alert",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],om=Qe("code-xml",bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Sh=Qe("copy",xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Th=Qe("download",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Eh=Qe("history",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Oh=Qe("maximize-2",zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Ch=Qe("move",Hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],jh=Qe("play",Nh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Dh=Qe("refresh-cw",Bh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Rh=Qe("rotate-ccw",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Lh=Qe("settings",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Gh=Qe("sparkles",Uh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Qh=Qe("trophy",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Yh=Qe("users",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rm=Qe("x",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Xh=Qe("zoom-in",Zh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ph=Qe("zoom-out",Kh),Jh={appTitle:{en:"BUGZ",es:"BUGZ",pt:"BUGZ",fr:"BUGZ",de:"BUGZ",ja:"BUGZ",zh:"BUGZ"},appSubtitle:{en:"Strategy",es:"Estrategia",pt:"Estratégia",fr:"Stratégie",de:"Strategie",ja:"ストラテジー",zh:"战略"},vsAi:{en:"VS AI ({diff})",es:"VS IA ({diff})",pt:"VS IA ({diff})",fr:"VS IA ({diff})",de:"Gegen KI ({diff})",ja:"AIと対戦 ({diff})",zh:"对战AI（{diff}）"},passAndPlay:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},aiThinking:{en:"AI Thinking...",es:"IA pensando…",pt:"IA pensando…",fr:"L’IA réfléchit…",de:"KI denkt…",ja:"AI思考中…",zh:"AI思考中…"},playersTurn:{en:"Player {n}'s Turn ({color})",es:"Turno del Jugador {n} ({color})",pt:"Vez do Jogador {n} ({color})",fr:"Tour du Joueur {n} ({color})",de:"Spieler {n} am Zug ({color})",ja:"プレイヤー{n}の番（{color}）",zh:"玩家{n}的回合（{color}）"},white:{en:"White",es:"Blanco",pt:"Branco",fr:"Blanc",de:"Weiß",ja:"白",zh:"白"},black:{en:"Black",es:"Negro",pt:"Preto",fr:"Noir",de:"Schwarz",ja:"黒",zh:"黑"},undoTitle:{en:"Undo Move (Unlimited Step Rewind)",es:"Deshacer movimiento (rebobinado ilimitado)",pt:"Desfazer movimento (rebobinar ilimitado)",fr:"Annuler le coup (retour illimité)",de:"Zug rückgängig (unbegrenztes Zurückspulen)",ja:"手を戻す（無制限リプレイ）",zh:"撤销一步（无限回退）"},newGameTitle:{en:"New Game / Match Settings",es:"Nueva partida / Configuración",pt:"Nova partida / Configurações",fr:"Nouvelle partie / Paramètres",de:"Neues Spiel / Einstellungen",ja:"新規ゲーム / 設定",zh:"新游戏 / 设置"},kotlinTitle:{en:"View & Export Android Kotlin Compose Code",es:"Ver y exportar el código Kotlin Compose",pt:"Ver e exportar o código Kotlin Compose",fr:"Voir et exporter le code Kotlin Compose",de:"Kotlin-Compose-Code ansehen & exportieren",ja:"Kotlin Composeコードの表示と出力",zh:"查看并导出Kotlin Compose代码"},kotlinSource:{en:"Kotlin Source",es:"Código Kotlin",pt:"Código Kotlin",fr:"Code Kotlin",de:"Kotlin-Quellcode",ja:"Kotlinソース",zh:"Kotlin源码"},toastForcedPass:{en:"Player {n} has no legal moves available. Turn passed!",es:"El Jugador {n} no tiene movimientos legales. ¡Turno pasado!",pt:"O Jogador {n} não tem movimentos legais. Turno passado!",fr:"Le Joueur {n} n’a aucun coup légal. Tour passé !",de:"Spieler {n} hat keine legalen Züge. Zug übersprungen!",ja:"プレイヤー{n}は合法手がありません。パスしました！",zh:"玩家{n}没有合法走法。跳过回合！"},toastAiPass:{en:"AI (Player 2) has no valid moves. Turn passed!",es:"La IA (Jugador 2) no tiene movimientos válidos. ¡Turno pasado!",pt:"A IA (Jogador 2) não tem movimentos válidos. Turno passado!",fr:"L’IA (Joueur 2) n’a aucun coup valide. Tour passé !",de:"Die KI (Spieler 2) hat keine gültigen Züge. Zug übersprungen!",ja:"AI（プレイヤー2）は有効な手がありません。パスしました！",zh:"AI（玩家2）没有有效走法。跳过回合！"},passLogDesc:{en:"Player {n} was forced to pass turn.",es:"El Jugador {n} se vio obligado a pasar.",pt:"O Jogador {n} foi obrigado a passar.",fr:"Le Joueur {n} a été forcé de passer.",de:"Spieler {n} musste den Zug aussetzen.",ja:"プレイヤー{n}はパスを余儀なくされました。",zh:"玩家{n}被迫跳过回合。"},placedDesc:{en:"Placed {bug} at ({q}, {r})",es:"Colocó {bug} en ({q}, {r})",pt:"Colocou {bug} em ({q}, {r})",fr:"A placé {bug} en ({q}, {r})",de:"{bug} bei ({q}, {r}) platziert",ja:"{bug} を ({q}, {r}) に配置",zh:"将{bug}放置在({q}, {r})"},movedDesc:{en:"Moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"Movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"Moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"A déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"{bug} von ({q1}, {r1}) nach ({q2}, {r2}) bewegt",ja:"{bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"将{bug}从({q1}, {r1})移动到({q2}, {r2})"},pillbugMovedDesc:{en:"Pillbug moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",es:"La cochinilla movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",pt:"A bicho-bola moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",fr:"Le cloporte a déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",de:"Assel bewegt {bug} von ({q1}, {r1}) nach ({q2}, {r2})",ja:"ダンゴムシが {bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",zh:"潮虫将{bug}从({q1}, {r1})移动到({q2}, {r2})"},zoomIn:{en:"Zoom In",es:"Acercar",pt:"Aproximar",fr:"Zoom avant",de:"Vergrößern",ja:"拡大",zh:"放大"},zoomOut:{en:"Zoom Out",es:"Alejar",pt:"Afastar",fr:"Zoom arrière",de:"Verkleinern",ja:"縮小",zh:"缩小"},recenter:{en:"Recenter Board",es:"Centrar tablero",pt:"Centralizar tabuleiro",fr:"Recentrer le plateau",de:"Brett zentrieren",ja:"盤面を中央に",zh:"居中棋盘"},panHint:{en:"Drag canvas to pan • Scroll to zoom",es:"Arrastra para mover • Rueda para zoom",pt:"Arraste para mover • Role para zoom",fr:"Faites glisser pour déplacer • Molette pour zoomer",de:"Ziehen zum Verschieben • Scrollen zum Zoomen",ja:"ドラッグで移動 • スクロールでズーム",zh:"拖动画布平移 • 滚动缩放"},setupSubtitle:{en:"Configure your match mode, AI strength, and expansion pieces.",es:"Configura el modo de partida, la fuerza de la IA y las piezas de expansión.",pt:"Configure o modo de partida, a força da IA e as peças de expansão.",fr:"Configurez le mode de partie, la force de l’IA et les pièces d’extension.",de:"Konfiguriere Spielmodus, KI-Stärke und Erweiterungspieces.",ja:"対戦モード、AIの強さ、拡張ピースを設定します。",zh:"设置对战模式、AI强度和扩展棋子。"},gameModeLabel:{en:"Game Mode",es:"Modo de juego",pt:"Modo de jogo",fr:"Mode de jeu",de:"Spielmodus",ja:"ゲームモード",zh:"游戏模式"},passPlayBtn:{en:"Pass & Play",es:"Pasa y juega",pt:"Passa e joga",fr:"Passe et joue",de:"Weitersagen & Spielen",ja:"パス&プレイ",zh:"轮流游玩"},vsAiBtn:{en:"VS AI Engine",es:"VS Motor IA",pt:"VS Motor IA",fr:"VS Moteur IA",de:"Gegen KI-Engine",ja:"AIエンジンと対戦",zh:"对战AI引擎"},aiDifficultyLabel:{en:"AI Difficulty",es:"Dificultad de la IA",pt:"Dificuldade da IA",fr:"Difficulté de l’IA",de:"KI-Schwierigkeit",ja:"AIの難易度",zh:"AI难度"},easyBtn:{en:"Easy",es:"Fácil",pt:"Fácil",fr:"Facile",de:"Leicht",ja:"かんたん",zh:"简单"},mediumBtn:{en:"Medium",es:"Medio",pt:"Médio",fr:"Moyen",de:"Mittel",ja:"ふつう",zh:"中等"},hardBtn:{en:"Hard (Minimax)",es:"Difícil (Minimax)",pt:"Difícil (Minimax)",fr:"Difficile (Minimax)",de:"Schwer (Minimax)",ja:"むずかしい（Minimax）",zh:"困难（Minimax）"},expansionsLabel:{en:"Expansions",es:"Expansiones",pt:"Expansões",fr:"Extensions",de:"Erweiterungen",ja:"拡張",zh:"扩展"},mosquitoLabel:{en:"🦟 The Mosquito",es:"🦟 El mosquito",pt:"🦟 O pernilongo",fr:"🦟 Le moustique",de:"🦟 Die Mücke",ja:"🦟 蚊",zh:"🦟 蚊子"},ladybugLabel:{en:"🐞 The Ladybug",es:"🐞 La mariquita",pt:"🐞 A joaninha",fr:"🐞 La coccinelle",de:"🐞 Der Marienkäfer",ja:"🐞 テントウムシ",zh:"🐞 瓢虫"},pillbugLabel:{en:"💊 The Pillbug",es:"💊 La cochinilla",pt:"💊 O bicho-bola",fr:"💊 Le cloporte",de:"💊 Die Assel",ja:"💊 ダンゴムシ",zh:"💊 潮虫"},cancel:{en:"Cancel",es:"Cancelar",pt:"Cancelar",fr:"Annuler",de:"Abbrechen",ja:"キャンセル",zh:"取消"},startGame:{en:"Start Game",es:"Comenzar",pt:"Começar",fr:"Commencer",de:"Start",ja:"開始",zh:"开始游戏"},learnToPlay:{en:"Learn to Play",es:"Aprende a jugar",pt:"Aprenda a jogar",fr:"Apprendre à jouer",de:"Lernen zu spielen",ja:"遊び方を学ぶ",zh:"学习玩法"},playerLabel:{en:"Player {n} ({color})",es:"Jugador {n} ({color})",pt:"Jogador {n} ({color})",fr:"Joueur {n} ({color})",de:"Spieler {n} ({color})",ja:"プレイヤー{n}（{color}）",zh:"玩家{n}（{color}）"},reserveCount:{en:"Reserve ({n})",es:"Reserva ({n})",pt:"Reserva ({n})",fr:"Réserve ({n})",de:"Reserve ({n})",ja:"リザーブ（{n}）",zh:"后备（{n}）"},turn4Warning:{en:"Turn 4 Mandatory: You MUST place your Queen Bee!",es:"Turno 4 obligatorio: ¡Debes colocar tu abeja reina!",pt:"Turno 4 obrigatório: Você DEVE colocar sua abelha rainha!",fr:"Tour 4 obligatoire : vous DEVEZ placer votre reine !",de:"Pflichtzug 4: Du MUSST deine Bienenkönigin platzieren!",ja:"4手目必須: 女王バチを配置しなければなりません！",zh:"第4回合强制：你必须放置蜂后！"},moveHistory:{en:"Move History ({n})",es:"Historial de movimientos ({n})",pt:"Histórico de movimentos ({n})",fr:"Historique des coups ({n})",de:"Zugverlauf ({n})",ja:"手番履歴（{n}）",zh:"走法历史（{n}）"},noMoves:{en:"No moves recorded yet.",es:"Aún no hay movimientos.",pt:"Nenhum movimento registrado ainda.",fr:"Aucun coup enregistré pour l’instant.",de:"Noch keine Züge aufgezeichnet.",ja:"まだ手は記録されていません。",zh:"暂无走法记录。"},drawTitle:{en:"🤝 Mutual Draw!",es:"🤝 ¡Empate mutuo!",pt:"🤝 Empate mútuo!",fr:"🤝 Égalité mutuelle !",de:"🤝 Unentschieden!",ja:"🤝 引き分け！",zh:"🤝 平局！"},p1WinTitle:{en:"🎉 Player 1 (White) Wins!",es:"🎉 ¡Gana el Jugador 1 (Blanco)!",pt:"🎉 O Jogador 1 (Branco) venceu!",fr:"🎉 Le Joueur 1 (Blanc) gagne !",de:"🎉 Spieler 1 (Weiß) gewinnt!",ja:"🎉 プレイヤー1（白）の勝利！",zh:"🎉 玩家1（白）获胜！"},p2WinTitle:{en:"🎉 Player 2 (Black) Wins!",es:"🎉 ¡Gana el Jugador 2 (Negro)!",pt:"🎉 O Jogador 2 (Preto) venceu!",fr:"🎉 Le Joueur 2 (Noir) gagne !",de:"🎉 Spieler 2 (Schwarz) gewinnt!",ja:"🎉 プレイヤー2（黒）の勝利！",zh:"🎉 玩家2（黑）获胜！"},drawDesc:{en:"Both Queen Bees were completely surrounded simultaneously!",es:"¡Ambas abejas reinas quedaron completamente rodeadas a la vez!",pt:"As duas abelhas rainhas foram completamente cercadas ao mesmo tempo!",fr:"Les deux reines ont été entièrement encerclées en même temps !",de:"Beide Bienenköniginnen wurden gleichzeitig vollständig eingekreist!",ja:"両方の女王バチが同時に完全に囲まれました！",zh:"两只蜂后同时被完全围住！"},winDesc:{en:"The opposing Queen Bee has been completely surrounded on all 6 sides!",es:"¡La abeja reina rival quedó completamente rodeada por los 6 lados!",pt:"A abelha rainha adversária foi completamente cercada nos 6 lados!",fr:"La reine adverse a été entièrement encerclée sur ses 6 côtés !",de:"Die gegnerische Bienenkönigin wurde auf allen 6 Seiten vollständig eingekreist!",ja:"相手の女王バチが6方向すべてを囲まれました！",zh:"对手的蜂后已被六面全部围住！"},playAgain:{en:"Play Again",es:"Jugar de nuevo",pt:"Jogar de novo",fr:"Rejouer",de:"Nochmal spielen",ja:"もう一度プレイ",zh:"再来一局"},matchOptions:{en:"Match Options / Difficulty",es:"Opciones / Dificultad",pt:"Opções / Dificuldade",fr:"Options / Difficulté",de:"Optionen / Schwierigkeit",ja:"対戦設定 / 難易度",zh:"对局选项 / 难度"},rulesTitle:{en:"How to Play Bugz",es:"Cómo jugar a Bugz",pt:"Como jogar Bugz",fr:"Comment jouer à Bugz",de:"So spielst du Bugz",ja:"Bugzの遊び方",zh:"如何玩Bugz"},close:{en:"Close",es:"Cerrar",pt:"Fechar",fr:"Fermer",de:"Schließen",ja:"閉じる",zh:"关闭"},goalTitle:{en:"🎯 Goal:",es:"🎯 Objetivo:",pt:"🎯 Objetivo:",fr:"🎯 Objectif :",de:"🎯 Ziel:",ja:"🎯 目的:",zh:"🎯 目标："},goalDesc:{en:"Surround the opponent's Queen Bee with pieces on all six sides. First to do so wins; both surrounded at once is a draw.",es:"Rodea la abeja reina del rival con piezas por los seis lados. El primero en lograrlo gana; si ambas quedan rodeadas a la vez, es empate.",pt:"Cerque a abelha rainha do oponente com peças em todos os seis lados. Quem conseguir primeiro vence; se ambas forem cercadas ao mesmo tempo, empata.",fr:"Encerclez la reine adverse avec des pièces sur les six côtés. Le premier à y parvenir gagne ; si les deux sont encerclées à la fois, c’est une égalité.",de:"Umschließe die Bienenkönigin des Gegners auf allen sechs Seiten. Wer das zuerst schafft, gewinnt; sind beide gleichzeitig eingekreist, ist es ein Unentschieden.",ja:"相手の女王バチの6方向すべてを自分の駒で囲みましょう。先に囲んだ方が勝ち。同時なら引き分けです。",zh:"用棋子将对手的蜂后六面围住。先完成者获胜；同时围住则为平局。"},coreRulesTitle:{en:"📜 Core Rules",es:"📜 Reglas básicas",pt:"📜 Regras básicas",fr:"📜 Règles de base",de:"📜 Grundregeln",ja:"📜 基本ルール",zh:"📜 基本规则"},coreRule1:{en:"Play one piece per turn (placement) or move one of your pieces.",es:"Coloca una pieza por turno o mueve una de tus piezas.",pt:"Jogue uma peça por turno (colocação) ou mova uma de suas peças.",fr:"Jouez une pièce par tour (placement) ou déplacez une de vos pièces.",de:"Setze pro Zug eine Kachel (Platzierung) oder bewege eine deiner Kacheln.",ja:"毎ターン1枚配置するか、自分の駒を1つ動かします。",zh:"每回合放置一枚棋子，或移动自己的一枚棋子。"},coreRule2:{en:"Your Queen Bee must be introduced by your 4th turn.",es:"Debes introducir tu abeja reina en tu 4º turno.",pt:"Sua abelha rainha deve ser introduzida até o seu 4º turno.",fr:"Votre reine doit être introduite avant votre 4e tour.",de:"Deine Bienenkönigin muss bis zu deinem 4. Zug eingeführt werden.",ja:"女王バチは4手目までに配置しなければなりません。",zh:"蜂后必须在你的第4回合之前上场。"},coreRule3:{en:"Your first piece is placed anywhere; later pieces must be placed adjacent to one of your pieces. Except for your second placement, pieces may not be placed touching an opponent's piece.",es:"Tu primera pieza se coloca en cualquier lugar; las siguientes deben ir adyacentes a una de tus piezas. Salvo la segunda colocación, no puedes colocar piezas tocando piezas del rival.",pt:"Sua primeira peça pode ser colocada em qualquer lugar; as seguintes devem ficar adjacentes a uma de suas peças. Exceto a segunda colocação, as peças não podem tocar peças do oponente.",fr:"Votre première pièce est placée n’importe où ; les suivantes doivent être adjacentes à une de vos pièces. Sauf pour la deuxième pose, vous ne pouvez pas poser une pièce touchant une pièce adverse.",de:"Deine erste Kachel platzierst du überall; spätere müssen an eine deiner Kacheln angrenzen. Außer bei deiner zweiten Platzierung dürfen Kacheln nicht gegnerische Kacheln berühren.",ja:"最初の1枚はどこにでも置けます。以降は自分の駒に隣接して置きます。2枚目の配置以外は、相手の駒に接する配置はできません。",zh:"第一枚棋子可放在任意位置；之后的棋子必须与自己的棋子相邻。除第二次放置外，棋子不能与对手棋子接触。"},coreRule4:{en:"The swarm must always stay connected. You may never move a piece that would split the Swarm, and you may not move a piece into a gap unless it still fits the freedom-to-move rule (no squeezing between stacked pieces).",es:"El enjambre debe permanecer siempre conectado. Nunca muevas una pieza que dividiría el enjambre, ni la metas en un hueco si no respeta la regla de libertad de movimiento (sin apretujones entre piezas apiladas).",pt:"O enxame deve permanecer sempre conectado. Nunca mova uma peça que dividiria o enxame, nem mova para um vão sem respeitar a regra de liberdade de movimento (sem apertar entre peças empilhadas).",fr:"L’essaim doit toujours rester connecté. Vous ne pouvez jamais déplacer une pièce qui diviserait l’essaim, ni la glisser dans un espace étroit (pas de glissement entre pièces empilées).",de:"Der Schwarm muss immer verbunden bleiben. Du darfst nie eine Kachel ziehen, die den Schwarm spaltet, und nicht in eine Lücke ziehen, es sei denn, es gilt die Bewegungsfreiheitsregel (kein Durchquetschen zwischen gestapelten Kacheln).",ja:"ハイブは常に繋がっていなければなりません。盤面を分断する動きはできず、積み上げた駒の隙間に入り込む動きも禁止です。",zh:"蜂群必须始终保持连通。不得移动会分裂蜂群的棋子，也不得将棋子挤入过窄的缝隙（不得在堆叠棋子之间挤入）。"},insectTitle:{en:"🦗 Insect Movements",es:"🦗 Movimientos de los insectos",pt:"🦗 Movimentos dos insetos",fr:"🦗 Déplacements des insectes",de:"🦗 Bewegungen der Insekten",ja:"🦗 昆虫の動き",zh:"🦗 昆虫的走法"},insectQueen:{en:"moves exactly 1 hex per turn.",es:"se mueve exactamente 1 hexágono por turno.",pt:"move exatamente 1 hexágono por turno.",fr:"se déplace d’exactement 1 hexagone par tour.",de:"zieht genau 1 Feld pro Zug.",ja:"毎ターンちょうど1マス移動します。",zh:"每回合恰好移动1格。"},insectSpider:{en:"crawls exactly 3 hexes along the outside edge, never retracing.",es:"se arrastra exactamente 3 hexágonos por el borde exterior, sin retroceder.",pt:"rasteja exatamente 3 hexágonos pela borda externa, sem retroceder.",fr:"se déplace d’exactement 3 hexagones le long du bord, sans jamais revenir en arrière.",de:"kriecht genau 3 Felder entlang der Außenkante, nie rückwärts.",ja:"外周に沿ってちょうど3マス移動し、後戻りはできません。",zh:"沿外围恰好爬行3格，不得折返。"},insectBeetle:{en:"moves 1 hex and can climb on top of other pieces (including a Queen) to block them; a beetle on top moves like a beetle over the stack.",es:"se mueve 1 hexágono y puede subir sobre otras piezas (incluida la reina) para bloquearlas; uno arriba se mueve como un escarabajo sobre la pila.",pt:"move 1 hexágono e pode subir sobre outras peças (inclusive a rainha) para bloqueá-las; um besouro no topo move-se como besouro sobre a pilha.",fr:"se déplace d’1 hexagone et peut grimper sur d’autres pièces (y compris la reine) pour les bloquer ; un scarabée en haut se déplace par-dessus la pile.",de:"zieht 1 Feld und kann auf andere Kacheln (auch die Königin) klettern, um sie zu blockieren; ein Käfer oben zieht über den Stapel.",ja:"1マス移動し、他の駒（女王バチを含む）の上に登って封鎖できます。上に乗ったカブトムシはスタックの上を移動します。",zh:"移动1格，可爬上其他棋子（包括蜂后）将其封锁；上方的甲虫可沿堆叠移动。"},insectGrasshopper:{en:"jumps in a straight line over at least one piece, landing on the first empty hex in that line.",es:"salta en línea recta sobre al menos una pieza y aterriza en el primer hexágono vacío de esa línea.",pt:"salta em linha reta sobre pelo menos uma peça, pousando no primeiro hexágono vazio da linha.",fr:"saute en ligne droite par-dessus au moins une pièce et atterrit sur le premier hexagone vide de la ligne.",de:"springt in einer geraden Linie über mindestens eine Kachel und landet auf dem ersten leeren Feld dieser Linie.",ja:"一直線に少なくとも1つの駒を飛び越え、その線上で最初の空きマスに着地します。",zh:"沿直线跳过至少一枚棋子，落在该线路上第一个空格。"},insectAnt:{en:"may slide any number of hexes along the outside of the Swarm.",es:"puede deslizarse cualquier cantidad de hexágonos por el exterior del enjambre.",pt:"pode deslizar qualquer número de hexágonos pela parte externa do enxame.",fr:"peut glisser d’un nombre quelconque d’hexagones le long de l’extérieur de l’essaim.",de:"kann beliebig viele Felder entlang der Außenseite des Schwarms gleiten.",ja:"ハイブの外周に沿って好きなだけ滑るように移動できます。",zh:"可沿蜂群外部滑动任意数量的格子。"},insectMosquito:{en:"copies the movement (or pillbug ability) of any piece it touches.",es:"copia el movimiento (o la habilidad de la cochinilla) de cualquier pieza que toque.",pt:"copia o movimento (ou a habilidade do bicho-bola) de qualquer peça que toque.",fr:"copie le déplacement (ou l’aptitude du cloporte) de toute pièce qu’il touche.",de:"kopiert die Bewegung (oder Assel-Fähigkeit) jeder Kachel, die es berührt.",ja:"接触している駒の移動（またはダンゴムシの能力）をコピーします。",zh:"复制与之接触的任何棋子的走法（或潮虫能力）。"},insectLadybug:{en:"moves exactly 2 hexes on top of the Swarm, then 1 hex back down to the board (may land on empty board hexes).",es:"se mueve exactamente 2 hexágonos sobre el enjambre y luego 1 hexágono hacia abajo al tablero (puede aterrizar en hexágonos vacíos).",pt:"move exatamente 2 hexágonos sobre o enxame e depois 1 hexágono de volta ao tabuleiro (pode pousar em hexágonos vazios).",fr:"se déplace d’exactement 2 hexagones par-dessus l’essaim, puis redescend d’1 hexagone sur le plateau (peut atterrir sur des cases vides).",de:"zieht genau 2 Felder über dem Schwarm und dann 1 Feld zurück auf das Brett (darf auf leere Felder landen).",ja:"ハイブの上をちょうど2マス移動し、その後1マス盤面に降ります（空きマスに着地可）。",zh:"在蜂群上方恰好移动2格，然后向下1格落回棋盘（可落在空棋盘格上）。"},insectPillbug:{en:"may not move itself, but it can move an adjacent enemy or friendly piece 2 hexes: up onto itself, then down into an adjacent empty space. The moved piece is stunned and cannot move on the opponent’s next turn.",es:"no puede moverse, pero puede mover una pieza adyacente (aliada o enemiga) 2 hexágonos: primero sobre sí misma y luego a un espacio vacío adyacente. La pieza movida queda aturdida y no puede moverse en el siguiente turno del rival.",pt:"não pode se mover, mas pode mover uma peça adjacente (aliada ou inimiga) 2 hexágonos: primeiro sobre si mesma e depois para um espaço vazio adjacente. A peça movida fica atordoada e não pode se mover no próximo turno do oponente.",fr:"ne peut pas se déplacer, mais peut déplacer une pièce adjacente (alliée ou ennemie) de 2 hexagones : d’abord sur elle-même, puis dans un espace vide adjacent. La pièce déplacée est étourdie et ne peut pas bouger au tour suivant de l’adversaire.",de:"kann sich selbst nicht bewegen, aber eine benachbarte Kachel (feindlich oder freundlich) 2 Felder bewegen: erst auf sich, dann in einen benachbarten leeren Raum. Die bewegte Kachel ist benommen und kann im nächsten Zug des Gegners nicht ziehen.",ja:"自分は動けませんが、隣接する駒（敵味方どちらでも）を2マス動かせます: まず自分の上へ、そして隣接する空きマスへ。動かされた駒はスタンし、相手の次のターンは動けません。",zh:"潮虫自身不能移动，但可将相邻的棋子（敌我均可）移动2格：先移到自身上方，再移到相邻空格。被移动的棋子陷入眩晕，对手下一回合不能移动。"},codeTitle:{en:"Single-File Android Source Code",es:"Código fuente Android de un solo archivo",pt:"Código-fonte Android em arquivo único",fr:"Code source Android en un seul fichier",de:"Android-Quellcode in einer Datei",ja:"単一ファイルのAndroidソースコード",zh:"单文件Android源代码"},codeBadge:{en:"BugzApp.kt (Jetpack Compose)",es:"BugzApp.kt (Jetpack Compose)",pt:"BugzApp.kt (Jetpack Compose)",fr:"BugzApp.kt (Jetpack Compose)",de:"BugzApp.kt (Jetpack Compose)",ja:"BugzApp.kt (Jetpack Compose)",zh:"BugzApp.kt (Jetpack Compose)"},codeDesc:{en:"Complete Kotlin application logic, Compose canvas, AI minimax, and game loop.",es:"Lógica completa de la app en Kotlin, lienzo Compose, minimax de IA y bucle de juego.",pt:"Lógica completa do app em Kotlin, canvas Compose, minimax da IA e loop do jogo.",fr:"Logique complète de l’app en Kotlin, canevas Compose, minimax IA et boucle de jeu.",de:"Vollständige Kotlin-App-Logik, Compose-Canvas, KI-Minimax und Spielschleife.",ja:"完全なKotlinアプリロジック、Composeキャンバス、AIミニマックス、ゲームループ。",zh:"完整的Kotlin应用逻辑、Compose画布、AI极小化极大和游戏循环。"},copied:{en:"Copied!",es:"¡Copiado!",pt:"Copiado!",fr:"Copié !",de:"Kopiert!",ja:"コピーしました！",zh:"已复制！"},copyCode:{en:"Copy Code",es:"Copiar código",pt:"Copiar código",fr:"Copier le code",de:"Code kopieren",ja:"コードをコピー",zh:"复制代码"},downloadKt:{en:"Download .kt",es:"Descargar .kt",pt:"Baixar .kt",fr:"Télécharger .kt",de:".kt herunterladen",ja:".ktをダウンロード",zh:"下载.kt"}},pu=["en","es","pt","fr","de","ja","zh"],Ih={en:"English",es:"Español",pt:"Português",fr:"Français",de:"Deutsch",ja:"日本語",zh:"中文"},fm="bugz-lang-v1";function Fh(){try{const o=localStorage.getItem(fm);if(o&&pu.includes(o))return o}catch{}return Wh()}function Wh(){try{const o=typeof navigator<"u"?navigator.languages??[navigator.language]:[];for(const r of o){const h=r.toLowerCase().replace(/_/g,"-");if(pu.includes(h))return h;const s=h.split("-")[0];if(pu.includes(s))return s}}catch{}return"en"}const dm=I.createContext({lang:"en",setLang:()=>{},t:o=>String(o)}),$h=({children:o})=>{const[r,h]=I.useState(()=>Fh());I.useEffect(()=>{try{localStorage.setItem(fm,r)}catch{}},[r]);const s=(v,A)=>{const H=Jh[v],D=H?H[r]??H.en:String(v);return A?D.replace(/\{(\w+)\}/g,(E,m)=>A[m]!==void 0?String(A[m]):`{${m}}`):D};return f.jsx(dm.Provider,{value:{lang:r,setLang:h,t:s},children:o})};function yl(){return I.useContext(dm)}const ey=({className:o=""})=>{const{lang:r,setLang:h}=yl();return f.jsx("select",{value:r,onChange:s=>h(s.target.value),"aria-label":"Language",className:`rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-slate-200 transition-colors hover:bg-slate-700 cursor-pointer ${o}`,children:pu.map(s=>f.jsx("option",{value:s,children:Ih[s]},s))})},ty=({board:o,selectedHex:r,validDestinations:h,pillbugTargetHex:s,pillbugDestinations:v,onSelectHex:A,onSelectDestination:H,onSelectPillbugTarget:D,currentPlayer:E,isAITurn:m,lastMovedHex:B})=>{const{t:z}=yl(),L=I.useRef(null),[G,P]=I.useState(1),[V,de]=I.useState({x:0,y:0}),[be,xe]=I.useState(!1),[ye,Ce]=I.useState({x:0,y:0}),Ne=42,De=()=>{de({x:0,y:0}),P(1)},X=k=>{k.preventDefault();const ze=k.deltaY<0?1.1:.9;P(T=>Math.min(Math.max(T*ze,.4),2.5))},_e=k=>{k.button===0&&(xe(!0),Ce({x:k.clientX-V.x,y:k.clientY-V.y}))},Xe=k=>{be&&de({x:k.clientX-ye.x,y:k.clientY-ye.y})},it=()=>{xe(!1)},ot=Array.from(o.keys()).map(k=>{const[ze,T]=k.split(",").map(Number);return{q:ze,r:T}}),me=new Map;for(const k of ot){const ze=le(k.q,k.r);me.set(ze,k);for(const T of ke(k)){const q=le(T.q,T.r);me.has(q)||me.set(q,T)}}if(me.size===0){const k={q:0,r:0};me.set(le(0,0),k);for(const ze of ke(k))me.set(le(ze.q,ze.r),ze)}for(const k of h)me.set(le(k.q,k.r),k);for(const k of v)me.set(le(k.q,k.r),k);const bt=Array.from(me.values());return f.jsxs("div",{ref:L,className:"relative w-full h-full bg-slate-900 overflow-hidden select-none cursor-grab active:cursor-grabbing border border-slate-800 rounded-2xl shadow-inner",onWheel:X,onMouseDown:_e,onMouseMove:Xe,onMouseUp:it,onMouseLeave:it,children:[f.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-2 rounded-xl shadow-lg",children:[f.jsx("button",{onClick:()=>P(k=>Math.min(k*1.2,2.5)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:z("zoomIn"),children:f.jsx(Xh,{className:"w-5 h-5"})}),f.jsx("button",{onClick:()=>P(k=>Math.max(k/1.2,.4)),className:"p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors",title:z("zoomOut"),children:f.jsx(Ph,{className:"w-5 h-5"})}),f.jsx("button",{onClick:De,className:"p-2 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-lg transition-colors",title:z("recenter"),children:f.jsx(Oh,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"absolute top-4 left-4 z-10 pointer-events-none bg-slate-950/60 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 flex items-center gap-2",children:[f.jsx(Ch,{className:"w-3.5 h-3.5 text-amber-400 animate-pulse"}),f.jsx("span",{children:z("panHint")})]}),f.jsx("svg",{className:"w-full h-full pointer-events-auto",style:{touchAction:"none"},children:f.jsxs("g",{transform:`translate(${L.current?L.current.clientWidth/2+V.x:V.x}, ${L.current?L.current.clientHeight/2+V.y:V.y}) scale(${G})`,children:[f.jsxs("defs",{children:[f.jsxs("radialGradient",{id:"p1Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),f.jsx("stop",{offset:"100%",stopColor:"#f1f5f9"})]}),f.jsxs("radialGradient",{id:"p2Gradient",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#334155"}),f.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),f.jsxs("radialGradient",{id:"validGrad",cx:"50%",cy:"50%",r:"50%",children:[f.jsx("stop",{offset:"0%",stopColor:"#10b981",stopOpacity:"0.4"}),f.jsx("stop",{offset:"100%",stopColor:"#059669",stopOpacity:"0.8"})]}),f.jsxs("filter",{id:"glowGold",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[f.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),f.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),bt.map(k=>{const ze=le(k.q,k.r),{x:T,y:q}=Yg(k.q,k.r,Ne),Y=o.get(ze)||[],ae=Y.length>0,te=ae?Y[Y.length-1]:null,g=Y.length,N=r&&hl(r,k),R=h.some(Nt=>hl(Nt,k)),U=s&&hl(s,k),K=v.some(Nt=>hl(Nt,k)),$=(B==null?void 0:B.to)&&hl(B.to,k),re=Vg(T,q,Ne-2);let Le="none",pe="#334155",xt=1.5;return ae&&te?te.player===1?(Le="url(#p1Gradient)",pe="#e2e8f0"):(Le="url(#p2Gradient)",pe="#475569"):(R||K)&&(Le="rgba(16, 185, 129, 0.15)",pe="#10b981",xt=2.5),N?(pe="#f59e0b",xt=4):U?(pe="#ec4899",xt=3.5):$&&(pe="#3b82f6",xt=3),f.jsxs("g",{className:"transition-all duration-200 cursor-pointer group",onClick:Nt=>{Nt.stopPropagation(),!m&&(K&&H||R&&H?H(k):ae&&(s&&D&&hl(s,k),A(k)))},children:[f.jsx("polygon",{points:re,fill:Le,stroke:pe,strokeWidth:xt,className:`${R||K?"animate-pulse hover:fill-emerald-500/30":""} ${N?"filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]":""}`}),(R||K)&&f.jsx("circle",{cx:T,cy:q,r:14,fill:"#10b981",className:"animate-ping opacity-75"}),ae&&te&&f.jsxs(f.Fragment,{children:[f.jsx("text",{x:T,y:q+8,textAnchor:"middle",fontSize:26,className:"pointer-events-none select-none drop-shadow",children:oa[te.type].emoji}),g>1&&f.jsxs("g",{transform:`translate(${T+14}, ${q-18})`,children:[f.jsx("circle",{r:10,fill:"#f59e0b",stroke:"#1e293b",strokeWidth:1.5}),f.jsx("text",{x:0,y:3.5,textAnchor:"middle",fontSize:11,fontWeight:"bold",fill:"#0f172a",children:g})]}),f.jsx("circle",{cx:T-16,cy:q-16,r:6,fill:te.player===1?"#ffffff":"#0f172a",stroke:te.player===1?"#cbd5e1":"#64748b",strokeWidth:1.5})]}),!ae&&(R||K)&&f.jsx("circle",{cx:T,cy:q,r:7,fill:"#10b981"}),f.jsxs("text",{x:T,y:q+(ae?28:4),textAnchor:"middle",fontSize:8,fill:"#64748b",className:"opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",children:[k.q,",",k.r]})]},ze)})]})})]})},Ls=({player:o,reserve:r,isActive:h,selectedBugType:s,onSelectBugType:v,turnCount:A,queenPlaced:H})=>{const{t:D}=yl(),E=new Map;for(const B of r){const z=E.get(B.type)||[];z.push(B),E.set(B.type,z)}const m=A===4&&!H;return f.jsxs("div",{className:`p-4 rounded-2xl border transition-all duration-300 ${h?o===1?"bg-slate-800/90 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]":"bg-slate-900/90 border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]":"bg-slate-900/50 border-slate-800/80 opacity-70"}`,children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full border ${o===1?"bg-white border-slate-300":"bg-slate-950 border-slate-600"}`}),f.jsx("h3",{className:"font-bold text-sm text-slate-100",children:D("playerLabel",{n:o,color:D(o===1?"white":"black")})})]}),f.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:D("reserveCount",{n:r.length})})]}),m&&h&&f.jsxs("div",{className:"mb-3 p-2 bg-amber-500/20 border border-amber-500/50 rounded-lg text-amber-300 text-xs flex items-center gap-1.5 animate-bounce",children:[f.jsx(sm,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:D("turn4Warning")})]}),f.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-4 gap-2",children:Array.from(E.entries()).map(([B,z])=>{const L=oa[B],G=z.length,P=s===B,V=!h||G===0||m&&B!=="QUEEN";return f.jsxs("button",{onClick:()=>!V&&v(B),disabled:V,title:`${L.name}: ${L.description}`,className:`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${P?"bg-amber-500/20 border-amber-400 text-amber-200 scale-105 shadow-md":V?"bg-slate-950/40 border-slate-800/50 text-slate-600 opacity-40 cursor-not-allowed":"bg-slate-800/60 border-slate-700/80 hover:bg-slate-700/80 text-slate-200 hover:border-slate-500 cursor-pointer"}`,children:[f.jsx("span",{className:"text-2xl mb-1 select-none",children:L.emoji}),f.jsx("span",{className:"text-[10px] font-semibold truncate max-w-full",children:L.name.split(" ")[0]}),f.jsxs("span",{className:`absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold border ${P?"bg-amber-500 text-slate-950 border-amber-300":"bg-slate-900 text-slate-300 border-slate-700"}`,children:["x",G]})]},B)})})]})},ly=({logs:o})=>{const{t:r}=yl(),[h,s]=I.useState(!1);return f.jsxs("div",{className:"bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all",children:[f.jsxs("button",{onClick:()=>s(!h),className:"w-full px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Eh,{className:"w-4 h-4 text-amber-400"}),f.jsx("span",{children:r("moveHistory",{n:o.length})})]}),h?f.jsx(gh,{className:"w-4 h-4"}):f.jsx(yh,{className:"w-4 h-4"})]}),h&&f.jsx("div",{className:"max-h-48 overflow-y-auto p-3 divide-y divide-slate-800/60 text-xs text-slate-400",children:o.length===0?f.jsx("p",{className:"text-center italic py-2 text-slate-500",children:r("noMoves")}):[...o].reverse().map((v,A)=>f.jsxs("div",{className:"py-1.5 flex items-start justify-between gap-2",children:[f.jsxs("span",{className:"font-mono text-[10px] text-slate-500",children:["T",v.turnNumber," P",v.player]}),f.jsx("span",{className:"text-slate-200 font-medium flex-1 text-right",children:v.description})]},A))})]})},ay=({isOpen:o,onClose:r})=>{const{t:h}=yl();return o?f.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsx("h2",{className:"text-xl font-black text-slate-100",children:h("rulesTitle")}),f.jsx("button",{onClick:r,className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",title:h("close"),children:f.jsx(rm,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:"px-6 py-5 overflow-y-auto space-y-4",children:[f.jsx("div",{children:f.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[f.jsx("span",{className:"font-bold text-amber-400",children:h("goalTitle")})," ",h("goalDesc")]})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("coreRulesTitle")}),f.jsxs("ul",{className:"space-y-1.5 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:["• ",h("coreRule1")]}),f.jsxs("li",{children:["• ",h("coreRule2")]}),f.jsxs("li",{children:["• ",h("coreRule3")]}),f.jsxs("li",{children:["• ",h("coreRule4")]})]})]}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2",children:h("insectTitle")}),f.jsxs("ul",{className:"space-y-2 text-sm text-slate-300 leading-relaxed list-none",children:[f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐝"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Queen Bee"})," — ",h("insectQueen")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🕷️"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Spider"})," — ",h("insectSpider")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪲"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Beetle"})," — ",h("insectBeetle")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦗"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Grasshopper"})," — ",h("insectGrasshopper")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐜"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Soldier Ant"})," — ",h("insectAnt")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🦟"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Mosquito"})," — ",h("insectMosquito")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🐞"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Ladybug"})," — ",h("insectLadybug")]}),f.jsxs("li",{children:[f.jsx("span",{className:"text-base",children:"🪳"})," ",f.jsx("span",{className:"font-semibold text-slate-100",children:"Pillbug"})," — ",h("insectPillbug")]})]})]})]})]})}):null},ny=({isOpen:o,onStartGame:r,onClose:h,canCancel:s=!1})=>{const{t:v}=yl(),[A,H]=I.useState("AI"),[D,E]=I.useState("MEDIUM"),[m,B]=I.useState({mosquito:!0,ladybug:!0,pillbug:!0}),[z,L]=I.useState(!1);return o?f.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:[f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full"}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-1 flex items-center gap-2",children:f.jsxs("span",{children:["🐝 ",v("appTitle")," ",v("appSubtitle")]})}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:v("setupSubtitle")}),f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("gameModeLabel")}),f.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[f.jsxs("button",{onClick:()=>H("PASS_AND_PLAY"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="PASS_AND_PLAY"?"bg-amber-500/15 border-amber-400 text-amber-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(Yh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("passPlayBtn")})]}),f.jsxs("button",{onClick:()=>H("AI"),className:`p-3 rounded-2xl border flex flex-col items-center gap-2 transition-all ${A==="AI"?"bg-blue-500/15 border-blue-400 text-blue-300 shadow-md":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:[f.jsx(fh,{className:"w-6 h-6"}),f.jsx("span",{className:"text-xs font-bold",children:v("vsAiBtn")})]})]})]}),A==="AI"&&f.jsxs("div",{className:"mb-6 animate-fade-in",children:[f.jsx("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block",children:v("aiDifficultyLabel")}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:["EASY","MEDIUM","HARD"].map(G=>f.jsx("button",{onClick:()=>E(G),className:`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${D===G?"bg-emerald-500/20 border-emerald-400 text-emerald-300":"bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800"}`,children:v(G==="EASY"?"easyBtn":G==="MEDIUM"?"mediumBtn":"hardBtn")},G))})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("label",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block flex items-center gap-1.5",children:[f.jsx(Gh,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:v("expansionsLabel")})]}),f.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-3 rounded-2xl border border-slate-800",children:[f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🦟"})," ",v("mosquitoLabel")]}),f.jsx("input",{type:"checkbox",checked:m.mosquito,onChange:G=>B({...m,mosquito:G.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"🐞"})," ",v("ladybugLabel")]}),f.jsx("input",{type:"checkbox",checked:m.ladybug,onChange:G=>B({...m,ladybug:G.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]}),f.jsxs("label",{className:"flex items-center justify-between text-xs text-slate-300 cursor-pointer p-1",children:[f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-lg",children:"💊"})," ",v("pillbugLabel")]}),f.jsx("input",{type:"checkbox",checked:m.pillbug,onChange:G=>B({...m,pillbug:G.target.checked}),className:"w-4 h-4 accent-amber-500 rounded"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[s&&h&&f.jsx("button",{onClick:h,className:"flex-1 py-3 px-4 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("cancel")}),f.jsxs("button",{onClick:()=>r({mode:A,aiDifficulty:D,expansions:m}),className:"flex-1 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(jh,{className:"w-4 h-4 fill-slate-950"}),f.jsx("span",{children:v("startGame")})]})]}),f.jsx("div",{className:"mt-4 flex justify-center",children:f.jsxs("button",{onClick:()=>L(!0),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-800/60",children:[f.jsx(oh,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:v("learnToPlay")})]})})]}),f.jsx(ay,{isOpen:z,onClose:()=>L(!1)})]}):null},iy=({isOpen:o,winner:r,onRestart:h,onNewGameSetup:s})=>{const{t:v}=yl();return o?f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative overflow-hidden",children:[f.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center mx-auto mb-4 text-amber-400",children:f.jsx(Qh,{className:"w-8 h-8"})}),f.jsx("h2",{className:"text-2xl font-black text-slate-100 mb-2",children:v(r==="DRAW"?"drawTitle":r===1?"p1WinTitle":"p2WinTitle")}),f.jsx("p",{className:"text-xs text-slate-400 mb-6",children:v(r==="DRAW"?"drawDesc":"winDesc")}),f.jsxs("div",{className:"flex flex-col gap-2",children:[f.jsxs("button",{onClick:h,className:"w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-500/20",children:[f.jsx(Dh,{className:"w-4 h-4"}),f.jsx("span",{children:v("playAgain")})]}),f.jsx("button",{onClick:s,className:"w-full py-3 rounded-2xl border border-slate-700 text-slate-300 font-bold text-xs hover:bg-slate-800 transition-colors",children:v("matchOptions")})]})]})}):null},Us=`package com.bugz.game

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
`,uy=({isOpen:o,onClose:r})=>{const{t:h}=yl(),[s,v]=I.useState(!1);if(!o)return null;const A=()=>{navigator.clipboard.writeText(Us),v(!0),setTimeout(()=>v(!1),2e3)},H=()=>{const D=new Blob([Us],{type:"text/plain;charset=utf-8"}),E=URL.createObjectURL(D),m=document.createElement("a");m.href=E,m.download="BugzApp.kt",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(E)};return f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in",children:f.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden",children:[f.jsxs("div",{className:"px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl",children:f.jsx(om,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h3",{className:"font-bold text-slate-100 text-sm flex items-center gap-2",children:[f.jsx("span",{children:h("codeTitle")}),f.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700",children:h("codeBadge")})]}),f.jsx("p",{className:"text-xs text-slate-400",children:h("codeDesc")})]})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("button",{onClick:A,className:"px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors",children:[s?f.jsx(mh,{className:"w-4 h-4 text-emerald-400"}):f.jsx(Sh,{className:"w-4 h-4"}),f.jsx("span",{children:h(s?"copied":"copyCode")})]}),f.jsxs("button",{onClick:H,className:"px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors",children:[f.jsx(Th,{className:"w-4 h-4"}),f.jsx("span",{children:h("downloadKt")})]}),f.jsx("button",{onClick:r,className:"p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors",children:f.jsx(rm,{className:"w-5 h-5"})})]})]}),f.jsx("div",{className:"flex-1 overflow-auto p-6 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300",children:f.jsx("pre",{className:"select-text whitespace-pre-wrap",children:Us})})]})})};function cy(){return f.jsx($h,{children:f.jsx(sy,{})})}function sy(){const{t:o}=yl(),[r,h]=I.useState({mode:"AI",aiDifficulty:"MEDIUM",expansions:{mosquito:!0,ladybug:!0,pillbug:!0}}),[s,v]=I.useState(new Map),[A,H]=I.useState([]),[D,E]=I.useState([]),[m,B]=I.useState(1),[z,L]=I.useState(1),[G,P]=I.useState(1),[V,de]=I.useState(null),[be,xe]=I.useState(null),[ye,Ce]=I.useState([]),[Ne,De]=I.useState([]),[X,_e]=I.useState(null),[Xe,it]=I.useState(null),[ot,me]=I.useState([]),[bt,k]=I.useState(null),[ze,T]=I.useState([]),[q,Y]=I.useState(!1),[ae,te]=I.useState(null),g=I.useRef(0),[N,R]=I.useState(!0),[U,K]=I.useState(!1),[$,re]=I.useState(!1),Le=(_,ie)=>{const ne=[];return Object.keys(oa).forEach(Oe=>{const we=oa[Oe];if(!we.isExpansion||Oe==="MOSQUITO"&&ie.mosquito||Oe==="LADYBUG"&&ie.ladybug||Oe==="PILLBUG"&&ie.pillbug)for(let jt=0;jt<we.count;jt++)ne.push({id:`p${_}_${Oe}_${jt}`,type:Oe,player:_})}),ne},pe=I.useCallback(_=>{h(_),v(new Map),H(Le(1,_.expansions)),E(Le(2,_.expansions)),B(1),L(1),P(1),de(null),xe(null),Ce([]),De([]),_e(null),it(null),me([]),k(null),T([]),Y(!1),R(!1),K(!1),te(null),g.current+=1},[]),xt=I.useCallback((_,ie,ne,Oe,we,jt,Ye,qe)=>{const ut={board:Array.from(_.entries()).map(([rt,da])=>[rt,[...da]]),p1Reserve:[...ie],p2Reserve:[...ne],currentPlayer:Oe,turnCountP1:we,turnCountP2:jt,lastMovedPieceId:Ye,moveHistory:[...qe]};De(rt=>[...rt,ut])},[]),Nt=I.useCallback(()=>{if(Ne.length===0||q)return;let _=1;r.mode==="AI"&&Ne.length>=2&&(_=2);const ie=Math.max(0,Ne.length-_),ne=Ne[ie],Oe=new Map;ne.board.forEach(([we,jt])=>Oe.set(we,[...jt])),v(Oe),H([...ne.p1Reserve]),E([...ne.p2Reserve]),B(ne.currentPlayer),L(ne.turnCountP1),P(ne.turnCountP2),de(ne.lastMovedPieceId),Ce([...ne.moveHistory]),De(we=>we.slice(0,ie)),_e(null),it(null),me([]),k(null),T([])},[Ne,q,r.mode]),Yt=vu(s);I.useEffect(()=>{Yt.isGameOver&&!U&&K(!0)},[Yt,U]),I.useEffect(()=>{if(Yt.isGameOver)return;const _=m===1?A:D,ie=m===1?z:G;if(ws(s,m,_,ie,V,r.expansions).length===0&&(s.size>0||A.length>0)){te(o("toastForcedPass",{n:m})),setTimeout(()=>te(null),3e3);const Oe={turnNumber:ie,player:m,actionType:"PASS",bugType:"QUEEN",description:o("passLogDesc",{n:m})};Ce(we=>[...we,Oe]),B(m===1?2:1)}},[m,s,A,D,z,G,V,r.expansions,Yt.isGameOver]),I.useEffect(()=>{if(r.mode==="AI"&&m===2&&!Yt.isGameOver&&!q){Y(!0);const _=g.current,ie=setTimeout(()=>{if(g.current!==_){Y(!1);return}try{const ne=$g(s,2,D,A,G,z,r.aiDifficulty,V,r.expansions);ne?Vl(ne):(te(o("toastAiPass")),setTimeout(()=>te(null),3e3),B(1))}finally{Y(!1)}},600);return()=>clearTimeout(ie)}},[m,r,s,A,D,z,G,V,Yt.isGameOver]);const Vl=_=>{xt(s,A,D,m,z,G,V,ye);const ie=gu(s);let ne=[...A],Oe=[...D],we="";if(_.type==="PLACE"){if(_.player===1){const ut=ne.findIndex(rt=>rt.id===_.pieceId);ut!==-1&&ne.splice(ut,1)}else{const ut=Oe.findIndex(rt=>rt.id===_.pieceId);ut!==-1&&Oe.splice(ut,1)}const Ye={id:_.pieceId,type:_.bugType,player:_.player},qe=le(_.toHex.q,_.toHex.r),Bt=ie.get(qe)||[];ie.set(qe,[...Bt,Ye]),we=o("placedDesc",{bug:oa[_.bugType].name,q:_.toHex.q,r:_.toHex.r}),xe({to:_.toHex})}else if(_.type==="MOVE"&&_.fromHex){const Ye=le(_.fromHex.q,_.fromHex.r),qe=ie.get(Ye)||[],Bt=qe.pop();if(qe.length===0&&ie.delete(Ye),Bt){const ut=le(_.toHex.q,_.toHex.r),rt=ie.get(ut)||[];ie.set(ut,[...rt,Bt])}we=o("movedDesc",{bug:oa[_.bugType].name,q1:_.fromHex.q,r1:_.fromHex.r,q2:_.toHex.q,r2:_.toHex.r}),xe({from:_.fromHex,to:_.toHex})}else if(_.type==="PILLBUG_SPECIAL"&&_.pillbugTargetHex){const Ye=le(_.pillbugTargetHex.q,_.pillbugTargetHex.r),qe=ie.get(Ye)||[],Bt=qe.pop();if(qe.length===0&&ie.delete(Ye),Bt){const ut=le(_.toHex.q,_.toHex.r),rt=ie.get(ut)||[];ie.set(ut,[...rt,Bt])}we=o("pillbugMovedDesc",{bug:Bt?oa[Bt.type].name:"piece",q1:_.pillbugTargetHex.q,r1:_.pillbugTargetHex.r,q2:_.toHex.q,r2:_.toHex.r}),xe({from:_.pillbugTargetHex,to:_.toHex})}v(ie),H(ne),E(Oe),de(_.pieceId);const jt={turnNumber:m===1?z:G,player:m,actionType:_.type,bugType:_.bugType,from:_.fromHex,to:_.toHex,description:we};Ce(Ye=>[...Ye,jt]),_e(null),it(null),me([]),k(null),T([]),m===1?(L(Ye=>Ye+1),B(2)):(P(Ye=>Ye+1),B(1))},Vt=_=>{if(!q)if(_e(null),k(null),T([]),Xe===_)it(null),me([]);else{it(_);const ie=lm(s,m);me(ie)}},Fa=_=>{if(q)return;const ie=s.get(le(_.q,_.r)),ne=ie&&ie.length>0?ie[ie.length-1]:null;if(it(null),X&&X.q===_.q&&X.r===_.r){_e(null),me([]),k(null),T([]);return}if(ne&&ne.player===m){_e(_);const we=am(s,_,m,m===1?z:G,V,r.expansions);if(me(we),Qs(s,_,ne,r.expansions).includes("PILLBUG")){const Ye=im(s,_,m,V);Ye.length>0&&(k(Ye[0].targetHex),T(Ye[0].destinationHexes))}else k(null),T([])}},Wa=_=>{if(q)return;const ie=m===1?A:D;if(Xe){const ne=ie.find(Oe=>Oe.type===Xe);ne&&Vl({type:"PLACE",pieceId:ne.id,bugType:Xe,player:m,toHex:_})}else if(X){const ne=fa(s,X);ne&&(bt&&ze.some(Oe=>Oe.q===_.q&&Oe.r===_.r)?Vl({type:"PILLBUG_SPECIAL",pieceId:ne.id,bugType:ne.type,player:m,fromHex:X,pillbugTargetHex:bt,toHex:_}):Vl({type:"MOVE",pieceId:ne.id,bugType:ne.type,player:m,fromHex:X,toHex:_}))}};return f.jsxs("div",{className:"flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden",children:[f.jsxs("header",{className:"bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"text-2xl",children:"🐝"}),f.jsxs("h1",{className:"text-lg font-black tracking-tight text-amber-400",children:[o("appTitle")," ",f.jsx("span",{className:"text-slate-400 text-xs font-normal",children:o("appSubtitle")})]})]}),f.jsx("span",{className:"hidden sm:inline-block text-sm font-semibold px-3 pt-1.5 pb-2.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 translate-y-2.5",children:r.mode==="AI"?o("vsAi",{diff:o(r.aiDifficulty==="EASY"?"easyBtn":r.aiDifficulty==="MEDIUM"?"mediumBtn":"hardBtn")}):o("passAndPlay")})]}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("div",{className:`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${m===1?"bg-slate-800 border-amber-400 text-amber-300":"bg-slate-900 border-blue-400 text-blue-300"}`,children:[f.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${m===1?"bg-white":"bg-slate-950 border border-slate-500"} ${q?"animate-ping":""}`}),f.jsx("span",{children:q?o("aiThinking"):o("playersTurn",{n:m,color:o(m===1?"white":"black")})})]}),f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx(ey,{className:"!px-1.5 !py-1"}),f.jsx("button",{onClick:Nt,disabled:Ne.length===0||q,className:`p-2 rounded-xl border transition-colors ${Ne.length>0&&!q?"bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white":"bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed"}`,title:o("undoTitle"),children:f.jsx(Rh,{className:"w-4 h-4"})}),f.jsx("button",{onClick:()=>R(!0),className:"p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors",title:o("newGameTitle"),children:f.jsx(Lh,{className:"w-4 h-4"})}),f.jsxs("button",{onClick:()=>re(!0),className:"p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold",title:o("kotlinTitle"),children:[f.jsx(om,{className:"w-4 h-4"}),f.jsx("span",{className:"hidden md:inline",children:o("kotlinSource")})]})]})]})]}),ae&&f.jsxs("div",{className:"fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce",children:[f.jsx(sm,{className:"w-4 h-4"}),f.jsx("span",{children:ae})]}),f.jsxs("div",{className:"flex-1 flex flex-col md:flex-row relative overflow-hidden",children:[f.jsxs("div",{className:"hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4",children:[f.jsx(Ls,{player:1,reserve:A,isActive:m===1&&!q,selectedBugType:m===1?Xe:null,onSelectBugType:Vt,turnCount:z,queenPlaced:ra(s,1)}),f.jsx(Ls,{player:2,reserve:D,isActive:m===2&&!q,selectedBugType:m===2?Xe:null,onSelectBugType:Vt,turnCount:G,queenPlaced:ra(s,2)})]}),f.jsxs("div",{className:"flex-1 relative h-full",children:[f.jsx(ty,{board:s,selectedHex:X,validDestinations:ot,pillbugTargetHex:bt,pillbugDestinations:ze,onSelectHex:Fa,onSelectDestination:Wa,currentPlayer:m,isAITurn:q,lastMovedHex:be}),f.jsx("div",{className:"absolute bottom-4 right-4 z-20 max-w-xs w-full",children:f.jsx(ly,{logs:ye})})]}),f.jsx("div",{className:"block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20",children:f.jsx(Ls,{player:m,reserve:m===1?A:D,isActive:!q,selectedBugType:Xe,onSelectBugType:Vt,turnCount:m===1?z:G,queenPlaced:ra(s,m)})})]}),f.jsx(ny,{isOpen:N,onStartGame:pe,onClose:()=>R(!1),canCancel:s.size>0}),f.jsx(iy,{isOpen:U,winner:Yt.winner,onRestart:()=>pe(r),onNewGameSetup:()=>{K(!1),R(!0)}}),f.jsx(uy,{isOpen:$,onClose:()=>re(!1)})]})}Qg.createRoot(document.getElementById("root")).render(f.jsx(I.StrictMode,{children:f.jsx(cy,{})}));
