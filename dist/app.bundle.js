(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/BtnControls/index.less":function(e,o,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".btn-controls {\n  width: 490px;\n  margin: 0 auto;\n  display: flex;\n}\n.btn-controls button {\n  width: 100px;\n  height: 30px;\n  margin-right: 30px;\n}\n",""])},"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/CanvasGoMoku/index.less":function(e,o,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".gomoku-canvas {\n  box-shadow: 4px 3px 5px #ccc;\n}\n.canvas-div {\n  margin: 50px auto;\n  width: max-content;\n  height: max-content;\n}\n",""])},"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/DomGoMoku/index.less":function(e,o,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".gomoku {\n  position: relative;\n  width: 450px;\n  height: 450px;\n  margin: 50px auto;\n}\n.gomoku .gomoku-piece {\n  float: left;\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.gomoku .gomoku-black {\n  background: #000;\n  border-radius: 50%;\n  border: 1px solid #fff;\n}\n.gomoku .gomoku-white {\n  background: #fff;\n  border-radius: 50%;\n  border: 1px solid #000;\n}\n.gomoku .gomoku-pieces {\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  z-index: 10;\n}\n.gomoku .gomoku-back {\n  z-index: 1;\n  top: 15px;\n  left: 15px;\n  border: 2px solid #333;\n  position: absolute;\n  width: 420px;\n  height: 420px;\n  background: rgba(23, 1, 3, 0.2);\n  box-shadow: 4px 3px 5px #ccc;\n}\n.gomoku .gomoku-back .gomoku-box {\n  float: left;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  box-sizing: border-box;\n}\n",""])},"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/containers/index.less":function(e,o,n){(e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,".btn {\n  width: 100px;\n  height: 30px;\n}\n",""])},"./src/actions/gomoku.js":function(e,o,n){"use strict";n.r(o),n.d(o,"pushGoMoku",function(){return r}),n.d(o,"gomokuRestore",function(){return s}),n.d(o,"changeGoMokuIndex",function(){return i}),n.d(o,"changeWin",function(){return c});var t=n("./src/constants/actionTypes.js"),r=function(e,o){return{type:t.d,moku:e,index:o}},s=function(){return{type:t.c}},i=function(e){return{type:t.a,index:e}},c=function(e){return{type:t.b,win:e}}},"./src/app/main.js":function(e,o,n){"use strict";n.r(o);var t=n("./node_modules/react/index.js"),r=n.n(t),s=n("./node_modules/react-dom/index.js"),i=n("./node_modules/history/createBrowserHistory.js"),c=n.n(i),a=n("./node_modules/redux/es/index.js"),u=n("./node_modules/redux-thunk/lib/index.js"),l=n.n(u),d=n("./node_modules/redux-logger/dist/redux-logger.js"),p=n("./node_modules/redux-immutable/dist/index.js"),m=n("./node_modules/immutable/dist/immutable.js"),f=n.n(m),b=n("./node_modules/react-router-redux/es/index.js"),x=f.a.fromJS({locationBeforeTransitions:null}),h=n("./src/constants/actionTypes.js"),g=(n("./src/components/BtnControls/index.jsx"),f.a.fromJS(function(){for(var e=[],o=[],n=0;n<15;n++){o.push([]);for(var t=0;t<15;t++)o[n].push(0)}return e.push(o),e}())),j={role:0,size:null},y=Object(p.combineReducers)({router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,o=arguments[1];return o.type===b.b?e.set("locationBeforeTransitions",o.payload):e},index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=arguments[1];switch(o.type){case h.a:return o.index;default:return e}},gomoku:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,o=arguments[1];switch(o.type){case h.d:return e.splice(o.index).push(f.a.fromJS(o.moku));case h.c:return g;default:return e}},win:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,o=arguments[1];switch(o.type){case h.b:return o.win;default:return e}}}),k=(f.a.Map(),c()()),v=Object(b.c)(k),_=(Object(d.createLogger)({stateTransformer:function(e){return f.a.Iterable.isIterable(e)?e.toJS():e}}),Object(a.c)(Object(a.a)(l.a,v))(a.d)),w=n("./src/containers/Root.jsx"),O=c()(),M=_(y,void 0),C=document.getElementById("root");window.defaultStore=M,Object(s.render)(r.a.createElement(w.a,{store:M,history:O}),C)},"./src/components/BtnControls/index.jsx":function(e,o,n){"use strict";(function(e){var t,r=n("./node_modules/redbox-react/lib/index.js"),s=n.n(r),i=n("./node_modules/react-transform-catch-errors/lib/index.js"),c=n.n(i),a=n("./node_modules/react/index.js"),u=n.n(a),l=n("./node_modules/react-transform-hmr/lib/index.js"),d=n.n(l),p=n("./node_modules/react-redux/es/index.js"),m=n("./node_modules/redux/es/index.js"),f=(n("./src/components/BtnControls/index.less"),n("./src/actions/gomoku.js")),b=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}();function x(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var h,g={BtnControls:{displayName:"BtnControls"}},j=d()({filename:"/Users/kotenyo/github/gomoku/src/components/BtnControls/index.jsx",components:g,locals:[e],imports:[u.a]}),y=c()({filename:"/Users/kotenyo/github/gomoku/src/components/BtnControls/index.jsx",components:g,locals:[],imports:[u.a,s.a]}),k=(h="BtnControls",function(e){return j(y(e,h),h)})(Object(p.b)(function(e){return{index:e.get("index"),win:e.get("win"),size:e.get("gomoku").size}},function(e){return{actions:Object(m.b)(Object.assign({},f),e)}})(t=function(e){function o(){var e,n,t;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,s=Array(r),i=0;i<r;i++)s[i]=arguments[i];return n=t=x(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(s))),t.cancelBack=function(){var e=t.props.index,o=t.props.size;e<o-1&&t.props.actions.changeGoMokuIndex(t.props.index+1),t.props.win.size===o&&t.props.actions.changeWin({role:t.props.index%2==0?2:1,size:t.props.size})},t.backPrevious=function(){t.props.index>0&&(t.props.actions.changeGoMokuIndex(t.props.index-1),0!==t.props.win.role&&t.props.actions.changeWin({role:0,size:t.props.size}))},t.rePlay=function(){t.props.actions.changeGoMokuIndex(0),t.props.actions.changeWin({role:0,size:null}),t.props.actions.gomokuRestore()},t.viewHistory=function(){if(0!==t.props.win.role){t.props.actions.changeGoMokuIndex(0);var e=0;!function o(){setTimeout(function(){++e<t.props.size&&(t.props.actions.changeGoMokuIndex(e),o())},1e3)}()}},x(t,n)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,a.Component),b(o,[{key:"render",value:function(){return u.a.createElement("div",{className:"btn-controls"},u.a.createElement("button",{disabled:0===this.props.index?"disabled":"",onClick:this.backPrevious},"悔棋"),u.a.createElement("button",{disabled:this.props.index<this.props.size-1?"":"disabled",onClick:this.cancelBack},"撤销悔棋"),u.a.createElement("button",{disabled:0===this.props.win?"disabled":"",onClick:this.viewHistory},"对局回放"),u.a.createElement("button",{style:{marginRight:0},onClick:this.rePlay},"重新开始"))}}]),o}())||t);o.a=k}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/BtnControls/index.less":function(e,o,n){var t=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/BtnControls/index.less");"string"==typeof t&&(t=[[e.i,t,""]]);var r=n("./node_modules/style-loader/lib/addStyles.js")(t,{hmr:!0,transform:void 0,insertInto:void 0});t.locals&&(e.exports=t.locals),e.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/BtnControls/index.less",function(o){!function(){var o=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/BtnControls/index.less");if("string"==typeof o&&(o=[[e.i,o,""]]),!function(e,o){var n,t=0;for(n in e){if(!o||e[n]!==o[n])return!1;t++}for(n in o)t--;return 0===t}(t.locals,o.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(o)}()}),e.hot.dispose(function(){r()})},"./src/components/CanvasGoMoku/index.jsx":function(e,o,n){"use strict";(function(e){var t,r=n("./node_modules/redbox-react/lib/index.js"),s=n.n(r),i=n("./node_modules/react-transform-catch-errors/lib/index.js"),c=n.n(i),a=n("./node_modules/react/index.js"),u=n.n(a),l=n("./node_modules/react-transform-hmr/lib/index.js"),d=n.n(l),p=n("./node_modules/redux/es/index.js"),m=n("./node_modules/react-redux/es/index.js"),f=(n("./src/components/CanvasGoMoku/index.less"),n("./src/actions/gomoku.js")),b=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}();function x(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var h,g={CanvasGoMoku:{displayName:"CanvasGoMoku"}},j=d()({filename:"/Users/kotenyo/github/gomoku/src/components/CanvasGoMoku/index.jsx",components:g,locals:[e],imports:[u.a]}),y=c()({filename:"/Users/kotenyo/github/gomoku/src/components/CanvasGoMoku/index.jsx",components:g,locals:[],imports:[u.a,s.a]}),k=(h="CanvasGoMoku",function(e){return j(y(e,h),h)})(Object(m.b)(function(e){var o=e.get("index");return{index:o,gomoku:e.get("gomoku").get(o).toJS(),win:e.get("win")}},function(e){return{actions:Object(p.b)(Object.assign({},f),e)}})(t=function(e){function o(){var e,n,t;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,s=Array(r),i=0;i<r;i++)s[i]=arguments[i];return n=t=x(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(s))),t.goMoku=function(e){var o=Math.floor((e.pageX-e.target.offsetLeft)/30),n=Math.floor((e.pageY-e.target.offsetTop)/30),r=t.props.gomoku;if(0===r[n][o]&&0===t.props.win.role){var s=t.props.index%2==0?2:1;r[n][o]=s,t.props.actions.pushGoMoku(r,t.props.index+1),t.props.actions.changeGoMokuIndex(t.props.index+1),t.props.isWin(n,o,s)}},t.renderBox=function(e){var o=t.refs.canvas;if(o.getContext){var n=o.getContext("2d");n.clearRect(0,0,450,450),n.fillStyle="#333",n.beginPath();for(var r=0;r<16;r++)n.moveTo(15,30*r+15),n.lineTo(435,30*r+15),n.stroke();for(var s=0;s<16;s++)n.moveTo(30*s+15,15),n.lineTo(30*s+15,435),n.stroke();for(var i=0;i<e.length;i++)for(var c=0;c<e[i].length;c++)0!==e[i][c]&&(n.beginPath(),n.fillStyle=1===e[i][c]?"#fff":"#000",n.arc(15+30*c,15+30*i,15,0,2*Math.PI,!0),n.fill(),n.fillStyle=1===e[i][c]?"#000":"#fff",n.arc(15+30*c,15+30*i,15,0,2*Math.PI,!0),n.stroke(),n.closePath())}},x(t,n)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,a.Component),b(o,[{key:"componentDidMount",value:function(){this.renderBox(this.props.gomoku)}},{key:"componentWillReceiveProps",value:function(e){this.renderBox(e.gomoku)}},{key:"render",value:function(){return u.a.createElement("div",{className:"canvas-div"},u.a.createElement("canvas",{onClick:this.goMoku,ref:"canvas",width:"450",height:"450",className:"gomoku-canvas"}))}}]),o}())||t);o.a=k}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/CanvasGoMoku/index.less":function(e,o,n){var t=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/CanvasGoMoku/index.less");"string"==typeof t&&(t=[[e.i,t,""]]);var r=n("./node_modules/style-loader/lib/addStyles.js")(t,{hmr:!0,transform:void 0,insertInto:void 0});t.locals&&(e.exports=t.locals),e.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/CanvasGoMoku/index.less",function(o){!function(){var o=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/CanvasGoMoku/index.less");if("string"==typeof o&&(o=[[e.i,o,""]]),!function(e,o){var n,t=0;for(n in e){if(!o||e[n]!==o[n])return!1;t++}for(n in o)t--;return 0===t}(t.locals,o.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(o)}()}),e.hot.dispose(function(){r()})},"./src/components/DomGoMoku/Piece.jsx":function(e,o,n){"use strict";(function(e){var t,r=n("./node_modules/redbox-react/lib/index.js"),s=n.n(r),i=n("./node_modules/react-transform-catch-errors/lib/index.js"),c=n.n(i),a=n("./node_modules/react/index.js"),u=n.n(a),l=n("./node_modules/react-transform-hmr/lib/index.js"),d=n.n(l),p=(n("./src/components/DomGoMoku/index.less"),n("./node_modules/react-redux/es/index.js")),m=n("./node_modules/redux/es/index.js"),f=n("./src/actions/gomoku.js"),b=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}();function x(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var h,g={Piece:{displayName:"Piece"}},j=d()({filename:"/Users/kotenyo/github/gomoku/src/components/DomGoMoku/Piece.jsx",components:g,locals:[e],imports:[u.a]}),y=c()({filename:"/Users/kotenyo/github/gomoku/src/components/DomGoMoku/Piece.jsx",components:g,locals:[],imports:[u.a,s.a]}),k=(h="Piece",function(e){return j(y(e,h),h)})(Object(p.b)(function(e){var o=e.get("index");return{index:o,gomoku:e.get("gomoku").get(o).toJS(),win:e.get("win")}},function(e){return{actions:Object(m.b)(Object.assign({},f),e)}})(t=function(e){function o(){var e,n,t;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,s=Array(r),i=0;i<r;i++)s[i]=arguments[i];return n=t=x(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(s))),t.goMoku=function(){var e=t.props.x,o=t.props.y,n=t.props.gomoku;if(0===n[e][o]&&0===t.props.win.role){var r=t.props.index%2==0?2:1;n[e][o]=r,t.props.actions.pushGoMoku(n,t.props.index+1),t.props.actions.changeGoMokuIndex(t.props.index+1),t.props.isWin(e,o,r)}},x(t,n)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,a.Component),b(o,[{key:"componentWillReceiveProps",value:function(e){var o=this.props.x,n=this.props.y;if(e.gomoku[o][n]==this.props.gomoku[o][n])return!1}},{key:"render",value:function(){var e="gomoku-piece ",o=this.props.gomoku[this.props.x][this.props.y];return 1===o&&(e+="gomoku-white"),2===o&&(e+="gomoku-black"),u.a.createElement("div",{onClick:this.goMoku,className:e})}}]),o}())||t);o.a=k}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/DomGoMoku/index.jsx":function(e,o,n){"use strict";(function(e){var t=n("./node_modules/redbox-react/lib/index.js"),r=n.n(t),s=n("./node_modules/react-transform-catch-errors/lib/index.js"),i=n.n(s),c=n("./node_modules/react/index.js"),a=n.n(c),u=n("./node_modules/react-transform-hmr/lib/index.js"),l=n.n(u),d=(n("./src/components/DomGoMoku/index.less"),n("./src/components/DomGoMoku/Piece.jsx")),p=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}();function m(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var f,b={DomGoMoku:{displayName:"DomGoMoku"}},x=l()({filename:"/Users/kotenyo/github/gomoku/src/components/DomGoMoku/index.jsx",components:b,locals:[e],imports:[a.a]}),h=i()({filename:"/Users/kotenyo/github/gomoku/src/components/DomGoMoku/index.jsx",components:b,locals:[],imports:[a.a,r.a]}),g=(f="DomGoMoku",function(e){return x(h(e,f),f)})(function(e){function o(){var e,n,t;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o);for(var r=arguments.length,s=Array(r),i=0;i<r;i++)s[i]=arguments[i];return n=t=m(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(s))),t.renderPieces=function(){for(var e=[],o=0;o<15;o++)for(var n=0;n<15;n++)e.push(a.a.createElement(d.a,{key:o+"-"+n,x:o,y:n,isWin:t.props.isWin,class:"gomoku-box"}));return e},t.renderBox=function(){for(var e=[],o=0;o<14;o++)for(var n=0;n<14;n++)e.push(a.a.createElement("div",{key:"b-"+o+"-"+n,className:"gomoku-box"}));return e},m(t,n)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,c.Component),p(o,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return a.a.createElement("div",{className:"gomoku"},a.a.createElement("div",{className:"gomoku-pieces"},this.renderPieces()),a.a.createElement("div",{className:"gomoku-back"},this.renderBox()))}}]),o}());o.a=g}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/DomGoMoku/index.less":function(e,o,n){var t=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/DomGoMoku/index.less");"string"==typeof t&&(t=[[e.i,t,""]]);var r=n("./node_modules/style-loader/lib/addStyles.js")(t,{hmr:!0,transform:void 0,insertInto:void 0});t.locals&&(e.exports=t.locals),e.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/DomGoMoku/index.less",function(o){!function(){var o=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/components/DomGoMoku/index.less");if("string"==typeof o&&(o=[[e.i,o,""]]),!function(e,o){var n,t=0;for(n in e){if(!o||e[n]!==o[n])return!1;t++}for(n in o)t--;return 0===t}(t.locals,o.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(o)}()}),e.hot.dispose(function(){r()})},"./src/components/mixins/goMokuMixin.jsx":function(e,o,n){"use strict";(function(e){var t=n("./node_modules/redbox-react/lib/index.js"),r=n.n(t),s=n("./node_modules/react-transform-catch-errors/lib/index.js"),i=n.n(s),c=n("./node_modules/react/index.js"),a=n.n(c),u=n("./node_modules/react-transform-hmr/lib/index.js"),l=n.n(u),d=n("./node_modules/react-redux/es/index.js"),p=n("./node_modules/redux/es/index.js"),m=n("./src/actions/gomoku.js"),f=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}();function b(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}var x={goMokuMixin:{displayName:"goMokuMixin",isInFunction:!0}},h=l()({filename:"/Users/kotenyo/github/gomoku/src/components/mixins/goMokuMixin.jsx",components:x,locals:[e],imports:[a.a]}),g=i()({filename:"/Users/kotenyo/github/gomoku/src/components/mixins/goMokuMixin.jsx",components:x,locals:[],imports:[a.a,r.a]});o.a=function(e){var o,n;return(n="goMokuMixin",function(e){return h(g(e,n),n)})(Object(d.b)(function(e){var o=e.get("index");return{index:o,gomoku:e.get("gomoku").get(o).toJS(),win:e.get("win"),size:e.get("gomoku").size}},function(e){return{actions:Object(p.b)(Object.assign({},m),e)}})(o=function(o){function n(){var e,o,t;!function(e,o){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this);for(var r=arguments.length,s=Array(r),i=0;i<r;i++)s[i]=arguments[i];return o=t=b(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),t.isWin=function(e,o,n){t.props.actions.changeWin({role:0,size:null});var r=t.props.gomoku,s={lrCount:{count:1,order:{0:[-1,0],1:[1,0]}},udCount:{count:1,order:{0:[0,-1],1:[0,1]}},luCount:{count:1,order:{0:[-1,1],1:[1,-1]}},rdCount:{count:1,order:{0:[1,1],1:[-1,-1]}}};for(var i in s)for(var c in s[i].order)for(var a=s[i].order[c][0],u=s[i].order[c][1],l=1;l<5&&!(e+a*l>=15||e+a*l<0||o+u*l>=15||o+u*l<0)&&r[e+a*l][o+u*l]===n;l++)s[i].count++,t.isOverCount(s[i].count)},t.isOverCount=function(e){var o=t.props.index%2==0?2:1;e>=5&&t.props.actions.changeWin({role:o,size:t.props.size})},b(t,o)}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(n,c.Component),f(n,[{key:"render",value:function(){return a.a.createElement(e,{isWin:this.isWin})}}]),n}())||o)}}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/constants/actionTypes.js":function(e,o,n){"use strict";n.d(o,"d",function(){return t}),n.d(o,"c",function(){return r}),n.d(o,"a",function(){return s}),n.d(o,"b",function(){return i});var t="PUSH_GOMOKU",r="GOMOKU_RESTORE",s="CHANGE_GOMOKU_INDEX",i="CHANGE_WIN"},"./src/containers/App.jsx":function(e,o,n){"use strict";(function(e){var t,r,s=n("./node_modules/redbox-react/lib/index.js"),i=n.n(s),c=n("./node_modules/react-transform-catch-errors/lib/index.js"),a=n.n(c),u=n("./node_modules/react/index.js"),l=n.n(u),d=n("./node_modules/react-transform-hmr/lib/index.js"),p=n.n(d),m=n("./node_modules/react-redux/es/index.js"),f=n("./node_modules/react-router-dom/es/index.js"),b=n("./src/components/DomGoMoku/index.jsx"),x=n("./src/components/CanvasGoMoku/index.jsx"),h=n("./src/components/mixins/goMokuMixin.jsx"),g=n("./src/components/BtnControls/index.jsx"),j=(n("./src/containers/index.less"),function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}()),y={App:{displayName:"App"}},k=p()({filename:"/Users/kotenyo/github/gomoku/src/containers/App.jsx",components:y,locals:[e],imports:[l.a]}),v=a()({filename:"/Users/kotenyo/github/gomoku/src/containers/App.jsx",components:y,locals:[],imports:[l.a,i.a]}),_=Object(f.d)(function(e){var o=e.history;return window.reactRouterHistory=o,l.a.createElement("span",null)}),w=(r="App",function(e){return k(v(e,r),r)})(Object(m.b)(function(e){return{win:e.get("win")}})(t=function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,u.Component),j(o,[{key:"renderWin",value:function(){if(0!==this.props.win.role)return l.a.createElement("h1",{style:{width:"100%",textAlign:"center"}},2===this.props.win.role?"黑":"白"," 棋赢了")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement("div",{style:{width:"100%",textAlign:"center"}},this.renderWin(),l.a.createElement(f.b,{to:"/"},l.a.createElement("button",{className:"btn"},"Dom")),l.a.createElement(f.b,{to:"/canvas"},l.a.createElement("button",{className:"btn"},"Canvas")),l.a.createElement(_,null),l.a.createElement(f.c,{exact:!0,path:"/",component:Object(h.a)(b.a)}),l.a.createElement(f.c,{exact:!0,path:"/canvas",component:Object(h.a)(x.a)}),l.a.createElement(g.a,null))))}}]),o}())||t);o.a=w}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/containers/Root.jsx":function(e,o,n){"use strict";(function(e){var t,r=n("./node_modules/redbox-react/lib/index.js"),s=n.n(r),i=n("./node_modules/react-transform-catch-errors/lib/index.js"),c=n.n(i),a=n("./node_modules/react/index.js"),u=n.n(a),l=n("./node_modules/react-transform-hmr/lib/index.js"),d=n.n(l),p=n("./node_modules/react-redux/es/index.js"),m=n("./node_modules/react-router-redux/es/index.js"),f=n("./src/containers/App.jsx"),b=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),x={Root:{displayName:"Root"}},h=d()({filename:"/Users/kotenyo/github/gomoku/src/containers/Root.jsx",components:x,locals:[e],imports:[u.a]}),g=c()({filename:"/Users/kotenyo/github/gomoku/src/containers/Root.jsx",components:x,locals:[],imports:[u.a,s.a]}),j=(t="Root",function(e){return h(g(e,t),t)})(function(e){function o(){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),function(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}(o,a.Component),b(o,[{key:"render",value:function(){var e=this.props,o=e.store,n=e.history;return u.a.createElement(p.a,{store:o},u.a.createElement(m.a,{history:n},u.a.createElement(f.a,null)))}}]),o}());o.a=j}).call(this,n("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/containers/index.less":function(e,o,n){var t=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/containers/index.less");"string"==typeof t&&(t=[[e.i,t,""]]);var r=n("./node_modules/style-loader/lib/addStyles.js")(t,{hmr:!0,transform:void 0,insertInto:void 0});t.locals&&(e.exports=t.locals),e.hot.accept("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/containers/index.less",function(o){!function(){var o=n("./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/containers/index.less");if("string"==typeof o&&(o=[[e.i,o,""]]),!function(e,o){var n,t=0;for(n in e){if(!o||e[n]!==o[n])return!1;t++}for(n in o)t--;return 0===t}(t.locals,o.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(o)}()}),e.hot.dispose(function(){r()})}},[["./src/app/main.js",0,1]]]);