webpackJsonp([1],{"0i+I":function(n,e){},BeuX:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("7+uW"),i=t("NYxO"),o={state:{msg:"",sendMsg:"",inpageMsg:""},mutations:{updateMsg:function(n,e){n.msg=e.msg},updateSendMsg:function(n,e){n.sendMsg=e.sendMsg},updateInpageMsg:function(n,e){n.inpageMsg=e.inpageMsg}},actions:{},modules:{}},r=[{name:"micro-app",entry:"//localhost:4001",activeRule:"/#/sub/micro-app",container:"#subapp-viewport"},{name:"sub-app",entry:"//localhost:4002",activeRule:"/#/sub/sub-app",container:"#subapp-viewport"}],s=r.concat([{name:"micro-app-inpage",entry:"//localhost:4011",activeRule:"/#/main/inpage",container:"#microapp-inpage-viewport"},{name:"sub-app-inpage",entry:"//localhost:4012",activeRule:"/#/main/inpage",container:"#subapp-inpage-viewport"}]),c=r,p={name:"App",data:function(){return{microApps:c,current:"",msg:""}},computed:{childMsg:function(){return this.$store&&this.$store.state&&this.$store.state.sendMsg}},methods:{goto:function(n){history.pushState(null,n.activeRule,n.activeRule),this.resetCurrentPath()},jumpToMsinpage:function(){this.$router.push({path:"/main/mainpage"}),this.resetCurrentPath()},jumpToApps:function(){this.$router.push({path:"/main/inpage"}),this.resetCurrentPath()},sendMessageToChildren:function(n){this.$actions.setGlobalState({msg:n})},resetCurrentPath:function(){var n="/"+window.location.hash;this.current=n}},created:function(){var n="/"+window.location.hash;this.microApps.findIndex(function(e){return e.activeRule===n})>=0&&(this.current=n)}},u={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"layout-header"},[t("div",{staticClass:"logo"},[n._v("QIANKUN-MAIN")]),n._v(" "),t("ul",{staticClass:"sub-apps"},[t("li",{class:{active:"/#/main/mainpage"===n.current},on:{click:function(e){return n.jumpToMsinpage()}}},[n._v("\n        main-app\n      ")]),n._v(" "),n._l(n.microApps,function(e){return t("li",{key:e.name,class:{active:e.activeRule===n.current},on:{click:function(t){return n.goto(e)}}},[n._v("\n        "+n._s(e.name)+"\n      ")])}),n._v(" "),t("li",{class:{active:"/#/main/inpage"===n.current},on:{click:n.jumpToApps}},[n._v("\n        communicate btw sub apps\n      ")]),n._v(" "),t("li",[t("el-input",{attrs:{size:"mini",placeholder:"与micro-app子应用通信"},on:{change:n.sendMessageToChildren},model:{value:n.msg,callback:function(e){n.msg=e},expression:"msg"}})],1),n._v(" "),t("li",[n._v("\n        "+n._s(n.childMsg||"👉 Msg Receiving from micro-app...")+"\n      ")])],2)]),n._v(" "),t("div",{attrs:{id:"subapp-viewport"}},[t("router-view")],1),n._v(" "),t("router-view")],1)},staticRenderFns:[]};var l=t("VU/8")(p,u,!1,function(n){t("ZHsP")},null,null).exports,d=t("zL8q"),m=t.n(d),g=(t("tvR6"),t("Khg2")),f={beforeLoad:[function(n){console.log("%c before load ","background:#A0522D ; padding: 1px; border-radius: 3px;  color: #fff",n.name)}],beforeMount:[function(n){console.log("%c before mount ","background:#32CD32 ; padding: 1px; border-radius: 3px;  color: #fff",n.name)}],afterMount:[function(n){console.log("%c after mount ","background:#006400 ; padding: 1px; border-radius: 3px;  color: #fff",n.name)}],beforeUnmount:[function(n){console.log("%c before unmount ","background:#C71585 ; padding: 1px; border-radius: 3px;  color: #fff",n.name)}],afterUnmount:[function(n){console.log("%c after unload ","background:#800080 ; padding: 1px; border-radius: 3px;  color: #fff",n.name)}]},h=t("/ocq"),v={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",[e("router-view")],1)},staticRenderFns:[]},b=t("VU/8")({name:"MainAppEnterPage",data:function(){return{msg:"QIANKUN MAIN"}}},v,!1,null,null,null).exports,_={name:"mainpage",data:function(){return{microApp:null}},methods:{handleLoadSubApp:function(){this.microApp=Object(g.b)({name:"sub-app-inpage",entry:"//localhost:4012",container:"#content",props:{}})},handleUnmountSubApp:function(){console.log("this.microApp's lifeCycle",this.microApp),this.microApp.unmount()}}},M={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"mainpage-Container"},[n._v("\n  Test page jump btw mainapp and microapp.\n  "),t("h3",[n._v("To load sub-app-inpage by manual trigger ⬇️")]),n._v(" "),t("el-button",{attrs:{plain:""},on:{click:n.handleLoadSubApp}},[n._v("handle load sub-app")]),n._v(" "),t("el-button",{attrs:{plain:""},on:{click:n.handleUnmountSubApp}},[n._v("handle unmount sub-app")]),n._v(" "),t("div",{attrs:{id:"content"}})],1)},staticRenderFns:[]};var A=t("VU/8")(_,M,!1,function(n){t("BeuX")},"data-v-0b136cf8",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"inpage-container"},[e("div",{attrs:{id:"microapp-inpage-viewport"}}),this._v(" "),e("div",{attrs:{id:"subapp-inpage-viewport"}})])}]};var x=t("VU/8")({name:"Subpages",methods:{}},w,!1,function(n){t("0i+I")},"data-v-64a04bae",null).exports;a.default.use(h.a);var C=h.a.prototype.push;h.a.prototype.push=function(n,e,t){return e||t?C.call(this,n,e,t):C.call(this,n).catch(function(n){return n})};var y=new h.a({routes:[{path:"/",redirect:"/main/*"},{path:"/main/*",name:"MainAppEnterPage",exact:!0,component:b,children:[{path:"/main/mainpage",name:"mainpage",exact:!0,component:A},{path:"/main/inpage",name:"inpage",exact:!0,component:x}]}]});a.default.config.productionTip=!1,a.default.use(i.a),a.default.use(m.a);var R=new i.a.Store(o);a.default.prototype.$store=R,new a.default({router:y,_store:R,render:function(n){return n(l)}}).$mount("#app");var $=Object(g.a)({mt:"init",msg:"",sendMsg:"",inpageMsg:""});$.onGlobalStateChange(function(n,e){console.log("main state change",n),R.commit("updateMsg",n),R.commit("updateSendMsg",n),R.commit("updateInpageMsg",n)}),a.default.prototype.$actions=$,Object(g.c)(s,f),Object(g.d)()},ZHsP:function(n,e){},tvR6:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.61693fbfb7d6ba64d7f7.js.map