(function(t){function e(e){for(var o,r,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},i=[];function r(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-02ea3472":"94b0b7a8","chunk-126bd423":"d016c3c9"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/video-platform/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("bc3a"),i=n.n(a),r=n("a7fe"),s=n.n(r),c=n("9062"),l=n.n(c),u=(n("e40d"),n("4989"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layoutWrap",attrs:{id:"app"}},[n("Navbar"),n("router-view",{staticClass:"main p-4"}),n("Footer"),n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1)}),d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-navbar"},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"link-text"},[t._v("首頁")])]),n("router-link",{attrs:{to:"/collect"}},[n("i",{staticClass:"fa fa-gratipay",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"link-text"},[t._v("收藏")])])],1)])},f=[],m={name:"Navbar"},v=m,h=n("2877"),g=Object(h["a"])(v,p,f,!1,null,null,null),y=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[t._v(" © Copyright "+t._s(t.year)+" by mei "),n("br"),t._v("無商業用途 ")])},w=[],I={name:"Footer",data:function(){return{year:(new Date).getFullYear()}}},C=I,O=Object(h["a"])(C,b,w,!1,null,null,null),_=O.exports,L={name:"App",components:{Navbar:y,Footer:_},computed:{isLoading:function(){return this.$store.state.isLoading}}},k=L,j=(n("5c0b"),Object(h["a"])(k,u,d,!1,null,null,null)),D=j.exports,E=(n("d3b7"),n("8c4f")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.videoItems,(function(e){return n("div",{key:e.id,staticClass:"col-lg-3 col-md-4 col-sm-6 item mb-3"},[n("div",{ref:"cardItem",refInFor:!0,staticClass:"card h-100 border-0 cover"},[n("img",{staticClass:"card-img-top",class:{imgInitHeight:t.imgInitHeight},attrs:{src:e.snippet.thumbnails.high.url,alt:"videoImage"},on:{click:function(n){return t.playVideo(e.contentDetails.videoId)}}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(e.snippet.title.substr(0,25))+" ...")])])])])})),0)])])},H=[],P=(n("4160"),n("159b"),{name:"Home",data:function(){return{imgInitHeight:!0}},computed:{videoItems:function(){return this.$store.state.videoItems}},methods:{playVideo:function(t){this.$router.push("/play-video/".concat(t))},scrollHandler:function(t){1!==t&&(this.imgInitHeight=!1);var e=window.scrollY,n=e+window.innerHeight;this.$refs.cardItem.forEach((function(t){var o=t.getBoundingClientRect().top+e+t.getBoundingClientRect().height/2;n>o&&t.classList.remove("cover")}))}},mounted:function(){this.$store.dispatch("getPlayListItems"),window.addEventListener("scroll",this.scrollHandler)},updated:function(){this.scrollHandler(1)},destroyed:function(){window.removeEventListener("scroll",this.scrollHandler)}}),A=P,S=Object(h["a"])(A,x,H,!1,null,null,null),G=S.exports;o["a"].use(E["a"]);var $=[{path:"/",name:"Home",component:G},{path:"/collect",name:"Collect",component:function(){return n.e("chunk-02ea3472").then(n.bind(null,"0c03"))}},{path:"/play-video/:videoId",name:"PlayVideo",component:function(){return n.e("chunk-126bd423").then(n.bind(null,"2708"))}}],B=new E["a"]({routes:$}),M=B,T=(n("99af"),n("2f62"));o["a"].use(T["a"]);var F=new T["a"].Store({state:{videoItems:[],videoItem:{},isLoading:!1},mutations:{VIDEOITEMS:function(t,e){t.videoItems=e},VIDEOITEM:function(t,e){t.videoItem=e},LOADING:function(t,e){t.isLoading=e}},actions:{getPlayListItems:function(t){t.commit("LOADING",!0);var e="".concat("https://www.googleapis.com/youtube/v3/","channels?part=contentDetails&id=UC27M3BS9uxhJfPjYYys7y8w&key=").concat("AIzaSyBHR01v7_4A95DajFWf-OGkCxBWGoKfKLo");i.a.get(e).then((function(t){var e=t.data.items[0].contentDetails.relatedPlaylists.uploads,n="".concat("https://www.googleapis.com/youtube/v3/","playlistItems?part=snippet,contentDetails&playlistId=").concat(e,"&key=").concat("AIzaSyBHR01v7_4A95DajFWf-OGkCxBWGoKfKLo","&maxResults=50");return i.a.get(n)})).then((function(e){t.commit("VIDEOITEMS",e.data.items),t.commit("LOADING",!1)}))},getVideo:function(t,e){t.commit("LOADING",!0);var n="https://www.googleapis.com/youtube/v3/videos?id=".concat(e,"&key=").concat("AIzaSyBHR01v7_4A95DajFWf-OGkCxBWGoKfKLo","&part=snippet,contentDetails");i.a.get(n).then((function(e){t.commit("VIDEOITEM",e.data.items[0]),t.commit("LOADING",!1)})).catch((function(t){return console.log(t)}))}},modules:{}});o["a"].config.productionTip=!1,o["a"].use(s.a,i.a),o["a"].component("Loading",l.a),new o["a"]({router:M,store:F,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.8c4a7897.js.map