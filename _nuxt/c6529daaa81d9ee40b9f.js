(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{394:function(t,n,e){"use strict";e.r(n);e(16);var r=e(2),o={methods:{signout:function(){this.$store.commit("session/signout"),this.redirect("/")}},computed:{isSignedIn:function(){return null!=this.$store.state.session.sessionToken}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{redirect:t.redirect});case 1:case"end":return n.stop()}}),n)})))()}},c=e(29),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Sign out")]),t._v(" "),1==t.isSignedIn?e("div",[e("button",{staticClass:"pure-button pure-button-primary",on:{click:function(n){return n.preventDefault(),t.signout()}}},[e("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","sign-out-alt"]}}),t._v(" Sign out\n    ")],1)]):e("div",[e("h2",[t._v("You aren't signed in")]),t._v(" "),e("nuxt-link",{staticClass:"pure-button pure-button-primary",attrs:{to:"/signin"}},[e("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","sign-in-alt"]}}),t._v(" Sign in\n    ")],1)],1)])}),[],!1,null,null,null);n.default=component.exports}}]);