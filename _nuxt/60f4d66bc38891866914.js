(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{395:function(e,t,n){"use strict";n.r(t);n(16);var r=n(2),o=n(69),c={data:function(){return{answer:0,voteResult:0}},methods:{vote:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=(n=e.$store.state.session.sessionToken)){t.next=4;break}return e.voteResult=401,t.abrupt("return");case 4:return t.prev=4,t.next=7,o.vote(e.theme.themeID,n,e.answer);case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(4),e.voteResult=400,t.abrupt("return");case 13:e.voteResult=200,e.redirect("/result#!".concat(e.theme.themeID));case 15:case"end":return t.stop()}}),t,null,[[4,9]])})))()}},computed:{isSignedIn:function(){return null!=this.$store.state.session.sessionToken}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=parseInt(e.route.hash.slice(2),10),t.next=4,o.getTheme(n);case 4:return t.t0=t.sent,t.t1=e.redirect,t.abrupt("return",{theme:t.t0,redirect:t.t1});case 9:t.prev=9,t.t2=t.catch(0),e.error({statusCode:404,message:"This page could not be found"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},v=n(29),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.theme.title))]),e._v(" "),n("p",[e._v(e._s(e.theme.description))]),e._v(" "),1==e.isSignedIn?n("div",{staticClass:"pure-u-1 pure-u-md-1-2"},[n("form",{staticClass:"pure-form"},[e._l(e.theme.choices,(function(t,r){return n("label",{key:t,staticClass:"pure-radio pure-input-1",attrs:{for:t}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"radio",name:"optionsRadios",id:t},domProps:{value:r,checked:e._q(e.answer,r)},on:{change:function(t){e.answer=r}}}),e._v("\n        "+e._s(t)+"\n      ")])})),e._v(" "),n("button",{staticClass:"pure-button pure-input-1 pure-button-primary",on:{click:function(t){return t.preventDefault(),e.vote()}}},[n("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","vote-yea"]}}),e._v(" Vote\n      ")],1)],2),e._v(" "),200==e.voteResult?n("p",[e._v("Success! Thank you for voting")]):e._e(),e._v(" "),400==e.voteResult?n("p",[e._v("Sorry, failed to vote...")]):e._e(),e._v(" "),401==e.voteResult?n("p",[e._v("Please sign in to vote")]):e._e()]):n("div",[n("h2",[e._v("You aren't signed in")]),e._v(" "),n("nuxt-link",{staticClass:"pure-button pure-button-primary",attrs:{to:"/signin"}},[n("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","sign-in-alt"]}}),e._v(" Sign in\n    ")],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);