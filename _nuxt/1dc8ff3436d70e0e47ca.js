(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{402:function(t,n,e){"use strict";e.r(n);var o={computed:{isSignedIn:function(){return null!=this.$store.state.session.sessionToken},authURI:function(){return"https://api.aicevote.com/auth/twitter?callback=".concat(location.origin,"/")}}},r=e(26),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Sign in")]),t._v(" "),1==t.isSignedIn?e("div",[e("h2",[t._v("You're already signed in!")]),t._v(" "),e("p",[e("nuxt-link",{staticClass:"pure-button pure-button-primary",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home fa-fw"}),t._v("\n        Go to home\n      ")])],1)]):e("div",[e("p",[e("a",{staticClass:"pure-button pure-button-primary",attrs:{href:t.authURI}},[e("i",{staticClass:"fab fa-twitter fa-fw"}),t._v("\n        Sign in with Twitter\n      ")])]),t._v(" "),e("p",[e("nuxt-link",{staticClass:"pure-button pure-button-primary",attrs:{to:"/"}},[t._v("Continue without sign in")])],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);