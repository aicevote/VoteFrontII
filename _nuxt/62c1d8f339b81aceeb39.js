(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{246:function(t,e,r){"use strict";r.r(e);r(18);var n=r(3),o=r(45),c={computed:{isSignedIn:function(){return null!=this.$store.state.session.sessionToken},isVisitedHome:function(){var t=this.$store.state.session.isVisitedHome;return this.$store.commit("session/visitHome"),t}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(n=null===(r=t.route.query)||void 0===r?void 0:r.sessionid)){e.next=4;break}return e.next=4,t.store.commit("session/signin",n);case 4:return e.next=6,o.getAllArticles();case 6:return c=e.sent.related.reduce((function(t,e){return t.concat(e)})).sort((function(a,b){return b.publishedAt-a.publishedAt})),e.next=9,o.getAllThemes();case 9:return e.t0=e.sent.sort((function(a,b){return b.topicality-a.topicality})),e.t1=c,e.abrupt("return",{themes:e.t0,articles:e.t1});case 12:case"end":return e.stop()}}),e)})))()}},l=r(26),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[1!=t.isVisitedHome?r("div",[r("h1",[t._v("Hello, new user!")]),t._v(" "),r("nuxt-link",{staticClass:"pure-button pure-button-primary",attrs:{to:"/about"}},[t._v("Let's see what AICEVOTE is!")])],1):t._e(),t._v(" "),r("h2",[t._v("Voting themes")]),t._v(" "),t._l(t.themes,(function(e){return r("div",{key:e.title},[r("nuxt-link",{attrs:{to:"/"+(t.isSignedIn?"vote":"result")+"#!"+e.themeID}},[r("img",{staticClass:"pure-img pure-u-1-24",attrs:{src:e.imageURI}}),t._v(" "),r("h3",{staticClass:"pure-u-20-24"},[t._v(t._s(e.title))])]),t._v(" "),r("p",[t._v(t._s(e.description))])],1)})),t._v(" "),r("h2",[t._v("Related articles")]),t._v(" "),t._l(t.articles,(function(article){return r("a",{key:article.publishedAt,staticClass:"pure-u-1 pure-u-md-1-3 pure-u-lg-1-5 pure-u-xl-1-7",attrs:{target:"_blank",href:article.uri}},[r("img",{staticClass:"pure-img",attrs:{src:article.uriToImage}}),t._v(" "),r("p",[t._v(t._s(article.title+" ("+article.source+")"))])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);