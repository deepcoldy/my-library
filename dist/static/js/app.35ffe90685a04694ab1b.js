webpackJsonp([1],{"+Mcf":function(t,e){},"/eQD":function(t,e){},"5LVj":function(t,e){},"5kWq":function(t,e){},"5oVr":function(t,e){},"Cj3+":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("tIUf");var a=n("qCpv"),o=n.n(a),r=(n("lrMw"),n("7YS2")),i=n.n(r),c=(n("y+mr"),n("3JdW")),s=n.n(c),l=(n("XDqQ"),n("Axha")),u=n.n(l),d=(n("f1Vh"),n("ZQVe")),f=n.n(d),p=(n("XmAh"),n("il3B")),h=(n("eqfM"),n("/QYm")),m=(n("FO5P"),n("woHG")),v=(n("i0mo"),n("Hkar")),b=(n("OWWB"),n("1fWZ")),_=(n("3Lne"),n("SSsa")),k=(n("I4j4"),n("7fQT")),w=(n("gi6D"),n("XPjg")),g=(n("MY4N"),n("0zAV")),q=n("7+uW"),x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var y=n("VU/8")({name:"App"},x,!1,function(t){n("+Mcf")},null,null).exports,C=n("/ocq"),V=(n("qONS"),n("UQTY")),$=n.n(V),B=n("mtWM"),L=n.n(B),R={data:function(){return{account:"",password:""}},components:{Indicator:$.a,Field:g.a,Cell:b.a,CellGroup:v.a,Button:_.a,NavBar:m.a,Toast:h.a,Dialog:p.a},methods:{goRegister:function(){this.$router.push({name:"Register"})},login:function(){var t=this;this.account&&this.password?(L.a.defaults.withCredentials=!0,L.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",L.a.post("http://"+location.hostname+":7001/login",{account:this.account,password:this.password}).then(function(e){e.data;t.$router.push({name:"Profile"})}).catch(function(){p.a.alert({title:"登录失败"})})):h.a.fail("请填写完整")},wechatLogin:function(){location.href="http://library-api.iscode.cn/auth/weixin"}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"登录","right-text":"注册"},on:{"click-right":t.goRegister}}),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:"账号",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(e){t.account=""}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),t._v(" "),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),t._v(" "),n("van-button",{staticClass:"button",attrs:{type:"default"},on:{click:t.wechatLogin}},[t._v("微信登录")])],1)},staticRenderFns:[]};var F=n("VU/8")(R,D,!1,function(t){n("REtY")},"data-v-2e4fa0f4",null).exports,U={data:function(){return{account:"",name:"",password:"",number:""}},components:{Indicator:$.a,Field:g.a,Cell:b.a,CellGroup:v.a,Button:_.a,NavBar:m.a,Toast:h.a,Dialog:p.a},methods:{backLogin:function(){this.$router.push({name:"Login"})},register:function(){var t=this;this.account&&this.name&&this.password&&this.number?L.a.post("http://"+location.hostname+":7001/register",{account:this.account,name:this.name,password:this.password,number:this.number}).then(function(e){h.a.success("注册成功，请登录"),t.$router.push({name:"Login"})}).catch(function(){p.a.alert({title:"注册失败"})}):h.a.fail("请填写完整")}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"注册","left-text":"返回","left-arrow":""},on:{"click-left":t.backLogin}}),t._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:"账号",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(e){t.account=""}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),t._v(" "),n("van-field",{attrs:{label:"姓名",icon:"clear",placeholder:"请输入姓名",required:""},on:{"click-icon":function(e){t.name=""}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("van-field",{attrs:{label:"学号",icon:"clear",placeholder:"请输入学号",required:""},on:{"click-icon":function(e){t.number=""}},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),t._v(" "),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("van-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.register}},[t._v("注册")])],1)},staticRenderFns:[]};var j=n("VU/8")(U,N,!1,function(t){n("weL/")},"data-v-3b156570",null).exports,E={data:function(){return{profile:{name:"",student_number:"",borrow_times:""}}},components:{Cell:b.a,CellGroup:v.a},methods:{init:function(){var t=this;L.a.get("http://"+location.hostname+":7001/profile").then(function(e){var n=e.data;t.profile={name:n.name,student_number:n.student_number,borrow_times:n.borrow_times.toString()}})}},created:function(){this.init()}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("van-nav-bar",{attrs:{title:"个人信息"}}),this._v(" "),e("van-cell-group",[e("van-cell",{attrs:{title:"姓名",value:this.profile.name}}),this._v(" "),e("van-cell",{attrs:{title:"学号",value:this.profile.student_number}}),this._v(" "),e("van-cell",{attrs:{title:"总借书次数",value:this.profile.borrow_times}})],1)],1)},staticRenderFns:[]},T=n("VU/8")(E,M,!1,null,null,null).exports,A={data:function(){return{search:"",result:[]}},components:{Indicator:$.a},mounted:function(){console.log(this.$route),this.search=this.$route.query.q},watch:{search:function(t){this.$router.replace({path:"/search",query:{q:t}}),t&&this.searchBooks()}},methods:{searchBooks:function(){var t=this;$.a.open(),L.a.get("http://"+location.hostname+":7001/search",{params:{q:this.search}}).then(function(e){$.a.close(),console.log(e),t.result=e.data}).catch(function(t){$.a.close(),console.log(t)})},goDetail:function(){console.log(this.router),this.router.push("BookDetail")}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-search",{attrs:{placeholder:"请输入要查询的书名或作者"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("div",{staticClass:"blank"}),t._v(" "),t._l(t.result,function(t,e){return n("mt-cell",{key:"cell"+e,attrs:{to:"/BookDetail?id="+t.id,title:t.name,label:t.writer,"is-link":""}})}),t._v(" "),t.result.length?t._e():n("div",{staticClass:"no-result"},[t._v("暂无查询结果")])],2)],1)},staticRenderFns:[]};var O=n("VU/8")(A,I,!1,function(t){n("OV+j")},"data-v-5a5d7edd",null).exports,Q={data:function(){return{id:1,book:{}}},components:{Panel:k.a,Button:_.a},methods:{init:function(){var t=this;$.a.open(),L.a.get("http://"+location.hostname+":7001/search/detail",{params:{id:this.id}}).then(function(e){var n=e.data;$.a.close(),t.book={name:n.name,writer:n.writer,score:Number(n.score),publisher:n.publisher,price:Number(n.price).toFixed(2)+"元",available_number:n.available_number,total_number:n.total_number}}).catch(function(t){$.a.close(),console.log(t)})}},created:function(){this.id=this.$route.query.id,this.init()}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-panel",{attrs:{title:t.book.name,desc:t.book.writer,status:t.book.available_number?"可借，剩余"+t.book.available_number+"本":"已借空"}},[n("div",{staticClass:"content"},[n("div",[t._v("出版社："+t._s(t.book.publisher))]),t._v(" "),n("div",[t._v("馆藏："+t._s(t.book.total_number)+"本")]),t._v(" "),n("div",[t._v("价格："+t._s(t.book.price))]),t._v(" "),n("van-rate",{model:{value:t.book.score,callback:function(e){t.$set(t.book,"score",e)},expression:"book.score"}})],1),t._v(" "),n("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{size:"small",type:"primary"}},[t._v("预约借阅")])],1)])},staticRenderFns:[]};var W=n("VU/8")(Q,S,!1,function(t){n("5oVr")},"data-v-adb3fa5e",null).exports;q.default.use(C.a);var Y=new C.a({routes:[{path:"/",name:"Login",component:F},{path:"/register",name:"Register",component:j},{path:"/profile",name:"Profile",component:T},{path:"/search",name:"Search",component:O},{path:"/BookDetail",name:"BookDetail",component:W}]});q.default.use(g.a),q.default.use(w.a),q.default.use(k.a),q.default.use(_.a),q.default.use(b.a),q.default.use(v.a),q.default.use(m.a),q.default.use(h.a),q.default.use(p.a),q.default.config.productionTip=!1,q.default.component(f.a.name,f.a),q.default.component(u.a.name,u.a),q.default.component(s.a.name,s.a),q.default.component(i.a.name,i.a),q.default.component(o.a.name,o.a),new q.default({el:"#app",router:Y,components:{App:y},template:"<App/>"})},"OV+j":function(t,e){},REtY:function(t,e){},ULTG:function(t,e){},XDqQ:function(t,e){},ZmGI:function(t,e){},f1Vh:function(t,e){},f4F5:function(t,e){},joTY:function(t,e){},lrMw:function(t,e){},qONS:function(t,e){},tIUf:function(t,e){},wA3Z:function(t,e){},"weL/":function(t,e){},"y+mr":function(t,e){},znX2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.35ffe90685a04694ab1b.js.map