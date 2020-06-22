(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{283:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(648),App=function(props){var onSuccess=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(token,metadata){return console.log("onSuccess",token,metadata)}),[]),onEvent=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(eventName,metadata){return console.log("onEvent",eventName,metadata)}),[]),onExit=Object(react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(err,metadata){return console.log("onExit",err,metadata)}),[]),config={clientName:props.clientName||"",env:props.env||"sandbox",product:props.product||["auth"],publicKey:props.publicKey,token:props.token,onSuccess:onSuccess,onEvent:onEvent,onExit:onExit},_usePlaidLink=Object(_src__WEBPACK_IMPORTED_MODULE_1__.b)(config),open=_usePlaidLink.open,ready=_usePlaidLink.ready,error=_usePlaidLink.error;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{type:"button",className:"button",onClick:function onClick(){return open()},disabled:!ready||error},"Open Plaid Link"))};App.__docgenInfo={description:"",methods:[],displayName:"App"},__webpack_exports__.default=App,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/hooks.js"]={name:"App",docgenInfo:App.__docgenInfo,path:"examples/hooks.js"})},646:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var use_script_1=__webpack_require__(647);exports.default=use_script_1.default},647:function(module,exports,__webpack_require__){"use strict";var __rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__(16);exports.default=function useScript(_a){var src=_a.src,_b=_a.checkForExisting,checkForExisting=void 0!==_b&&_b,attributes=__rest(_a,["src","checkForExisting"]),_c=react_1.useState(!0),loading=_c[0],setLoading=_c[1],_d=react_1.useState(null),error=_d[0],setError=_d[1];return react_1.useEffect((function(){if(isBrowser){if(checkForExisting)if(document.querySelectorAll('script[src="'+src+'"]').length>0)return void setLoading(!1);var scriptEl=document.createElement("script");scriptEl.setAttribute("src",src),Object.keys(attributes).forEach((function(key){void 0===scriptEl[key]?scriptEl.setAttribute(key,attributes[key]):scriptEl[key]=attributes[key]}));var handleLoad=function(){setLoading(!1)},handleError=function(error){setError(error)};return scriptEl.addEventListener("load",handleLoad),scriptEl.addEventListener("error",handleError),document.body.appendChild(scriptEl),function(){scriptEl.removeEventListener("load",handleLoad),scriptEl.removeEventListener("error",handleError)}}}),[src]),[loading,error]};var isBrowser="undefined"!=typeof window&&void 0!==window.document},648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return usePlaidLink})),__webpack_require__.d(__webpack_exports__,"a",(function(){return PlaidLink}));var react=__webpack_require__(16),react_default=__webpack_require__.n(react),lib=__webpack_require__(646),lib_default=__webpack_require__.n(lib);const createPlaid=options=>{const state={plaid:null,open:!1,onExitCallback:null};if("undefined"==typeof window||!window.Plaid)throw new Error("Plaid not loaded");const config=((o,oldKey,newKey)=>{const newObject={};return delete Object.assign(newObject,o,{[newKey]:o[oldKey]})[oldKey],newObject})(options,"publicKey","key");state.plaid=window.Plaid.create({...config,onExit:(...params)=>{config.onExit&&config.onExit(...params),state.onExitCallback&&state.onExitCallback()}});return{open:()=>{state.plaid&&(state.open=!0,state.onExitCallback=null,state.plaid.open())},exit:(exitOptions,callback)=>{state.open&&state.plaid?(state.onExitCallback=callback,state.plaid.exit(exitOptions),exitOptions&&exitOptions.force&&(state.open=!1)):callback&&callback()},destroy:()=>{state.plaid&&(state.plaid.destroy(),state.plaid=null)}}},noop=()=>{},usePlaidLink=options=>{const[loading,error]=lib_default()({src:"https://cdn.plaid.com/link/v2/stable/link-initialize.js",checkForExisting:!0}),[plaid,setPlaid]=Object(react.useState)(null),[iframeLoaded,setIframeLoaded]=Object(react.useState)(!1);return Object(react.useEffect)(()=>{if(loading)return;if(error||!window.Plaid)return void console.error("Error loading Plaid",error);null!=plaid&&plaid.exit({force:!0},()=>plaid.destroy());const next=createPlaid({...options,onLoad:()=>{setIframeLoaded(!0),options.onLoad&&options.onLoad()}});return setPlaid(next),()=>next.exit({force:!0},()=>next.destroy())},[loading,error,options.token,(options.product||[]).slice().sort().join(",")]),{error:error,ready:!loading||iframeLoaded,exit:plaid?plaid.exit:noop,open:plaid?plaid.open:noop}},PlaidLink=props=>{const{children:children,style:style,className:className,...config}=props,{error:error,open:open}=usePlaidLink({...config});return react_default.a.createElement("button",{disabled:Boolean(error),type:"button",className:className,style:{padding:"6px 4px",outline:"none",background:"#FFFFFF",border:"2px solid #F1F1F1",borderRadius:"4px",...style},onClick:()=>open()},children)};PlaidLink.displayName="PlaidLink"}}]);
//# sourceMappingURL=1.b553e77ac1001a206449.bundle.js.map