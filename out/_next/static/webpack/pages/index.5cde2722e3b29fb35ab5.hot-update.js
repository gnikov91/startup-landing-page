webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkFlow; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ \"./src/assets/patternBG.png\");\n/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ \"./src/assets/arrowOdd.svg\");\n/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ \"./src/assets/arrowEven.svg\");\n/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/gnikov/Documents/Code/React JS/bussiness_landing_page/src/sections/workflow.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\nvar data = [{\n  id: 1,\n  title: 'Set disbursement Instructions',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 2,\n  title: 'Assembly retrieves funds from your account',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 3,\n  title: 'Assembly initiates disbursement',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}, {\n  id: 4,\n  title: 'Customer receives funds payment',\n  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'\n}];\nfunction WorkFlow() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: styles.workflow,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"WHATS THE FUNCTION\",\n    title: \"Meet the feature of our product\",\n    isWhite: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, data.map(function (item) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.card,\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: styles.iconBox,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 8\n      }\n    }, \"0\".concat(item.id)));\n  }))));\n}\n_c = WorkFlow;\nvar styles = {\n  workflow: {\n    backgroundColor: 'primary',\n    backgroundImage: \"url(\".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, \")\"),\n    backgroundRepeat: \"no-repeat\",\n    backgroundPosition: 'center center',\n    backgroundSize: 'cover',\n    position: 'relative',\n    py: [8, null, 9, null, null, 10]\n  },\n  grid: {\n    mb: -1,\n    pt: 0,\n    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']\n  },\n  card: {\n    display: 'flex',\n    flexDirection: 'column',\n    position: 'relative',\n    textAlign: ['center', null, 'left'],\n    width: ['100%', '80%', '100%'],\n    mx: ['auto'],\n    px: [4, null, null, 0],\n    '&::before': {\n      position: 'absolute',\n      content: '\"\"',\n      top: 0,\n      left: [0, null, null, null, null, 72, null, 90],\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: 'center center',\n      width: 215,\n      height: 60,\n      '@media screen and (max-width:1220px)': {\n        display: 'none'\n      }\n    },\n    '&:nth-of-type(2n-1)::before': {\n      backgroundImage: \"url(\".concat(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a, \")\")\n    },\n    '&:nth-of-type(2n)::before': {\n      backgroundImage: \"url(\".concat(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a, \")\"),\n      top: 17\n    },\n    '&:last-child::before': {\n      display: 'none'\n    }\n  },\n  iconBox: {\n    width: ['50px', null, '60px', null, null, '70px'],\n    height: ['50px', null, '60px', null, null, '70px'],\n    flexShrink: 0,\n    borderRadius: [15, null, 23, null, null, 30],\n    backgroundColor: 'white',\n    display: 'flex',\n    alignItems: 'center',\n    mb: [5, null, null, null, null, 6],\n    mx: ['auto', null, 0],\n    fontSize: [6, null, 7, null, null, '30px'],\n    fontWeight: 700,\n    justifyContent: 'center',\n    color: '#234582'\n  },\n  wrapper: {\n    width: '100%',\n    display: 'flex',\n    flexDirection: 'column',\n    mt: '-5px',\n    title: {\n      fontSize: [3, null, 4, null, null, 5],\n      color: 'white',\n      lineHeight: [1.4, null, null, null, null, 1.55],\n      pr: [0, null, null, null, null, 2],\n      mb: [2, 3]\n    },\n    subTitle: {\n      fontSize: 1,\n      fontWeight: 400,\n      lineHeight: [1.85, null, null, 1.9, 2],\n      color: 'white',\n      opacity: 0.75,\n      pr: [0, null, null, null, null, 5]\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"WorkFlow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzPzM2MzkiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwidGl0bGUiLCJ0ZXh0IiwiV29ya0Zsb3ciLCJzdHlsZXMiLCJ3b3JrZmxvdyIsImdyaWQiLCJtYXAiLCJpdGVtIiwiY2FyZCIsImljb25Cb3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQYXR0ZXJuQkciLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJwb3NpdGlvbiIsInB5IiwibWIiLCJwdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm14IiwicHgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiZmxleFNocmluayIsImJvcmRlclJhZGl1cyIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwid3JhcHBlciIsIm10IiwibGluZUhlaWdodCIsInByIiwic3ViVGl0bGUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWjtBQUNDQyxJQUFFLEVBQUUsQ0FETDtBQUVDQyxPQUFLLEVBQUUsK0JBRlI7QUFHQ0MsTUFBSSxFQUNIO0FBSkYsQ0FEWSxFQU9aO0FBQ0NGLElBQUUsRUFBRSxDQURMO0FBRUNDLE9BQUssRUFBRSw0Q0FGUjtBQUdDQyxNQUFJLEVBQ0g7QUFKRixDQVBZLEVBYVo7QUFDQ0YsSUFBRSxFQUFFLENBREw7QUFFQ0MsT0FBSyxFQUFFLGlDQUZSO0FBR0NDLE1BQUksRUFDSDtBQUpGLENB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UkMsU0FBSyxFQUFFO0FBYkMsR0FoRUs7QUErRWRDLFNBQU8sRUFBRTtBQUNSaEIsU0FBSyxFQUFFLE1BREM7QUFFUkgsV0FBTyxFQUFFLE1BRkQ7QUFHUkMsaUJBQWEsRUFBRSxRQUhQO0FBSVJtQixNQUFFLEVBQUUsTUFKSTtBQUtSMUMsU0FBSyxFQUFFO0FBQ05xQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLENBQXpCLENBREo7QUFFTkcsV0FBSyxFQUFFLE9BRkQ7QUFHTkcsZ0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixJQUE5QixDQUhOO0FBSU5DLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixDQUE1QixDQUpFO0FBS04xQixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUxFLEtBTEM7QUFhUjJCLFlBQVEsRUFBRTtBQUNUUixjQUFRLEVBQUUsQ0FERDtBQUVUQyxnQkFBVSxFQUFFLEdBRkg7QUFHVEssZ0JBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUhIO0FBSVRILFdBQUssRUFBRSxPQUpFO0FBS1RNLGFBQU8sRUFBRSxJQUxBO0FBTVRGLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixDQUE1QjtBQU5LO0FBYkY7QUEvRUssQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy93b3JrZmxvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJ1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcidcblxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZydcbmltcG9ydCBBcnJvd09kZCBmcm9tICdhc3NldHMvYXJyb3dPZGQuc3ZnJ1xuaW1wb3J0IEFycm93RXZlbiBmcm9tICdhc3NldHMvYXJyb3dFdmVuLnN2ZydcblxuY29uc3QgZGF0YSA9IFtcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxuXHRcdHRleHQ6XG5cdFx0XHQnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXG5cdFx0dGV4dDpcblx0XHRcdCdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXG5cdFx0dGV4dDpcblx0XHRcdCdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcblx0fSxcblx0e1xuXHRcdGlkOiA0LFxuXHRcdHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXG5cdFx0dGV4dDpcblx0XHRcdCdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcblx0fSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya0Zsb3coKSB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gc3g9e3N0eWxlcy53b3JrZmxvd30+XG5cdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHQ8U2VjdGlvbkhlYWRlclxuXHRcdFx0XHRcdHNsb2dhbj0nV0hBVFMgVEhFIEZVTkNUSU9OJ1xuXHRcdFx0XHRcdHRpdGxlPSdNZWV0IHRoZSBmZWF0dXJlIG9mIG91ciBwcm9kdWN0J1xuXHRcdFx0XHRcdGlzV2hpdGU9e3RydWV9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cblx0XHRcdFx0XHR7ZGF0YS5tYXAoKGl0ZW0pID0+IChcblx0XHRcdFx0XHRcdDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuXHRcdFx0XHRcdFx0XHQ8Qm94IHN4PXtzdHlsZXMuaWNvbkJveH0+e2AwJHtpdGVtLmlkfWB9PC9Cb3g+XG5cdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0d29ya2Zsb3c6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5Jyxcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG5cdFx0YmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG5cdFx0YmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG5cdFx0YmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0cHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG5cdH0sXG5cdGdyaWQ6IHtcblx0XHRtYjogLTEsXG5cdFx0cHQ6IDAsXG5cdFx0Z3JpZEdhcDogW1xuXHRcdFx0JzM1cHggMCcsXG5cdFx0XHRudWxsLFxuXHRcdFx0JzQ1cHggMzBweCcsXG5cdFx0XHRudWxsLFxuXHRcdFx0JzUwcHggMjVweCcsXG5cdFx0XHRudWxsLFxuXHRcdFx0bnVsbCxcblx0XHRcdCc1MHB4IDY1cHgnLFxuXHRcdF0sXG5cdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogW1xuXHRcdFx0J3JlcGVhdCgxLDFmciknLFxuXHRcdFx0bnVsbCxcblx0XHRcdCdyZXBlYXQoMiwxZnIpJyxcblx0XHRcdG51bGwsXG5cdFx0XHQncmVwZWF0KDQsMWZyKScsXG5cdFx0XSxcblx0fSxcblx0Y2FyZDoge1xuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHR0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcblx0XHR3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG5cdFx0bXg6IFsnYXV0byddLFxuXHRcdHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG5cdFx0JyY6OmJlZm9yZSc6IHtcblx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0Y29udGVudDogJ1wiXCInLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG5cdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuXHRcdFx0d2lkdGg6IDIxNSxcblx0XHRcdGhlaWdodDogNjAsXG5cdFx0XHQnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0JyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcblx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxuXHRcdH0sXG5cdFx0JyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXG5cdFx0XHR0b3A6IDE3LFxuXHRcdH0sXG5cdFx0JyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xuXHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdH0sXG5cdH0sXG5cblx0aWNvbkJveDoge1xuXHRcdHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG5cdFx0aGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG5cdFx0ZmxleFNocmluazogMCxcblx0XHRib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG5cdFx0bXg6IFsnYXV0bycsIG51bGwsIDBdLFxuXHRcdGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcblx0XHRmb250V2VpZ2h0OiA3MDAsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdGNvbG9yOiAnIzIzNDU4MicsXG5cdH0sXG5cdHdyYXBwZXI6IHtcblx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0XHRtdDogJy01cHgnLFxuXHRcdHRpdGxlOiB7XG5cdFx0XHRmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuXHRcdFx0Y29sb3I6ICd3aGl0ZScsXG5cdFx0XHRsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcblx0XHRcdHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG5cdFx0XHRtYjogWzIsIDNdLFxuXHRcdH0sXG5cblx0XHRzdWJUaXRsZToge1xuXHRcdFx0Zm9udFNpemU6IDEsXG5cdFx0XHRmb250V2VpZ2h0OiA0MDAsXG5cdFx0XHRsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcblx0XHRcdGNvbG9yOiAnd2hpdGUnLFxuXHRcdFx0b3BhY2l0eTogMC43NSxcblx0XHRcdHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG5cdFx0fSxcblx0fSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/workflow.js\n");

/***/ })

})