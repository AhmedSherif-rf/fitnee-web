"use strict";(self.webpackChunkfitnee_web=self.webpackChunkfitnee_web||[]).push([[9853],{8401:function(e,a,n){n.r(a);var t=n(9439),s=n(2791),l=n(5737),c=n.n(l),r=n(4238),i=n(9434),o=n(9711),d=n(1793),u=n(263),m=n(6856),p=n(3009),x=n(9773),f=n(3464),g=n(8865),h=n(9037),b=n(2232),v=n(5757),j=n(3585),y=n(6998),N=n(184);a.default=function(e){var a=(0,i.I0)(),n=(0,i.v9)((function(e){return e.userListing})).loading,l=(0,s.useState)(1),_=(0,t.Z)(l,2),P=_[0],Z=_[1],k=(0,s.useState)(0),E=(0,t.Z)(k,2),C=E[0],T=E[1],O=(0,s.useState)([]),S=(0,t.Z)(O,2),w=S[0],I=S[1],R=(0,s.useState)(""),L=(0,t.Z)(R,2),U=L[0],D=L[1],K=(0,s.useState)(null),A=(0,t.Z)(K,2),G=A[0],M=A[1],B=(0,s.useCallback)((function(e){Z(e.selected+1)}),[]);(0,s.useEffect)((function(){var e={apiEndpoint:"".concat(j.ADMIN_SERVICE_PROVIDER_LISTING_URL,"?page=").concat(P,"&stc_pay=").concat(U)};a((0,y.E)(e)).then((function(e){"getServiceProviderListing/fulfilled"===e.type&&(T(e.payload.data.count),M(e.payload.data.results))}))}),[a,P,U]),(0,s.useEffect)((function(){if(G&&G.length>0){var e=[];G.forEach((function(a,n){e.push({full_name:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"bgProperties rounded-circle me-2",style:{width:"40px",height:"40px",backgroundImage:null===(null===a||void 0===a?void 0:a.profile_pic)?"url(".concat(u.Z.USER_DUMMY_IMG,")"):"url(".concat(null===a||void 0===a?void 0:a.profile_pic,")")}}),(0,N.jsx)("h6",{className:"text-secondary fw-bold mb-0",children:null===a||void 0===a?void 0:a.full_name})]}),role:null===a||void 0===a?void 0:a.role,email:null===a||void 0===a?void 0:a.email,stc_pay:a.stc_pay,status:(0,N.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[(0,N.jsx)("div",{className:"me-2 ".concat(null!==a&&void 0!==a&&a.is_deleted||null!==a&&void 0!==a&&a.is_blocked?"bg-danger":null!==a&&void 0!==a&&a.is_approved?"bg-success":"bg-warning"," rounded-circle"),style:{minWidth:"8px",minHeight:"8px"}}),(0,N.jsx)("span",{children:null!==a&&void 0!==a&&a.is_deleted?"Deleted":null!==a&&void 0!==a&&a.is_blocked?"Rejected":null!==a&&void 0!==a&&a.is_approved?"Approved":"Incomplete Profile"})]}),action:(0,N.jsxs)("div",{className:"d-flex align-items-center justify-content-md-center",children:[(0,N.jsx)("span",{className:"iconBadge me-1",children:(0,N.jsx)(m.Ep8,{size:22,className:"rejectUser cursorPointer ".concat(a.is_blocked?"":"text-danger")})}),(0,N.jsx)("span",{className:"iconBadge me-1",children:(0,N.jsx)(m.VJS,{size:22,className:"approveUser cursorPointer ".concat(a.is_blocked?"text-success":"")})})]})})})),I(e)}else I([])}),[G]);return(0,N.jsxs)(p.Z,{className:"h-100",children:["pending"===n&&(0,N.jsx)(d.Z,{}),(0,N.jsx)(x.Z,{md:12,children:(0,N.jsxs)(f.Z,{className:"border-0 h-100 text-start",children:[(0,N.jsx)(g.Z,{className:"bg-transparent border-0 p-0",children:(0,N.jsx)(o.Z,{headingText:"Service Provider List",categoryText:""})}),(0,N.jsxs)(h.Z,{className:"tableBodyWrapperPagination",children:[(0,N.jsx)(p.Z,{className:"justify-content-end py-1",children:(0,N.jsx)(x.Z,{md:4,children:(0,N.jsx)(c(),{inputProps:{name:"stc_pay",required:!0,className:"form-control-lg w-100 py-1 px-4 customPhoneInput border"},country:"sa",value:U,className:"border ltr",onChange:function(e){Z(1),D(e)}})})}),(0,N.jsx)(v.Z,{data:w,columns:[{label:"FullName",dataKey:"full_name"},{label:"Role",dataKey:"role",align:"center"},{label:"Email",dataKey:"email",align:"center"},{label:"STC Phone No",dataKey:"stc_pay",align:"center"},{label:"Status",dataKey:"status",align:"center"},{label:"Block / UnBlock",dataKey:"action",align:"center"}]})]}),(0,N.jsx)(b.Z,{className:"bg-transparent text-end pb-0 pt-2",children:C>j.PER_PAGE_COUNT&&(0,N.jsx)(r.Z,{size:C,handlePageChange:B})})]})})]})}},5757:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(2791),s="style_stripedTable__3eED+",l=n(9230),c=(n(6338),n(8512)),r=n(184),i=function(e){var a=e.data,n=e.columns,t=(0,l.$G)("").t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.iA,{className:"".concat(s),children:[(0,r.jsx)(c.hr,{children:(0,r.jsx)(c.Tr,{children:n.map((function(e,a){return(0,r.jsx)(c.Th,{className:e.align?"text-".concat(e.align," small"):"small",children:e.label},a)}))})}),(0,r.jsx)(c.p3,{children:a.map((function(e,a){return(0,r.jsx)(c.Tr,{children:n.map((function(a,n){return(0,r.jsx)(c.Td,{className:a.align?"text-".concat(a.align):"",children:a.dataKey?e[a.dataKey]:null},n)}))},a)}))})]}),a.length<=0&&(0,r.jsx)("div",{className:"d-flex justify-content-center py-4 text-black-custom",children:t("messages.noDataFoundText")})]})},o=(0,t.memo)(i)},9711:function(e,a,n){n.d(a,{Z:function(){return c}});var t=n(2791),s=n(184),l=function(e){var a=e.headingText,n=e.categoryText,l=e.className,c=e.style;return(0,s.jsx)(t.Fragment,{children:(0,s.jsxs)("h2",{className:"fw-bold text-black-custom p-3 mb-0 ".concat(l," heading"),style:{style:c,textTransform:"camelCase"},children:[a,n&&(0,s.jsx)("span",{className:"text-muted h6 fw-bold",style:{style:c,textTransform:"camelCase"},children:"".concat(n)})]})})},c=(0,t.memo)(l)},4238:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(2791),s=n(6048),l=n.n(s),c=n(6355),r=n(3585),i=n(184),o=function(e){var a=e.size,n=e.handlePageChange;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l(),{breakLabel:"...",nextLabel:(0,i.jsx)(c.Dli,{className:"text-black-custom fs-4"}),onPageChange:n,pageRangeDisplayed:r.PAGE_RANGE,pageCount:a/r.PER_PAGE_COUNT,previousLabel:(0,i.jsx)(c.bUI,{className:"text-black-custom fs-4"}),renderOnZeroPageCount:null,containerClassName:"pagination",activeLinkClassName:"activePageLink"})})},d=(0,t.memo)(o)},8865:function(e,a,n){var t=n(2791),s=n(2007),l=n.n(s),c=n(1694),r=n.n(c),i=n(9622),o=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}function u(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var m={className:l().string,cssModule:l().object,tag:i.iC};function p(e){var a=e.className,n=e.cssModule,s=e.tag,l=void 0===s?"div":s,c=u(e,o),m=(0,i.mx)(r()(a,"card-header"),n);return t.createElement(l,d({},c,{className:m}))}p.propTypes=m,a.Z=p}}]);
//# sourceMappingURL=9853.bc717d01.chunk.js.map