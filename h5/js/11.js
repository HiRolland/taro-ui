(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"150":function(e,t,a){},"17":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),l=a(45),o=_interopRequireDefault(a(80)),i=_interopRequireDefault(a(55)),u=_interopRequireDefault(a(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(150);var f=function(e){function BadgePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BadgePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BadgePage.__proto__||Object.getPrototypeOf(BadgePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BadgePage,n.default.Component),r(BadgePage,[{"key":"render","value":function render(){return n.default.createElement(l.View,{"className":"page"},n.default.createElement(u.default,{"title":"Badge 徽标"}),n.default.createElement(l.View,{"className":"doc-body"},n.default.createElement(l.View,{"className":"panel"},n.default.createElement(l.View,{"className":"panel__title"},"数字"),n.default.createElement(l.View,{"className":"panel__content"},n.default.createElement(l.View,{"className":"badge-item"},n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"value":"10","maxValue":"99"},n.default.createElement(i.default,{"size":"small","circle":!0},"按钮"))),n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"value":"100","maxValue":"99"},n.default.createElement(i.default,{"size":"small"},"按钮")))))),n.default.createElement(l.View,{"className":"panel"},n.default.createElement(l.View,{"className":"panel__title"},"小红点"),n.default.createElement(l.View,{"className":"panel__content"},n.default.createElement(l.View,{"className":"badge-item"},n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"dot":!0},n.default.createElement(i.default,{"size":"small","circle":!0},"按钮"))),n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"dot":!0},n.default.createElement(i.default,{"size":"small"},"按钮")))))),n.default.createElement(l.View,{"className":"panel"},n.default.createElement(l.View,{"className":"panel__title"},"文本"),n.default.createElement(l.View,{"className":"panel__content"},n.default.createElement(l.View,{"className":"badge-item"},n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"value":"NEW"},n.default.createElement(i.default,{"size":"small","circle":!0},"按钮"))),n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"value":"NEW"},n.default.createElement(i.default,{"size":"small"},"按钮")))))),n.default.createElement(l.View,{"className":"panel"},n.default.createElement(l.View,{"className":"panel__title"},"省略号"),n.default.createElement(l.View,{"className":"panel__content"},n.default.createElement(l.View,{"className":"badge-item"},n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"value":"···"},n.default.createElement(i.default,{"size":"small","circle":!0},"按钮"))),n.default.createElement(l.View,{"className":"subitem"},n.default.createElement(o.default,{"value":"···"},n.default.createElement(i.default,{"size":"small"},"按钮"))))))))}}]),BadgePage}();t.default=f},"47":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=a(1),l=(_interopRequireDefault(n),_interopRequireDefault(a(0))),o=_interopRequireDefault(a(46)),i=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(48);var u=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,n.Component),r(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(i.View,{"className":"doc-header"},l.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=u,u.defaultProps={"title":"标题"},u.propTypes={"title":o.default.string}},"48":function(e,t,a){},"55":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),l=a(45),o=_interopRequireDefault(a(46)),i=_interopRequireDefault(a(56));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(59);var u={"normal":"normal","small":"small"},f={"primary":"primary","secondary":"secondary"},c=function(e){function AtButton(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,n.default.Component),r(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.size,a=void 0===t?"normal":t,r=e.type,o=void 0===r?"":r,c=e.circle,s=e.loading,d=e.disabled,p=["at-button"],m=u[a]||"",b=d?"at-button--disabled":"",_=f[o]?"at-button--"+o:"",y=c?"at-button--circle":"";p.push("at-button--"+m,_,y,b),p=p.filter(function(e){return""!==e});var h="primary"===o?"#fff":"#6190E8",w="small"===a?"16":"18",g=void 0;return s&&(g=n.default.createElement(l.View,{"className":"at-button__icon"},n.default.createElement(i.default,{"color":h,"size":w})),p.push("at-button--icon")),n.default.createElement(l.View,{"className":p,"onClick":this.onClick.bind(this)},g,n.default.createElement(l.View,{"className":"at-button__text"},this.props.children))}}]),AtButton}();t.default=c,c.defaultProps={"size":"normal","type":"","circle":!1,"loading":!1,"disabled":!1},c.propTypes={"size":o.default.oneOf(["normal","small"]),"type":o.default.oneOf(["primary","secondary"]),"circle":o.default.bool,"loading":o.default.bool,"disabled":o.default.bool}},"56":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=(_interopRequireDefault(a(1)),_interopRequireDefault(a(0))),l=_interopRequireDefault(a(46)),o=a(45);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(57);var i=function(e){function AtLoading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,n.default.Component),r(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,a=e.size,r={"width":a+"px","height":a+"px"},l={"border":"1px solid "+t,"border-color":t+" transparent transparent transparent"},i=Object.assign({},l,r);return n.default.createElement(o.View,{"className":"at-loading","style":r},n.default.createElement(o.View,{"className":"at-loading__ring","style":i}),n.default.createElement(o.View,{"className":"at-loading__ring","style":i}),n.default.createElement(o.View,{"className":"at-loading__ring","style":i}))}}]),AtLoading}();i.defaultProps={"size":"18","color":"#fff"},i.propTypes={"size":l.default.oneOfType([l.default.string,l.default.number]),"color":l.default.oneOfType([l.default.string,l.default.number])},t.default=i},"57":function(e,t,a){},"59":function(e,t,a){},"80":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),n=(_interopRequireDefault(a(1)),_interopRequireDefault(a(46))),l=_interopRequireDefault(a(0)),o=a(45),i=_interopRequireDefault(a(91));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(81);var u=function(e){function AtBadge(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtBadge);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtBadge.__proto__||Object.getPrototypeOf(AtBadge)).apply(this,arguments));return e.state={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtBadge,l.default.Component),r(AtBadge,[{"key":"formatValue","value":function formatValue(e,t){if(""===e||null===e)return"";var a=+e;return i.default.isNaN(a)?e:a>t?t+"+":a}},{"key":"render","value":function render(){var e=this.props,t=e.dot,a=e.value,r=e.maxValue,n=this.formatValue(a,r);return l.default.createElement(o.View,{"className":["at-badge"]},this.props.children,t?l.default.createElement(o.View,{"className":"at-badge__dot"}):""!==n&&l.default.createElement(o.View,{"className":"at-badge__num"},n))}}]),AtBadge}();t.default=u,u.defaultProps={"dot":!1,"value":"","maxValue":99},u.propTypes={"dot":n.default.bool,"value":n.default.string,"maxValue":n.default.number}},"81":function(e,t,a){}}]);