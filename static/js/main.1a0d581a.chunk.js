(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"./images/onix.png",clicked:!1},{id:2,image:"./images/articuno.png",clicked:!1},{id:3,image:"./images/machamp.png",clicked:!1},{id:4,image:"./images/jolteon.png",clicked:!1},{id:5,image:"./images/lapras.png",clicked:!1},{id:6,image:"./images/pikachu.png",clicked:!1},{id:7,image:"./images/pidgeot.png",clicked:!1},{id:8,image:"./images/arcanine.png",clicked:!1},{id:9,image:"./images/ninetales.png",clicked:!1},{id:10,image:"./images/poliwhirl.png",clicked:!1},{id:11,image:"./images/bulbasaur.png",clicked:!1},{id:12,image:"./images/charizard.png",clicked:!1},{id:13,image:"./images/kangaskhan.png",clicked:!1},{id:14,image:"./images/mewtwo.png",clicked:!1},{id:15,image:"./images/eevee.png",clicked:!1},{id:16,image:"./images/scyther.png",clicked:!1},{id:17,image:"./images/gyarados.png",clicked:!1},{id:18,image:"./images/wartortle.png",clicked:!1},{id:19,image:"./images/bellsprout.png",clicked:!1},{id:20,image:"./images/psyduck.png",clicked:!1}]},,,function(e,a,i){e.exports=i(19)},,,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var t=i(0),c=i.n(t),n=i(2),r=i.n(n),o=(i(15),i(3)),s=i(4),l=i(7),m=i(5),g=i(8),d=(i(16),function(e){return c.a.createElement("div",{onClick:function(){return e.setClicked(e.id)},className:"card col-md-3"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),u=(i(17),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),k=(i(18),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),p=i(6),h=0,f=0,S="Click on a Pok\xe9mon to earn a point! The images will shuffle after each click. The goal is to reach a top score of 20 points by attempting to click on all Pok\xe9mon images only once.",y=function(e){function a(){var e,i;Object(o.a)(this,a);for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];return(i=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={images:p,yourScore:h,topScore:f,clickMessage:S},i.setClicked=function(e){var a=i.state.images,t=a.filter(function(a){return a.id===e});if(t[0].clicked){console.log("Your Score: "+h),console.log("Best Score: "+f),h=0,S="You guessed incorrectly! Try again!";for(var c=0;c<a.length;c++)a[c].clicked=!1;i.setState({clickMessage:S}),i.setState({yourScore:h}),i.setState({images:a})}else if(h<11)t[0].clicked=!0,S="You guessed correctly! Keep guessing!",++h>f&&(f=h,i.setState({topScore:f})),a.sort(function(e,a){return.5-Math.random()}),i.setState({images:a}),i.setState({yourScore:h}),i.setState({clickMessage:S});else{t[0].clicked=!0,h=0,S="Winner! Winner! Wanna Try again!",f=20,i.setState({topScore:f});for(var n=0;n<a.length;n++)a[n].clicked=!1;a.sort(function(e,a){return.5-Math.random()}),i.setState({images:a}),i.setState({yourScore:h}),i.setState({clickMessage:S})}},i}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(k,null,"The Clicky Game",c.a.createElement("div",null,c.a.createElement("h3",{className:"scoreSummary card-header"},"Your Score: ",this.state.yourScore,c.a.createElement("br",null),"Top Score: ",this.state.topScore),c.a.createElement("br",null),c.a.createElement("h3",{className:"scoreSummary"},this.state.clickMessage))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.images.map(function(a){return c.a.createElement(d,{setClicked:e.setClicked,id:a.id,key:a.id,image:a.image})}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.1a0d581a.chunk.js.map