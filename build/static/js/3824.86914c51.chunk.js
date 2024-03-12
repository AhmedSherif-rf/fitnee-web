"use strict";(self.webpackChunkfitnee_web=self.webpackChunkfitnee_web||[]).push([[3824],{2076:function(e,n,a){a.r(n);var t=a(9439),s=a(2791),l=a(7689),r=a(5737),c=a.n(r),i=a(4238),o=a(9434),u=a(9711),d=a(1793),m=a(263),f=a(3009),p=a(9773),h=a(3464),g=a(8865),x=a(9037),b=a(2232),v=a(5757),j=a(3585),y=a(6998),N=a(184);n.default=function(e){var n=(0,o.I0)(),a=(0,l.UO)().slug,r=(0,o.v9)((function(e){return e.userListing})).loading,_=(0,s.useState)(1),Z=(0,t.Z)(_,2),P=Z[0],T=Z[1],C=(0,s.useState)(0),E=(0,t.Z)(C,2),O=E[0],k=E[1],w=(0,s.useState)([]),S=(0,t.Z)(w,2),L=S[0],U=S[1],I=(0,s.useState)(""),R=(0,t.Z)(I,2),A=R[0],G=R[1],K=(0,s.useState)(null),M=(0,t.Z)(K,2),D=M[0],F=M[1],z=(0,s.useCallback)((function(e){T(e.selected+1)}),[]);(0,s.useEffect)((function(){var e={apiEndpoint:"".concat(j.USER_STATUS_LISTING_URL,"?status=").concat(a,"&page=").concat(P,"&phone_number=").concat(A)};n((0,y.Y)(e)).then((function(e){"getTraineeListing/fulfilled"===e.type&&(k(e.payload.data.count),F(e.payload.data.results))}))}),[n,P,A,a]),(0,s.useEffect)((function(){if(D&&D.length>0){var e=[];D.forEach((function(n){e.push({name:(0,N.jsxs)("div",{className:"d-flex align-items-center",children:[(0,N.jsx)("div",{className:"bgProperties rounded-circle me-2",style:{width:"40px",height:"40px",backgroundImage:null===(null===n||void 0===n?void 0:n.profile_pic)?"url(".concat(m.Z.USER_DUMMY_IMG,")"):"url(".concat(null===n||void 0===n?void 0:n.profile_pic,")")}}),(0,N.jsx)("h6",{className:"text-secondary fw-bold mb-0",children:"".concat(null===n||void 0===n?void 0:n.first_name," ").concat(null===n||void 0===n?void 0:n.last_name)})]}),role:null===n||void 0===n?void 0:n.role,email:null===n||void 0===n?void 0:n.email,phone_number:null===n||void 0===n?void 0:n.phone_number,status:(0,N.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[(0,N.jsx)("div",{className:"me-2 ".concat(null!==n&&void 0!==n&&n.is_active?"bg-success":"bg-warning"," rounded-circle"),style:{minWidth:"8px",minHeight:"8px"}}),(0,N.jsx)("span",{children:null!==n&&void 0!==n&&n.is_active?"Active":"Incomplete Profile"})]})})})),U(e)}else U([])}),[D]);return(0,N.jsxs)(f.Z,{className:"h-100",children:["pending"===r&&(0,N.jsx)(d.Z,{}),(0,N.jsx)(p.Z,{md:12,children:(0,N.jsxs)(h.Z,{className:"border-0 h-100 text-start",children:[(0,N.jsx)(g.Z,{className:"bg-transparent border-0 p-0",children:(0,N.jsx)(u.Z,{headingText:"User List",categoryText:""})}),(0,N.jsxs)(x.Z,{className:"tableBodyWrapperPagination",children:[(0,N.jsx)(f.Z,{className:"justify-content-end py-1",children:(0,N.jsx)(p.Z,{md:4,children:(0,N.jsx)(c(),{inputProps:{name:"stc_pay",required:!0,className:"form-control-lg w-100 py-1 px-4 customPhoneInput border"},country:"sa",value:A,className:"border ltr",onChange:function(e){T(1),G(e)}})})}),(0,N.jsx)(v.Z,{data:L,columns:[{label:"Name",dataKey:"name"},{label:"Role",dataKey:"role",align:"center"},{label:"Email",dataKey:"email",align:"center"},{label:"Phone No",dataKey:"phone_number",align:"center"},{label:"Status",dataKey:"status",align:"center"}]})]}),(0,N.jsx)(b.Z,{className:"bg-transparent text-end pb-0 pt-2",children:O>j.PER_PAGE_COUNT&&(0,N.jsx)(i.Z,{size:O,handlePageChange:z})})]})})]})}},5757:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(2791),s="style_stripedTable__3eED+",l=a(9230),r=(a(6338),a(8512)),c=a(184),i=function(e){var n=e.data,a=e.columns,t=(0,l.$G)("").t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.iA,{className:"".concat(s),children:[(0,c.jsx)(r.hr,{children:(0,c.jsx)(r.Tr,{children:a.map((function(e,n){return(0,c.jsx)(r.Th,{className:e.align?"text-".concat(e.align," small"):"small",children:e.label},n)}))})}),(0,c.jsx)(r.p3,{children:n.map((function(e,n){return(0,c.jsx)(r.Tr,{children:a.map((function(n,a){return(0,c.jsx)(r.Td,{className:n.align?"text-".concat(n.align):"",children:n.dataKey?e[n.dataKey]:null},a)}))},n)}))})]}),n.length<=0&&(0,c.jsx)("div",{className:"d-flex justify-content-center py-4 text-black-custom",children:t("messages.noDataFoundText")})]})},o=(0,t.memo)(i)},9711:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(2791),s=a(184),l=function(e){var n=e.headingText,a=e.categoryText,l=e.className,r=e.style;return(0,s.jsx)(t.Fragment,{children:(0,s.jsxs)("h2",{className:"fw-bold text-black-custom p-3 mb-0 ".concat(l," heading"),style:{style:r,textTransform:"camelCase"},children:[n,a&&(0,s.jsx)("span",{className:"text-muted h6 fw-bold",style:{style:r,textTransform:"camelCase"},children:"".concat(a)})]})})},r=(0,t.memo)(l)},4238:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(2791),s=a(6048),l=a.n(s),r=a(6355),c=a(3585),i=a(184),o=function(e){var n=e.size,a=e.handlePageChange;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l(),{breakLabel:"...",nextLabel:(0,i.jsx)(r.Dli,{className:"text-black-custom fs-4"}),onPageChange:a,pageRangeDisplayed:c.PAGE_RANGE,pageCount:n/c.PER_PAGE_COUNT,previousLabel:(0,i.jsx)(r.bUI,{className:"text-black-custom fs-4"}),renderOnZeroPageCount:null,containerClassName:"pagination",activeLinkClassName:"activePageLink"})})},u=(0,t.memo)(o)},8865:function(e,n,a){var t=a(2791),s=a(2007),l=a.n(s),r=a(1694),c=a.n(r),i=a(9622),o=["className","cssModule","tag"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},u.apply(this,arguments)}function d(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m={className:l().string,cssModule:l().object,tag:i.iC};function f(e){var n=e.className,a=e.cssModule,s=e.tag,l=void 0===s?"div":s,r=d(e,o),m=(0,i.mx)(c()(n,"card-header"),a);return t.createElement(l,u({},r,{className:m}))}f.propTypes=m,n.Z=f}}]);
//# sourceMappingURL=3824.86914c51.chunk.js.map