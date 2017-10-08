webpackJsonp([0],{

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(592);


/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_js__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_index_less__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_index_less__);





class Index extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name
		};
	}
	but() {
		this.setState({ name: '你好，世界！' });
	}
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"h1",
				{ className: "h" },
				"\u5927\u54E5\u5927\u7684\u5C31\u662Fh1"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"h2",
				null,
				"\u8FD9\u91CC\u662Fh2\u5462\uFF1F"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"h3",
				null,
				"\u5199\u4E2Ah3\u77A7\u77A7\u4E86\uFF01"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"h4",
				null,
				"\u5F53\u6211h4\u662F\u6446\u8BBE\u5417\uFF1F"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"h5",
				null,
				"\u6709\u4E86h4\uFF0Ch5\u8FD8\u4F1A\u8FDC\u5417\uFF1F"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"h6",
				null,
				"\u6700\u5C0F\u7684h6\uFF0C\u5728\u6700\u540E\u7684\u4F4D\u7F6E\u4E0A\u4E86\u3002123456"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				null,
				"\u770B\u770B\u4F60\u662F\u8C01\u5462\uFF1F"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"p",
				null,
				this.state.name
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"p",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __webpack_require__(595) })
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"button",
				{ onClick: this.but.bind(this) },
				"\u6309\u94AE"
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_app_js__["a" /* default */], null),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"p",
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: __webpack_require__(596) })
			)
		);
	}
};

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Index, { name: "index" }), document.querySelector('#app'));

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			"div",
			{ className: "comapp" },
			"appComponent"
		);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;


/***/ }),

/***/ 594:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/dongda.jpg";

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/nk.jpg";

/***/ })

},[591]);