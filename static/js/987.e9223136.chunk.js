"use strict";(self.webpackChunkinstagram=self.webpackChunkinstagram||[]).push([[987],{3168:function(e,t,n){n.d(t,{J5:function(){return r},PG:function(){return l},Sf:function(){return s}});var r="This username isn't available. Please try another.",s="Sorry, this page isn't available.",l="The link you followed may be broken, or the page may have been removed."},795:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(4165),s=n(5861),l=n(9439),o=n(1413),a=n(2791),i=n(2798),c=1,u=2,f=3,d=function(e,t){switch(t.type){case c:return(0,o.Z)((0,o.Z)({},e),{},{loading:!0});case f:return{following:!e.following,loading:!1,error:!1};default:return(0,o.Z)((0,o.Z)({},e),{},{error:!0,loading:!1})}};function m(e,t,n){var o=(0,a.useReducer)(d,{following:n,loading:!1}),m=(0,l.Z)(o,2),h=m[0],p=m[1],x=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p({type:c}),n.next=4,(0,i.LN)(e.username,t,!h.following);case 4:p({type:f}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),p({type:u});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return{followState:h,handleFollow:x}}},8987:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(1413),s=n(4165),l=n(5861),o=n(9439),a=n(2791),i=n(7689),c=n(2798),u=n(6206),f=n(8155),d=n(1087),m=n(795),h=n(184);function p(e){var t=e.username,n=e.fullName,r=e.profileUrl,s=e.postCount,l=e.followerCount,i=e.isOfficial,c=e.followingCount,p=e.bio,x=e.isUserFollowing,g=(0,a.useState)(l),w=(0,o.Z)(g,2),v=w[0],j=w[1],b=(0,a.useContext)(u.Z),y=(0,m.Z)(b,t,x),N=y.followState,Z=y.handleFollow;return(0,a.useEffect)((function(){j(x&&!N.following?l-1:!x&&N.following?l+1:l)}),[N,x,l]),(0,h.jsxs)("div",{className:"flex items-center justify-center  p-10 gap-x-20 gap-y-5 flex-wrap select-none",children:[(0,h.jsx)("div",{className:"w-40",children:(0,h.jsx)("img",{src:r,alt:t+"-profile-pic",className:"h-full aspect-square rounded-full object-cover"})}),(0,h.jsxs)("div",{className:"flex flex-col gap-3 justify-center items-center sm:items-start ",children:[(0,h.jsxs)("div",{className:"flex gap-5 items-center justify-center flex-wrap",children:[(0,h.jsxs)("h1",{className:"font-light text-2xl whitespace-nowrap",children:[t+""," ",(0,h.jsx)("span",{title:"Verified account",children:i&&(0,h.jsx)("img",{className:"w-5 inline",src:"/images/verified.png",alt:"verified"})})]}),b.username===t?(0,h.jsx)(d.rU,{to:f.dm,children:(0,h.jsx)("button",{className:"bg-white border text-black p-2 rounded font-semibold",children:"Edit Profile"})}):(0,h.jsx)("button",{onClick:Z,disabled:N.loading,className:"p-2 rounded w-20 text-xs font-semibold\n                        ".concat(N.following?"bg-white outline outline-1 outline-gray-200 text-black":"bg-blue text-white"),children:N.following?"Following":"Follow"})]}),(0,h.jsxs)("div",{className:"flex flex-wrap gap-x-7 justify-center",children:[(0,h.jsxs)("h3",{className:"font-semibold text-md text-center",children:[(0,h.jsx)("span",{className:"font-bold",children:s})," posts"]}),(0,h.jsxs)("h3",{className:"font-semibold w-20 text-md text-center",children:[(0,h.jsx)("span",{className:"font-bold",children:v})," follower".concat(1===v?"":"s")]}),(0,h.jsxs)("h3",{className:"font-semibold text-md text-center",children:[(0,h.jsx)("span",{className:"font-bold",children:c})," following"]})]}),(0,h.jsx)("h4",{className:"text-md font-semibold",children:n}),(0,h.jsx)("h4",{className:"text-md",children:p})]})]})}var x=n(2579);function g(e){var t,n=e.postId,r=function(e){var t=(0,a.useState)(null),n=(0,o.Z)(t,2),r=n[0],s=n[1];return(0,a.useEffect)((function(){(0,c.xl)(e).then((function(e){return s(e)}))}),[e]),r}(n);return(0,h.jsx)("div",{className:"w-[33%] min-w-[200px] grow sm:grow-0 relative",children:r?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:r.imageUrl,alt:n,className:"aspect-square object-cover w-full"}),(0,h.jsxs)("div",{className:"bg-black bg-opacity-25 opacity-0 hover:opacity-100 cursor-pointer text-white flex items-center justify-center absolute w-full h-full top-0 gap-5",children:[(0,h.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,h.jsx)("span",{className:"text-lg font-semibold",children:r.likes.length}),(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})]}),(0,h.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,h.jsx)("span",{className:"text-lg font-semibold",children:(null===(t=r.comments)||void 0===t?void 0:t.length)||"0"}),(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})})]})]})]}):(0,h.jsx)(x.Z,{className:"aspect-square"})})}function w(e){var t=e.posts;return(0,h.jsxs)("section",{className:"flex items-center justify-center flex-col px-10",children:[(0,h.jsx)("h1",{className:"text-lg uppercase font-light  tracking-wider border-b px-5",children:"Posts"}),(0,h.jsx)("section",{className:"flex flex-wrap py-4 w-full gap-5",children:t.length?t.map((function(e){return(0,h.jsx)(g,{postId:e},e)})):(0,h.jsx)("h1",{className:"text-center w-full",children:"No posts yet"})})]})}function v(e){var t=(0,a.useContext)(u.Z).username,n={isUserFollowing:!!e.followers.filter((function(e){return e===t})).length,followerCount:e.followers.length,followingCount:e.following.length,postCount:e.posts.length};return(0,h.jsxs)("section",{className:"border h-full",children:[(0,h.jsx)(p,(0,r.Z)((0,r.Z)({},e),n)),(0,h.jsx)(w,{posts:e.posts})]})}var j=n(3446),b=n(3168);function y(){return(0,a.useEffect)((function(){document.title="Not Found - Instagram"})),(0,h.jsxs)("div",{className:"flex items-center justify-center flex-col gap-4 mt-[20%]",children:[(0,h.jsx)("h1",{className:"font-light text-3xl",children:b.Sf}),(0,h.jsx)("h2",{className:"text-md",children:b.PG})]})}function N(){var e=(0,i.UO)().username,t=(0,a.useState)(null),n=(0,o.Z)(t,2),u=n[0],f=n[1],d=(0,a.useState)(!1),m=(0,o.Z)(d,2),p=m[0],x=m[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,l.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.Ox)(e);case 3:if(n=t.sent){t.next=6;break}throw Error("User not found");case 6:f(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),x(!0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),console.log("data",u),p?(0,h.jsx)(y,{}):u?(0,h.jsx)(v,(0,r.Z)({},u)):(0,h.jsx)(j.Z,{})}},4925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(t,{Z:function(){return r}})},2579:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(9439),s=n(1413),l=n(4925),o=n(2791),a=["count","wrapper","className","containerClassName","containerTestId","circle","style"],i=o.createContext({});function c(e){for(var t,n,c,u=e.count,f=void 0===u?1:u,d=e.wrapper,m=e.className,h=e.containerClassName,p=e.containerTestId,x=e.circle,g=void 0!==x&&x,w=e.style,v=(0,l.Z)(e,a),j=o.useContext(i),b=(0,s.Z)({},v),y=0,N=Object.entries(v);y<N.length;y++){var Z=(0,r.Z)(N[y],2),k=Z[0];"undefined"===typeof Z[1]&&delete b[k]}var C=(0,s.Z)((0,s.Z)((0,s.Z)({},j),b),{},{circle:g}),E=(0,s.Z)((0,s.Z)({},w),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,s=e.height,l=e.borderRadius,o=e.circle,a=e.direction,i=e.duration,c=e.enableAnimation,u=void 0===c||c,f={};return"rtl"===a&&(f["--animation-direction"]="reverse"),"number"===typeof i&&(f["--animation-duration"]="".concat(i,"s")),u||(f["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(f.width=r),"string"!==typeof s&&"number"!==typeof s||(f.height=s),"string"!==typeof l&&"number"!==typeof l||(f.borderRadius=l),o&&(f.borderRadius="50%"),"undefined"!==typeof t&&(f["--base-color"]=t),"undefined"!==typeof n&&(f["--highlight-color"]=n),f}(C)),O="react-loading-skeleton";m&&(O+=" ".concat(m));for(var S=null!==(t=C.inline)&&void 0!==t&&t,F=[],P=Math.ceil(f),U=0;U<P;U++){var I=E;if(P>f&&U===P-1){var z=null!==(n=I.width)&&void 0!==n?n:"100%",L=f%1,M="number"===typeof z?z*L:"calc(".concat(z," * ").concat(L,")");I=(0,s.Z)((0,s.Z)({},I),{},{width:M})}var R=o.createElement("span",{className:O,style:I,key:U},"\u200c");S?F.push(R):F.push(o.createElement(o.Fragment,{key:U},R,o.createElement("br",null)))}return o.createElement("span",{className:h,"data-testid":p,"aria-live":"polite","aria-busy":null===(c=C.enableAnimation)||void 0===c||c},d?F.map((function(e,t){return o.createElement(d,{key:t},e)})):F)}}}]);
//# sourceMappingURL=987.e9223136.chunk.js.map