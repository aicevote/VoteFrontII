(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{396:function(t,e,n){"use strict";n.r(e);n(16);var r=n(2),o=n(69),c={computed:{isSignedIn:function(){return null!=this.$store.state.session.sessionToken},isVisitedHome:function(){var t=this.$store.state.session.isVisitedHome;return this.$store.commit("session/visitHome"),t}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null!=(r=null===(n=t.route.query)||void 0===n?void 0:n.sessionid)&&(t.store.commit("session/signin",r),t.store.dispatch("session/auth")),e.next=4,o.getAllThemes();case 4:return e.t0=e.sent.sort((function(a,b){return b.topicality-a.topicality})),e.abrupt("return",{themes:e.t0});case 6:case"end":return e.stop()}}),e)})))()}},l=n(29),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[1==t.isVisitedHome?n("h1",[t._v("Hi there!")]):n("div",[n("h1",[t._v("Welcome, new visitor!")]),t._v(" "),n("nuxt-link",{staticClass:"pure-button pure-button-primary",attrs:{to:"/about"}},[n("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","check"]}}),t._v(" Let's see what AICEVOTE is!\n    ")],1)],1),t._v(" "),t._l(t.themes,(function(e){return n("div",{key:e.title},[n("nuxt-link",{attrs:{to:"/"+(t.isSignedIn?"vote":"result")+"#!"+e.themeID}},[n("h2",[t._v(t._s(e.title))])]),t._v(" "),n("p",[t._v(t._s(e.description))])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);