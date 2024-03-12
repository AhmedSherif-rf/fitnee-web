"use strict";(self.webpackChunkfitnee_web=self.webpackChunkfitnee_web||[]).push([[9227],{8956:function(e,a,n){n.r(a);var t=n(9439),s=n(2426),l=n.n(s),c=n(6053),i=n(9434),r=n(1339),o=n(7472),d=n(4238),u=n(2791),m=n(9711),x=n(1793),h=n(3434),p=n(5757),f=n(3585),j=n(203),v=n(5223),g=n(1296),N=n(260),b=n(4275),y=n(3009),Z=n(9773),_=n(3464),w=n(8865),C=n(9037),E=n(2232),D=n(184);a.default=function(e){var a=l()(),n=(0,i.I0)(),s=(0,u.useState)(1),P=(0,t.Z)(s,2),T=P[0],k=P[1],S=(0,u.useState)(0),A=(0,t.Z)(S,2),R=A[0],K=A[1],Y=(0,u.useState)([]),I=(0,t.Z)(Y,2),U=I[0],B=I[1],G=(0,u.useState)(null),L=(0,t.Z)(G,2),O=L[0],W=L[1],M=(0,i.v9)((function(e){return e.wallet})).loading,H=(0,u.useCallback)((function(e){k(e.selected+1)}),[]);(0,u.useEffect)((function(){z()}),[n,T]);var z=function(){var e={apiEndpoint:"".concat(f.PENDING_PAYMENTS,"?page=").concat(T)};n((0,h.z)(e)).then((function(e){"getWalletData/fulfilled"===e.type&&(K(e.payload.data.count),W(e.payload.data.results))}))};(0,u.useEffect)((function(){if(O&&O.length>0){var e=[];null===O||void 0===O||O.forEach((function(t){null===t||void 0===t||t.transactions.forEach((function(t){e.push({transaction_no:null===t||void 0===t?void 0:t.id,amount:"".concat(f.CURRENCY," ").concat(null===t||void 0===t?void 0:t.amount),status:(0,D.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[(0,D.jsx)("div",{className:"me-2 ".concat(null!==t&&void 0!==t&&t.is_paid?"bg-success":"bg-danger"," rounded-circle"),style:{minWidth:"8px",minHeight:"8px"}}),(0,D.jsx)("span",{children:null!==t&&void 0!==t&&t.is_paid?"Paid":"Pending"})]}),total_amount:"".concat(f.CURRENCY," ").concat(null===t||void 0===t?void 0:t.total_amount),release_date:(0,D.jsx)("p",{className:a.isSame(l()(null===t||void 0===t?void 0:t.payment_date),"day")?"text-success fw-bold":a.isAfter(l()(null===t||void 0===t?void 0:t.payment_date),"day")?"text-danger fw-bold":"text-dark",children:l()(null===t||void 0===t?void 0:t.payment_date).format("DD/MM/YYYY")}),action:(0,D.jsxs)(v.Z,{className:"UncontrolledDropdown",children:[(0,D.jsx)(g.Z,{className:"p-0 d-flex align-items-center justify-content-center",nav:!0,children:(0,D.jsx)("div",{className:" rounded-circle text-black-custom",children:(0,D.jsx)(j.Blh,{size:18,className:"fs-3"})})}),(0,D.jsx)(N.Z,{className:"DropdownMenu",style:{right:0,left:"auto"},children:(0,D.jsx)(b.Z,{className:"p-1 DropdownItem",children:(0,D.jsxs)("div",{className:"d-flex align-items-center px-2",onClick:function(){return function(e){var a={apiEndpoint:f.ADMIN_RELEASE_PAYMENT_URL,requestData:JSON.stringify({id:e})};n((0,h.N)(a)).then((function(e){"releasePayment/fulfilled"===e.type&&z()}))}(null===t||void 0===t?void 0:t.id)},children:[(0,D.jsx)(c._D6,{className:"me-2"}),(0,D.jsx)("span",{className:"fs-6",children:"Click to pay"})]})})})]})})}))})),B(e)}else B([])}),[O]);return(0,D.jsx)(y.Z,{className:"h-100",children:(0,D.jsx)(Z.Z,{md:12,children:(0,D.jsxs)(_.Z,{className:"border-0 h-100 text-start",children:[(0,D.jsx)(w.Z,{className:"bg-transparent border-0 p-0",children:(0,D.jsx)(m.Z,{headingText:"Wallet Overview"})}),(0,D.jsxs)(C.Z,{className:"tableBodyWrapperPagination",children:["pending"===M&&(0,D.jsx)(x.Z,{}),(0,D.jsxs)(y.Z,{children:[(0,D.jsx)(Z.Z,{md:12,className:"mb-3",children:(0,D.jsx)(_.Z,{className:"shadow-sm border onlyBorderRadius",children:(0,D.jsx)(C.Z,{children:(0,D.jsxs)(y.Z,{children:[(0,D.jsx)(Z.Z,{md:6,children:(0,D.jsxs)("div",{className:"d-flex align-items-center justify-content-between h-100",children:[(0,D.jsx)("h6",{className:"w-50",children:"Payment Duration:"}),(0,D.jsx)("div",{className:"w-50",children:(0,D.jsx)(o.Z,{className:"mb-0 border",name:"role",placeholder:"Select Duration"})})]})}),(0,D.jsx)(Z.Z,{md:6,children:(0,D.jsx)(r.Z,{icon:(0,D.jsx)(j.XPI,{}),placeholder:"Search by phone number",type:"text",name:"category",className:"py-3 ps-5 mt-1"})})]})})})}),(0,D.jsx)(Z.Z,{md:12,className:"mb-2",children:(0,D.jsx)(p.Z,{data:U,columns:[{label:"Trsansaction #",dataKey:"transaction_no",align:"center"},{label:"Amount",dataKey:"amount"},{label:"Status",dataKey:"status",align:"center"},{label:"Total Subscription Amount",dataKey:"total_amount",align:"center"},{label:"Release Date",dataKey:"release_date",align:"center"},{label:"Action",dataKey:"action",align:"center"}]})})]})]}),(0,D.jsx)(E.Z,{className:"bg-transparent text-end pb-0 pt-2",children:R>f.PER_PAGE_COUNT&&(0,D.jsx)(d.Z,{size:R,handlePageChange:H})})]})})})}},5757:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(2791),s="style_stripedTable__3eED+",l=n(9230),c=(n(6338),n(8512)),i=n(184),r=function(e){var a=e.data,n=e.columns,t=(0,l.$G)("").t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c.iA,{className:"".concat(s),children:[(0,i.jsx)(c.hr,{children:(0,i.jsx)(c.Tr,{children:n.map((function(e,a){return(0,i.jsx)(c.Th,{className:e.align?"text-".concat(e.align," small"):"small",children:e.label},a)}))})}),(0,i.jsx)(c.p3,{children:a.map((function(e,a){return(0,i.jsx)(c.Tr,{children:n.map((function(a,n){return(0,i.jsx)(c.Td,{className:a.align?"text-".concat(a.align):"",children:a.dataKey?e[a.dataKey]:null},n)}))},a)}))})]}),a.length<=0&&(0,i.jsx)("div",{className:"d-flex justify-content-center py-4 text-black-custom",children:t("messages.noDataFoundText")})]})},o=(0,t.memo)(r)},9711:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(2791),s=n(184),l=function(e){var a=e.headingText,n=e.categoryText,l=e.className,c=e.style;return(0,s.jsx)(t.Fragment,{children:(0,s.jsxs)("h2",{className:"fw-bold text-black-custom p-3 mb-0 ".concat(l," heading"),style:{style:c,textTransform:"camelCase"},children:[a,n&&(0,s.jsx)("span",{className:"text-muted h6 fw-bold",style:{style:c,textTransform:"camelCase"},children:"".concat(n)})]})})},c=(0,t.memo)(l)},1339:function(e,a,n){n.d(a,{Z:function(){return h}});var t=n(9439),s=n(8118),l="style_inputWrapper__TwZK0",c="style_leftIconWrapper__xssmg",i="style_rightIconWrapper__w2pZU",r="style_inputDesign__qtE0Z",o=n(2791),d=n(9230),u=n(5763),m=n(184),x=function(e){var a=e.placeholder,n=e.type,x=e.onChangeHandle,h=e.onBlurHandle,p=e.value,f=e.name,j=e.className,v=e.icon,g=e.disabled,N=e.style,b=e.rows,y=(0,o.useState)(!1),Z=(0,t.Z)(y,2),_=Z[0],w=Z[1],C=(0,d.$G)("").i18n;return(0,m.jsxs)("div",{className:"".concat(l," ").concat(C.dir()),children:[v&&(0,m.jsx)("div",{className:"ltr"===C.dir()?c:i,children:v}),(0,m.jsx)(s.Z,{type:"password"===n?_?"text":"password":n,placeholder:a,name:f,style:N,min:"number"===n?0:"",step:"number"===n?"any":"",className:"form-control-lg w-100 ".concat(r," ").concat("number"===n?"remove-arrow":""," ").concat(j),disabled:g,onChange:x,onBlur:h,value:p,rows:b}),"password"===n&&(0,m.jsx)("div",{onClick:function(){w((function(e){return!e}))},className:"ltr"===C.dir()?i:c,children:_?(0,m.jsx)(u.ONY,{}):(0,m.jsx)(u.quy,{})})]})},h=(0,o.memo)(x)},7472:function(e,a,n){n(2791);var t=n(184);a.Z=function(e){var a=e.Options,n=e.className,s=e.name,l=e.onChangeHandle,c=e.onBlurHandle,i=e.placeholder,r=e.value;return(0,t.jsx)("div",{className:"mb-0 customSelect",children:(0,t.jsxs)("select",{className:"customDropdownRadius w-100 form-control-lg ".concat(n),name:s,onChange:l,onBlur:c,value:r,children:[(0,t.jsx)("option",{value:"",children:i}),a&&(null===a||void 0===a?void 0:a.map((function(e,a){return(0,t.jsx)("option",{value:null===e||void 0===e?void 0:e.value,children:e.label},a)})))]})})}},4238:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(2791),s=n(6048),l=n.n(s),c=n(6355),i=n(3585),r=n(184),o=function(e){var a=e.size,n=e.handlePageChange;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l(),{breakLabel:"...",nextLabel:(0,r.jsx)(c.Dli,{className:"text-black-custom fs-4"}),onPageChange:n,pageRangeDisplayed:i.PAGE_RANGE,pageCount:a/i.PER_PAGE_COUNT,previousLabel:(0,r.jsx)(c.bUI,{className:"text-black-custom fs-4"}),renderOnZeroPageCount:null,containerClassName:"pagination",activeLinkClassName:"activePageLink"})})},d=(0,t.memo)(o)}}]);
//# sourceMappingURL=9227.78acd212.chunk.js.map