(function(e){function t(t){for(var a,i,s=t[0],c=t[1],d=t[2],u=0,p=[];u<s.length;u++)i=s[u],n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={"UMEBURA-light":0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(){return Promise.resolve()},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="../";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;o.push([12,"chunk-vendors","chunk-common"]),r()})({12:function(e,t,r){e.exports=r("4048")},4048:function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.state.loading?e._e():r("div",{staticClass:"scoreboard"},[r("div",{staticClass:"board",attrs:{id:"board__middle"}}),r("div",{staticClass:"board",attrs:{id:"board__left"}}),r("div",{staticClass:"board",attrs:{id:"board__right"}}),r("div",{staticClass:"hidden",attrs:{id:"container"}},[r("div",{attrs:{id:"flags"}},[r("div",{style:e.P1Flag,attrs:{id:"flag1"}}),r("div",{style:e.P2Flag,attrs:{id:"flag2"}})]),r("div",{attrs:{id:"score1"}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("div",{key:e.tournament.player[0].score,staticClass:"score",style:e.P1Score})]),r("div",{staticClass:"score--after",style:e.BoScore})],1),r("div",{attrs:{id:"score2"}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("div",{key:e.tournament.player[1].score,staticClass:"score",style:e.P2Score})]),r("div",{staticClass:"score--after",style:e.BoScore})],1),r("div",{staticClass:"playerboard",attrs:{id:"player1"}},[e._v(e._s(e.playerBoard[0]))]),r("div",{staticClass:"playerboard",attrs:{id:"player2"}},[e._v(e._s(e.playerBoard[1]))]),r("div",{attrs:{id:"stage"}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("div",{key:e.tournament.progress},[e._v("\n          "+e._s(e.tournament.progress)+"\n        ")])])],1)])])},o=[],i=r("f499"),s=r.n(i),c=r("db0c"),d=r.n(c),l=r("422b"),u=r("d27d"),p=r("109c"),b=r("e01a"),y={name:"App",data(){return{state:{loading:!0},playerBoard:["",""],tl:null,tournament:b["f"]}},computed:{P1Flag(){const e=`url('../pic/flag/${this.tournament.player[0].country}.svg')`;return{"background-size":"cover","background-image":e,"background-repeat":"no-repeat","background-position":"center center"}},P2Flag(){const e=`url('../pic/flag/${this.tournament.player[1].country}.svg')`;return{"background-size":"cover","background-image":e,"background-repeat":"no-repeat","background-position":"center center"}},BoScore(){const e=`url('../pic/score-board/UMEBURA/bo${this.tournament.bo}-0.png')`;return{"background-size":"contain","background-image":e,"background-repeat":"no-repeat","background-position":"center center"}},P1Score(){const e=`url('../pic/score-board/UMEBURA/bo${this.tournament.bo}-${this.tournament.player[0].score}.png')`;return{"background-size":"contain","background-image":e,"background-repeat":"no-repeat","background-position":"center center"}},P2Score(){const e=`url('../pic/score-board/UMEBURA/bo${this.tournament.bo}-${this.tournament.player[1].score}.png')`;return{"background-size":"contain","background-image":e,"background-repeat":"no-repeat","background-position":"center center"}}},methods:{async waitForReplicants(){await NodeCG.waitForReplicants(...d()(this.Rep)),this.state.loading=!1,this.toName(),this.$nextTick().then(()=>{this.setInitAnimation()})},setInitAnimation(){const e=new p["b"]({pause:!0});e.to("#board__middle",.5,{top:"0px",repeat:0,ease:p["a"].Linear,delay:0,yoyo:!1}).to("#board__left",.8,{left:"0px",repeat:0,ease:p["a"].Linear,delay:.4,yoyo:!1},"targetPoint").to("#board__right",.8,{left:"0px",repeat:0,ease:p["a"].Linear,delay:.4,yoyo:!1},"targetPoint").to(".hidden",.8,{opacity:1,repeat:0,ease:p["a"].Linear,delay:.6,yoyo:!1},"targetPoint");const t=new p["b"]({repeat:-1});t.to(".playerboard",.5,{opacity:0,repeat:0,delay:5,onComplete:this.toTwitter}).to(".playerboard",.5,{opacity:1,repeat:0,delay:0}).to(".playerboard",.5,{opacity:0,repeat:0,delay:5,onComplete:this.toName}).to(".playerboard",.5,{opacity:1,repeat:0,delay:0})},toTwitter(){this.playerBoard=[`＠${this.tournament.player[0].twitter}`,`＠${this.tournament.player[1].twitter}`]},toName(){this.playerBoard=[this.tournament.player[0].displayName,this.tournament.player[1].displayName]}},created(){this.OPTIONS=u,this.FLAGS=l,this.Rep={},Object.defineProperty(this.OPTIONS,"_isVue",{value:!0,enumerable:!1}),Object.defineProperty(this.FLAGS,"_isVue",{value:!0,enumerable:!1}),Object.defineProperty(this.Rep,"_isVue",{value:!0,enumerable:!1}),this.Rep.Tournament=nodecg.Replicant("tournament",{defaultValue:b["f"]}),this.Rep.Tournament.on("change",e=>{this.tournament=JSON.parse(s()(e))})},mounted(){this.waitForReplicants()}},g=y,f=(r("a9bb"),r("2877")),m=Object(f["a"])(g,n,o,!1,null,null,null),h=m.exports;a["a"].config.productionTip=!1,new a["a"]({render:e=>e(h)}).$mount("#app")},"9e30":function(e,t,r){},a9bb:function(e,t,r){"use strict";var a=r("9e30"),n=r.n(a);n.a}});