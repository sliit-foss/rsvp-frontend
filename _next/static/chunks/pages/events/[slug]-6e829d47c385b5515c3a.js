(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{77761:function(e,t,n){"use strict";var r=n(85893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"max-w-6xl lg:max-w-7xl mx-auto sm:px-4 px-6 font-inter",children:t})}},13283:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});var r=n(809),l=n.n(r),a=n(92447),s=n(9669),i=n.n(s)().create({baseURL:"INVALID_URL"});i.interceptors.request.use(function(){var e=(0,a.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.baseURL="https://easy-puce-angler-cuff.cyclic.cloud",t.headers={Authorization:localStorage.getItem("Token")},e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}))},84417:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r={};n.r(r),n.d(r,{createEvent:function(){return o},deleteEvent:function(){return d},getEvent:function(){return v},getEvents:function(){return f},getLatestEvents:function(){return g},registerEvent:function(){return j},updateEvent:function(){return w}});var l=n(39227),a=n(809),s=n.n(a),i=n(92447),c=n(13283);function o(e){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.post("/events",t);case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.delete("/events/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.get("/events/allevents/all");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)(s().mark((function e(t){var n,r,a,i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,r=(0,l.Z)(n,2),a=r[0],i=r[1].eventId,console.log(a),e.next=5,c.b.get("/events/".concat(i));case 5:return o=e.sent,e.abrupt("return",o.data.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.get("/events/latest/all");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return b.apply(this,arguments)}function b(){return(b=(0,i.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.b.put("/events/".concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)(s().mark((function e(t,n){var r,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/attendees/".concat(t),e.next=3,c.b.post(r,n);case 3:return l=e.sent,e.abrupt("return",l.data.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},12938:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(85893),l=(n(67294),n(11163)),a=n(79358),s=n(75754),i=n(34709),c=n(61618),o=n(77761),u=n(8193),d=n(89583),x=function(e){var t=e.name,n=e.description,l=e.topic,a=e.occupation,s=e.twitterURL,i=e.linkedinURL,c=e.photoURL;return(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row items-center lg:items-end",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/2 flex justify-center items-center rounded-xl mt-5",children:(0,r.jsx)("div",{className:"w-3/4 lg:w-full rounded-xl shadow-md hover:shadow-xl transition-all ease-out duration-500",children:(0,r.jsx)("img",{src:c,alt:"Logo",className:"w-full hover:opacity-80 rounded-xl transition-all ease-out duration-500"})})}),(0,r.jsxs)("div",{className:"ml-0 lg:ml-10 mt-10 lg:mt-0 flex flex-row lg:flex-col",children:[(0,r.jsx)("a",{href:s,children:(0,r.jsx)(u.wod,{className:"mb-3  mr-3 fill-current-color text-gray-500 hover:text-white transition-all ease-out duration-200",size:"32"})}),(0,r.jsx)("a",{href:i,children:(0,r.jsx)(d.ltd,{className:"mt-0 lg:mt-3 mr-3 fill-current-color text-gray-500 hover:text-white transition-all ease-out duration-200",size:"30"})})]})]}),(0,r.jsxs)("div",{className:"flex flex-col justify-center items-start mt-10",children:[(0,r.jsx)("div",{className:"w-full text-3xl font-extrabold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue to-gradientPurple",children:t}),(0,r.jsx)("div",{className:"w-full text-2xl font-extrabold text-center lg:text-left mt-5",children:a}),(0,r.jsx)("div",{className:"w-full text-base lg:text-lg font-normal text-center lg:text-left mt-8",children:n})]}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-start mt-10",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/4",children:(0,r.jsx)("div",{className:"text-lg font-extrabold text-center lg:text-left",children:"Topic:"})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("div",{className:"text-base lg:text-lg font-normal text-center lg:text-left",children:l})})]})]})},f=function(){var e=(0,l.useRouter)(),t="";t=window.location.href.split("/").reverse()[1].replaceAll("/","");var n=(0,a.Q3)(t),u=n.data,d=n.isSuccess;return(0,r.jsxs)(s.Z,{title:void 0==e.query.name?"RSVP SLIIT":"".concat(e.query.name," | RSVP SLIIT"),description:null===u||void 0===u?void 0:u.description,image:null===u||void 0===u?void 0:u.headerImage,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("section",{style:{backgroundImage:"url(/patterns/clubs.svg)"},className:"bg-no-repeat bg-right-top bg-cover py-10 ",children:d?(0,r.jsxs)(o.Z,{children:[(0,r.jsx)("div",{className:"w-full lg:px-16 2xl:px-0","data-aos":"fade-right",children:(0,r.jsx)("div",{className:"text-5xl lg:text-6xl xl:text-7xl text-blue font-bold text-center lg:text-left mt-14 mb-14 lg:mb-0",children:null===u||void 0===u?void 0:u.name})}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between items-start mt-16 lg:mt-32 px-5 lg:px-16 2xl:px-0",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/2","data-aos":"fade-right",children:(0,r.jsx)("div",{className:"text-5xl lg:text-6xl xl:text-7xl text-darkBlue font-bold text-center lg:text-left mb-14 lg:mb-0",children:"Event"})}),(0,r.jsxs)("div",{className:"w-full lg:w-1/2","data-aos":"fade-left",children:[(0,r.jsx)("div",{className:"text-base lg:text-lg font-normal text-center lg:text-left mt-5",children:null===u||void 0===u?void 0:u.description}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-start mt-10",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/4",children:(0,r.jsx)("div",{className:"text-lg font-extrabold text-center lg:text-left",children:"When:"})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsxs)("div",{className:"text-base lg:text-lg font-normal text-center lg:text-left w-auto ",children:[(0,r.jsx)("div",{className:"mb-3",children:new Date(u?u.startTime:0).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).replaceAll(","," ")}),(0,r.jsx)("p",{className:"mb-3 ml-18 text-bold",children:"to"}),(0,r.jsx)("div",{children:new Date(u?u.endTime:0).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0}).replaceAll(","," ")})]})})]}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-start mt-10",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/4",children:(0,r.jsx)("div",{className:"text-lg font-extrabold text-center lg:text-left",children:"Where:"})}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)("div",{className:"text-base lg:text-lg font-normal text-center lg:text-left",children:null===u||void 0===u?void 0:u.venue})})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between items-start mt-20 lg:mt-36 px-5 lg:px-16 2xl:px-0",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/2","data-aos":"fade-right",children:(0,r.jsx)("div",{className:"text-5xl lg:text-6xl xl:text-7xl text-darkBlue font-bold text-center lg:text-left mb-14 lg:mb-0",children:"Speakers"})}),(0,r.jsx)("div",{className:"w-full lg:w-1/2","data-aos":"fade-left",children:0!=(null===u||void 0===u?void 0:u.speakers.length)?(0,r.jsx)(r.Fragment,{children:null===u||void 0===u?void 0:u.speakers.map((function(e){return(0,r.jsx)(x,{name:e.name,description:e.description,photoURL:e.photo,occupation:e.occupation,topic:e.topic,twitterURL:e.twitterURL,linkedinURL:e.linkedInURL},e._id)}))}):(0,r.jsx)("div",{className:"text-xl text-black font-bold text-center lg:text-left mt-5",children:"This event has no speakers"})})]}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between items-start mt-16 lg:mt-36 mb-20 lg:mb-32 px-5 lg:px-16 2xl:px-0",children:[(0,r.jsx)("div",{className:"w-full lg:w-1/2","data-aos":"fade-right",children:(0,r.jsx)("div",{className:"text-5xl lg:text-6xl xl:text-7xl text-darkBlue font-bold text-center lg:text-left mb-14 lg:mb-0",children:"Sponsors"})}),(0,r.jsx)("div",{className:"w-full lg:w-1/2","data-aos":"fade-left",children:(0,r.jsx)("div",{className:"flex flex-col justify-center items-start mt-5",children:(0,r.jsx)("div",{className:"w-full text-base lg:text-lg font-normal text-center lg:text-left",children:"A big thanks to our sponsors for pitching in and helping keep these sessions free for attendees"})})})]}),(0,r.jsx)("div",{className:"w-full h-1 bg-blue mt-8 rounded-lg","data-aos":"fade"}),(0,r.jsx)("div",{className:"flex flex-col lg:flex-row justify-end items-start mt-6 lg:mt-14 mb-20 lg:mb-32 px-5 lg:px-16 2xl:px-0",children:(0,r.jsx)("div",{className:"w-full lg:w-1/2",children:(0,r.jsxs)("div",{className:"flex flex-col justify-center items-start mt-5",children:[(0,r.jsx)("div",{className:"w-full text-base lg:text-xl font-semibold text-center lg:text-left mt-10","data-aos":"fade-left",children:"Register and join us on this day for an amazing experience"}),(0,r.jsxs)("div",{className:"mt-10 w-full flex flex-col lg:flex-row justify-center items-center md:justify-start","data-aos":"fade-right",children:[(0,r.jsx)("button",{onClick:function(){(null===u||void 0===u?void 0:u.attendeeCount)!==(null===u||void 0===u?void 0:u.capacity)&&"Upcoming"===(null===u||void 0===u?void 0:u.status)&&e.push({pathname:"/events/".concat(t,"/register"),query:{eventName:null===u||void 0===u?void 0:u.name,headerImage:null===u||void 0===u?void 0:u.headerImage}})},className:"py-4 px-14 text-white rounded-lg shadow-md duration-150 transition ease-in text-xl ".concat((null===u||void 0===u?void 0:u.attendeeCount)!==(null===u||void 0===u?void 0:u.capacity)&&"Upcoming"===(null===u||void 0===u?void 0:u.status)?"bg-gradientBlue hover:bg-gradientPurple":"bg-gray-500 cursor-default"),children:"Register Here"}),(null===u||void 0===u?void 0:u.attendeeCount)===(null===u||void 0===u?void 0:u.capacity)?(0,r.jsx)("p",{className:"px-10 mt-8 lg:mt-0 text-red-500 text-center lg:text-left",children:"Event Capacity Reached (".concat(null===u||void 0===u?void 0:u.capacity,"/").concat(null===u||void 0===u?void 0:u.capacity,")")}):(0,r.jsx)("div",{})]})]})})})]}):(0,r.jsx)("div",{className:" flex justify-center items-center",style:{height:"90vh"},children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gradientBlue"})})}),(0,r.jsx)(c.Z,{})]})}},79358:function(e,t,n){"use strict";n.d(t,{Xf:function(){return a},Q3:function(){return s},Jh:function(){return i}});var r=n(88767),l=n(84417);function a(){return(0,r.useQuery)("EVENTS_LIST",l.Y.getEvents)}function s(e){return(0,r.useQuery)(["EVENT_BY_ID",{eventId:e}],l.Y.getEvent)}function i(){return(0,r.useQuery)("LATEST_EVENTS",l.Y.getLatestEvents)}},50878:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]",function(){return n(12938)}])},39227:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,l=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){l=!0,a=c}finally{try{r||null==i.return||i.return()}finally{if(l)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return l}})}},function(e){e.O(0,[937,556,445,617,610,321,291,774,888,179],(function(){return t=50878,e(e.s=t);var t}));var t=e.O();_N_E=t}]);