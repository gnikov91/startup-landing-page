webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TeamCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\nvar _jsxFileName = \"/Users/gnikov/Documents/Code/React JS/bussiness_landing_page/src/components/team-card.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\nfunction TeamCard(_ref) {\n  var src = _ref.src,\n      altText = _ref.altText,\n      title = _ref.title,\n      designation = _ref.designation,\n      social = _ref.social;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: src,\n    alt: altText,\n    sx: styles.memberThumb,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    xs: styles.infoWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    className: \"info__name\",\n    sx: styles.infoWrapper.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, title)));\n}\n_c = TeamCard;\nvar styles = {\n  card: {\n    display: 'flex',\n    alignItems: 'center',\n    flexDirection: 'column',\n    py: [0, null, 4, 5, 6],\n    px: [2, null, 6, 7],\n    transition: 'ease-in-out 0.4s',\n    borderRadius: '8px',\n    position: 'relative',\n    '&:hover': {\n      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],\n      '.info__name': {\n        color: 'primary'\n      },\n      '.info__designation': {\n        color: 'primary'\n      },\n      '.social__share': {\n        opacity: 1,\n        a: {\n          my: 0,\n          py: [0, null, 1]\n        }\n      }\n    }\n  },\n  memberThumb: {\n    width: ['70px', '80px', '100px', null, null, '130px'],\n    height: ['70px', '80px', '100px', null, null, '130px'],\n    flexShrink: 0,\n    border: '2px solid',\n    borderColor: 'primary',\n    borderRadius: '50%'\n  },\n  infoWrapper: {\n    width: '100%',\n    textAlign: 'center',\n    mt: [3, null, 4],\n    name: {\n      fontSize: [1, 2, 3, null, null, 4],\n      fontWeight: 'bold',\n      lineHeight: [1.25, 1.35],\n      transition: 'color 0.25s',\n      mb: 1\n    },\n    designation: {\n      fontSize: ['14px', null, null, 2],\n      fontWeight: 'body',\n      lineHeight: 'heading',\n      color: 'text',\n      transition: 'color 0.25s'\n    }\n  },\n  socialShare: {\n    position: ['relative', null, 'absolute'],\n    right: [0, null, 6, null, 4, 6],\n    bottom: [0, null, '18px', 5],\n    width: ['100%', null, 'auto'],\n    display: 'flex',\n    flexDirection: ['row', null, 'column'],\n    alignItems: 'center',\n    justifyContent: 'center',\n    transition: 'all 0.25s',\n    opacity: [1, null, 0],\n    pt: 2,\n    a: {\n      fontSize: [0, 1, null, 2],\n      color: ['text', null, 'primary'],\n      lineHeight: '1em',\n      my: [0, null, '-2px'],\n      px: 1,\n      transition: 'all 0.25s',\n      '&:hover': {\n        color: ['primary', null, 'text']\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"TeamCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzPzNiMzkiXSwibmFtZXMiOlsiVGVhbUNhcmQiLCJzcmMiLCJhbHRUZXh0IiwidGl0bGUiLCJkZXNpZ25hdGlvbiIsInNvY2lhbCIsInN0eWxlcyIsImNhcmQiLCJtZW1iZXJUaHVtYiIsImluZm9XcmFwcGVyIiwibmFtZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInB5IiwicHgiLCJ0cmFuc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJib3hTaGFkb3ciLCJjb2xvciIsIm9wYWNpdHkiLCJhIiwibXkiLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsInRleHRBbGlnbiIsIm10IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIm1iIiwic29jaWFsU2hhcmUiLCJyaWdodCIsImJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwicHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBZ0U7QUFBQSxNQUE1Q0MsR0FBNEMsUUFBNUNBLEdBQTRDO0FBQUEsTUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsV0FBdUIsUUFBdkJBLFdBQXVCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzlFLFNBQ0MscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFTixHQUFaO0FBQWlCLE9BQUcsRUFBRUMsT0FBdEI7QUFBK0IsTUFBRSxFQUFFSSxNQUFNLENBQUNFLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FB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QUFHWkMsVUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxNQUFWLEVBQWtCLENBQWxCLENBSEk7QUFJWmIsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLENBSks7QUFLWmIsV0FBTyxFQUFFLE1BTEc7QUFNWkUsaUJBQWEsRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsUUFBZCxDQU5IO0FBT1pELGNBQVUsRUFBRSxRQVBBO0FBUVowQixrQkFBYyxFQUFFLFFBUko7QUFTWnRCLGNBQVUsRUFBRSxXQVRBO0FBVVpLLFdBQU8sRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQVZHO0FBV1prQixNQUFFLEVBQUUsQ0FYUTtBQVlaakIsS0FBQyxFQUFFO0FBQ0ZTLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBUCxFQUFhLENBQWIsQ0FEUjtBQUVGWCxXQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLFNBQWYsQ0FGTDtBQUdGYSxnQkFBVSxFQUFFLEtBSFY7QUFJRlYsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxNQUFWLENBSkY7QUFLRlIsUUFBRSxFQUFFLENBTEY7QUFNRkMsZ0JBQVUsRUFBRSxXQU5WO0FBT0YsaUJBQVc7QUFDVkksYUFBSyxFQUFFLENBQUMsU0FBRCxFQUFZLElBQVosRUFBa0IsTUFBbEI7QUFERztBQVBUO0FBWlM7QUF2REMsQ0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3RlYW0tY2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSAndGhlbWUtdWknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XG5cdHJldHVybiAoXG5cdFx0PEJveCBzeD17c3R5bGVzLmNhcmR9PlxuXHRcdFx0PEltYWdlIHNyYz17c3JjfSBhbHQ9e2FsdFRleHR9IHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9IC8+XG5cdFx0XHQ8Qm94IHhzPXtzdHlsZXMuaW5mb1dyYXBwZXJ9PlxuXHRcdFx0XHQ8SGVhZGluZyBjbGFzc05hbWU9J2luZm9fX25hbWUnIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIubmFtZX0+XG5cdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L0JveD5cblx0KVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNhcmQ6IHtcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0cHk6IFswLCBudWxsLCA0LCA1LCA2XSxcblx0XHRweDogWzIsIG51bGwsIDYsIDddLFxuXHRcdHRyYW5zaXRpb246ICdlYXNlLWluLW91dCAwLjRzJyxcblx0XHRib3JkZXJSYWRpdXM6ICc4cHgnLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdCcmOmhvdmVyJzoge1xuXHRcdFx0Ym94U2hhZG93OiBbJ25vbmUnLCBudWxsLCAnMCA0cHggMTBweCByZ2JhKDM5LCA4MywgMTIzLCAwLjEyKSddLFxuXHRcdFx0Jy5pbmZvX19uYW1lJzoge1xuXHRcdFx0XHRjb2xvcjogJ3ByaW1hcnknLFxuXHRcdFx0fSxcblx0XHRcdCcuaW5mb19fZGVzaWduYXRpb24nOiB7XG5cdFx0XHRcdGNvbG9yOiAncHJpbWFyeScsXG5cdFx0XHR9LFxuXHRcdFx0Jy5zb2NpYWxfX3NoYXJlJzoge1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRhOiB7XG5cdFx0XHRcdFx0bXk6IDAsXG5cdFx0XHRcdFx0cHk6IFswLCBudWxsLCAxXSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblxuXHRtZW1iZXJUaHVtYjoge1xuXHRcdHdpZHRoOiBbJzcwcHgnLCAnODBweCcsICcxMDBweCcsIG51bGwsIG51bGwsICcxMzBweCddLFxuXHRcdGhlaWdodDogWyc3MHB4JywgJzgwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcblx0XHRmbGV4U2hyaW5rOiAwLFxuXHRcdGJvcmRlcjogJzJweCBzb2xpZCcsXG5cdFx0Ym9yZGVyQ29sb3I6ICdwcmltYXJ5Jyxcblx0XHRib3JkZXJSYWRpdXM6ICc1MCUnLFxuXHR9LFxuXHRpbmZvV3JhcHBlcjoge1xuXHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRtdDogWzMsIG51bGwsIDRdLFxuXHRcdG5hbWU6IHtcblx0XHRcdGZvbnRTaXplOiBbMSwgMiwgMywgbnVsbCwgbnVsbCwgNF0sXG5cdFx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdFx0XHRsaW5lSGVpZ2h0OiBbMS4yNSwgMS4zNV0sXG5cdFx0XHR0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxuXHRcdFx0bWI6IDEsXG5cdFx0fSxcblx0XHRkZXNpZ25hdGlvbjoge1xuXHRcdFx0Zm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxuXHRcdFx0Zm9udFdlaWdodDogJ2JvZHknLFxuXHRcdFx0bGluZUhlaWdodDogJ2hlYWRpbmcnLFxuXHRcdFx0Y29sb3I6ICd0ZXh0Jyxcblx0XHRcdHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXG5cdFx0fSxcblx0fSxcblx0c29jaWFsU2hhcmU6IHtcblx0XHRwb3NpdGlvbjogWydyZWxhdGl2ZScsIG51bGwsICdhYnNvbHV0ZSddLFxuXHRcdHJpZ2h0OiBbMCwgbnVsbCwgNiwgbnVsbCwgNCwgNl0sXG5cdFx0Ym90dG9tOiBbMCwgbnVsbCwgJzE4cHgnLCA1XSxcblx0XHR3aWR0aDogWycxMDAlJywgbnVsbCwgJ2F1dG8nXSxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleERpcmVjdGlvbjogWydyb3cnLCBudWxsLCAnY29sdW1uJ10sXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuXHRcdG9wYWNpdHk6IFsxLCBudWxsLCAwXSxcblx0XHRwdDogMixcblx0XHRhOiB7XG5cdFx0XHRmb250U2l6ZTogWzAsIDEsIG51bGwsIDJdLFxuXHRcdFx0Y29sb3I6IFsndGV4dCcsIG51bGwsICdwcmltYXJ5J10sXG5cdFx0XHRsaW5lSGVpZ2h0OiAnMWVtJyxcblx0XHRcdG15OiBbMCwgbnVsbCwgJy0ycHgnXSxcblx0XHRcdHB4OiAxLFxuXHRcdFx0dHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG5cdFx0XHQnJjpob3Zlcic6IHtcblx0XHRcdFx0Y29sb3I6IFsncHJpbWFyeScsIG51bGwsICd0ZXh0J10sXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0sXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/team-card.js\n");

/***/ })

})