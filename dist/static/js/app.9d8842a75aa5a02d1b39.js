webpackJsonp([1],{"+Mcf":function(t,e){},"/eQD":function(t,e){},"5LVj":function(t,e){},"5kWq":function(t,e){},"8W4r":function(t,e){},AGzS:function(t,e){},ANuU:function(t,e){},"Cj3+":function(t,e){},FHjr:function(t,e){},Lr4G:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("tIUf");var n=a("qCpv"),o=a.n(n),i=(a("lrMw"),a("7YS2")),r=a.n(i),s=(a("y+mr"),a("3JdW")),l=a.n(s),c=(a("XDqQ"),a("Axha")),u=a.n(c),d=(a("f1Vh"),a("ZQVe")),v=a.n(d),p=(a("3ab0"),a("bHMa")),f=(a("nOaS"),a("pIDD")),h=(a("XmAh"),a("il3B")),m=(a("eqfM"),a("/QYm")),_=(a("FO5P"),a("woHG")),b=(a("i0mo"),a("Hkar")),k=(a("OWWB"),a("1fWZ")),g=(a("3Lne"),a("SSsa")),w=(a("I4j4"),a("7fQT")),y=(a("gi6D"),a("XPjg")),x=(a("MY4N"),a("0zAV")),C=a("7+uW"),$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var q=a("VU/8")({name:"App"},$,!1,function(t){a("+Mcf")},null,null).exports,B=a("/ocq"),D=(a("qONS"),a("UQTY")),L=a.n(D),F=a("mtWM"),R=a.n(F),T={data:function(){return{account:"",password:"",openid:""}},created:function(){console.log(this.$route),this.$route.query&&this.$route.query.openid&&(this.openid=this.$route.query.openid),this.init()},components:{Indicator:L.a,Field:x.a,Cell:k.a,CellGroup:b.a,Button:g.a,NavBar:_.a,Toast:m.a,Dialog:h.a},methods:{goRegister:function(){this.$router.push({name:"Register",query:{openid:this.openid}})},login:function(){var t=this;this.account&&this.password?R()({url:"api/login",method:"POST",headers:{"content-type":"application/json"},data:{account:this.account,password:this.password,open_id:this.openid}}).then(function(e){e.data;t.$router.push({name:"Profile"})}).catch(function(){h.a.alert({title:t.openid?"账号或密码错误，绑定失败":"账号或密码错误，登录失败"})}):m.a.fail("请填写完整")},wechatLogin:function(){location.href="http://library.iscode.cn/api/auth/weixin"},init:function(){var t=this;R.a.get("api/profile").then(function(e){"unbind"!==e.data.status&&(m.a.success("自动登录"),t.$router.push({name:"Profile"}))})}}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:t.openid?"绑定账号":"登录","right-text":"注册"},on:{"click-right":t.goRegister}}),t._v(" "),a("van-cell-group",[a("van-field",{attrs:{label:"账号",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(e){t.account=""}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),t._v(" "),a("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("van-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.login}},[t._v(t._s(t.openid?"绑定微信":"登录"))]),t._v(" "),t.openid?t._e():a("van-button",{staticClass:"button",attrs:{type:"default"},on:{click:t.wechatLogin}},[t._v("微信登录")])],1)},staticRenderFns:[]};var S=a("VU/8")(T,G,!1,function(t){a("AGzS")},"data-v-43ab35b4",null).exports,U={data:function(){return{account:"",name:"",password:"",number:""}},components:{Indicator:L.a,Field:x.a,Cell:k.a,CellGroup:b.a,Button:g.a,NavBar:_.a,Toast:m.a,Dialog:h.a},methods:{backLogin:function(){this.$router.push({name:"Login"})},register:function(){var t=this;this.account&&this.name&&this.password&&this.number?R.a.post("api/register",{account:this.account,name:this.name,password:this.password,number:this.number}).then(function(e){m.a.success("即可绑定微信"),t.$router.push({name:"Login",query:{openid:t.$route.query.openid}})}).catch(function(){h.a.alert({title:"注册失败"})}):m.a.fail("请填写完整")}}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"注册","left-text":"直接登陆","left-arrow":""},on:{"click-left":t.backLogin}}),t._v(" "),a("van-cell-group",[a("van-field",{attrs:{label:"账号",icon:"clear",placeholder:"请输入用户名",required:""},on:{"click-icon":function(e){t.account=""}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),t._v(" "),a("van-field",{attrs:{label:"姓名",icon:"clear",placeholder:"请输入姓名",required:""},on:{"click-icon":function(e){t.name=""}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("van-field",{attrs:{label:"学号",icon:"clear",placeholder:"请输入学号",required:""},on:{"click-icon":function(e){t.number=""}},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),t._v(" "),a("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),a("van-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.register}},[t._v("注册")])],1)},staticRenderFns:[]};var N=a("VU/8")(U,V,!1,function(t){a("Lr4G")},"data-v-1f2c19b9",null).exports,E={data:function(){return{profile:{name:"",student_number:"",borrow_times:""}}},components:{Cell:k.a,CellGroup:b.a,Loading:f.a,Dialog:h.a,Toast:m.a,Tag:p.a},methods:{init:function(){var t=this;R.a.get("api/profile").then(function(e){var a=e.data;"unbind"!==a.status?t.profile={name:a.name,student_number:a.student_number,borrow_times:a.borrow_times.toString(),bind_weixin:!!a.open_id}:h.a.alert({message:"微信登陆成功！您还未绑定账号，请前去绑定。"}).then(function(){t.$router.push({name:"Login",query:{openid:a.open_id}})})}).catch(function(){m.a.fail("未登陆"),t.$router.push({name:"Login"})})},bindWechat:function(){var t=this;this.profile.bind_weixin?R.a.get("api/unbind").then(function(){t.profile.bind_weixin=""}):location.href="http://library.iscode.cn/api/auth/weixin"},goSearch:function(){this.$router.push({name:"Search"})},goBorrowed:function(){this.$router.push({name:"Borrowed"})}},created:function(){this.init()}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("van-nav-bar",{attrs:{title:"个人信息"}}),t._v(" "),t.profile.name?a("div",[a("van-cell-group",[a("van-cell",{attrs:{title:"姓名",value:t.profile.name}}),t._v(" "),a("van-cell",{attrs:{title:"学号",value:t.profile.student_number}}),t._v(" "),a("van-cell",{attrs:{value:t.profile.borrow_times},on:{click:function(e){t.goBorrowed()}}},[a("template",{slot:"title"},[a("span",{staticClass:"van-cell-text"},[t._v("借书总次数")]),t._v(" "),a("van-tag",{attrs:{type:"primary"}},[t._v("点击查看")])],1)],2),t._v(" "),a("van-cell",{attrs:{title:"微信",icon:"wechat",value:t.profile.bind_weixin?"点击解绑":"点击绑定"},on:{click:function(e){t.bindWechat()}}},[a("template",{slot:"title"},[a("span",{staticClass:"van-cell-text"},[t._v("微信登陆")]),t._v(" "),a("van-tag",{attrs:{type:t.profile.bind_weixin?"primary":"danger"}},[t._v(t._s(t.profile.bind_weixin?"已绑定":"未绑定"))])],1)],2)],1),t._v(" "),a("van-button",{staticClass:"button",attrs:{size:"large",type:"primary"},on:{click:function(e){t.goSearch()}}},[t._v("搜索图书")])],1):t._e(),t._v(" "),t.profile.name?t._e():a("van-loading",{attrs:{color:"white"}})],1)},staticRenderFns:[]};var j=a("VU/8")(E,W,!1,function(t){a("k6FR")},"data-v-4ed7eac1",null).exports,A={data:function(){return{history:[]}},components:{Cell:k.a,CellGroup:b.a,Dialog:h.a,Toast:m.a,Tag:p.a},methods:{init:function(){var t=this;L.a.open(),R.a.get("api/book/borrowed").then(function(e){var a=e.data;L.a.close(),console.log(a),t.history=a}).catch(function(){L.a.close(),m.a.fail("未登陆"),t.$router.push({name:"Login"})})},returnBook:function(t){var e=this;L.a.open(),R.a.get("api/book/return",{params:{id:t}}).then(function(){L.a.close(),e.init()}).catch(function(){L.a.close(),m.a.fail("还书失败")})},renewBook:function(t){var e=this;L.a.open(),R.a.get("api/book/renew",{params:{id:t}}).then(function(){L.a.close(),e.init()}).catch(function(){L.a.close(),m.a.fail("续借超限")})}},created:function(){this.init()}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("van-nav-bar",{attrs:{title:"借书历史"}}),t._v(" "),a("van-cell-group",t._l(t.history,function(e,n){return a("van-cell",{key:"history"+n},[a("template",{slot:"title"},[a("span",{staticClass:"van-cell-text"},[t._v(t._s(e.name))]),t._v(" "),a("van-tag",{attrs:{type:e.returned?"primary":"danger"}},[t._v(t._s(e.returned?"已还":"未还"))]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("借书日期："+t._s(e.borrow_date))]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("还书日期："+t._s(e.return_date))]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("续借次数："+t._s(e.renew)+"次")])],1),t._v(" "),e.returned?t._e():a("template",{slot:"right-icon"},[a("div",{staticClass:"button-group"},[a("van-button",{attrs:{type:e.due?"disabled":"default"},on:{click:function(a){!e.due&&t.renewBook(e.record_id)}}},[t._v(t._s(e.due?"已逾期":"续借"))]),t._v(" "),a("div",{staticStyle:{width:"10px"}}),t._v(" "),a("van-button",{attrs:{type:"primary"},on:{click:function(a){t.returnBook(e.record_id)}}},[t._v("还书")])],1)])],2)})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.history.length,expression:"!history.length"}],staticClass:"no-result"},[t._v(" 暂无借书历史 ")])],1)},staticRenderFns:[]};var H=a("VU/8")(A,I,!1,function(t){a("dIxD")},null,null).exports,M={data:function(){return{search:"",result:[]}},components:{Indicator:L.a},mounted:function(){console.log(this.$route),this.search=this.$route.query.q},watch:{search:function(t){this.$router.replace({path:"/search",query:{q:t}}),t&&this.searchBooks()}},methods:{searchBooks:function(){var t=this;L.a.open(),R.a.get("api/search",{params:{q:this.search}}).then(function(e){L.a.close(),console.log(e),t.result=e.data}).catch(function(t){L.a.close(),console.log(t)})},goDetail:function(){console.log(this.router),this.router.push("BookDetail")}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mt-search",{attrs:{placeholder:"请输入要查询的书名或作者"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("div",{staticClass:"blank"}),t._v(" "),t._l(t.result,function(t,e){return a("mt-cell",{key:"cell"+e,attrs:{to:"/BookDetail?id="+t.id,title:t.name,label:t.writer,"is-link":""}})}),t._v(" "),t.result.length?t._e():a("div",{staticClass:"no-result"},[t._v("暂无查询结果")])],2)],1)},staticRenderFns:[]};var P=a("VU/8")(M,K,!1,function(t){a("FHjr")},"data-v-386d186a",null).exports,z={data:function(){return{id:1,book:{}}},components:{Panel:w.a,Button:g.a,Dialog:h.a,Toast:m.a},methods:{borrow:function(){var t=this;2!==this.book.status?0!==this.book.status?h.a.confirm({title:"确定借阅？将开始计入借书时间。"}).then(function(){L.a.open(),R.a.get("api/book/borrow",{params:{book_id:t.id}}).then(function(e){e.data;L.a.close(),m.a.success("借书成功"),t.book.available_number--,t.book.status=0}).catch(function(t){L.a.close(),h.a.alert({title:"借书失败，请重试"}).then(function(){location.reload()}),console.log(t)})}):h.a.alert({title:"您已经借了此书，请还书后再借"}):h.a.confirm({title:"未登录，前往登录？"}).then(function(){t.$router.push({name:"Login"})})},init:function(){var t=this;L.a.open(),R.a.get("api/search/detail",{params:{id:this.id}}).then(function(e){var a=e.data;L.a.close(),t.book={name:a.name,writer:a.writer,score:Number(a.score),publisher:a.publisher,price:Number(a.price).toFixed(2)+"元",available_number:a.available_number,total_number:a.total_number,status:a.status}}).catch(function(t){L.a.close(),console.log(t)})}},created:function(){this.id=this.$route.query.id,this.init()}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-panel",{attrs:{title:t.book.name,desc:t.book.writer,status:t.book.available_number?"剩余"+t.book.available_number+"本":"已借空"}},[a("div",{staticClass:"content"},[a("div",[t._v("出版社："+t._s(t.book.publisher))]),t._v(" "),a("div",[t._v("馆藏："+t._s(t.book.total_number)+"本")]),t._v(" "),a("div",[t._v("价格："+t._s(t.book.price))]),t._v(" "),a("van-rate",{model:{value:t.book.score,callback:function(e){t.$set(t.book,"score",e)},expression:"book.score"}})],1),t._v(" "),a("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[a("van-button",{attrs:{size:"small",type:"primary",disabled:!t.book.available_number},on:{click:t.borrow}},[t._v("我要借阅")])],1)])},staticRenderFns:[]};var Q=a("VU/8")(z,O,!1,function(t){a("tp9k")},"data-v-572f56fd",null).exports,X={data:function(){return{books:[]}},components:{Cell:k.a,CellGroup:b.a,Dialog:h.a,Toast:m.a,Tag:p.a},methods:{init:function(){var t=this;L.a.open(),R.a.get("api/book/latest").then(function(e){var a=e.data;L.a.close(),t.books=a}).catch(function(t){L.a.close(),console.log(t)})},goDetail:function(t){this.$router.push({path:"/BookDetail?id="+t})}},created:function(){this.init()}},Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("van-nav-bar",{attrs:{title:"新书推荐"}}),t._v(" "),a("van-cell-group",t._l(t.books,function(e,n){return a("van-cell",{key:"books"+n,attrs:{"is-link":""},on:{click:function(a){t.goDetail(e.id)}}},[a("template",{slot:"title"},[a("span",{staticClass:"van-cell-text"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("上架日期："+t._s(e.date))]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("馆藏总数："+t._s(e.total_number)+"本")]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("在馆数量："+t._s(e.available_number)+"本")])])],2)})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.books.length,expression:"!books.length"}],staticClass:"no-result"},[t._v(" 暂无新书推荐 ")])],1)},staticRenderFns:[]};var Z=a("VU/8")(X,Y,!1,function(t){a("qGFm")},null,null).exports,J={data:function(){return{books:[]}},components:{Cell:k.a,CellGroup:b.a,Dialog:h.a,Toast:m.a,Tag:p.a},methods:{init:function(){var t=this;L.a.open(),R.a.get("api/book/rank").then(function(e){var a=e.data;L.a.close(),t.books=a}).catch(function(t){L.a.close(),console.log(t)})},goDetail:function(t){this.$router.push({path:"/BookDetail?id="+t})}},created:function(){this.init()}},tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("van-nav-bar",{attrs:{title:"借阅排行"}}),t._v(" "),a("van-cell-group",t._l(t.books,function(e,n){return a("van-cell",{key:"books"+n,attrs:{"is-link":""},on:{click:function(a){t.goDetail(e.id)}}},[a("template",{slot:"title"},[a("span",{staticClass:"van-cell-text"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("借阅次数："+t._s(e.count))]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("馆藏总数："+t._s(e.total_number)+"本")]),t._v(" "),a("div",{staticClass:"van-cell__label"},[t._v("在馆数量："+t._s(e.available_number)+"本")])])],2)})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.books.length,expression:"!books.length"}],staticClass:"no-result"},[t._v(" 暂无借阅 ")])],1)},staticRenderFns:[]};var et=a("VU/8")(J,tt,!1,function(t){a("cX3t")},null,null).exports,at={created:function(){document.body.style.background="#F0EFF5"}},nt={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{src:"https://zoneke-img.b0.upaiyun.com/df1c069f19f6438f1d10c9b16b367cd8.jpeg",alt:""}})},staticRenderFns:[]};var ot=a("VU/8")(at,nt,!1,function(t){a("8W4r")},"data-v-34c8017c",null).exports;C.default.use(B.a);var it=new B.a({routes:[{path:"/",name:"Login",component:S,meta:{title:"Kiko Library"}},{path:"/register",name:"Register",component:N,meta:{title:"Kiko Library"}},{path:"/profile",name:"Profile",component:j,meta:{title:"Kiko Library"}},{path:"/borrowed",name:"Borrowed",component:H,meta:{title:"Kiko Library"}},{path:"/search",name:"Search",component:P,meta:{title:"Kiko Library"}},{path:"/BookDetail",name:"BookDetail",component:Q,meta:{title:"Kiko Library"}},{path:"/latest",name:"LatestBook",component:Z,meta:{title:"Kiko Library"}},{path:"/BorrowRank",name:"BorrowRank",component:et,meta:{title:"Kiko Library"}},{path:"/History",name:"History",component:ot,meta:{title:"往期回顾"}}]});it.beforeEach(function(t,e,a){document.title=t.meta.title,a()}),C.default.use(x.a),C.default.use(y.a),C.default.use(w.a),C.default.use(g.a),C.default.use(k.a),C.default.use(b.a),C.default.use(_.a),C.default.use(m.a),C.default.use(h.a),C.default.use(f.a),C.default.use(p.a),C.default.config.productionTip=!1,C.default.component(v.a.name,v.a),C.default.component(u.a.name,u.a),C.default.component(l.a.name,l.a),C.default.component(r.a.name,r.a),C.default.component(o.a.name,o.a),new C.default({el:"#app",router:it,components:{App:q},template:"<App/>"})},ULTG:function(t,e){},XDqQ:function(t,e){},ZmGI:function(t,e){},cX3t:function(t,e){},dIxD:function(t,e){},f1Vh:function(t,e){},f4F5:function(t,e){},joTY:function(t,e){},k6FR:function(t,e){},lrMw:function(t,e){},qGFm:function(t,e){},qONS:function(t,e){},tIUf:function(t,e){},tp9k:function(t,e){},wA3Z:function(t,e){},"y+mr":function(t,e){},znX2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9d8842a75aa5a02d1b39.js.map