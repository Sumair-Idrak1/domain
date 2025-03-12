"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{7929:function(e,t,n){n.d(t,{$k:function(){return X},IC:function(){return en},Ih:function(){return I},QG:function(){return Q},RJ:function(){return V},VW:function(){return G},Z5:function(){return er},dK:function(){return Z},j1:function(){return N},kk:function(){return q},pf:function(){return ec},qT:function(){return ee},xS:function(){return z},z1:function(){return P}});var r=n(7294),i=n(512),l=n(5591),a=n(7372),o=n(9460);n(3454);var u=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&m(e,n,t[n]);return e},h=(e,t)=>c(e,s(t)),b=(e,t)=>{var n={};for(var r in e)f.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))0>t.indexOf(r)&&p.call(e,r)&&(n[r]=e[r]);return n};function g(e,t,n=!0){let[i,l]=r.useState(t);return r.useEffect(()=>{if(n&&l(t),"undefined"==typeof window||!e)return;let r=e.subscribe(l);return()=>r.unsubscribe()},[e,n]),i}r.createContext(void 0);var E=r.createContext(void 0);function y(){return r.useContext(E)}function S(e){let t=y(),n=null!=e?e:t;if(!n)throw Error("No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly");return n}var k=r.createContext(void 0);function w(){return r.useContext(k)}var M=r.createContext(void 0);function C(){let e=r.useContext(M);if(!e)throw Error("tried to access room context outside of livekit room component");return e}function A(){return r.useContext(M)}function O(e){let t=A(),n=null!=e?e:t;if(!n)throw Error("No room provided, make sure you are inside a Room context or pass the room explicitly");return n}var R=r.createContext(void 0);function x(...e){let t=v({},e[0]);for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],l=r[e];"function"==typeof n&&"function"==typeof l&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=function(...e){return(...t)=>{for(let n of e)if("function"==typeof n)try{n(...t)}catch(e){console.error(e)}}}(n,l):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof l?t[e]=(0,i.Z)(n,l):t[e]=void 0!==l?l:n}}return t}function P(e){let t=O(e);return g(r.useMemo(()=>(0,a.x$)(t),[t]),t.state)}function Q(e,t){let n="function"==typeof e?e:t,i="string"==typeof e?e:void 0,l=C(),{send:o,messageObservable:u,isSendingObservable:c}=r.useMemo(()=>(0,a.wL)(l,i,n),[l,i,n]);return{message:g(u,void 0),send:o,isSending:g(c,!1)}}var T={connect:!0,audio:!1,video:!1};function N(e={}){let t=O(e.room),[n,i]=r.useState(t.localParticipant),[l,o]=r.useState(n.isMicrophoneEnabled),[u,c]=r.useState(n.isMicrophoneEnabled),[s,d]=r.useState(n.lastMicrophoneError),[f,p]=r.useState(n.lastCameraError),[m,v]=r.useState(n.isMicrophoneEnabled),[h,b]=r.useState(void 0),[g,E]=r.useState(void 0),y=e=>{c(e.isCameraEnabled),o(e.isMicrophoneEnabled),v(e.isScreenShareEnabled),E(e.cameraTrack),b(e.microphoneTrack),d(e.participant.lastMicrophoneError),p(e.participant.lastCameraError),i(e.participant)};return r.useEffect(()=>{let e=(0,a._u)(t.localParticipant).subscribe(y);return()=>e.unsubscribe()},[t]),{isMicrophoneEnabled:l,isScreenShareEnabled:m,isCameraEnabled:u,microphoneTrack:h,cameraTrack:g,lastMicrophoneError:s,lastCameraError:f,localParticipant:n}}function z(e={}){let t=O(e.room),{name:n,metadata:i}=g(r.useMemo(()=>(0,a.U2)(t),[t]),{name:t.name,metadata:t.metadata});return{name:n,metadata:i}}function I(e=[l.fQ.Source.Camera,l.fQ.Source.Microphone,l.fQ.Source.ScreenShare,l.fQ.Source.ScreenShareAudio,l.fQ.Source.Unknown],t={}){let n=O(t.room),[i,o]=r.useState([]),[u,c]=r.useState([]),s=r.useMemo(()=>e.map(e=>(0,a.Cw)(e)?e.source:e),[JSON.stringify(e)]);return r.useEffect(()=>{let e=(0,a.ic)(n,s,{additionalRoomEvents:t.updateOnlyOn,onlySubscribed:t.onlySubscribed}).subscribe(({trackReferences:e,participants:t})=>{a.cM.debug("setting track bundles",e,t),o(e),c(t)});return()=>e.unsubscribe()},[n,JSON.stringify(t.onlySubscribed),JSON.stringify(t.updateOnlyOn),JSON.stringify(e)]),r.useMemo(()=>{if(!(0,a.ZX)(e))return i;{let t=function(e,t){let n=new Map;if((0,a.ZX)(e)){let r=e.filter(e=>e.withPlaceholder).map(e=>e.source);t.forEach(e=>{let t=e.getTrackPublications().map(e=>{var t;return null==(t=e.track)?void 0:t.source}).filter(e=>void 0!==e),i=Array.from(function(e,t){let n=new Set(e);for(let e of t)n.delete(e);return n}(new Set(r),new Set(t)));i.length>0&&n.set(e.identity,i)})}return n}(e,u),n=Array.from(i);return u.forEach(e=>{var r;t.has(e.identity)&&(null!=(r=t.get(e.identity))?r:[]).forEach(t=>{i.find(({participant:n,publication:r})=>e.identity===n.identity&&r.source===t)||(a.cM.debug(`Add ${t} placeholder for participant ${e.identity}.`),n.push({participant:e,source:t}))})}),n}},[i,u,e])}function V(e){let t=C(),n=P(t),i=r.useMemo(()=>n===l.em.Disconnected,[n]),o=r.useMemo(()=>(0,a.ir)(t,e),[t,e,i]),u=g(o.isSendingObservable,!1),c=g(o.messageObservable,[]);return{send:o.send,update:o.update,chatMessages:c,isSending:u}}var D=e=>{let t=e=>Math.sqrt(1- -1*Math.max(-100,Math.min(-10,e))/100);return e.map(e=>e===-1/0?0:t(e))},F={bands:5,loPass:100,hiPass:600,updateInterval:32,analyserOptions:{fftSize:2048}},J={bufferSize:100};function Z(e,t){var n,i,l;let o=v(v({},J),t),[u,c]=r.useState([]),s=g(r.useMemo(()=>{var t;return(null==(t=null==e?void 0:e.publication)?void 0:t.track)?(0,a.Bk)(null==e?void 0:e.publication.track):void 0},[null==(n=null==e?void 0:e.publication)?void 0:n.track]),{timestamp:Date.now(),rtpTimestamp:null==(l=null==(i=null==e?void 0:e.publication)?void 0:i.track)?void 0:l.rtpTimestamp}),d=e=>{var t;null==(t=o.onTranscription)||t.call(o,e),c(t=>(0,a.tJ)(t,e.map(e=>(0,a.Z8)(e,s)),o.bufferSize))};return r.useEffect(()=>{if(!(null==e?void 0:e.publication))return;let t=(0,a.eJ)(e.publication).subscribe(e=>{d(...e)});return()=>{t.unsubscribe()}},[e&&(0,a.Fq)(e),d]),{segments:u}}var j="lk.agent.state";function q(){let e=(function(e={}){let t=O(e.room),[n,i]=r.useState([]);return r.useEffect(()=>{let n=(0,a.pg)(t,{additionalRoomEvents:e.updateOnlyOn}).subscribe(i);return()=>n.unsubscribe()},[t,JSON.stringify(e.updateOnlyOn)]),n})().find(e=>e.kind===l.nC.AGENT),t=function(e,t){let n=C(),i=w(),l=t?n.getParticipantByIdentity(t):i;return g(r.useMemo(()=>l?(0,a.Kn)(l,{sources:e}):void 0,[null==l?void 0:l.sid,null==l?void 0:l.identity,JSON.stringify(e)]),[])}([l.fQ.Source.Microphone],null==e?void 0:e.identity)[0],{segments:n}=Z(t),i=P(),{attributes:o}=function(e={}){var t;let n=w(),i=null!=(t=e.participant)?t:n;return g(r.useMemo(()=>(0,a.IN)(i),[i]),{attributes:null==i?void 0:i.attributes})}({participant:e}),u=r.useMemo(()=>i===l.em.Disconnected?"disconnected":i!==l.em.Connecting&&e&&(null==o?void 0:o[j])?o[j]:"connecting",[o,e,i]);return{agent:e,state:u,audioTrack:t,agentTranscriptions:n,agentAttributes:o}}var H=e=>r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor"},e),r.createElement("path",{d:"M1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708L11 10.293V4.5A1.5 1.5 0 0 0 9.5 3H3.707zM0 4.5a1.5 1.5 0 0 1 .943-1.393l9.532 9.533c-.262.224-.603.36-.975.36h-8A1.5 1.5 0 0 1 0 11.5z"}),r.createElement("path",{d:"m15.2 3.6-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4z"})),L=e=>r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor"},e),r.createElement("path",{d:"M0 4.5A1.5 1.5 0 0 1 1.5 3h8A1.5 1.5 0 0 1 11 4.5v7A1.5 1.5 0 0 1 9.5 13h-8A1.5 1.5 0 0 1 0 11.5zM15.2 3.6l-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4z"})),$=e=>r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor"},e),r.createElement("path",{d:"M12.227 11.52a5.477 5.477 0 0 0 1.246-2.97.5.5 0 0 0-.995-.1 4.478 4.478 0 0 1-.962 2.359l-1.07-1.07C10.794 9.247 11 8.647 11 8V3a3 3 0 0 0-6 0v1.293L1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708zM8 12.5c.683 0 1.33-.152 1.911-.425l.743.743c-.649.359-1.378.59-2.154.66V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.502 5.502 0 0 1-4.973-4.929.5.5 0 0 1 .995-.098A4.5 4.5 0 0 0 8 12.5z"}),r.createElement("path",{d:"M8.743 10.907 5 7.164V8a3 3 0 0 0 3.743 2.907z"})),_=e=>r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor"},e),r.createElement("path",{fillRule:"evenodd",d:"M2.975 8.002a.5.5 0 0 1 .547.449 4.5 4.5 0 0 0 8.956 0 .5.5 0 1 1 .995.098A5.502 5.502 0 0 1 8.5 13.478V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.502 5.502 0 0 1-4.973-4.929.5.5 0 0 1 .448-.547z",clipRule:"evenodd"}),r.createElement("path",{d:"M5 3a3 3 0 1 1 6 0v5a3 3 0 0 1-6 0z"})),U=e=>r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:20,height:16,fill:"none"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 2.75A2.75 2.75 0 0 1 2.75 0h14.5A2.75 2.75 0 0 1 20 2.75v10.5A2.75 2.75 0 0 1 17.25 16H2.75A2.75 2.75 0 0 1 0 13.25V2.75ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25H2.75Z",clipRule:"evenodd"}),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.47 4.22a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v4.69a.75.75 0 0 1-1.5 0V6.56l-.97.97a.75.75 0 0 1-1.06-1.06l2.25-2.25Z",clipRule:"evenodd"})),B=e=>r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:20,height:16,fill:"none"},e),r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"M7.28 4.22a.75.75 0 0 0-1.06 1.06L8.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L11.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 6.94z"}),r.createElement("path",{fillRule:"evenodd",d:"M2.75 0A2.75 2.75 0 0 0 0 2.75v10.5A2.75 2.75 0 0 0 2.75 16h14.5A2.75 2.75 0 0 0 20 13.25V2.75A2.75 2.75 0 0 0 17.25 0zM1.5 2.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H2.75c-.69 0-1.25-.56-1.25-1.25z",clipRule:"evenodd"})));function K(e){return void 0!==e}function W(...e){return x(...e.filter(K))}var G=r.forwardRef(function(e,t){var{label:n="Allow Audio"}=e,i=b(e,["label"]);let{mergedProps:l}=function({room:e,props:t}){let n=O(e),{className:i,roomAudioPlaybackAllowedObservable:l,handleStartAudioPlayback:o}=r.useMemo(()=>(0,a.Wd)(),[]),{canPlayAudio:u}=g(r.useMemo(()=>l(n),[n,l]),{canPlayAudio:n.canPlaybackAudio});return{mergedProps:r.useMemo(()=>x(t,{className:i,onClick:()=>{o(n)},style:{display:u?"none":"block"}}),[t,i,u,o,n]),canPlayAudio:u}}({room:C(),props:i});return r.createElement("button",v({ref:t},l),n)}),X=r.forwardRef(function(e,t){var{showIcon:n}=e,i=b(e,["showIcon"]);let{buttonProps:o,enabled:u}=function(e){var t,{source:n,onChange:i,initialState:l,captureOptions:o,publishOptions:u,onDeviceError:c}=e,s=b(e,["source","onChange","initialState","captureOptions","publishOptions","onDeviceError"]);let d=A(),f=null==(t=null==d?void 0:d.localParticipant)?void 0:t.getTrackPublication(n),p=r.useRef(!1),{toggle:m,className:E,pendingObserver:y,enabledObserver:S}=r.useMemo(()=>d?(0,a.Rd)(n,d,o,u,c):(0,a.ac)(),[d,n,JSON.stringify(o),u]),k=g(y,!1),w=g(S,null!=l?l:!!(null==f?void 0:f.isEnabled));r.useEffect(()=>{null==i||i(w,p.current),p.current=!1},[w,i]),r.useEffect(()=>{void 0!==l&&(a.cM.debug("forcing initial toggle state",n,l),m(l))},[]);let M=r.useMemo(()=>x(s,{className:E}),[s,E]),C=r.useCallback(e=>{var t;p.current=!0,m().catch(()=>p.current=!1),null==(t=s.onClick)||t.call(s,e)},[s,m]);return{toggle:m,enabled:w,pending:k,track:f,buttonProps:h(v({},M),{"aria-pressed":w,"data-lk-source":n,"data-lk-enabled":w,disabled:k,onClick:C})}}(i);return r.createElement("button",v({ref:t},o),(null==n||n)&&function(e,t){switch(e){case l.fQ.Source.Microphone:return t?r.createElement(_,null):r.createElement($,null);case l.fQ.Source.Camera:return t?r.createElement(L,null):r.createElement(H,null);case l.fQ.Source.ScreenShare:return t?r.createElement(B,null):r.createElement(U,null);default:return}}(i.source,u),i.children)});function Y(e,t={}){var n;let[i,l]=r.useState((0,a.Ne)(e)),[o,u]=r.useState(null==i?void 0:i.isMuted),[c,s]=r.useState(null==i?void 0:i.isSubscribed),[d,f]=r.useState(null==i?void 0:i.track),[p,m]=r.useState("landscape"),h=r.useRef(),{className:b,trackObserver:g}=r.useMemo(()=>(0,a.an)(e),[null!=(n=e.participant.sid)?n:e.participant.identity,e.source,(0,a.Z7)(e)&&e.publication.trackSid]);return r.useEffect(()=>{let e=g.subscribe(e=>{a.cM.debug("update track",e),l(e),u(null==e?void 0:e.isMuted),s(null==e?void 0:e.isSubscribed),f(null==e?void 0:e.track)});return()=>null==e?void 0:e.unsubscribe()},[g]),r.useEffect(()=>{var n,r;return d&&(h.current&&d.detach(h.current),(null==(n=t.element)?void 0:n.current)&&!((0,a.D0)(e.participant)&&(null==d?void 0:d.kind)==="audio")&&d.attach(t.element.current)),h.current=null==(r=t.element)?void 0:r.current,()=>{h.current&&(null==d||d.detach(h.current))}},[d,t.element]),r.useEffect(()=>{var e,t;"number"==typeof(null==(e=null==i?void 0:i.dimensions)?void 0:e.width)&&"number"==typeof(null==(t=null==i?void 0:i.dimensions)?void 0:t.height)&&m(i.dimensions.width>i.dimensions.height?"landscape":"portrait")},[i]),{publication:i,isMuted:o,isSubscribed:c,track:d,elementProps:W(t.props,v({className:b,"data-lk-local-participant":e.participant.isLocal,"data-lk-source":null==i?void 0:i.source},(null==i?void 0:i.kind)==="video"&&{"data-lk-orientation":p}))}}var ee=r.forwardRef(function(e,t){var{onTrackClick:n,onClick:i,onSubscriptionStatusChanged:a,trackRef:u,manageSubscription:c}=e,s=b(e,["onTrackClick","onClick","onSubscriptionStatusChanged","trackRef","manageSubscription"]);let d=S(u),f=r.useRef(null);r.useImperativeHandle(t,()=>f.current);let p=o.S1({root:f.current}),[m]=o.nj(p,3e3);r.useEffect(()=>{c&&d.publication instanceof l.E8&&(null==m?void 0:m.isIntersecting)===!1&&(null==p?void 0:p.isIntersecting)===!1&&d.publication.setSubscribed(!1)},[m,d,c]),r.useEffect(()=>{c&&d.publication instanceof l.E8&&(null==p?void 0:p.isIntersecting)===!0&&d.publication.setSubscribed(!0)},[p,d,c]);let{elementProps:g,publication:E,isSubscribed:y}=Y(d,{element:f,props:s});return r.useEffect(()=>{null==a||a(!!y)},[y,a]),r.createElement("video",h(v({ref:f},g),{muted:!0,onClick:e=>{null==i||i(e),null==n||n({participant:null==d?void 0:d.participant,track:E})}}))}),et=r.forwardRef(function(e,t){var{trackRef:n,onSubscriptionStatusChanged:i,volume:o,muted:u}=e,c=b(e,["trackRef","onSubscriptionStatusChanged","volume","muted"]);let s=S(n),d=r.useRef(null);r.useImperativeHandle(t,()=>d.current);let{elementProps:f,isSubscribed:p,track:m,publication:h}=Y(s,{element:d,props:c});return r.useEffect(()=>{null==i||i(!!p)},[p,i]),r.useEffect(()=>{void 0!==m&&void 0!==o&&(m instanceof l.rl?m.setVolume(o):a.cM.warn("Volume can only be set on remote audio tracks."))},[o,m]),r.useEffect(()=>{void 0!==h&&void 0!==u&&(h instanceof l.E8?h.setEnabled(!u):a.cM.warn("Can only call setEnabled on remote track publications."))},[u,h,m]),r.createElement("audio",v({ref:d},f))}),en=r.forwardRef(function(e,t){let{room:n,htmlProps:i}=function(e){let t=v(v({},T),e),{token:n,serverUrl:i,options:o,room:u,connectOptions:c,connect:s,audio:d,video:f,screen:p,onConnected:m,onDisconnected:h,onError:g,onMediaDeviceFailure:E,onEncryptionError:y,simulateParticipants:S}=t,k=b(t,["token","serverUrl","options","room","connectOptions","connect","audio","video","screen","onConnected","onDisconnected","onError","onMediaDeviceFailure","onEncryptionError","simulateParticipants"]);o&&u&&a.cM.warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");let[w,M]=r.useState();r.useEffect(()=>{M(null!=u?u:new l.du(o))},[u]);let C=r.useMemo(()=>{let{className:e}=(0,a.WM)();return x(k,{className:e})},[k]);return r.useEffect(()=>{if(!w)return;let e=()=>{let e=w.localParticipant;a.cM.debug("trying to publish local tracks"),Promise.all([e.setMicrophoneEnabled(!!d,"boolean"!=typeof d?d:void 0),e.setCameraEnabled(!!f,"boolean"!=typeof f?f:void 0),e.setScreenShareEnabled(!!p,"boolean"!=typeof p?p:void 0)]).catch(e=>{a.cM.warn(e),null==g||g(e)})},t=e=>{let t=l.CB.getFailure(e);null==E||E(t)},n=e=>{null==y||y(e)};return w.on(l.TQ.SignalConnected,e).on(l.TQ.MediaDevicesError,t).on(l.TQ.EncryptionError,n),()=>{w.off(l.TQ.SignalConnected,e).off(l.TQ.MediaDevicesError,t).off(l.TQ.EncryptionError,n)}},[w,d,f,p,g,y,E]),r.useEffect(()=>{if(w){if(S){w.simulateParticipants({participants:{count:S},publish:{audio:!0,useRealTracks:!0}});return}if(!n){a.cM.debug("no token yet");return}if(!i){a.cM.warn("no livekit url provided"),null==g||g(Error("no livekit url provided"));return}s?(a.cM.debug("connecting"),w.connect(i,n,c).catch(e=>{a.cM.warn(e),null==g||g(e)})):(a.cM.debug("disconnecting because connect is false"),w.disconnect())}},[s,n,JSON.stringify(c),w,g,i,S]),r.useEffect(()=>{if(!w)return;let e=e=>{switch(e){case l.em.Disconnected:h&&h();break;case l.em.Connected:m&&m()}};return w.on(l.TQ.ConnectionStateChanged,e),()=>{w.off(l.TQ.ConnectionStateChanged,e)}},[n,m,h,w]),r.useEffect(()=>{if(w)return()=>{a.cM.info("disconnecting on onmount"),w.disconnect()}},[w]),{room:w,htmlProps:C}}(e);return r.createElement("div",v({ref:t},i),n&&r.createElement(M.Provider,{value:n},r.createElement(R.Provider,{value:e.featureFlags},e.children)))});function er({volume:e,muted:t}){let n=I([l.fQ.Source.Microphone,l.fQ.Source.ScreenShareAudio,l.fQ.Source.Unknown],{updateOnlyOn:[],onlySubscribed:!0}).filter(e=>!(0,a.D0)(e.participant)&&e.publication.kind===l.fQ.Kind.Audio);return r.createElement("div",{style:{display:"none"}},n.map(n=>r.createElement(et,{key:(0,a.Fq)(n),trackRef:n,volume:e,muted:t})))}var ei=e=>{let t=[];for(let n=0;n<=e;n++)t.push([n,e-1-n]);return t},el=e=>[[Math.floor(e/2)],[-1]],ea=(e,t,n)=>{let[i,l]=(0,r.useState)(0),[a,o]=(0,r.useState)([[]]);(0,r.useEffect)(()=>{"thinking"===e?o(el(t)):"connecting"===e||"initializing"===e?o([...ei(t)]):"listening"===e?o(el(t)):void 0===e?o([Array(t).fill(0).map((e,t)=>t)]):o([[]]),l(0)},[e,t]);let u=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=performance.now(),t=r=>{r-e>=n&&(l(e=>e+1),e=r),u.current=requestAnimationFrame(t)};return u.current=requestAnimationFrame(t),()=>{null!==u.current&&cancelAnimationFrame(u.current)}},[n,t,e,a.length]),a[i%a.length]},eo=new Map([["connecting",375],["listening",500],["thinking",150]]),eu=(e,t)=>{if(void 0===e)return 1e3;let n=eo.get(e);return n&&"connecting"===e&&(n/=t),n},ec=r.forwardRef(function(e,t){var n,a,o,{state:u,options:c,barCount:s=15,trackRef:d,children:f}=e;let p=W(b(e,["state","options","barCount","trackRef","children"]),{className:"lk-audio-bar-visualizer"}),m=y();d&&(m=d);let g=function(e,t={}){var n;let i=e instanceof l.fQ?e:null==(n=null==e?void 0:e.publication)?void 0:n.track,a=v(v({},F),t),[o,u]=r.useState(Array(a.bands).fill(0));return r.useEffect(()=>{if(!i||!(null==i?void 0:i.mediaStream))return;let{analyser:e,cleanup:n}=(0,l.OE)(i,a.analyserOptions),r=new Float32Array(e.frequencyBinCount),o=setInterval(()=>{e.getFloatFrequencyData(r);let n=new Float32Array(r.length);for(let e=0;e<r.length;e++)n[e]=r[e];let i=D(n=n.slice(t.loPass,t.hiPass)),l=Math.ceil(i.length/a.bands),o=[];for(let e=0;e<a.bands;e++){let t=i.slice(e*l,(e+1)*l).reduce((e,t)=>e+=t,0);o.push(t/l)}u(o)},a.updateInterval);return()=>{n(),clearInterval(o)}},[i,null==i?void 0:i.mediaStream,JSON.stringify(t)]),o}(m,{bands:s,loPass:100,hiPass:200}),E=null!=(n=null==c?void 0:c.minHeight)?n:20,S=null!=(a=null==c?void 0:c.maxHeight)?a:100,k=ea(u,s,null!=(o=eu(u,s))?o:100);return r.createElement("div",h(v({ref:t},p),{"data-lk-va-state":u}),g.map((e,t)=>{var n;return f?(n={"data-lk-highlighted":k.includes(t),"data-lk-bar-index":t,class:"lk-audio-bar",style:{height:`${Math.min(S,Math.max(E,100*e+5))}%`}},r.Children.map(f,e=>r.isValidElement(e)&&r.Children.only(f)?(e.props.class&&(null!=n||(n={}),n.class=(0,i.Z)(e.props.class,n.class),n.style=v(v({},e.props.style),n.style)),r.cloneElement(e,h(v({},n),{key:void 0}))):e)):r.createElement("span",{key:t,"data-lk-highlighted":k.includes(t),"data-lk-bar-index":t,className:`lk-audio-bar ${k.includes(t)&&"lk-highlighted"}`,style:{height:`${Math.min(S,Math.max(E,100*e+5))}%`}})}))})}}]);