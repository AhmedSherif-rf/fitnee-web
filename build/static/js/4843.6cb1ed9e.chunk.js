(self.webpackChunkfitnee_web=self.webpackChunkfitnee_web||[]).push([[4843],{4843:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(2791),a=n(9439),o=n(6971),u=n.n(o),c=n(9630),i="style_otpContainer__rfE8B",l="style_otpWrapper__v1Rm+",s="style_otpCol__RWa+X",f="style_otpInputs__xxeCR",p=n(7689),d=n(9230),m=n(7823),h=n(3009),b=n(9773),y=n(1267),v=n(184),x=function(){var e=(0,p.s0)(),t=(0,d.$G)("").t,n=(0,r.useState)(""),o=(0,a.Z)(n,2),x=o[0],O=o[1],g=(0,r.useState)(!1),j=(0,a.Z)(g,2),T=j[0],C=j[1],w=(0,r.useCallback)((function(){C(!0)}),[]),k=(0,r.useCallback)((function(){C(!1)}),[]),N=(0,r.useCallback)((function(){e("/changePassword")}),[e]);return(0,v.jsx)(m.Z,{className:"vh-100 text-black-custom ".concat(i),children:(0,v.jsx)(h.Z,{className:"h-100 justify-content-center ".concat(l),children:(0,v.jsxs)(b.Z,{md:4,className:"text-center py-3 ".concat(s),children:[(0,v.jsx)("h1",{className:"my-5 fw-400 fw-bold",children:t("otpVerification.verificationText")}),(0,v.jsx)("p",{className:"mb-5 fs-4 lh-1 px-5",children:t("otpVerification.openYourEmailText")}),(0,v.jsx)(u(),{className:"".concat(f),value:x,onChange:O,autoFocus:!0,OTPLength:4,otpType:"number",disabled:!1}),(0,v.jsx)("p",{className:"mb-0 fw-bold",children:t("otpVerification.didNotRecieveCodeText")}),(0,v.jsxs)("p",{to:"#0",className:"text-black-custom",children:[t("otpVerification.resendCodeInText")," ",(0,v.jsx)("span",{className:"textYellow fw-bold",children:"00:60"})]}),(0,v.jsx)("p",{className:"pb-2 fw-bold textYellow",children:t("otpVerification.resendCodeText")}),(0,v.jsx)(c.Z,{text:t("otpVerification.nextText"),className:"w-100 py-2 mt-3",handleOnClick:w}),(0,v.jsx)(y.Z,{size:"md",TOneClassName:"fw-bold mb-4 fs-5 text-center",className:"p-4",isOpen:T,onClose:k,ModalTextOne:t("otpVerification.invalidOtpModalText"),ButtonOne:(0,v.jsx)(c.Z,{text:t("otpVerification.okayText"),className:"py-2 px-5",handleOnClick:N})})]})})})},O=function(e){return(0,v.jsx)(r.Fragment,{children:(0,v.jsx)(x,{})})}},6971:function(e,t,n){var r;window,e.exports=(r=n(2791),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/otp-input-react/",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.r(t);var u=n(0),c=n.n(u);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=e.maxTime,n=e.onTimerComplete,r=e.timeInterval,a=e.onResendClick,o=Object(u.useRef)(),c=i(Object(u.useState)(t),2),l=c[0],s=c[1];return Object(u.useEffect)((function(){return o.current&&0===l?(clearTimeout(o.current),n&&n()):o.current=setTimeout((function(){s((function(e){return e-1}))}),r),function(){clearTimeout(o.current)}}),[n,l,r]),{handelResendClick:function(){a&&a(0===l),s(t)},remainingTime:l}};function s(e){var t=e.renderTime,n=e.renderButton,r=e.style,u=e.className,i=o(e,["renderTime","renderButton","style","className"]),s=l(i),f=s.remainingTime,p=s.handelResendClick;return c.a.createElement("div",{className:u||"","data-testid":"otp-resend-root",style:a({display:"flex",justifyContent:"space-between"},r)},t?t(f):c.a.createElement("span",null,f," sec"),n?n({disabled:0!==f,onClick:p,remainingTime:f}):c.a.createElement("button",{disabled:0!==f,onClick:p,type:"button"},"Resend OTP"))}s.defaultProps={maxTime:60,timeInterval:1e3,style:{}};var f=s,p={width:32,height:32,textAlign:"center",marginRight:20},d=c.a.memo((function(e){var t=e.focus,n=e.autoFocus,r=e.disabled,i=e.value,l=e.onInputFocus,s=e.index,f=e.secure,d=e.inputStyles,m=e.otpType,h=o(e,["focus","autoFocus","disabled","value","onInputFocus","index","secure","inputStyles","otpType"]),b=Object(u.useRef)(null),y=Object(u.useRef)(!1);Object(u.useEffect)((function(){n&&t&&b.current.focus()}),[]),Object(u.useEffect)((function(){y.current&&t&&b.current.focus(),y.current=!0}),[t]);var v="text";return f?v="password":"number"===m&&(v="tel"),c.a.createElement("input",Object.assign({style:a({},p,d),type:v,maxLength:"1",ref:b,disabled:r,onFocus:function(e){return l(s,e)},value:i||""},h))})),m=function(e){var t=e.autoFocus,n=e.value,r=e.otpType,a=e.onChange,o=e.OTPLength,c=i(Object(u.useState)(t?0:-1),2),l=c[0],s=c[1],f=function(){return n?n.toString().split(""):[]},p=function(e){var t=e.join("");a(t)},d=function(){!function(e){var t=Math.max(Math.min(o-1,e),0);s(t)}("next"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next")?l+1:l-1)},m=function(e){var t=i(e,1)[0],n=f();n[l]=t,p(n)},h=function(e){switch(r){case"number":return!(e.charCodeAt(0)>57||e.charCodeAt(0)<48);case"alpha":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<65);case"alphanumeric":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<48);default:return!0}};return{activeInput:l,getOtpValue:f,handleOnChange:function(e){h(e.target.value)&&(m(e.target.value),d("next"))},handleOnKeyDown:function(e){switch(e.key){case"Backspace":e.preventDefault(),m(""),d("prev");break;case"Delete":e.preventDefault(),m("");break;case"ArrowLeft":e.preventDefault(),d("prev");break;case"ArrowRight":e.preventDefault(),d("next")}},handelOnInput:function(e){e.target.value.length>1&&(e.preventDefault(),d("next"))},handleOnPaste:function(e,t){e.preventDefault();for(var n=f(),r=e.clipboardData.getData("text/plain").slice(0,o-l).split(""),a=0;a<o;++a)a>=l&&r.length>0&&(n[a]=r.shift());for(var u=[n.length],c=0,i=0;i<n.length;++i)h(n[i])&&(u[c]=n[i],c++);p(u)},onInputFocus:function(e,t){s(e),t.target.select()}}},h=function(e){var t=e.OTPLength,n=e.disabled,r=e.autoFocus,o=e.value,i=void 0===o?"":o,l=e.onChange,s=e.otpType,f=e.secure,p=e.className,h=e.inputClassName,b=e.inputStyles,y=e.style,v=e.placeholder,x=m({autoFocus:r,value:i,otpType:s,onChange:l,OTPLength:t}),O=x.activeInput,g=x.getOtpValue,j=x.handleOnChange,T=x.handleOnKeyDown,C=x.handelOnInput,w=x.handleOnPaste,k=x.onInputFocus,N=Object(u.useMemo)((function(){for(var e=g(),a=[],o=0;o<t;o++)a.push(c.a.createElement(d,{className:h,inputStyles:b,key:o,focus:O===o,value:e[o],onChange:j,onKeyDown:T,onInput:C,onPaste:w,onInputFocus:k,index:o,disabled:n,autoFocus:r,secure:f,"data-testid":"input",otpType:s,placeholder:v&&v[o]}));return a}),[g,t,h,b,O,j,T,C,w,k,n,r,f,s,v]);return c.a.createElement("div",{style:a({display:"flex"},y),className:"".concat(p),"data-testid":"otp-input-root"},N)};h.defaultProps={className:"",inputClassName:"",OTPLength:4,onChange:function(){},disabled:!1,secure:!1,autoFocus:!1,value:"",otpType:"any",inputStyles:{},style:{},placeholder:void 0};var b=h;n.d(t,"ResendOTP",(function(){return f})),n.d(t,"default",(function(){return b}))}]))}}]);
//# sourceMappingURL=4843.6cb1ed9e.chunk.js.map