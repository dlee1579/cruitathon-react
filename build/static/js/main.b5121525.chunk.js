(this["webpackJsonpcruitathon-react"]=this["webpackJsonpcruitathon-react"]||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),l=a(8),m=(a(33),a(2)),i=(a(34),a(35),a(11)),s=a(9),u=a(10);function d(){var e=Object(s.a)(["\n    background: var(--home-blue);\n    \n    * {\n        font-family: college-block;\n        color: var(--home-yellow);\n    }\n\n"]);return d=function(){return e},e}var f=function(e){var t,a=e.Team;return t=a?{color:a.color_secondary,background:a.color_primary}:{},c.a.createElement(E,{className:"jumbotron text-center",style:t},c.a.createElement(l.b,{to:"/home"},c.a.createElement("h1",{style:t},"Cruitathon")),c.a.createElement("p",{style:t},"Using College Football data visualizations to prove that my team is better than yours"),c.a.createElement("div",{className:"row justify-content-center text-center"},c.a.createElement("input",{type:"text",id:"teamInput",placeholder:"Team Name",className:"form-control form-control-lg text-center"}),c.a.createElement("div",{id:"search_results"},c.a.createElement("ul",{id:"teamList"}))))},E=u.a.div(d()),v=a(18),h=a(27),b=function(e){var t,a=e.Conference,r=e.Teams,o=Object(n.useState)(!1),m=Object(i.a)(o,2),s=m[0],u=m[1];return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",{className:"mb-0"},c.a.createElement("button",{onClick:function(){return u(!s)},"aria-controls":"example-collapse-text","aria-expanded":s,className:"btn btn-link"},a))),c.a.createElement(h.a,{in:s},c.a.createElement("div",(t={className:"card-body"},Object(v.a)(t,"className","collapse"),Object(v.a)(t,"id","example-collapse-text"),t),r.map((function(e){if(e.conference===a)return c.a.createElement("div",null,c.a.createElement(l.c,{to:"/team/"+e.team},e.team))})))))};function p(){var e=Object(s.a)(["\n    button {\n        border: none;\n    }\n    * {\n        font-family: college-block;\n    }\n\n\n"]);return p=function(){return e},e}var g=function(e){var t=e.Teams;return c.a.createElement(y,{className:"container"},c.a.createElement("div",{className:"row justify-content-md-center"},c.a.createElement("div",{className:"col-xl-4",align:"center"},c.a.createElement("h3",null,"Teams by Conference"),c.a.createElement("div",{className:"accordion"},["ACC","Big Ten","Big 12","Pac-12","SEC"].map((function(e){return c.a.createElement(b,{Conference:e,Teams:t})}))))))},y=u.a.div(p()),N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("http://localhost:5000").then((function(e){return e.json().then((function(e){r(e)}))}))}),[]),c.a.createElement("div",null,c.a.createElement(f,{Teams:a}),c.a.createElement(g,{Teams:a}))};function T(){var e=Object(s.a)(["\n\n    .key_data {\n        border-radius: 10px;\n        padding: 20px;\n        font-weight: bold;\n        font-family: college-block;\n    }\n\n"]);return T=function(){return e},e}var _=function(e){var t;return console.log(e.Team),e.Team?(t={color:e.Team.color_primary,background:e.Team.color_secondary},c.a.createElement(j,{className:"col-xl-6"},c.a.createElement("div",{className:"key_data",style:t},c.a.createElement("h2",null,"Team Name: "+e.Team.team),c.a.createElement("p",null,"# of Commits: "+e.Team.commit_count),c.a.createElement("p",null,"Average Commit Score: "+e.Team.avg_score)))):(t={},"")},j=u.a.div(T()),w=a(26),x=a.n(w),k=function(e){return c.a.createElement("div",{className:"col-xl-4"},c.a.createElement(x.a,{data:e.data,layout:{width:350,height:450,title:"A Fancy Plot"}}))},O=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){var t="http://localhost:5000/team/"+e.match.params.id;fetch(t).then((function(e){return e.json().then((function(e){o(e)}))}))}),[]),c.a.createElement("div",null,c.a.createElement(f,{Team:r.team_aggregate_stats}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(_,{Team:r.team_aggregate_stats})),c.a.createElement("div",{className:"row"},c.a.createElement(k,{data:r.team_position_stats}),c.a.createElement(k,{data:r.team_state_stats}),c.a.createElement(k,{data:r.team_competition_stats}))))};var C=function(){return c.a.createElement("div",null,c.a.createElement(m.a,{path:"/home",component:N}),c.a.createElement(m.a,{path:"/team/:id",component:O}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b5121525.chunk.js.map