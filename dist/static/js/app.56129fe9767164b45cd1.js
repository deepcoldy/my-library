webpackJsonp([1],{"+2nd":function(e,t){},"+Mcf":function(e,t){},"/eQD":function(e,t){},"5LVj":function(e,t){},"5kWq":function(e,t){},ANuU:function(e,t){},"Cj3+":function(e,t){},FHjr:function(e,t){},Lr4G:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("tIUf");var a=n("qCpv"),o=n.n(a),i=(n("lrMw"),n("7YS2")),r=n.n(i),c=(n("y+mr"),n("3JdW")),s=n.n(c),l=(n("XDqQ"),n("Axha")),u=n.n(l),d=(n("f1Vh"),n("ZQVe")),p=n.n(d),f=(n("3ab0"),n("bHMa")),h=(n("nOaS"),n("pIDD")),v=(n("XmAh"),n("il3B")),m=(n("eqfM"),n("/QYm")),b=(n("FO5P"),n("woHG")),_=(n("i0mo"),n("Hkar")),g=(n("OWWB"),n("1fWZ")),w=(n("3Lne"),n("SSsa")),k=(n("I4j4"),n("7fQT")),y=(n("gi6D"),n("XPjg")),q=(n("MY4N"),n("0zAV")),x=n("7+uW"),$={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var C=n("VU/8")({name:"App"},$,!1,function(e){n("+Mcf")},null,null).exports,L=n("/ocq"),D=(n("qONS"),n("UQTY")),B=n.n(D),F=n("mtWM"),U=n.n(F),V={data:function(){return{account:"",password:"",openid:""}},created:function(){console.log(this.$route),this.$route.query&&this.$route.query.openid&&(this.openid=this.$route.query.openid)},components:{Indicator:B.a,Field:q.a,Cell:g.a,CellGroup:_.a,Button:w.a,NavBar:b.a,Toast:m.a,Dialog:v.a},methods:{goRegister:function(){this.$router.push({name:"Register",query:{openid:this.openid}})},login:function(){var e=this;this.account&&this.password?U()({url:"api/login",method:"POST",headers:{"content-type":"application/json"},data:{account:this.account,password:this.password,open_id:this.openid}}).then(function(t){t.data;e.$router.push({name:"Profile"})}).catch(function(){v.a.alert({title:e.openid?"账号或密码错误，绑定失败":"账号或密码错误，登录失败"})}):m.a.fail("请填写完整")},wechatLogin:function(){location.href="http://library.iscode.cn/api/auth/weixin"}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{attrs:{title:e.openid?"绑定账号":"登录","right-text":"注册"},on:{"click-right":e.goRegister}}),e._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:"账号",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(t){e.account=""}},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}),e._v(" "),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),n("van-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.login}},[e._v(e._s(e.openid?"绑定微信":"登录"))]),e._v(" "),e.openid?e._e():n("van-button",{staticClass:"button",attrs:{type:"default"},on:{click:e.wechatLogin}},[e._v("微信登录")])],1)},staticRenderFns:[]};var N=n("VU/8")(V,I,!1,function(e){n("+2nd")},"data-v-5da36b41",null).exports,R={data:function(){return{account:"",name:"",password:"",number:""}},components:{Indicator:B.a,Field:q.a,Cell:g.a,CellGroup:_.a,Button:w.a,NavBar:b.a,Toast:m.a,Dialog:v.a},methods:{backLogin:function(){this.$router.push({name:"Login"})},register:function(){var e=this;this.account&&this.name&&this.password&&this.number?U.a.post("api/register",{account:this.account,name:this.name,password:this.password,number:this.number}).then(function(t){m.a.success("即可绑定微信"),e.$router.push({name:"Login",query:{openid:e.$route.query.openid}})}).catch(function(){v.a.alert({title:"注册失败"})}):m.a.fail("请填写完整")}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{attrs:{title:"注册","left-text":"直接登陆","left-arrow":""},on:{"click-left":e.backLogin}}),e._v(" "),n("van-cell-group",[n("van-field",{attrs:{label:"账号",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(t){e.account=""}},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}),e._v(" "),n("van-field",{attrs:{label:"姓名",icon:"clear",placeholder:"请输入姓名",required:""},on:{"click-icon":function(t){e.name=""}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("van-field",{attrs:{label:"学号",icon:"clear",placeholder:"请输入学号",required:""},on:{"click-icon":function(t){e.number=""}},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),e._v(" "),n("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),n("van-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)},staticRenderFns:[]};var j=n("VU/8")(R,T,!1,function(e){n("Lr4G")},"data-v-1f2c19b9",null).exports,M={data:function(){return{profile:{name:"",student_number:"",borrow_times:""}}},components:{Cell:g.a,CellGroup:_.a,Loading:h.a,Dialog:v.a,Toast:m.a,Tag:f.a},methods:{init:function(){var e=this;U.a.get("api/profile").then(function(t){var n=t.data;"unbind"!==n.status?e.profile={name:n.name,student_number:n.student_number,borrow_times:n.borrow_times.toString(),bind_weixin:!!n.open_id}:v.a.alert({message:"微信登陆成功！您还未绑定账号，请前去绑定。"}).then(function(){e.$router.push({name:"Login",query:{openid:n.open_id}})})}).catch(function(){m.a.fail("未登陆"),e.$router.push({name:"Login"})})},bindWechat:function(){var e=this;this.profile.bind_weixin?U.a.get("api/unbind").then(function(){e.profile.bind_weixin=""}):location.href="http://library.iscode.cn/api/auth/weixin"}},created:function(){this.init()}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("van-nav-bar",{attrs:{title:"个人信息"}}),e._v(" "),e.profile.name?n("van-cell-group",[n("van-cell",{attrs:{title:"姓名",value:e.profile.name}}),e._v(" "),n("van-cell",{attrs:{title:"学号",value:e.profile.student_number}}),e._v(" "),n("van-cell",{attrs:{title:"总借书次数",value:e.profile.borrow_times}}),e._v(" "),n("van-cell",{attrs:{title:"微信",icon:"wechat",value:e.profile.bind_weixin?"点击解绑":"点击绑定"},on:{click:e.bindWechat}},[n("template",{slot:"title"},[n("span",{staticClass:"van-cell-text"},[e._v("微信")]),e._v(" "),n("van-tag",{attrs:{type:e.profile.bind_weixin?"primary":"danger"}},[e._v(e._s(e.profile.bind_weixin?"已绑定":"未绑定"))])],1)],2)],1):e._e(),e._v(" "),e.profile.name?e._e():n("van-loading",{attrs:{color:"white"}})],1)},staticRenderFns:[]},W=n("VU/8")(M,S,!1,null,null,null).exports,A={data:function(){return{search:"",result:[]}},components:{Indicator:B.a},mounted:function(){console.log(this.$route),this.search=this.$route.query.q},watch:{search:function(e){this.$router.replace({path:"/search",query:{q:e}}),e&&this.searchBooks()}},methods:{searchBooks:function(){var e=this;B.a.open(),U.a.get("api/search",{params:{q:this.search}}).then(function(t){B.a.close(),console.log(t),e.result=t.data}).catch(function(e){B.a.close(),console.log(e)})},goDetail:function(){console.log(this.router),this.router.push("BookDetail")}}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mt-search",{attrs:{placeholder:"请输入要查询的书名或作者"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[n("div",{staticClass:"blank"}),e._v(" "),e._l(e.result,function(e,t){return n("mt-cell",{key:"cell"+t,attrs:{to:"/BookDetail?id="+e.id,title:e.name,label:e.writer,"is-link":""}})}),e._v(" "),e.result.length?e._e():n("div",{staticClass:"no-result"},[e._v("暂无查询结果")])],2)],1)},staticRenderFns:[]};var H=n("VU/8")(A,G,!1,function(e){n("FHjr")},"data-v-386d186a",null).exports,O={data:function(){return{id:1,book:{}}},components:{Panel:k.a,Button:w.a},methods:{init:function(){var e=this;B.a.open(),U.a.get("api/search/detail",{params:{id:this.id}}).then(function(t){var n=t.data;B.a.close(),e.book={name:n.name,writer:n.writer,score:Number(n.score),publisher:n.publisher,price:Number(n.price).toFixed(2)+"元",available_number:n.available_number,total_number:n.total_number}}).catch(function(e){B.a.close(),console.log(e)})}},created:function(){this.id=this.$route.query.id,this.init()}},P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-panel",{attrs:{title:e.book.name,desc:e.book.writer,status:e.book.available_number?"可借，剩余"+e.book.available_number+"本":"已借空"}},[n("div",{staticClass:"content"},[n("div",[e._v("出版社："+e._s(e.book.publisher))]),e._v(" "),n("div",[e._v("馆藏："+e._s(e.book.total_number)+"本")]),e._v(" "),n("div",[e._v("价格："+e._s(e.book.price))]),e._v(" "),n("van-rate",{model:{value:e.book.score,callback:function(t){e.$set(e.book,"score",t)},expression:"book.score"}})],1),e._v(" "),n("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{size:"small",type:"primary"}},[e._v("预约借阅")])],1)])},staticRenderFns:[]};var Q=n("VU/8")(O,P,!1,function(e){n("rfiI")},"data-v-b81f414e",null).exports;x.default.use(L.a);var E=new L.a({routes:[{path:"/",name:"Login",component:N},{path:"/register",name:"Register",component:j},{path:"/profile",name:"Profile",component:W},{path:"/search",name:"Search",component:H},{path:"/BookDetail",name:"BookDetail",component:Q}]});x.default.use(q.a),x.default.use(y.a),x.default.use(k.a),x.default.use(w.a),x.default.use(g.a),x.default.use(_.a),x.default.use(b.a),x.default.use(m.a),x.default.use(v.a),x.default.use(h.a),x.default.use(f.a),x.default.config.productionTip=!1,x.default.component(p.a.name,p.a),x.default.component(u.a.name,u.a),x.default.component(s.a.name,s.a),x.default.component(r.a.name,r.a),x.default.component(o.a.name,o.a),new x.default({el:"#app",router:E,components:{App:C},template:"<App/>"})},ULTG:function(e,t){},XDqQ:function(e,t){},ZmGI:function(e,t){},f1Vh:function(e,t){},f4F5:function(e,t){},joTY:function(e,t){},lrMw:function(e,t){},qONS:function(e,t){},rfiI:function(e,t){},tIUf:function(e,t){},wA3Z:function(e,t){},"y+mr":function(e,t){},znX2:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.56129fe9767164b45cd1.js.map