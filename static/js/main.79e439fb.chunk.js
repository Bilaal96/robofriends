(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(13),a(1)),s=a(2),l=a(4),u=a(3),h=a(5),m=(a(14),function(e){var t=e.id,a=e.name,n=e.username,o=e.email;return r.a.createElement("div",{id:"Card",className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"".concat(a,"'s Profile Picture")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,"Username: @",n),r.a.createElement("p",null,o)))}),d=function(e){var t=e.robots;return r.a.createElement("section",{id:"CardList"},t.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,name:e.name,username:e.username,email:e.email})})))},f=function(e){var t=e.searchChange;return r.a.createElement("div",{id:"SearchBox",className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},p=(a(15),function(e){var t=e.children;return r.a.createElement("div",{id:"Scroll",className:"pa3 ma3",style:{overflowY:"scroll",border:"2px solid #A3DBDE",height:"800px"}},t)}),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={hasError:!1},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",{id:"App-loading",className:"f2 tc"},"Ooops, something went wrong"):this.props.children}}]),t}(n.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,o=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{id:"page-title",className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(b,null,r.a.createElement(d,{robots:o}))))):r.a.createElement("h1",{id:"App-loading",className:"f1 tc"},"Loading... ")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.79e439fb.chunk.js.map