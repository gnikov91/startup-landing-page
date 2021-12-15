webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FeatureCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/gnikov/Documents/Code/React JS/bussiness_landing_page/src/components/feature-card.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\nfunction FeatureCard(_ref) {\n  var src = _ref.src,\n      _ref$altText = _ref.altText,\n      altText = _ref$altText === void 0 ? 'default alt text' : _ref$altText,\n      title = _ref.title,\n      text = _ref.text;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: src,\n    alt: altText,\n    sx: styles.img,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    sx: styles.wrapper.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    sx: styles.wrapper.subTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, text)));\n}\n_c = FeatureCard;\nvar styles = {\n  card: {\n    display: 'flex',\n    alignItems: 'flex-start',\n    mb: -1\n  },\n  img: {\n    width: ['70px', null, null, '80px', '90px', 'auto'],\n    height: 'auto',\n    flexShrink: 0,\n    mr: [2, 3, null, null, 4, 5],\n    ml: -2\n  },\n  wrapper: {\n    width: '100%',\n    display: 'flex',\n    flexDirection: 'column',\n    mt: '-5px',\n    title: {\n      fontSize: [2, 3],\n      color: 'heading_secondary',\n      lineHeight: 1.4,\n      fontWeight: 700,\n      mb: ['10px', null, '15px']\n    },\n    subTitle: {\n      fontSize: [1, '15px'],\n      fontWeight: 400,\n      lineHeight: '1.9'\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"FeatureCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzPzE4NjAiXSwibmFtZXMiOlsiRmVhdHVyZUNhcmQiLCJzcmMiLCJhbHRUZXh0IiwidGl0bGUiLCJ0ZXh0Iiwic3R5bGVzIiwiY2FyZCIsImltZyIsIndyYXBwZXIiLCJzdWJUaXRsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWIiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiZmxleERpcmVjdGlvbiIsIm10IiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQUtaO0FBQUEsTUFKRkMsR0FJRSxRQUpGQSxHQUlFO0FBQUEsMEJBSEZDLE9BR0U7QUFBQSxNQUhGQSxPQUdFLDZCQUhRLGtCQUdSO0FBQUEsTUFGRkMsS0FFRSxRQUZGQSxLQUVFO0FBQUEsTUFERkMsSUFDRSxRQURGQSxJQUNFO0FBQ0YsU0FDQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVMLEdBQVo7QUFBaUIsT0FBRyxFQUFFQyxPQUF0QjtBQUErQixNQUFFLEVBQUVHLE1BQU0sQ0FBQ0UsR0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFFSCxNQUFNLENBQUNHLE9BQVAsQ0FBZUwsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0EsS0FBcEMsQ0FERCxFQUVDLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFRSxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQ0wsSUFBcEMsQ0FGRCxDQUZELENBREQ7QUFTQTtLQWZ1QkosVztBQWlCeEIsSUFBTUssTUFBTSxHQUFHO0FBQ2RDLE1BQUksRUFBRTtBQUNMSSxXQUFPLEVBQUUsTUFESjtBQUVMQyxjQUFVLEVBQUUsWUFGUDtBQUdMQyxNQUFFLEVBQUUsQ0FBQztBQUhBLEdBRFE7QUFPZEwsS0FBRyxFQUFFO0FBQ0pNLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxNQUFyQyxDQURIO0FBRUpDLFVBQU0sRUFBRSxNQUZKO0FBR0pDLGNBQVUsRUFBRSxDQUhSO0FBSUpDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FKQTtBQUtKQyxNQUFFLEVBQUUsQ0FBQztBQUxELEdBUFM7QUFjZFQsU0FBTyxFQUFFO0FBQ1JLLFNBQUssRUFBRSxNQURDO0FBRVJILFdBQU8sRUFBRSxNQUZEO0FBR1JRLGlCQUFhLEVBQUUsUUFIUDtBQUlSQyxNQUFFLEVBQUUsTUFKSTtBQUtSaEIsU0FBSyxFQUFFO0FBQ05pQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURKO0FBRU5DLFdBQUssRUFBRSxtQkFGRDtBQUdOQyxnQkFBVSxFQUFFLEdBSE47QUFJTkMsZ0JBQVUsRUFBRSxHQUpOO0FBS05YLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZjtBQUxFLEtBTEM7QUFhUkgsWUFBUSxFQUFFO0FBQ1RXLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREQ7QUFFVEcsZ0JBQVUsRUFBRSxHQUZIO0FBR1RELGdCQUFVLEVBQUU7QUFISDtBQWJGO0FBZEssQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2ZlYXR1cmUtY2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBJbWFnZSwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkKHtcblx0c3JjLFxuXHRhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxuXHR0aXRsZSxcblx0dGV4dCxcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG5cdFx0XHQ8SW1hZ2Ugc3JjPXtzcmN9IGFsdD17YWx0VGV4dH0gc3g9e3N0eWxlcy5pbWd9IC8+XG5cdFx0XHQ8Qm94IHN4PXtzdHlsZXMud3JhcHBlcn0+XG5cdFx0XHRcdDxIZWFkaW5nIHN4PXtzdHlsZXMud3JhcHBlci50aXRsZX0+e3RpdGxlfTwvSGVhZGluZz5cblx0XHRcdFx0PFRleHQgc3g9e3N0eWxlcy53cmFwcGVyLnN1YlRpdGxlfT57dGV4dH08L1RleHQ+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0JveD5cblx0KVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNhcmQ6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0YWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuXHRcdG1iOiAtMSxcblx0fSxcblxuXHRpbWc6IHtcblx0XHR3aWR0aDogWyc3MHB4JywgbnVsbCwgbnVsbCwgJzgwcHgnLCAnOTBweCcsICdhdXRvJ10sXG5cdFx0aGVpZ2h0OiAnYXV0bycsXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRtcjogWzIsIDMsIG51bGwsIG51bGwsIDQsIDVdLFxuXHRcdG1sOiAtMixcblx0fSxcblx0d3JhcHBlcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXHRcdG10OiAnLTVweCcsXG5cdFx0dGl0bGU6IHtcblx0XHRcdGZvbnRTaXplOiBbMiwgM10sXG5cdFx0XHRjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5Jyxcblx0XHRcdGxpbmVIZWlnaHQ6IDEuNCxcblx0XHRcdGZvbnRXZWlnaHQ6IDcwMCxcblx0XHRcdG1iOiBbJzEwcHgnLCBudWxsLCAnMTVweCddLFxuXHRcdH0sXG5cblx0XHRzdWJUaXRsZToge1xuXHRcdFx0Zm9udFNpemU6IFsxLCAnMTVweCddLFxuXHRcdFx0Zm9udFdlaWdodDogNDAwLFxuXHRcdFx0bGluZUhlaWdodDogJzEuOScsXG5cdFx0fSxcblx0fSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/feature-card.js\n");

/***/ })

})